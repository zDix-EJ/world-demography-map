export interface ICountry {
  id: string;
  name: string;
}

export interface ICurrentCountry {
  id: string;
  properties: {
    name: string;
  };
  rsmKey: string;
}
