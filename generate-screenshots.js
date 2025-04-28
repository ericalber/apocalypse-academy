// Generate placeholder screenshots for the preview
const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

// Create directory if it doesn't exist
const screenshotsDir = path.join(__dirname, '..', 'previews', 'screenshots');
if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

// Function to create a placeholder screenshot
function createPlaceholderScreenshot(filename, width, height, bgColor, title, subtitle) {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  
  // Background
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, width, height);
  
  // Header area
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, width, 80);
  
  // Yellow accent line
  ctx.fillStyle = '#ffd700';
  ctx.fillRect(0, 80, width, 3);
  
  // Logo text
  ctx.fillStyle = '#ffd700';
  ctx.font = 'bold 24px Arial';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  ctx.fillText('APOCALYPSE ACADEMY', 30, 40);
  
  // Title
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 36px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(title, width / 2, height / 3);
  
  // Subtitle
  ctx.fillStyle = '#CCCCCC';
  ctx.font = '24px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(subtitle, width / 2, height / 2);
  
  // Footer with page indicator
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, height - 60, width, 60);
  
  ctx.fillStyle = '#FFFFFF';
  ctx.font = '18px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Visualização da página ' + title, width / 2, height - 30);
  
  // Save to file
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(path.join(screenshotsDir, filename), buffer);
  
  console.log(`Created: ${filename}`);
}

// Create placeholder screenshots for each page
const screenshots = [
  { 
    filename: 'home-full.png', 
    width: 1200, 
    height: 800, 
    color: '#1A1A1A', 
    title: 'Página Inicial', 
    subtitle: 'Quando o sistema falhar, aqui ainda restará verdade.' 
  },
  { 
    filename: 'documentarios-full.png', 
    width: 1200, 
    height: 800, 
    color: '#1A1A1A', 
    title: 'Documentários', 
    subtitle: 'Séries documentais sobre profecias e eventos dos últimos dias' 
  },
  { 
    filename: 'cursos-full.png', 
    width: 1200, 
    height: 800, 
    color: '#1A1A1A', 
    title: 'Cursos', 
    subtitle: 'Módulos de aprendizado sobre escatologia e discipulado estratégico' 
  },
  { 
    filename: 'revistas-full.png', 
    width: 1200, 
    height: 800, 
    color: '#1A1A1A', 
    title: 'Revistas', 
    subtitle: 'Publicações digitais com análises profundas sobre eventos atuais' 
  },
  { 
    filename: 'devocionais-full.png', 
    width: 1200, 
    height: 800, 
    color: '#1A1A1A', 
    title: 'Devocionais', 
    subtitle: 'Áudios proféticos para meditação diária' 
  },
  { 
    filename: 'comunidade-full.png', 
    width: 1200, 
    height: 800, 
    color: '#1A1A1A', 
    title: 'Comunidade', 
    subtitle: '"Os Escolhidos" - Grupos exclusivos para membros' 
  },
  { 
    filename: 'blog-full.png', 
    width: 1200, 
    height: 800, 
    color: '#1A1A1A', 
    title: 'Arquivos Secretos', 
    subtitle: 'Blog temático com artigos profundos sobre profecias' 
  },
  { 
    filename: 'sobre-full.png', 
    width: 1200, 
    height: 800, 
    color: '#1A1A1A', 
    title: 'Sobre a Missão', 
    subtitle: 'Visão, missão e equipe da Apocalypse Academy' 
  }
];

// Create each placeholder screenshot
screenshots.forEach(({ filename, width, height, color, title, subtitle }) => {
  createPlaceholderScreenshot(filename, width, height, color, title, subtitle);
});

console.log('All placeholder screenshots created successfully!');
