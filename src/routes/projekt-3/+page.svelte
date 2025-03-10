<script>
let varor= [{image: "https://www.komplett.se/img/p/899/1312916.jpg",name:"iphone",price:"5000 kr",amount:0},{image:"https://m.media-amazon.com/images/I/61uA2UVnYWL._AC_UF894,1000_QL80_.jpg",name:"ipad",price:"3000 kr",amount:0,},{image:"https://www.proshop.se/Images/915x900/3331066_797d720c27c1.png",name:"RTX 5090",price:"60000 kr",amount:0},{image:"https://i5.walmartimages.com/asr/33234748-0028-42bb-b808-c76ed8221382.ac8908c82a40548ce751cfc0c0b55620.jpeg",name:"Xbox Mini Fridge",price:"1500 kr",amount:0},{image:"https://pbs.twimg.com/media/GEBvT4jWIAAPQr6?format=jpg&name=900x900",name:"Windows 11 Ice Cream",price:"900 kr",amount:0},{image:"https://simlimsquare.com.sg/image/images/621993d21ba94.jpg?p=full",name:" 2000w power supply",price:"4000 kr",amount:0},{image:"https://cdn.sweclockers.com/artikel/bild/121256?l=eyJyZXNvdXJjZSI6IlwvYXJ0aWtlbFwvYmlsZFwvMTIxMjU2IiwiZmlsdGVycyI6WyJhPTE2OjkiLCJ0PXB1YkJhbm5lciJdLCJwYXJhbXMiOnsiY2FjaGVCdXN0ZXIiOiIyMDIxMDUwMSJ9LCJrZXkiOiI5ZWU2MzgyZDFmYzNhNzA4NGQxMjM5YWZkOGEyMjJhNSJ9",name:"Apple Grater",price:"60000 kr",amount:0},{image:"https://d2e6ccujb3mkqf.cloudfront.net/0b489960-57d7-4413-a9c7-ed1d67b1b89a-4_9e3ff79a-2486-48dc-bd87-276a10377324.jpg",name:"MacBook Air",price:"7000 kr",amount:0},{image:"https://www.proshop.se/Images/915x900/3293591_c5e81cfa9fc7.png",name:"Samsung Galaxy s24",price:"9000 kr",amount:0},{image:"https://geekd.se/cdn/shop/files/d846019a2192b6113b80aaa762e16230.jpg?v=1704457500&width=2400",name:"RTX 3060",price:"3600 kr",amount:0},{image:"https://media.gamestop.com/i/gamestop/20001730_ALT09/PNY-GeForce-RTX-4090-24GB-XLR8-Gaming-VERTO-EPIC-X-RGB-Overclocked-Triple-Fan-Graphics-Card?$pdp$",name:"RTX 4090",price:"50000 kr",amount:0},{image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX572?wid=3530&hei=1023&fmt=jpeg&qlt=95&.v=1585846657704",name:"Grater wheel extension",price:"9990 kr",amount:0}];
let buy=false;
let in_cart=[]
let no_cart=true;
function cart(vara){
    in_cart.push({name:vara.name,price:vara.price,amount:1});
    in_cart=in_cart
        
    }
    
function Home(){

}
function new_products(){

}
function sale(){

}
function Buy(){
    no_cart=!no_cart;
    
}

/*
        
            if (vara.name==in_cart[i].name){
                    in_cart[i].amount+=1
                    in_cart=in_cart;
            }
            else{
                in_cart.push({name:vara.name,price:vara.price,amount:1});
                in_cart=in_cart;
            }
        }*/
/*{#each varor as vara}
{#if buy==true}
{/if}
        {/each}*/
</script>


            
        
    

<main>
    
    <p class= "titel"  type="image" >
        Zibbmade
        <img src="cloud.png" alt="text" class="cloud" style="position:absolute; width:200px; height:90px; margin-right:260px; margin-left:-30px; top:6%; align-self:center;">
    </p>
    
    <button style= "height:40px; margin-left:200px;margin-top:2%; " on:click={()=>Buy()}>
        <p style= "width:80px;">Buy</p>
    </button>
        
        <div class="del-med-varor">
          
        
            
        {#if no_cart}
            
        
        <div class:cart={no_cart} >
    
            <p style="font-size:50px; margin-top:10px;">Cart</p>
        {#each in_cart as cart_item}
        {#if cart_item.amount>0}
        <li>
            {cart_item.name} {cart_item.price} <button on:click={()=>cart_item.amount--}>-</button>{cart_item.amount}<button on:click={()=>cart_item.amount++}>+</button>
        
        </li>
        {/if}
        
        {/each}
    </div>
    {/if}    
            
            
            {#each varor as vara}
                <div class= "products">
                    <img class="product-picture" src={vara.image} alt="bild">
                    <p style="top:4%; justify-self:center; font-size:25px;">{vara.name}</p>
                    <p style="justify-self:center; top:3%;">{vara.price}</p>
                    <button style="margin-bottom:30px; border-radius:15px;" on:click={()=>cart(vara)}>BUY</button>
                    
                    
                </div>
            {/each}
        </div>
        
    </main>
    

<div class= "side-bar" >
    <button style= "height:35px; margin-top:60px;" on:click={()=>Home()}>
        <p class="home" >Home</p>
        </button>

    <button style= "height:65px; margin-top:80px; " on:click={()=>Home()}>
        <p class="New_product" style= " margin-bottom:25px;">New product</p>
        </button>
    
    <button style= "height:35px; margin-top:100px;" on:click={()=>Home()}>
        <p class="sale" >sale</p>
        </button>
</div>

    

<style>
    main{
        background-color:white;    
        width:100%;
        height:100%;
        justify-content: center;
        display:flex;
        flex-wrap: wrap;
    }
    p{
        color: black;    
        font-size: 30px;
        height:30px;
    }
    .titel{
        display:flex;
        width:6%;
        height:30px;
        margin-left:10%;
        margin-top:2%;
        color:black; 
        height:90px;
        margin-top:2%;
        align-self:center;
        
    }
    @media(max-width:600px){
        .titel{
            margin-top:6%;
        }
        .del-med-varor{
            width:1200px;
        }
        main{
            width:500px;
            justify-content:center;
        }
        .products{
            width:200px;
        }
        
        .cloud{
            top:4%;
        }
    }
    button{
        
        border-color:black;
        border-width:2px;
        border-radius: 4px;
    }
    .cart{
        display:flex;
        width:400px;
        height:200px;
        overflow-y:scroll;
        
        z-index:auto;
        position:fixed;
        justify-self:end;
        background-color:#000080;
        align-self: center;
        flex-direction:column;  
        align-items:center;
    }
    .side-bar{
        width: 10vw;
        height:100%;    
        display:flex;
        position:fixed;
        top:3%;
        right:0%;
        border-color:black;
        border-left-width:4px;
        flex-direction:column;
    }
    .home{
        width:80px;
    }
    .New_product{
        width:80px;
    }
    .sale{
        width:80px;
    }
    
    .del-med-varor{
        flex-direction:row;
        width:80vw;
        height:650px;
        background-color: #20B2AA;
        top:20%;
        left:0%;
        display:flex;
        margin-right:8%;
        justify-content:space-evenly;
        flex-wrap:wrap;
        overflow-y: scroll;
    }
    .product-picture{
        width:250px;
        height:190px;
        border-radius:16px;
        
        
}
    .picture{
        width:250px; 
        display:flex; 
        height:70px; 
        position:fixed; 
        justify-content:center;
        justify-self:center;
    }
        .products{
        margin-top:20px;
        align-self:center;
        justify-content:center;
        border-radius:15px;
        display:grid;
        width:300px;
        height:400px;
        background-color:#5F9EA0;
        border-width:4px;
    }
</style>