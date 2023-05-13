var color =["red","blue","green","yellow"];
 const userClickedPattern=[]
 var level=0;
 var start=false;
var newColor=[]
$(".btn").click(function(){
    var userChosenColor=$(this).attr("id");
    userClickedPattern.push(userChosenColor)
    console.log(userClickedPattern);
    playSound(userChosenColor);
    animatePress(userChosenColor)
    checkAnswer(userChosenColor);
})
const nextSequence=()=>
{
    level++;
    $("#level-title").text("Level "+level);
    var randomNumber=Math.floor((Math.random()*3)+1);
    console.log(randomNumber);
    const randomChosenColor=color[randomNumber];
    newColor.push(randomChosenColor);
    $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
}
const playSound=(names)=>
{
    var audio=new Audio(`/sounds/${names}.mp3`)
    audio.play();   
}
const animatePress=(color)=>
{
    $("."+color).addClass("pressed");
    setTimeout(()=>
    {
    $("."+color).removeClass("pressed");

    },100)
}
$(document).keypress(()=>
{
        if(!start)
        {
            $("#level-title").text("Level "+level);
            nextSequence();
            start=true;
        }
       
})
const checkAnswer=(ans)=>
{

}