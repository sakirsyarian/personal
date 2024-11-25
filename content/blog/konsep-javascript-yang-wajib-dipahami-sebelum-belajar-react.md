---
title: Asynchronous JavaScript! Praktik Pemula yang Wajib Diketahui
description: Temukan cara jitu menggunakan asynchronous JavaScript! Dapatkan praktik untuk pemula dan buat aplikasi webmu lebih cepat dan responsif.
date: 2024-10-01
img: /newsletter/js-react.png
---

![JS React!](/newsletter/js-react.png)

Pernah merasa bingung dengan konsep JavaScript saat mencoba belajar React?

Kamu nggak sendirian! Sebelum terjun ke dunia React yang seru, ada beberapa konsep dasar JavaScript yang wajib dikuasai.

Dengan memahami hal-hal seperti fungsi, array, dan async, kamu akan lebih mudah mengikuti alur React dan membuat aplikasi web impian.

Yuk, simak artikel ini dan siapkan dirimu untuk jadi jago React!

### Kenalan Dulu Sama JavaScript dan React

Sebelum kita mulai ke bagian-bagian teknis, mungkin kamu bertanya-tanya, "Kenapa sih harus ngerti JavaScript dulu sebelum nyebur ke React?"

Nah, itu pertanyaan yang bagus banget! Jadi gini, ibaratnya nih, React itu adalah sebuah alat canggih untuk bikin website yang kece. Tapi, kalau kamu belum tahu cara kerja dasar-dasar alatnya—dalam hal ini JavaScript—bisa jadi nanti malah bingung sendiri.

### JavaScript Itu Pondasi buat React

Di dunia front-end development, JavaScript itu semacam “bahasa utama” yang harus kamu kuasai. Hampir semua yang kamu lihat bergerak atau berinteraksi di website dibikin pakai JavaScript.

Nah, React dibangun di atas JavaScript. Jadi, biar kamu gak merasa “ngawang” waktu ngoding di React, penting banget buat paham konsep-konsep dasar JavaScript.

React punya berbagai fitur keren yang mempermudah kita bikin komponen UI interaktif. Tapi setiap fiturnya itu sebenarnya *hanya* membungkus logika JavaScript di dalamnya.

Artinya, semakin paham kamu sama JavaScript, semakin gampang juga kamu memahami dan memanfaatkan fitur React.

### Apa Aja yang Wajib Kamu Tahu?

Di artikel ini, kita bakal bahas beberapa konsep dasar yang sering banget muncul di kode React, seperti:

1. Variabel (`let`, `const`, `var`) – karena kamu pasti bakal sering banget deklarasi data.
2. Function – ini penting banget, karena React itu tentang *components*, dan komponen React biasanya berupa function.
3. Object & Array – struktur data dasar yang hampir pasti kamu pakai.
4. Destructuring – supaya kode lebih simpel dan rapi.
5. Template Literals – cara praktis buat bikin string yang dinamis.
6. Array Methods – biar kamu gak pusing pas harus manipulasi data.
7. Async JavaScript – gimana React nge-handle proses yang butuh waktu, seperti *fetch* data dari server.
8. Spread dan Rest Operator – cara praktis buat mengelola data dengan lebih fleksibel.
9. Modules – supaya kode lebih terstruktur.

Kita bahas satu-satu dengan contoh, jadi nanti gak cuma teori doang, kamu bakal dapet gambaran jelas gimana cara pakenya.

## Variables: `let`, `const`, dan `var` – Apa Bedanya?

Bayangin kalau kamu lagi nyimpen data, entah itu nama pengguna, warna latar belakang, atau nilai skor dalam game.

Nah, data-data ini perlu disimpan di suatu tempat biar bisa diakses lagi pas dibutuhkan. Itulah gunanya variabel—tempat buat nyimpen data yang bisa kita panggil kapan aja di dalam program.

Di JavaScript, kita punya tiga kata kunci buat bikin variabel: `let`, `const`, dan `var`. Walaupun ketiganya sama-sama bisa nyimpen data, ada perbedaan penting antara mereka yang wajib kamu tahu biar ngodingnya lancar.

### `let` – Variabel yang Bisa Diubah-Ubah

`let` itu biasanya dipakai buat variabel yang isinya kemungkinan bakal berubah di masa depan. Misalnya, kalau kamu punya variabel `skor` di game yang terus bertambah setiap kali pemain mencetak goal, itu cocoknya pakai `let`.

Contoh:

```jsx
let skor = 0;
skor = skor + 1; // Mengubah nilai skor jadi 1
```

**Kapan Pakai `let`?**

- Ketika nilai variabelnya akan berubah.
- Kalau kamu butuh fleksibilitas untuk mengupdate isi variabel.

### `const` – Variabel yang Gak Bisa Diubah

Sesuai namanya (*const* itu singkatan dari “constant” atau tetap), `const` adalah variabel yang gak bisa diubah setelah kamu beri nilai pertama kali.

Misalnya, kalau kamu punya variabel untuk nyimpen nama aplikasi atau nilai *pi* (3.14), itu cocoknya pakai `const`, karena nilainya gak bakal berubah sepanjang program.

Contoh:

