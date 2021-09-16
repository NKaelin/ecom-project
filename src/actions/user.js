import { SET_USER_PURCHASES, SET_PURCHASE_DETAIL } from "./types";

export function setPurchaseDetail(_id) {
  return {
    type: SET_PURCHASE_DETAIL,
    payload: _id,
  };
}

export function fetchUserPurchases() {
  return {
    type: SET_USER_PURCHASES,
    payload: [
      {
        _id: 0,
        total: 8.02,
        orderNumber: "A0023750T67",
        orderDate: new Date().toDateString,
        creditCard: "-0000",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "1234 West State Street",
        },
      },
      {
        _id: 1,
        total: 17.86,
        orderNumber: "A29874052S080",
        orderDate: new Date().toDateString,
        creditCard: "-0000",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "1234 West State Street",
        },
      },
      {
        _id: 2,
        total: 4.98,
        orderNumber: "A7921449W4920",
        orderDate: new Date().toDateString,
        creditCard: "-0000",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "1234 West State Street",
        },
      },
      {
        _id: 3,
        total: 12.89,
        orderNumber: "A29830209G0937",
        orderDate: new Date().toDateString,
        creditCard: "-0000",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "1234 West State Street",
        },
      },
      {
        _id: 4,
        total: 21.31,
        orderNumber: "A983793J037947",
        orderDate: new Date().toDateString,
        creditCard: "-0000",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "1234 West State Street",
        },
      },
      {
        _id: 5,
        total: 18.49,
        orderNumber: "A9370927552E5",
        orderDate: new Date().toDateString,
        creditCard: "-0000",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "1234 West State Street",
        },
      },
      {
        _id: 6,
        total: 15.93,
        orderNumber: "A002937553Y82",
        orderDate: new Date().toDateString,
        creditCard: "-0000",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "1234 West State Street",
        },
      },
      {
        _id: 7,
        total: 17.4,
        orderNumber: "A920384756200H8",
        orderDate: new Date().toDateString,
        creditCard: "-0000",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "1234 West State Street",
        },
      },
    ],
  };
}
