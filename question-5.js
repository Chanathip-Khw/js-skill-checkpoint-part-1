// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "SALE50";
let totalPrice = 0

function calculateTotalPrice(products,promotionCode) {
  for (let item of products) {
    totalPrice += item.price * item.quantity
  }
  if (promotionCode === "SALE20") {
    return totalPrice*0.8
  } else if (promotionCode === "SALE50") {
    return totalPrice*0.5
  } else {
    return totalPrice
  }
}