import classNames from 'classnames';

const CategoryItem = ({
  name,
  active,
  onToggle,
}: {
  name: string;
  active?: boolean;
  // eslint-disable-next-line no-unused-vars
  onToggle: (cat: string) => void;
}) => (
  <button
    type="button"
    onClick={() => onToggle(name)}
    className={classNames(
      active ? 'bg-gray-100 bg-opacity-50' : 'hover:bg-gray-100 hover:bg-opacity-10',
      'px-3 py-0.5 border transition-all dark:text-white dark:border-white rounded-full',
    )}
  >
    <p>{name}</p>
  </button>
);
CategoryItem.defaultProps = {
  active: false,
};
export default CategoryItem;
