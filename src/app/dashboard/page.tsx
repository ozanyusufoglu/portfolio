"use client";

import React, { useState } from "react";
import Button from "@/components/Button";
import Section from "@/components/Section";

export default function Page() {
  const [count, setCount] = useState(0);

  function handleIncrease() {
    setCount((prev) => prev + 1);
  }

  function handleDecrease() {
    setCount((prev) => prev - 1);
  }

  return (
    <Section>
      <h2>Here is a dynamic App</h2>
      <p className="text-5xl">{count}</p>
      <div className="flex flex-row gap-x-4">
        <Button backgroundColor="bg-purple-100" onClick={handleDecrease}>
          Decrease me
        </Button>
        <Button backgroundColor="bg-red-100" onClick={handleIncrease}>
          Increase me
        </Button>
      </div>
    </Section>
  );
}
