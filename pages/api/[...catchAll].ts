import { Backend } from "../../src/main";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  return new Promise(async (resolve, reject) => {
    const { listener } = await Backend.getListener();
    try {
      listener(req, res);
      res.on("finish", resolve);
    } catch (error) {
      console.error(error);
    }
  });
};
