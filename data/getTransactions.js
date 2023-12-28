//

export const mockAccount = {
  avatar: "/assets/uploads/account-sehiaghe.png",
  name: "Sandra Ehiaghe",
  display_name: "The Wife",
};

export const mockWallet = [
  {
    avatar: "/assets/uploads/wallet-cashapp.png",
    name: "Cash",
    short_name: null,
  },
  {
    avatar: "/assets/uploads/wallet-gtbank.png",
    name: "Guaranty Trust Bank Plc",
    short_name: "GTB",
  },
  {
    avatar: "/assets/uploads/wallet-firstbank.png",
    name: "First Bank of Nigeria",
    short_name: "FBN",
  },
  {
    avatar: "/assets/uploads/wallet-aboveonly.png",
    name: "Above Only MFB",
    short_name: "ABO",
  },
];

export default [
  {
    type: 1,
    amount: 272727,
    narration: "Gross salary for Dec 2023",
    transaction_date: "2023-12-21",
    account: {
      avatar: "/assets/uploads/account-buzzbite.png",
      name: "Transcontinental BuzzBite Ltd.",
      display_name: "buzzbite.io",
    },
    wallet: mockWallet[2],
  },
  {
    type: 0,
    amount: 10000,
    narration: "Cabergoline drugs",
    transaction_date: "2023-12-20",
    account: mockAccount,
    wallet: mockWallet[1],
  },
  {
    type: 1,
    amount: 200000,
    narration: "Salary for Dec 2023",
    transaction_date: "2023-12-19",
    account: {
      avatar: "/assets/uploads/account-excitepl.png",
      name: "Excite Panacea Limited",
      display_name: null,
    },
    wallet: mockWallet[2],
  },
  {
    type: 0,
    amount: 50000,
    narration: "Lab test, gold wig deposit",
    transaction_date: "2023-12-17",
    account: mockAccount,
    wallet: mockWallet[3],
  },
  // {
  //   type: 0,
  //   amount: 25000,
  //   narration: "Mother in-law hospital bills",
  //   transaction_date: "2023-12-16",
  //   account: {
  //     avatar: null,
  //     name: "Family Relatives",
  //     display_name: null,
  //   },
  //   wallet: mockWallet[1],
  // },
  // {
  //   type: 1,
  //   amount: 216000,
  //   narration: "Money sprayed at trad & white wedding",
  //   transaction_date: "2023-12-04",
  //   account: {
  //     avatar: "/assets/uploads/account-semo23.png",
  //     name: "Marriage Ceremony",
  //     display_name: null,
  //   },
  //   wallet: mockWallet[0],
  // },
  // {
  //   type: 1,
  //   amount: 1283800,
  //   narration: "Total contributions from family & friends",
  //   transaction_date: "2023-12-04",
  //   account: {
  //     avatar: "/assets/uploads/account-semo23.png",
  //     name: "Marriage Ceremony",
  //     display_name: null,
  //   },
  //   wallet: mockWallet[1],
  // },
  // {
  //   type: 1,
  //   amount: 45000,
  //   narration: "Annual software maintenance fee",
  //   transaction_date: "2023-04-05",
  //   account: {
  //     avatar: "/assets/uploads/account-rtk.png",
  //     name: "Retinken Nigeria Limited",
  //     display_name: null,
  //   },
  //   wallet: mockWallet[2],
  // },
  // {
  //   type: 1,
  //   amount: 53000,
  //   narration: "Salary + stipend for Feb 2023",
  //   transaction_date: "2023-02-28",
  //   account: {
  //     avatar: "/assets/uploads/account-niit.png",
  //     name: "Oseni Elamah ICT Institute",
  //     display_name: 'NIIT Benin Centre',
  //   },
  //   wallet: mockWallet[2],
  // },
  // {
  //   type: 1,
  //   amount: 200000,
  //   narration: "Salary bonus for Dec 2022",
  //   transaction_date: "2023-01-11",
  //   account: {
  //     avatar: "/assets/uploads/account-pearsdc.png",
  //     name: "Pear SDC",
  //     display_name: null,
  //   },
  //   wallet: mockWallet[3],
  // },
];
