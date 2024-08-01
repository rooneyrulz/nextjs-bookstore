"use client";

import { ComponentProps } from "react";
import { useFormStatus } from "react-dom";

type Props = {
  children: React.ReactNode;
  className?: string;
  isLoading?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
} & ComponentProps<"button">;

export default function FormSubmitButton({
  children,
  className,
  isLoading,
  ...props
}: Props) {
  const { pending } = useFormStatus();

  console.log("pending", pending);
  console.log("isLoading", isLoading);

  return (
    <button
      {...props}
      disabled={pending || isLoading}
      type="submit"
      className={`btn ${className}`}
    >
      {(pending || isLoading) && <span className="loading loading-spinner"></span>}
      {children}
    </button>
  );
}
