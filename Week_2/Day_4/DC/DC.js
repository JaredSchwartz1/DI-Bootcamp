//ex_DC

// Prompt the user for several words (separated by commas).
// Put the words into an array.
// Console.log the words one per line, in a rectangular frame as seen below.
// Check out the Hints and Requirements below.
// For example, if the user gives you:
// Hello, World, in, a, frame
// you will transform it to : ["Hello", "World", "in", "a", "frame"]
// that will get displayed as:


function wordFrame() {

    let wordSet = prompt('Provide a sentence of words separated by commas and then a space')
    let wordSetArray = [];
    let candidate;

    while(wordSet==null||""){
    prompt('Provide a sentence of words separated by commas and then a space')
    }

    function enterIntoArray() {
        let word = "";
        for (i = 0; i < wordSet.length; i++) {
            if (wordSet[i] !== "," && wordSet[i] !== " ") {
                word = word + wordSet[i];
                if (wordSet[(i + 1)] == undefined) {
                    wordSetArray.push(word)
                    word = ""
                }
            }
            else if (wordSet[i] == ",") {
                wordSetArray.push(word)
                word = ""
            }
        }
    }
    function findBiggestWord(Arr) {
        candidate = Arr[0];
        for (i = (Arr.indexOf(candidate)); i < Arr.length-1; i++) {
            if (candidate.length >= Arr[i].length) {
                continue;
            }
            else {
                candidate = Arr[i]

            }
           console.log(candidate.length)
            return candidate.length

        }


    }
    function frameCreate(Num, Arr) {
        function topAndBottom() {
            let row1 = []
            for (let i = 1; i <= (Num + 4); i++) {
                row1.unshift('*')
               
            }
            console.log(row1.join(''))

        }
        topAndBottom()
        for (let i = 0; i < Arr.length; i++) {
            let text;
        function spaceGenerator() {
            let spaces = [];
            for (let j = Arr[i].length; j < Num; j++) {
                spaces.push(" ")
            }
            return text=spaces.join('')
        }
            console.log(`* ${Arr[i]}${spaceGenerator()} *`)
        }
        topAndBottom()
    }
    enterIntoArray()
    findBiggestWord(wordSetArray)
    frameCreate(candidate.length, wordSetArray)
}


wordFrame()