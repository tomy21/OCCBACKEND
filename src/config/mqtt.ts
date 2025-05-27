import mqtt from "mqtt";
import dotenv from "dotenv";
dotenv.config();

export const mqttClient = mqtt.connect(
  process.env.MQTT_BROKER || "mqtt://localhost:1883"
);

mqttClient.on("connect", () => {
  console.log("✅ Connected to MQTT Broker");
});
