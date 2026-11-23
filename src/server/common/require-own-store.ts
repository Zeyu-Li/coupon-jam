import type { Store } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../db/client";
import { getServerAuthSession } from "./get-server-auth-session";

/**
 * Returns the signed-in user's store. Otherwise responds with 401 (not signed in)
 * or 403 (no store) and returns null, so the caller just returns.
 */
export const requireOwnStore = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<Store | null> => {
  const session = await getServerAuthSession({ req, res });
  const userId = session?.user?.id;
  if (!userId) {
    res.status(401).json({ error: "You must be signed in" });
    return null;
  }
  const store = await prisma.store.findUnique({ where: { userId } });
  if (!store) {
    res.status(403).json({ error: "You need a store to manage coupons" });
    return null;
  }
  return store;
};
