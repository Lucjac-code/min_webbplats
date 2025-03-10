<script>
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";
    import { base } from '$app/paths';
    let search= ""
    let session_list=[]
    function load(){
      let temporary= sessionStorage.getItem("key") ?? ''
      if(temporary.length>2){
        session_list = JSON.parse(temporary);
        
    }
    }
    onMount(()=>{
     load();
  })
</script>





<img src="https://icon-library.com/images/pokemon-ball-icon/pokemon-ball-icon-4.jpg">
<form on:submit|preventDefault={()=> goto('/search/'+search.toLowerCase())}>
    <input type="text" placeholder="Sök upp en pokemon" bind:value={search} />
  </form>
<div class="poke-names">
    <h1>{#each session_list as objec}
                {objec.name}
    {/each}</h1>
</div>
<footer>
    {#each session_list as objec}
         <a href= "{base}/search">{objec.name}</a>
    {/each}
</footer>
<style>
    input{
        color:black;
    }
    img{
        width:120px;
        height:120px;
    }
    .poke-names{
        display:flex;
        flex-direction:column;
        flex-wrap:wrap;
        align-content:space-evenly;
        width:90px;
        height:20%;
    
    
    }
    footer{
        width:100%;
        height:5%;
        display:flex;
        justify-self:end;
        justify-content:space-evenly;
    }
</style>