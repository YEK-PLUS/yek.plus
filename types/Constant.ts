import { IData, IImage } from './Strapi';

export type IConstant<isList = false> = IData<
  {
    NickName: string;
    MiniLogo: IImage;
  },
  isList
>;
