"use client";
import { Input } from "@/components/ui/input";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";

export function PasswordInput({ ...props }) {
  const [open, setOpen] = useState(false);
  const EyeComponet = open ? EyeOffIcon : EyeIcon;
  return (
    <div className="relative">
      <Input type={open ? "text" : "password"} {...props} />
      <EyeComponet
        className="size-5 text-primary absolute top-2 right-3"
        onClick={() => setOpen(!open)}
      />
    </div>
  );
}
