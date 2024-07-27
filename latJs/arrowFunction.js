/*Arrow function adalah penulisan function yang dimana
function di tuliskan secara singkat  */

// const sayHello = function (nama) {
//     return `hallo nama saya ${nama}`;
// }

// console.log(sayHello(`ammar`));

// const sayHello = (nama) => `hallo nama saya ${nama}`;
// console.log(sayHello(`doddy`));

// arrow function jika membuat objek
// const Mahasiswa = (nama,energi) => ({
//     nama : nama,
//     energi : energi,
// });

// const Ammar = Mahasiswa(`ammar`, 10);

const box = document.querySelector(`.box`);
box.addEventListener(`click`,function () {
    let satu = `size`;
    let dua = `color`;
    if (this.classList.contains(satu)) {
        [satu,dua] = [dua,satu];
    }
    this.classList.toggle(satu);
    setTimeout(() => {
        this.classList.toggle(dua);
    },600);
})
