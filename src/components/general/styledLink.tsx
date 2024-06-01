import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface StyledLinkProps {
  href: string;
  text: string;
  className?: string;
  children?: ReactNode;
}

export default function StyledLink(prop: StyledLinkProps) {
  const linkStyle =
    "bg-clip-text text-transparent \
    transition-all duration-500 bg-gradient-to-tl to-orange-300 to-[75%] \
    via-purple-800 from-blue-200 from-20% bg-size-200 bg-pos-0 \
    hover:bg-pos-100";
  return (
    <>
      <Link
        to={prop.href}
        className={`${prop.className} ${linkStyle}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {prop.text}
        {prop.children}
      </Link>
    </>
  );
}