```jsx
const namaAplikasi = "BelajarReact";
```

Kalau kamu coba ubah nilai `namaAplikasi`, bakal muncul error karena `const` gak diizinkan buat di-reassign.

**Kapan Pakai `const`?**

- Ketika kamu yakin kalau nilai variabelnya gak bakal berubah.
- Untuk ngehindarin error dari ketidaksengajaan reassign variabel yang gak seharusnya diubah.

### `var` – Pendahulu yang Sekarang Jarang Dipakai

Sebelum `let` dan `const` ada, semua variabel di JavaScript dideklarasi pakai `var`.

Meskipun `var` masih bisa dipakai, dia punya beberapa kelemahan, terutama soal *scope* (ruang lingkup) dan *hoisting* (perilaku variabel yang kadang muncul sebelum dideklarasikan), yang bikin kode jadi susah diprediksi.

Karena alasan itu, `var` sekarang jarang dipakai dan lebih disarankan buat pakai `let` atau `const` aja.

Contoh `var`:

```jsx
var umur = 25;
umur = 26;
```

**Kenapa `var` Kurang Disarankan?**

- *Scope* dari `var` bisa bikin error yang susah dilacak.
- Banyak kasus ketidaksengajaan variabel muncul tanpa dideklarasi sebelumnya.

### Jadi, Pilih `let` atau `const`?

Di JavaScript modern, umumnya disarankan buat selalu pakai `const` dulu, kecuali kamu tahu kalau variabelnya akan diubah—baru deh pakai `let`. Dengan begitu, kamu bisa ngehindarin perubahan nilai variabel yang gak disengaja.

Contoh Penggunaan `let` dan `const` di Satu Kode:

```jsx
const nama = "Dewi";
let umur = 20;

umur = umur + 1; // umur berubah jadi 21
// nama gak bisa diubah karena dideklarasi pakai const
```

Nah, itu dia pembahasan soal variabel! Dengan paham perbedaan antara `let`, `const`, dan `var`, kamu bisa bikin kode yang lebih rapi, aman, dan terstruktur.

## Functions: Deklarasi, Ekspresi, dan Arrow Functions

Function di JavaScript itu ibarat *recipe* atau resep. Kamu bisa bikin serangkaian instruksi yang nantinya bisa dipanggil kapan aja tanpa harus menulis ulang kodenya.

Bayangin kalau kamu bikin fitur tombol “like” di aplikasi. Setiap kali tombol diklik, ada serangkaian aksi yang harus dilakukan, seperti memperbarui jumlah like dan animasi.

Daripada nulis ulang kode aksi ini tiap kali, kamu bisa bungkus instruksinya dalam satu function yang bisa dipanggil kapan pun dibutuhkan.

### Function Declaration – Function Dasar di JavaScript

Function declaration adalah cara paling umum buat bikin function. Biasanya diawali dengan kata kunci `function`, diikuti nama function, kurung buka-tutup `()`, lalu blok kode `{}`.

Contoh:

```jsx
function sapaan() {
  console.log("Hello, dunia!");
}
```

Function ini gak ngambil parameter atau masukan dari luar, jadi tiap kali dipanggil, dia cuma munculin “Hello, dunia!” di konsol.

**Memanggil Function**

Function gak bakal jalan sampai kamu memanggilnya. Kamu bisa panggil `sapaan()` buat munculin “Hello, dunia!” di konsol.

```jsx
sapaan(); // Output: Hello, dunia!
```

**Function dengan Parameter**

Kamu juga bisa bikin function yang lebih fleksibel dengan ngasih parameter. Jadi, functionnya bisa menerima data yang berbeda tiap kali dipanggil.

Contoh:

```jsx
function sapaan(nama) {
  console.log(`Hello, ${nama}!`);
}

sapaan("Andi"); // Output: Hello, Andi!
sapaan("Sari"); // Output: Hello, Sari!
```

Di sini, `nama` adalah parameter yang bisa kamu isi tiap kali manggil `sapaan()`. Jadinya, sapaan bisa disesuaikan tergantung nama yang kita masukkan.

### Function Expression – Bikin Function Kayak Bikin Variabel

Cara lain buat bikin function adalah pakai function expression. Function ini biasanya disimpan dalam variabel, jadi cara panggilnya sama kayak manggil variabel. Beda dari function declaration, function expression gak bisa dipanggil sebelum dia didefinisikan.

Contoh:

```jsx
const sapaan = function(nama) {
  console.log(`Hello, ${nama}!`);
};

sapaan("Putri"); // Output: Hello, Putri!
```

Kenapa pakai function expression? Biasanya ini dipakai kalau kamu cuma perlu fungsi di dalam variabel tertentu dan gak mau dia bisa dipanggil sebelum dideklarasi. Ini penting terutama saat kita bikin kode yang perlu dikontrol ketat urutannya.

### Arrow Function – Function Modern yang Lebih Ringkas

Arrow function adalah cara baru buat bikin function dengan syntax yang lebih ringkas. Function ini diperkenalkan di ES6 dan punya beberapa perbedaan menarik, terutama soal `this` yang lebih konsisten dibanding function declaration atau expression.

