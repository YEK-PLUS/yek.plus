import Link from 'next/link';
import { FaChevronRight } from '@react-icons/all-files/fa/FaChevronRight';
import Image from 'next/image';
import assetGenerator from 'helpers/assetGenerator';
import classNames from 'classnames';
import { IConstant } from 'types/Constant';

const Breadcrumb = ({
  items,
  constantProps: {
    data: {
      attributes: {
        MiniLogo,
        NickName,
      },
    },
  },
}: {
  items: {
    link: string;
    name: string;
  }[];
  constantProps: IConstant
}) => (
  <div className="flex dark:text-white border border-light-red/50 px-2">
    <div className="inline-flex items-center space-x-1 sm:space-x-2">
      {items.map(({ link, name }, index) => (
        <div
          key={`breadcrumb-${name}`}
          className={classNames(
            index === 0 ? 'inline-flex' : 'flex',
            'items-center gap-1 sm:gap-2',
          )}
        >
          {index === 0 ? (
            <Image
              height={30}
              width={30}
              src={assetGenerator({
                url: MiniLogo.data.attributes.url,
              })}
              alt={NickName}
              quality={100}
            />
          ) : (
            <FaChevronRight />
          )}
          <Link href={link} passHref>
            <a href={link} className="text-lg font-medium text-gray-600 dark:text-white">
              {name}
            </a>
          </Link>
        </div>
      ))}
    </div>
  </div>
);

export default Breadcrumb;
