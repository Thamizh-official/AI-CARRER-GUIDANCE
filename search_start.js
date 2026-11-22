const fs = require('fs');

const logPath = 'C:\\Users\\tamil\\.gemini\\antigravity\\brain\\63a13139-4674-4e73-903a-cc44bcbdbcff\\.system_generated\\logs\\transcript.jsonl';

if (!fs.existsSync(logPath)) {
  console.log("Log file not found");
  process.exit(1);
}

const content = fs.readFileSync(logPath, 'utf8');
const lines = content.split('\n');

console.log("Searching steps 0 to 400 in transcript:");
for (let i = 0; i < Math.min(lines.length, 400); i++) {
  const line = lines[i].trim();
  if (!line) continue;
  try {
    const obj = JSON.parse(line);
    if (obj.type === 'USER_INPUT') {
      const text = obj.content || '';
      if (text.includes(':') || text.toLowerCase().includes('format') || text.toLowerCase().includes('abstract') || text.length > 50) {
        console.log(`\n[Index ${i}]`);
        console.log(text);
      }
    }
  } catch(e) {}
}
