# Cara membuat file aplikasi (APK) RVNOISE

File APK tidak bisa dibuat dari server ini (tidak ada Android SDK dan tidak ada internet). Pakai PWABuilder, gratis, lewat browser. Hasilnya aplikasi Android sungguhan yang bisa dipasang dari file, bukan pintasan.

## 1. Buat APK
1. Buka https://www.pwabuilder.com
2. Tempel alamat website: https://rvnoise-rvn-community.vercel.app lalu klik Start.
3. Klik Package for stores, pilih Android, lalu Generate Package.
4. Isi: Package ID `com.rvnoise.app`, App name `RVNOISE`, Signing key: New. Klik Generate.
5. Unduh file ZIP hasilnya. Di dalamnya ada:
   - `app-release-signed.apk`  (file aplikasi)
   - `signing.keystore` + `signing-key-info.txt`  (SIMPAN baik-baik, dibutuhkan untuk update aplikasi)
   - `assetlinks.json`  (supaya aplikasi tampil layar penuh tanpa bar alamat)

## 2. Pasang di website
1. Ganti nama `app-release-signed.apk` menjadi `rvnoise.apk`, taruh di folder utama website (sejajar dengan index.html).
2. Buat folder `.well-known` di folder utama, taruh `assetlinks.json` di dalamnya.
3. Unggah ulang ke GitHub / Vercel (deploy).
4. Buka website lewat HP Android: tombol "Unduh" aplikasi muncul otomatis di bagian atas, selama file `rvnoise.apk` ada.

## 3. Pasang di HP
Buka file APK yang terunduh. Android akan meminta izin "Pasang dari sumber ini", izinkan. Bila muncul peringatan Play Protect, pilih Tetap pasang.


## Catatan
- Jangan pernah mengunggah `signing.keystore` dan `signing-key-info.txt` ke GitHub/website. Simpan di tempat pribadi, karena berisi kunci dan sandi untuk update aplikasi.
- Paket aplikasi ini: `app.vercel.rvnoise_rvn_community.twa`.
