import React from "react";

function LinkButton({
  href,
  children,
  variant,
  ...delegated
}: {
  href: string;
  children: React.ReactNode;
  [x: string]: any;
}) {
  const Tag = typeof href === "string" ? "a" : "button";
  return (
    <Tag href={href} {...delegated}>
      {children}
    </Tag>
  );
}

export default LinkButton;
