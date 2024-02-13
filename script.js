// script.js
let currentPage = 0;
const pages = [
    "আমি একটু বলি, কেন আমি খুব বড় লেখা ফেসবুকে পড়তে বা লিখতে নিরুৎসাহিত বোধ করি। আমরা যখন কোনও একটা লেখা পড়ি, সেই লেখার মধ্যে ছোট ছোট টার্গেট সেট করা থাকে।",
    "মানুষকে দম ফেলার সময় দিতে হয়। বিশাল একটা উপন্যাসও যখন মানুষ লিখে, একটা ঘটনা বা একটা বিশেষ কিছু লেখার পর নতুন পরিচ্ছদ শুরু করে।",
    // Add more sections as needed
    // Add more pages as needed
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
