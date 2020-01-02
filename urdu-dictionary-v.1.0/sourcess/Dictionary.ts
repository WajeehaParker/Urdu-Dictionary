

import {isUndefined} from "util";

export class Dictionary {
    mapSize = 1000;
    map : Array<Array<Array<string>>>;
    // found : boolean = false;
    spanCounter : number = 0;
    constructor () {
        this.map = [];
        for (let i = 0 ; i < this.mapSize ; i++) {
            this.map.push([])
        }
    }
    addToMap(wordMeaning:string[]) {
        let hashcode = this.evaluate(wordMeaning[0]);
        this.map[hashcode].push(wordMeaning)

    }
    evaluate(word:string) : number {
        let hashCode = 0;
        for (let i = 0 ; i < word.length ; i++) {
            hashCode +=  word.charCodeAt(i) * (i+1);
        }
        return hashCode % this.mapSize;
    }
    show(){
        if(!isUndefined(this.map))
        {
            for( let i in this.map)
            {
                console.log(this.map[i])
            }
        }
    }
    loadData(lines : string[]) {
        let wordMeanings: string[];

        for (let i in lines) {
            wordMeanings = null;
            wordMeanings = lines[i].toString().split('|');

           this.addToMap(wordMeanings)
        }

    }
    search(wordArray: string[]) {

        let word: string;
        let hashcode: number;
        let contentword = <HTMLDivElement> document.getElementById("content_word");
        let contentmeaning = <HTMLDivElement> document.getElementById("content_meaning");
        let suggestionBox = <HTMLDivElement> document.getElementById("suggestions");
        let suggestionArray = [];
        this.spanCounter = 0;

        while (suggestionBox.firstChild) {
            suggestionBox.removeChild(suggestionBox.firstChild);
        }
        let found = false;
        while (wordArray.length != 0) {
            word = wordArray.pop();
            hashcode = this.evaluate(word);
            if (this.map[hashcode].length != 0) {
                for (let i in this.map[hashcode]) {
                    let Alfaz = this.map[hashcode][i][0];
                    if (word === Alfaz) {

                        if(!found) {
                            document.getElementById("content_word").style.height = "100px";
                            document.getElementById("content_word").style.display = "block";
                            document.getElementById("content_meaning").style.display = "block";
                            let height = window.innerHeight;
                            document.getElementById("content_meaning").style.height = (height - 310) + "px";
                            contentword.innerText = Alfaz;
                            contentmeaning.innerText = this.map[hashcode][i][1];
                            found = true;


                        }
                        let flag = true;
                        for(let a = 0, leng = suggestionArray.length; a < leng ; a++ )
                        {
                            if(Alfaz == suggestionArray[a][0])
                            {
                                flag = false;
                                break;
                            }
                        }

                        if(flag){
                            let suggestionSpan = document.createElement("span");
                            suggestionSpan.className = "prediction";

                            suggestionSpan.id = "" + this.spanCounter++;
                            suggestionSpan.innerText = Alfaz;
                            suggestionBox.appendChild(suggestionSpan);
                            suggestionArray.push(this.map[hashcode][i])

                            suggestionSpan.onclick = function () {
                                let index = Number(suggestionSpan.id);
                                contentword.innerText = suggestionArray[index][0];
                                contentmeaning.innerText = suggestionArray[index][1];
                            };
                        }

                    }
                }
            }

        }
        if(this.spanCounter == 1)
            while (suggestionBox.firstChild) {
                suggestionBox.removeChild(suggestionBox.firstChild);
            }

        console.log(found);
        if(!found) {

            let height = window.innerHeight;
            document.getElementById("content_word").style.height = (height - 162) + "px";
            document.getElementById("content_word").style.display = "block";
            contentword.innerText = "!لفظ موجود نہیں";
            contentmeaning.innerText = null;
            document.getElementById("content_meaning").style.display = "none";

        }

        window.addEventListener("resize", resizeHandler);
        function resizeHandler() {

            let height = window.innerHeight;
            if (!found){
                document.getElementById("content_word").style.height = (height - 162) + "px";
                console.log("not found" + found);
            }
            if (found)
            {
                document.getElementById("content_word").style.height = "100px";
                document.getElementById("content_meaning").style.height = (height - 310) + "px";
                console.log("found" + found);
            }

        }






    }

    }



