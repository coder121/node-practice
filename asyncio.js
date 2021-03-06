/**
 LEARN YOU THE NODE.JS FOR MUCH WIN!
─────────────────────────────────────
 MY FIRST ASYNC I/O!
 Exercise 4 of 13

Write a program that uses a single asynchronous filesystem operation to read a f
ile and print the number of newlines it contains to the console (stdout), simila
r to running cat file | wc -l.

The full path to the file to read will be provided as the first command-line arg
ument.
*/

var fs=require('fs')
var file=process.argv[2]
fs.readFile(file,function countNoLines(err,data){
	 if (err) {
    return console.log(err);
  }
  var noOFline=data.toString().split('\n')
  console.log(noOFline.length-1)

})
/**
Official Solution
________________________

var fs = require('fs')
var file = process.argv[2]

fs.readFile(file, function (err, contents) {
  // fs.readFile(file, 'utf8', callback) can also be used
  var lines = contents.toString().split('\n').length - 1
  console.log(lines)
})
*/

