<script setup>
import { useViewModeStore } from '@/stores/viewMode'
import ToggleViewMode from '@/components/ToggleViewMode.vue'
import { ref } from 'vue'

const rows = 7
const cols = 51

// Koordinat piksel huruf "WELCOME" (pakai grid 7x52)
const welcomePixels = new Set();

// Fungsi helper untuk menambahkan blok piksel sebuah huruf
const addLetter = (letterPixels, startCol) => {
  letterPixels.forEach(([row, colOffset]) => {
    // Pastikan row tidak melebihi batas 6
    if (row >= 0 && row <= 6) {
      welcomePixels.add(`${row},${startCol + colOffset}`);
    }
  });
};

let currentColumn = 0; // Kolom awal untuk huruf pertama

// --- Open Tag ---
// --- Open Tag ---
const open = [
  [3, 0],
  [2, 1], [4, 1],
  [1, 2], [5, 2],
  [0, 3], [6, 3]
];
addLetter(open, currentColumn);
currentColumn += 4 + 1;

// --- W ---
// Lebar: 6 kolom (W lebih lebar)
const W = [
  // Kolom 0
  [0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0],
  // Kolom 1 (diagonal atas-kiri)
  [6, 1],
  // Kolom 2 (diagonal tengah)
  [1, 2], [2, 2], [3, 2], [4, 2], [5, 2],
  // Kolom 3 (diagonal tengah)
  [6, 3],
  // Kolom 4 (diagonal bawah-kanan)
  [0, 4], [1, 4], [2, 4], [3, 4], [4, 4], [5, 4],
];
addLetter(W, currentColumn);
currentColumn += 6 + 1; // Lebar W (6) + spasi (1)

// --- E ---
// Lebar: 4 kolom
const E = [
  // Kolom 0 (sisi kiri penuh)
  [0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0],
  // Kolom 1 (tengah horisontal)
  [0, 1], [3, 1], [6, 1],
  // Kolom 2
  [0, 2], [6, 2],
  // Kolom 3 (kanan, garis atas, tengah, bawah)
];
addLetter(E, currentColumn);
currentColumn += 4 + 1; // Lebar E (4) + spasi (1)

// --- L ---
// Lebar: 3 kolom
const L = [
  // Kolom 0 (sisi kiri penuh)
  [0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0],
  // Kolom 1 (bagian bawah)
  [6, 1],
  // Kolom 2 (bagian bawah)
  [6, 2]
];
addLetter(L, currentColumn);
currentColumn += 3 + 1; // Lebar L (3) + spasi (1)

// --- C ---
// Lebar: 4 kolom
const C = [
  // Kolom 0 (sisi kiri)
  [1, 0], [2, 0], [3, 0], [4, 0], [5, 0],
  // Kolom 1 (atas & bawah)
  [0, 1], [6, 1],
  // Kolom 2 (atas & bawah)
  [0, 2], [6, 2],
  // Kolom 3 (atas & bawah)
  [0, 3], [6, 3] // Hati-hati, C terbuka
];
addLetter(C, currentColumn);
currentColumn += 4 + 1; // Lebar C (4) + spasi (1)

// --- O ---
// Lebar: 4 kolom
const O = [
  // Kolom 0 (sisi kiri)
  [1, 0], [2, 0], [3, 0], [4, 0], [5, 0],
  // Kolom 1 (atas & bawah)
  [0, 1], [6, 1],
  // Kolom 2 (atas & bawah)
  [0, 2], [6, 2],
  // Kolom 3 (sisi kanan)
  [1, 3], [2, 3], [3, 3], [4, 3], [5, 3]
];
addLetter(O, currentColumn);
currentColumn += 4 + 1; // Lebar O (4) + spasi (1)

// --- M ---
// Lebar: 6 kolom (M juga lebih lebar)
const M = [
  // Kolom 0
  [0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0],
  // Kolom 1 (diagonal atas-kiri)
  [0, 1], [1, 1],
  // Kolom 2 (tengah atas)
  [2, 2], [3, 2],
  // Kolom 3 (diagonal atas-kanan)
  [0, 3], [1, 3],
  // Kolom 4 (diagonal bawah-kanan)
  [0, 4], [1, 4], [2, 4], [3, 4], [4, 4], [5, 4], [6, 4]
];
addLetter(M, currentColumn);
currentColumn += 6 + 1; // Lebar M (6) + spasi (1)

// --- E (lagi) ---
// Lebar: 4 kolom
addLetter(E, currentColumn);

currentColumn += 3 + 1; // Lebar M (6) + spasi (1)

// --- Backslash  ---
const backslash = [
  [6, 0],
  [5, 1], [4, 1],
  [2, 2], [3, 2],
  [0, 3], [1, 3]
];
addLetter(backslash, currentColumn);
currentColumn += 4 + 1;

