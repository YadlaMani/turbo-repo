"use client";
import React from "react";
import { TextInput } from "@repo/ui/text-input";
import { Button } from "@repo/ui/button";
const page = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      <div>Chat Room</div>
      <div>
        <TextInput
          onChange={() => {}}
          size="small"
          placeholder="Enter messsage"
        ></TextInput>
        <Button appName="web">Send</Button>
      </div>
    </div>
  );
};

export default page;
