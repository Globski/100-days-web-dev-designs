// This function is called when the ☰ menu icon is clicked
function toggleDropdown() {
  // First, get the dropdown menu element using its ID
  const dropdown = document.getElementById('dropdownMenu');

  // Then, add or remove the "show" class
  // If the dropdown is hidden, it will now be visible
  // If it is visible, it will be hidden again
  dropdown.classList.toggle('show');
}
