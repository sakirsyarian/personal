---
title: Panduan Integrasi JavaScript dengan REST API untuk Pemula
description: Belajar cara mudah integrasi JavaScript dengan REST API. Panduan lengkap untuk pemula dan best practices yang bisa kamu terapkan.
date: 2024-09-08
img: /newsletter/rest-api-js.png
---

![Rest API!](/newsletter/rest-api-js.png)

Pernah nggak sih, kamu ngeliat website atau aplikasi yang bisa update data secara otomatis tanpa perlu di-refresh?

Nah, di balik itu semua ada yang namanya REST API. Kalo kamu pengen tau gimana cara JavaScript ‘ngobrol’ sama server dan ambil data, kamu lagi di tempat yang pas!

Di artikel ini, kita bakal bahas cara paling simpel integrasi REST API dengan JavaScript. Santai aja, dijamin gampang buat diikutin meskipun kamu baru belajar JavaScript!

### Pengenalan REST API

Kita mulai dengan pertanyaan paling dasar: Apa sih REST API itu?

Sebelum masuk lebih dalam, bayangin dulu kamu lagi chatting sama temen lewat aplikasi pesan. Kamu kirim pesan, temen kamu bales, dan komunikasi lancar.

Nah, secara konsep, REST API tuh mirip kayak gitu—hanya bedanya yang ‘ngobrol’ di sini bukan manusia, tapi aplikasi sama server.

REST sendiri singkatan dari Representational State Transfer, yang sebenarnya cuma sebuah style atau aturan buat bikin aplikasi berbasis web lebih fleksibel.

Terus API itu singkatan dari Application Programming Interface, yang bisa dibilang kayak jembatan penghubung antara aplikasi dengan data yang ada di server.

Contoh simpel: misalnya kamu buka aplikasi cuaca di ponsel atau di web. Aplikasi itu belum tentu punya data cuaca sendiri, kan? Dia ambil data dari server lewat REST API.

Di era sekarang, aplikasi nggak bisa hidup sendirian. Hampir semua aplikasi butuh data yang up-to-date, kayak data pengguna, produk, artikel, atau bahkan update cuaca tadi.

Nah, di sinilah REST API berperan. Dia ngebantu aplikasi ngambil (atau kirim) data ke server tanpa ribet, bahkan dari jarak jauh.

Singkatnya, kalo kamu pengen bikin aplikasi yang bisa ambil data dari database, atau update konten secara otomatis, kamu butuh REST API!

## Cara Kerja REST API dengan JavaScript

Sebelumnya kita udah bahas kalau REST API itu ibarat jembatan antara aplikasi kita dengan server. Nah, sekarang kita bahas gimana sih komunikasi itu terjadi.

