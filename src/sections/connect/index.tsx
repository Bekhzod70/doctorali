import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

import Chip from "@/components/chip";
import Section from "../components/section";
import SectionTitle from "../components/section-title";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { FormSchema, formSchema } from "./formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Pencil from "@/components/icons/pencil";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  subtitle: string;
  desktopImg: string;
  mobileImg: string;
  bgColor: string;
  buttonClass?: string;
}

const Connect = (props: Props) => {
  const { bgColor, buttonClass, desktopImg, mobileImg, subtitle, title } =
    props;

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
    },
  });

  function onSubmit(values: FormSchema) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Section>
      <div
        className={cn(
          "w-full sm:py-[60px] py-10 sm:px-[50px] px-5 rounded-[40px] relative",
          bgColor
        )}
      >
        <img
          src={desktopImg}
          alt="Connect bg shape"
          className="absolute bottom-0 lg:block hidden left-1/2 -translate-x-1/2"
        />
        <img
          src={mobileImg}
          alt="Connect bg shape"
          className="absolute lg:hidden right-0 top-0"
        />
        <div className="flex lg:flex-row flex-col xl:gap-24 gap-y-10 text-white relative z-10">
          <div className="lg:w-1/2">
            <SectionTitle className="mb-[26px]">{title}</SectionTitle>
            <p className="text-paragraph1 mb-[38px]">{subtitle}</p>
            <Chip>Перезвоним через 15 минут</Chip>
          </div>
          <div className="lg:w-1/2">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          icon={Pencil}
                          placeholder="Ваше имя"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <PhoneInput
                          className="phone-input !block"
                          placeholder="Номер телефона"
                          value={field.value}
                          onChange={field.onChange}
                          inputComponent={Input}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  variant="warning"
                  className={cn(
                    "w-full sm:py-[27px] py-5 !mt-10 sm:text-button1",
                    buttonClass
                  )}
                >
                  Получить <span className="sm:inline hidden">бесплатную</span>{" "}
                  консультацию
                  <ChevronRight />
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default Connect;
