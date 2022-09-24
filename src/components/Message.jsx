import React from "react";

const Message = ({ message }) => {
  return (
    <div className="text-center py-2 bg-red-500 text-white font-bold text-xl my-2">
      {message}{" "}
    </div>
  );
};

export default Message;
