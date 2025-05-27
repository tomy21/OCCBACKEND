import { mqttClient } from "../config/mqtt";
import { redisClient } from "../config/redis";

const AGENTS = ["1", "2", "3", "4", "5"];

export async function handleIncomingCall(caller: string) {
  for (const csId of AGENTS) {
    const busy = await redisClient.get(`cs:${csId}`);
    if (busy !== "true") {
      await redisClient.set(`cs:${csId}`, "true");
      mqttClient.publish(`cs/${csId}/incoming`, JSON.stringify({ caller }));
      console.log(`📞 ${caller} dial ke CS-${csId}`);
      return { status: "connected", csId };
    }
  }

  await redisClient.rpush("queue", caller);
  console.log(`📥 ${caller} dimasukkan ke antrian`);
  return { status: "queued" };
}

export async function endCall(csId: string) {
  await redisClient.set(`cs:${csId}`, "false");

  const nextCaller = await redisClient.lpop("queue");
  if (nextCaller) {
    await redisClient.set(`cs:${csId}`, "true");
    mqttClient.publish(
      `cs/${csId}/incoming`,
      JSON.stringify({ caller: nextCaller })
    );
    console.log(`➡️ ${nextCaller} dari antrian ke CS-${csId}`);
    return { status: "transferred", nextCaller };
  }

  console.log(`🟢 CS-${csId} idle`);
  return { status: "idle" };
}
