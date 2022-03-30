const PublicKey = "c4a8f0a68b3989b495abc810ca790452";
const PrivateKey = "14e4b3fe0372d456664df9140dd45c440d23d122";

export interface ICharacter {
  data: {
    count: number;
    results: [
      {
        id: number;
        name: string;
        description: string;
        thumbnail: {
          path: string;
          extension: string;
        };
        comics: {
          available: number;
          collectionURI: string;
          items: [
            {
              resourceURI: string;
              name: string;
            }
          ];
        };
        series: {
          available: number;
          collectionURI: string;
          items: [
            {
              resourceURI: string;
              name: string;
            }
          ];
        };
        urls: [{ url: string }];
      }
    ];
  };
}
export interface IHeroComics {
  data: {
    count: number;
    results: [
      {
        id: number;
        title: string;
        description: string;
        pageCount: number;
        urls: [
          {
            url: string;
          }
        ];
        dates: [{ date: string }];
        thumbnail: {
          path: string;
          extension: string;
        };
      }
    ];
  };
}

export function marvelHero() {
  return fetch(
    `https://gateway.marvel.com:443/v1/public/characters?orderBy=name&limit=100&apikey=${PublicKey}`
  ).then((response) => response.json());
}

export function marvelHeroDetail(id: string) {
  return fetch(
    `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=${PublicKey}`
  ).then((response) => response.json());
}
export function marvelHeroComics(id: string) {
  return fetch(
    `https://gateway.marvel.com:443/v1/public/characters/${id}/comics?apikey=${PublicKey}`
  ).then((response) => response.json());
}
export function searchHero(name: string) {
  return fetch(
    `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${name}&apikey=${PublicKey}`
  ).then((response) => response.json());
}
