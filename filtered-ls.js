/**
 FILTERED LS
 Exercise 5 of 13

Create a program that prints a list of files in a given directory, filtered by
he extension of the files. You will be provided a directory name as the first a
gument to your program (e.g. '/path/to/dir/') and a file extension to filter by
as the second argument.

For example, if you get 'txt' as the second argument then you will need to filt
r the list to only files that end with .txt. Note that the second argument will
not come prefixed with a '.'.

The list of files should be printed to the console, one file per line. You must
use asynchronous I/O.
*/
var fs=require('fs')

var path=process.argv[2]//path of directory
var fileExt=process.argv[3]//filter i.e. txt json etc


fs.readdir(path,function test(err,data){
	if(err){console.log(err)}
	var files=[]
	for (var i=0;i<data.length;i++){
		files.push(data[i].split("."))//spliting files as to search it based on fileExt
	}
	printFiles(files,fileExt)//calling the method 
})
/**
This funtion returns the files that match the file extension
@param 1  array containing files
@param 2  file extension
*/
function printFiles(files,fileExt){
for (var i=0;i<files.length;i++){
	if(fileExt==files[i][1])
		console.log(files[i][0]+"."+files[i][1])

}

}

