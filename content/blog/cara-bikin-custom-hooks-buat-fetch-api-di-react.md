---
title: Cara Bikin Custom Hooks Buat Fetch API di React
description: Belajar bikin custom hooks di React untuk fetch API! Tingkatkan efisiensi kode dengan langkah mudah dan tips optimasi.
date: 2024-09-06
img: /newsletter/custom-hooks.png
---

![Custom Hooks!](/newsletter/custom-hooks.png)

Ketika bikin aplikasi React, pasti sering kan butuh ambil data dari API?

Nah, kalau tiap komponen harus ngoding ulang proses fetching, kode kamu bisa jadi berantakan dan sulit di-maintain. Tapi tenang, ada cara keren buat bikin kode kamu lebih rapi dan efisien, yaitu dengan **custom hooks**!

Dengan custom hooks, kamu bisa nge-*fetch* data di mana aja, kapan aja, tanpa ribet. Yuk, ikuti panduan ini buat bikin custom hooks yang reusable dan optimal dari awal sampai akhir!

### Kenalan Dulu Sama Custom Hooks

Nah, sebelum kita loncat langsung ke cara bikin custom hooks, kita harus ngerti dulu apa sih custom hooks itu?

Jadi, custom hooks di React itu sebenarnya adalah "resep rahasia". Kita sendiri yang mengorganisir ulang fungsi-fungsi yang sering kita pakai itu.

Kamu pasti udah familiar dengan yang namanya *state management* dan *side effects* di React kan? (misalnya: `useState`, `useEffect`).

Nah, custom hooks itu ibarat kamu bikin fungsi khusus yang di dalamnya bisa ngumpulin banyak logic React Hooks seperti `useState`, `useEffect`, dan lainnya, terus fungsi ini bisa dipakai ulang berkali-kali di berbagai komponen.

Jadi, bayangin kamu bikin satu alat serba guna yang bisa kamu pakai di mana aja!

Gini deh, kalau sering fetch data dari API di beberapa komponen berbeda, biasanya kamu bakal copy-paste logic yang sama berulang kali, kan? Nah, itu kurang efisien.

Dengan custom hooks, kamu bisa bikin logic fetch API itu sekali aja, terus tinggal "panggil" di komponen yang butuh. Simpel, rapih, dan reusable!

Intinya**,** custom hooks itu cara kita buat nge-*wrap* beberapa logic jadi satu fungsi yang reusable. Ini bikin kode kita lebih bersih, mudah dirawat, dan nggak berantakan.

### Kenapa Kita Butuh Custom Hooks?

Kenapa sih perlu repot-repot bikin custom hooks, bukannya bisa langsung aja bikin fungsi di dalam komponen?

Nah, coba bayangin kalau kamu punya banyak komponen yang semuanya perlu fetch data. Kalau kamu nggak pakai custom hooks, setiap kali fetch data, kamu bakal copy-paste kode yang sama terus-terusan di tiap komponen. Hasilnya? Kodenya bakal panjang dan susah dirawat.

Keuntungan pakai custom hooks:

1. Bersih dan rapih: alih-alih copy paste logic di tiap komponen, cukup tulis sekali di custom hooks.
2. Reuse: bisa pakai custom hooks yang sama di banyak tempat. Fleksibel!
3. Mudah di-debug: karena logiknya terpusat, gampang buat tracing error kalau ada masalah.
4. Modular: kode lebih terstruktur, gampang dimodifikasi tanpa ngacak-ngacak seluruh komponen.

### Sekilas Tentang Fetch API di React

Nah, buat yang masih baru di dunia React, Fetch API adalah cara kita buat ambil data dari server (biasanya dari database atau layanan eksternal) dan nunjukin datanya di aplikasi kita.

Misalnya, kamu mau nampilin daftar pengguna dari sebuah API publik, kamu bisa pakai Fetch API buat ambil data itu dan nge-render-nya di komponen React kamu.

