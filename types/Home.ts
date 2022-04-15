export interface IHome {
  data: {
    attributes: {
      Name: string;
      NickName: string;
      Bio: string;
      Locations: {
        location: string;
        flag: {
          data: {
            id: number;
            attributes: {
              url: string;
            };
          };
        };
      }[];
      MiniLogo: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
      Logo: {
        data: {
          id: number;
          attributes: {
            url: string;
          };
        };
      };
      Links: {
        link: string;
        name: 'twitter' | 'github' | 'linkedin' | 'mail';
      }[];
    };
  };
}
