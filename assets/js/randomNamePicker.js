// Get the nameList and randomName elements from the HTML
const nameListElement = document.getElementById("nameList");
const randomNameElement = document.getElementById("randomName");

// Array to store the names
let names = [];

// Function to add names from the textarea to the nameList
function addNames() {
  // Get the nameInput textarea element
  const nameInput = document.getElementById("nameInput");

  // Split the input value into an array of names
  const inputNames = nameInput.value.split("\n");

  // Remove any empty or whitespace-only names
  const validNames = inputNames.filter(name => name.trim() !== "");

  // Add the valid names to the names array
  names = names.concat(validNames);

  // Clear the textarea
  nameInput.value = "";

  // Update the nameList
  updateNameList();
}

// Function to update the nameList
function updateNameList() {
  // Clear the nameList
  nameListElement.innerHTML = "";

  // Add each name as a list item to the nameList
  names.forEach(name => {
    const listItem = document.createElement("li");
    listItem.textContent = name;
    nameListElement.appendChild(listItem);
  });
}

// Function to pick a random name from the names array
function pickRandomName() {
  // Check if there are any names in the array
  if (names.length === 0) {
    randomNameElement.textContent = "No names found.";
    return;
  }

  // Generate a random index within the range of the names array
  const randomIndex = Math.floor(Math.random() * names.length);

  // Get the random name from the array
  const randomName = names[randomIndex];

  // Display the random name
  randomNameElement.textContent = randomName;
}
