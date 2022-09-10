import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../server/db/client";

const deleteStore = async (req: NextApiRequest, res: NextApiResponse) => {
    const { name } = req.body;
    const coupon = await prisma.store.delete({
        where: {
        name: name,
        },
    });
    res.status(200).json(coupon);
}

export default deleteStore;