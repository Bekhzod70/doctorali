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
import { ChevronRight, Loader2Icon, PhoneIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/router";
import { useState } from "react";
import Translation from "@/components/translation";
import { useTranslation } from "next-i18next";
import axios from 'axios';

const sendTelegramMessage = async (data: { form_name?: string; name: any; phone: any; }) => {
  const token = '7038871747:AAHWWqdJ3Xw6jl9eLGybamNi63lsEqgx4F0'; // Replace with your bot token
  const chatId = '-4284927867'; // Replace with your chat ID
  const text = `Ismi: ${data.name}\nTelefon raqami: ${data.phone}`;
  

  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  
  try {
    const response = await axios.post(url, {
      chat_id: chatId,
      text: text,
    });
    return response;
  } catch (error) {
    console.error("Error sending message to Telegram:", error);
    throw error;
  }
};

interface Props {
  title: string;
  subtitle: string;
  desktopImg: string;
  mobileImg: string;
  bgColor: string;
  buttonClass?: string;
  id?: string;
  image?: boolean;
}

const Connect = (props: Props) => {
  const { t } = useTranslation();
  const router = useRouter();
  const [pending, setIsPending] = useState(false);
  const {
    bgColor,
    buttonClass,
    desktopImg,
    mobileImg,
    subtitle,
    title,
    id,
    image,
  } = props;

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
    },
  });

  async function onSubmit(values: FormSchema) {
    setIsPending(true);

    const { name, phone } = values;

    const _data = {
      name: name,
      phone: phone,
    };

    try {
      // Send data to your server or perform other actions here
      await sendTelegramMessage(_data).then((response) => {
        if (response.status === 200) {
          router.push("/thanks");
          console.log("Message sent successfully!");
        }
      });
    } catch (error) {
      alert(`Iltimos, qayta urinib ko'ring`);
    } finally {
      setIsPending(false);
    }
  }

  const handleActive = () => {
    const phoneValue = form.getValues("phone");
    if (!phoneValue) {
      form.setValue("phone", "+");
    }
  };

  return (
    <Section id={id}>
      <div
        className={cn(
          "w-full sm:py-[60px] py-10 sm:px-[50px] px-5 rounded-tr-[30px] rounded-bl-[30px] relative",
          bgColor
        )}
      >
        {image ? (
          <div className="w-full overflow-hidden rounded-2xl mb-[22px] sm:hidden">
            <img
              src="/mehrigiyo/images/contact.jpg"
              alt="contact"
              className="w-full h-full object-cover"
            />
          </div>
        ) : null}
        <div className="flex lg:flex-row flex-col xl:gap-24 gap-y-7 text-white relative z-10">
          <div className="lg:w-1/2 text-center">
            <SectionTitle className="mb-[14px]">{title}</SectionTitle>
            <p className="sm:text-paragraph1 text-base" data-aos="fade-up">
              {subtitle}
            </p>
          </div>
          <div className="lg:w-1/2">
            <Form {...form}>
              <form
                data-aos="fade-up"
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
                          placeholder={t("connect.name")}
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
                          defaultCountry="UZ"
                          onFocus={handleActive}
                          className="phone-input !block"
                          placeholder={t("connect.phone")}
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
                  disabled={pending}
                  className={cn(
                    "w-full h-[76px] sm:py-[27px] py-5 !mt-10 sm:text-button1",
                    buttonClass
                  )}
                >
                  {pending ? (
                    <Loader2Icon className="animate-spin" />
                  ) : (
                    <>
                      <PhoneIcon width={18} />
                      <span className="sm:inline hidden">
                        <Translation text="connect.btn" />
                      </span>
                      <span className="sm:hidden">
                        <Translation text="links.connect" />
                      </span>
                    </>
                  )}
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