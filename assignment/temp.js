let temp = parseInt(prompt("enter temperature value:"))
if (temp< 10) {
    console.log("Its freezing cold , wear jacket.");
}
else if (temp > 10 && temp < 25) {
    console.log("Cool weather , perfect for the outdoor activities.");
}
else if (temp > 25 && temp < 35) {
    console.log(" Warm day , stay hydrated.");
}
else if (temp > 35) {
    console.log(" It's too hot , avoid going out in the afternoon");
}
else{
    console.log("invalid input")
}