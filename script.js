document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const originalName = document.getElementById('nameInput').value.trim();
    const inputName = originalName.toLowerCase();
  
    if (inputName === 'tiara') {
      // Jika nama benar, arahkan ke part1.html dengan mengirimkan nama sebagai query parameter
      window.location.href = 'part1.html?name=' + encodeURIComponent(originalName);
    } else {
      alert('Nama yang Anda masukkan salah. Silakan masukkan nama "tiara".');
    }
  });
  