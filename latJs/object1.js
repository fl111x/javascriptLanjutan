// membuat object dengan cara object literal
// let Mahasiswa = {
//     nama : `Ammar`,
//     energi : 10,
//     makan : function (porsi) {
//         this.energi += porsi;
//         return `selamat makan ${this.nama}`
//     }
// }

// let Mahasiswa2 = {
//     nama : `Yasir`,
//     energi : 10,
//     makan : function (porsi) {
//         this.energi += porsi;
//         return `selamat makan ${this.nama}`
//     }
// }

/*kelemahan dari pembuatan object dengan object literal jika object yang
akan di buat lebih dari 1 maka object harus di deklarasikan kembali dengan nama 
variabel berbeda - beda walaupun value dari properti di dalamnya berbeda tetapi nama variabel
pada object tidak boleh sama */

// pembuatan object dengan menggunakan function declaration

// function Mahasiswa(nama,energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`selamar makan ${this.nama}`);
//     }

//     return mahasiswa;
// }

// let Ammar = Mahasiswa("Ammar", 10);

/*Pembuatan objek dengan cara ini banyak digunakan karena hanya dengan
membuat sebuah function yang dimana di dalam nya dibuat sebuah properti
dan method pada objek kemudian di dalam objek tersebut di return
objek jadi jika ingin menambahkan objek baru tinggal mendeklarasikan nya
kemudian di masukan function declaration */

// pembuatan object dengan menggunakan function declaration menggunaka Object.create()
// const methodMahasiswa = {
//     makan : function (porsi) {
//         this.energi += porsi;
//         console.log(`selamat makan ${this.nama}`);
//     },

//     main : function (jam) {
//         this.energi -= jam;
//         console.log(`selamat bermain ${this.nama}`);
//     },

//     tidur : function (jam) {
//         this.energi += jam * 2;
//         console.log(`selamat tidur ${this.nama}`);
//     }

// }

// function Mahasiswa(nama,energi) {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     return mahasiswa;
// }

// let Ammar = Mahasiswa(`Ammar`, 10);

/*pada pembuatan object seperti di atas ini menggunakan Object.create() penggunaan memori 
pada komputer akan lebih efektif karena method yang dibuat hanya menggunakan satu memori atau 
mengacu kepada 1 memori tidak dibuat berulang jika tidak digunakan */




//construtor function

// function Mahasiswa(nama,energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`selamar makan ${this.nama}`);
//     }

//     this.main = function (jam) {
//         this.energi -= jam
//         console.log(`selamat bermain ${this.nama}`)
//     }
// }

// let Ammar = new Mahasiswa("Ammar", 10);

/*Construtor function adalah cara pembuatan objek yang hampir sama dengan
function declaration tetapi bedanya di dalam function kita menggunakan
keyword this yang dimana this mmerujuk pada objek konteks saat ini dengan yang
di belakang layar terjadi js menambahkan atau mendeklarasikan objek this pada function dan
me return nya secara otomatis*/


//membuat object dengan menggunakan prototype construtor function

// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
// }

// Mahasiswa.prototype.makan = function (porsi) {
//     this.energi += porsi;
//     return `selamat makan ${this.nama}`
// }

// Mahasiswa.prototype.main = function (jam) {
//     this.energi -= jam;
//     return `selamat bermain ${this.nama}`
// }

// Mahasiswa.prototype.tidur = function (jam) {
//     this.energi += jam * 2;
//     return `selamat tidur ${this.nama}`
// }

// let Ammar = new Mahasiswa(`Ammar`, 10);

//membuat object menggunakan class 
class Mahasiswa{
    constructor (nama,energi){
        this.nama = nama;
        this.energi =energi;
    }
    makan (porsi){
        this.energi += porsi;
        return `selamar makan ${this.nama}`;
    }

    main(jam){
        this.energi -= jam;
        return `selamat bermain ${this.nama}`;
    }

    tidur(jam){
        this.energi += jam * 2;
        return `selamat tidur ${this.nama}`;
    }
}

let Sandhika = new Mahasiswa(`Sandhika`,13);