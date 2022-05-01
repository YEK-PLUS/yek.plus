import { IStack, IStackList } from './Stack';
import {
  IImage, IDataList, IData,
} from './Strapi';

interface IProjectData {
  title: string;
  description: string;
  links: {
    github: string;
    website: string;
    documentation: string;
    npm: string;
  };
  stacks: IStackList;
  mainStack?: IStack;
  thumbnail?: IImage;
}
export interface IProject extends IData<IProjectData> {}
export interface IProjectList extends IDataList<IProjectData> {}
