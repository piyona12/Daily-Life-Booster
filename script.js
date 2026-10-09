// URL GOOGLE APPS SCRIPT
const SPREADSHEET_URL = "https://script.google.com/macros/s/AKfycbwOvP_AuPkJE2Eh2IV6Q7YnsusuPjKkLYxto11nCmg8GOuOR39Fpg99LhWA6MWAiswT1Q/exec";

// DATA MENU LENGKAP
const daftarMenuLengkap = [
    // --- MINUMAN PENDAMPING MAKAN (NETRAL) 🥤 ---
    { nama: "Es Teh Manis Plastikan 🥤", harga: 3000, tipe: "minuman", rasa: "manis", kategori: "netral" },
    { nama: "Es Nutrisari 🧃", harga: 4000, tipe: "minuman", rasa: "manis", kategori: "netral" },
    { nama: "Pop Ice 🧃", harga: 5000, tipe: "minuman", rasa: "manis", kategori: "netral" },
    { nama: "Es Jeruk Peras Segar 🍹", harga: 5000, tipe: "minuman", rasa: "manis", kategori: "netral" },
    { nama: "Es Kopi 5000-an 🍵", harga: 5000, tipe: "minuman", rasa: "manis", kategori: "netral" },
    { nama: "Air Mineral Dingin 💧", harga: 4000, tipe: "minuman", rasa: "segar", kategori: "netral" },

    // --- MINUMAN BERTEKSTUR / TOPPING 🍧 ---
    { nama: "Es Kelapa Muda Gula Merah 🥥", harga: 5000, tipe: "minuman", rasa: "manis", kategori: "topping" },
    { nama: "Es Doger / Es Teler Mangkuk 🍧", harga: 5000, tipe: "minuman", rasa: "manis", kategori: "topping" },
    { nama: "Boba Milk Tea / Thai Tea 🧋", harga: 10000, tipe: "minuman", rasa: "manis", kategori: "topping" },
    { nama: "Es Alpukat Kocok Melt 🥑", harga: 12000, tipe: "minuman", rasa: "manis", kategori: "topping" },
    { nama: "Matcha Latte Ice 🍵", harga: 25000, tipe: "minuman", rasa: "manis", kategori: "topping" },
    { nama: "Es Kuwut Bali 🍸", harga: 5000, tipe: "minuman", rasa: "segar", kategori: "topping" },

    // --- CAMILAN & MAKANAN MANIS ---
    { nama: "Pisang Cokelat Lumer (Piscok) 🍌", harga: 8000, tipe: "makanan", rasa: "manis", kategori: "ringan" },
    { nama: "Roti Bakar Bandung 🍞", harga: 15000, tipe: "makanan", rasa: "manis", kategori: "ringan" },
    { nama: "Martabak Manis Cokelat Keju 🧀", harga: 55000, tipe: "makanan", rasa: "manis", kategori: "berat" },

    // --- MAKANAN PEDAS 🔥 ---
    { nama: "Ayam Geprek 🍗", harga: 10000, tipe: "makanan", rasa: "pedas", kategori: "berat" },
    { nama: "Mie Jebew 🍝", harga: 10000, tipe: "makanan", rasa: "pedas", kategori: "berat" },
    { nama: "Seblak Sedang 🍜", harga: 12000, tipe: "makanan", rasa: "pedas", kategori: "berat" },
    { nama: "Seblak Pedas Level 3 🌶️", harga: 15000, tipe: "makanan", rasa: "pedas", kategori: "berat" },
    { nama: "Ayam Geprek + Nasi 🍗", harga: 15000, tipe: "makanan", rasa: "pedas", kategori: "berat" },
    { nama: "Mie Gacoan 🍝", harga: 15000, tipe: "makanan", rasa: "pedas", kategori: "berat" },
    { nama: "Bebek Goreng Sambal Hijau 🦆", harga: 20000, tipe: "makanan", rasa: "pedas", kategori: "berat" },
    { nama: "Sate Taichan Pedas 🍢", harga: 25000, tipe: "makanan", rasa: "pedas", kategori: "berat" },
    { nama: "Seafood Pedas 🐟", harga: 30000, tipe: "makanan", rasa: "pedas", kategori: "berat" },
    { nama: "Richeese Fire Chicken Combo 🍗", harga: 45000, tipe: "makanan", rasa: "pedas", kategori: "berat" },

    // --- MAKANAN ASIN & GURIH 🧀 ---
    { nama: "Indomie Goreng 🍜", harga: 5000, tipe: "makanan", rasa: "asin", kategori: "ringan" },
    { nama: "Cimol Balado 🧆", harga: 5000, tipe: "makanan", rasa: "asin", kategori: "ringan" },
    { nama: "Cilok 🧆", harga: 5000, tipe: "makanan", rasa: "asin", kategori: "ringan" },
    { nama: "Bakso Cilok 1000-an 🍗", harga: 5000, tipe: "makanan", rasa: "asin", kategori: "ringan" },
    { nama: "Tahu Crispy 🧈", harga: 10000, tipe: "makanan", rasa: "asin", kategori: "ringan" },
    { nama: "Batagor & Siomay Street 🍢", harga: 10000, tipe: "makanan", rasa: "asin", kategori: "ringan" },
    { nama: "Lazato Chicken 🍗", harga: 10000, tipe: "makanan", rasa: "asin", kategori: "berat" },
    { nama: "Chicken Biasa 🍗", harga: 10000, tipe: "makanan", rasa: "asin", kategori: "berat" },
    { nama: "Nasi Uduk Telur 🍚", harga: 12000, tipe: "makanan", rasa: "asin", kategori: "berat" },
    { nama: "Mie Instant + Telur 🍜", harga: 12000, tipe: "makanan", rasa: "asin", kategori: "ringan" },
    { nama: "Lazato Chicken Wings 🍗", harga: 12000, tipe: "makanan", rasa: "asin", kategori: "berat" },
    { nama: "Nasi Goreng Biasa 🍳", harga: 15000, tipe: "makanan", rasa: "asin", kategori: "berat" },
    { nama: "Pecel Ayam + Nasi 🐟", harga: 15000, tipe: "makanan", rasa: "asin", kategori: "berat" },
    { nama: "Bakso Urat / Mie Ayam 🍡", harga: 15000, tipe: "makanan", rasa: "asin", kategori: "berat" },
    { nama: "Lazato Chicken Dada 🍗", harga: 15000, tipe: "makanan", rasa: "asin", kategori: "berat" },
    { nama: "Nasi Padang 🍛", harga: 15000, tipe: "makanan", rasa: "asin", kategori: "berat" },
    { nama: "Lazato Chicken CLBK 🍗", harga: 16000, tipe: "makanan", rasa: "asin", kategori: "berat" },
    { nama: "Dimsum Ayam & Udang 🥟", harga: 20000, tipe: "makanan", rasa: "asin", kategori: "ringan" },
    { nama: "Lazato Chicken Package 🍗", harga: 22000, tipe: "makanan", rasa: "asin", kategori: "berat" },
    { nama: "Sate Ayam Madura 🍢", harga: 25000, tipe: "makanan", rasa: "asin", kategori: "berat" },
    { nama: "Nasi Padang Rendang 🍛", harga: 25000, tipe: "makanan", rasa: "asin", kategori: "berat" },
    { nama: "Ramen Kuah Shoyu 🍥", harga: 50000, tipe: "makanan", rasa: "asin", kategori: "berat" },
    { nama: "Burger & Kentang Goreng 🍔", harga: 50000, tipe: "makanan", rasa: "asin", kategori: "berat" },
    { nama: "Martabak Telur Daging Sapi 🍳", harga: 55000, tipe: "makanan", rasa: "asin", kategori: "berat" }
];

