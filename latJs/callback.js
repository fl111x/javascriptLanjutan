// callback
// synchronus callback
// function sapa(nama) {
//     alert(nama);
// }

// function start(callback) {
//     const nama = prompt(`Masukan nama :`);
//     callback(nama);
// }

// start(sapa);

// asynchronus callback
// menggunakan ajax
function getDataMahasiswa(url,succes,error) {
    let xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4){
            if (xhr.status === 200) {
                succes(xhr.response);
            }else if (xhr.status === 404) {
                error();
            }
        }
    }

    xhr.open(`get`,url);
    xhr.send();

}

console.log(`mulai`);
getDataMahasiswa(`data/mahasiswa.json`,(result) => {
    const mhs = JSON.parse(result)
    mhs.forEach(nama => console.log(nama.nama));
}, () => alert(`404 page not found`))
console.log(`selsai`);