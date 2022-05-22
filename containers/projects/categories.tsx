import CategoryItem from '@/components/category-item';
import { IStack } from 'types/Stack';

const Categories = ({
  category,
  onToggle,
  stackList,
}: {
  category: string;
  stackList: IStack<true>;
  // eslint-disable-next-line no-unused-vars
  onToggle: (cat: string) => void;
}) => (
  <div className="flex flex-wrap justify-center items-center gap-2">
    <CategoryItem name="All" active={category === 'All'} onToggle={onToggle} />
    {stackList.data
      .filter(({ attributes: { showcase } }) => showcase)
      .map(({ attributes: { name } }) => (
        <CategoryItem
          key={`stack-${name}`}
          name={name}
          active={category === name}
          onToggle={onToggle}
        />
      ))}
  </div>
);

export default Categories;
