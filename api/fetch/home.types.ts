export interface HomeProps {
    data: {
      attributes: {
        Name: string;
        NickName: string;
        bio: string;
        locations: {
          location: string;
        }[];
        miniLogo: {
          data: {
            attributes: {
              url: string;
            };
          };
        };
        logo: {
          data: {
            id: number;
            attributes: {
              url: string;
            };
          };
        };
        links: {
          link: string;
          name: 'twitter' | 'github' | 'linkedin' | 'mail';
        }[];
      };
    };
  }
