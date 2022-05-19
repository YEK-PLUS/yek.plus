import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';

const NavBarItem = ({
  title,
  active,
  to,
}: {
  title: string;
  active: boolean;
  to: string;
}) => (
  <Link href={to} passHref>
    <p className={classNames(active ? 'underline' : '', 'hover:underline cursor-pointer transition-all')}>
      •
      {title}
      •
    </p>
  </Link>
);

const NavBar = ({
  className,
  children,
}: {
  className?: string;
  children: ReactElement;
}) => {
  const route = useRouter().route.split('/')[1];

  return (
    <div className={classNames(className, 'w-full flex-col space-y-2')}>
      <div className="flex dark:text-white border border-light-red/50 justify-around flex-wrap p-1 group">
        <NavBarItem title="Home" to="/" active={route === ''} />
        <NavBarItem title="Projects" to="/projects" active={route === 'projects'} />
        <NavBarItem title="Contributes" to="/contributes" active={route === 'contributes'} />
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
};
NavBar.defaultProps = {
  className: '',
};
export default NavBar;
