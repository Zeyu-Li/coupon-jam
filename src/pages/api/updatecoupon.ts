import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../server/db/client";

const updateCoupon = async (req: NextApiRequest, res: NextApiResponse) => {
    const { description, code, slug } = req.body;
    const coupon = await prisma.coupon.update({
        where: {
            slug: slug,
        },
        data: {
            description: description,
            code: code,
        },
    });
    res.status(200).json(coupon);
};

export default updateCoupon;