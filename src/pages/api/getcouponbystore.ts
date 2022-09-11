import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../server/db/client";

const getByStoreCoupon = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { storeId } = req.body;
    const coupon = await prisma.coupon.findMany({
      take: 50,
      where: {
        storeId: storeId,
      },
    });
    res.status(200).json(coupon);
  } catch (err) {
    res.status(500).json({ error: "could not be retrieved" });
  }
};

export default getByStoreCoupon;
