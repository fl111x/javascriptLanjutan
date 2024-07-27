// pembongkaran terhadap variabel array

// const coba = [`satu`, `dua`, `tiga`];

// const [a,b,c] = coba;
// console.log(a);
// console.log(b);
// console.log(c);


// pembongkaran terhadap elemen object

// const mahasiswa ={
//     nama:`Ammar`,
//     nim: `2350081008`,
//     nilai: `A`
// }

// const {nama,nim,nilai} = mahasiswa;
// console.log(nama);
// console.log(nim);
// console.log(nilai);


// dapat menggunakan rest parameter 
// const coba = [`nama`, `umur`, `tahun`, `bulan`, `tanggal`];

// const [a, ...values] = coba;
// console.log(a);
// console.log(values);

// pertukarang nilai variabel
// let a = 1;
// let b = 2;

// [a,b] = [b,a];
// console.log(a);
// console.log(b);

// return value pada function
// function coba() {
//     return [1,2];

// }

// const [a,b] = coba();
// console.log(a);


// assignment tanpa deklarasi object
// ({nama,umur} = {nama:`sandhika`, umur:13});
// console.log(nama);

// assignment ke variabel baru
// const mahasiswa = {
//     nama:`ammar`,
//     umur:13
// }

// const {nama : n, umur : u} = mahasiswa;
// console.log(n);

// const mahasiswa = {
//     nama:`ammar`,
//     umur:13
// }

// const {nama : n, umur : u, email : e = `hallo@gmail.com`} = mahasiswa;
// console.log(e);


// const mahasiswa = {
//     nama:`ammar`,
//     umur:13,
//     email:`ammar@gmail.com`
// }

// const {nama : n, umur : u, email : e = `hallo@gmail.com`} = mahasiswa;
// console.log(e);


// const mahasiswa = {
//     nama:`ammar`,
//     umur:13,
//     email:`ammar@gmail.com`
// }

// const {nama:n, ...values} = mahasiswa;
// console.log(values);

// const mahasiswa = {
//     nama:`ammar`,
//     umur:13,
//     email:`ammar@gmail.com`
// }

// function getValueMhs({nama}) {
//     return nama;
// }

// console.log(getValueMhs(mahasiswa));

// destructering function
// function kalkulasi(a,b){
//     return [a+b,a*b];

// }
// // harus terurut jika array
// const [jumlah,kali,bagi = `tidak ada`] = kalkulasi(2,3);
// console.log(bagi);


// function kalkulasi(a,b) {
//     return {
//         tambah: a+b,
//         kali: a*b,
//         kurang: a - b,
//         bagi:a/b
//     }
// }
// // jika pemetaan pada obj tidak harus berurut tetapi nama variabel harus sama dengan properti obj
// const {bagi} = kalkulasi(2,3);
// console.log(bagi);

// const mahasiswa ={
//     nama:`Ammar`,
//     umur:18,
//     nilai:{
//         uts:`A`,
//         uas:`A`
//     }
// }

// function cetakMhs({nama, umur, nilai:{uts,uas}}) {
//     return `Halo ${nama} umur saya adalah ${umur} nilai yang saya dapatkan saat uts adalah ${uts} dan nilai yang saya dapatkan ketika uas adalah ${uas}`
// }

// console.log(cetakMhs(mahasiswa));