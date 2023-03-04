const s0=document.getElementById("c1");
const s1=document.getElementById("c2");
const s2=document.getElementById("c3");
const s3=document.getElementById("c4");
const s4=document.getElementById("c5");
const s5=document.getElementById("c6");
const s6=document.getElementById("c7");
const s7=document.getElementById("c8");
const s8=document.getElementById("c9");
let current = 0;
function Disp(dispy)
{
    if(current == 0)
    {
        dispy.value = "X";
        console.log(dispy.id); 
        current = 1;
        document.getElementById(dispy.id).disabled=true;
    }
    else
    {
        dispy.value = "O";
        console.log(dispy.id); 
        current = 0;
        document.getElementById(dispy.id).disabled=true;
    }
    winning();
}
const winmsg=document.getElementById("win_msg");
function winning()
{
    if(s0.value == "X" && s1.value == "X" && s2.value == "X")  
    {
        console.log("X Winner");
        Winner(0);
        disable();
    }
    else if(s3.value == "X" && s4.value == "X" && s5.value == "X")  
    {
        console.log("X Winner");
        Winner(0);
        disable();
    }
    else if(s6.value == "X" && s7.value == "X" && s8.value == "X")  
    {
        console.log("X Winner");    
        Winner(0);
        disable();
    } 
    else if(s0.value == "X" && s3.value == "X" && s6.value == "X")  
    {
        console.log("X Winner");    
        Winner(0);
        disable();
    }
    else if(s1.value == "X" && s4.value == "X" && s7.value == "X")  
    {
        console.log("X Winner");    
        Winner(0);
        disable();    
    }
    else if(s2.value == "X" && s5.value == "X" && s8.value == "X")  
    {
        console.log("X Winner");    
        Winner(0);
        disable();
    }
    else if(s0.value == "X" && s4.value == "X" && s8.value == "X")  
    {
        console.log("X Winner");    
        Winner(0);
        disable();
    }
    else if(s2.value == "X" && s4.value == "X" && s6.value == "X")  
    {
        console.log("X Winner");    
        Winner(0);
        disable();
    }
    if(s0.value == "O" && s1.value == "O" && s2.value == "O")  
    {
        console.log("O Winner");
        Winner(1);
        disable();
    }
    else if(s3.value == "O" && s4.value == "O" && s5.value == "O")  
    {
        console.log("O Winner");
        Winner(1);
        disable();
    }
    else if(s6.value == "O" && s7.value == "O" && s8.value == "O")  
    {
        console.log("O Winner");        
        Winner(1);
        disable();
    } 
    else if(s0.value == "O" && s3.value == "O" && s6.value == "O")  
    {
        console.log("O Winner");    
        Winner(1);
        disable();
    }
    else if(s1.value == "O" && s4.value == "O" && s7.value == "O")  
    {
        console.log("O Winner");    
        Winner(1);
        disable();
    }
    else if(s2.value == "O" && s5.value == "O" && s8.value == "O")  
    {
        console.log("O Winner");    
        Winner(1);
        disable();
    }
    else if(s0.value == "O" && s4.value == "O" && s8.value == "O")  
    {
        console.log("O Winner");    
        Winner(1);
        disable();
    }
    else if(s2.value == "O" && s4.value == "O" && s6.value == "O")  
    {
        console.log("O Winner");    
        Winner(1);
        disable();
    }
    else if(
        (s0.value == "X" || s0.value == "O") &&
        (s1.value == "X" || s1.value == "O") &&
        (s2.value == "X" || s2.value == "O") &&
        (s3.value == "X" || s3.value == "O") &&
        (s4.value == "X" || s4.value == "O") &&
        (s5.value == "X" || s5.value == "O") &&
        (s6.value == "X" || s6.value == "O") &&
        (s7.value == "X" || s7.value == "O") &&
        (s8.value == "X" || s8.value == "O")
    ){
        console.log("Draw");
        winmsg.innerHTML = "DRAW";
    }
}
function Winner(num)
{
    if (num == 0) 
    {
    winmsg.innerHTML = "PLAYER 1 IS WINNER";
    }
    else if (num == 1) 
    {
    winmsg.innerHTML = "PLAYER 2 IS WINNER";
    }
}
function disable()
{
    s0.disabled=true;
    s1.disabled=true;
    s2.disabled=true;
    s3.disabled=true;
    s4.disabled=true;
    s5.disabled=true;
    s6.disabled=true;
    s7.disabled=true;
    s8.disabled=true;
}