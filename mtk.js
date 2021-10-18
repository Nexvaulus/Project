var angka;
var prima = function(angka) {
    for(i = 0; i < angka; i++) {
        var tes;
        tes = angka % i;
        if(tes == 1) {
            return console.log(angka + " adalah bilangan prima");
        }
        else {
            return console.log(angka + " bukan bilangan prima");
        }
    }
}