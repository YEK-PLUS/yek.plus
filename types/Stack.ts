import { IData, IImage } from './Strapi';

export type IStack<isList = false> = IData<
  {
    name: string;
    link: string;
    showcase: boolean;
    icon: IImage;
  },
  isList
>;
