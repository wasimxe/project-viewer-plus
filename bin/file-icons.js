'use strict';

const fs = require('fs');

const icons = [];

const isArray = arr => {
  if (Array.isArray(arr)) {
    return arr.forEach(isArray);
  }

  if (
    arr &&
    typeof arr.endsWith === 'function' &&
    arr.endsWith('-icon') &&
    !icons.includes(arr.replace('-icon', ''))
  ) {
    icons.push(arr.replace('-icon', ''));
  }
};

const getIcons = () => {
  return JSON.stringify(icons, null, 2).replace(/"/g, '\'');
};

// v2.1.25
isArray(require('./../node_modules/file-icons/lib/icons/.icondb'));

if (!icons.length) {
  throw 'NO ICONS';
}

fs.writeFile(
  './lib/constants/icons.js',
  `/* eslint-disable max-lines */\nexport default ${getIcons()};\n`,
  err => {
    if (err) {
      throw err;
    }
  }
);
