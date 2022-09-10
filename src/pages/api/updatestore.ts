import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../server/db/client";

const updateStore = async (req: NextApiRequest, res: NextApiResponse) => {
    const { name, address } = req.body;
    const coupon = await prisma.store.update({
        where: {
            name: name,
        },
        data: {
            address: address,
        },
    });
    res.status(200).json(coupon);
};

export default updateStore;