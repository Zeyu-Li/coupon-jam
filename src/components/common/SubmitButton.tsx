import Link from "next/link";
import React from "react";

interface Props {
  text: string;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  title?: string;
}

const SubmitButton: React.FC<Props> = ({ onClick, title, text }) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className=" mb-8 text-3xl transition-all text-white bg-blue-800 rounded-full py-3.5 px-12 m-4 hover:bg-blue-600 font-bold "
    >
      <p className="font-bold">{text}</p>
    </button>
  );
};
export default SubmitButton;
