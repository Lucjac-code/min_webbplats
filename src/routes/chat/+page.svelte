<script>
    import ElizaBot from 'elizabot';
    import { enhance } from "$app/forms";
    import { onMount } from 'svelte';
    import {chats_store} from "$lib/chat";
    const eliza= new ElizaBot();
let chat = [{ user: 'Eliza', message: eliza.getInitial()}];
let saved_chats= chat


onMount(()=>{
    if($chats_store.length > 2){
        chat = JSON.parse($chats_store);
    }

    }
)



async function write(messages) {
    
    chat.push({user: "you", message: messages});
    
    chat = chat
    
    var element = document.getElementById("visible");
    
    element.style.display = "flex"; 
            
    // random delay for Eliza's response time
    await new Promise((r) => setTimeout(r, 1000 + Math.random() * 1000));
    element.style.display = "none";
    chat.push({user: "Eliza", message: eliza.transform(messages)});

     chat=chat
     
     saved_chats=chat;
     $chats_store = JSON.stringify(saved_chats);
    }
    function default_chat() {
        chat= [{ user: 'Eliza', message: eliza.getInitial()}];
        let saved_chats= chat
        $chats_store = JSON.stringify(saved_chats);
    }
    
    


</script>

<div class="container">
<button on:click={()=>default_chat()}>
    <img src="https://static.thenounproject.com/png/904768-200.png">
</button>

<main>
<div class= mindre_container>
    <section>
    {#each chat as chats}
        <article class=  {chats.user} id= {chats.message}>
         
            <p>
                {chats.message}
            </p>
        
        </article>
    {/each}
    <article id= "visible">
    <span id= "circle" class= "animation"></span>
    <span id= "circle" class= "animation"></span>
    <span id= "circle" class= "animation"></span>
    </article>
    </section>


</div>
<form   method="post"
    use:enhance={({ formElement, formData, action, cancel }) => {
      cancel(); 
      const text = formData.get("text"); 
      write(text);

      
      formElement.reset();

      }}>
     
<label for="message"></label>
<input type="text" id="message" name="text"  required placeholder="Chatta med eliza">

</form>

</main>
</div>

<style>


.container{
    display: flex;
    padding:50px;
    justify-content: space-evenly;
    width: fit-content;
    background-color:rgb(66, 127, 158);
    width: 100vw;
    height: 100vh;
    justify-content: center;
    
}
.you{
    background-color:rgb(87, 185, 152);
    margin-left: 150px;
    flex-direction: row-reverse;
    display: flex;
}
.message{
    padding-left: 120px;
}
form{
  padding-top:50px;
  display:flex;
  align-items: flex-end;
  
}
#circle{
    width: 10px;
    height: 10px;
    border-radius:50%;
    background-color:#1aa1a1;
   
    
}
article, input{
    Margin:10px;
    padding:10px;
    border-radius: 10px;
    background-color: #008019;
    width: 90%;
}
.mindre_container{
    width: 60vw;
    height: 50vh;
    justify-self: center;    
    align-self: center;
    display: flex;
    margin-top: 10vh;
    padding: 10px;
    background-color: #8ebad6;
    overflow-y: scroll;
}
main{
    width: 60vw;
    height: 70vh;
    justify-self: center;    
    align-self: center;
    padding: 10px;
    background-color: #8ebad6;
    display: flex;
    flex-direction: column;
    
}
button{
    width:100px;
    height:100px;
    margin-top: 100px;
    padding-bottom: 200px;
}
section{
    height: 90%;
}
#visible{
    width: 100px;
    height:60px;
padding:none;
display:none;
justify-content: center;
align-items: center;
}
@keyframes typing {
    0% { transform: scale(1);}
    25%{ transform: scale(1);} 
    50% { transform: scale(1.4);}
    100% { transform: scale(1);}
}
 
.animation {
  animation-name: typing;
  animation-duration: 1s; /* Längd på animationen (till exempel 3 sekunder) */
  animation-timing-function: ease-in-out; /* Funktion som styr tidsförloppet (till exempel "ease-in-out") */
}

/* CSS-stilar för .circle med index 1 (den första cirkeln) */
.circle:nth-child(1) {
animation-delay: 0ms; /* Ingen fördröjning */
animation-iteration-count: infinite;
}
/* CSS-stilar för .circle med index 2 (den andra cirkeln) */
.circle:nth-child(2) {
animation-delay: 333ms; /* Starta animationen efter 333 millisekunder (ms) */
animation-iteration-count: infinite;
}
/* CSS-stilar för .circle med index 3 (den tredje cirkeln) */
.circle:nth-child(3) {
animation-delay: 666ms; /* Starta animationen efter 666 ms */
animation-iteration-count: infinite;
}
                 
</style>