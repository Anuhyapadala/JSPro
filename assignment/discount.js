let total = parseInt(prompt(" enter total amount:"))
let discount;
let discountamount;
let finalamount;
if (total < 1000) {
    console.log("No discount");
    discount=0;
}
else if (total>1000 && total<2000){
    console.log("Ten percent discount");
    discount=0.10;
}
else if (total>2000 && total<5000){
    console.log("Twenty percent discount");
    discount=0.20;
}
else if (total>5000){
    console.log("Thirty percent discount and free delivery.");
    discount=0.30;
}
else {
    console.log("invalid input")
}
discountamount= total*discount;
finalamount=total-discountamount;
console.log("bill summaery");
console.log("discountamount : " +discountamount);
console.log("final amount after discount :" +finalamount);
