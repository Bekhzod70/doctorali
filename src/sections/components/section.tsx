import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  className?: string;
}

const Section = ({ className, children }: Props) => {
  return (
    <section className={cn("py-[150px]", className)}>
      <div className="container">{children}</div>
    </section>
  );
};

export default Section;