// --- Close Tag ---
const close = [
  [0, 0], [6, 0],
  [1, 1], [5, 1],
  [2, 2], [4, 2],
  [3, 3]
];
addLetter(close, currentColumn);
currentColumn += 4 + 1;
// currentColumn += 4 + 1; // Jika ada huruf lagi, hitung lagi
const grid = Array.from({ length: rows }, (_, row) =>
  Array.from({ length: cols }, (_, col) =>
    welcomePixels.has(`${row},${col}`) ? 1 : 0
  )
)

const viewMode = useViewModeStore()
const lines = Array.from({ length: 30 })
</script>

<template>
  <div class="text-white font-mono text-sm ">

    <div class="fixed  right-4 z-50">
      <ToggleViewMode />
    </div>

    <div class="flex">
      <!-- Baris Nomor -->
      <div class="pr-4 text-right text-gray-500 select-none leading-relaxed">
        <div v-for="line in 40" :key="line">{{ line.toString().padStart(2, '0') }}</div>
      </div>

      <!-- Konten -->
      <div class="space-y-4 leading-relaxed">
        <!-- Foto & Nama -->
        <div class="flex items-center gap-4 flex-wrap">
          <img
            src="https://avatars.githubusercontent.com/u/57424216?s=400&u=270db91b562e62a7290151b3ce5ad11992dd3aaf&v=4"
            alt="Profile Photo" class="w-24 h-24 rounded-full border border-emerald-500" />
          <div>
            <h1 class="text-xl font-bold text-teal-400">HIBATUL WAFI PUTRA AGUSTIANI</h1>
            <p class="text-sm text-gray-400">FULL STACK DEVELOPER</p>
          </div>
        </div>

        <!-- Kontak -->
        <div class="space-y-1 text-sm">
          <!-- Lokasi -->
          <div class="flex items-center gap-2">
            <FontAwesomeIcon icon="fa-solid fa-location-dot" class="text-red-400 w-4" />
            <span class="text-gray-200">Jakarta, Indonesia</span>
          </div>

          <!-- Telepon -->
          <div class="flex items-center gap-2">
            <FontAwesomeIcon icon="fa-solid fa-phone" class="text-emerald-400 w-4" />
            <a href="https://wa.me/6285863046869" class="text-gray-200 hover:text-emerald-300">
              +62 858 6304 6869
            </a>
          </div>

          <!-- Email -->
          <div class="flex items-center gap-2">
            <FontAwesomeIcon icon="fa-solid fa-envelope" class="text-yellow-400 w-4" />
            <a href="mailto:hiwapiputra@gmail.com" class="text-gray-200 hover:text-yellow-300">
              hiwapiputra@gmail.com
            </a>
          </div>

          <!-- LinkedIn -->
          <div class="flex items-center gap-2">
            <FontAwesomeIcon icon="fa-brands fa-linkedin" class="text-blue-400 w-4" />
            <a href="https://linkedin.com/in/hiwapiputra" target="_blank" rel="noopener"
              class="text-gray-200 hover:text-blue-300">
              linkedin.com/in/hiwapiputra
            </a>
          </div>

          <!-- GitHub -->
          <div class="flex items-center gap-2">
            <FontAwesomeIcon icon="fa-brands fa-github" class="text-white w-4" />
            <a href="https://github.com/hibatulwafi" target="_blank" rel="noopener"
              class="text-gray-200 hover:text-gray-400">
              github.com/hibatulwafi
            </a>
          </div>
        </div>

        <!-- Summary -->
        <div>
          <h2 class="text-base font-semibold text-violet-400 mb-1">Summary</h2>
          <p class="text-gray-300 leading-relaxed">
            An experienced programmer with over 4 years of experience, possessing deep knowledge in software
            development. Skilled in coding, problem-solving, and object-oriented programming. Having a strong
            background in developing web and mobile applications using various technologies and
            programming languages. Experienced as a fullstack developer, capable of developing both frontend
            and backend applications. Able to implement and manage RESTful APIs to connect applications with
            backend and other services. Flexible and capable of adapting quickly to new work environments.
          </p>
        </div>

        <!-- 🎨 Contribution Style Grid -->

        <div class="grid grid-cols-1">
          <div class="mt-8">
            <h2 class="text-sm text-gray-400 mb-2 font-mono">
              Contributions in the last year
            </h2>

            <!-- Hanya grid ini yang scroll jika overflow -->
            <div class="overflow-x-auto">
              <div class="min-w-max inline-block">
                <div class="grid gap-1" :style="{ gridTemplateColumns: `repeat(${cols}, 12px)` }">
                  <div v-for="(row, rowIndex) in grid" :key="rowIndex" class="contents">
                    <div v-for="(cell, colIndex) in row" :key="`${rowIndex}-${colIndex}`" class="w-3 h-3 rounded-sm"
                      :class="cell === 1 ? 'bg-green-500' : 'bg-gray-700'" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>