REST API menggunakan protokol HTTP untuk berkomunikasi. Kamu pasti udah nggak asing lagi dengan HTTP, kan? Itu lho, yang muncul di awal URL website (*http://*). Protokol ini punya beberapa metode yang biasa dipakai, yaitu:

1. GET: Buat ngambil data dari server.
2. POST: Buat ngirim data baru ke server.
3. PUT: Buat update data yang udah ada.
4. DELETE: Buat hapus data di server.

### JavaScript sebagai 'Kurir' Komunikasi

JavaScript berperan penting dalam komunikasi ini. Dia yang jadi 'kurir' yang ngirim permintaan ke server dan nerima balasan dari server. Dengan JavaScript, kita bisa bikin aplikasi web yang interaktif tanpa perlu reload halaman terus-menerus.

Ada beberapa cara buat melakukan request HTTP di JavaScript:

- `XMLHttpRequest`: cara lama yang masih dipakai, tapi agak ribet.
- `fetch()`: cara modern yang lebih simpel dan mudah dipahami.
- Axios: library yang punya fitur lebih lengkap dan mudah digunakan.

### Contoh Sederhana Komunikasi dengan `fetch()`

Biar lebih kebayang, kita coba contoh sederhana pake `fetch()`. Misalnya, kita mau ngambil data pengguna dari sebuah API.

```jsx
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Di sini kita bisa olah data yang diterima
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

Di contoh ini, kita pake `fetch()` buat minta data ke sebuah API yang punya endpoint `https://jsonplaceholder.typicode.com/posts`.

Data yang didapetin dari server (biasanya dalam bentuk JSON) terus kita parsing dulu pake `.json()` biar JavaScript bisa ngerti dan ngelola data itu. Kalo udah dapet, kita tampilin deh di console.

Supaya nggak bingung, yuk kita breakdown gimana sih alur kerja `fetch()` ini:

1. `fetch('API_ENDPOINT')`: pertama, kita panggil API-nya lewat URL-nya. Di sini, kita kirim request ke server buat minta data dari endpoint tertentu.
2. `.then(response => response.json())`: kalo server berhasil nge-response, kita dapet data mentah (raw data). Karena biasanya server ngirim datanya dalam format JSON, kita perlu nge-parse dulu biar jadi object JavaScript yang bisa kita pakai.
3. `.then(data => console.log(data))`: setelah data berhasil diparse, kita bisa olah. Di contoh ini, kita cuma tampilin data di console, tapi nanti kita bisa pake data ini buat tampil di web.
4. `.catch(error => console.log('Error:', error))`: kalo ada masalah (misalnya server nggak bisa diakses atau URL salah), kita bakal tangkep error-nya biar program kita nggak crash.

## Membuat Request API Pertama Kamu (Ayo coba!)

Sebelumnya, kita udah kenalan sama REST API dan cara kerjanya. Sekarang, saatnya kamu langsung coba bikin request pertama kamu. Di sini kita akan pakai `fetch()` karena ini cara yang paling simpel dan modern buat ngirim request di JavaScript.

Kita akan ambil contoh sederhana, misalnya ambil data pengguna dari API publik. Data ini nanti bisa ditampilkan di website kamu.

**Siapkan API URL**

Kita butuh URL API yang bisa diakses untuk ambil data. Untuk latihan ini, kita pakai API gratis dari JSONPlaceholder: `https://jsonplaceholder.typicode.com/users`

URL ini bakal ngasih kita data tentang user-user palsu yang bisa kita tampilkan di website.

**Bikin Request dengan** `fetch()`

Sekarang kita mulai bikin request pakai `fetch()` di JavaScript. Coba masukkan kode ini ke dalam file HTML atau JavaScript kamu:

```jsx
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json()) // Ubah response jadi JSON
  .then(data => {
    console.log(data); // Tampilkan data di console
  })
  .catch(error => {
    console.error('Error:', error); // Tampilkan error kalo gagal
  });
```

**Tes di Browser**

Kalau kamu buka developer tools di browser (biasanya tekan F12) dan lihat di bagian Console, kamu bakal lihat daftar user yang diambil dari API tadi. Gampang kan?

### HTTP Status Codes

Selain itu, setiap kali kamu kirim request ke REST API, server bakal balikin status code yang ngasih tau hasil request kamu. Ini penting buat dipahami biar tau apakah request kamu berhasil atau ada yang salah. Beberapa status code yang sering dipake:

- 200 OK: request berhasil, dan data yang diminta dikirim balik.
- 404 Not Found: endpoint atau data yang diminta nggak ketemu.
- 500 Internal Server Error: ada masalah di sisi server.

### Penjelasan Lebih Detail

Waktu kamu ngirim request ke API, browser bakal nunggu server ngerespons. Kalau berhasil, dia bakal dapet data yang biasanya dikirim dalam format JSON (JavaScript Object Notation). JSON ini mirip objek JavaScript, jadi gampang banget diolah di kode kamu.

Misalnya, hasil dari API bisa terlihat seperti ini:

```json
[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz"
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv"
  },
  ...
]
```

Setiap objek dalam array di atas mewakili data satu pengguna. Kamu bisa ngolah data ini lebih lanjut, misalnya ditampilkan di halaman web.

### Menampilkan Data di Halaman Web

Sekarang, coba kita tampilkan data user tadi di halaman web. Misalnya, kita mau tampilkan nama dan email user. Kita bisa modifikasi sedikit kode tadi:

```jsx
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    let users = document.getElementById('userList'); // Ambil elemen di HTML
    data.forEach(user => {
      let listItem = document.createElement('li');
      listItem.textContent = `${user.name} (${user.email})`;
      users.appendChild(listItem); // Tambahkan ke daftar
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

Di HTML-nya, jangan lupa tambahin elemen yang bakal nampung data ini:

```html
<ul id="userList"></ul>
```

Hasilnya, di browser kamu nanti bakal muncul daftar nama dan email user yang diambil dari API.

Selamat! Kamu udah berhasil bikin request API pertama kamu, ngambil data, dan nampilin data itu di halaman web. Ini baru langkah awal, tapi dari sini kamu udah bisa ngerasain betapa powerful-nya REST API dalam membuat aplikasi yang dinamis.

## Handling Response: Mengolah Data dari API

Ketika kamu ngirim request ke API, data yang kamu dapat dari server biasanya dalam bentuk mentah (raw data), sering kali berupa JSON. Nah, data ini perlu diolah dulu supaya bisa ditampilkan dengan rapi di aplikasi atau website kamu.

Misalnya, kamu ambil data pengguna dari API, tapi kamu cuma butuh nama dan emailnya aja. Di sinilah kemampuan mengolah response jadi penting banget.

### Cara Mengecek Status Response

Sebelum kita olah datanya, hal pertama yang harus kita lakukan adalah ngecek status response dari API. Ini buat memastikan request kita berhasil atau nggak.

Caranya gampang, kamu bisa cek status code dari response-nya. Umumnya, kalo request berhasil, status code yang dikirim server adalah 200.

```jsx
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (response.ok) {
      return response.json(); // Kalo berhasil, ubah ke JSON
    } else {
      throw new Error('Request gagal dengan status: ' + response.status);
    }
  })
  .then(data => {
    console.log(data); // Data berhasil diambil
  })
  .catch(error => {
    console.error('Error:', error); // Tampilkan error kalo ada
  });
