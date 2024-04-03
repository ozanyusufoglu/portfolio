import React from "react";

export default function SideMenu() {
  const menuItems = [
    {
      title: "Counter",
      emoji: "⏰",
    },
    {
      title: "Calculator",
      emoji: "🧮",
    },
    {
      title: "Text editor",
      emoji: "📄",
    },
    {
      title: "Bin",
      emoji: "🗑️",
      onClick: () => {
        alert("no item in the bin");
      },
    },
  ];

  const menuElements = menuItems.map((item, index) => {
    return (
      <div
        key={index}
        className="flex min-w-14 cursor-pointer flex-col items-center justify-center"
      >
        <p>{item.emoji}</p>
        <p className="{styles.itemTitle}">{item.title}</p>
      </div>
    );
  });

  return (
    <div className="absolute left-4 top-1/3 flex h-1/2 flex-col items-start justify-center gap-y-8">
      {menuElements}
    </div>
  );
}
