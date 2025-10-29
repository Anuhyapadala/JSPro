let orderValue = parseFloat(prompt("Enter your order value:"));
let isPremiumMember = confirm("Are you a premium member? Click OK for Yes, Cancel for No.");

if (isPremiumMember) {
    console.log("Delivery is free for premium members.");
} else {
    if (orderValue < 200) {
        console.log("Delivery not available.");
    } else if (orderValue >= 200 && orderValue <= 500) {
        console.log("Delivery fee is ₹50.");
    } else if (orderValue > 500 && orderValue <= 1000) {
        console.log("Delivery fee is ₹25.");
    } else if (orderValue > 1000) {
        console.log("Delivery is free.");
    } else {
        console.log("Invalid input.");
    }
}