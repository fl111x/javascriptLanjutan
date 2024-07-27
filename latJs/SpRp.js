// menggunakan spread operator
// memisahkan elemen yang ada di dalam array
// const mhs = [`sandhika`, `ammar`, `fauzy`];
// console.log(...mhs);

// menggabungkan antara 2 array
// const mhs = [`sandhika`, `ammar`, `fauzy`];
// const mhs1 = [`aji`, `arya`, `yasir`];
// const mahasiswa = mhs.concat(mhs1);
// tidak dinamis
// const mahasiswa = [...mhs,`anjay`,...mhs1];
// console.log(mahasiswa);

// mengcopy sebuah array
// const mhs = [`sandhika`, `ammar`, `fauzy`];
// const mhs1 = [...mhs];
// mhs1[0] = `anjay`;
// console.log(mhs1);

// const li = document.querySelectorAll(`li`);
// const data = [...li].map(h => h.textContent)
// console.log(data);

// const h = document.querySelector(`h1`);
// const animation = [...h.textContent].map(value => `<span>${value}</span>`).join(``);
// console.log(animation);
// h.innerHTML = animation;

// rest parameter
// function penjumlahan(...values) {
//     console.log(`mulai`);
//     const hasil = values.reduce((hasil,current) => hasil += current)
//     console.log(hasil);
//     console.log(`selesai`);
// }

// penjumlahan(1,2,3,4,5);

// const team = {
//     pj:`Ammar`,
//     devOps:`yasir`,
//     frontEnd:`fauzy`,
//     backEnd:[`yusron`, `ricky`]
// }

// const {pj,devOps, ...myTeam} = team;
// const {frontEnd,backEnd} = myTeam;
// const [p1,p2] = backEnd;
// console.log(p1);