const daftarTantangan = [
    "Minum 2 gelas air putih sekarang juga! 💧",
    "Istirahat mata: Tatap benda hijau jauh di luar jendela selama 30 detik! 🌿",
    "Lakukan peregangan (stretching) tangan dan leher selama 1 menit! 🧘‍♂️",
    "Jalan kaki 100 langkah di sekitar ruangan/rumah! 🚶‍♀️",
    "Duduk tegak! Perbaiki postur punggungmu sekarang juga! 🧘‍♂️",
    "Makan 1 buah atau camilan sehat hari ini! 🍎",
    "Rapiin file di folder downloads laptopmu selama 3 menit! 💻",
    "Bersihkan layar HP atau layar laptopmu sampai mengkilap! 📱",
    "Buang 3 sampah/kertas tak terpakai di sekitar meja belajarmu! 🗑️",
    "Rapiin tempat tidur atau bantal tempat dudukmu sekarang! 🛏️",
    "Balas 1 pesan penting atau email yang dari kemarin kamu tunda! ✉️",
    "Tulis 3 hal kecil yang bikin kamu bersyukur hari ini di notes HP! 📝",
    "Kirim pesan singkat berisi ucapan terima kasih ke 1 temanmu! ✉️",
    "Dengarkan 1 lagu nostalgia favoritmu zaman SMP/SMA! 🎶",
    "Kirim meme/stiker lucu ke grup chat teman atau keluarga! 🤭",
    "Puji 1 temanmu hari ini secara tulus! 🌟",
    "Senyum ke cermin selama 5 detik dan katakan 'Kamu keren hari ini!' 🪞",
    "Dengarkan 1 lagu baru yang belum pernah kamu dengar sebelumnya! 🎧",
    "Matikan notifikasi HP-mu selama 15 menit ke depan dan fokus bersantai! 🔕",
    "Coba minum air hangat sambil tarik napas dalam-dalam 3 kali! ☕",
    "Tebak warna baju teman dekatmu sebelum kamu ketemu/chat dia! 👕",
    "Cari tahu 1 fakta unik dunia yang belum pernah kamu tahu di internet! 🌐"
];

