import Link from "next/link";
import React, { ReactNode } from "react";

type navItemProps = {
  children: ReactNode;
  href: string;
};

const NavigationItem = ({ children, href }: navItemProps) => {
  return (
    <Link href={href}>
      <div className="font-md cursor-pointer p-4  font-medium transition-all duration-200 ease-out hover:font-bold hover:text-purple-800">
        {children}
      </div>
    </Link>
  );
};

export default NavigationItem;
