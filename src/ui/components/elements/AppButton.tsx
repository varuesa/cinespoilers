import type { ReactNode } from "react";

interface AppButtonProps {
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outlinePrimary';
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}

const variantClassMap = {
  primary: 'button--primary',
  secondary: 'button--secondary',
  outlinePrimary: 'button--outline-primary',
};

const AppButton = ({
  type = 'button',
  variant,
  className = '',
  onClick,
  children,
  ...rest
}: AppButtonProps) => {
  const variantClass = (variant && variantClassMap[variant]) || '';;

  return (
    <button
      type={type}
      className={`button ${variantClass} ${className}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default AppButton;