let date = document.getElementById("day")
for (i = 1; i <= 31; i++) {
    date.innerHTML += `<option>${i}</option>`;
}

let month = document.getElementById("month")
let months=["jan","Feb","March","april","May","june","july","aug","sep","oct","nov","dec"]
for (i = 0; i <= months.length; i++) {
    month.innerHTML += `<option>${months[i]}</option>`;
}

let year=document.getElementById("year")
for (i=1905; i<=2025 ; i++){
    year.innerHTML += `<option>${i}</option>`;
}