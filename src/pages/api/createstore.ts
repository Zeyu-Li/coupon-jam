import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../server/db/client";

const createStore = async (req: NextApiRequest, res: NextApiResponse) => {
    // console.log("Hello");
    // console.log(req.body);
    // console.log("goodbye");
    const { name, address } = req.body;

    const store = await prisma.store.create({
        data: {
          name: name,
          address: address
        },
      })
    res.status(200).json(store);
}
    export default createStore;