Arrow function biasanya dipakai kalau mau bikin function sederhana dan gak ribet sama *scope* `this`.

Contoh Arrow Function:

```jsx
const sapaan = (nama) => {
  console.log(`Hello, ${nama}!`);
};

sapaan("Lina"); // Output: Hello, Lina!
```

Atau kalau function-nya cuma satu baris, kamu bisa tulis lebih ringkas:

```jsx
const sapaan = nama => console.log(`Hello, ${nama}!`);
```

Apa Bedanya Arrow Function dengan Function Lainnya?

- Arrow function gak punya `this` sendiri, jadi dia pakai `this` dari *scope* di mana dia dibuat. Ini bikin arrow function sering dipakai buat kode React karena lebih “aman” soal *scope*.
- Syntax yang lebih pendek dan rapi, cocok buat function sederhana atau yang sering dipanggil.

### Kapan Pakai Function Declaration, Function Expression, atau Arrow Function?

- Function Declaration: Cocok buat function yang bakal dipakai di banyak tempat dalam program atau function yang lebih kompleks.
- Function Expression: Pas banget buat bikin function dalam konteks tertentu yang gak perlu dipanggil di luar variabelnya.
- Arrow Function: Pilihan ideal buat function yang sederhana dan kalau kamu butuh `this` dari *scope* sekitarnya.

Itu dia perkenalan ke tiga cara bikin function di JavaScript! Dengan paham cara kerja function ini, berarti kamu sudah siap, karena hampir setiap komponen di React itu berbentuk function.

## Destructuring: Mengurai Data dengan Cepat

Destructuring adalah fitur JavaScript yang diperkenalkan di ES6 buat ngebantu kita “mengurai” data dari object atau array secara lebih cepat dan rapi. Dengan destructuring, kamu bisa langsung “memecah” data ke variabel-variabel tanpa harus akses satu per satu secara manual.

Teknik ini bakal sering kamu pakai di React untuk mengurai data dari props, state, dan variabel kompleks lainnya.

### Object Destructuring

Object destructuring berguna kalau kamu mau ngambil data dari object dan langsung nyimpen data itu di variabel. Biasanya, kita bakal pakai `{}` buat memecah data dari object ke variabel baru.

Contoh tanpa destructuring:

```jsx
const pengguna = {
  nama: "Andi",
  umur: 25,
  kota: "Jakarta"
};

const nama = pengguna.nama;
const umur = pengguna.umur;
const kota = pengguna.kota;

console.log(nama, umur, kota); // Output: Andi 25 Jakarta
```

Dengan destructuring, kamu bisa langsung mengambil data tanpa harus nulis `pengguna.nama`, `pengguna.umur`, dan `pengguna.kota` satu per satu:

```jsx
const { nama, umur, kota } = pengguna;
console.log(nama, umur, kota); // Output: Andi 25 Jakarta
```

Jauh lebih singkat, kan? Dengan satu baris kode, kamu bisa ambil beberapa properti dari object sekaligus!

**Destructuring dengan Nama Variabel yang Berbeda**

Kalau kamu mau ngasih nama variabel yang berbeda dari nama *key* di object, tinggal tambahin `:` setelah nama *key*-nya.

Contoh:

```jsx
const { nama: namaPengguna, umur: umurPengguna } = pengguna;
console.log(namaPengguna, umurPengguna); // Output: Andi 25
```

Di sini, `nama` diambil dari `pengguna`, tapi disimpan di variabel `namaPengguna`. Hal yang sama berlaku buat `umur`.

### Array Destructuring

Array destructuring bekerja mirip dengan object destructuring, tapi di sini kita pakai `[]` untuk menangkap nilai dari array berdasarkan urutannya. Ini berguna kalau kamu punya array dengan beberapa elemen yang sering dipakai.

Contoh tanpa destructuring:

```jsx
const warna = ["merah", "kuning", "biru"];

const pertama = warna[0];
const kedua = warna[1];
const ketiga = warna[2];

console.log(pertama, kedua, ketiga); // Output: merah kuning biru
```

Dengan destructuring, kamu bisa ambil nilai-nilai ini dengan lebih cepat:

```jsx
const [pertama, kedua, ketiga] = warna;
console.log(pertama, kedua, ketiga); // Output: merah kuning biru
```

**Skipping atau Melewati Nilai dalam Array**

Kamu juga bisa *skip* elemen-elemen tertentu dalam array yang gak perlu kamu simpan.

Contoh:

```jsx
const [ , , warnaKetiga] = warna;
console.log(warnaKetiga); // Output: biru
```

Di sini, kita cuma ambil elemen ketiga dari array `warna`, dan *skip* elemen pertama dan kedua.

### Destructuring dalam Function

Di React, kamu bakal sering nemuin destructuring dalam function, khususnya buat akses props atau data yang di-*return* dari hooks (kayak `useState` yang sering nge-*return* array).

Contoh destructuring dalam function:

```jsx
function tampilkanPengguna({ nama, umur }) {
  console.log(`Nama: ${nama}, Umur: ${umur}`);
}

const pengguna = { nama: "Dewi", umur: 30 };
tampilkanPengguna(pengguna); // Output: Nama: Dewi, Umur: 30
```

