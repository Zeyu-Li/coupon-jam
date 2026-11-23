import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import { prisma } from "../../server/db/client";
import { requireOwnStore } from "../../server/common/require-own-store";

const bodySchema = z.object({
  description: z.string(),
  code: z.string(),
});

const createCoupon = async (req: NextApiRequest, res: NextApiResponse) => {
  const store = await requireOwnStore(req, res);
  if (!store) return;

  const body = bodySchema.safeParse(req.body);
  if (!body.success) {
    res.status(400).json({ error: "Invalid coupon" });
    return;
  }

  const coupon = await prisma.coupon.create({
    data: {
      description: body.data.description,
      code: body.data.code,
      storeId: store.id,
      storeName: store.name,
    },
  });
  res.status(200).json(coupon);
};
export default createCoupon;
