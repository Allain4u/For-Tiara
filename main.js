// Ambil parameter "name" dari URL
const queryParams = new URLSearchParams(window.location.search);
const name = queryParams.get('name');

// if (name) {
//   document.getElementById('mainTitle').textContent = "Happy Valentine Day, " + name + "!";
// }
