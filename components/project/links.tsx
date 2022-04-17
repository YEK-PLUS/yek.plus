import { IProject } from 'types/Project';
import { FaFileAlt } from '@react-icons/all-files/fa/FaFileAlt';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaNpm } from '@react-icons/all-files/fa/FaNpm';
import { FaShareAlt } from '@react-icons/all-files/fa/FaShareAlt';
import Link from 'next/link';

const Links = ({ links }: { links: IProject['data'][0]['attributes']['links'] }) => (
  <div className="grid grid-flow-col gap-2">
    {links.github ? (
      <Link passHref href={links.github}>
        <a href={links.github} target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
      </Link>
    ) : null}
    {links.website ? (
      <Link passHref href={links.website}>
        <a href={links.website} target="_blank" rel="noreferrer">
          <FaShareAlt />
        </a>
      </Link>
    ) : null}
    {links.documentation ? (
      <Link passHref href={links.documentation}>
        <a href={links.documentation} target="_blank" rel="noreferrer">
          <FaFileAlt />
        </a>
      </Link>
    ) : null}
    {links.npm ? (
      <Link passHref href={links.npm}>
        <a href={links.npm} target="_blank" rel="noreferrer">
          <FaNpm />
        </a>
      </Link>
    ) : null}
  </div>
);
export default Links;
