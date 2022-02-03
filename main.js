
//store knock-knock jokes broken down into setup,punch line  
const knockjokes = [["Boo","Boo hoo? Why are you crying?"],
["Atch", "Bless you!"],
["A little old lady","I didn't know you could yodel!"],
["Cows go","No silly, cows go MOO!"],
["Harry","Harry up and answer the door!"],
["Cash","No thanks, I'm allergic to nuts."],
["Lettuce","Lettuce in, it's cold out here!"],
["Mikey","Mikey doesn't fit in the the key hole!"],
["Stopwatch","Stopwatch you’re doing and let me in"],
["I am","You don’t know who you are?"],
["Ya","No, I prefer Google."],
["Tennis","Tennis five plus five."],
["Owls say","Yes, they do!"],
["Kanga","No, it's kangaroo!"],
["Doris","Door is locked, that's why I'm knocking!"],
["Isabel","Isabel working?  I had to knock!"],
["Spell", "Okay, w-h-o."]];


//built to allow for future joke types to be implemented 
function generateRandIint(joke) {
    return Math.floor(Math.random() * joke.length);
}

function knockKnock(){
    let joke_id = generateRandIint(knockjokes);
    console.log("KNOCK! KNOCK!");
    console.log("> who's there?"); //represents listener 
    console.log(knockjokes[joke_id][0] + "!"); //setup
    console.log("> " + knockjokes[joke_id][0] + " who?"); //represents listener
    console.log(knockjokes[joke_id][1]); //punchline
}



knockKnock();
