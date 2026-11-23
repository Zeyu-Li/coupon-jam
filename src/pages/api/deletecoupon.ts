import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import { Prisma } from "@prisma/client";
import { prisma } from "../../server/db/client";
import { requireOwnStore } from "../../server/common/require-own-store";

const bodySchema = z.object({ slug: z.string() });

const deleteCoupon = async (req: NextApiRequest, res: NextApiResponse) => {
  const store = await requireOwnStore(req, res);
  if (!store) return;

  const body = bodySchema.safeParse(req.body);
  if (!body.success) {
    res.status(400).json({ error: "Invalid coupon" });
    return;
  }

  try {
    // Scoped to the caller's store, so only the owner can expire a coupon.
    const coupon = await prisma.coupon.update({
      where: { slug: body.data.slug, storeId: store.id },
      data: { isExpired: true },
    });
    res.status(200).json(coupon);
  } catch (err) {
    if (
      err instanceof Prisma.PrismaClientKnownRequestError &&
      err.code === "P2025"
    ) {
      res.status(404).json({ error: "Coupon not found" });
      return;
    }
    console.log(err);
    res.status(500).json({ error: "could not be deleted" });
  }
};

export default deleteCoupon;