const pesanSupport = [
    "Anjay! Kamu keren banget hari ini, tetap semangat ya! 🚀✨",
    "Ingat, sekecil apapun langkahmu hari ini, kamu sudah melangkah maju! 💖",
    "Jangan lupa istirahat & jajan enak ya, kamu berhak bahagia! 🍔🍹",
    "Proud of you! Tetap jadi versi terbaik dirimu besok! 🌟",
    "Setiap hari adalah kesempatan baru untuk bersinar. Keep it up! 💪"
];

let streakCount = 0;
let tantanganAktif = false;
let riwayatJurnal = JSON.parse(localStorage.getItem("riwayat_jurnal")) || [];

// FUNGSI LOGIKA REKOMENDASI SMART
function cariRekomendasiSmart(pilihanTipe, pilihanKategori, pilihanKategoriMinuman, pilihanRasa, budgetInput) {
    function filterMenu(tipeItem) {
        return daftarMenuLengkap.filter(item => {
            const cukupUang = item.harga <= budgetInput;
            const tipeCocok = item.tipe === tipeItem;
            const rasaCocok = (pilihanRasa === "terserah") ? true : (item.rasa === pilihanRasa);
            
            let kategoriCocok = true;
            if (tipeItem === "makanan") {
                kategoriCocok = (pilihanKategori === "semua") ? true : (item.kategori === pilihanKategori);
            } else if (tipeItem === "minuman") {
                kategoriCocok = (pilihanKategoriMinuman === "semua") ? true : (item.kategori === pilihanKategoriMinuman);
            }
            
            return cukupUang && tipeCocok && rasaCocok && kategoriCocok;
        });
    }

    if (pilihanTipe === "makanan") {
        let makananSesuai = filterMenu("makanan");
        if (makananSesuai.length === 0) {
            makananSesuai = daftarMenuLengkap.filter(item => 
                item.tipe === "makanan" && item.harga <= budgetInput && 
                (pilihanKategori === "semua" ? true : item.kategori === pilihanKategori)
            );
        }

        if (makananSesuai.length === 0) {
            return `❌ Budget Rp ${budgetInput.toLocaleString()} belum cukup untuk pilihan makanan tersebut. Coba naikkan budgetnya ya!`;
        }

        const makananPilihan = makananSesuai[Math.floor(Math.random() * makananSesuai.length)];
        const kembalian = budgetInput - makananPilihan.harga;

        return `🍱 REKOMENDASI MAKANAN (${makananPilihan.kategori.toUpperCase()} - ${pilihanRasa.toUpperCase()}):\n` +
               `1. ${makananPilihan.nama} (Rp ${makananPilihan.harga.toLocaleString()})\n` +
               `-----------------------------------\n` +
               `💵 Total Belanja : Rp ${makananPilihan.harga.toLocaleString()}\n` +
               `💰 Sisa Kembalian: Rp ${kembalian.toLocaleString()}`;
    }

    if (pilihanTipe === "minuman") {
        let minumanSesuai = filterMenu("minuman");
        if (minumanSesuai.length === 0) {
            minumanSesuai = daftarMenuLengkap.filter(item => 
                item.tipe === "minuman" && item.harga <= budgetInput && 
                (pilihanKategoriMinuman === "semua" ? true : item.kategori === pilihanKategoriMinuman)
            );
        }

        if (minumanSesuai.length === 0) {
            return `❌ Budget Rp ${budgetInput.toLocaleString()} belum cukup untuk beli minuman tersebut. Coba naikkan budgetnya ya!`;
        }

        const minumanPilihan = minumanSesuai[Math.floor(Math.random() * minumanSesuai.length)];
        const kembalian = budgetInput - minumanPilihan.harga;

        return `🥤 REKOMENDASI MINUMAN/ES (${pilihanRasa.toUpperCase()}):\n` +
               `1. ${minumanPilihan.nama} (Rp ${minumanPilihan.harga.toLocaleString()})\n` +
               `-----------------------------------\n` +
               `💵 Total Belanja : Rp ${minumanPilihan.harga.toLocaleString()}\n` +
               `💰 Sisa Kembalian: Rp ${kembalian.toLocaleString()}`;
    }

    if (pilihanTipe === "kombo") {
        let makananSesuai = filterMenu("makanan");
        if (makananSesuai.length === 0) {
            makananSesuai = daftarMenuLengkap.filter(item => 
                item.tipe === "makanan" && item.harga <= budgetInput && 
                (pilihanKategori === "semua" ? true : item.kategori === pilihanKategori)
            );
        }

        if (makananSesuai.length === 0) {
            return `❌ Budget Rp ${budgetInput.toLocaleString()} belum cukup untuk paket kombo tersebut. Coba naikkan budgetnya ya!`;
        }

        let pasanganDitemukan = false;
        let makananPilihan, minumanPilihan, total, kembalian;

        const makananAcak = [...makananSesuai].sort(() => Math.random() - 0.5);

        for (let mkn of makananAcak) {
            let sisaUang = budgetInput - mkn.harga;
            
            let minumanCukup = daftarMenuLengkap.filter(item => {
                const cukupUang = item.harga <= sisaUang;
                const tipeMinum = item.tipe === "minuman";
                const katMinum = (pilihanKategoriMinuman === "semua") ? true : (item.kategori === pilihanKategoriMinuman);
                return cukupUang && tipeMinum && katMinum;
            });

            if (minumanCukup.length > 0) {
                makananPilihan = mkn;
                minumanPilihan = minumanCukup[Math.floor(Math.random() * minumanCukup.length)];
                total = makananPilihan.harga + minumanPilihan.harga;
                kembalian = budgetInput - total;
                pasanganDitemukan = true;
                break;
            }
        }

        if (pasanganDitemukan) {
            return `🎉 PAKET KOMBO PAS BUAT KAMU (${makananPilihan.kategori.toUpperCase()} - ${pilihanRasa.toUpperCase()}):\n` +
                   `1. Makanan: ${makananPilihan.nama} (Rp ${makananPilihan.harga.toLocaleString()})\n` +
                   `2. Minuman: ${minumanPilihan.nama} (Rp ${minumanPilihan.harga.toLocaleString()})\n` +
                   `-----------------------------------\n` +
                   `💵 Total Belanja : Rp ${total.toLocaleString()}\n` +
                   `💰 Sisa Kembalian: Rp ${kembalian.toLocaleString()}`;
        } else {
            return `⚠️ Budget Rp ${budgetInput.toLocaleString()} belum cukup untuk beli PAKET KOMBO pilihanmu. Coba ganti ke 'Hanya Makanan' atau naikkan budgetnya!`;
        }
    }
}