Fetch API ini kayak request ke server, terus servernya ngasih kita respon, bisa data JSON, gambar, atau file lainnya. Biasanya, proses ini dilakukan di lifecycle tertentu di React, makanya hooks kayak `useEffect` sering banget dipakai bareng Fetch API.

Custom hooks ini nanti bakal jadi tempat kita ngerapihin proses fetching data supaya bisa dipakai ulang tanpa harus nulis ulang logic fetch di tiap komponen.

## Persiapan Project React

Kalo kamu masih pakai Create React App (CRA), mungkin udah saatnya coba switch ke Vite.

Kenapa? Karena Vite itu lebih cepat buat development, waktu build-nya juga lebih singkat, dan gampang diatur. Ini cocok banget buat kamu yang nggak mau ribet nunggu *refresh* yang lama-lama saat ngoding.

Nah, buat bikin project React pakai Vite, caranya gampang banget. Tinggal ikutin langkah-langkah berikut:

1. Buka terminal atau command prompt di komputer kamu.
2. Ketik perintah ini buat bikin project baru dengan React dan Vite:

    ```bash
    npm create vite@latest
    ```

3. Nanti kamu bakal diminta buat kasih nama project. Misal kasih nama `react-custom-hooks`, lalu pilih framework-nya, yaitu React. Kemudian, pilih juga varian yang kamu mau, misalnya JavaScript (kalau kamu nggak butuh TypeScript).
4. Setelah project-nya dibuat, masuk ke folder project kamu dengan:

    ```bash
    cd react-custom-hooks
    ```

5. Install semua dependencies yang diperlukan dengan perintah:

    ```bash
    npm install
    ```

6. Terakhir, jalanin project-nya pakai:

    ```bash
    npm run dev
    ```


Nanti kamu bisa buka browser dan masuk ke alamat `http://localhost:5173` buat lihat aplikasi React kamu yang udah siap.

### Gunakan API Publik untuk Demo

Supaya nggak ribet nyiapin API sendiri, kita bisa pakai API publik buat latihan. Salah satu yang paling populer buat testing adalah JSONPlaceholder. Ini adalah layanan gratis yang ngasih dummy data seperti post, users, comments, dan lainnya.

Contoh endpoint yang bakal kita pakai di sini:

- Users: `https://jsonplaceholder.typicode.com/users` (buat ambil daftar pengguna)
- Posts: `https://jsonplaceholder.typicode.com/posts` (buat ambil daftar post)