Dengan destructuring, kita bisa langsung akses `nama` dan `umur` dari parameter `pengguna` di function tanpa harus menulis `pengguna.nama` atau `pengguna.umur`.

Nah, itu dia penjelasan tentang destructuring! Dengan memahami cara kerja destructuring, kamu bakal lebih nyaman ngoding di React, karena fitur ini bakal sering banget muncul saat ngatur data di dalam komponen.

## Spread dan Rest: Mengolah Data dengan Lebih Fleksibel

Baik, sekarang kita lanjut ke Spread dan Rest Operator.

Keduanya adalah fitur yang memungkinkan kita untuk bekerja dengan data (terutama array dan objek) dengan lebih fleksibel dan efisien. Mereka mempermudah pengelolaan data, baik untuk duplikasi, penggabungan, maupun ekstraksi data.

Apa Itu Spread Operator dan Rest Operator?

1. Spread Operator (`...`) digunakan untuk "menyebarkan" elemen dalam array atau objek ke dalam bentuk terpisah. Spread itu membantu kamu menyalin atau menggabungkan data.
2. Rest Operator (`...`) digunakan untuk mengumpulkan elemen yang tersisa dari array atau objek menjadi sebuah array atau objek.

Meskipun operator ini terlihat serupa, mereka digunakan untuk tujuan yang berbeda.

### **Spread Operator** – Menyebarkan Data

Spread operator (`...`) berguna untuk menyalin atau menggabungkan array atau objek. Saat menggunakan spread, kita "mengeluarkan" semua elemen dalam array atau objek ke dalam bentuk elemen terpisah.

Contoh Spread pada Array

Misalnya, kamu punya array `angka`, dan kamu ingin menyalinnya ke array baru atau menggabungkan dua array:

```jsx
const angka = [1, 2, 3];
const angkaLain = [...angka, 4, 5];

console.log(angkaLain); // Output: [1, 2, 3, 4, 5]
```

Di sini, kita menggunakan spread operator untuk menyalin elemen-elemen dari array `angka` ke array `angkaLain` dan menambahkan elemen tambahan `4` dan `5`.

**Spread pada Objek**

Spread juga bisa dipakai untuk objek. Ini sangat berguna untuk menyalin objek atau menggabungkan beberapa objek.

```jsx
const orang = { nama: "Budi", umur: 25 };
const kontak = { telepon: "123456789", email: "budi@example.com" };

const dataOrang = { ...orang, ...kontak };

console.log(dataOrang);
// Output: { nama: 'Budi', umur: 25, telepon: '123456789', email: 'budi@example.com' }
```

Di sini, kita menggunakan spread operator untuk menggabungkan dua objek (`orang` dan `kontak`) menjadi satu objek baru (`dataOrang`).

**Menggunakan Spread pada Array untuk Duplikasi**

Salah satu kegunaan spread adalah untuk membuat salinan dari array tanpa merujuk ke array asli. Ini bisa menghindari masalah ketika kamu ingin mengubah array baru tanpa memengaruhi array lama.

```jsx
const angka = [1, 2, 3];
const duplikatAngka = [...angka];

duplikatAngka.push(4);

console.log(angka); // Output: [1, 2, 3]
console.log(duplikatAngka); // Output: [1, 2, 3, 4]
```

### **Rest Operator** – Mengumpulkan Data

Rest operator digunakan untuk mengumpulkan data yang tersisa dalam array atau objek menjadi satu variabel. Biasanya, rest digunakan saat kita mendeklarasikan fungsi untuk menangani parameter yang fleksibel.

Contoh Rest pada Parameter Fungsi

Misalnya, kamu punya fungsi yang menerima banyak parameter, tapi kamu gak tahu berapa jumlah pastinya. Dengan menggunakan rest operator, kamu bisa menangkap semua parameter tersebut dalam sebuah array.

```jsx
function hitungJumlah(...angka) {
  return angka.reduce((total, num) => total + num, 0);
}

console.log(hitungJumlah(1, 2, 3, 4)); // Output: 10
console.log(hitungJumlah(5, 10)); // Output: 15
```

Di sini, `...angka` mengumpulkan semua argumen yang diberikan ke dalam array `angka`. Jadi kamu bisa melakukan operasi seperti `.reduce()` pada array tersebut.

**Rest pada Array**

Kamu juga bisa menggunakan rest untuk mengambil elemen-elemen tertentu dari array dan menyisakan yang lainnya. Misalnya, mengambil elemen pertama dari array dan menyisakan sisanya:

```jsx
const angka = [1, 2, 3, 4, 5];
const [pertama, ...sisanya] = angka;

console.log(pertama); // Output: 1
console.log(sisanya); // Output: [2, 3, 4, 5]
```

Di sini, `pertama` mendapatkan nilai pertama dari array, dan `sisanya` menjadi array baru yang berisi elemen-elemen sisanya.

**Rest pada Objek**

Rest operator juga bisa digunakan untuk mengambil properti yang tersisa dari objek:

