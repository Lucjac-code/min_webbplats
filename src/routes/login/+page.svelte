<script>
    
    import { base } from '$app/paths';
    import {users_store} from "$lib/user";
    import { onMount } from 'svelte';
    
    
let name=""
let password= ""
let users = [];

onMount(() => {
    /*Check if has more then 2 characters*/
    if($users_store.length > 2){
        users = JSON.parse($users_store);
    }})


function handleSubmit(){
    if(users.filter(users => users.username == name && users.password == password).length>0){
        alert(name +" har loggat in")
        
    } 
    else{alert("Den här användaren finns inte eller så är lösenordet fel")}
        
    }
   

</script>



<main style= "min-width: 500px; min-height: 500px;">
<div class= container style= "min-width: 300px; min-height: 500px;">
<h1>
    <p>
        Inloggning
    </p>
</h1>
<form on:submit|preventDefault={handleSubmit}>


<label for="name">Namn:</label>
<input type="text" id="name" bind:value={name} >



<label for="password">Lösenord:</label>
<input type="password" id="password" bind:value={password}>

<label for= "Tom label"></label>
<input type="submit" value= "Logga in" style= "color: white">
</form>
<div>
    Har du inget konto? <a href= "{base}/register">Registrera dig </a>
</div>
</div>
</main>

<style>
 main{
        background-image: url("https://media.istockphoto.com/id/1371944453/vector/blue-abstract-wave-background.jpg?s=612x612&w=0&k=20&c=uaCU_xpsKQLnbnvJH99iAi9uUqEAoS4jcyDwHXlLq5M=");
        background-size: cover;
        width: 100%;
        height: 100%;
        padding: 5%;
        
    }
 
 .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        border: solid 5px #008080;
        border-radius: 10px;
        width: 35%;
        height: 60%;
        background-color: #8ebad6;
        margin: auto;
        
    }     
    input{
        color: black;
    }
    
</style>
