const fs = require('node:fs');
const path = require('node:path');

function check(file) {
  const content = fs.readFileSync(file, 'utf8');
  try {
    new Function(content);
  } catch (e) {
    console.error(`Syntax error in ${file}:`, e.message);
    process.exit(1);
  }
}

const base = path.join(process.cwd(), 'src');
const stack = [base];
while (stack.length) {
  const current = stack.pop();
  for (const item of fs.readdirSync(current)) {
    const full = path.join(current, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) stack.push(full);
    else if (item.endsWith('.js')) check(full);
  }
}
console.log('All JS files parsed successfully.');
