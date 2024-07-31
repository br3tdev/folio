"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  telemetryData: z.boolean().default(false).optional(),
  newsletterSub: z.boolean().default(false).optional(),
  termsOfService: z.boolean().default(false),
});

export interface IUserAgreementFormProps {}

export default function UserAgreementForm(props: IUserAgreementFormProps) {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      telemetryData: true,
      newsletterSub: false,
      termsOfService: true,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-background p-4">
          <code className="text-foreground">
            {JSON.stringify(data, null, 2)}
          </code>
        </pre>
      ),
    });
    console.log({ data: data });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space--y-6">
        <FormField
          control={form.control}
          name="telemetryData"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Help us build a better product</FormLabel>
                <FormDescription>
                  Allow us to collect telemetry data on general usage and
                  errors. Your privacy remains our priority.
                </FormDescription>
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="newsletterSub"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Subscribe to the newsletter</FormLabel>
                <FormDescription>
                  Receive occasional emails from Fluencer about product updates,
                  best practices, and upcoming webinars/events.
                </FormDescription>
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="termsOfService"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>I accept the Terms of Service</FormLabel>
                <FormDescription>
                  To use Fluencer you must agree to our{" "}
                  <Link href="#">Terms of Service</Link>.
                </FormDescription>
              </div>
            </FormItem>
          )}
        />
        <div className="p-6 pt-0">
          <Button className="w-full" type="submit">
            Continue
          </Button>
        </div>
      </form>
    </Form>
  );
}
