let userBalance = 0;

function isMobileDevice() {
    return /Mobi|Android|iPhone/i.test(navigator.userAgent);
}

window.onload = function() {
    try {
        if (!isMobileDevice()) {
            document.querySelector('.game-container').style.display = 'none';
            document.getElementById('device-warning').style.display = 'block';
        }
    } catch (error) {
        console.error('Error detecting device:', error);
    }
};

document.getElementById('tap-button').addEventListener('touchstart', function(event) {
    try {
        let touchCount = event.touches.length;
        if (touchCount <= 10) {
            userBalance += touchCount; // Update user balance
            document.getElementById('user-balance').innerText = userBalance; // Display updated balance
        } else {
            document.getElementById('user-balance').innerText = 'AutoClicker Detected!!';
            setTimeout(() => {
                window.location.href = '/';
            }, 5000);
        }
    } catch (error) {
        console.error('Error handling tap:', error);
    }
}, false);