interface styledLinkProps {
  href: string;
  text: string;
  className?: string;
}

export default function StyledLink(prop: styledLinkProps) {
  const linkStyle =
    "bg-clip-text text-transparent \
    transition-all duration-500 bg-gradient-to-tl to-orange-300 to-[75%] \
    via-purple-800 from-blue-200 from-20% bg-size-200 bg-pos-0 \
    hover:bg-pos-100";
  return (
    <>
      <a href={prop.href} className={`${prop.className} ${linkStyle}`}>
        {prop.text}
      </a>
    </>
  );
}
