var fs = require('fs')
var filePath = process.argv[2]  //取得自己的文件路径
//添加第二个encode或者直接在buffer结果里面tostring()同样可以得到字符串
var bufferFile = fs.readFileSync(filePath)
    //buffer转换成字符串
    bufferFile = bufferFile.toString()
    //打印出到底这个测试文件有多少行
    console.log(bufferFile.split('\n').length-1)






//  ## 第一个 I/O！ (第 3 个习题，共 13 个)

//   编写一个程序，执行一个同步的文件系统操作，读取一个文件，并且在终端（标准输
//   出 stdout）打印出这个文件中的内容的行(\n)数。类似于执行 cat file | wc -l
//   这个命令。

//   所要读取的文件的完整路径会在命令行第一个参数提供。

//  ─────────────────────────────────────────────────────────────────────────────

//  ## 提示

//   要执行一个对文件系统的操作，你将会用到 fs 这个 Node
//   核心模块。要加载这类核心模块，或者其他的"全局"模块，可以用下面的方式引入：

//      var fs = require('fs')

//   现在你可以通过 fs 这个变量来访问整个 fs 模块了。

//   在 fs 中，所有的同步（或者阻塞）的操作文件系统的方法名都会以 'Sync'
//   结尾。要读取一个文件，你将需要使用  fs.readFileSync('/path/to/file')
//   方法。这个方法会返回一个包含文件完整内容的 Buffer 对象。

//   fs 模块的文档，可以使用浏览器打开如下路径来访问：
//   file:///Users/apple/.nvm/versions/node/v5.12.0/lib/node_modules/learnyouno
//   de/node_apidoc/fs.html

//   Buffer 对象是 Node 用来高效处理数据的方式，无论该数据是 ascii
//   还是二进制文件，或者其他的格式。Buffer 可以很容易地通过调用 toString()
//   方法转换为字符串。如：var str = buf.toString()。

//   Buffer 的文档可以通过浏览器访问如下路径来查看：
//   file:///Users/apple/.nvm/versions/node/v5.12.0/lib/node_modules/learnyouno
//   de/node_apidoc/buffer.html

//   如果你在想如何更简单地去计算行数，请回想一下，一个 JavaScript
//   字符串，可以使用 .split() 分割成子字符串数组，而且，'\n'
//   可以作为分隔符。注意，供测试的文件末尾的最后一行并没有进行换行，即没有
//   '\n' 的存在，因此，使用这个方法的话，所得的数组的长度会比行数多一个。