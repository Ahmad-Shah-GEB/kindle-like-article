// script.js

const largeText = `আমি একটু বলি, কেন আমি খুব বড় লেখা ফেসবুকে পড়তে বা লিখতে নিরুৎসাহিত বোধ করি। আমরা যখন কোনও একটা লেখা পড়ি, সেই লেখার মধ্যে ছোট ছোট টার্গেট সেট করা থাকে। মানুষকে দম ফেলার সময় দিতে হয়। বিশাল একটা উপন্যাসও যখন মানুষ লিখে, একটা ঘটনা বা একটা বিশেষ কিছু লেখার পর নতুন পরিচ্ছদ শুরু করে। মানুষ জিরোবার একটু সুযোগ পায়। একদম টানা বিশাল বাজারের ফর্দের মত লিখে যেতে থাকলে মানুষের মন সেই শ্বাসটা নিতে পারে না।

যেমন কিছুদিন সুষুপ্ত পাঠকের একটা লেখার জবাব দিসি, ওখানেও ভেঙ্গে ভেঙ্গে বিভিন্ন বাক্যকে এড্রেস করে লিখছি। আমার আরেক বন্ধু মিনহাজ একটা ভালো উপদেশ দিয়েছিলো, প্যারাগ্রাফকে বেশি বড় না করতে। আরেকটা বইয়ে পড়েছিলাম, একটা প্যারাগ্রাফে মূলত একটা মূলভাব রাখতে, অনেক বেশি কিছু এক অনুচ্ছেদের ভেতর না ঢোকাতে। যেমন এই লেখাতেও প্যারাগ্রাফটা বড় হয়ে যাচ্ছিল, পরে শ্বাসটা নিতে পারে না-এর পর নতুন প্যারাগ্রাফ শুরু করেছি।

মানুষের কাছে জানতে চেয়ে যা বুঝতে পারলাম, কেউ কেউ দীর্ঘ লম্বা লেখা স্ক্রল করে করে পড়তে পারেন। তবে কাজটা মোটেও সহজ না। আমার মনে হচ্ছিল, ফেসবুকে একটা ফিচার থাকতে পারে, যেখানে একটা লিংকে গেলে কিন্ডলের মতন করে ডিসপ্লেতে লেখা আসবে। পেজের একপাশে একটু টাচ করলে পরের পৃষ্ঠাতে লেখা চলে যাবে। এভাবে পৃষ্ঠা উল্টানোর মত করে বড় লেখা হয়তো মানুষ পড়তে পারবে। লম্বা লেখা স্ক্রল করতে করতে হাত ব্যথা হয়ে যাবে না।

কিন্তু সমস্যা হল, ভিডিও-এর ভেতরে যেমন অ্যাড ঢোকানো যায়, ওরকম কিন্ডল টাইপ ফর্মেটে সেরকম অ্যাড দেখানো যাবে না। ফেসবুক পুরো সাইকোলজিস্টদের টিম ভাড়া করে ক্যামনে মানুষের মধ্যে ছোট ভিডিও দেখানোর প্রবণতা একেবারে গেঁথে দেওয়া যায়, সেই চেষ্টা করে। বিভিন্নভাবে রিলস দেখানোর চেষ্টা করে। আজ রিলসে একটা ভিডিও দেখাচ্ছিলো, নিচ থেকে নিজে নিজেই বারবার পরের ভিডিও একটু উঠিয়ে উঠিয়ে দেখাচ্ছিলো, যাতে আমি আরেকটু এফোর্ট দিয়ে পরের ভিডিও দেখি।

সোজা কথা, ফেসবুক দেখে ব্যবসা, আর যত আমরা ভিডিও দেখবো, কম পড়বো, তত ওদের অ্যাড দেখানো সহজ হবে। তাই তারা চায় লম্বা লেখা পড়তে মানুষের অসুবিধা হোক, স্ক্রল করে করে লম্বা লেখা পড়তে নিরুৎসাহিত হোক। সেজন্য হয়তো বইটই টাইপ অ্যাপের মত একটা আর্টিকেল পড়ার অ্যাপ থাকা উচিৎ। যেখানে মানুষ গিয়ে সহজে কিন্ডল স্টাইলে লম্বা লম্বা লেখাগুলো জাস্ট ট্যাপ করে করে পড়তে পারবে। অলরেডি এরকম কিছু আছে কিনা, জানি না। তবে না থাকলে কারোর বানানো উচিৎ। শর্ট ভিডিও দেখাতে আসক্ত করার জন্য টিকটক, মেটা, ইউটিউব, যে সম্মিলিত মানসিক আক্রমণ চালাচ্ছে আমাদের উপর, এই ব্যাপারে সাবধান হওয়া দরকার, প্রতিরোধ করা দরকার।`;

// Assuming largeText is correctly defined with backticks (`) and contains your large text

function createPages(text, maxPageSize) {
    const paragraphs = text.split('\n\n');
    let currentPageText = '';
    let pages = [];
    
    paragraphs.forEach(paragraph => {
        if ((currentPageText + paragraph).length + 2 <= maxPageSize || currentPageText === '') {
            currentPageText += (currentPageText ? '\n\n' : '') + paragraph;
        } else {
            pages.push(currentPageText);
            currentPageText = paragraph;
        }
    });
    
    if (currentPageText) {
        pages.push(currentPageText);
    }
    
    return pages;
}

const pages = createPages(largeText, 1500); // Adjust 1000 based on your needs
let currentPage = 0;

function updatePage() {
    document.getElementById('text-box').innerText = pages[currentPage];
  
    // Update the page number
    document.getElementById('page-number').innerText = `Page ${currentPage + 1} of ${pages.length}`;
}


document.getElementById('next-page').addEventListener('click', () => {
    currentPage = (currentPage + 1) % pages.length;
    updatePage();
});

document.getElementById('prev-page').addEventListener('click', () => {
    currentPage = (currentPage - 1 + pages.length) % pages.length;
    updatePage();
});

document.addEventListener('DOMContentLoaded', updatePage);
