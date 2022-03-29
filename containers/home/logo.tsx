import classNames from 'classnames';
import Image from 'next/image';
import SocialButton from '@/components/social-button';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn';
import { FaEnvelope } from '@react-icons/all-files/fa/FaEnvelope';
import assetGenerator from 'helpers/assetGenerator';

const Logo = ({
  className,
  logo,
  links,
}: {
  className: string;
  logo: string;
  links: { link: string; name: string }[];
}) => (
  <div
    className={classNames(
      className,
      'dark:text-white flex sm:flex-col justify-between',
    )}
  >
    <div className="w-full h-24 sm:h-full max-h-36 relative">
      <Image
        layout="fill"
        objectFit="contain"
        src={assetGenerator({ url: logo })}
        alt="YEK-PLUS"
        quality={100}
      />
    </div>
    <div className="w-full flex flex-col">
      <SocialButton
        title="Twitter"
        icon={FaTwitter}
        href={links.find((link) => link.name === 'twitter')?.link}
      />
      <SocialButton
        title="Github"
        icon={FaGithub}
        href={links.find((link) => link.name === 'github')?.link}
      />
      <SocialButton
        title="LinkedIn"
        icon={FaLinkedinIn}
        href={links.find((link) => link.name === 'linkedin')?.link}
      />
      <SocialButton
        title={links.find((link) => link.name === 'mail')?.link || 'Mail'}
        icon={FaEnvelope}
        href={`mailto:${links.find((link) => link.name === 'mail')?.link}`}
      />
    </div>
  </div>
);
export default Logo;
