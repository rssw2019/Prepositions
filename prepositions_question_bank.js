let title="Preposition Quiz";

let instructions = `<p> Welcome to the Preposition Quiz. You will be asked 10 questions in this quiz. You can take this quiz multiple times.</p> <p><button onclick="quizGenerator()"><p>Begin the Quiz</p></button></p>`;

let question_title=`<p> Choose the correct preposition for the following sentence. </p>`




let questions =
    [
{
    //place
    "question":"I live ---Atlantic Street.",
    "answer":"on",
    "choices":["in","on","at","by","next to"]
},
{
    //place
    "question":"I live ---3456 Atlantic Street, Kathmandu.",
    "answer":"at",
    "choices":["in","on","at","by","next to"]
},
{
    //place
    "question":"I live ---Kathmandu.",
    "answer":"in",
    "choices":["in","on","at","by","next to"]
},
{
    //place
    "question":"Mt. Everest is the tallest mountain ---the world.",
    "answer":"in",
    "choices":["in","on","at","by","next to"]
},
{
    //movement
    "question":"Don't walk --- the street.",
    "answer":"on",
    "choices":["in","on","at","by","over"]
},
{
    //place
    "question":"I am going to see Tom ---the Royal Palace this afternoon.",
    "answer":"at",
    "choices":["in","on","at","by","over"]
},
{
    //general
    "question":"Tom wrote a letter to Sam --- blue pen",
    "answer":"with",
    "choices":["in","on","with","by","of"]
},
{
   //place
    "question":"Rita is sitting ---front of the gate.",
    "answer":"in",
    "choices":["in","on","at","by","over"]
},
{
    "question":"I think there is someone ---- main door.",
    "answer":"at",
    "choices":["in","on","at","by","next to"]
},
{
    //place
    "question":"There is a trash ---the floor.",
    "answer":"on",
    "choices":["in","on","at","by","over"]
},
{
    //time
    "question":"I will call you ---Sunday evening.",
    "answer":"on",
    "choices":["in","on","at","by","next to"]
},
{
    //time
    "question":"We will have a big party --- your 21st birthday",
    "answer":"on",
    "choices":["in","on","at","by","next to"]
},
{
    //general
    "question":"A grammar book has information --- grammar rules.",
    "answer":"about",
    "choices":["in","about","of","for","to"]
},
{
    //place
    "question":"You will find the formula --- page 34 of this book.",
    "answer":"on",
    "choices":["in","on","at","by","next to"]
},
{
    //time
    "question":"Tom called me -- 9:00 pm",
    "answer":"at",
    "choices":["in","on","at","by","next to"]
},
{
    //time
    "question":"We will go to Newroad --- May",
    "answer":"on",
    "choices":["in","on","at","by","next to"]
},
{
    //time
    "question":"Sam was born ---October 25th, 2001",
    "answer":"on",
    "choices":["in","on","at","by","next to"]
},
{
    //time
    "question":"Tom was born ---1998.",
    "answer":"in",
    "choices":["in","on","at","by","next to"]
},
{
    //time
    "question":"I went to bed --9:00 pm.",
    "answer":"at",
    "choices":["in","on","at","by","over"]
},
{
    //time
    "question":"The weather is cold --- the winter.",
    "answer":"in",
    "choices":["in","on","at","by","next to"]
},
{
    //time
    "question":"I will be there --- 15 minutes",
    "answer":"in",
    "choices":["in","on","at","by","next to"]
},
{
    //time
    "question":"The train will stop at the station --- 15 minutes.",
    "answer":"for",
    "choices":["in","on","at","by","for"]
},
{
    //general
    "question":"I cannot hear a thing. Please turn the volume of the sound ---",
    "answer":"up",
    "choices":["up","down","on","off","to"]
},
{
    //general
    "question":"The cell phone is very special --- me.",
    "answer":"for",
    "choices":["for","with","at","by","next to"]
},
{
    //place
    "question":"Tomatos and bananas are --- different boxes.",
    "answer":"in",
    "choices":["in","on","at","by","next to"]
},
{
    //general
    "question":"Do you have a bottle --- water?",
    "answer":"of",
    "choices":["of","on","at","by","next to"]
},
{
    //general
    "question":"She is slim ---dark skin and blue eyes",
    "answer":"with",
    "choices":["in","with","at","by","next to"]
},
{
    //general
    "question":"I have a sweatshirt --- a hoody",
    "answer":"with",
    "choices":["with","on","at","by","from"]
},
{
    //general
    "question":"Where are you ---?",
    "answer":"from",
    "choices":["from","above","under","along","next to"]
},
{
    //place
    "question":"Were you born --- a city?",
    "answer":"in",
    "choices":["in","on","at","by","next to"]
},
{
    //place
    "question":"What do you have --- your hand?",
    "answer":"in",
    "choices":["in","on","at","by","next to"]
},
{
    //general
    "question":"I am a freshman. What --- you?",
    "answer":"about",
    "choices":["about","on","at","by","next to"]
},
{
    //time
    "question":"I started school --- the age of seven.",
    "answer":"at",
    "choices":["in","on","at","by","next to"]
},
{
    //general
    "question":"There are different size of shoes --- all type of people.",
    "answer":"for",
    "choices":["in","for","at","by","over"]
},
{
    //time
    "question":"Since I work close to my home, I come home --- lunch time.",
    "answer":"at",
    "choices":["in","on","at","by","next to"]
},
{
    //place
    "question":"I live --- an apartment.",
    "answer":"in",
    "choices":["in","on","at","by","next to"]
},
{
    //movement/,direction
    "question":"Do you go --- work late everyday?",
    "answer":"to",
    "choices":["to","on","for","by","in"]
},
{
    //time
    "question":"Is the store open --- the evening?",
    "answer":"in",
    "choices":["in","on","at","by","next to"]
},
{
    //time
    "question":"I usually take a nap --- noon.",
    "answer":"at",
    "choices":["in","on","at","by","next to"]
},
{
    //Movement
    "question":"My sister-in-law came --- my place and we had MoMO yesterday",
    "answer":"to",
    "choices":["in","on","at","by","to"]
},
{
    //time
    "question":"I Clean my room --- the weekend.",
    "answer":"on",
    "choices":["in","on","at","by","for"]
},
{
    //time
    "question":"I went home --- Tihar.",
    "answer":"at",
    "choices":["in","on","at","by","next to"]
}

]
