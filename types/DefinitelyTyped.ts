import { IData } from './Strapi';

export type IDefinitelyTyped<isList = false> = IData<
  {
    name: string;
    definitelyTyped: string;
    lib: string;
  },
  isList
>;
