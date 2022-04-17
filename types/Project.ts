import {
  IImage, IComponent, IComponentList, IDataList,
} from './Strapi';

export interface IProject
  extends IDataList<{
    title: string;
    description: string;
    links: {
      github: string;
      website: string;
      documentation: string;
      npm: string;
    };
    stacks: IComponentList<{
      name: string;
      link: string;
      icon: IImage;
    }>;
    mainStack?: IComponent<{
      name: string;
      link: string;
      icon: IImage;
    }>;
    thumbnail?: IImage;
  }> {}
