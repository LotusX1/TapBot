function showMessage() {
    try {
        document.getElementById('message').innerText = "Hello, this is your Telegram mini-app!";
    } catch (error) {
        console.error('Error displaying message:', error);
    }
}

function toggleDarkMode() {
    try {
        document.body.classList.toggle('dark-mode');
    } catch (error) {
        console.error('Error toggling dark mode:', error);
    }
}

function openGame() {
    try {
        window.open('/game', '_blank', 'width=600,height=600');
    } catch (error) {
        console.error('Error opening game:', error);
    }
}