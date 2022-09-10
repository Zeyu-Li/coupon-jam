import Link from "next/link";
import React from "react";

interface Props {
  text: string;
  to?: string;
  title?: string;
}

const LinkButton: React.FC<Props> = ({ to = "/", title, text }) => {
  return (
    <Link href={to} title={title}>
      <button className="text-3xl transition-all text-white bg-blue-800 rounded-full py-3.5 px-12 m-4 hover:bg-blue-600">
        {text}
      </button>
    </Link>
  );
};
export default LinkButton;
