var angka;
const prima = (angka) => {
    var bagi = 0;
    for(var i = 0; i <= angka; i++) {
        if(angka % i == 0) {
            bagi++
        }
    }
    if(pembagi == 2) {
        console.log(angka + " adalah bilangan prima");
    }
    else {
        console.log(angka + " bukan bilangan prima")
    }
}