```jsx
const orang = { nama: "Budi", umur: 25, pekerjaan: "Developer" };
const { nama, ...sisa } = orang;

console.log(nama); // Output: Budi
console.log(sisa); // Output: { umur: 25, pekerjaan: 'Developer' }
```

Dengan menggunakan rest operator, kita bisa mengambil properti `nama` secara terpisah dan menyisakan objek lain dalam variabel `sisa`.

### Kapan Harus Menggunakan Spread dan Rest Operator?

- Spread Operator: Sangat berguna saat kamu perlu menyalin atau menggabungkan array/objek, atau bahkan saat ingin menggabungkan properti objek tanpa mengubah objek asli.
- Rest Operator: Digunakan saat kamu ingin mengumpulkan parameter dalam fungsi atau elemen dalam array/objek, yang memungkinkan fleksibilitas dalam menangani data dinamis.

Dengan memahami dan memanfaatkan spread dan rest operator, kamu akan bisa mengolah data lebih fleksibel dan efisien, tanpa harus menulis kode yang terlalu rumit. Ini adalah skill penting yang akan sering kamu pakai dalam pengembangan React dan JavaScript secara umum.

## Template Literals: Cara Mudah Bikin String Dinamis

Template literals adalah fitur yang memungkinkan kamu untuk menyisipkan variabel ke dalam string tanpa harus repot menambah tanda `+` atau menggabung-gabungkan string secara manual.

Sebelum ada template literals, menyisipkan variabel ke dalam string cukup merepotkan, terutama kalau kamu perlu menambahkan banyak data atau bikin kalimat yang kompleks.

### Membuat Template Literal

Template literals menggunakan tanda backtick ``` (bukan tanda petik biasa `'` atau `"`) untuk mengelilingi teks. Di dalam tanda backtick ini, kamu bisa langsung menyisipkan variabel menggunakan `${}`.

Contoh tanpa template literals:

```jsx
const nama = "Andi";
const sapaan = "Hello, " + nama + "!";
console.log(sapaan); // Output: Hello, Andi!
```

Dengan template literals, kamu bisa nulisnya jadi lebih ringkas dan mudah dibaca:

```jsx
const nama = "Andi";
const sapaan = `Hello, ${nama}!`;
console.log(sapaan); // Output: Hello, Andi!
```

### Menggunakan Ekspresi di Dalam `${}`

Gak cuma variabel, kamu juga bisa melakukan perhitungan atau ekspresi lain di dalam `${}`.

Contoh:

```jsx
const a = 5;
const b = 10;
console.log(`Hasil dari ${a} + ${b} adalah ${a + b}.`); 
// Output: Hasil dari 5 + 10 adalah 15.
```

### Menulis String dengan Beberapa Baris

Sebelum template literals, kalau kamu mau bikin string dengan beberapa baris, kamu harus pakai `\\n` untuk menandai baris baru, atau menggabungkan beberapa string.

Contoh tanpa template literals:

```jsx
const pesan = "Selamat datang!\\nIni adalah baris kedua.\\nIni adalah baris ketiga.";
console.log(pesan);
```

Dengan template literals, kamu bisa menulis langsung string dengan beberapa baris:

```jsx
const pesan = `Selamat datang!
Ini adalah baris kedua.
Ini adalah baris ketiga.`;
console.log(pesan);
```

Output-nya akan muncul dalam beberapa baris, persis seperti yang kamu tulis.

Nah, itu dia penjelasan tentang template literals! Fitur ini bikin penulisan string yang melibatkan variabel jadi jauh lebih cepat, rapi, dan mudah dibaca.

## Array Methods: Fitur Serba Bisa untuk Mengelola Data

Array methods ini adalah kumpulan fitur di JavaScript yang bikin kamu bisa melakukan berbagai macam manipulasi data dalam array dengan mudah dan efisien.

Metode-metode ini sering banget dipakai untuk mengelola data di React, jadi memahami mereka dari dasar bakal ngebantu kamu banget.

Array methods ini banyak banget jumlahnya, tapi kita bakal fokus ke yang paling sering dipakai dalam pengembangan aplikasi, terutama di React.

### **map()** – Membuat Array Baru

`map()` bisa dipakai untuk looping, tapi bedanya `map()` menghasilkan array baru dengan memproses setiap elemen dalam array asli. Jadi, kalau perlu mengubah isi array, `map()` adalah pilihan yang tepat.

Contoh:

```jsx
const angka = [1, 2, 3, 4, 5];
const kaliDua = angka.map((item) => item * 2);

console.log(kaliDua); // Output: [2, 4, 6, 8, 10]
```

Di sini, `map()` membuat array baru (`kaliDua`) yang berisi setiap elemen dari `angka` dikalikan dua. Array asli (`angka`) tetap sama dan tidak berubah.

### **filter()** – Menyaring Data

`filter()` dipakai kalau kamu mau nyaring data dalam array berdasarkan kondisi tertentu, dan hanya elemen yang memenuhi kondisi itu yang akan disimpan dalam array baru.

Contoh:

```jsx
const angka = [1, 2, 3, 4, 5];
const genap = angka.filter((item) => item % 2 === 0);

console.log(genap); // Output: [2, 4]
```

