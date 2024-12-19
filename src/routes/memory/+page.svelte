<script>
let flipped_cards= []
let cards= [
    {image: "https://wallpapers.com/images/hd/funny-cats-pictures-3i7xzrlgdjsw8ci8.jpg", flipped: false, matched: false},
    {image: "https://wallpapers.com/images/hd/funny-cats-pictures-3i7xzrlgdjsw8ci8.jpg", flipped: false, matched: false},
    {image: "https://preview.redd.it/comment-funny-cat-pics-cuz-thats-what-the-internet-was-made-v0-2hsl07jye6cb1.jpeg?width=762&format=pjpg&auto=webp&s=b639ef87cc3a2cc5e740e8d3104f3685149d08c1", flipped: false, matched: false},
    {image: "https://preview.redd.it/comment-funny-cat-pics-cuz-thats-what-the-internet-was-made-v0-2hsl07jye6cb1.jpeg?width=762&format=pjpg&auto=webp&s=b639ef87cc3a2cc5e740e8d3104f3685149d08c1", flipped: false, matched: false},
    {image: "https://i.pinimg.com/736x/ba/92/7f/ba927ff34cd961ce2c184d47e8ead9f6.jpg", flipped: false, matched: false},
    {image: "https://i.pinimg.com/736x/ba/92/7f/ba927ff34cd961ce2c184d47e8ead9f6.jpg", flipped: false, matched: false},
    {image: "https://i.pinimg.com/736x/ee/f0/ee/eef0ee0b960c244e5ab3bff2f41d7e60.jpg" , flipped: false, matched: false},
    {image: "https://i.pinimg.com/736x/ee/f0/ee/eef0ee0b960c244e5ab3bff2f41d7e60.jpg",  flipped: false, matched: false},
    {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs2z1DH1XGc8KozmG9pzeZU_0MCAtNFRNBHQ&s", flipped: false, matched: false},
    {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs2z1DH1XGc8KozmG9pzeZU_0MCAtNFRNBHQ&s", flipped: false, matched: false},
    {image: "https://i.pinimg.com/originals/00/24/d4/0024d490251e4a8aca7b36fe45100eaa.jpg", flipped: false, matched: false},
    {image: "https://i.pinimg.com/originals/00/24/d4/0024d490251e4a8aca7b36fe45100eaa.jpg", flipped: false, matched: false}
]


let flipped_card_counter= 0
let flipcount= 0
let bluePoints= 0
let redPoints= 0
let blueTurn= true
function shuffleArray(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(cards)

function flipp(card){
    if (card.matched){ 
        return
        } 
    else if (card.matched!=true && card.flipped!=true){ 
        if(flipcount<=1){ 
            card.flipped = !card.flipped
            flipcount++
            flipped_cards.push(card)
            cards = cards
        }
            
        
            
    }
    

    
    
     if (flipcount==2 ){
        let näst_sist= flipped_cards.length-2
        if (flipped_cards[näst_sist].image==card.image){
            for (let u=0; u<12; u++){
                if (card.image===cards[u].image){
                    cards[u].matched= !cards[u].matched
                    
                }
                flipcount=0
                
            }
            if (blueTurn==true){
                bluePoints+=1
            }
            else{
                redPoints+=1
            }
            flipped_card_counter+= 2
        }
        
            setTimeout(() => {
                cards.forEach((card) => {
                    card.flipped = card.matched;
                });
                flipcount = 0;
                flipped_cards=[]
                cards = cards;
                blueTurn=!blueTurn
                }, 1000);
                if (flipped_card_counter==12){
                    if (bluePoints>redPoints){
                        alert("Blue player won!")
                    }
                    else if (bluePoints<redPoints){
                        alert("Red player won!")
                    }
                    else {
                        alert("Tie!")
                    }
                }
        }
        }         
function reset(){
    location.reload();
}







</script>

<div class=background>
    <p class =memory>Memory</p>
    <aside class= "blue">
        <p>
        {bluePoints}
    </p>
</aside>
    <aside>
        <p>
            {redPoints}
        </p>
    </aside>
    <aside class= "turn" class:blue= {blueTurn}>
        
    </aside>
<main>
    {#each cards as card}
    
    <div class= "card" class:flipped= {card.flipped} on:click={()=>flipp(card)}>
    
    <img class = "front" src= "https://cdn-icons-png.freepik.com/256/5825/5825060.png?semt=ais_hybrid" alt= front>
    
    <img class= "back" src= {card.image} alt= back>
    </div>
    {/each}
</main>
<button on:click={()=>reset()}>
<img src="https://static.thenounproject.com/png/904768-200.png">
</button>
</div>
<style>

    button{margin: auto;}
.background{
    background-color: #008080;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.memory{
    justify-self: center;
    margin-top: 20px;
}
main{
    margin-top: 20px;

    display: grid;
    
    grid-template-columns: repeat(4, 100px);;
    grid-template-rows: repeat(3, 100px);;
    justify-content: center;
}
.card{
    border-width: 1px;
    border-color: black;
    height: 100%;
    width: 100%;
    position:relative;
    transform-style: preserve-3d;
    transition: transform 0.5s;
}
.card:not(.flipped):hover {transform: scale(1.1);}
.flipped{
    transform: rotateY(180deg);
}
.front{
    transform: rotateY(1800deg);
}
.back{
    transform:rotateY(180deg);
}
.card img{
    position:absolute;
    height: 100%;
    width: 100%;
    backface-visibility: hidden;
}

aside{
    width: 100px;
    height: 100px;
    position: fixed;
    bottom: 10px;
    right: 10px;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
  }

  p{
    font-size: 30px;
  }
.blue{
    background-color: blue;
    left:10px;
}            
.turn{
    box-shadow: 0 0 10px 10px yellowgreen;
    z-index: 1;
}

</style>