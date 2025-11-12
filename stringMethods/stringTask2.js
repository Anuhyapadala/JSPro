let str = "anuhya@gmail.com";
if (str.includes('@') && str.endsWith('.com')) {
    console.log("valid")
    let s1 = str.split('@');
    console.log("username :"+s1.slice(0,1));
    console.log("domain :"+s1.slice(1));

    
}
else {
    console.log("invalid");
}

