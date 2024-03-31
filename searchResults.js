// Assuming searchResults is an array of objects with properties like name, image, etc.
const searchResults = [
    { name: "Result 1", image: "result1.jpg" },
    { name: "Result 2", image: "result2.jpg" },
    // Add more search results as needed
  ];
  
  // Get the search results container
  const searchResultsContainer = document.getElementById("searchResults");
  
  // Loop through search results and create grid items
  searchResults.forEach(result => {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
  
    // Example: Add image and name to grid item
    const imageElement = document.createElement("img");
    imageElement.src = result.image;
    imageElement.alt = result.name;
  
    const nameElement = document.createElement("p");
    nameElement.textContent = result.name;
  
    gridItem.appendChild(imageElement);
    gridItem.appendChild(nameElement);
  
    // Append grid item to search results container
    searchResultsContainer.appendChild(gridItem);
  });
  