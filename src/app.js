const axios = require('axios');

window.onload = () => {
    const urlForm = document.getElementById('urlForm');
    const url = document.getElementById('url');
    const result = document.getElementById('result');
    const copyToClipboard = document.getElementById('copyToClipboard');

    urlForm.addEventListener('submit', (event) => {
        event.preventDefault();
        axios({
            url: 'http://localhost:3000/scrape',
            method: 'post',
            data: {
                url: url.value,
            }
        })
        .then(({ data }) => {
            copyToClipboard.classList.remove('invisible');
            result.innerHTML = `<pre>${JSON.stringify(data, null, '  ')}</pre>`;
        });
    });

    copyToClipboard.addEventListener('click', () => {
        navigator.clipboard.writeText(result.innerText);
        copyToClipboard.innerText = 'Copied!';
        setTimeout(() => {
            copyToClipboard.innerText = 'Copy to Clipboard';
        }, 2000);
    });
};