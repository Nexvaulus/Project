// coba arrow function


const box = document.querySelector('.box');
box.addEventListener('click', function() {
    let satu = "size";
    let dua = "caption";

    if(this.classList.contains(satu)) [satu, dua] = [dua, satu];
    this.classList.toggle(satu);
    setTimeout(() => {
        this.classList.toggle(dua)
    }, 700);
});


const center = document.querySelector(".center");
const merah = center.querySelector('input[name=sMerah]');
const hijau = center.querySelector('input[name=sHijau]');
const biru = center.querySelector('input[name=sBiru]');
center.addEventListener('input', function(e) {

    const r = merah.value;
    const g = hijau.value;
    const b = biru.value;

    e.target.parentElement.parentElement.parentElement.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    // e.target.parentElement.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    // e.target.siblingElement.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

});
