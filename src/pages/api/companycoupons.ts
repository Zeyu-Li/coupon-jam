import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../server/db/client";

const getCompanyCoupons = async (req: NextApiRequest, res: NextApiResponse) => {
    const { storeId } = req.body;  
  const coupon = await prisma.coupon.findMany({
    where: {
        storeId: storeId,
  }});
  res.status(200).json(coupon);
};

export default getCompanyCoupons;
