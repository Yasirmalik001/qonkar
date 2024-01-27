 // Add event listeners to toggle between input and select
 const inputField = document.getElementById('jobTitle');
 const selectDropdown = document.getElementById('jobTitleSelect');

 inputField.addEventListener('focus', () => {
   selectDropdown.style.display = 'block';
   inputField.style.display = 'none';
 });

 selectDropdown.addEventListener('change', () => {
   inputField.value = selectDropdown.value;
   inputField.style.display = 'block';
   selectDropdown.style.display = 'none';
 });