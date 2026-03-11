import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(__dirname, '..', 'public', 'images');

// SVGs pequenos (ícones, logos) — manter como SVG
const SKIP_SMALL_THRESHOLD = 50 * 1024; // 50KB

// Qualidade WebP e largura máxima por tipo
const THUMBNAIL_MAX_WIDTH = 800;  // imagens de card/thumbnail
const DETAIL_MAX_WIDTH = 1280;    // imagens de página de detalhe

let totalOriginal = 0;
let totalConverted = 0;
let count = 0;

async function getFileSize(filePath) {
  const s = await stat(filePath);
  return s.size;
}

async function convertToWebP(inputPath, maxWidth) {
  const outputPath = inputPath.replace(/\.(svg|png)$/i, '.webp');
  const originalSize = await getFileSize(inputPath);

  // Pular SVGs pequenos (ícones, logos)
  if (inputPath.endsWith('.svg') && originalSize < SKIP_SMALL_THRESHOLD) {
    console.log(`  ⏭  Pulando (muito pequeno): ${path.basename(inputPath)}`);
    return;
  }

  try {
    const instance = sharp(inputPath, {
      density: 150, // DPI para rasterização de SVG
    });

    const metadata = await instance.metadata();
    const width = metadata.width || maxWidth;
    const targetWidth = Math.min(width, maxWidth);

    await instance
      .resize(targetWidth, null, { withoutEnlargement: true })
      .webp({ quality: 85 })
      .toFile(outputPath);

    const convertedSize = await getFileSize(outputPath);
    const saving = ((1 - convertedSize / originalSize) * 100).toFixed(1);

    totalOriginal += originalSize;
    totalConverted += convertedSize;
    count++;

    const origMB = (originalSize / 1024 / 1024).toFixed(2);
    const convKB = (convertedSize / 1024).toFixed(0);
    console.log(`  ✅ ${path.basename(inputPath)} → ${path.basename(outputPath)} (${origMB}MB → ${convKB}KB, -${saving}%)`);
  } catch (err) {
    console.error(`  ❌ Erro ao converter ${path.basename(inputPath)}: ${err.message}`);
  }
}

async function processDirectory(dir, maxWidth) {
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      // Subdiretórios são imagens de detalhe
      console.log(`\n📁 ${entry.name}/`);
      await processDirectory(fullPath, DETAIL_MAX_WIDTH);
    } else if (/\.(svg|png)$/i.test(entry.name) && !entry.name.endsWith('.webp')) {
      await convertToWebP(fullPath, maxWidth);
    }
  }
}

async function main() {
  console.log('🚀 Iniciando otimização de imagens...\n');

  // Thumbnail SVGs na raiz de /portifolio/
  console.log('📁 portifolio/ (thumbnails)');
  const portifolioDir = path.join(PUBLIC_DIR, 'portifolio');
  const entries = await readdir(portifolioDir, { withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isDirectory() && /\.(svg|png)$/i.test(entry.name)) {
      await convertToWebP(path.join(portifolioDir, entry.name), THUMBNAIL_MAX_WIDTH);
    }
  }

  // Imagens de detalhe nos subdiretórios
  for (const entry of entries) {
    if (entry.isDirectory()) {
      console.log(`\n📁 portifolio/${entry.name}/`);
      await processDirectory(path.join(portifolioDir, entry.name), DETAIL_MAX_WIDTH);
    }
  }

  // Imagem da página Sobre
  console.log('\n📁 images/ (raiz)');
  const sobreImg = path.join(PUBLIC_DIR, 'foto-de-sobre-1.svg');
  await convertToWebP(sobreImg, 600);

  // Resumo
  const savedMB = ((totalOriginal - totalConverted) / 1024 / 1024).toFixed(1);
  const savedPct = ((1 - totalConverted / totalOriginal) * 100).toFixed(1);
  console.log(`\n✨ Concluído! ${count} imagens convertidas.`);
  console.log(`   Tamanho original: ${(totalOriginal / 1024 / 1024).toFixed(1)} MB`);
  console.log(`   Tamanho final:    ${(totalConverted / 1024 / 1024).toFixed(1)} MB`);
  console.log(`   Economia total:   ${savedMB} MB (-${savedPct}%)`);
}

main().catch(console.error);
