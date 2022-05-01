import { IData, IDataList, IImage } from './Strapi';

export interface IStackData {
  name: string;
  link: string;
  showcase: boolean;
  icon: IImage;
}
export interface IStack extends IData<IStackData> {}
export interface IStackList extends IDataList<IStackData> {}
