// script.js
let currentPage = 0;
const pages = [
    "আমি একটু বলি, কেন আমি খুব বড় লেখা ফেসবুকে পড়তে বা লিখতে নিরুৎসাহিত বোধ করি। আমরা যখন কোনও একটা লেখা পড়ি, সেই লেখার মধ্যে ছোট ছোট টার্গেট সেট করা থাকে।",
    "মানুষকে দম ফেলার সময় দিতে হয়। বিশাল একটা উপন্যাসও যখন মানুষ লিখে, একটা ঘটনা বা একটা বিশেষ কিছু লেখার পর নতুন পরিচ্ছদ শুরু করে।",
    // Example continuation based on your content
    "যেমন কিছুদিন সুষুপ্ত পাঠকের একটা লেখার জবাব দিসি, ওখানেও ভেঙ্গে ভেঙ্গে বিভিন্ন বাক্যকে এড্রেস করে লিখছি। আমার আরেক বন্ধু মিনহাজ একটা ভালো উপদেশ দিয়েছিলো, প্যারাগ্রাফকে বেশি বড় না করতে।",
    "আরেকটা বইয়ে পড়েছিলাম, একটা প্যারাগ্রাফে মূলত একটা মূলভাব রাখতে, অনেক বেশি কিছু এক অনুচ্ছেদের ভেতর না ঢোকাতে। যেমন এই লেখাতেও প্যারাগ্রাফটা"

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
