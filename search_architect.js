const fs = require('fs');
const path = require('path');

function searchDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        searchDir(fullPath);
      }
    } else if (file.endsWith('.js') || file.endsWith('.html') || file.endsWith('.css') || file.endsWith('.json')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      if (content.toLowerCase().includes('architect')) {
        console.log(`Found 'architect' in: ${fullPath}`);
        // print lines containing architect
        const lines = content.split('\n');
        lines.forEach((line, idx) => {
          if (line.toLowerCase().includes('architect')) {
            console.log(`  Line ${idx + 1}: ${line.trim()}`);
          }
        });
      }
    }
  }
}

searchDir(__dirname);
