# RVNOISE - Lapak Community

## Setup Firebase (project rvnoise-lapak)
1. Authentication > Sign-in method: aktifkan Email/Password dan Google.
2. Authentication > Settings > Authorized domains: tambahkan domain hosting kamu (tanpa https://).
3. Firestore Database: buat database, tab Rules > tempel isi firestore.rules > Publish.
4. Deploy folder ini ke Netlify/Vercel/Firebase Hosting (harus HTTPS).

## Dashboard staff
Buka https://DOMAINMU/#rvnoiseadmin (login sendiri, terpisah dari aplikasi).
- Admin = Gmail areelkolin@gmail.com yang sudah terverifikasi. Cara paling mudah: tombol "Masuk dengan Google".
- Username staff: rvnois. Untuk login dengan sandi, tekan "Atur / lupa sandi" (link dikirim ke Gmail admin), lalu masuk dengan rvnois + sandi baru.
- Sandi tidak ditanam di kode. Atur sendiri lewat Firebase.
- Pertama kali dashboard dibuka, akun official @rvnoise dibuat otomatis (dikelola dari tab Official).

## Catatan
- Menghapus data pengguna dari dashboard tidak menghapus akun loginnya di Firebase Authentication (hapus manual di Console > Authentication > Users).
- Live baru kamera + status; siaran ke penonton butuh server WebRTC.

## Versi 4
- Dashboard staff: buka tab "Hadiah dan aset" sekali agar katalog (hadiah dan aset investasi) terbentuk di Firestore. Harga bisa diubah di sana.
- Hadiah dibeli dengan noisevn dan masuk inventaris (bukan saldo). Aset investasi tampil sebagai lencana profil.
- Musik postingan hanya menerima link Spotify, diputar otomatis 30 detik saat postingan terlihat.
- Lencana Artis (diberikan admin) membuka unggah lagu di ikon Musik.

## Versi 5 (musik latar)
- Info musik tampil otomatis di bawah username (ikon equalizer + judul lagu), tanpa banner dan tanpa ketuk.
- Musik Spotify diputar otomatis saat postingan berada di tengah layar, berhenti sendiri setelah 30 detik atau saat postingan lewat.
- Ketuk baris musik untuk jeda manual. Kalau browser memblokir suara, muncul ajakan "Ketuk layar", ketukan pertama di mana saja langsung memutar.

## Versi 6 (fitur besar)
Berkas baru: `features.js` (wajib ikut diunggah bersama app.js). Rules Firestore berubah, **publish ulang `firestore.rules`**.

- Chat: tab Semua / Permintaan / Arsip, jam tiap pesan, pemisah tanggal (Hari ini, Kemarin), grup dan Family (nama, foto, anggota), stiker dan GIF pribadi.
- Game RVNMATCH (ikon controller di halaman Pesan): cari pacar, besti, atau relationship. Saling suka langsung terbuka chat.
- RVNREELS: ikon film di sebelah tombol +, tontonan vertikal ala IG/TikTok, unggah video maks 100 MB.
- Profil: sorotan dari arsip story (nama + cover), kotak Valuasi Kekayaan, banner Spotify lagu favorit, status hubungan.
- Pengaturan (ikon di profil): warna aplikasi, status hubungan, Spotify, privasi pesan, info akun, hapus akun mandiri, keluar.
- Komentar berbalas di postingan, tweet, carousel, dan story (semua orang bisa melihat).
- Live: video + suara lewat WebRTC (satu host ke maks 12 penonton).
- Keamanan otomatis: filter kata kasar (di aplikasi dan di rules Firestore), tombol laporan, tab Moderasi di dashboard staf.
- Akun resmi / admin bisa menyematkan postingan di semua beranda (ikon pin di kartu postingan).
- Beranda: tarik ke bawah atau ketuk ikon segarkan untuk mengacak ulang urutan, banner "postingan baru".
- Foto carousel otomatis dipotong persegi 1:1.

### Mengaktifkan upload video reels (Cloudinary, gratis)
Firestore tidak bisa menyimpan video, jadi video diunggah ke Cloudinary (paket gratis, maks 100 MB per video).
1. Daftar di cloudinary.com (gratis). Catat **Cloud name** di Dashboard.
2. Settings, Upload, Upload presets, Add upload preset. Ubah **Signing mode** menjadi **Unsigned**, lalu simpan. Catat nama preset.
3. Buka `app.js`, cari `const CLOUDINARY={cloud:'',preset:''}` lalu isi, contoh `{cloud:'namaanda',preset:'rvnoise_unsigned'}`.
4. Deploy ulang. Tanpa langkah ini, reels tetap bisa diposting memakai link .mp4 atau YouTube.

### Catatan
- Live memakai server STUN gratis. Sebagian jaringan seluler yang ketat bisa gagal tersambung tanpa server TURN.
- Hapus akun mandiri menghapus postingan, story, koleksi, dan profil. Riwayat chat tidak ikut terhapus.


## Pembaruan v7
- **Penting:** tempel ulang isi `firestore.rules` terbaru ke Firebase Console > Firestore > Rules, lalu Publish. Tanpa ini grup, family, Spotify di pengaturan, game baru dll akan menampilkan "Ditolak aturan keamanan". Aplikasi menampilkan banner merah jika rules masih usang.
- Live: penonton melihat kamera host dan mendengar suara (STUN + TURN publik, tombol "Nyalakan suara", tombol coba lagi, host bisa matikan mic/kamera).
- Reels layar penuh: tab Untuk Kamu / Mengikuti, ikuti (+), suka, komentar, simpan, bagikan, mute, jumlah tayangan.
- RVNMATCH: pilih hobi (emoji), introvert/ekstrovert, akhir pekan, bahasa cinta, persentase kecocokan.
- Game baru: Dinding Kejujuran, Kata RVN, Roda Truth or Dare, Kuis Kepribadian, Tebak Emoji.


## Pembaruan v8: unduh aplikasi (APK)
- Tombol "Pasang/tambah ke layar utama" dihapus. Sebagai gantinya, saat file `rvnoise.apk` ada di website, pengguna Android melihat tombol Unduh aplikasi (di layar masuk dan di beranda). Tombol hilang otomatis di dalam aplikasi itu sendiri.
- Cara membuat file APK: lihat `PANDUAN-APK.md`.
- `vercel.json` mengatur agar `rvnoise.apk` terunduh dengan benar dan `assetlinks.json` terbaca.


## Pembaruan v9
- Bagikan postingan ke teman/grup (kartu postingan di chat), ke cerita, salin tautan, atau aplikasi lain.
- Notifikasi menampilkan preview konten; ketuk membuka postingannya (bukan profil). Tautan `#post=ID` juga membuka postingan.
- Admin: tab Pengguna dengan tombol Hapus pengguna per orang, tab baru Fitur & Harga (harga promosi like, minimal pengikut eksklusif, tambah item dengan ikon otomatis dari nama).
- Notifikasi melayang karena rules/login gagal dihilangkan (error login tampil di dalam form).
- Musik menampilkan nama artis. Pengguna baru mendapat popup Centang Biru sekali.
- Konten eksklusif (Centang Biru atau minimal pengikut sesuai admin), promosi like (default 20.000 per 1.000 like, diatur admin), streak chat harian.
- Catatan: konten eksklusif dikunci di tampilan aplikasi. Karena aplikasi tidak memakai server, data postingan tetap bisa dibaca lewat API Firestore oleh pengguna yang paham teknis.
- **Publikasikan ulang firestore.rules terbaru.**

## Pembaruan v12
- Tombol "Unduh aplikasi" tetap ada, tapi memasang lewat pintasan PWA (tanpa file APK). Lihat `PANDUAN-APK.md`.
- Zoom, seleksi teks, dan menu salin/Google dimatikan; notifikasi bergaya Instagram.

## Pembaruan v15 (tahap 1)
- Mode terang/gelap/otomatis + warna kustom (aksen & latar), akun pribadi, sembunyikan valuasi.
- Suntik like (menggantikan promosi), pesan suara, tema chat (wallpaper/banner/emoji/warna), kotak kejutan, undang kolaborator.
- Upload reels maksimal 20 MB. Publish ulang firestore.rules.
