import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../server/db/client";

const deleteCoupon = async (req: NextApiRequest, res: NextApiResponse) => {
  const { slug } = req.body;
  try {
    const coupon = await prisma.coupon.update({
      where: {
        slug: slug,
      },
      data: {
        isExpired: true,
      },
    });
    res.status(200).json(coupon);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "could not be deleted" });
  }
};

export default deleteCoupon;
