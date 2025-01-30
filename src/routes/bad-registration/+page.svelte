<script>
    import { onMount } from "svelte";
   /* on:submit|preventDefault={}*/
    /*"https://external-preview.redd.it/prfT0IvFjzM-kL3xO9BlKFgqYAZCKVjr_n6j5v9LRJg.jpg?width=1080&crop=smart&auto=webp&s=ed1d63a76e72ce23bf4aaecb4a4f1205defd29ed*/
    /*split*/
    let username_list = ["asa","asasasass"]
    let username=""
    let age
    let username_letter= ""
    let exists= false;
    let password= ""
    
    let binary= {  "01100001": 'a',
          "01100010":'b',
          "01100011":"c",
          "01100100":"d",
          "01100101":"e",
          "01100110":"f",
          "01100111":"g",
          "01101000":"h",
          "01101001":"i",
          "01101010":"j",
          "01101011":"k",
          "01101100":"l",
          "01101101":"m",
          "01101110":"n",
          "01101111":"o",
          "01110000":"p",
          "01110001":"q",
          "01110010":"r",
          "01110011":"s",
          "01110100":"t",
          "01110101":"u",
          "01110110":"v",
          "01110111":"w",
          "01111000":"x",  
          "01111001":"y",  
          "01111010":"z"}
    
  function translate(){
    
    
    
    if (binary[username_letter]){
        username+= binary[username_letter]
        exists= true;
        console.log("123")
    }
        
    
    if (exists==true){
        exists=false;
        return
    }
    else{
        alert("this is not a letter!")
    }
}


</script>


<div class= "background">
    <div class="container">
        <p class="title">Register</p>
        <p class= "description">Write your username in binary!</p>
        
        <form on:submit|preventDefault={translate}>
            
            <div class="Username">
                <label for="username">username={username}</label>
                <input type= text id= "username" bind:value= {username_letter}>
            </div>
        </form>
            
            <div class= "slider">
                <label for= "age" style= "justify-self:center">age={age}</label>
                <input type= "range" min= "0.5" max= "24.33" bind:value={age} class= "slider_middle" id= "range1">
                
                <input type= "range" min= "0.5" max= "24.33" bind:value= {age} class= "slider_right" id= "range2">
            </div>
            <div class="Password">
            <label for="password">Password</label>
            <input type= text id= "password" bind:value= {password}>
            </div>
        
    
        <button class ="login" on:click={()=>{alert("Your virus is now downloaded, and will soon replace your drivers!")}}>Register and get a free virus</button>
    

    </div>
</div>


<style>
    .background{
        background-color:rgb(24, 96, 163);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
    p{
        color:rgb(110, 246, 110);
    }
    label{
        color:rgb(110, 246, 110);
    }
    .description{
        border-bottom-width: 2px;
        margin-bottom: 10px;
    }
    .title{
        font-size: 40px;
        margin-bottom:100px;
    }
    .login{
        background-color: red;
       
        
    }
    
    .slider_right{
        transform: rotate(-90deg);
        margin-left: 150px;
    }
    .slider{
        position:relative;
        width: 240px;
    }
    #password{
        border-radius:5px;
    }
    #username{
        border-radius: 5px;
    }
    .container{
        border: 4px solid blanchedalmond;
        background-color:rgb(63, 96, 131);
        border-radius: 5px;
        width: 30%;
        height: 700px;
        position: relative;
        display: flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
    }
    button{
        background-color: beige;
        border: 1px solid brown;
        border-radius: 5px;
        padding: 1px 2px;
        Height: 30px;
        display:flex;
        margin-top: 100px;
        margin-bottom:20px;
    }
    input{
        color:black;
    }
    @keyframes fader{
        0% {opacity: 30%; transform: scale(0.25);}
        50% {opacity: 70%; transform: scale(0.75);}
        100% {opacity: 100%; transform: scale(1);}
    }
    
</style>