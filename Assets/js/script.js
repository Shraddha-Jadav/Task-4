const $button  = document.querySelector('#sidebar-toggle');
const $wrapper = document.querySelector('#wrapper');
const $sidebarCard = document.querySelector('.sidebar-card');

$button.addEventListener('click', (e) => {
  e.preventDefault();
  $wrapper.classList.toggle('toggled');
  $sidebarCard.classList.toggle('hidden');
});


document.addEventListener('DOMContentLoaded', function() {
    const readMoreBtn = document.getElementById('read-more');
    const extraRows = document.querySelectorAll('.extra-row');
    let isOpen = false;
  
    readMoreBtn.addEventListener('click', function() {
      isOpen = !isOpen;
      extraRows.forEach(row => {
        row.style.display = isOpen ? 'table-row' : 'none';
      });
      readMoreBtn.textContent = isOpen ? 'Read Less' : 'Read More';
    });
  });


  // sidebar-card 









