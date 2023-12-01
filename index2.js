// Task 1:
// Scenario 1 - Buying Groceries
function groceryStore(option) {
    let items;
    let prices;
    let totalBill = 0;
    if (option === "fruits") {
        items = ["Kiwi", "Papaya",];
        prices = [50, 50];
        totalBill = 50; // assume each fruit costs $50
    }
    else if (option === "vegetables") {
        items = ["Beetroot", "Potato"];
        prices = [45, 45];
        totalBill = 45; // assume each vegetable costs $45
    }
    else {
        console.log("Invalid, choose 'fruits' or 'vegetables' ");
        return;
    }
    console.log("Items available: ", items);
    console.log("Total bill: $", totalBill);
}
groceryStore("fruits"), ("vegetables");
// Scenario 2 - Checking Discounts
function Discount(totalBill) {
    let discount = 0;
    if (totalBill > 100) {
        discount = 15; // 5% discount
    }
    else if (totalBill >= 100) {
        discount = 10; // 3% discount
    }
    let discountedTotal = 100 - (100 * (0.1 / 100));
    console.log(`Discounted total: $${discountedTotal}`); // $99.9
}
Discount(100);
// Scenario 3 - Checkout Process
let paymentMethods = ["Debit Card", "Cash"];
let paymentConfimation = ['Yes', 'No'];
let userInput = ("choosen payment method");
console.log(paymentMethods, ("Cash"));
let userinput = ("payment received");
console.log(paymentConfimation, ("yes"));
export {};
