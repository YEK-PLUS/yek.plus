import DefinitelyTypedItem from '@/components/contributes/definitelyTypedItem';
import { IDefinitelyTyped } from 'types/DefinitelyTyped';

const DefinitelyTyped = ({
  definitelyTypeds,
}: {
  definitelyTypeds: IDefinitelyTyped<true>;
}) => (
  <div className="flex flex-col dark:text-white">
    {definitelyTypeds.data.map((definitelyTyped) => (
      <DefinitelyTypedItem
        key={definitelyTyped.attributes.name}
        definitelyTyped={definitelyTyped}
      />
    ))}
  </div>
);
export default DefinitelyTyped;
