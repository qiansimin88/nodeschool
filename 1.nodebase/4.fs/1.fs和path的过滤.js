var fs = require('fs')
var path = require('path')

//目录路径
var directory = process.argv[2]
//后缀名
var extName = process.argv[3]

fs.readdir(directory,(err, fileList) => {
    //fileList 是该目录下的所有文件 数组形式
    fileList.forEach((o, i) => {
        //得到去掉。后的文件名
        var suffixName = path.extname(o).slice(path.extname(o).indexOf('.') + 1)
        if(suffixName === extName) {
            console.log(o)
        }
    })
})








// ## LS 过滤器 (第 5 个习题，共 13 个)

//   编写一个程序来打印出指定目录下的文件列表，并且以特定的文件名扩展名来过滤这
//   个列表。这次会有两个参数提供给你，第一个是所给的文件目录路径（如：path/to/
//   dir），第二个参数则是需要过滤出来的文件的扩展名。

//   举个例子：如果第二个参数是 txt，那么你需要过滤出那些扩展名为 .txt的文件。

//   注意，第二个参数将不会带有开头的 .。

//   你需要在终端中打印出这个被过滤出来的列表，每一行一个文件。另外，你必须使用
//   异步的 I/O 操作。

//  ─────────────────────────────────────────────────────────────────────────────

//  ## 提示

//   fs.readdir()
//   方法接收两个参数：第一个是一个路径，第二个则是回调函数，这个回调函数会有如
//   下特征：

//      function callback (err, list) { /* ... */ }

//   这里的 list 是一个数组，它所包含的元素是每个文件的文件名（字符串形式）。

//   fs 的文档你可以用浏览器访问
//   file:///Users/apple/.nvm/versions/node/v5.12.0/lib/node_modules/learnyouno
//   de/node_apidoc/fs.html 来阅读。

//   你可能会发现 node 自带的 path 模块也很有用，特别是它那个 extname 方法。