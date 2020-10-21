import React, { ButtonHTMLAttributes } from 'react';

import { Button } from './styles';

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function PrimaryButton({
  children,
  ...props
}: PrimaryButtonProps) {
  return (
    <Button className="primary-button" {...props}>
      {children}
    </Button>
  );
}
