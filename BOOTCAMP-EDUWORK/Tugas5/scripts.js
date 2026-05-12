 // 1. Array Data Produk
        const products = [
            { 
                id: 1, 
                name: "MacBook Pro M3", 
                price: 25000000, 
                description: "Laptop performa tinggi dengan chip M3 terbaru, cocok untuk profesional.", 
                image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=60", 
                category: "Elektronik" 
            },
            { 
                id: 2, 
                name: "Kemeja Flanel Kasual", 
                price: 185000, 
                description: "Kemeja flanel pria bahan katun premium, nyaman untuk aktivitas harian.", 
                image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=500&q=60", 
                category: "Pakaian" 
            },
            { 
                id: 3, 
                name: "Rendang Sapi Kemasan", 
                price: 75000, 
                description: "Rendang asli resep Minang, dikemas vakum sehingga tahan lama tanpa pengawet.", 
                image: "https://images.unsplash.com/photo-1627003444983-a7bbcd61a156?auto=format&fit=crop&w=500&q=60", 
                category: "Makanan" 
            },
            { 
                id: 4, 
                name: "Samsung Galaxy S24", 
                price: 16500000, 
                description: "Smartphone flagship dengan fitur Galaxy AI terintegrasi.", 
                image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=500&q=60", 
                category: "Elektronik" 
            },
            { 
                id: 5, 
                name: "Jaket Denim Vintage", 
                price: 250000, 
                description: "Jaket denim klasik dengan potongan reguler, cocok untuk riding atau nongkrong.", 
                image: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?auto=format&fit=crop&w=500&q=60", 
                category: "Pakaian" 
            },
            { 
                id: 6, 
                name: "Keripik Kentang Balado", 
                price: 15000, 
                description: "Cemilan keripik kentang renyah dengan bumbu balado pedas manis yang khas.", 
                image: "https://images.unsplash.com/photo-1566478989037-e924e5ebb06b?auto=format&fit=crop&w=500&q=60", 
                category: "Makanan" 
            },
            { 
                id: 7, 
                name: "iPad Pro 12.9 inch", 
                price: 18000000, 
                description: "Tablet premium dengan layar Liquid Retina XDR dan M2 chip untuk produktivitas maksimal.", 
                image: "https://images.unsplash.com/photo-1533469752211-118fcffe56fb?auto=format&fit=crop&w=500&q=60", 
                category: "Elektronik" 
            },
            { 
                id: 8, 
                name: "Sepatu Sneaker Putih", 
                price: 350000, 
                description: "Sepatu sneaker klasik warna putih, cocok untuk berbagai gaya fashion casual.", 
                image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=60", 
                category: "Pakaian" 
            },
            { 
                id: 9, 
                name: "Teh Premium Oolong", 
                price: 125000, 
                description: "Teh oolong pilihan dari pegunungan Taiwan, aromanya harum dan rasa lembut.", 
                image: "https://images.unsplash.com/photo-1597318886214-b1f41c55d62b?auto=format&fit=crop&w=500&q=60", 
                category: "Makanan" 
            },
            { 
                id: 10, 
                name: "Sony WH-1000XM5 Headphones", 
                price: 4500000, 
                description: "Headphone premium dengan noise cancellation terbaik dan kualitas audio luar biasa.", 
                image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=60", 
                category: "Elektronik" 
            },
            { 
                id: 11, 
                name: "Celana Chino Khaki", 
                price: 275000, 
                description: "Celana chino pria bahan cotton twill, nyaman dan formal untuk kantor atau kasual.", 
                image: "https://images.unsplash.com/photo-1506629082632-29bab3a26656?auto=format&fit=crop&w=500&q=60", 
                category: "Pakaian" 
            },
            { 
                id: 12, 
                name: "Coklat Artisan Belgia", 
                price: 95000, 
                description: "Coklat premium dari Belgia dengan rasa yang kaya dan tekstur yang lembut menyenangkan.", 
                image: "https://images.unsplash.com/photo-1599599810694-a5f6b8cac3a5?auto=format&fit=crop&w=500&q=60", 
                category: "Makanan" 
            },
            { 
                id: 13, 
                name: "iPhone 15 Pro Max", 
                price: 22000000, 
                description: "Smartphone terbaru Apple dengan teknologi A17 Pro dan kamera profesional.", 
                image: "https://images.unsplash.com/photo-1592286927505-1def25e2c81d?auto=format&fit=crop&w=500&q=60", 
                category: "Elektronik" 
            },
            { 
                id: 14, 
                name: "Kaos Polos Kualitas Tinggi", 
                price: 89000, 
                description: "Kaos 100% cotton dengan jahitan presisi, tersedia berbagai ukuran dan warna.", 
                image: "https://images.unsplash.com/photo-1618358822363-b57f9d5d3cb6?auto=format&fit=crop&w=500&q=60", 
                category: "Pakaian" 
            },
            { 
                id: 15, 
                name: "Kopi Arabika Premium", 
                price: 85000, 
                description: "Biji kopi arabika pilihan dari Sumatera, disangrai sempurna untuk cita rasa optimal.", 
                image: "https://images.unsplash.com/photo-1559056199-641a0ac8b8b3?auto=format&fit=crop&w=500&q=60", 
                category: "Makanan" 
            },
            { 
                id: 16, 
                name: "AirPods Pro 2", 
                price: 3500000, 
                description: "Earbuds wireless terbaik dengan active noise cancellation dan transparency mode.", 
                image: "https://images.unsplash.com/photo-1572533382519-b95c7f1f71ac?auto=format&fit=crop&w=500&q=60", 
                category: "Elektronik" 
            },
            { 
                id: 17, 
                name: "Hoodie Unisex Cozy", 
                price: 325000, 
                description: "Hoodie nyaman dengan desain minimalis, pas untuk cuaca dingin atau santai di rumah.", 
                image: "https://images.unsplash.com/photo-1556821552-d0f1c9b13f7b?auto=format&fit=crop&w=500&q=60", 
                category: "Pakaian" 
            },
            { 
                id: 18, 
                name: "Mie Instant Premium", 
                price: 8000, 
                description: "Mie instan dengan bumbu alami tanpa MSG, cepat saji namun lezat dan sehat.", 
                image: "https://images.unsplash.com/photo-1555939594-58d7cb561f1f?auto=format&fit=crop&w=500&q=60", 
                category: "Makanan" 
            },
            { 
                id: 19, 
                name: "Smart Watch Samsung Galaxy", 
                price: 3200000, 
                description: "Jam tangan pintar dengan monitor kesehatan lengkap dan integrasi Android yang sempurna.", 
                image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=60", 
                category: "Elektronik" 
            },
            { 
                id: 20, 
                name: "Sarung Tangan Kulit Asli", 
                price: 225000, 
                description: "Sarung tangan dari kulit asli, hangat dan elegan untuk musim dingin atau formal.", 
                image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=500&q=60", 
                category: "Pakaian" 
            },
            { 
                id: 21, 
                name: "Jus Buah Segar Organik", 
                price: 28000, 
                description: "Jus buah organik tanpa pemanis buatan, dibuat dari buah-buah pilihan segar setiap hari.", 
                image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=500&q=60", 
                category: "Makanan" 
            },
            { 
                id: 22, 
                name: "Camera Canon EOS R5", 
                price: 28000000, 
                description: "Kamera mirrorless profesional dengan sensor full-frame 45MP dan 8K video recording.", 
                image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?auto=format&fit=crop&w=500&q=60", 
                category: "Elektronik" 
            },
            { 
                id: 23, 
                name: "Kacamata Sunglasses UV", 
                price: 450000, 
                description: "Kacamata hitam dengan proteksi UV 100%, desain stylish cocok untuk outdoor.", 
                image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=500&q=60", 
                category: "Pakaian" 
            },
            { 
                id: 24, 
                name: "Granola Sehat Homemade", 
                price: 35000, 
                description: "Granola buatan sendiri dari oat premium, kacang, dan madu, sempurna untuk sarapan sehat.", 
                image: "https://images.unsplash.com/photo-1572486685155-7a2b0e32e657?auto=format&fit=crop&w=500&q=60", 
                category: "Makanan" 
            },
            { 
                id: 25, 
                name: "Portable SSD 2TB", 
                price: 2500000, 
                description: "SSD portabel dengan kecepatan transfer hingga 1050MB/s, cocok untuk professional dan creators.", 
                image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=500&q=60", 
                category: "Elektronik" 
            },
            { 
                id: 26, 
                name: "Tas Backpack Travel", 
                price: 425000, 
                description: "Backpack travel dengan banyak kompartemen, waterproof, dan desain ergonomis untuk kenyamanan maksimal.", 
                image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=60", 
                category: "Pakaian" 
            }
        ];

        // Ambil elemen DOM
        const productGrid = document.getElementById('productGrid');
        const searchInput = document.getElementById('searchInput');
        const filterBtns = document.querySelectorAll('.filter-btn');
        

        // State aplikasi saat ini
        let currentCategory = 'Semua';
        let currentSearchQuery = '';

        // Utilitas untuk memformat angka menjadi format Rupiah
        const formatRupiah = (number) => {
            return new Intl.NumberFormat('id-ID', { 
                style: 'currency', 
                currency: 'IDR',
                maximumFractionDigits: 0 // Menghilangkan desimal ,00
            }).format(number);
        };

        // Buat URL WhatsApp dengan pesan lengkap dan gambar produk
        const createWhatsappUrl = (product) => {
            const message = `Saya ingin membeli produk ini:\n\n` +
                `Nama: ${product.name}\n` +
                `Harga: ${formatRupiah(product.price)}\n` +
                `Deskripsi: ${product.description}\n\n` +
                `Gambar: ${product.image}`;
            const phone = '62895365558718';
            return `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
        };

        // 2. Fungsi untuk menampilkan produk menggunakan looping (forEach)
        const renderProducts = (data) => {
            productGrid.innerHTML = ''; // Kosongkan grid sebelum render ulang

            // Handle jika data kosong (hasil filter/search tidak ditemukan)
            if (data.length === 0) {
                productGrid.innerHTML = `
                    <div class="col-12 text-center py-5">
                        <h4 class="text-muted">Tidak ada produk yang sesuai dengan kriteria pencarian.</h4>
                    </div>
                `;
                return;
            }

            // Looping data dan buat elemen HTML
            data.forEach(product => {
                const productElement = document.createElement('div');
                productElement.className = 'col-md-6 col-lg-4';
                productElement.innerHTML = `
                    <div class="card h-100 shadow-sm border-0">
                        <img src="${product.image}" class="card-img-top" alt="${product.name}" loading="lazy">
                        <div class="card-body d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-start mb-2">
                                <h5 class="card-title fw-bold mb-0">${product.name}</h5>
                                <span class="badge bg-secondary">${product.category}</span>
                            </div>
                            <h6 class="text-primary fw-bold mb-3">${formatRupiah(product.price)}</h6>
                            <p class="card-text text-muted small flex-grow-1">${product.description}</p>
                            <button class="btn btn-dark w-100 mt-auto btnBeli">Beli Sekarang</button>
                        </div>
                    </div>
                `;

                const buyButton = productElement.querySelector('.btnBeli');
                buyButton.addEventListener('click', () => {
                    window.open(createWhatsappUrl(product), '_blank');
                });
                
                productGrid.appendChild(productElement);
            });
        };
         

        // Fungsi utama untuk memfilter dan merender data
        const applyFilters = () => {
            // Kita mulai dengan seluruh data
            let filteredData = products;

            // 3. Fitur Filter berdasarkan Kategori
            if (currentCategory !== 'Semua') {
                filteredData = filteredData.filter(product => product.category === currentCategory);
            }

            // 4. Fitur Search berdasarkan Nama Produk (case-insensitive)
            if (currentSearchQuery.trim() !== '') {
                filteredData = filteredData.filter(product => 
                    product.name.toLowerCase().includes(currentSearchQuery.toLowerCase())
                );
            }

            // Render data yang sudah difilter
            renderProducts(filteredData);
        };

        // Event Listener untuk Tombol Filter Kategori
        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Ubah styling tombol yang aktif
                filterBtns.forEach(b => {
                    b.classList.remove('btn-primary');
                    b.classList.add('btn-outline-primary');
                });
                e.target.classList.remove('btn-outline-primary');
                e.target.classList.add('btn-primary');

                // Update state kategori dan terapkan filter
                currentCategory = e.target.getAttribute('data-category');
                applyFilters();
            });
        });

        // Event Listener untuk Input Pencarian
        searchInput.addEventListener('input', (e) => {
            // Update state pencarian dan terapkan filter
            currentSearchQuery = e.target.value;
            applyFilters();
        });

        // Render awal saat halaman dimuat
        document.addEventListener('DOMContentLoaded', () => {
            renderProducts(products);
        });
