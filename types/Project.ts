import { IStack } from './Stack';
import { IImage, IData } from './Strapi';

export type IProject<isList = false> = IData<
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
