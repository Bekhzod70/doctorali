import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
// import { PhoneInput } from "react-international-phone";
// import "react-international-phone/style.css";
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
import { ChevronRight, Loader2Icon } from "lucide-react";
import { cn } from "@/lib/utils";
import { sendMessage } from "@/utils/send-data";
import { useRouter } from "next/router";
import { useState } from "react";
import Translation from "@/components/translation";
import { useTranslation } from "next-i18next";

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
      form_name: "numakids",
      name: name,
      phone: phone,
    };

    try {
      await sendMessage(_data).then((data) => {
        if (data.status === 200) {
          router.push("/thanks");
        }
      });
    } catch (_) {
      alert(`Iltimos, qayta urinib ko'ring`);
    } finally {
      setIsPending(false);
    }
  }

  const handleActive = () => {
    form.setValue("phone", "+");
  };

  return (
    <Section id={id}>
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
        {image ? (
          <div className="w-full overflow-hidden rounded-2xl mb-[22px] sm:hidden">
            <img
              src="/images/contact.jpg"
              alt="contact"
              className="w-full h-full object-cover"
            />
          </div>
        ) : null}
        <div className="flex lg:flex-row flex-col xl:gap-24 gap-y-10 text-white relative z-10">
          <div className="lg:w-1/2">
            <SectionTitle className="mb-[26px]">{title}</SectionTitle>
            <p className="sm:text-paragraph1 text-base mb-[38px]">{subtitle}</p>
            {!image ? (
              <Chip>
                <Translation text="connect.chip" />
              </Chip>
            ) : null}
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
                  variant="warning"
                  disabled={pending}
                  className={cn(
                    "w-full sm:py-[27px] py-5 !mt-10 sm:text-button1",
                    buttonClass
                  )}
                >
                  <span className="sm:inline hidden">
                    <Translation text="connect.btn" />
                  </span>
                  <span className="sm:hidden">
                    <Translation text="links.connect" />
                  </span>
                  {pending ? (
                    <Loader2Icon className="animate-spin" />
                  ) : (
                    <ChevronRight />
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
