interface TextInputProps {
  placeholder: string;
  size: "big" | "small";
  onChange: (e: any) => void;
}
export function TextInput({ placeholder, size, onChange }: TextInputProps) {
  return (
    <input
      style={{
        padding: size === "big" ? 20 : 10,
        margin: size === "big" ? 20 : 10,
        borderColor: "black",
        borderWidth: 1,
      }}
      placeholder={placeholder}
      onChange={onChange}
    ></input>
  );
}
