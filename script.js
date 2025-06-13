function addStudent() {
  const name = document.getElementById("name").value.trim();
  const roll = document.getElementById("roll").value.trim();
  const grade = document.getElementById("grade").value.trim();

  if (!name || !roll || !grade) {
    alert("Please fill all fields.");
    return;
  }

  const table = document.getElementById("studentTableBody");

  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${name}</td>
    <td>${roll}</td>
    <td>${grade}</td>
    <td><button onclick="deleteStudent(this)">Delete</button></td>
  `;

  table.appendChild(row);

  // Clear input fields
  document.getElementById("name").value = "";
  document.getElementById("roll").value = "";
  document.getElementById("grade").value = "";
}

function deleteStudent(button) {
  const row = button.parentElement.parentElement;
  row.remove();
}
