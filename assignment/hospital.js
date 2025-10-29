let age = parseInt(prompt("Enter Age:"));
let isEmergency = confirm("Are is it emergency? Click OK for Yes, Cancel for No.");

if (isEmergency) {
    console.log("send to Emergency Room immediately");
} else {
    if (age < 10) {
        console.log("pediatric section");
    } else if (age > 10 && age < 60 )
        console.log("general section");
     else {
        console.log("senior citzen section");
    }
}