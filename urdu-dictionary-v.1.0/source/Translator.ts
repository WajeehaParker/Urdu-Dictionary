export class Translator {
    units = {
        "a" : ["اع", "عا" , "ع" , "آ" , "اء" ,"","ا"],
        "b" : ["ب"],
        "c" : ["س", "چ" ,"ک"],
        "d" : ["ڈ","د"],
        "e" : ["ع",  "ۓ", "ئ", "","ی","ا" ],
        "f" : ["ف"],
        "g" : ["غ","گ","ج"],
        "h" : ["ہ","ح","ھ"],
        "i" : ["ا", "ع" , "ی" , "", "ۓ", "ئ"],
        "j" : ["ج"],
        "k" : ["ک", "ق"],
        "l" : ["ل"],
        "m" : ["م"],
        "n" : ["ن" , "ں"],
        "o" : ["او", "ع" , "و", "ؤ", ""],
        "p" : ["پ"],
        "q" : ["ک", "ق"],
        "r" : ["ڑ","ر"],
        "s" : ["س", "ث","اس","ص"],
        "t" : ["ۃ", "ت","ط","ٹ"],// new
        "u" : ["ا", "ع" , "و" ,""],
        "v" : ["و"],
        "w" : ["و"],
        "x" : ["ز"],
        "y" : ["ے","ئ", "ی"],
        "z" : ["ذ" ,"ض","ظ","ژ","ز"],

        " " : [" "],
        "qq" : ["قق"],
        "aa" : [ "عا" , "ع" , "آ" , "اء" ,"","ا"],
        "ee" : ["ع",  "ۓ", "ئ", "","ی","ا" ],
        "zh" : ["ژ"],
        "kh" : ["خ"],
        "gh" : ["غ"],
        "ch" : ["چ"],
        "sh" : ["ش"],

    };
    transliterate(word : string) : Array<string> {
        let trans = [];
        let tempArray = [];
        let digraph;
        let itteration;
        for (let i = 0; i < word.length; i++) {

            let list = this.units[word[i]];
            let transLen = trans.length;
            // if(word[i] == word[i+1])
            // {
            //     continue
            // }
            if(i < word.length-1) {
                digraph = word.slice(i, i + 2);
                if (digraph in this.units) {
                    itteration = i;
                    let arr = this.units[digraph];
                    if(i == 0)
                    {
                        let arrlen = arr.length;
                        for(let k = 0 ; k < arrlen ; k++)
                        {
                            trans.push(arr.pop());
                        }
                    }else
                    {
                        for (let i = 0; i < transLen; i++)
                        {
                            let unit = trans[i];
                            for (let j = 0; j < arr.length; j++)
                            {
                                let UnitListChar = arr[j];
                                let concat = unit + UnitListChar;
                                trans.push(concat);

                            }
                        }
                    }
                    i++;
                    continue;
                }

            }
            if(i == 0)
            {
                for(let i = 0; i < list.length ; i++) {
                    trans.push(list[i]);

                }

            }else

            {


                for(let j = 0 ; j < transLen ; j++ )
                {
                    let listLen = list.length;
                    let hold = trans.splice(j*listLen,1);
                    for( let n = 0 ; n < listLen ; n++) {
                        let char = list.shift();
                        list.push(char);
                        trans.splice(j,0, hold + char.toString())
                    }
                }
            }

        }

        return trans;
    }
}
