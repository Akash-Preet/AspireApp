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

export interface Action {
  icon: string;
  label: string;
  onClick: string;
}

export interface Transaction {
  id: number;
  user_id: string;
  category: string;
  trans_name: string;
  trans_desc: string;
  trans_amount: string;
  trans_currency: string;
  isCredited: boolean;
  date: string;
  trans_msg: string;
}
