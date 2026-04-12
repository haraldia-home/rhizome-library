const fs = require('fs');
const path = require('path');

// 1. Define folders to scan
const targetDir = path.join(__dirname, 'src');
const outputFile = path.join(__dirname, 'full_project_code.txt');

// 2. Helper to get all files recursively
function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file));
    }
  });

  return arrayOfFiles;
}

// 3. Execution
try {
  console.log('Scanning src folder...');
  const allFiles = getAllFiles(targetDir);
  
  let content = "=== PROJECT DUMP ===\n\n";

  allFiles.forEach(file => {
    // Only read code files (skip images, etc)
    if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.css')) {
      const relativePath = path.relative(__dirname, file);
      const fileContent = fs.readFileSync(file, 'utf8');
      
      content += `\n\n================================================\n`;
      content += `FILE PATH: ${relativePath}\n`;
      content += `================================================\n`;
      content += fileContent;
    }
  });

  fs.writeFileSync(outputFile, content);
  console.log(`✅ Success! All code saved to: ${outputFile}`);
  console.log(`👉 Open that file, copy everything, and paste it to the AI.`);

} catch (e) {
  console.error('Error:', e);
}