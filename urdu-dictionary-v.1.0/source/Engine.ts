import {Dictionary} from "./Dictionary";
import {FileReader} from "./FileReader";
export class Engine {
    dictionary : Dictionary

    constructor () {

         let read = new FileReader()            //reading data line by line from Database.txt file : return array of lines
         this.dictionary = new Dictionary()
         this.dictionary.loadData(read.lines)   // loading data in memory from array of lines
    }
}