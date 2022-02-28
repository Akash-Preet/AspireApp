import { Card } from 'src/boot/models';

export interface CardStateInterface {
  cards: Card[];
  activeCard: Card;
}

function state(): CardStateInterface {
  return {
    cards: [
      {
        user_id: 111,
        name: 'Mark Henry',
        number: '1234567812342020',
        thruMonth: '11',
        thruYear: 2020,
        cvv: 123,
        isFreezed: false,
        balance: '3,000',
        type: 'debit',
        payment_network: 'visa',
      },
      {
        user_id: 222,
        name: 'Trang Aspire',
        number: '2234567812342021',
        thruMonth: '04',
        thruYear: 2021,
        cvv: 423,
        isFreezed: false,
        balance: '78,000',
        type: 'debit',
        payment_network: 'visa',
      },
      {
        user_id: 777,
        name: 'Akash Preet',
        number: '7234567812342027',
        thruMonth: '07',
        thruYear: 2027,
        cvv: 771,
        isFreezed: true,
        balance: '2,000',
        type: 'debit',
        payment_network: 'visa',
      },
    ],
    activeCard: {
      user_id: 111,
      name: 'Mark Henry',
      number: '1234567812342020',
      thruMonth: '11',
      thruYear: 2020,
      cvv: 123,
      isFreezed: false,
      balance: '3,000',
      type: 'debit',
      payment_network: 'visa',
    },
  };
}

export default state;
