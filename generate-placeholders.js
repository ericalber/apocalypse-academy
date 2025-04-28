// Placeholder image generation script
const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

// Create directory if it doesn't exist
const imagesDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Function to create a placeholder image
function createPlaceholderImage(filename, width, height, bgColor, text) {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  
  // Background
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, width, height);
  
  // Text
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 24px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, width / 2, height / 2);
  
  // Save to file
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(path.join(imagesDir, filename), buffer);
  
  console.log(`Created: ${filename}`);
}

// Create placeholder images
const placeholders = [
  { filename: 'hero-background.jpg', width: 1920, height: 1080, color: '#1A1A1A', text: 'Hero Background' },
  { filename: 'documentaries-hero.jpg', width: 1920, height: 600, color: '#1A1A1A', text: 'Documentaries Hero' },
  { filename: 'courses-hero.jpg', width: 1920, height: 600, color: '#1A1A1A', text: 'Courses Hero' },
  { filename: 'magazines-hero.jpg', width: 1920, height: 600, color: '#1A1A1A', text: 'Magazines Hero' },
  { filename: 'doc-babilonia.jpg', width: 800, height: 450, color: '#2A2A2A', text: 'Babilônia Revelada' },
  { filename: 'doc-sinais.jpg', width: 800, height: 450, color: '#2A2A2A', text: 'Sinais dos Céus' },
  { filename: 'doc-israel.jpg', width: 800, height: 450, color: '#2A2A2A', text: 'Israel: O Relógio de Deus' },
  { filename: 'doc-babilonia-featured.jpg', width: 1200, height: 675, color: '#2A2A2A', text: 'Babilônia Revelada (Featured)' },
  { filename: 'doc-perseguicao.jpg', width: 800, height: 450, color: '#2A2A2A', text: 'Perseguição: A Igreja nas Sombras' },
  { filename: 'doc-apocalipse.jpg', width: 800, height: 450, color: '#2A2A2A', text: 'Apocalipse: Desvendando os Selos' },
  { filename: 'doc-arrebatamento.jpg', width: 800, height: 450, color: '#2A2A2A', text: 'O Grande Arrebatamento' },
  { filename: 'doc-daniel.jpg', width: 800, height: 450, color: '#2A2A2A', text: 'Daniel: Profecias para o Tempo do Fim' },
  { filename: 'doc-anticristo.jpg', width: 800, height: 450, color: '#2A2A2A', text: 'A Ascensão do Anticristo' },
  { filename: 'doc-oriente-medio.jpg', width: 800, height: 450, color: '#2A2A2A', text: 'Oriente Médio: O Epicentro Profético' },
  { filename: 'doc-russia.jpg', width: 800, height: 450, color: '#2A2A2A', text: 'Rússia: O Urso do Norte' },
  { filename: 'doc-china.jpg', width: 800, height: 450, color: '#2A2A2A', text: 'China: O Dragão do Oriente' },
  { filename: 'doc-nova-ordem.jpg', width: 800, height: 450, color: '#2A2A2A', text: 'Nova Ordem Mundial' },
  { filename: 'coming-soon-background.jpg', width: 1200, height: 600, color: '#2A2A2A', text: 'Coming Soon' },
  { filename: 'curso-escatologia.jpg', width: 800, height: 450, color: '#2A2A2A', text: 'Escatologia Fundamental' },
  { filename: 'curso-escatologia-featured.jpg', width: 1200, height: 675, color: '#2A2A2A', text: 'Escatologia Fundamental (Featured)' },
  { filename: 'curso-ia.jpg', width: 800, height: 450, color: '#2A2A2A', text: 'IA e o Falso Profeta' },
  { filename: 'curso-daniel.jpg', width: 800, height: 450, color: '#2A2A2A', text: 'Daniel Desvendado' },
  { filename: 'curso-apocalipse.jpg', width: 800, height: 450, color: '#2A2A2A', text: 'Apocalipse Revelado' },
  { filename: 'curso-israel.jpg', width: 800, height: 450, color: '#2A2A2A', text: 'Israel e as Profecias' },
  { filename: 'curso-discipulado.jpg', width: 800, height: 450, color: '#2A2A2A', text: 'Discipulado Estratégico' },
  { filename: 'curso-guerra-cultural.jpg', width: 800, height: 450, color: '#2A2A2A', text: 'Guerra Cultural' },
  { filename: 'curso-apologetica.jpg', width: 800, height: 450, color: '#2A2A2A', text: 'Apologética Profética' },
  { filename: 'instructor-eric.jpg', width: 400, height: 400, color: '#2A2A2A', text: 'Eric Alberto da Cruz' },
  { filename: 'instructor-maria.jpg', width: 400, height: 400, color: '#2A2A2A', text: 'Maria Oliveira' },
  { filename: 'instructor-pedro.jpg', width: 400, height: 400, color: '#2A2A2A', text: 'Pedro Santos' },
  { filename: 'cta-background.jpg', width: 1920, height: 600, color: '#1A1A1A', text: 'CTA Background' },
  { filename: 'cta-background-courses.jpg', width: 1920, height: 600, color: '#1A1A1A', text: 'CTA Background Courses' },
  { filename: 'revista-01.jpg', width: 600, height: 800, color: '#2A2A2A', text: 'Apocalypse Chronicles - Edição 01' },
  { filename: 'revista-02-preview.jpg', width: 600, height: 800, color: '#2A2A2A', text: 'Apocalypse Chronicles - Edição 02' },
  { filename: 'revista-especial-israel.jpg', width: 600, height: 800, color: '#2A2A2A', text: 'Edição Especial: Israel' },
  { filename: 'revista-especial-tecnologia.jpg', width: 600, height: 800, color: '#2A2A2A', text: 'Edição Especial: Tecnologia' },
  { filename: 'revista-especial-igreja.jpg', width: 600, height: 800, color: '#2A2A2A', text: 'Edição Especial: Igreja' },
  { filename: 'reader-1.jpg', width: 100, height: 100, color: '#2A2A2A', text: 'Leitor 1' },
  { filename: 'reader-2.jpg', width: 100, height: 100, color: '#2A2A2A', text: 'Leitor 2' },
  { filename: 'reader-3.jpg', width: 100, height: 100, color: '#2A2A2A', text: 'Leitor 3' },
  { filename: 'avatar-1.jpg', width: 100, height: 100, color: '#2A2A2A', text: 'Avatar 1' },
  { filename: 'avatar-2.jpg', width: 100, height: 100, color: '#2A2A2A', text: 'Avatar 2' },
  { filename: 'avatar-3.jpg', width: 100, height: 100, color: '#2A2A2A', text: 'Avatar 3' },
];

// Create each placeholder image
placeholders.forEach(({ filename, width, height, color, text }) => {
  createPlaceholderImage(filename, width, height, color, text);
});

console.log('All placeholder images created successfully!');
