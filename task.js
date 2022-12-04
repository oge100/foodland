console.log("This project is for meeting the requirement");

console.log("WELCOME TO FOODLAND");

console.log(
  "You have reached foodland! Kindly choose from these varieties of food: RICE , BEANS, ABACHA, PLANTAIN, AKPU"
);

const response = prompt();

console.log(response);

const food = {
  rice: 2000,
  beans: 1500,
  plantain: 1200,
  akpu: 3500,
  abacha: 1800,
};
var vendor_wallet = 0;

if (response == "rice") {
  vendor_wallet = vendor_wallet + food.rice;
  console.log("Thanks for your patronage. Our wallet is now:", vendor_wallet);
} else if (response == "beans") {
  vendor_wallet = vendor_wallet + food.beans;
  console.log("Thanks for your patronage. Our wallet is now:", vendor_wallet);
} else if (response == "plantain") {
  vendor_wallet = vendor_wallet + food.plantain;
  console.log("Thanks for your patronage. Our wallet is now:", vendor_wallet);
} else if (response == "akpu") {
  vendor_wallet = vendor_wallet + food.akpu;
  console.log("Thanks for your patronage. Our wallet is now:", vendor_wallet);
} else {
  vendor_wallet = vendor_wallet + food.abacha;
  console.log("Thanks for your patronage. Our wallet is now:", vendor_wallet);
}
