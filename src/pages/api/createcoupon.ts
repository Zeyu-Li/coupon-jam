import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../server/db/client";

const createCoupon = async (req: NextApiRequest, res: NextApiResponse) => {
    // console.log("Hello");
    // console.log(req.body);
    // console.log("goodbye");
    const { description, code } = req.body;

    const coupon = await prisma.coupon.create({
        data: {
          description: description,
          code: code,
        //   expiry: new Date(),
        //   header: "header",
        },
      })
    res.status(200).json(coupon);
}
  export default createCoupon;
