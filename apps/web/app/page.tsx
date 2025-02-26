"use client";
import { TextInput } from "@repo/ui/text-input";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        background: "black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <TextInput
        onChange={() => {
          alert("Hi");
        }}
        placeholder="Enter room name"
        size="small"
      ></TextInput>
      <button
        style={{
          height: "30px",
          width: "80px",
          backgroundColor: "#24A0ED",
          color: "white",
          border: "none",
        }}
        type="button"
        onClick={() => {
          router.push("/chat/123");
        }}
      >
        Join room
      </button>
    </div>
  );
}
