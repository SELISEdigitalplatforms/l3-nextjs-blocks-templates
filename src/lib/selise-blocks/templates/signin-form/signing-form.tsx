"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import {
  signinFormDefaultValue,
  signinFormType,
  signinFormValidationSchema,
} from "./utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { PasswordInput } from "@/components/password-input";
import { useSigninMutation } from "../../hooks/useAuth";

export const SigninForm = () => {
  const router = useRouter();
  const form = useForm<signinFormType>({
    defaultValues: signinFormDefaultValue,
    resolver: zodResolver(signinFormValidationSchema),
  });

  const { isPending, mutateAsync } = useSigninMutation();

  const onSubmitHandler = async (values: signinFormType) => {
    try {
      await mutateAsync(values);
      router.replace("/");
    } catch (_error) {}
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmitHandler)}
        className="flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>User name</FormLabel>
              <FormControl>
                <Input placeholder="enter your user name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput {...field} error="" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-6 mt-6">
          <Button
            className="flex-1 font-extrabold"
            size="lg"
            type="submit"
            loading={isPending}
            disabled={isPending}
          >
            Login
          </Button>
          <Button
            className="flex-1 font-extrabold border-primary text-primary"
            variant="outline"
            size="lg"
          >
            Sign up
          </Button>
        </div>
      </form>
    </Form>
  );
};
