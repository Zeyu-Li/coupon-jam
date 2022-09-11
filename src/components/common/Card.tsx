import Link from "next/link";
import React from "react";

interface Props {
  children: React.ReactNode;
  link?: string;
}

const Card: React.FC<Props> = ({ children, link }) => {
  if (link) {
    return (
      <Link href={link} passHref>
        <div className="mt-8 m-auto h-32 shadow-lg rounded-2xl w-3/4 p-4 bg-white relative overflow-hidden hover:bg-slate-50">
          {children}
        </div>
      </Link>
    );
  }
  return (
    <div className="mt-8 m-auto h-32 shadow-lg rounded-2xl w-3/4 p-4 bg-white relative overflow-hidden hover:bg-slate-50">
      {children}
    </div>
  );
};
export default Card;
