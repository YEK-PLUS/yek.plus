import Image from 'next/image';
import classNames from 'classnames';
import styled from 'styled-components';
import assetGenerator from 'helpers/assetGenerator';

const LocationDiv = styled.div`
  & > span:not(:last-child):after {
    content: "-";
  }
`;

const Location = ({
  className,
  Name,
  NickName,
  locations,
  miniLogo,
}: {
  className: string;
  Name: string;
  NickName: string;
  miniLogo: string;
  locations: { location: string }[];
}) => (
  <div
    className={classNames(
      className,
      'flex justify-end flex-wrap items-center border border-light-red/50 dark:text-white px-2',
    )}
  >
    <span className="mr-auto relative group cursor-pointer">
      <span className="select-none absolute opacity-0 transition-all sm:group-hover:opacity-100">
        {NickName}
      </span>
      <span className="select-none transition-all sm:group-hover:opacity-0">
        {Name}
      </span>
    </span>

    <div className="flex justify-end items-center">
      <LocationDiv className="font-medium text-sm sm:text-lg tracking-widest flex justify-start flex-wrap">
        {locations.map(({ location }) => (
          <span key={`location-${location}`}>{location}</span>
        ))}
      </LocationDiv>
      <div className="sm:flex hidden justify-end items-center">
        <Image
          height={30}
          width={30}
          src={assetGenerator({ url: miniLogo })}
          alt={NickName}
          quality={100}
        />
      </div>
    </div>
  </div>
);

export default Location;
