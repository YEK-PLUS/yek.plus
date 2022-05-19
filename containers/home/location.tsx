import Image from 'next/image';
import classNames from 'classnames';
import styled from 'styled-components';
import assetGenerator from 'helpers/assetGenerator';
import { IHome } from 'types/Home';

const LocationDiv = styled.div`
  & > div:not(:last-child):after {
    content: "-";
    padding: 0 0.5rem;
  }
`;

const Location = ({ className, ...props }: { className?: string } & IHome) => (
  <div
    className={classNames(
      className,
      'flex justify-end flex-wrap items-center border border-light-red/50 dark:text-white px-2',
    )}
  >
    <span className="mr-auto relative group cursor-pointer">
      <span className="select-none absolute opacity-0 transition-all sm:group-hover:opacity-100">
        {props.data.attributes.NickName}
      </span>
      <span className="select-none transition-all sm:group-hover:opacity-0">
        {props.data.attributes.Name}
      </span>
    </span>

    <div className="flex justify-end items-center">
      <LocationDiv className="font-medium text-sm sm:text-lg tracking-widest flex justify-start items-center flex-wrap">
        {props.data.attributes.Locations.map(({ location, flag }) => (
          <div key={`location-${location}`} className="flex">
            <div className="hidden sm:flex items-center mr-2">
              <Image
                width={28}
                height={28}
                src={assetGenerator({ url: flag.data.attributes.url })}
                alt={props.data.attributes.NickName}
                quality={100}
              />
            </div>
            <span>{location}</span>
          </div>
        ))}
      </LocationDiv>
      <div className="sm:flex hidden justify-end items-center">
        <Image
          height={30}
          width={30}
          src={assetGenerator({
            url: props.data.attributes.MiniLogo.data.attributes.url,
          })}
          alt={props.data.attributes.NickName}
          quality={100}
        />
      </div>
    </div>
  </div>
);
Location.defaultProps = {
  className: '',
};
export default Location;
