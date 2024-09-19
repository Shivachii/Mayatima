"use client";
import React, { ReactNode, useRef } from "react";

type formProps = {
  children?: ReactNode;
  className?: string;
  action: (formData: FormData) => void;
  onSubmit?: () => void;
};

const Form = ({ children, action, className, onSubmit }: formProps) => {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <form
      action={async (formData) => {
        await action(formData);
        ref.current?.reset();
      }}
      onSubmit={onSubmit}
      ref={ref}
      className={`flex flex-col mx-auto gap-4 w-[500px] ${className}`}
    >
      {children}
    </form>
  );
};

export default Form;
