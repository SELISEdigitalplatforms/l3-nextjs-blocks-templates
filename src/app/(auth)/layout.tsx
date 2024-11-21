import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen">
      <div className="flex-1 flex justify-center items-center px-4">
        <div className="w-full max-w-[400px]">{children}</div>
      </div>
      <div className="hidden md:block flex-1 relative">
        <div className=" absolute left-0 right-0 top-0 bottom-0 bg-primary opacity-70"></div>
      </div>
    </div>
  );
}
