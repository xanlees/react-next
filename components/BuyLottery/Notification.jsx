import React from "react";
import { useNotification, Button } from "@vechaiui/react";

const Notification = () => {
  const notification = useNotification();

  const handleMessage = (status) => {
    notification({
      title: "Name",
      className: "bg-red-400",
      description: "TTT.",
      status: status,
      position: "top",
      undoText: "Undo",
      onUndo: () => {},
    });
  };
  return (
    <>
      <div className="flex items-center w-full p-8 space-x-4">
        <Button onClick={() => handleMessage("info")}>Info</Button>
        <Button onClick={() => handleMessage("success")}>Success</Button>
        <Button onClick={() => handleMessage("error")}>Error</Button>
        <Button onClick={() => handleMessage("warning")}>Warning</Button>
      </div>
    </>
  );
};

export default Notification;
