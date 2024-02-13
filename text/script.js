document.getElementById('processBtn').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    // Adding backticks before and after the escaped text
    const escapedText = '`' + inputText.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/'/g, "\\'") + '`';
    document.getElementById('outputText').value = escapedText;
});

document.getElementById('copyBtn').addEventListener('click', function() {
    const outputText = document.getElementById('outputText');
    outputText.select(); // Selects the content of the outputText
    document.execCommand('copy'); // Copies the selected text to the clipboard
    alert('Text copied to clipboard'); // Optional: Show a message confirming the copy
});