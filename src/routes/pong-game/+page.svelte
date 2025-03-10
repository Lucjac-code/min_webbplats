
<script >
	import { onMount } from "svelte";

    let backgroundimage= "https://steamuserimages-a.akamaihd.net/ugc/563267371964767353/E4BE528E333C46F3CE6CF71A6678D2F0F8189BA7/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    /*style="top:{top}%; left:{left}%;">*/
    let move_distance= 9;
    let keys= {38: move_distance, 40: move_distance};
    
    
    let player_position_y= 3;
    
    let top=0;
    let bottom=1536;
    let ai_left=1460;
    let ai_y=0;
    let speed = 250;
    
    let ball_top= 0;
    let ball_left= 200;
    let negative_velocity=false;
    let velocity= 3;
    let position_x= 200;
    let target_position_y=200;
    function bal_move(){
        console.log(ball_left);
        if (negative_velocity==true){
            position_x-=velocity;
            ball_left=position_x;
        }
        else{
            position_x+=velocity;
            ball_left=position_x;
        }   
        }
    
    setInterval(bal_move, 10);
    
    function ball_collisions(){
        if (ball_left-410>=1000){
            negative_velocity=true;
        }
        if (ball_left-140<=10){
            negative_velocity=false;
        }
    }
    onMount(()=>{
        /*bottom = document.getElementsByName("body");
        console.log(bottom)*/
        /*bottom= document.documentElement.clientWidth;
        console.log(bottom);*/
    })
    
    
    
    if (typeof window !== 'undefined'){
         bottom=window.height
    }
    function player_collision(){
        if (player_position_y+100>=827){
            player_position_y-=5;
        }
    }
    
    
    setInterval(player_collision,10);
    setInterval(ball_collisions,1);



   

    setInterval(() => {
        if (ai_y<target_position_y){
                ai_y+=20;
        }
        else if (ai_y>target_position_y){
                ai_y-=20;
        }
        
    }, 500);
    
        function onKeyDown(e){
    // up = 38
	// down = 40
	// right = 39
	// left = 37
	if (e.keyCode == 38){
        if (player_position_y-9<top){
            player_position_y=player_position_y;
        }
        else{
            player_position_y-=keys[e.keyCode];
        }
        }
    if (e.keyCode == 40){
        if (player_position_y+1009>bottom){
            player_position_y=player_position_y;
        }
        else{
            player_position_y+=keys[e.keyCode];
        }
        }
    
       
    }
   
    /* 
 

  globalThis.setInterval(() => {
    const element = document.getElementById("myElement");
    const rect = element.getBoundingClientRect();
    console.log("X: " + rect.x + ", Y: " + rect.y);
  }, 1000);

 */
        /*
    function resetPixels(size:number){
        //assign random indexes for the letters
        let tempLetters:Array<{l:string,id:number}> = [];
        letters.forEach((letter)=>{
            let index:number;
            do{
            index = Math.floor(Math.random() * size*size); 
            }while (tempLetters.length>0 && tempLetters.filter((l) => l.id == index).length != 0)
            tempLetters.push({l:letter,id:index});
        })
  
        //Construct the grid of list of rows
        pixels = [];
        let row:Array<{color:string,letter:string}>;
        // to keep track of the letters random indices
        let k = 0;
        for(let i = 0; i<size;i++){
            row = []
            for(let j = 0; j<size;j++){
                // get the letter with index k
                let templetter = tempLetters.filter((l) => l.id == k);  
                // if letter at index add letter otherwise empty
                row.push(templetter.length>0?{color:lettercolor,letter:templetter[0].l}:{color:color,letter:""})
                k++;
            }
            pixels.push(row)
        }
    }
    resetPixels(size)
  
    let snakecol = 0;
      let snakerow = 0;
    let coldir = 0;
    let rowdir = 0;
  
    let intervalId:NodeJS.Timeout;
      // up = 38
      // down = 40
      // right = 39
      // left = 37
      function onKeyDown(e:any) {
      switch(e.keyCode) {
               case 38:
                rowdir=-1;
                coldir = 0;
                   break;
               case 40:
                rowdir=1;
                coldir = 0;
                   break;
               case 37:
                coldir=-1;
                rowdir= 0;
                   break;
               case 39:
                coldir=1;
                rowdir = 0;
                   break;
           }
      
      // clear the existing interval - we only want one
      if (intervalId)
          clearInterval(intervalId)
      //each speed -ms update snake position based on direction
      intervalId = setInterval(()=>{
          let tempcol = snakecol+ coldir;
          let temprow = snakerow + rowdir;
          //check so not outside of grid
          if(temprow> -1 && temprow < size && tempcol > -1 && tempcol < size ){
              snakecol = tempcol;
              snakerow = temprow;
          }
          // reverse direction and reset username if hit wall
          else{
              username="";
              rowdir= -rowdir;
              coldir = -coldir;
          }
  
  
      }, speed);
      }
  
  
    function letterCollision(pixel:{color:string,letter:string}){
      username+=pixel.letter;
      let rowindex:number;
      let colindex:number;
      // Change position of letter to a pixel that does not already have a pixel
      do{
       colindex = Math.floor(Math.random() * size); 
       rowindex = Math.floor(Math.random() * size); 
      }while (pixels[rowindex][colindex].letter != "")
      
      // Give letter new position
      pixels[rowindex][colindex] = {color:lettercolor,letter:pixel.letter}
      //Reset the pixel that the letter was at before
      pixel.color = color;
      pixel.letter = "";
  
   }
  */
  /*<div class="grid">
        {#each pixels as row, rowIndex}
          <div class="row">
            {#each row as pixel, colIndex}
              {#if rowIndex == snakerow && colIndex == snakecol}
                  {#if pixel.letter != ""}
                      {(pixel)}
                  {/if}
                  <div class="pixel"  style="background: {snakecolor}; 
                        width: {pixelsize}px; height: {pixelsize}px;">
                        {Math.abs(coldir)== 1?(coldir==1)?">":"<":rowdir==1?"v":"^"}
                  </div>
              
                <div class="pixel" style="background: {pixel.color}; 
                      width: {pixelsize}px; height: {pixelsize}px;">
                  {pixel.letter}
                  */
    </script>
    <svelte:window on:keydown|preventDefault={onKeyDown} />
    
    <div class="background">
        <main>
        
        <div id="opponent" style="top:{ai_y}px; left:{ai_left}px;">

        </div>
        <div id="player" style=" top:{player_position_y}px;">
      
        </div>
        <div id="ball" style="left:{ball_left}px; top:{target_position_y}px">

        </div>
           <div id="bottom_wall">

           </div>     
           <div id="right_wall">

           </div>
           <div id="left_wall">

           </div>
           <div id="top_wall">

           </div>
        </main>
 </div>
  
  <style>
  .background {
    position:relative;
    display:flex;
    background-color: black;
    color: red;
    
    height: 100vh;
    width: 100vw;
}
  #player{
    position: fixed;
    background-color:blue;
    width: 25px;
    height: 100px;
    display: flex;
    z-index: 4;
    left: 20px;
}
  #opponent{
    position: fixed;
    background-color:blue;
    width: 25px;
    height: 100px;
    display: flex;
    z-index: 4;
    
  }
#ball{
    background-color:red;
    width: 50px;
    height: 50px;
    border-radius:50%;
    z-index: 4;
    display: flex;
    position: fixed;
}
  #bottom_wall{
    display:flex;
    position: fixed;
    top:830px;
    background-color:black;
    width: 100%;
    height:2px;
}
  #right_wall{
    display:flex;
    position: fixed;
    left: 1535px;
    background-color:black;
    width: 2px;
    height:100%;
  }
  
  #left_wall{
    display:flex;
    position: fixed;
    top:-300;
    background-color:black;
    width: 2px;
    height:100%;
  }
  
  #top_wall{
    display:flex;
    position: fixed;
    
    background-color:black;
    width: 100%;
    height:2px;
  }
  </style>



  
  



