const fs = require('fs');
const path = require('path');

function getTree(dirPath, excludeDir) {
  let result = '';

  function walk(dir, depth) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const fullPath = path.join(dir, file);
      const stats = fs.statSync(fullPath);

      if (stats.isDirectory()) {
        if (file !== excludeDir) {
          result += `${'  '.repeat(depth)}${file}\n`;
          walk(fullPath, depth + 1);
        }
      } else {
        result += `${'  '.repeat(depth)}${file}\n`;
      }
    });
  }

  walk(dirPath, 0);
  return result;
}

console.log(getTree('.', 'node_modules'));
