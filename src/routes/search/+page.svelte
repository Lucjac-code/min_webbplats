<script>
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";
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
<div>
    <h1>{#each session_list as objec}
                {objec.name}
    {/each}</h1>
</div>

<style>
    input{
        color:black;
    }
    img{
        width:120px;
        height:120px;
    }
</style>