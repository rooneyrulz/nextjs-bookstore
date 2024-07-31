"use client";

import { ComponentProps } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
} & ComponentProps<"button">;

export default function FormSubmitButton({
  children,
  className,
  ...props
}: Props) {
  const { pending } = useFormStatus();

  return (
    <button
      {...props}
      disabled={pending}
      type="submit"
      className={`btn ${className}`}
    >
      {pending && <span className="loading loading-spinner"></span>}
      {children}
    </button>
  );
}