// FUNGSI SPINNER
function putarDanCari() {
    const pilihanTipe = document.getElementById("pilih-tipe").value;
    const pilihanKategori = document.getElementById("pilih-kategori") ? document.getElementById("pilih-kategori").value : "semua";
    const pilihanKategoriMinuman = document.getElementById("pilih-kategori-minuman") ? document.getElementById("pilih-kategori-minuman").value : "semua";
    const pilihanRasa = document.getElementById("pilih-rasa").value;
    const budgetInput = parseInt(document.getElementById("input-budget").value) || 0;
    
    const wheelBox = document.querySelector(".wheel-box");
    const wheelText = document.getElementById("wheel-display");
    const hasilBox = document.getElementById("hasil-box");
    const hasilText = document.getElementById("hasil-text");

    if (budgetInput < 2000) {
        alert("Masukkan budget minimal Rp 2.000 ya!");
        return;
    }

    wheelBox.classList.add("spinning");
    wheelText.innerText = "Mencari...";
    hasilBox.style.display = "none";

    setTimeout(() => {
        wheelBox.classList.remove("spinning");
        wheelText.innerText = "DAPAT! ✨";
        
        const teksHasil = cariRekomendasiSmart(pilihanTipe, pilihanKategori, pilihanKategoriMinuman, pilihanRasa, budgetInput);
        hasilText.innerText = teksHasil;
        hasilBox.style.display = "block";
    }, 1200);
}

