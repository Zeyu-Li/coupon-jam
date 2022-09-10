import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../server/db/client";

const readCoupon = async (req: NextApiRequest, res: NextApiResponse) => {
    const { slug } = req.body;
    const coupon = await prisma.coupon.findUnique({
        where: {
            slug: slug,
        },
    });
    res.status(200).json(coupon);
};

export default readCoupon;