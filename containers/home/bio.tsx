import classNames from 'classnames';
import SocialButton from '@/components/social-button';
import { FaForward } from '@react-icons/all-files/fa/FaForward';
import Link from 'next/link';

const Bio = ({ className, bio }: { className: string; bio: string }) => (
  <div
    className={classNames(
      className,
      'flex flex-col justify-end items-center border border-light-red/50 dark:text-white p-2 sm:p-4',
    )}
  >
    <span>{bio}</span>
    <Link href="/projects" passHref>
      <SocialButton title="Projects" icon={FaForward} target="_self" />
    </Link>
  </div>
);
export default Bio;
