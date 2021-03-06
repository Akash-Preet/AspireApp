import { Card, Action, Transaction } from 'src/boot/models';

export interface CardStateInterface {
  cards: Card[];
  activeCard: Card;
  actions: Action[];
  transaction: Transaction[];
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
    actions: [
      {
        icon: 'Freezecard.svg',
        label: 'Freeze card',
        onClick: 'freeze',
      },
      {
        icon: 'SetSpendLimit.svg',
        label: 'Set spend limit',
        onClick: 'spent',
      },
      {
        icon: 'GPay.svg',
        label: 'Add to GPay',
        onClick: 'gpay',
      },
      {
        icon: 'ReplaceCard.svg',
        label: 'Replace card',
        onClick: 'replace',
      },
      {
        icon: 'DeactivateCard.svg',
        label: 'Cancel card',
        onClick: 'cancel',
      },
    ],
    transaction: [
      {
        id: 123,
        user_id: '111',
        category: 'Shopping',
        trans_name: 'Hamleys',
        trans_desc: '',
        trans_amount: '150',
        trans_currency: 'S$',
        isCredited: true,
        date: '20 May 2020',
        trans_msg: 'Refund on debit card',
      },
      {
        id: 124,
        user_id: '111',
        category: 'Travel',
        trans_name: 'Hamleys',
        trans_desc: '',
        trans_amount: '150',
        trans_currency: 'S$',
        isCredited: false,
        date: '20 May 2020',
        trans_msg: 'Charged to debit card',
      },
      {
        id: 125,
        user_id: '111',
        category: 'Other',
        trans_name: 'Hamleys',
        trans_desc: '',
        trans_amount: '150',
        trans_currency: 'S$',
        isCredited: false,
        date: '20 May 2020',
        trans_msg: 'Charged to debit card',
      },
      {
        id: 126,
        user_id: '111',
        category: 'Shopping',
        trans_name: 'Hamleys',
        trans_desc: '',
        trans_amount: '150',
        isCredited: false,
        trans_currency: 'S$',
        date: '20 May 2020',
        trans_msg: 'Charged to debit card',
      },
    ],
  };
}

export default state;
