// Mendapatkan elemen input checkbox
let wifi = document.querySelector("input[type='checkbox']");
let hotspot = document.querySelector("input[type='checkbox'].box3");

// Menambahkan event listener untuk perubahan checkbox
hotspot.addEventListener("change", function() {
  // Jika hotspot di-checked, maka wifi di-unchecked
  if (hotspot.checked) {
      wifi.checked = false;
  }
});

// Menambahkan event listener untuk perubahan checkbox wifi
wifi.addEventListener("change", function() {
  // Jika wifi di-checked, maka hotspot di-unchecked
  if (wifi.checked) {
    hotspot.checked = false;
  }
});