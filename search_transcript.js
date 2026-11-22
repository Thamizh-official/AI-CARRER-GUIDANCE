const fs = require('fs');
const path = require('path');

const logPath = 'C:\\Users\\tamil\\.gemini\\antigravity\\brain\\63a13139-4674-4e73-903a-cc44bcbdbcff\\.system_generated\\logs\\transcript.jsonl';

if (!fs.existsSync(logPath)) {
  console.log("Log file not found at " + logPath);
  process.exit(1);
}

const content = fs.readFileSync(logPath, 'utf8');
const lines = content.split('\n');

console.log("Searching transcript for format/abstract...");
let foundCount = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  if (!line) continue;
  try {
    const obj = JSON.parse(line);
    if (obj.type === 'USER_INPUT') {
      const text = obj.content || '';
      // Look for format, abstract, doc, template, or long texts containing colon/headers
      if (text.includes(':') && (text.toLowerCase().includes('format') || text.toLowerCase().includes('abstract') || text.toLowerCase().includes('title') || text.length > 100)) {
        console.log(`\n--- Match at index ${i} ---`);
        console.log(text);
        foundCount++;
      }
    }
  } catch(e) {
    // Ignore JSON errors
  }
}

if (foundCount === 0) {
  console.log("No specific format matches found in transcript. Printing last 10 user inputs:");
  let count = 0;
  for (let i = lines.length - 1; i >= 0; i--) {
    const line = lines[i].trim();
    if (!line) continue;
    try {
      const obj = JSON.parse(line);
      if (obj.type === 'USER_INPUT') {
        console.log(`\n[Input ${count}]`);
        console.log(obj.content);
        count++;
        if (count >= 10) break;
      }
    } catch(e) {}
  }
}