Di sini, `filter()` menghasilkan array baru yang cuma berisi angka genap (`[2, 4]`). Array asli tetap tidak berubah.

### **find()** – Mencari Elemen Pertama yang Cocok

`find()` mirip dengan `filter()`, tapi bedanya `find()` hanya mengembalikan elemen pertama yang cocok dengan kondisi, bukan semua elemen.

Contoh:

```jsx
const angka = [1, 2, 3, 4, 5];
const pertamaGenap = angka.find((item) => item % 2 === 0);

console.log(pertamaGenap); // Output: 2
```

Di sini, `find()` hanya mengembalikan angka genap pertama yang ketemu, yaitu `2`.

### **reduce()** – Mengakumulasikan Nilai

`reduce()` adalah metode yang sering dipakai untuk mengakumulasikan nilai, misalnya buat menghitung total atau menggabungkan data. `reduce()` memerlukan dua parameter utama: *accumulator* (akumulator) dan nilai saat ini.

Contoh:

```jsx
const angka = [1, 2, 3, 4, 5];
const total = angka.reduce((acc, item) => acc + item, 0);

console.log(total); // Output: 15
```

Di sini, `reduce()` mengakumulasi setiap elemen dalam array `angka`, menghasilkan jumlah total `15`. Nilai `0` di akhir adalah nilai awal dari *accumulator* (biasanya `0` atau `[]`).

Setelah paham array methods ini, kamu bisa dengan mudah melakukan banyak manipulasi data di aplikasi kamu!

## Async JavaScript: Callback, Promises, dan async/await

Sekarang kita masuk ke topik yang cukup penting di JavaScript, terutama ketika bekerja dengan aplikasi web yang memerlukan interaksi dengan server atau API, yaitu Async JavaScript.

Di sini, kita bakal bahas tentang *callback*, *promises*, dan `async/await`. Dengan memahami ketiganya, kamu bisa menulis kode yang lebih efisien dan mudah dibaca, terutama ketika kamu bekerja dengan operasi yang memerlukan waktu, seperti pengambilan data dari server.

### Apa Itu Async JavaScript?

JavaScript adalah bahasa pemrograman yang single-threaded, artinya hanya bisa mengeksekusi satu hal dalam satu waktu.

Nah, masalahnya adalah banyak operasi yang butuh waktu lama untuk selesai, seperti memuat data dari API atau menyimpan data ke database.

Untuk menghindari aplikasi jadi "terhenti" atau "lag" selama proses tersebut, kita menggunakan cara untuk menjalankan operasi secara asynchronous.

### **Callback** – Cara Awal Menangani Asynchronous

Dulu, sebelum ada `Promise` dan `async/await`, kita biasanya menggunakan callback untuk menangani operasi yang membutuhkan waktu, misalnya mengambil data dari server.

**Apa itu Callback?**

Callback adalah sebuah function yang diteruskan sebagai argumen ke function lain dan akan dieksekusi setelah operasi selesai. Callback sering dipakai dalam operasi asynchronous, seperti pengambilan data atau gambar.

Contoh dengan callback:

```jsx
function ambilData(callback) {
  setTimeout(() => {
    console.log("Data berhasil diambil!");
    callback("Data lengkap");  // Callback dengan data yang diambil
  }, 2000);
}

ambilData((data) => {
  console.log("Menggunakan data:", data);
});
```

Penjelasan:

- Fungsi `ambilData()` memerlukan waktu 2 detik untuk menyelesaikan tugasnya (diwakili oleh `setTimeout`).
- Setelah selesai, callback yang diberikan akan dipanggil, dan kita bisa menggunakan data yang telah diambil.

**Kekurangan Callback**

Salah satu masalah utama dengan callback adalah callback hell, yaitu ketika kita menulis banyak callback bertingkat yang bisa bikin kode sulit dibaca dan dipelihara.

Contoh callback hell:

```jsx
fungsiA((resultA) => {
  fungsiB((resultB) => {
    fungsiC((resultC) => {
      console.log(resultA, resultB, resultC);
    });
  });
});
```

Seiring berkembangnya JavaScript, muncul solusi lain yang lebih rapi, yaitu **Promise**.

### **Promises** – Solusi untuk Callback Hell

Promise merupakan cara yang lebih rapi untuk menangani operasi asynchronous. Dengan Promise, kita bisa menangani hasil dari operasi yang bisa selesai sekarang atau nanti (misalnya saat mengambil data).

**Apa itu Promise?**

Promise adalah sebuah objek yang mewakili nilai yang mungkin belum tersedia, tapi akan tersedia di masa depan. Promise memiliki tiga status:

1. Pending – Ketika Promise belum selesai.
2. Fulfilled – Ketika Promise berhasil dan nilai tersedia.
3. Rejected – Ketika terjadi error.

Contoh penggunaan Promise:

```jsx
function ambilData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const sukses = true; // Coba ganti dengan false untuk error
      if (sukses) {
        resolve("Data berhasil diambil!");
      } else {
        reject("Terjadi kesalahan");
      }
    }, 2000);
  });
}

ambilData()
  .then((data) => {
    console.log(data); // Output: Data berhasil diambil!
  })
  .catch((error) => {
    console.log(error); // Output: Terjadi kesalahan
  });
```

