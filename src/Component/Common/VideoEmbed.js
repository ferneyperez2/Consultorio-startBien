import React from 'react';
// import './VideoEmbed.css';

const VideoEmbed = ({ url }) => {
    if (!url) {
        return null;
    }

    // Detectar la plataforma del video para un mejor embed (ej: YouTube, Vimeo)
    let embedUrl;
    if (url.includes("youtube.com")) {
        const videoId = url.split("v=")[1]?.split("&")[0];
        if (videoId) {
            embedUrl = `https://www.youtube.com/embed/${videoId}`;
        }
    } else if (url.includes("vimeo.com")) {
        const videoId = url.split("vimeo.com/")[1]?.split("?")[0];
        if (videoId) {
            embedUrl = `https://player.vimeo.com/video/${videoId}`;
        }
    } else {
        embedUrl = url; // Intenta embeber directamente si no se reconoce
    }

    return (
        <div className="video-embed-container">
            <iframe
                width="560"
                height="315"
                src={embedUrl}
                title="Video Player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default VideoEmbed;