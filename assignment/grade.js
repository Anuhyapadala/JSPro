let marks = parseInt(prompt("enter marks:"))
if (marks > 90) {
    console.log("Excellent - Grade A");
}
else if (marks > 75 && marks < 90) {
    console.log("Good - Grade B");
}
else if (marks > 50 && marks < 75) {
    console.log("Average - Grade C");
}
else if (marks<50) {
    console.log("failed - needs improvement");
}
else{
    console.log("invalid input")
}