Kita nanti bakal bikin custom hooks yang ngurusin fetch data dari API ini. Kalau kamu coba akses URL di atas, kamu bakal lihat data JSON yang kira-kira seperti ini:

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
  // ...dan seterusnya
]
```

Data ini nanti yang akan kita fetch dan tampilkan di komponen kita. Gampang banget, kan?

## Mengenal React Hooks

### useState: Mengelola State di Komponen

Di React, data yang berubah-ubah disimpan di *state*. Nah, `useState` adalah salah satu hooks paling dasar yang kita pakai buat menyimpan dan mengelola *state* di dalam komponen.

Contoh simpel, misal kita mau simpan data pengguna yang kita fetch dari API, kita bisa bikin state kayak gini:

```jsx
const [users, setUsers] = useState([]);  // [] artinya array kosong sebagai state awal
```

Di sini, `users` adalah nama state-nya, dan `setUsers` adalah fungsi buat ngubah nilai dari `users`. Jadi kalau nanti kita dapat data dari API, kita bisa update state `users` pakai `setUsers`.

Semua data yang kita dapat dari API bakal disimpan di state, jadi dengan `useState`, kita bisa kontrol gimana data itu muncul di UI kita.

### useEffect: Mengelola Side Effects

Oke, sekarang bayangin kamu mau ambil data dari API setiap kali komponen di-*render*. Ini adalah contoh dari yang namanya *side effect*. `useEffect` adalah hooks yang kita pakai buat ngelakuin aksi-aksi ini—misalnya ambil data dari API, atau ngerapihin sesuatu setelah komponen selesai di-*render*.

Contoh penggunaannya:

```jsx
useEffect(() => {
  // Panggil API buat ambil data
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data));
}, []);  // [] artinya useEffect ini cuma dijalankan sekali waktu komponen di-render
```

Nah, yang penting di sini adalah argumen kedua, yaitu `[]` (array kosong). Ini maksudnya useEffect cuma bakal jalan sekali, tepat saat pertama kali komponen muncul di layar (di-*mount*).

Kalau kamu nggak masukin array ini, maka `useEffect` bakal terus jalan setiap kali komponen di-*update*, dan ini bisa bikin aplikasi kamu lambat atau error.

### Kenapa Hooks Penting Buat Fetching Data?

Hooks di React, terutama `useState` dan `useEffect`, penting banget buat fetching data karena mereka membantu kita mengelola *state* dan *side effects*.

Saat kita ambil data dari API, kita perlu tempat buat nyimpen datanya (ini pakai `useState`), dan kita perlu ngatur kapan datanya harus diambil (ini pakai `useEffect`).

Bayangin kalau kamu harus ngambil data tiap kali komponen muncul di layar, hooks ini bikin tugas itu jadi mudah banget tanpa harus bikin kode berulang di setiap komponen.

### Contoh Simpel: Fetch Data Tanpa Custom Hooks

Sebelum kita masuk ke custom hooks, saya bakal kasih contoh gimana cara fetch data dari API langsung di dalam komponen tanpa custom hooks dulu, biar kamu paham bedanya.

Misal kita mau ambil data pengguna dari API `JSONPlaceholder` dan nampilin di layar:

```jsx
import React, { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);  // Buat state buat simpan data user

  useEffect(() => {
    // Fetch data dari API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));  // Update state dengan data yang diambil
  }, []);  // UseEffect ini jalan cuma sekali

  return (
    <div>
      <h2>Daftar Pengguna</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>  // Tampilkan nama user
        ))}
      </ul>
    </div>
  );
}

export default UserList;
```

Di sini, kita langsung fetch data di dalam komponen. Kelihatannya simpel, kan? Tapi coba bayangin kalau ada banyak komponen yang harus fetch data dengan logika serupa, kamu bakal harus copy-paste kode ini berulang-ulang. Di sinilah custom hooks nanti masuk buat mempermudah semuanya.

## Membangun Custom Hooks

Custom hooks pada dasarnya cuma fungsi biasa di JavaScript, tapi ada aturan tertentu yang harus kita ikuti supaya bisa jalan di React. Hook ini biasanya dimulai dengan nama `use`, contohnya kita bisa bikin custom hooks bernama `useFetch` buat nge-*wrap* proses fetching API.

**Langkah pertama: bikin file untuk custom hooks**

Supaya rapi, kita bikin custom hooks ini di file terpisah. Misalnya, buat file baru di folder `src/hooks/` (kalau belum ada folder `hooks`, kamu bisa bikin dulu). Kasih nama file-nya `useFetch.js` atau `useFetchData.js`.

**Langkah kedua: definisikan custom hooks-nya**

Custom hooks kita ini bakal ngelakuin 3 hal utama:

1. Ambil data dari API.
2. Ngelola status loading (buat ngecek apakah data masih dalam proses fetch atau udah selesai).
3. Ngelola status error (buat nangkep kalau ada masalah saat fetch data).

Berikut contoh awal dari `useFetch`:

```jsx
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Error fetching data');
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);  // useEffect dijalankan setiap kali 'url' berubah

  return { data, loading, error };
}

