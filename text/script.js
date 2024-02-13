document.getElementById('processBtn').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const escapedText = inputText.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/'/g, "\\'");
    document.getElementById('outputText').value = escapedText;
});