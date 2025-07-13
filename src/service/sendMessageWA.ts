import axios from "axios";
import FormData from "form-data";
import fs from "fs";
import path from "path";

export async function sendFonnteMessage({
  noHandphone,
  message,
}: {
  noHandphone: string;
  message: string;
}) {
  const form = new FormData();

  form.append("target", noHandphone);
  form.append("message", message);
  //   form.append("url", "https://md.fonnte.com/images/wa-logo.png");
  //   form.append("filename", "filename");
  //   form.append("schedule", "0");
  //   form.append("typing", "false");
  //   form.append("delay", "2");
  //   form.append("countryCode", "62");
  //   form.append("location", "-7.983908, 112.621391");
  //   form.append("followup", "0");

  //   const filePath = path.join(__dirname, "..", "assets", "localfile.jpg"); // <-- pastikan path benar
  //   form.append("file", fs.createReadStream(filePath));

  try {
    const response = await axios.post("https://api.fonnte.com/send", form, {
      headers: {
        ...form.getHeaders(),
        Authorization: process.env.TOKEN_FONTEE || "TOKEN_KAMU_DI_SINI",
      },
      maxBodyLength: Infinity,
    });

    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || error.message);
  }
}