export default useFetch;
```

### Breakdown Kode Step-by-Step

Sekarang kita bahas satu-satu apa yang terjadi pada kode di atas:

1. Parameter `url`: custom hooks kita menerima satu parameter, yaitu URL dari API yang mau kita fetch. Dengan cara ini, kita bisa pakai `useFetch` buat ambil data dari API apa aja, cukup dengan memasukkan URL yang berbeda.
2. State management:
    - `data`: Ini adalah state buat nyimpen data yang kita dapat dari API.
    - `loading`: State ini buat ngasih tahu apakah proses fetching masih berjalan (true berarti masih loading).
    - `error`: Kalau terjadi error saat fetch data, error-nya bakal disimpan di sini.
3. useEffect: Hooks ini jalan setiap kali komponen pertama kali di-*render* atau setiap kali URL berubah. Di dalam `useEffect`, kita bikin fungsi async buat fetch data dari API.
    - Kalau fetch berhasil, kita update state `data` dengan hasil yang kita dapat.
    - Kalau gagal (misalnya API-nya down atau ada kesalahan lainnya), kita update state `error` dengan pesan error.
    - `setLoading(false)` dipanggil di akhir buat nge-set status loading ke false (karena proses fetch udah selesai, entah berhasil atau gagal).
4. Return statement: Di bagian terakhir, custom hooks ini ngembaliin 3 hal: `data`, `loading`, dan `error`. Nanti, komponen yang pakai custom hooks ini bisa akses ketiganya.

### Implementasi `useState` dan `useEffect` dalam Custom Hooks

Seperti yang bisa kamu lihat, kita pakai `useState` buat ngelola data, loading, dan error. Jadi, setiap kali data berubah (misalnya setelah kita fetch dari API), UI kita bakal otomatis di-*render* ulang dengan data yang baru.

`useEffect` di sini sangat penting buat memastikan fetching data cuma jalan di saat yang tepat, misalnya pas komponen pertama kali di-*render* atau pas URL yang kita gunakan buat fetch berubah.

Ini bikin fetching data lebih efisien, karena kita nggak perlu manual panggil API setiap kali ada perubahan di UI.

## Menggunakan Custom Hooks di Komponen

Sebelumnya, kita udah bikin custom hooks `useFetch`. Sekarang, kita coba pakai hooks ini di dalam komponen supaya kita bisa ambil data dari API dan menampilkannya di UI.

Nah, custom hooks ini bisa kita pakai di komponen manapun yang butuh fetching data. Karena hooks itu reusable, kita bisa pakai `useFetch` berkali-kali di komponen yang berbeda.

Contoh, kita mau bikin komponen buat nampilin daftar pengguna dari API. Caranya simpel banget karena kita tinggal panggil custom hooks yang udah kita buat.

```jsx
import React from 'react';
import useFetch from './hooks/useFetch';  // Import custom hooks kita

function UserList() {
  // Pakai custom hooks
  const { data: users, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');

  // Jika masih loading
  if (loading) return <p>Loading...</p>;

  // Jika ada error
  if (error) return <p>Error: {error}</p>;

  // Jika data berhasil diambil
  return (
    <div>
      <h2>Daftar Pengguna</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>  // Tampilkan nama user
        ))}
      </ul>
    </div>
  );
}

export default UserList;
```

Apa yang terjadi di sini?

- Pertama, kita import `useFetch` dari file hooks yang udah kita buat.
- Kemudian, kita panggil hooks itu di dalam komponen `UserList` dan langsung dapet tiga nilai: `data`, `loading`, dan `error`.
- Kalau `loading` masih true, kita bakal tampilin teks "Loading...".
- Kalau ada error, kita bakal tampilin pesan error.
- Dan kalau data berhasil diambil (nilai `data` bukan null), kita map data `users` dan tampilin nama pengguna di dalam list.

### Memanfaatkan Reusability dari Custom Hooks

Kekuatan dari custom hooks ini ada di fleksibilitasnya. Kamu bisa pakai hooks ini di komponen mana aja yang butuh ambil data dari API, cukup ganti URL-nya aja. Misalnya, kalau kamu mau ambil data post dari API yang sama, caranya tinggal ganti URL seperti ini:

```jsx
import React from 'react';
import useFetch from './hooks/useFetch';

