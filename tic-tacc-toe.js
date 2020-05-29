var flag,b1,b2,b3,b4,b5,b6,b7,b8,b9
function start()
{
  flag=0;
  b1=0;
  b2=0;
  b3=0;
  b4=0;
  b5=0;
  b6=0;
  b7=0;
  b8=0;
  b9=0;
}
function disa()
{
  document.getElementById('b1').disabled = true;
  document.getElementById('b2').disabled = true;
  document.getElementById('b3').disabled = true;
  document.getElementById('b4').disabled = true;
  document.getElementById('b5').disabled = true;
  document.getElementById('b6').disabled = true;
  document.getElementById('b7').disabled = true;
  document.getElementById('b8').disabled = true;
  document.getElementById('b9').disabled = true;
}
function check()
{
  if(b1==b2&&b1==b3)
  {
    if(b1==1)
    {
      alert("Player 1 has won!!!");
      disa();
    }
    if(b1==2)
    {
      alert("Player 2 has won!!!");
      disa();
    }
  }
  else if(b4==b5&&b4==b6)
  {
    if(b4==1)
    {
      alert("Player 1 has won!!!");
      disa();
    }
    if(b4==2)
    {
      alert("Player 2 has won!!!");
      disa();
    }
  }
  else if(b7==b8&&b7==b9)
  {
    if(b7==1)
    {
      alert("Player 1 has won!!!");
      disa();
    }
    if(b7==2)
    {
      alert("Player 2 has won!!!");
      disa();
    }
  }
  else if(b1==b4&&b1==b7)
  {
    if(b1==1)
    {
      alert("Player 1 has won!!!");
      disa();
    }
    if(b1==2)
    {
      alert("Player 2 has won!!!");
      disa();
    }
  }
  else if(b2==b5&&b2==b8)
  {
    if(b2==1)
    {
      alert("Player 1 has won!!!");
      disa();
    }
    if(b2==2)
    {
      alert("Player 2 has won!!!");
      disa();
    }
  }
  else if(b3==b6&&b3==b9)
  {
    if(b3==1)
    {
      alert("Player 1 has won!!!");
      disa();
    }
    if(b3==2)
    {
      alert("Player 2 has won!!!");
      disa();
    }
  }
  else if(b1==b5&&b1==b9)
  {
    if(b1==1)
    {
      alert("Player 1 has won!!!");
      disa();
    }
    if(b1==2)
    {
      alert("Player 2 has won!!!");
      disa();
    }
  }
  else if(b3==b5&&b3==b7)
  {
    if(b3==1)
    {
      alert("Player 1 has won!!!");
      disa();
    }
    if(b3==2)
    {
      alert("Player 2 has won!!!");
      disa();
    }
  }
  else
  {

  }
}
function game(id)
{
  if(flag==0)
  {
    flag=1;
    document.getElementById(id).innerHTML = "X";
    document.getElementById(id).disabled = true;
    document.getElementById("instr").innerHTML= "Player 2 turn";
    switch(id)
    {
      case 'b1':
        b1=1;
        break;
      case 'b2':
        b2=1;
        break;
      case 'b3':
        b3=1;
        break;
      case 'b4':
        b4=1;
        break;
      case 'b5':
        b5=1;
        break;
      case 'b6':
        b6=1;
        break;
      case 'b7':
        b7=1;
        break;
      case 'b8':
        b8=1;
        break;
      case 'b9':
        b9=1;
        break;
    }
    check();
    return "X";
  }
  else
  {
    flag=0;
    document.getElementById(id).innerHTML = "O";
    document.getElementById(id).disabled = true;
    document.getElementById("instr").innerHTML= "Player 1 turn";
    switch(id)
    {
      case 'b1':
        b1=2;
        break;
      case 'b2':
        b2=2;
        break;
      case 'b3':
        b3=2;
        break;
      case 'b4':
        b4=2;
        break;
      case 'b5':
        b5=2;
        break;
      case 'b6':
        b6=2;
        break;
      case 'b7':
        b7=2;
        break;
      case 'b8':
        b8=2;
        break;
      case 'b9':
        b9=2;
        break;
    }
    check();
    return "O";
  }
}
