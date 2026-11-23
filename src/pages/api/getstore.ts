import type { NextApiRequest, NextApiResponse } from "next";
import { getServerAuthSession } from "../../server/common/get-server-auth-session";
import { prisma } from "../../server/db/client";

const readStore = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerAuthSession({ req, res });
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
