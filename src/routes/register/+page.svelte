<script>
    
    import { base } from '$app/paths';
    import {users_store} from "$lib/user";
    import { onMount } from 'svelte';
    let users = [];
    
    let color= "black"
    
let name=""

let email=""

let colors= [{namn: "Blå", value: "blue"}, {namn: "Röd", value: "red"}, {namn: "grön", value: "green"}]
let password= ""
function handleSubmit(){
    let new_user = {username: name, password: password, email: email, color: color};
    if (users.filter(user => new_user.username == user.username  ).length==0){

        

        users = [...users, new_user];
        $users_store = JSON.stringify(users);
        alert("välkommen "+name)
    }
    else{
        alert("Det här användarnamnet finns redan")
    }


    }
	
    

    


onMount(() => {
    /*Check if has more then 2 characters*/
    if($users_store.length > 2){
        users = JSON.parse($users_store);
    }
});




</script>



<main>
<div class= container style= "min-width: 300px; min-height: 500px;">
<h1>
    <p>
        registrering
    </p>
</h1>
<form on:submit|preventDefault={handleSubmit}>

<div style="margin-left:50px; width: 100px; height: 100px; border-radius: 50%; overflow:hidden; background-color:{color};">

</div>
<div class= inputs>
<label for="name">Namn:</label>
<input type="text" id="name" bind:value={name} >

<label for="mail">Adress:</label>
<input type="email" id="mail" bind:value={email}>

<label for="password">Lösenord:</label>
<input type="password" id="password" bind:value={password}>

<label for= "favouritecolor">Favoritfärg:</label>
</div>
<select  id= "favouritecolor" bind:value={color}>
    {#each colors as color}
    <option value={color.value}>{color.namn}</option>
    {/each }
    
</select>
<input type="submit" value= "Registrera" style= "color: white;">
</form>
<div>
    Har du redan ett konto? <a href= "{base}/login">Logga in </a>
</div>
    
</div>
</main>

<style>
 main{
        background-image: url("https://media.istockphoto.com/id/1175268677/sv/vektor/bl%C3%A5-kurvor-och-v%C3%A5gorna-av-havet-varierar-fr%C3%A5n-mjuk-till-m%C3%B6rk-vektor-bakgrund-platt-design.jpg?s=612x612&w=0&k=20&c=_Pa5k5F3XippWVQM2IYXi6mfECyQVjRiOBX8M8Ywvg0=");
        background-size: cover;
        width: 100%;
        height: 100%;
        padding: 5%;
        min-width: 500px;
        min-height: 500px;
        }
 
 .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        border: solid 5px #008080;
        border-radius: 10px;
        width: 35%;
        height: 80%;
        background-color: #8ebad6;
        margin: auto;
        
    }     
    option{
        color: black;
    }
    input{
        color: black;
    }
</style>
