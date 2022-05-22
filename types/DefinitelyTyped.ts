import { IStack } from './Stack';
import { IImage, IData } from './Strapi';

export type IDefinitelyTyped<isList> = IData<
  {
    title: string;
    description: string;
    links: {
      github: string;
      website: string;
      documentation: string;
      npm: string;
    };
    mainStack?: IStack;
    thumbnail?: IImage;
  },
  isList
>;
