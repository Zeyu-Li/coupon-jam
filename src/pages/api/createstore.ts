import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../server/db/client";
import { getSession } from "next-auth/react";


const createStore = async (req: NextApiRequest, res: NextApiResponse) => {
    // console.log("Hello");
    // console.log(req.body);
    // console.log("goodbye");
    const { name, address } = req.body;

    const session = await getSession({ req });
    console.log(session)
    if (!session) {
      res.writeHead(302, { Location: "/user" });
      res.end();
      return {};
    }
    // return {
    //   props: {
    //     user: session.user,
    //   },
    // };
    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });
    const store = await prisma.store.create({
        data: {
          name: name,
          address: address,
          userId: user.id
          // User: session.user
        },
      })
    res.status(200).json(store);
}
    export default createStore;