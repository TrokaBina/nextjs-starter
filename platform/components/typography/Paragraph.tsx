import { cn } from '@/platform/utils/cn';
import { cva, VariantProps } from 'class-variance-authority';
import { ComponentProps, FC } from 'react';

const ParagraphVariants = cva('', {
  variants: {
    size: {
      default: 'text-base',
      small: 'text-sm',
      large: 'text-lg',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

interface ButtonProps extends ComponentProps<'p'>, VariantProps<typeof ParagraphVariants> {}

const Paragraph: FC<ButtonProps> = ({ children, className, size, ...props }) => {
  return (
    <p
      className={cn(ParagraphVariants({ size, className }))}
      {...props}
    >
      {children}
    </p>
  );
};

export { Paragraph };