function PostList() {
  const { data: posts, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Daftar Post</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>  // Tampilkan judul post
        ))}
      </ul>
    </div>
  );
}

export default PostList;
```

Kamu gak perlu repot-repot bikin logic fetch ulang lagi. Custom hooks ini udah siap buat dipakai kapanpun, di komponen apapun, dengan API manapun. Ini bikin kode lebih bersih dan lebih mudah di-maintain.

### Menangani Beberapa URL dengan Custom Hooks

Kalau misalnya kamu punya banyak endpoint atau API berbeda yang mau di-*fetch* dalam satu komponen, gampang banget! Kamu tinggal panggil `useFetch` dengan URL yang berbeda.

Contoh: di satu komponen, kita mau fetch daftar pengguna dan daftar post sekaligus:

```jsx
import React from 'react';
import useFetch from './hooks/useFetch';

function UserAndPostList() {
  const { data: users, loading: usersLoading, error: usersError } = useFetch('https://jsonplaceholder.typicode.com/users');
  const { data: posts, loading: postsLoading, error: postsError } = useFetch('<https://jsonplaceholder.typicode.com/posts');

  if (usersLoading || postsLoading) return <p>Loading...</p>;
  if (usersError) return <p>Error: {usersError}</p>;
  if (postsError) return <p>Error: {postsError}</p>;

  return (
    <div>
      <h2>Daftar Pengguna</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <h2>Daftar Post</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserAndPostList;
```

Di sini, kita panggil `useFetch` dua kali buat ambil data dari dua API berbeda, dan komponen kita bisa nampilin dua daftar sekaligus. Gampang kan?

### Menampilkan Feedback Loading yang Lebih Menarik

Untuk memberikan UX yang lebih baik, kamu bisa menambahkan spinner loading atau pesan error yang lebih menarik, dibanding cuma teks.

Ada banyak library UI yang bisa dipakai, contohnya React Spinners:

1. Install dulu library-nya:

    ```bash
    npm install react-spinners
    
    ```

2. Lalu kita bisa pakai di komponen seperti ini:

    ```jsx
    import React from 'react';
    import useFetch from './hooks/useFetch';
    import { ClipLoader } from 'react-spinners';
    
    function UserList() {
      const { data: users, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');
    
      if (loading) return <ClipLoader color="#36d7b7" />;
      if (error) return <p>Error: {error}</p>;
    
      return (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      );
    }
    
    export default UserList;
    ```


Sekarang, kalau data masih loading, kamu bakal lihat spinner keren daripada cuma teks biasa.

## Optimasi dan Tips Tambahan

### Menggunakan Dependency di `useEffect`

Salah satu hal penting saat menggunakan `useEffect` adalah memahami cara kerja *dependencies* (array kedua di `useEffect`). Ini penting buat mencegah hooks kita memanggil ulang proses fetching secara tidak perlu. Misalnya, kalau URL yang kita gunakan untuk fetch data gak berubah, gak ada alasan buat fetch lagi, kan?

Di custom hooks `useFetch` yang kita bikin sebelumnya, kita sudah pakai array dependencies:

```jsx
useEffect(() => {
  fetchData();
}, [url]);  // useEffect hanya akan dijalankan ulang kalau 'url' berubah

```

Di sini, `useEffect` cuma bakal jalan ulang kalau URL berubah. Artinya, kalau URL-nya tetap sama, React gak bakal refetch data lagi.

Tips: kalau kamu punya banyak state atau props lain yang bisa berubah, pastikan kamu cuma masukin yang penting ke dalam array dependencies. Kalau enggak, hooks kamu bisa jalan berulang kali secara gak perlu dan itu bakal bikin aplikasi kamu lambat.

### Abort Fetch Request untuk Mencegah Memory Leaks

Salah satu masalah yang mungkin terjadi ketika menggunakan `useEffect` buat fetch API adalah *memory leaks*. Ini bisa terjadi kalau proses fetch masih berjalan, tapi komponen kita udah di-*unmount* (misal, pengguna berpindah ke halaman lain).

Buat mencegah ini, kita bisa pakai `AbortController` buat menghentikan request ketika komponen gak lagi ada di layar.

Berikut cara implementasinya:

```jsx
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();  // Buat AbortController baru
    const fetchData = async () => {
      try {
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) {
          throw new Error('Error fetching data');
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        if (err.name !== 'AbortError') {  // Abaikan abort error
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();  // Hentikan request ketika komponen di-unmount
    };
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
```

Dengan `AbortController`, kalau komponen di-*unmount* atau user beralih ke halaman lain sebelum fetch selesai, request tersebut bakal dibatalkan. Ini bikin aplikasi kita lebih efisien dan menghindari masalah memory leaks.

### Menambah Cache untuk Efisiensi

Kalau kamu sering fetch data yang sama berulang kali (misalnya daftar pengguna atau post yang gak berubah-ubah), kamu bisa menambahkan cache supaya fetch request gak dilakukan berulang-ulang. Dengan begitu, kalau datanya udah ada di cache, kita tinggal ambil dari sana.

Cara simpelnya, kamu bisa pakai objek global di custom hooks kita buat menyimpan cache:

```jsx
const cache = {};

function useFetch(url) {
  const [data, setData] = useState(cache[url] || null);
  const [loading, setLoading] = useState(!cache[url]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!cache[url]) {
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error('Error fetching data');
          }
          const result = await response.json();
          cache[url] = result;  // Simpan data di cache
          setData(result);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [url]);

  return { data, loading, error };
}

```

Dengan teknik caching ini, kalau kita fetch data yang sama (misalnya `https://jsonplaceholder.typicode.com/users`) lebih dari sekali, hasilnya bakal diambil dari cache, jadi gak perlu lagi panggil API. Ini bisa menghemat waktu dan meningkatkan performa aplikasi kamu.

### Menggunakan SWR atau React Query untuk Fetching Data

Kalau kamu merasa custom hooks yang kita buat ini masih kurang lengkap atau terlalu simpel, kamu bisa coba library seperti SWR atau React Query.

Kedua library ini adalah solusi populer buat fetching data di React yang sudah teroptimasi, dengan fitur-fitur seperti caching otomatis, refetching, pagination, dan masih banyak lagi.

Contoh menggunakan SWR buat fetch data:

1. Install dulu SWR:

    ```bash
    npm install swr
    ```

2. Lalu pakai SWR di komponen:

    ```jsx
    import useSWR from 'swr';
    
    const fetcher = url => fetch(url).then(res => res.json());
    
    function UserList() {
      const { data: users, error } = useSWR('https://jsonplaceholder.typicode.com/users', fetcher);
    
      if (!users) return <p>Loading...</p>;
      if (error) return <p>Error: {error.message}</p>;
    
      return (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      );
    }
    
    export default UserList;
    ```


SWR akan otomatis ngelola caching, revalidasi, dan error handling buat kamu, jadi ini bisa jadi pilihan bagus kalau kamu mau fitur yang lebih advanced tanpa harus bikin semuanya dari awal.

## Kesimpulan

Itu dia seluruh pembahasan kita tentang gimana cara membangun custom hooks untuk fetch API di React. Mulai dari pengenalan hooks dasar, bikin custom hooks pertama, implementasinya di komponen, sampai optimasi seperti caching dan abort request.

Dengan menggunakan custom hooks, kamu bisa bikin kode yang lebih rapi, reusable, dan gampang di-maintain. Semoga artikel ini bisa bantu kamu bikin aplikasi yang lebih efisien, dan pastinya lebih asik buat ditulis maupun digunakan!

Happy coding!