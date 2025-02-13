document.addEventListener('DOMContentLoaded', function() {
    // Referensi ke tombol dan container
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const buttonContainer = document.getElementById('buttonContainer');
  
    // Event untuk tombol Yes: arahkan ke part1.html
    yesBtn.addEventListener('click', function() {
      window.location.href = 'part1.html';
    });
  
    // Fungsi untuk membuat tombol Yes baru
    function createYesButton() {
      const btn = document.createElement('button');
      btn.textContent = 'Yes';
      btn.addEventListener('click', function() {
        window.location.href = 'part1.html';
      });
      return btn;
    }
  
    // Event untuk tombol No: tampilkan alert dan tambahkan tombol Yes baru
    noBtn.addEventListener('click', function() {
      alert("tidak boleh menolak");
      const newYesBtn = createYesButton();
      buttonContainer.appendChild(newYesBtn);
    });
  });
  