class video{
 constructor(title,uploader,time){
    this.title=title
    this.uploader=uploader
    this.time=time
 }  
watch(){
    if(this.time/60>=60){
        console.log(`I watched all ${Math.floor(this.time/3600)} hours, ${Math.floor(this.time%3600/60)} minutes, ${this.time%60} seconds of ${this.uploader}'s ${this.title}.`);
    }
    else if(Math.floor(this.time/60)==0){
        console.log(`I watched all ${this.time%60} seconds of ${this.uploader}'s ${this.title}.`);
    }
    else{
 console.log(`I watched all ${Math.floor(this.time/60)} minutes, ${this.time%60} seconds of ${this.uploader}'s ${this.title}.`);
    }
 }
}
let videoArray=[]

let ratatouilleRamsay= new video('Gordon Ramsay Ratatouille','Sam Bradford',24)
ratatouilleRamsay.watch()

let ytpGangnum=new video('[PSYTP] OPPA GODDAMN STYLE','CS188',161)
ytpGangnum.watch()

videoArray.push(ratatouilleRamsay)
videoArray.push(ytpGangnum)

let nativeAmericans=['They Were Just in the Way | Indian Removal','Knowing_Better',8799]
videoArray.push(nativeAmericans)
let badPiggies=['Bad Piggies The Road to El Porkado 100% Speedrun [WR] 1:57:18','P00RGUY',7112]
videoArray.push(badPiggies)
let Tararre=['Tarrare, the Hungriest Man in History','Sam_O\'Nella_Academy',469]
videoArray.push(Tararre)
let flexTape=['Waterproofing My Life with FLEX TAPE - JonTron','JonTronShow',629]
videoArray(flexTape)
let 