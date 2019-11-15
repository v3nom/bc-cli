#!/usr/bin/env node
const path = require('path');
const fs = require('fs');

var command = process.argv[2];
var param = process.argv[3];

if (command == 'version') {
    const packagePath = path.resolve(__dirname, './package.json');
    const packageContent = fs.readFileSync(packagePath, { encoding: 'utf8' });
    const package = JSON.parse(packageContent);
    console.log(package.version);
}