// Import Library
import axios from "axios";

// Fetch Data Features Game
export async function getDataFeaturesGame() {
  // API Settings
  const ROOT_API = process.env.NEXT_PUBLIC_API_PRO,
    API_VERSION = "api/v1-player",
    URL_API = "player/landing";

  const reqServer = await axios.get(`${ROOT_API}/${API_VERSION}/${URL_API}`),
    res = reqServer.data;

  return res.data.data;
}
