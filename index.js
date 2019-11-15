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

if (command == 'init') {
    const fse = require('fs-extra');
    const templatePath = path.resolve(__dirname, './node_modules/bcaddin/');
    var workingDirectory = process.cwd();

    fse.copySync(path.resolve(templatePath, "web"), path.resolve(workingDirectory, "web"));
    fse.copySync(path.resolve(templatePath, "app"), path.resolve(workingDirectory, "app"));
    fse.copySync(path.resolve(templatePath, "build"), path.resolve(workingDirectory, "build"));
    fse.copySync(path.resolve(templatePath, "init.ps1"), path.resolve(workingDirectory, "init.ps1"));
    fse.copySync(path.resolve(templatePath, "main.code-workspace"), path.resolve(workingDirectory, "main.code-workspace"));
    fse.copySync(path.resolve(templatePath, "README.md"), path.resolve(workingDirectory, "README.md"));
    fse.copySync(path.resolve(templatePath, ".gitignore"), path.resolve(workingDirectory, ".gitignore"));

    // Generate app.json
    const uuidv4 = require('uuid/v4');
    const app = {
        "id": uuidv4(),
        "name": "ENTER_NAME",
        "publisher": "ENTER_PUBLISHER",
        "version": "1.0.0.0",
    };

    fs.writeFileSync(path.resolve(workingDirectory, "app", "app.json"), JSON.stringify(app, null, 4));
}
