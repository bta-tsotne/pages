import type { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: ReactNode;
  variant?: 'increament' | 'decreament' | 'increamentByAmount';
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export function Button({ 
  children,
  variant = "increament",
  ...props
}: ButtonProps) {
  const base = "border rounded-sm px-2 py-1 cursor-pointer hover:bg-slate-400 hover:text-white";

  const variants = {
    increament: "bg-green-500",
    decreament: "bg-red-500",
    increamentByAmount: "bg-blue-500",
  };

  return <button className={`${base} ${variants[variant]}`} {...props}>{children}</button>;
}
