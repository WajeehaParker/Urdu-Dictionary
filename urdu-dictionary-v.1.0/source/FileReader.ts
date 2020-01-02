import {Dictionary} from "./Dictionary";

var content;
var fs = require("fs")
export class FileReader{
  lines = []
   constructor() {
       content = fs.readFileSync('./source/Database.txt', 'utf8')
       if(content.length != 0) {
           let text = content.toString().split('\n');
           for (let i in text) {
               this.lines.push(text[i])
           }
       }
   }
}
