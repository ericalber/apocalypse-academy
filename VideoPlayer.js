import React, { useState, useRef, useEffect } from 'react';
import './VideoPlayer.css';

/**
 * VideoPlayer Component
 * 
 * @param {Object} props - Component props
 * @param {string} props.src - Video source URL
 * @param {string} props.poster - Poster image URL
 * @param {string} props.title - Video title
 * @param {Array} props.meta - Array of meta information strings
 * @param {boolean} props.autoplay - Whether to autoplay the video
 * @param {boolean} props.controls - Whether to show native controls
 * @param {boolean} props.muted - Whether the video is muted
 * @param {boolean} props.loop - Whether to loop the video
 * @param {Function} props.onEnded - Callback when video ends
 * @returns {JSX.Element}
 */
const VideoPlayer = ({
  src,
  poster,
  title,
  meta = [],
  autoplay = false,
  controls = false,
  muted = false,
  loop = false,
  onEnded
}) => {
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(muted ? 0 : 1);
  const [isMuted, setIsMuted] = useState(muted);
  const [quality, setQuality] = useState('auto');
  
  const videoRef = useRef(null);
  
  useEffect(() => {
    const videoElement = videoRef.current;
    
    const handleLoadedData = () => {
      setIsLoading(false);
      setDuration(videoElement.duration);
    };
    
    const handleTimeUpdate = () => {
      setCurrentTime(videoElement.currentTime);
      setProgress((videoElement.currentTime / videoElement.duration) * 100);
    };
    
    const handleEnded = () => {
      setIsPlaying(false);
      if (onEnded) {
        onEnded();
      }
    };
    
    videoElement.addEventListener('loadeddata', handleLoadedData);
    videoElement.addEventListener('timeupdate', handleTimeUpdate);
    videoElement.addEventListener('ended', handleEnded);
    
    return () => {
      videoElement.removeEventListener('loadeddata', handleLoadedData);
      videoElement.removeEventListener('timeupdate', handleTimeUpdate);
      videoElement.removeEventListener('ended', handleEnded);
    };
  }, [onEnded]);
  
  const togglePlay = () => {
    const videoElement = videoRef.current;
    
    if (isPlaying) {
      videoElement.pause();
    } else {
      videoElement.play();
    }
    
    setIsPlaying(!isPlaying);
  };
  
  const handleSeek = (e) => {
    const progressBar = e.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    const seekTime = pos * duration;
    
    videoRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
    setProgress(pos * 100);
  };
  
  const handleVolumeChange = (e) => {
    const volumeBar = e.currentTarget;
    const rect = volumeBar.getBoundingClientRect();
    const vol = (e.clientX - rect.left) / rect.width;
    
    setVolume(vol);
    videoRef.current.volume = vol;
    setIsMuted(vol === 0);
  };
  
  const toggleMute = () => {
    const newMutedState = !isMuted;
    setIsMuted(newMutedState);
    videoRef.current.muted = newMutedState;
    
    if (newMutedState) {
      videoRef.current.volume = 0;
      setVolume(0);
    } else {
      videoRef.current.volume = 0.5;
      setVolume(0.5);
    }
  };
  
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  
  const handleQualityChange = (newQuality) => {
    setQuality(newQuality);
    // In a real implementation, this would switch video sources
    console.log(`Quality changed to ${newQuality}`);
  };
  
  return (
    <div className="video-player">
      <div className="video-container">
        <video
          ref={videoRef}
          className="video-element"
          src={src}
          poster={poster}
          autoPlay={autoplay}
          controls={controls}
          muted={muted}
          loop={loop}
          playsInline
        />
        
        {isLoading && (
          <div className="video-loading">
            <div className="loading-spinner"></div>
          </div>
        )}
        
        {!controls && (
          <div className="video-overlay">
            <div className="video-info">
              {title && <h3 className="video-title">{title}</h3>}
              {meta.length > 0 && (
                <div className="video-meta">
                  {meta.map((item, index) => (
                    <span key={index}>{item}</span>
                  ))}
                </div>
              )}
            </div>
            
            <div className="video-controls">
              <div className="control-buttons">
                <div className="control-button" onClick={() => { videoRef.current.currentTime -= 10; }}>-10</div>
                <div className={`control-button play-button`} onClick={togglePlay}>
                  {isPlaying ? '❚❚' : '▶'}
                </div>
                <div className="control-button" onClick={() => { videoRef.current.currentTime += 10; }}>+10</div>
              </div>
              
              <div className="video-timeline">
                <span className="timeline-time">{formatTime(currentTime)}</span>
                <div className="timeline-progress" onClick={handleSeek}>
                  <div 
                    className="timeline-progress-bar" 
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <span className="timeline-time">{formatTime(duration)}</span>
              </div>
              
              <div className="volume-control">
                <div className="control-button" onClick={toggleMute}>
                  {isMuted ? '🔇' : '🔊'}
                </div>
                <div className="volume-slider" onClick={handleVolumeChange}>
                  <div 
                    className="volume-level" 
                    style={{ width: `${volume * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="quality-selector">
                <div className="quality-button">
                  {quality} ▾
                </div>
                <div className="quality-options">
                  <div 
                    className={`quality-option ${quality === '4K' ? 'active' : ''}`}
                    onClick={() => handleQualityChange('4K')}
                  >
                    4K
                  </div>
                  <div 
                    className={`quality-option ${quality === '1080p' ? 'active' : ''}`}
                    onClick={() => handleQualityChange('1080p')}
                  >
                    1080p
                  </div>
                  <div 
                    className={`quality-option ${quality === '720p' ? 'active' : ''}`}
                    onClick={() => handleQualityChange('720p')}
                  >
                    720p
                  </div>
                  <div 
                    className={`quality-option ${quality === 'auto' ? 'active' : ''}`}
                    onClick={() => handleQualityChange('auto')}
                  >
                    Auto
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
