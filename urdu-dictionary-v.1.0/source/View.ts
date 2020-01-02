
import {Translator} from "./Translator";
import {Engine} from "./Engine";

let engine = new Engine();
export class View {
    infoIcon : HTMLButtonElement;
    searchBox : HTMLInputElement;
    value : string;
    transliterate: string[];

    constructor () {
            this.searchBox =  <HTMLInputElement> document.getElementById("search_box");
            this.searchBox.addEventListener("keypress" , (E) => {

            if(E.keyCode == 13 && this.searchBox.value.length > 2){
                let translator =  new Translator();
                this.value = this.searchBox.value.toLowerCase();

                console.log(this.value);
                this.transliterate = translator.transliterate(this.value);
                console.log(this.transliterate);
                engine.dictionary.search(this.transliterate)

            }




        });
            this.infoIcon = <HTMLButtonElement>document.getElementById("info-icon");
            this.infoIcon.addEventListener("click", ()=>{
                alert("Version : 1.0\n\nCredit :\n     -Taimoor Qureshi\n     -Wajeeha Parker\n     -Ayesha Ali\n     -Junaid Siddique")

            })


            console.log("".charCodeAt(0));
    }
}