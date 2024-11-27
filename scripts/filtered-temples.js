const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

// Automatically close hamburger menu on tab click
function closeHamburgerMenu() {
  navigation.classList.remove('open');
  hamButton.classList.remove('open');
}

const currentYear = new Date().getFullYear();

document.getElementById("currentyear").textContent = currentYear;

let lastModif = new Date(document.lastModified);

document.getElementById("lastModified").textContent = "Last modification: " + lastModif

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Boise Idaho",
      location: "Boise, Idaho",
      dedicated: "1984, May, 25",
      area: 35868,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/boise-idaho/2018/400x250/1-Boise-Idaho-Temple-1968984.jpg"
    },
    {
      templeName: "Anchorage Alaska",
      location: "Anchorage, Alaska",
      dedicated: "1999, January, 9",
      area: 11937,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/anchorage-alaska/400x225/anchorage-temple-lds-253274-wallpaper.jpg"
    },
    {
      templeName: "Chihuahua Mexico",
      location: "Chihuahua, Mexico",
      dedicated: "1999, March, 6",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/colonia-juarez-chihuahua-mexico/400x250/colonia-juarez-mexico-temple-lds-126123-wallpaper.jpg"
    },
    {
      templeName: "Fort Collins Colorado",
      location: "Fort Collins, Colorado",
      dedicated: "2016, October, 16",
      area: 42000,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/fort-collins-colorado/400x250/fort-collins-colorado-temple-morning-exterior-1776055-wallpaper.jpg"
    },
    {
      templeName: "Lubbock Texas",
      location: "Lubbock, Texas",
      dedicated: "2002, April, 21",
      area: 16498,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lubbock-texas/400x250/lubbock-temple-art-lds-83303-wallpaper.jpg"
    }
  ];

createTempleCard(temples);

function createTempleCard(filteredTemples) {
    document.querySelector(".temple-container").innerHTML = "";
    let container = document.querySelector('main.temple-container');

        filteredTemples.forEach(temple => {
        const templeCard = document.createElement('div');
        templeCard.classList.add('temple-card');

        const templeInfo = `
            <h3>${temple.templeName}</h3>
            <p>Location: ${temple.location}</p>
            <p>Dedicated: ${temple.dedicated}</p>
            <p>Area: ${temple.area} sq. ft.</p>
        `;
        templeCard.innerHTML = templeInfo;

        const templeImage = document.createElement('img');
        templeImage.src = temple.imageUrl;
        templeImage.alt = `${temple.templeName} Temple`;
        templeImage.loading = "lazy";

        templeCard.appendChild(templeImage);
        container.appendChild(templeCard);
        });
}


function filterTemples(condition) {
    const filteredTemples = temples.filter(condition);
    createTempleCard(filteredTemples);
}

// Event listeners calling the filterTemples function with different conditions
document.querySelector("#old").addEventListener("click", () => {
    closeHamburgerMenu();
    filterTemples(temple => {
        const year = new Date(temple.dedicated).getFullYear();
        return year < 1900;
    });
});

document.querySelector("#new").addEventListener("click", () => {
    closeHamburgerMenu();
    filterTemples(temple => {
        const year = new Date(temple.dedicated).getFullYear();
        return year > 2000;
    });
});

document.querySelector("#large").addEventListener("click", () => {
    closeHamburgerMenu();
    filterTemples(temple => temple.area > 90000);
});

document.querySelector("#small").addEventListener("click", () => {
  closeHamburgerMenu();  
  filterTemples(temple => temple.area < 10000);
});

document.querySelector("#home").addEventListener("click", () => {
    closeHamburgerMenu();
    createTempleCard(temples);
});