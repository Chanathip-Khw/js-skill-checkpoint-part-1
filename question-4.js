// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];

let minFruit = ""
let minFruitQuantity = inventory[0].quantity

for (let fruit of inventory) {
  if (fruit.quantity < minFruitQuantity) {
    minFruitQuantity = fruit.quantity
    minFruit = fruit.name
  }
}

console.log(`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${minFruit} ซึ่งมี ${minFruitQuantity} ชิ้น`)


