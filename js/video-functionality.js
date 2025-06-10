// Video Playlist Functionality
document.addEventListener('DOMContentLoaded', function() {
    const mainVideo = document.getElementById('main-video');
    const playlistItems = document.querySelectorAll('.playlist-item');
    
    // Handle playlist item clicks
    playlistItems.forEach(item => {
        item.addEventListener('click', function() {
            const videoSrc = this.getAttribute('data-video');
            const videoTitle = this.querySelector('h5').textContent;
            const videoDescription = this.querySelector('p').textContent;
            
            // Update main video
            if (mainVideo && videoSrc) {
                mainVideo.src = videoSrc;
                mainVideo.load();
            }
            
            // Update video caption
            const caption = document.querySelector('.video-caption');
            if (caption) {
                caption.querySelector('h3').textContent = videoTitle;
                caption.querySelector('p').textContent = videoDescription;
            }
            
            // Update active state
            playlistItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            
            // Scroll main video into view on mobile
            if (window.innerWidth <= 1024) {
                mainVideo.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    });
    
    // Auto-play next video when current ends
    if (mainVideo) {
        mainVideo.addEventListener('ended', function() {
            const currentActive = document.querySelector('.playlist-item.active');
            const nextItem = currentActive.nextElementSibling;
            
            if (nextItem && nextItem.classList.contains('playlist-item')) {
                nextItem.click();
                setTimeout(() => {
                    mainVideo.play();
                }, 500);
            }
        });
    }
    
    // Intersection Observer for video autoplay
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Video is in view
                entry.target.setAttribute('data-in-view', 'true');
            } else {
                // Video is out of view
                entry.target.setAttribute('data-in-view', 'false');
                if (!entry.target.paused) {
                    entry.target.pause();
                }
            }
        });
    }, {
        threshold: 0.5
    });
    
    if (mainVideo) {
        videoObserver.observe(mainVideo);
    }
});

// Smooth scroll to video section
function scrollToVideos() {
    const videoSection = document.getElementById('vida-marinas');
    if (videoSection) {
        videoSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

