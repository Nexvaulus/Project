// coba arrow function


const box = document.querySelector('.box');
const center = document.querySelector(".center");
const merah = center.querySelector('input[name=sMerah]');
const hijau = center.querySelector('input[name=sHijau]');
const biru = center.querySelector('input[name=sBiru]');


box.addEventListener('click', function() {
    let satu = "size";
    let dua = "caption";

    if(this.classList.contains(satu)) {
        [satu, dua] = [dua, satu];

    }
    this.classList.toggle(satu);
    setTimeout(() => {
        this.classList.toggle(dua)
    }, 700);


    
    
    
});


center.addEventListener('input', function(e) {

    const r = merah.value;
    const g = hijau.value;
    const b = biru.value;

    merah.nextElementSibling.innerHTML = r;
    hijau.nextElementSibling.innerHTML = g;
    biru.nextElementSibling.innerHTML = b;

    e.target.parentElement.parentElement.parentElement.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

});
