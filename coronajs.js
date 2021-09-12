//initialization
console.time()
var counter=1;
var pos_count=0;
var neg_count=0;
function randGen() {
    let funRandom=Math.floor(Math.random(1,17)*16);
    if(funRandom!=0)
        return funRandom;
    else
        randGen();
}
console.timeEnd()

//core
console.time()
if(document.readyState=="loading"){
    setInterval(() => {
        var randNum=randGen();

        var tempImg=document.getElementById(randNum);
        console.log(tempImg);
        tempImg.src='redcorona.jpg';

        setTimeout(() => {
            let input=window.prompt("Enter the number corona is in");
            if(input==randNum){
                pos_count+=1;
                document.getElementById("score1").innerHTML="Detected Score: +"+pos_count;
            }
            else if(input!=randNum){
                neg_count-=1;
                document.getElementById("score2").innerHTML="Missed Score: "+neg_count;
            }
            tempImg.src='bluecorona.jpg';
            counter+=1;
        }, 2000);
        document.getElementById("pid1").innerHTML="Attempts :"+counter;
    }, 5000); 
}
console.timeEnd()
