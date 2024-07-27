// get array video
const videos = Array.from(document.querySelectorAll(`[data-duration]`)); 

// filter array
let jsLanjut = videos.filter(video => video.textContent.includes(`JAVASCRIPT LANJUTAN`))

// get duration to float and change to sec
.map(item => item.dataset.duration)

.map(waktu => {
    const part = waktu.split(`:`).map(part => parseFloat(part));
    return (part[0] * 60) + part[1];
})
// reduce all to sec
.reduce((total,waktu) => total + waktu);
// change again to hour
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - (jam * 3600);
const menit = Math.floor(jsLanjut / 60 );
jsLanjut = jsLanjut - (menit * 60);
const detik = Math.floor(jsLanjut);

// change to html
const pJmlVid = document.querySelector(`.jumlah-video`);
pJmlVid.textContent = `${jam} jam, ${menit} menit, ${detik} detik`;

const pBykVid = document.querySelector(`.total-durasi`);
pBykVid.textContent = `${videos.filter(video => video.textContent.includes(`JAVASCRIPT LANJUTAN`)).length   }`


