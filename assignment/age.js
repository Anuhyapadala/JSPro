let age = prompt("enter your age");
totalprice=1000;
let discount;
let discountamount;
let actualprice;
if (age<12){
    console.log("half price");
    discount=0.50;
}
 else if(age>12 && age<60){
    console.log("full price");
    discount=0;
}
else if (age>60){
    console.log("twenty percent discount");
    discount=0.20;
}
else{
    console.log("invalid input");
}
discountamount= totalprice*discount;
actualprice=totalprice-discountamount;
console.log("actualprice:" + actualprice);
