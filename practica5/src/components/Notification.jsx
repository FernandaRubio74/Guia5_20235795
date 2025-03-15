import React from "react";
import { useAppStore } from "../store/useAppStore";

export default function Notification() {
  const { notifications } = useAppStore();

  return (
    <div className="fixed top-5 right-5 space-y-2 z-50">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`p-5 rounded shadow-lg text-white transition-all duration-500 ease-in-out ${
            notification.type === "success"
              ? "bg-amber-500"
              : "bg-black"
          }`}
        >
          <div
            className={`font-bold ${
              notification.type === "success"
                ? "text-green-100"
                : "text-red-100"
            }`}
          >
      
          </div>
          <div>{notification.message}</div>
        </div>
      ))}
    </div>
  );
}