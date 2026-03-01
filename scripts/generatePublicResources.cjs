const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const outputFile = path.join(__dirname, '../src/data/publicResources.js');
const MAX_DEPTH = 5;

const IGNORED_FILE_NAMES = new Set(['Thumbs.db', 'desktop.ini', '.DS_Store']);

function shouldIgnoreEntry(name) {
  if (!name) return true;
  if (name.startsWith('~$')) return true; // Office temp/lock files
  if (IGNORED_FILE_NAMES.has(name)) return true;
  return false;
}

function sortByName(a, b) {
  return a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' });
}

function encodeSegments(relativePath) {
  return relativePath
    .split('/')
    .map((segment) => encodeURIComponent(segment))
    .join('/');
}

function buildNode(fullPath, relativePath, depth) {
  const stats = fs.statSync(fullPath);
  const name = path.basename(fullPath);

  if (stats.isDirectory()) {
    if (depth > MAX_DEPTH) {
      return null;
    }

    const children = fs
      .readdirSync(fullPath, { withFileTypes: true })
      .filter((dirent) => !shouldIgnoreEntry(dirent.name))
      .sort(sortByName)
      .map((dirent) => {
        const childRelative = relativePath ? `${relativePath}/${dirent.name}` : dirent.name;
        return buildNode(path.join(fullPath, dirent.name), childRelative, depth + 1);
      })
      .filter(Boolean);

    return {
      name,
      type: 'directory',
      path: relativePath ? `/${encodeSegments(relativePath)}` : '/',
      children,
    };
  }

  if (stats.isFile()) {
    return {
      name,
      type: 'file',
      extension: path.extname(name).slice(1).toLowerCase(),
      size: stats.size,
      path: `/${encodeSegments(relativePath)}`,
    };
  }

  return null;
}

function collectResources() {
  const entries = fs
    .readdirSync(publicDir, { withFileTypes: true })
    .filter((entry) => !shouldIgnoreEntry(entry.name))
    .sort(sortByName);

  const resources = entries
    .map((entry) => buildNode(path.join(publicDir, entry.name), entry.name, 1))
    .filter(Boolean);

  return resources;
}

function formatOutput(data) {
  return `export const PUBLIC_RESOURCES = ${JSON.stringify(data, null, 2)};\n`;
}

try {
  const resources = collectResources();
  fs.writeFileSync(outputFile, formatOutput(resources), 'utf8');
  console.log(`Generated public resources manifest with ${resources.length} entries.`);
} catch (error) {
  console.error('Failed to build public resources manifest:', error);
  process.exit(1);
}
