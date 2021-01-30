import { useState } from "react";
export default function useTextField(
  init: string
): [
  string,
  (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
] {
  const [value, setValue] = useState(init);
  return [value, (e) => setValue(e.target.value)];
}
