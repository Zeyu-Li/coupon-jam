import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../server/db/client";

const getCoupon = async (req: NextApiRequest, res: NextApiResponse) => {
  const coupon = await prisma.coupon.findMany({
    take: 50,
  });
  res.status(200).json(coupon);
};

export default getCoupon;
