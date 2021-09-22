import {
  SET_SHOP_CATEGORIES,
  SET_SHOP_PRODUCTS,
  FILTER_PRODUCTS_WITH__CATEGORY_ID,
} from "./types";

export function filterProductsWithCategoryId(_id) {
  return {
    type: FILTER_PRODUCTS_WITH__CATEGORY_ID,
    payload: _id,
  };
}

export function fetchShopCategories() {
  return {
    type: SET_SHOP_CATEGORIES,
    payload: [
      {
        _id: 0,
        title: "All",
      },
      {
        _id: 1,
        title: "JavaScript",
      },
      {
        _id: 2,
        title: "UI/UX",
      },
      {
        _id: 3,
        title: "Linux",
      },
      {
        _id: 4,
        title: "Python",
      },
      {
        _id: 5,
        title: "UML",
      },
      {
        _id: 6,
        title: "Ruby",
      },
    ],
  };
}

export function fetchShopProducts() {
  return {
    type: SET_SHOP_PRODUCTS,
    payload: [
      {
        _id: 0,
        title: "JavaScript in the Browser",
        descripton:
          "To find the bulk of the world's freshwater you need to trek to the poles, as 68.7% of it is encased in ice caps, permanent snow, and glaciers.",
        price: 1.99,
        belongsTo: [0, 1],
      },
      {
        _id: 1,
        title: "Graph Database",
        descripton:
          "To find the bulk of the world's freshwater you need to trek to the poles, as 68.7% of it is encased in ice caps, permanent snow, and glaciers.",
        price: 1.99,
        belongsTo: [0, 3],
      },
      {
        _id: 2,
        title: "Full Stack Development",
        descripton:
          "To find the bulk of the world's freshwater you need to trek to the poles, as 68.7% of it is encased in ice caps, permanent snow, and glaciers.",
        price: 2.99,
        belongsTo: [0, 1, 4],
      },
      {
        _id: 3,
        title: "User Interface Design",
        descripton:
          "To find the bulk of the world's freshwater you need to trek to the poles, as 68.7% of it is encased in ice caps, permanent snow, and glaciers.",
        price: 2.99,
        belongsTo: [0, 2],
      },
      {
        _id: 4,
        title: "Javascript Development",
        descripton:
          "Polar bear fur is actually clear, and their skin is black. Baby flamingos are born grey, not pink. Anteaters have no teeth.",
        price: 3.29,
        belongsTo: [0, 1],
      },
      {
        _id: 5,
        title: "User Experience Design",
        descripton:
          "Polar bear fur is actually clear, and their skin is black. Baby flamingos are born grey, not pink. Anteaters have no teeth.",
        price: 1.99,
        belongsTo: [0, 2],
      },
      {
        _id: 6,
        title: "Advanced OOP",
        descripton:
          "Polar bear fur is actually clear, and their skin is black. Baby flamingos are born grey, not pink. Anteaters have no teeth.",
        price: 2.49,
        belongsTo: [0, 6],
      },
      {
        _id: 7,
        title: "Graph Database",
        descripton:
          "To find the bulk of the world's freshwater you need to trek to the poles, as 68.7% of it is encased in ice caps, permanent snow, and glaciers.",
        price: 1.99,
        belongsTo: [0, 3],
      },
    ],
  };
}
