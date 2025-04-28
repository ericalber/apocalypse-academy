// Create a placeholder video file
const fs = require('fs');
const path = require('path');

// Create directory if it doesn't exist
const videosDir = path.join(__dirname, 'public', 'videos');
if (!fs.existsSync(videosDir)) {
  fs.mkdirSync(videosDir, { recursive: true });
}

// Create a simple text file as a placeholder for the video
const placeholderContent = 'This is a placeholder for a video file. In production, this would be replaced with an actual video.';
fs.writeFileSync(path.join(videosDir, 'hero-background.mp4'), placeholderContent);

console.log('Placeholder video created successfully!');
