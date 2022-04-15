import classNames from 'classnames';
import Image from 'next/image';
import SocialButton from '@/components/social-button';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn';
import { FaEnvelope } from '@react-icons/all-files/fa/FaEnvelope';
import assetGenerator from 'helpers/assetGenerator';
import { IHome } from 'types/Home';

const Logo = ({
  className,
  ...props
}: {
  className: string;
} & IHome) => (
  <div
    className={classNames(
      className,
      'dark:text-white flex sm:flex-col justify-between',
    )}
  >
    <div className="w-full min-h-[100px] sm:h-full max-h-36 relative">
      <Image
        layout="fill"
        objectFit="contain"
        src={assetGenerator({ url: props.data.attributes.Logo.data.attributes.url })}
        alt="YEK-PLUS"
        quality={100}
      />
    </div>
    <div className="w-full flex flex-col">
      <SocialButton
        title="Twitter"
        icon={FaTwitter}
        href={props.data.attributes.Links.find((link) => link.name === 'twitter')?.link}
      />
      <SocialButton
        title="Github"
        icon={FaGithub}
        href={props.data.attributes.Links.find((link) => link.name === 'github')?.link}
      />
      <SocialButton
        title="LinkedIn"
        icon={FaLinkedinIn}
        href={props.data.attributes.Links.find((link) => link.name === 'linkedin')?.link}
      />
      <SocialButton
        title={props.data.attributes.Links.find((link) => link.name === 'mail')?.link || 'Mail'}
        icon={FaEnvelope}
        href={`mailto:${props.data.attributes.Links.find((link) => link.name === 'mail')?.link}`}
      />
    </div>
  </div>
);
export default Logo;
