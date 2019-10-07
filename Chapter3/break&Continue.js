// Break & Continue
const scores = [50, 25, 0, 30, 100, 20, 10];

for(let i=0; i<scores.length; i++)
{
    if(scores[i] === 0)
    {
        console.log("You can score more runs.");
        continue;
    }

    console.log("Your score : ", scores[i]);

    if(scores[i] === 100)
    {
        console.log("Congrats, you got the top scores.");
        break;
    }
}