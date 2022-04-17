import { IImage, IData } from './Strapi';

export interface IHome
  extends IData<{
    Name: string;
    NickName: string;
    Bio: string;
    Locations: {
      location: string;
      flag: IImage;
    }[];
    MiniLogo: IImage;
    Logo: IImage;
    Links: {
      link: string;
      name: 'twitter' | 'github' | 'linkedin' | 'mail';
    }[];
  }> {}
