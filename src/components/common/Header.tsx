import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <div className="text-center mt-12">
      <Link href="/">
        <Image
          alt="Coupon icon"
          src={"/headericon.png"}
          width={279}
          height={110}
        />
      </Link>
      <p className="text-3xl">Coupons for students</p>
    </div>
  );
};
export default Header;
