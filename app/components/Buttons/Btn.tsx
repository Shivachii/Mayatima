type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
};

export default function Button({
  onClick,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      {...props}
      className={`h-[40px]  p-2 border-none flex justify-center items-center gap-2 bg-blue-400 text-white hover:opacity-80 hover:-translate-y-2 duration-500 ${className}`}
    >
      {children}
    </button>
  );
}
