import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLElement> {}

const Section = ({ className, children, ...rest }: Props) => {
  return (
    <section className={cn("my-[150px]", className)} {...rest}>
      <div className="container">{children}</div>
    </section>
  );
};

export default Section;
