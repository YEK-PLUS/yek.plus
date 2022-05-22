import { IStack } from './Stack';
import { IData, IImage } from './Strapi';

export type IContribute<isList = false> = IData<
  {
    title: string;
    description: string;
    links: {
      github: string;
      website: string;
      documentation: string;
      npm: string;
    };
    stacks: IStack<true>;
    mainStack?: IStack;
    thumbnail?: IImage;
  },
  isList
>;
