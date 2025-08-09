import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const inPath = resolve('public/founder-quote.jpeg');
const outWebp = resolve('public/founder-quote.webp');
const outAvif = resolve('public/founder-quote.avif');

async function convertWithSharp(input) {
  const sharp = (await import('sharp')).default;
  const image = sharp(input).rotate();
  const [webpBuf, avifBuf] = await Promise.all([
    image.clone().webp({ quality: 78, effort: 5 }).toBuffer(),
    image.clone().avif({ quality: 65, effort: 4 }).toBuffer(),
  ]);
  await Promise.all([writeFile(outWebp, webpBuf), writeFile(outAvif, avifBuf)]);
}

async function convertWithSquoosh(input) {
  const { ImagePool } = await import('@squoosh/lib');
  const imagePool = new ImagePool();
  const image = imagePool.ingestImage(input);
  // Let the encoder decide rotation from EXIF
  await image.encode({
    webp: { quality: 78 },
    avif: { quality: 65 },
  });
  const webp = await image.encodedWith.webp;
  const avif = await image.encodedWith.avif;
  await Promise.all([
    writeFile(outWebp, webp.binary),
    writeFile(outAvif, avif.binary),
  ]);
  await imagePool.close();
}

async function main() {
  const input = await readFile(inPath);
  try {
    await convertWithSharp(input);
    console.log('Converted with sharp:', outWebp, outAvif);
  } catch (err) {
    console.warn('sharp unavailable, falling back to @squoosh/lib:', err?.message || err);
    await convertWithSquoosh(input);
    console.log('Converted with @squoosh/lib:', outWebp, outAvif);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});