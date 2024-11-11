
<script>
        
let image = "https://picsum.photos/id/70/367/267"
let photo = "https://picsum.photos/id/88/367/267"
let picture = "https://picsum.photos/id/93/367/267"

</script>



<main>
<h1>
<p>
        "photoapp"
</p>
<p>
        "Denna sida innehåller <strong>fina</strong> bilder"

</p>
</h1>

<div class= "photos">
        <div class= "image-wrapper"><img src= {image} alt="Flexbox egenskaper" ></div>
        <div class= "image-wrapper"><img src= {photo} alt= "Flexbox egenskaper"></div>
        <div class= "image-wrapper"><img src= {picture} alt= "Flexbox egenskaper"></div>

</div>
</main>

<style>
        main{
                background-color: #87CEFA;
                height: 809px;
                overflow-y: hidden;
        }


        h1{
        text-align: center;
        font-size: 20px;
        margin: 15px;
        color: #008080;

        }
        
        .photos{
                display:flex;
                overflow:hidden;
                align-items:center;
                justify-content:center;
                flex-direction:row;
                flex-wrap: wrap;
                border-radius: 20px;
                background-color: #008080;
                
        }
        .image-wrapper img{
                width: 100%;
                border-radius: 20px;
                border: 2px solid #1da7a7;
                box-shadow: 4px 8px 10px rgba(0,0,0,0.2);
        }

        .image-wrapper{
           flex-grow:1;                   
           margin:10px;
           flex-basis: 300px;
        }
        .image-wrapper:hover {flex-grow:2;}
        .image-wrapper:active {transform: scale(0.9);}
</style>