const PublicKey = "c4a8f0a68b3989b495abc810ca790452";
const PrivateKey = "14e4b3fe0372d456664df9140dd45c440d23d122";

export interface ICharacter {
  data: {
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
      }
    ];
  };
}

export function marvelHero() {
  return fetch(
    `https://gateway.marvel.com:443/v1/public/characters?orderBy=name&limit=100&apikey=${PublicKey}`
  ).then((response) => response.json());
}
