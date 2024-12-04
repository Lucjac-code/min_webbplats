<script>
import { fade } from 'svelte/transition'
let vara= ""

let varor = []
function handleSubmit(){
    if (vara.length >0){
            let p = Math.min(11,varor.length+1)
            varor.push({name:vara,priority: p,tobuy:true})
            varor=varor
    }
    
    
}
function sort_items(){
    varor=varor.sort(function(a,b){return (a.priority-b.priority)});
}
function not_bought(i){
    varor[i].tobuy=true
    varor=varor
}
function bought(i){
    varor[i].tobuy=false
    varor=varor
}
function remove(i){
    varor.pop(i)
    varor=varor
}
</script>



<div class="background">
<main class= container>
   <h1>
        Shoppinglist
   </h1>
   <div class= categories_container>
    <section>
        <h2>
         varor att köpa
        </h2>
        <ul>
            {#each varor as vara,i}
            {#if vara.tobuy == true}
           
            <li transition:fade>
            {vara.priority} {vara.name}
            <input max= 11 min= 1 type="number" bind:value={vara.priority} on:change={()=>sort_items()}>
            <button style= "color: rgb(0, 245, 127)"on:click={()=>bought(i)}> köpt </button>
            <button style= "color: #FF0000" on:click={()=>remove(i)}> ta bort</button>
            </li> {/if}
        {/each}
        </ul>
    </section>
    <section>
        <h2>
         köpta varor
        </h2>
        <ul>
            {#each varor as vara,i}
            {#if vara.tobuy == false}
           
            <li transition:fade>
            {vara.name} <button style= "color: #FF0000"on:click={()=>not_bought(i)}> ej köpt </button> 
            </li> {/if}
        {/each}
        </ul>
    </section>
    
</div>
<form on:submit|preventDefault={handleSubmit}>
    <input type= "text" bind:value={vara}>
<input class= vara type="image" alt="submit" style= "height: 60px;, width: 20px;" src="knapp.png">
</form>
    
</main>
</div>

<style>

.background{
    background-color: #87CEEB;
    height: 100%;
    width: 100%;
}

.container{
    
    display: grid;
    grid-template-rows: 1fr 9fr 1fr;
    background-color: #008080;
    width: 60vw;
    height: 70vh;
    border-radius: 20px;
   
}
.categories_container{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    background-color: #87CEEB;
    grid-column-gap: 10px;
    height: 100%;
    width: 100%;
    font-size: 15px;
    text-align: center;
    overflow-y: scroll;
}
.categories_container section h2{
    padding-top: 10px;
    padding-bottom: 10px;
}
.container h1{
    justify-self: center;
    align-self: center;
    background-color: rgb(23, 83, 53);
    border-color: aqua;
    border-radius: 20px;
}

.categories_container section:first-child{  /* vilket barn vill vi styla? */
    background-color: rgba(0, 0, 0, 0.1) /* svart bakgrund med 10% opacitet */
    
}
 
  .categories_container section:nth-child(2){  /* vilket barn vill vi styla? */
    background-color: rgba(0, 0, 0, 0.3) /* svart bakgrund med 30% opacitet */
  }
  
.categories_container section:first-child h2{
    color:aqua;
    background-color: rgba(0, 0, 0, 0.2)
    
}
.categories_container section:nth-child(2) h2{
    color: aqua;
    background-color: rgba(0, 0, 0, 0.4)
}
.categories_container section ol li{
    list-style-position: inside;
    list-style-type: decimal;
}
.categories_container section ul li{
    list-style-position: inside;
    list-style-type: disc;
    border-bottom-width: 1px;
}


input{
    color: black;
}
form{
    justify-self: center;
    align-self: center;
    display: flex;
}


</style>