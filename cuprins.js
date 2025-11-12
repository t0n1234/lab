// Find the <ul> (assuming it's the first one, adjust selector if needed)
const ul = document.querySelector('ul');

// Remove it from the page
if (ul) {
  ul.remove();
}

// Define the slideshow items (links, images, and captions)
const slides = [
  { link: "index.html", img: "images/img2.png", caption: "Pagina mea" },
  { link: "colegu/index.html", img: "colegu/images/bliss.png", caption: "Pagina 2" }
];

// Slideshow settings
let current = 0;
const delay = 1111; // 1 sec

// Create slideshow container
const container = document.createElement('div');
document.body.appendChild(container);
container.style.textAlign = "center";

// Create link, image, and caption elements
const link = document.createElement('a');
const img = document.createElement('img');
const caption = document.createElement('div');

link.appendChild(img);
container.appendChild(link);
container.appendChild(caption);

// Styling
img.width = 300;
img.height = 300;
img.style.borderRadius = "8px";
img.style.cursor = "pointer";
img.style.transition = "opacity 0.5s";

caption.style.marginTop = "10px";
caption.style.fontSize = "18px";
caption.style.fontWeight = "bold";

// Function to show a slide
function showSlide(index) {
  img.style.opacity = 0;
  caption.style.opacity = 0;
  setTimeout(() => {
    link.href = slides[index].link;
    img.src = slides[index].img;
    caption.textContent = slides[index].caption;
    img.style.opacity = 1;
    caption.style.opacity = 1;
  }, 250);
}

// Initialize first slide
showSlide(current);

// Loop through slides
setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, delay);
