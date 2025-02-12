const flowers = {
  rose: {
      title: "Rose",
      image: "/img/roses.png",
      seedImage: "/img/hyacinths-bag.png",
      desc: "Rose represents love, loyalty, and romance",
      price: "240 bells"
  },
  tulip: {
      title: "Tulip",
      image: "/img/tulip.png",
      seedImage: "/img/hyacinths-bag.png",
      desc: "Tulip represents innocence, purity, and warmth",
      price: "240 bells"
  },
  cosmos: {
      title: "Cosmos",
      image: "/img/cosmos.png",
      seedImage: "/img/hyacinths-bag.png",
      desc: "Cosmos represents passion",
      price: "240 bells"
  },
  hyacinth: {
      title: "Hyacinth",
      image: "/img/hyancint.png",
      seedImage: "/img/hyacinths-bag.png",
      desc: "Hyacinth represents sincerity",
      price: "250 bells"
  },
  lily: {
      title: "Lily",
      image: "/img/lilies.png",
      seedImage: "/img/hyacinths-bag.png",
      desc: "Lily represents purity",
      price: "240 bells"
  },
  "lily-of-the-valley": {
      title: "Lily of the Valley",
      image: "/img/lily-of-the-valley.png",
      seedImage: "/img/hyacinths-bag.png",
      desc: "Lily of the Valley represents sincerity",
      price: "300 bells"
  },
  dandelions: {
      title: "Dandelions",
      image: "/img/dandelions.png",
      seedImage: "/img/hyacinths-bag.png",
      desc: "Dandelions represent resilience and hope",
      price: "280 bells"
  },
  pansies: {
      title: "Pansies",
      image: "/img/pansies.png",
      seedImage: "/img/hyacinths-bag.png",
      desc: "Pansies represent remembrance and love",
      price: "220 bells"
  }
};

// Function to shuffle an array (Fisher-Yates Algorithm)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

// Function to create the flower list dynamically in a random order
function createFlowerList() {
  const mainBox = document.getElementById("main-box");
  mainBox.innerHTML = ""; // Clear existing content

  // Get the flower keys and shuffle them
  const flowerKeys = Object.keys(flowers);
  shuffleArray(flowerKeys);

  flowerKeys.forEach(flowerID => {
      const flower = flowers[flowerID];

      const flowerDiv = document.createElement("div");
      flowerDiv.classList.add("image-container");
      flowerDiv.id = flowerID;
      flowerDiv.onclick = function() { showConsole(flowerID); };

      flowerDiv.innerHTML = `
          <img class="seed sizing" src="${flower.seedImage}" alt="">
          <img class="flower sizing" src="${flower.image}" alt="">
          <p>${flower.title}</p>
          <div class="details">
              <img src="/img/bell.png" alt="">
              <p>${flower.price}</p>
          </div>
      `;

      mainBox.appendChild(flowerDiv);
  });
}

// Function to display flower details in the modal
function showConsole(flowerID) {
  const flower = flowers[flowerID];

  if (flower) {
      document.getElementById("flowerTitle").innerText = flower.title;
      document.getElementById("flowerImage").src = flower.image;
      document.getElementById("flowerDesc").innerText = flower.desc;
      document.getElementById("flowerPrice").innerText = flower.price;

      document.getElementById("myModal").style.display = "block";
  } else {
      console.error("Flower not found: " + flowerID);
      alert("Flower not found. Please try again.");
  }
}

// Close modal when clicking outside
window.onclick = function(event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
      modal.style.display = "none";
  }
};

// Initialize flower list on page load
document.addEventListener("DOMContentLoaded", createFlowerList);
