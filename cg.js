var no=6;
var show;
var color=generateramdomcolors(no);
var pickedcolor=pickcolor(no) + " none repeat scroll 0% 0%";
var display=document.getElementById("clr");
show=pickcolor(no);
display.textContent=show;
var h1=document.querySelector("h1");
var squares=document.querySelectorAll(".square");
var resetbutton=document.querySelector("#reset");
var mes=document.querySelector("#message");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");
easybtn.addEventListener("click",function()
{
        no=3;
    easybtn.classList.add("selected");
    hardbtn.classList.remove("selected");
    color=generateramdomcolors(no);
    show=pickcolor(no);
    pickedcolor=pickcolor(no) + " none repeat scroll 0% 0%";
    display.textContent=show;
    for(var i=0;i<3;i++)
    {
        
            squares[i].style.background=color[i];
            squares[i+3].style.display="none";

    }

}); 
hardbtn.addEventListener("click",function()
{
    no=6;
    easybtn.classList.remove("selected");
    hardbtn.classList.add("selected");
    color=generateramdomcolors(no);
    show=pickcolor(no);
    pickedcolor=pickcolor(no) + " none repeat scroll 0% 0%";
    display.textContent=show;
    for(var i=0;i<6;i++)
    {
        
            squares[i].style.background=color[i];
            squares[i].style.display="block";

    }

});

resetbutton.addEventListener("click",function()
{
    color=generateramdomcolors(no);
    show=pickcolor(no);
    pickedcolor=pickcolor(no) + " none repeat scroll 0% 0%";
    display.textContent=show;
    for(var i=0;i<squares.length;i++)
{
    squares[i].style.background=color[i];
}
    h1.style.background="steelblue";
    mes.textContent="";
    this.textContent="NEW COLORS"
});
for(var i=0;i<squares.length;i++)  
{
    squares[i].style.background=color[i];
    squares[i].addEventListener("click",function(){
        
        var clickedcolor=this.style.background;
    if(clickedcolor===pickedcolor)
    {
        changecolor(clickedcolor);
        h1.style.background=pickedcolor;
        resetbutton.textContent="play again?";
        mes.textContent="correct";
    }
    else{
        this.style.background="#232323";
        mes.textContent="try again";
    }

     
    });
}

function changecolor(color)
{
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.background=color;
    }
}
function generateramdomcolors(num)
{
    var arr=[]
    for(var i=0;i<num;i++)
    {
        arr.push(randomcolor());
    }
    return arr;
}

function randomcolor()
{
    var r=Math.floor(Math.random() * 256);
    var g=Math.floor(Math.random() * 256);
    var b=Math.floor(Math.random() * 256);
    return "rgb(" + r +", " + g + ", " + b + ")";
}
function pickcolor(no)
{
    var x=Math.floor((Math.random()*no));
    return color[x];
}
