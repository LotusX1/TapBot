// detectDevice.js
window.onload = function() {
    function isMobileDevice() {
        return /Mobi|Android|iPhone|iPad|iPod/.test(navigator.userAgent);
    }

    if (!isMobileDevice()) {
        document.getElementById('device-warning').style.display = 'block';
        document.querySelector('.game-header').style.display = 'none';
        document.querySelector('.game-main').style.display = 'none';
        document.querySelector('.game-footer').style.display = 'none';
    }
};