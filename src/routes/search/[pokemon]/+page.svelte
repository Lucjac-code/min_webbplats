
<script>
	import { onMount } from 'svelte';

    /** @type {import('./$types').PageData} */
    export let data;
    /*gör funtion, och load function
    
    */
    let session_list= []
    function session_save(){


      if (session_list.length>=5){ 
          session_list.shift();
          session_list=session_list
        }
    session_list.push(data.response);  
      sessionStorage.setItem("key",JSON.stringify(session_list))??"[]"
      
      }
    function load(){
      let temporary= sessionStorage.getItem("key") ?? '[]'
      if(temporary.length>2){
        session_list = JSON.parse(temporary);
     }
    }
    
  onMount(()=>{
         load();

     session_save();
  })
</script>
  
  {#await data}
    <p>.. waiting</p>
  {:then pokemon} 
  
  <article>
    {#each Object.entries(pokemon.response.sprites) as sprites}
      {#if typeof sprites[1] == "string"}
      <img src={sprites[1]} alt=""/>
      {/if}
    {/each}
  </article>
  
  <h1>{pokemon.response.name}</h1>
  
  <section>
    <p>weight:</p>
    {pokemon.response.weight}
    <p style="margin-top: 5px;">stats:</p>
    {#each pokemon.response.stats as stat}
    <div>
      {stat.stat.name}:
      {stat.base_stat}
    </div>
    {/each}
    
    <p style="margin-top: 5px;">Abilities:</p>
    {#each pokemon.response.abilities as ability}
    <div>
      {ability.ability.name}
    </div>
    {/each}
    
  </section>
  
  {/await}  
  
  
<style>
  article{
     display:flex;
    width:90%;
    height:30%;
    gap: 1em;
    justify-content:center;
  }
    </style>