Penjelasan:

- `ambilData()` mengembalikan sebuah Promise.
- Jika operasi berhasil, kita panggil `resolve()` dan data akan dikirim ke bagian `.then()`.
- Jika ada error, kita panggil `reject()` dan error tersebut akan dikirim ke `.catch()`.

### **async/await** – Sintaks Modern dan Lebih Mudah Dibaca

`async/await` adalah sintaks modern di JavaScript yang dibangun di atas Promise. Fitur ini membuat kode asynchronous lebih mudah dibaca dan ditulis, hampir seperti kode synchronous.

**Apa itu `async` dan `await`?**

- `async` adalah keyword yang digunakan untuk mendeklarasikan sebuah fungsi yang akan mengembalikan sebuah Promise.
- `await` hanya bisa dipakai di dalam fungsi `async` dan digunakan untuk menunggu hasil dari Promise sebelum melanjutkan eksekusi.

Contoh menggunakan `async/await`:

```jsx
async function ambilData() {
  const data = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data berhasil diambil!");
    }, 2000);
  });
  console.log(data);
}

ambilData(); // Output: Data berhasil diambil!
```

Penjelasan:

- Kita membuat fungsi `ambilData()` menjadi `async` untuk bisa menggunakan `await` di dalamnya.
- Dengan `await`, kita tunggu hingga Promise selesai dan mendapatkan hasilnya sebelum melanjutkan eksekusi kode.

**Menangani Error dengan `try/catch`**

Ketika menggunakan `async/await`, kita bisa menangani error menggunakan `try/catch`, yang membuat penanganan error jadi lebih jelas dan mudah.

Contoh:

```jsx
async function ambilData() {
  try {
    const data = await new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Terjadi kesalahan");
      }, 2000);
    });
    console.log(data);
  } catch (error) {
    console.log(error); // Output: Terjadi kesalahan
  }
}

ambilData();
```

Dengan memahami callback, Promise, dan `async/await`, kamu bisa menulis kode yang lebih efisien dan mudah dipahami, terutama dalam pengembangan aplikasi React yang sering berinteraksi dengan server atau API. Ketiga hal ini adalah dasar yang sangat penting untuk dipelajari.

## Modules: Import dan Export di JavaScript

Di dalam JavaScript, kita bisa menggunakan fitur module untuk membagi kode menjadi bagian-bagian yang lebih kecil, yang bisa diimpor dan diekspor antar file.

Ini sangat penting, terutama saat kamu bekerja dengan proyek besar seperti aplikasi React, karena membantu menjaga kode tetap terorganisir.

### Apa Itu Modules di JavaScript?

Modules di JavaScript adalah cara untuk membagi kode ke dalam file-file terpisah, sehingga kamu bisa mengimpor dan mengekspor fungsionalitas antar file tersebut.

Fitur ini memungkinkan kamu untuk menulis kode yang lebih modular, mudah dipelihara, dan reusable. Dengan menggunakan module, kamu bisa mengorganisir kode dengan lebih rapi dan membuatnya lebih efisien.

Secara sederhana:

- Export digunakan untuk mengekspor fungsionalitas dari suatu file atau modul.
- Import digunakan untuk mengambil fungsionalitas yang sudah diekspor ke dalam file lain.

### **Export** – Menyediakan Fungsionalitas dari Sebuah Modul

Di JavaScript, kita bisa mengekspor berbagai jenis data dari sebuah file, seperti variabel, fungsi, atau kelas. Untuk melakukan ini, kita menggunakan keyword `export`.

**Export Default**

`export default` digunakan untuk mengekspor satu nilai atau entitas utama dari sebuah file. Biasanya digunakan untuk mengekspor kelas atau fungsi yang menjadi "andalan" di file tersebut.

Contoh:

```jsx
// file: kalkulator.js
export default function tambah(a, b) {
  return a + b;
}
```

Di sini, kita mengekspor sebuah fungsi `tambah()` sebagai default export. Ini berarti kita hanya bisa mengekspor satu hal sebagai default dari file ini.

**Export Named**

Selain `default`, kita juga bisa menggunakan named export untuk mengekspor beberapa entitas sekaligus. Dengan named export, kita bisa mengekspor lebih dari satu fungsi, variabel, atau kelas.

Contoh:

```jsx
// file: matematika.js
export function tambah(a, b) {
  return a + b;
}

export function kurang(a, b) {
  return a - b;
}
```

Pada contoh di atas, kita mengekspor dua fungsi secara terpisah: `tambah()` dan `kurang()`.

### **Import** – Mengambil Fungsionalitas dari Modul Lain

Setelah kita mengekspor sesuatu dari sebuah file, kita bisa mengimpornya ke file lain. Untuk melakukannya, kita menggunakan keyword `import`.

**Import Default**

Jika kita mengekspor sesuatu dengan `export default`, kita bisa mengimpor entitas tersebut dengan nama yang bebas.

Contoh:

```jsx
// file: app.js
import tambah from './kalkulator';

console.log(tambah(5, 3)); // Output: 8
```

