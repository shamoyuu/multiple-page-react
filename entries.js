/**
 * view入口信息
 * {
 *     name: 'test', //入口名，不可省略
 *     entry: 'test.html', //入口地址，可省略，默认为【{name}.html】
 *     jsPath: '/views/test/test.js', //js地址，可省略，默认为【/views/{name}/{name}.js】
 *     templatePath: paths.appHtml, //模板地址，可省略，默认为【paths.appHtml】
 *     chunks: ['test'] //块，可省略，默认为【['{name}']】
 * }
 */
module.exports = [
    {
        name: 'index'
    },
    {
        name: 'test',
        entry: 'test.html',
        jsPath: '/views/test/test.js',
        chunks: ['test']
    }
];