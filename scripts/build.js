const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

try {
    // Ensure directories exist
    const cssDir = path.join(__dirname, '../static/css');
    if (!fs.existsSync(cssDir)) {
        fs.mkdirSync(cssDir, { recursive: true });
    }

    // Build v3 CSS
    console.log('Building Tailwind v3 CSS...');
    execSync('npx tailwindcss -i ./assets/css/v3.css -o ./static/css/v3.css --config tailwind.v3.config.js', { stdio: 'inherit' });

    // Build v4 CSS
    console.log('Building Tailwind v4 CSS...');
    execSync('npx tailwindcss -i ./assets/css/v4.css -o ./static/css/v4.css --config tailwind.v4.config.js', { stdio: 'inherit' });

    console.log('CSS bundles built successfully!');
} catch (error) {
    console.error('Error building CSS bundles:', error);
    process.exit(1);
} 