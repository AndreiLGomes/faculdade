document.addEventListener('DOMContentLoaded', () => {
    const songItems = document.querySelectorAll('.song-item');
    const audioPlayer = document.getElementById('audioPlayer');

    songItems.forEach(item => {
        item.addEventListener('click', () => {
            const audioSource = item.getAttribute('data-src');
            audioPlayer.src = audioSource;
            audioPlayer.play();
        });
    });
});
