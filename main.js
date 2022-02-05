//This project generates random jokes and prints them to the screen.
//store knock-knock jokes.FORMAT: [[setup,punchline]]
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

//store corny jokes. FORMAT: [[setup,punchline]]
const cornyjokes = [["Why did the strawberry cry?","His parents were in a jam!"],
["What do you call a pig that does karate?","A pork chop!"],
["Why was Cinderella so bad at soccer?","She kept running away from the ball!"],
["How do you keep a bull from charging?","Take away his credit card!"],
["What did the buffalo say when he dropped his son off at school?","Bison!"],
["Why can’t you hear a pterodactyl going to the bathroom?","Because the “P” is silent!"]];

//built to allow for future joke types to be implemented 
function generateRandIint(joke) {
    return Math.floor(Math.random() * joke.length);
}

//generates random knock-knock joke
function knockKnock(){
    let joke_id = generateRandIint(knockjokes);
    console.log("KNOCK! KNOCK!");
    console.log("> who's there?"); //represents listener 
    console.log(knockjokes[joke_id][0] + "!"); //setup
    console.log("> " + knockjokes[joke_id][0] + " who?"); //represents listener
    console.log(knockjokes[joke_id][1]); //punchline
}

//generate random corny joke
function corny() {
    let joke_id = generateRandIint(cornyjokes)
    console.log(cornyjokes[joke_id][0]);
    console.log(cornyjokes[joke_id][1]);
}

function generateJoke(){
    const joke = Math.floor(Math.random() * 2) + 1;
    switch(joke){
        case 1:
            knockKnock();
            break;
        case 2:
            corny();
            break;
    }
}
generateJoke();