import { IconType } from '@react-icons/all-files';
import { forwardRef, ForwardedRef } from 'react';

const SocialButton = forwardRef(
  (
    {
      icon: Icon,
      title,
      href,
      target,
    }: {
      icon: IconType;
      title: string;
      href?: string;
      target?: string;
    },
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => (
    <div className="flex flex-row items-center">
      <Icon className="mr-2" />
      <a
        ref={ref}
        href={href}
        target={target}
        className="underline transition-all hover:decoration-light-red"
        rel="noreferrer"
      >
        {title}
      </a>
    </div>
  ),
);

SocialButton.displayName = 'SocialButton';
SocialButton.defaultProps = {
  href: '#',
  target: '_blank',
};
export default SocialButton;
