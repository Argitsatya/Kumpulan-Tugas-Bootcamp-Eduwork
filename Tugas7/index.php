<?php
// Inisialisasi variabel untuk mencegah undefined error pada percobaan pertama
$errors = [];
$success_message = "";
$nama = $harga = $kategori = $deskripsi = "";

// Cek apakah form disubmit
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitasi input untuk mencegah XSS (Cross-Site Scripting)
    $nama = htmlspecialchars(trim($_POST['nama'] ?? ''));
    $harga = filter_input(INPUT_POST, 'harga', FILTER_VALIDATE_FLOAT);
    $kategori = htmlspecialchars(trim($_POST['kategori'] ?? ''));
    $deskripsi = htmlspecialchars(trim($_POST['deskripsi'] ?? ''));

    // 1. VALIDASI BACKEND (PHP) - Lapis Pertahanan Utama
    if (empty($nama)) {
        $errors['nama'] = "Nama produk tidak boleh kosong.";
    }

    if ($harga === false || $harga <= 0) {
        $errors['harga'] = "Harga harus berupa angka valid dan lebih dari 0.";
    }

    if (empty($kategori)) {
        $errors['kategori'] = "Kategori harus dipilih.";
    }

    if (empty($deskripsi)) {
        $errors['deskripsi'] = "Deskripsi produk wajib diisi.";
    }

    // 2. VALIDASI FILE UPLOAD - Titik paling rawan diretas
    if (isset($_FILES['gambar']) && $_FILES['gambar']['error'] === UPLOAD_ERR_OK) {
        $file_tmp = $_FILES['gambar']['tmp_name'];
        $file_name = $_FILES['gambar']['name'];
        $file_size = $_FILES['gambar']['size'];
        
        // JANGAN gunakan pathinfo/extension untuk mengecek jenis file. Gunakan mime_content_type.
        $file_type = mime_content_type($file_tmp); 
        $allowed_types = ['image/jpeg', 'image/png', 'image/webp'];
        $max_size = 2 * 1024 * 1024; // Maksimal 2MB

        if (!in_array($file_type, $allowed_types)) {
            $errors['gambar'] = "Format file berbahaya atau tidak didukung. Hanya JPG, PNG, dan WEBP yang diizinkan.";
        } elseif ($file_size > $max_size) {
            $errors['gambar'] = "Ukuran gambar terlalu besar. Maksimal 2MB.";
        } else {
            // Jika tidak ada error sama sekali, proses penyimpanan
            if (empty($errors)) {
                // Buat folder jika belum ada
                $upload_dir = 'uploads/';
                if (!is_dir($upload_dir)) {
                    mkdir($upload_dir, 0755, true);
                }

                // Ganti nama file untuk mencegah overwrite dan eksekusi file berbahaya
                $file_extension = pathinfo($file_name, PATHINFO_EXTENSION);
                $new_file_name = uniqid('prod_', true) . '.' . $file_extension;
                $destination = $upload_dir . $new_file_name;

                if (move_uploaded_file($file_tmp, $destination)) {
                    $success_message = "Produk berhasil disimpan!";
                    // Reset form setelah sukses
                    $nama = $harga = $kategori = $deskripsi = "";
                } else {
                    $errors['sistem'] = "Gagal memindahkan file ke direktori tujuan.";
                }
            }
        }
    } else {
        $errors['gambar'] = "Gambar produk wajib diunggah.";
    }
}
?>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manajemen Produk</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">

