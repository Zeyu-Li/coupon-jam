import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../server/db/client";

const readStore = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.body;
    const coupon = await prisma.store.findUnique({
        where: {
            id: id,
        },
    });
    res.status(200).json(coupon);
};

export default readStore;