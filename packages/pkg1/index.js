const fs = require('fs');
const path = require('path');

const pkgContents = fs.readFileSync(path.join(__dirname, 'package.json'), 'utf8');
const pkg = JSON.parse(pkgContents);

console.log(pkg.name, pkg.version);
