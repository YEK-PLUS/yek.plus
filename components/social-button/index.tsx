import { IconType } from '@react-icons/all-files';

const SocialButton = ({
  title,
  icon: Icon,
  href,
  target,
}: {
  icon: IconType;
  title: string;
  href?: string;
  target?: string;
}) => (
  <div className="flex flex-row items-center">
    <Icon className="mr-2" />
    <a href={href} target={target} className="underline transition-all hover:decoration-light-red" rel="noreferrer">
      {title}
    </a>
  </div>
);
SocialButton.defaultProps = {
  href: '#',
  target: '_blank',
};
export default SocialButton;
