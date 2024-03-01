import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown, LucideIcon, Minus, Plus } from "lucide-react";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "bg-white rounded-[20px] sm:p-6 p-5 border-2 border-gray-light",
      className
    )}
    {...props}
  />
));

AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
    icon?: LucideIcon | JSX.ElementType;
  }
>(({ className, children, icon, ...props }, ref) => {
  const Icon = icon;

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "flex flex-1 items-center justify-between gap-3 font-medium transition-all sm:text-heading4 text-button1 [&[data-state=open]>p]:hidden [&[data-state=open]>span]:block",
          className
        )}
        {...props}
      >
        <div className="flex gap-[14px]">
          {Icon && (
            <span className="text-orange w-12 h-12">
              <Icon />
            </span>
          )}
          <span className="text-[#036053] font-medium text-start">
            {children}
          </span>
        </div>
        {/* <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" /> */}
        <p className="shrink-0">
          <Plus className="w-6 h-6 text-gray from-black stroke-2" />
        </p>
        <span className="hidden shrink-0">
          <Minus className="w-6 h-6 text-gray from-black stroke-2" />
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div
      className={cn(
        "pb-5 sm:pt-7 pt-[18px] !text-gray sm:text-paragraph1 text-paragraph2",
        className
      )}
    >
      {children}
    </div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
