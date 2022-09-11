import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../server/db/client";
import { getSession } from "next-auth/react";

const createCoupon = async (req: NextApiRequest, res: NextApiResponse) => {
  // console.log("Hello");
  // console.log(req.body);
  // console.log("goodbye");
  const { description, code } = req.body;

  const session = await getSession({ req });
  console.log(session);
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
  const store = await prisma.store.findUnique({
    where: {
      userId: session?.user?.id,
    },
  });
  const coupon = await prisma.coupon.create({
    data: {
      description: description,
      code: code,
      storeId: store.id,
      storeName: store.name,
      // User: session.user
    },
  });
  res.status(200).json(coupon);
};
export default createCoupon;
