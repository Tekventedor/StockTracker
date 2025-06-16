const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Build v3 CSS
console.log('Building Tailwind v3 CSS...');
execSync('npx tailwindcss -i ./assets/css/v3.css -o ./static/css/v3.css --config tailwind.v3.config.js');

// Build v4 CSS
console.log('Building Tailwind v4 CSS...');
execSync('npx tailwindcss -i ./assets/css/v4.css -o ./static/css/v4.css --config tailwind.v4.config.js');

console.log('CSS bundles built successfully!'); 