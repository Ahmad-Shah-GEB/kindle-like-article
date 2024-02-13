// script.js
let currentPage = 0;
const pages = [
    "bbkbkbibh hihihihiuh nhihihi"

];

function nextPage() {
    currentPage++;
    if (currentPage >= pages.length) currentPage = 0; // Loop back to the first page or handle the end of the book differently
    document.getElementById('book-content').innerText = pages[currentPage];
}

// Initialize with the first page
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('book-content').innerText = pages[0];
});
