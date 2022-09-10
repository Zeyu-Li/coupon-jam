import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../server/db/client";

const readStore = async (req: NextApiRequest, res: NextApiResponse) => {
    const { name } = req.body;
    const coupon = await prisma.store.findUnique({
        where: {
            name: name,
        },
    });
    res.status(200).json(coupon);
};

export default readStore;