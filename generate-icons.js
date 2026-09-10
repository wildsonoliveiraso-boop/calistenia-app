#!/usr/bin/env node
/**
 * generate-icons.js
 * Gera ícones PNG para o PWA/TWA usando apenas Node.js puro.
 * Cria PNGs mínimos válidos com a paleta de cores do app.
 * 
 * Uso: node generate-icons.js
 * Output: pasta icons/ com todos os tamanhos necessários
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const SIZES = [72, 96, 128, 144, 152, 192, 384, 512];
const ICONS_DIR = path.join(__dirname, 'icons');

// Garante que a pasta existe
if (!fs.existsSync(ICONS_DIR)) {
  fs.mkdirSync(ICONS_DIR, { recursive: true });
}

// Verifica se ImageMagick está disponível
let useImageMagick = false;
try {
  execSync('convert --version', { stdio: 'pipe' });
  useImageMagick = true;
  console.log('✅ ImageMagick disponível — gerando ícones com qualidade total');
} catch (e) {
  console.log('⚠️  ImageMagick não disponível — gerando PNGs mínimos via Node.js puro');
}

function generateWithImageMagick(size) {
  const output = path.join(ICONS_DIR, `icon-${size}.png`);
  const cmd = [
    'convert',
    `-size ${size}x${size}`,
    'xc:"#0f172a"',                                    // fundo azul escuro
    '-fill "#1e293b"',                                  // borda interna
    `-draw "roundrectangle ${Math.round(size*0.08)},${Math.round(size*0.08)} ${Math.round(size*0.92)},${Math.round(size*0.92)} ${Math.round(size*0.15)},${Math.round(size*0.15)}"`,
    '-fill "#10b981"',                                  // acento esmeralda
    `-draw "circle ${Math.round(size*0.5)},${Math.round(size*0.5)} ${Math.round(size*0.5)},${Math.round(size*0.22)}"`,
    '-fill "#0f172a"',
    `-font DejaVu-Sans-Bold -pointsize ${Math.round(size * 0.38)}`,
    `-gravity center -annotate 0 "C"`,
    `"${output}"`
  ].join(' ');

  try {
    execSync(cmd, { stdio: 'pipe' });
    console.log(`  ✓ icon-${size}.png`);
  } catch (err) {
    console.error(`  ✗ Erro em icon-${size}.png:`, err.message);
    generateMinimalPng(size); // fallback
  }
}

/**
 * Gera um PNG mínimo válido via Node.js puro (sem deps externas).
 * Cria um PNG sólido de cor única com um chunk tEXt identificador.
 */
function generateMinimalPng(size) {
  const output = path.join(ICONS_DIR, `icon-${size}.png`);

  // Cria um pixel RGBA representando #10b981 (esmeralda) 
  // e expande para um PNG válido com cabeçalho correto
  const { createCanvas } = tryRequireCanvas();
  
  if (createCanvas) {
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext('2d');
    
    // Fundo
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, size, size);
    
    // Círculo esmeralda
    ctx.fillStyle = '#10b981';
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size * 0.38, 0, Math.PI * 2);
    ctx.fill();
    
    // Letra "C"
    ctx.fillStyle = '#0f172a';
    ctx.font = `bold ${Math.round(size * 0.45)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('C', size / 2, size / 2);
    
    fs.writeFileSync(output, canvas.toBuffer('image/png'));
    console.log(`  ✓ icon-${size}.png (canvas)`);
  } else {
    // Fallback absoluto: PNG de 1x1 pixel esticado (funcionalmente válido)
    writeSolidColorPng(output, size, 0x10, 0xb9, 0x81);
    console.log(`  ✓ icon-${size}.png (minimal)`);
  }
}

function tryRequireCanvas() {
  try {
    return require('canvas');
  } catch (e) {
    return {};
  }
}

/**
 * Escreve um PNG sólido de cor única usando a especificação PNG manualmente.
 * Não requer nenhuma dependência externa.
 */
function writeSolidColorPng(filepath, size, r, g, b) {
  const zlib = require('zlib');

  // Cada linha de pixel: filtro (0) + pixels RGBA
  const row = Buffer.alloc(1 + size * 4);
  row[0] = 0; // filtro de linha "None"
  for (let x = 0; x < size; x++) {
    row[1 + x * 4 + 0] = r;
    row[1 + x * 4 + 1] = g;
    row[1 + x * 4 + 2] = b;
    row[1 + x * 4 + 3] = 0xff; // alpha
  }

  const rawData = Buffer.concat(Array(size).fill(row));
  const compressed = zlib.deflateSync(rawData);

  function crc32(buf) {
    let crc = 0xffffffff;
    const table = new Uint32Array(256).map((_, i) => {
      let c = i;
      for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
      return c;
    });
    for (const byte of buf) crc = table[(crc ^ byte) & 0xff] ^ (crc >>> 8);
    return (crc ^ 0xffffffff) >>> 0;
  }

  function chunk(type, data) {
    const typeBytes = Buffer.from(type, 'ascii');
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length);
    const crcInput = Buffer.concat([typeBytes, data]);
    const crc = Buffer.alloc(4);
    crc.writeUInt32BE(crc32(crcInput));
    return Buffer.concat([len, typeBytes, data, crc]);
  }

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);   // width
  ihdr.writeUInt32BE(size, 4);   // height
  ihdr.writeUInt8(8, 8);         // bit depth
  ihdr.writeUInt8(2, 9);         // color type: RGB — vamos usar RGBA = 6
  ihdr.writeUInt8(6, 9);         // color type: RGBA
  ihdr.writeUInt8(0, 10);        // compression
  ihdr.writeUInt8(0, 11);        // filter
  ihdr.writeUInt8(0, 12);        // interlace

  const pngSignature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  const png = Buffer.concat([
    pngSignature,
    chunk('IHDR', ihdr),
    chunk('IDAT', compressed),
    chunk('IEND', Buffer.alloc(0)),
  ]);

  fs.writeFileSync(filepath, png);
}

// Gera todos os tamanhos
console.log('\n🎨 Gerando ícones do app...\n');
for (const size of SIZES) {
  if (useImageMagick) {
    generateWithImageMagick(size);
  } else {
    generateMinimalPng(size);
  }
}

console.log(`\n✅ ${SIZES.length} ícones gerados em: ${ICONS_DIR}\n`);
