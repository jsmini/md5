var pkg = require('../package.json');

// 兼容 md5 和 @jsmini/md5，@jsmini/md5 替换为 jsmini_md5
var name = pkg.name.replace('@', '').replace(/\//g, '_');
var version = pkg.version;

var banner = 
`/*!
 * md5 ${version} (https://github.com/jsmini/md5)
 * API https://github.com/jsmini/md5/blob/master/doc/api.md
 * Copyright 2017-${(new Date).getFullYear()} jsmini. All Rights Reserved
 * Licensed under MIT (https://github.com/jsmini/md5/blob/master/LICENSE)
 */
`;

exports.name = name;
exports.banner = banner;
