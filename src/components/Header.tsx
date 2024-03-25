import React, { ReactNode } from "react";
import NavigationItem from "./NavigationItem";
import Button from "@/components/Button";

export default function Header() {
  return (
    <nav className="p-x-4 flex w-screen flex-row items-center justify-around bg-blue-100">
      <NavigationItem href="/">
        <p>Home</p>
      </NavigationItem>
      <NavigationItem href="/posts">
        <p>Posts</p>
      </NavigationItem>
      <NavigationItem href="/about">
        <p>About</p>
      </NavigationItem>
      <NavigationItem href="/dashboard">
        <Button backgroundColor="bg-purple-100" onClick={null}>
          Launch App
        </Button>
      </NavigationItem>
    </nav>
  );
}
