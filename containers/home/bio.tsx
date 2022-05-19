import classNames from 'classnames';
import { IHome } from 'types/Home';

const Bio = ({ className, ...props }: { className: string } & IHome) => (
  <div
    className={classNames(
      className,
      'flex flex-col justify-around items-center border border-light-red/50 dark:text-white p-2 sm:p-4',
    )}
  >
    <span>{props.data.attributes.Bio}</span>
  </div>
);
export default Bio;
