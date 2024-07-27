// 1. menampilkan object pada body tanpa looping
// const el = {
//     nama: `Ammar Bagas`,
//     email: `ammarbfw@gmail.com`
// }

// document.body.innerHTML = `<div>
//     <p>${el.nama}</p>
//     <span class="email">${el.email}<span>
// </div>`

// 2.menampilkan elemen menggunakan looping
// const mhs = [
//     {
//         nama:`Ammar`,
//         email:`Ammar@gmai.com`
//     },
//     {
//         nama:`hernandi`,
//         email:`hernandi@gmai.com`
//     },
//     {
//         nama:`Edo`,
//         email:`Edo@gmai.com`
//     }
// ]

// document.body.innerHTML = `<table>
//     <tr>
//         <th>nama</th>
//         <th>email</th>
//     </tr>
//     ${mhs.map(m => {
//         return `<tr>
//             <td>${m.nama}</td>
//             <td>${m.email}</td>
//         </tr>`
//     }).join(``)}
    
// </table>`

// 3.conditional

// const el = {
//     judul:`American idiot`,
//     Penyanyi: `Greed Day`,
// }

// document.body.innerHTML = `<div>
//     <ul>
//         <li> ${el.judul} </li>
//         <li> ${el.Penyanyi} ${el.feat ? `(feat.${el.feat})`: ``} </li>

//     </ul>
// </div>`

// 4.nested

// const mhs = {
//     nama: `Ammar`,
//     mk:[
//         `alpro`,
//         `pemweb`,
//         `matdis`,
//     ]
// }

// function cetakMatakuliah(mk) {
//     return mk.map(m => `<li>
//             ${m}
//         </li>`).join(``);
// }

// document.body.innerHTML = `<div>
//     <h1>${mhs.nama}</h1>
//     <h2>Mata Kuliah</h2>
//     <ul>
//         ${cetakMatakuliah(mhs.mk)}
//     </ul>
// </div>`


// tagged tamplate

const nama = `Ammar`;
const umur = 10;

function coba(string, ...values) {
    let result = ``;
    string.forEach((str,i) => {
        result += `${str}${values[i] || ``}`;
        
    });
    return result;
}

const str = coba `Halo nama saya ${nama} umur saya ${umur}`;
console.log(str);