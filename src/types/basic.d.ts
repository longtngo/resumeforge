export interface IBasicLocation {
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface IBasicProfile {
  network: string;
  username: string;
  url: string;
  logoUrl?: string;
}

export interface IBasic {
  name: string;
  label: string;
  image: string;
  email: string;
  phone: string;
  url: string;
  summary: string;
  location: IBasicLocation;
  relExp: string;
  totalExp: string;
  objective: string;
  profiles: IBasicProfile[];
}
