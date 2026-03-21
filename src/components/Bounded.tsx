import clsx from "clsx";
import { createElement } from "react";
import type { ElementType, ReactNode, HTMLAttributes } from "react";

type BoundedProps = {
  as?: ElementType;
  className?: string;
  children?: ReactNode;
} & Omit<HTMLAttributes<HTMLElement>, "className" | "children">;

export const Bounded = ({
  as: Comp = "section",
  className,
  children,
  ...restProps
}: BoundedProps) => {
  return createElement(
    Comp,
    {
      className: clsx("px-4 first:pt-10 md:px-6", className),
      ...(restProps as any),
    },
    <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
      {children}
    </div>
  );
};
