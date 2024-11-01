// Product Array
const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];
  
  // Populate product options
  function populateProductOptions() {
    const selectElement = document.getElementById("subject");
  
    products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.id;
      option.textContent = product.name;
      selectElement.appendChild(option);
    });
  }
  
  // Call the function to populate options on page load
  populateProductOptions();
  
  // Track review submissions
  function trackReviewCount(event) {
    // Prevent form submission temporarily (for testing purposes)
    event.preventDefault();
  
    // Increment review count in localStorage
    let reviewCount = localStorage.getItem("reviewCounter") || 0;
    reviewCount = parseInt(reviewCount) + 1;
    localStorage.setItem("reviewCounter", reviewCount);
  
    console.log(`Total reviews submitted: ${reviewCount}`);
  
    
    event.target.submit();
  }
  
  // Attach the function to form submission
  const form = document.querySelector("form");
  form.addEventListener("submit", trackReviewCount);

  const currentYear = new Date().getFullYear();

  document.getElementById("currentyear").textContent = currentYear;
  
  let lastModif = new Date(document.lastModified);
  
  document.getElementById("lastModified").textContent = "Last modification: " + lastModif