// TOGGLE DROPDOWN KATEGORI
function sesuaikanDropdown() {
    const tipe = document.getElementById("pilih-tipe").value;
    const groupKategoriMakanan = document.getElementById("group-kategori-makanan");
    const groupKategoriMinuman = document.getElementById("group-kategori-minuman");
    
    if (tipe === "makanan") {
        if (groupKategoriMakanan) groupKategoriMakanan.style.display = "block";
        if (groupKategoriMinuman) groupKategoriMinuman.style.display = "none";
    } else if (tipe === "minuman") {
        if (groupKategoriMakanan) groupKategoriMakanan.style.display = "none";
        if (groupKategoriMinuman) groupKategoriMinuman.style.display = "block";
    } else { // kombo
        if (groupKategoriMakanan) groupKategoriMakanan.style.display = "block";
        if (groupKategoriMinuman) groupKategoriMinuman.style.display = "block";
    }
}

// FUNGSI TANTANGAN HARIAN & JURNAL
function bukaTantangan() {
    if (tantanganAktif) {
        alert("Selesaikan dulu tantangan yang ada sekarang ya!");
        return;
    }

    const indexTantangan = Math.floor(Math.random() * daftarTantangan.length);
    document.getElementById("challenge-text").innerText = daftarTantangan[indexTantangan];
    document.getElementById("btn-challenge").style.display = "none";
    document.getElementById("journal-box").style.display = "block";
    document.getElementById("btn-complete").style.display = "block";
    document.getElementById("support-message-box").style.display = "none";
    tantanganAktif = true;
}

