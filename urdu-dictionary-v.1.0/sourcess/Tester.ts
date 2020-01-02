import {Dictionary} from "./Dictionary";
import {Translator} from "./Translator";

export class Tester {

    testDictionary() {

        let testcses = [
            "سہغست" , "معرہن" , "پبصےص" , "جدٹھبصٹس" , "تلرصلرلو"
        ];
        let dict = new Dictionary();
        for (let i = 0 ; i < testcses.length ; i++) {
            console.log(testcses[i] + " -> " + dict.evaluate(testcses[i]));
        }0
    }
    testTrans() {
        let t = new Translator();
        // let testcases = ["masoom" ,"makhdoosh" , "makhsoos" , "mashkook" , "istejabiah" , "mukhtasar"];
        //let expectations = ["مخدوش" , "مخصوص" , "مشکوک" , "استعجابیہ" , "مختصر"];
        let testcases = ["salim" , "estimate" , "school" , "allergy" , "position" ,"mayal"];
        let expectations = ["سالم" , "اسٹیمیٹ" , "اسکول" , "الرجی" , "پوزیشن", "مائل"];
        for (let i = 0 ; i < testcases.length ; i++) {
            console.log("TESTING FOR  : " + testcases[i])
            var result = t.transliterate(testcases[i]);
            console.log("Total translations : " + result.length);
            var index = result.indexOf(expectations[i]);
            if (index > -1) {
                console.log("Found at : " + index + "[" + result[index] + "]");
            }
            else {
                console.log("Unable to generate word.");
            }
        }
    }
}