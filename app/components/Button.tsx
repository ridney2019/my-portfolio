// components/Button.tsx
import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
}

const Button = ({ href, children, className = '' }: ButtonProps) => {
  return (
    <Link
      href={href}
      className={`inline-flex items-center px-8 py-4 text-lg font-medium rounded-full shadow transition ${className}`}
    >
      {children}
    </Link>
  );
};

export default Button;
