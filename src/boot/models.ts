export interface AppLink {
  title: string;
  icon: string;
  route: string;
}

export interface Card {
  user_id: number;
  name: string;
  number: string;
  thruMonth: string;
  thruYear: number;
  cvv: number;
  isFreezed: boolean;
  balance: string;
  type: string;
  payment_network: string;
}
