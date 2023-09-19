"use client";

import * as React from "react";
import * as z from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Icons } from "@/components/icons";
import { apiToast } from "@/helper/axios";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form-react-hook";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { pushRoute } from "@/routes";
import { accessProps, all } from "@/helper/ListRole";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}
const formSchema = z.object({
  username: z.string(),
  password: z.string().max(20).min(1),
});

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    try {
      const res = await apiToast.post('auth/sign-in', form.getValues())
      if (res.data.status) {
        Cookies.set('user', JSON.stringify(res.data.result), {expires: 24*60*60 /* 24 jam */})
        const adaRole: accessProps | undefined = all.find(r => r.value === res.data.result.id_level)
        if (adaRole) {
          router.push(pushRoute({name: adaRole.index}))
        }
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid gap-2">
            <div className="grid gap-1">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input
                        id="name"
                        placeholder="Masukan username anda"
                        type="text"
                        autoCapitalize="on"
                        autoComplete="name"
                        autoCorrect="off"
                        {...field}
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid gap-1">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        id="password"
                        placeholder="Masukan password anda"
                        type="password"
                        {...field}
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button disabled={isLoading}>
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Login
            </Button>
          </div>
        </form>
      </Form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            UBL APPS
          </span>
        </div>
      </div>
    </div>
  );
}
