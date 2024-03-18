import React from "react";
import styles from "./sidemenu.module.css";

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
      <div key={index} className={styles.sideMenuItem}>
        <p className={styles.itemEmoji}>{item.emoji}</p>
        <p className={styles.itemTitle}>{item.title}</p>
      </div>
    );
  });

  return <div className={styles.sideMenu}>{menuElements}</div>;
}
