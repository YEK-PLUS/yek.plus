import { IconType } from '@react-icons/all-files';
import { forwardRef, ForwardedRef } from 'react';
import classNames from 'classnames';

const SocialButton = forwardRef(
  (
    {
      icon: Icon,
      title,
      href,
      target,
      className,
    }: {
      icon: IconType;
      title: string;
      href?: string;
      target?: string;
      className?: string;
    },
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => (
    <div className={classNames('flex flex-row items-center', className)}>
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
  className: '',
};
export default SocialButton;
