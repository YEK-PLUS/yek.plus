import { FaNpm } from '@react-icons/all-files/fa/FaNpm';
import { FaCode } from '@react-icons/all-files/fa/FaCode';
import Link from 'next/link';
import { IDefinitelyTyped } from 'types/DefinitelyTyped';

const DefinitelyTypedItem = ({
  definitelyTyped,
}: {
  definitelyTyped: IDefinitelyTyped['data'];
}) => (
  <div className="flex items-center justify-between w-full">
    <span className="text-sm">{definitelyTyped.attributes.name}</span>
    <div className="flex space-x-4 items-center">
      <Link passHref href={definitelyTyped.attributes.lib}>
        <a href={definitelyTyped.attributes.lib} target="_blank" rel="noreferrer">
          <FaNpm />
        </a>
      </Link>
      <Link passHref href={definitelyTyped.attributes.definitelyTyped}>
        <a href={definitelyTyped.attributes.definitelyTyped} target="_blank" rel="noreferrer">
          <FaCode />
        </a>
      </Link>
    </div>
  </div>
);
export default DefinitelyTypedItem;
