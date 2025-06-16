const fs = require('fs');
const path = require('path');

// Get the version from environment variable or default to v3
const version = process.env.TAILWIND_VERSION || '3.3.5';

// Define paths
const v3Path = path.join(__dirname, '../assets/css/main.v3.min.css');
const v4Path = path.join(__dirname, '../assets/css/main.v4.min.css');
const outputPath = path.join(__dirname, '../assets/css/main.min.css');

// Copy the appropriate version
if (version.startsWith('4')) {
  if (fs.existsSync(v4Path)) {
    fs.copyFileSync(v4Path, outputPath);
    console.log('Using Tailwind v4 CSS');
  } else {
    console.error('Tailwind v4 CSS not found');
    process.exit(1);
  }
} else {
  if (fs.existsSync(v3Path)) {
    fs.copyFileSync(v3Path, outputPath);
    console.log('Using Tailwind v3 CSS');
  } else {
    console.error('Tailwind v3 CSS not found');
    process.exit(1);
  }
} 