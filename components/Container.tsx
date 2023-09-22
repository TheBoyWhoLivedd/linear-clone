import clsx from "clsx";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={clsx("mx-auto max-w-[120rem] px-[2.4rem]", className)}>
      {children}
    </div>
  );
};