<div class="container mt-5 mb-5">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card shadow-sm border-0">
                <div class="card-header bg-dark text-white">
                    <h5 class="mb-0">Tambah Produk Baru</h5>
                </div>
                <div class="card-body">
                    
                    <!-- Alert Sukses atau Error Sistem -->
                    <?php if (!empty($success_message)): ?>
                        <div class="alert alert-success"><?= $success_message ?></div>
                    <?php endif; ?>
                    <?php if (isset($errors['sistem'])): ?>
                        <div class="alert alert-danger"><?= $errors['sistem'] ?></div>
                    <?php endif; ?>

                    <form action="" method="POST" enctype="multipart/form-data" id="formProduk" novalidate>
                        
                        <!-- Nama Produk -->
                        <div class="mb-3">
                            <label for="nama" class="form-label text-dark fw-bold">Nama Produk <span class="text-danger">*</span></label>
                            <input type="text" class="form-control <?= isset($errors['nama']) ? 'is-invalid' : '' ?>" id="nama" name="nama" value="<?= $nama ?>" required>
                            <div class="invalid-feedback" id="errNama">
                                <?= $errors['nama'] ?? 'Nama produk tidak boleh kosong.' ?>
                            </div>
                        </div>

                        <!-- Harga Produk -->
                        <div class="mb-3">
                            <label for="harga" class="form-label text-dark fw-bold">Harga (Rp) <span class="text-danger">*</span></label>
                            <input type="number" class="form-control <?= isset($errors['harga']) ? 'is-invalid' : '' ?>" id="harga" name="harga" value="<?= $harga ?>" min="1" required>
                            <div class="invalid-feedback" id="errHarga">
                                <?= $errors['harga'] ?? 'Harga harus lebih dari 0.' ?>
                            </div>
                        </div>

                        <!-- Kategori -->
                        <div class="mb-3">
                            <label for="kategori" class="form-label text-dark fw-bold">Kategori <span class="text-danger">*</span></label>
                            <select class="form-select <?= isset($errors['kategori']) ? 'is-invalid' : '' ?>" id="kategori" name="kategori" required>
                                <option value="" disabled <?= empty($kategori) ? 'selected' : '' ?>>Pilih Kategori...</option>
                                <option value="Elektronik" <?= $kategori == 'Elektronik' ? 'selected' : '' ?>>Elektronik</option>
                                <option value="Pakaian" <?= $kategori == 'Pakaian' ? 'selected' : '' ?>>Pakaian</option>
                                <option value="Makanan" <?= $kategori == 'Makanan' ? 'selected' : '' ?>>Makanan</option>
                                <option value="Lainnya" <?= $kategori == 'Lainnya' ? 'selected' : '' ?>>Lainnya</option>
                            </select>
                            <div class="invalid-feedback" id="errKategori">
                                <?= $errors['kategori'] ?? 'Silakan pilih kategori produk.' ?>
                            </div>
                        </div>

                        <!-- Upload Gambar -->
                        <div class="mb-3">
                            <label for="gambar" class="form-label text-dark fw-bold">Gambar Produk <span class="text-danger">*</span></label>
                            <input type="file" class="form-control <?= isset($errors['gambar']) ? 'is-invalid' : '' ?>" id="gambar" name="gambar" accept="image/png, image/jpeg, image/webp" required>
                            <div class="invalid-feedback" id="errGambar">
                                <?= $errors['gambar'] ?? 'Gambar wajib diunggah (Maks 2MB, JPG/PNG/WEBP).' ?>
                            </div>
                        </div>

                        <!-- Deskripsi -->
                        <div class="mb-4">
                            <label for="deskripsi" class="form-label text-dark fw-bold">Deskripsi <span class="text-danger">*</span></label>
                            <textarea class="form-control <?= isset($errors['deskripsi']) ? 'is-invalid' : '' ?>" id="deskripsi" name="deskripsi" rows="4" required><?= $deskripsi ?></textarea>
                            <div class="invalid-feedback" id="errDeskripsi">
                                <?= $errors['deskripsi'] ?? 'Deskripsi tidak boleh kosong.' ?>
                            </div>
                        </div>

                        <button type="submit" class="btn btn-primary w-100 fw-bold">Simpan Produk</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
    // VALIDASI FRONTEND (JAVASCRIPT) - Lapis Pertama (Hanya untuk UX)
    document.getElementById('formProduk').addEventListener('submit', function(event) {
        let isValid = true;

        const nama = document.getElementById('nama');
        const harga = document.getElementById('harga');
        const kategori = document.getElementById('kategori');
        const gambar = document.getElementById('gambar');
        const deskripsi = document.getElementById('deskripsi');

        // Fungsi helper untuk mengatur status valid/invalid UI Bootstrap
        function setValidity(element, valid) {
            if (valid) {
                element.classList.remove('is-invalid');
                element.classList.add('is-valid');
            } else {
                element.classList.remove('is-valid');
                element.classList.add('is-invalid');
                isValid = false;
            }
        }

        // Cek Nama
        setValidity(nama, nama.value.trim() !== "");

        // Cek Harga
        setValidity(harga, harga.value.trim() !== "" && parseFloat(harga.value) > 0);

        // Cek Kategori
        setValidity(kategori, kategori.value !== "");

        // Cek Deskripsi
        setValidity(deskripsi, deskripsi.value.trim() !== "");

        // Cek Gambar (Ukuran & Ekstensi di Frontend)
        if (gambar.files.length > 0) {
            const file = gambar.files[0];
            const fileSize = file.size / 1024 / 1024; // dalam MB
            const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
            
            if (!validTypes.includes(file.type) || fileSize > 2) {
                document.getElementById('errGambar').innerText = "File harus JPG/PNG/WEBP dan maksimal 2MB.";
                setValidity(gambar, false);
            } else {
                setValidity(gambar, true);
            }
        } else {
            // Jika backend sebelumnya error dan mengembalikan state, jangan timpa error ini jika kosong.
            // Namun jika user mencoba submit form baru tanpa gambar, cegah.
            <?php if(empty($errors)): ?>
                setValidity(gambar, false);
            <?php endif; ?>
        }

        // Hentikan pengiriman form ke server jika ada input yang tidak valid di JS
        if (!isValid) {
            event.preventDefault();
        }
    });
</script>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>