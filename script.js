// This function is called when the ☰ menu icon is clicked
function toggleDropdown() {
  // First, get the dropdown menu element using its ID
  const dropdown = document.getElementById('dropdownMenu');

  // Then, add or remove the "show" class
  // If the dropdown is hidden, it will now be visible
  // If it is visible, it will be hidden again
  dropdown.classList.toggle('show');
}

document.addEventListener('click', function(event) {
  const dropdown = document.getElementById('dropdownMenu');
  const toggleBtn = document.querySelector('.menu-toggle');

  if (!dropdown.contains(event.target) && !toggleBtn.contains(event.target)) {
    dropdown.classList.remove('show');
  }
});
