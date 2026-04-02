const fs = require('fs');
const path = require('path');

// Read version from the root version file
let version = '0.0.0';
try {
  const versionFile = path.join(__dirname, '..', 'version');
  version = fs.readFileSync(versionFile, 'utf8').trim();
} catch {
  // Fallback: try reading from package.json
  try {
    const pkg = require('./package.json');
    version = pkg.version || '0.0.0';
  } catch {
    // ignore
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_APP_VERSION: version,
  },
};

module.exports = nextConfig;