function selesaikanTantangan() {
    const isiJurnal = document.getElementById("input-journal").value;

    if (!isiJurnal.trim()) {
        alert("Isi jurnal singkatmu dulu sebelum klaim streak ya!");
        return;
    }

    streakCount += 1;
    document.getElementById("streak-count").innerText = streakCount;

    const dataBaru = {
        tanggal: new Date().toLocaleDateString('id-ID'),
        tantangan: document.getElementById("challenge-text").innerText,
        jurnal: isiJurnal
    };

    // SIMPAN KE RIWAYAT LOCAL
    riwayatJurnal.unshift(dataBaru);
    localStorage.setItem("riwayat_jurnal", JSON.stringify(riwayatJurnal));
    tampilkanRiwayatJurnal();

    // KIRIM KE GOOGLE SHEETS
    if (SPREADSHEET_URL !== "URL_WEB_APP_GOOGLE_SCRIPT_KAMU_DI_SINI") {
        fetch(SPREADSHEET_URL, {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...dataBaru, totalStreak: streakCount })
        });
    }

    // PESAN MOTIVASI & SUPPORT
    const randomSupport = pesanSupport[Math.floor(Math.random() * pesanSupport.length)];
    document.getElementById("support-text").innerText = randomSupport;
    document.getElementById("support-message-box").style.display = "block";

    // STATUS HADIAH
    if (streakCount >= 3) {
        document.getElementById("reward-status").innerText = "🎉 SELAMAT! Kamu Membuka Voucher Diskon Jajan 10% (KODE PROMO: BOOSTER10)";
    }

    alert("🎉 Selamat! Jurnal tersimpan & data berhasil dikirim!");

    document.getElementById("challenge-text").innerText = "Tantangan hari ini selesai! Datang lagi besok. ✨";
    document.getElementById("btn-complete").style.display = "none";
    document.getElementById("journal-box").style.display = "none";
    document.getElementById("input-journal").value = "";
    document.getElementById("btn-challenge").style.display = "block";
    document.getElementById("btn-challenge").innerText = "✨ Ambil Tantangan Lagi";
    tantanganAktif = false;
}

// FUNGSI KELOLA RIWAYAT JURNAL
function tampilkanRiwayatJurnal() {
    const journalList = document.getElementById("journal-list");
    journalList.innerHTML = "";

    if (riwayatJurnal.length === 0) {
        journalList.innerHTML = "<p style='font-size: 12px; color: #013e37;'>Belum ada riwayat jurnal yang ditulis.</p>";
        return;
    }

    riwayatJurnal.forEach(item => {
        const div = document.createElement("div");
        div.className = "journal-item";
        div.innerHTML = `<strong>📅 ${item.tanggal}</strong><br>` +
                        `<span>🎯 <em>${item.tantangan}</em></span><br>` +
                        `<span>💬 "${item.jurnal}"</span>`;
        journalList.appendChild(div);
    });
}

function toggleRiwayatJurnal() {
    const journalList = document.getElementById("journal-list");
    const btn = document.getElementById("btn-toggle-journal");

    if (journalList.style.display === "none") {
        journalList.style.display = "block";
        btn.innerText = "🔼 Sembunyikan Riwayat Jurnal";
    } else {
        journalList.style.display = "none";
        btn.innerText = "📖 Lihat Riwayat Jurnal Saya";
    }
}

// EVENT LISTENERS
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btn-spin").addEventListener("click", putarDanCari);
    
    const elemTipe = document.getElementById("pilih-tipe");
    if (elemTipe) {
        elemTipe.addEventListener("change", sesuaikanDropdown);
    }

    document.getElementById("btn-challenge").addEventListener("click", bukaTantangan);
    document.getElementById("btn-complete").addEventListener("click", selesaikanTantangan);
    document.getElementById("btn-toggle-journal").addEventListener("click", toggleRiwayatJurnal);

    tampilkanRiwayatJurnal();
});