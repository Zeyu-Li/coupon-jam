import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { prisma } from "../../server/db/client";

const readStore = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });
  if (!session) {
    res.writeHead(302, { Location: "/login" });
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
      email: session?.user?.email,
    },
  });
  const store = await prisma.store.findUnique({
    where: {
      userId: user?.id,
    },
  });
  res.status(200).json(store);
};

export default readStore;
