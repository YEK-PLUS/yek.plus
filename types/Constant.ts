import { IData, IImage } from './Strapi';

export interface IConstant
  extends IData<{
    NickName: string;
    MiniLogo: IImage;
  }> {}