Karena `tambah()` diekspor sebagai default, kita bisa memberi nama apa saja saat mengimpornya, seperti `tambah` di contoh di atas.

**Import Named**

Jika kita mengekspor dengan named exports, kita harus menggunakan nama yang sama seperti yang diekspor.

Contoh:

```jsx
// file: app.js
import { tambah, kurang } from './matematika';

console.log(tambah(5, 3)); // Output: 8
console.log(kurang(5, 3)); // Output: 2
```

Di sini, kita mengimpor fungsi `tambah` dan `kurang` dengan menggunakan nama yang sama seperti yang diekspor dari file `matematika.js`.

### **Menggunakan Aliases saat Import**

Kadang kita ingin memberi nama lain saat mengimpor modul, terutama jika ada konflik nama. Untuk itu, kita bisa menggunakan `as` untuk memberikan alias pada fungsi atau variabel.

Contoh:

```jsx
// file: app.js
import { tambah as add, kurang as subtract } from './matematika';

console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2
```

Di sini, kita memberikan alias `add` untuk `tambah` dan `subtract` untuk `kurang`.

### **Import Seluruh Modul**

Selain mengimpor entitas tertentu, kita juga bisa mengimpor seluruh isi modul ke dalam sebuah objek. Ini berguna jika kamu ingin mengakses semua fungsi atau data yang ada dalam modul tanpa harus mengimpor satu per satu.

Contoh:

```jsx
// file: app.js
import * as matematika from './matematika';

console.log(matematika.tambah(5, 3)); // Output: 8
console.log(matematika.kurang(5, 3)); // Output: 2
```

Dengan `import * as matematika`, kita mengimpor seluruh entitas yang ada dalam file `matematika.js` dan mengaksesnya lewat objek `matematika`.

Dengan memahami Import dan Export, kamu bisa menulis kode yang lebih modular, mudah dipelihara, dan scalable.

Fitur ini sangat krusial, terutama saat kamu mulai membangun aplikasi besar menggunakan framework seperti React, yang juga menggunakan module untuk mengorganisir komponen-komponennya.

Oke, kita sampai di bagian terakhir! Setelah kita membahas berbagai konsep JavaScript yang penting untuk mempersiapkan kamu belajar React, sekarang saatnya untuk menarik kesimpulan dan memastikan kamu siap untuk terjun ke dunia React yang seru.

## Kesimpulan: Siap Berangkat ke Dunia React!

Sekarang, setelah mempelajari berbagai konsep dasar JavaScript yang harus kamu kuasai sebelum mulai belajar React, kamu harusnya sudah lebih percaya diri dan siap menghadapi tantangan baru.

React bisa terasa sedikit menantang di awal, tapi percayalah, dengan dasar JavaScript yang kuat, kamu bakal lebih mudah untuk memahaminya!

### Siap Berangkat ke React!

Dengan menguasai konsep-konsep di atas, kamu udah siap untuk memulai perjalanan belajar React. React adalah library JavaScript yang powerful dan fleksibel. Beberapa hal yang perlu kamu ingat sebelum mulai:

1. Berpikir dalam Komponen: React bekerja berdasarkan komponen, jadi kamu perlu terbiasa untuk membagi UI menjadi bagian-bagian kecil yang dapat digunakan kembali.
2. State dan Props: Dua konsep dasar di React yang akan sering kamu pakai. State adalah tempat menyimpan data internal komponen, sedangkan props adalah cara mengirimkan data dari satu komponen ke komponen lain.
3. JSX: Di React, kamu akan menulis kode menggunakan JSX, yang adalah sintaks mirip HTML di dalam JavaScript. Walaupun terlihat sedikit aneh di awal, JSX sebenarnya sangat memudahkan dalam membuat UI.
4. React Hooks: Hooks seperti `useState`, `useEffect`, dan `useContext` adalah fitur penting yang memungkinkan kamu untuk menggunakan state dan lifecycle methods di komponen fungsional. Jadi, mempelajari hooks akan sangat membantu kamu dalam mengembangkan aplikasi React.

### Apa Selanjutnya?

Setelah merasa siap dengan dasar JavaScript yang kuat, langkah berikutnya adalah mulai belajar React itu sendiri! Ada banyak tutorial dan dokumentasi yang tersedia untuk memulai, dan banyak dari mereka yang sangat ramah untuk pemula.

Jangan takut untuk mencoba, bereksperimen, dan belajar dengan kesalahan.

Yang paling penting adalah jangan terburu-buru. Belajar React butuh waktu, dan semakin banyak kamu berlatih, semakin mudah semuanya akan terasa. Di perjalanan ini, pastikan untuk selalu bersabar dan nikmati proses belajar kamu.

Selamat datang di dunia pengembangan web yang seru dan penuh tantangan! Dengan dasar JavaScript yang sudah kamu kuasai, React akan jadi petualangan yang lebih menyenankan.

So, siap untuk membangun aplikasi web kamu sendiri dengan React? Semoga artikel ini membantu kamu untuk lebih siap melangkah! 🌟

Dengan begini, kamu siap untuk mulai eksplorasi lebih dalam ke React dan membuat aplikasi web keren yang kamu impikan. Selamat belajar dan semoga sukses!