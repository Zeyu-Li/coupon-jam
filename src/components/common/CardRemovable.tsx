import Link from "next/link";
import React from "react";

interface Props {
  children: React.ReactNode;
  onRemove: (slug: string) => void;
  slug: string;
  link?: string;
}

const CardRemovable: React.FC<Props> = ({ children, onRemove, slug, link }) => {
  if (link) {
    return (
      <Link href={link}>
        <div className="mt-8 m-auto h-32 shadow-lg rounded-2xl w-3/4 p-4 bg-white relative hover:bg-slate-50">
          {/* button slightly above card */}
          <div className="absolute top-0 left-0" style={{ margin: -15 }}>
            <button
              className="rounded-2xl bg-red-600 w-8 h-8 text-white"
              onClick={() => onRemove(slug)}
            >
              x
            </button>
          </div>
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
export default CardRemovable;
