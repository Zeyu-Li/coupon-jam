import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  hasSubHeader?: boolean;
}

const Header: React.FC<Props> = ({ hasSubHeader = true }) => {
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
      {hasSubHeader ? <p className="text-3xl">Coupons for students</p> : null}
    </div>
  );
};
export default Header;
