document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('colorCanvas');
    const ctx = canvas.getContext('2d');
    const colorCodeInput = document.getElementById('colorCode');
    const copyButton = document.getElementById('copyButton');
    let fixedColor = false;
    canvas.width = 500;
    canvas.height = 300;

    // https://www.colorhexa.com/
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0, 'red');
    gradient.addColorStop(0.17, 'orange');
    gradient.addColorStop(0.34, 'yellow');
    gradient.addColorStop(0.51, 'green');
    gradient.addColorStop(0.68, 'cyan');
    gradient.addColorStop(0.85, 'blue');
    gradient.addColorStop(1, 'magenta');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const gradient2 = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient2.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient2.addColorStop(0.5, 'rgba(255, 255, 255, 0)');
    gradient2.addColorStop(0.5, 'rgba(0, 0, 0, 0)');
    gradient2.addColorStop(1, 'rgba(0, 0, 0, 1)');

    ctx.fillStyle = gradient2;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    canvas.addEventListener('mousemove', (e) => {
        if (!fixedColor) {
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const imageData = ctx.getImageData(x, y, 1, 1).data;
            const color = `rgb(${imageData[0]}, ${imageData[1]}, ${imageData[2]})`;
            colorCodeInput.value = rgbToHex(imageData[0], imageData[1], imageData[2]);
        }
    });

    canvas.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        fixedColor = !fixedColor;
    });

    copyButton.addEventListener('click', () => {
        colorCodeInput.select();
        document.execCommand('copy');
        alert('カラーコードがコピーされました: ' + colorCodeInput.value);
    });

    function rgbToHex(r, g, b) {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
    }
});
