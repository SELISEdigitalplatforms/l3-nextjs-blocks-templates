import { SigninForm } from "@/lib/selise-blocks/templates/signin-form";

export default function SigninPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="text-primary">
        <h2 className=" text-5xl">Hello,</h2>
        <h1 className="text-7xl font-bold">Welcome!</h1>
      </div>
      <SigninForm />
    </div>
  );
}
