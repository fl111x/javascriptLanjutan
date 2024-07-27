/*
asynchronus function adalah fungsi yang dimana fungsi dijalankan setetelah stack pada 
v8 engine kosong. fungsi ini biasanya masuk ke dalam web api terlebih dahulu sebelum dijalankan
contoh fungsi ini seperti setTimeout setInterval DOM Ajax dan lain sebagainya. dimana parameter dari fungsi 
asynchronus ini adalah sebuah callback. 
*/

console.log(`mulai`);
setTimeout(() => console.log(`hai`), 0);
console.log(`selesai`);