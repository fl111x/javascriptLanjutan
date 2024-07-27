// request menggunakna fungsi fetch yang dapat mengembalikan object promise
// object promise merupakan sebuah object yang memiliki 2 keadaan dimana promise fullfilled ataupu reject
// sama seperti artinya promise merupakan sebuah janji yang dapat terpenuhi ataupun diingkari
// janji juga dapat menjadi aksi yang akan di masa akan datang atau pending 

let jawaban = true;
// const janji = new Promise((resolve, reject) => {
//     if (jawaban) {
//         resolve(`Janji ditepati`);
//     }else{
//         reject(`Janji tidak ditepati`);
//     }
// })

// janji.then(Response => console.log(Response)).catch(Response => console.log(Response));

// promise all
// promise all merupakan fungsi dimana menjalankan sebuah object promise bersamaan yang akan mengembalikan sebuah array

const cuaca = new Promise((resolve,reject) => {
    if (jawaban) {
        resolve([
            {
                kota:`bandung`,
                cuaca:`hujan`
            },
            {
                kota:`cimahi`,
                cuaca:`berawan`
            },
            {
                kota:`medan`,
                cuaca:`cerah`
            }
        ]);
    }else{
        reject(`error`);
    }
});

const mahasiswa = new Promise((resolve,reject) => {
    if (jawaban) {
        resolve([
            {
                nama:`Ammar Bagas`,
                nilai:`A`
            },
            {
                nama:`Fauzy`,
                nilai:`A`
            },
            {
                nama:`yasir`,
                nilai:`AB`
            }
        ]);
    }
})

// mahasiswa.then(response => console.log(response)).catch(response => console.log(response));
// cuaca.then(response => console.log(response)).catch(response => console.log(response));

Promise.all([cuaca,mahasiswa]).then(Response => {
    const [cuaca, mahasiswa] = Response;
    console.log(cuaca);
    console.log(mahasiswa);
})
