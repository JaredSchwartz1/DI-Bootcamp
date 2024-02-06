let names = ["john", "sarah", 23, "Rudolf", 34];
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    + 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
capsCheck =function(String){
    for (let a = 0; a <= 26; a++) {
        if (String.charAt(0) === alphabet[a]) {
            return true
            break;
        }
        else {
            continue;
        }
    }
}

for (let i = 0; i < names.length; i++) {
    if ((typeof (names[i])) === "string") {
        if(capsCheck(names[i])){
            names[i] = names[i].replace(names[i][0], names[i][0].toUpperCase())
            console.log(names[i])
        }
        else{
        console.log(names[i])
        }
            }
       
    }
