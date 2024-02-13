// script.js
let currentPage = 0;
const pages = [
    "This is first page.",
    "This is second page.",
    "This is third page.",

    
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