```

Kalo kamu bedah atau ngeliat syntax `response.ok` ini adalah boolean (true/false) yang menunjukkan apakah response berhasil atau tidak.

Sedangkan `response.status` ini adalah status code. Kalo `response.ok` false, kita bisa liat error-nya dari sini (misalnya 404 untuk "Not Found" atau 500 untuk "Internal Server Error").

### Mengubah Response Jadi Format JSON

Seperti yang udah kita bahas sebelumnya, response dari API biasanya dalam bentuk JSON. Untuk ngolah data ini di JavaScript, kita perlu mengubahnya jadi objek yang bisa kita gunakan, yaitu dengan `response.json()`.

Misalnya, data yang kita dapet dari API user tadi berbentuk kayak gini:

```json
[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz"
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv"
  }
]
```

Data di atas berbentuk array yang isinya beberapa objek. Tiap objek mewakili satu user dengan beberapa atribut, kayak `id`, `name`, `username`, dan `email`.

### Contoh Pengolahan Data

Setelah kita ubah response jadi JSON, kita bisa mulai mengolahnya sesuai kebutuhan. Misalnya, kita hanya mau nampilin nama dan email pengguna. Kita bisa pake loop buat ambil data yang kita mau dan tampilkan di halaman web.

Berikut contoh kodenya:

```jsx
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json()) // Ubah response jadi JSON
  .then(data => {
    data.forEach(user => {
      console.log(`Nama: ${user.name}, Email: ${user.email}`);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

Kita pake `forEach()` buat loop tiap user di data JSON. Sedangkan `${user.name}` dan `${user.email}` adalah cara kita akses properti `name` dan `email` dari objek user.

### Menampilkan Data di Halaman Web

Kalau kamu mau tampilkan data ini di halaman web (bukan cuma di console), kamu bisa modifikasi sedikit kode HTML dan JavaScript-nya. Misalnya:

HTML:

```html
<ul id="userList"></ul>
```

JavaScript:

```jsx
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    let userList = document.getElementById('userList'); // Ambil elemen HTML
    data.forEach(user => {
      let listItem = document.createElement('li'); // Bikin elemen <li>
      listItem.textContent = `${user.name} - ${user.email}`; // Isi dengan nama & email
      userList.appendChild(listItem); // Tambahin ke <ul> di HTML
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

Hasilnya, di halaman web kamu bakal muncul daftar user kayak gini:

- Leanne Graham - [Sincere@april.biz](mailto:Sincere@april.biz)
- Ervin Howell - [Shanna@melissa.tv](mailto:Shanna@melissa.tv)
- ...

## Error Handling dalam API Requests

Dalam dunia nyata, ngirim request ke API itu nggak selalu berjalan mulus. Banyak hal bisa bikin error, kayak jaringan yang lagi jelek, API server yang down, atau bahkan masalah dari kode kita sendiri.

Nah, error handling bertujuan buat nge-handle semua kemungkinan ini dan ngasih feedback yang jelas ke user, misalnya dengan menampilkan pesan error yang friendly.

Contoh simpel: misalnya kamu lagi pesan makanan online, tapi tiba-tiba koneksi putus. Di aplikasi yang bagus, bakal muncul pesan error kayak "Oops! Koneksi kamu bermasalah, coba lagi ya!" daripada aplikasi yang langsung nge-freeze atau crash.

Berikut beberapa jenis error yang paling sering muncul saat kita bekerja dengan REST API:

1. Network error: koneksi internet kamu putus atau server nggak bisa dihubungi.
2. Response error: API ngirim response yang bermasalah, misalnya status 404 (Not Found) atau 500 (Internal Server Error).
3. Parsing error: data dari API nggak bisa diubah jadi format yang bisa kita pakai (misalnya JSON).
4. Timeout error: permintaan ke server terlalu lama dan akhirnya gagal.

### Menangani Error dengan `catch()`

Cara paling umum buat nangkep error di request API adalah dengan menggunakan **`catch()`**. Ini fungsinya buat nangkep semua error yang mungkin terjadi selama proses request. Contohnya:

```jsx
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Gagal mengambil data:', error);
  });
```

Kita cek apakah status response sukses atau nggak, dengan cara `if (!response.ok)`. Kalau gagal, kita lempar error pake `throw new Error()`.

Di `catch(error)`, kita nangkep semua error, baik dari network problem, response error, atau parsing error. Kita bisa tampilin pesan yang sesuai di console atau langsung di UI.

### Membuat Pesan Error yang User-Friendly

Buat aplikasi yang user-friendly, jangan cuma tampilin error di console, tapi juga di UI, biar pengguna tau apa yang terjadi. Misalnya, kita bisa tampilin pesan error di halaman website:

```jsx
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) {
      throw new Error(`Terjadi kesalahan, status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Menampilkan data di halaman
  })
  .catch(error => {
    document.getElementById('errorMessage').textContent = error.message;
  });
```

Di HTML, kamu bisa tambahin elemen buat nampilin pesan error:

```html
<p id="errorMessage" style="color: red;"></p>
```

Hasilnya, kalau ada error, pesan error bakal muncul di halaman dengan warna merah, jadi user langsung tau ada yang salah.

### Membuat Error Handling yang Baik

Biar error handling kamu rapi dan mudah di-maintain, kamu bisa bikin fungsi khusus buat nangani error di satu tempat. Misalnya:

```jsx
function handleError(error) {
  let errorMessage = '';
  if (error.message.includes('timeout')) {
    errorMessage = 'Koneksi terlalu lambat. Coba lagi nanti.';
  } else {
    errorMessage = 'Terjadi kesalahan: ' + error.message;
  }
  document.getElementById('errorMessage').textContent = errorMessage;
}

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(handleError);
```

Dengan begitu, kalau ada error, kita tinggal panggil fungsi `handleError()` dan aplikasi kita bisa ngasih feedback yang jelas dan friendly ke user.

## Kesimpulan

Mengintegrasikan JavaScript dengan REST API sebenarnya bukan hal yang sulit, asalkan kamu paham langkah-langkah dasarnya dan mengikuti langkah-langkah yang udah kita bahas.

Mulai dari GET request buat ngambil data, sampai menangani error dan menggunakan teknik asynchronous programming, semuanya penting untuk memastikan aplikasi kamu berjalan lancar dan efisien.

Dengan pemahaman ini, kamu bisa lebih percaya diri dalam menggunakan JavaScript untuk berkomunikasi dengan REST API. Semakin sering kamu latihan dan membangun aplikasi dengan integrasi API, semakin lancar juga kamu dalam menangani berbagai situasi yang mungkin muncul.