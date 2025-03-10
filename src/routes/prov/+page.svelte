<script>

</script>

<main class="grid">
<div class="xl_element">
<li style="margin-left:10px;">
    0
</li>
</div>

<div class="medium_elements">
  <li>
    1
  </li>
  <li>
    2
  </li>
  <li>
    3
  </li>
</div>
<div class="small_element">
    <li>
        4
    </li>
</div>
</main>

<style>
.grid{
    display:flex;
    margin:auto;
    flex-wrap: wrap;
    align-content:space-between;
    width:70%;
    height:60%;
    background-color:black;
    position:relative;
}
.xl_element{
    display:flex;
    justify-self:top;
    
    background-color:blue;
   
    height:25%;
    width:100%;
}
.medium_elements{
    display:grid;
    margin: auto;
    margin-bottom:170px;
    color:black;
    grid-gap:50px;
    grid-template-columns: repeat(3,325px);
    grid-template-rows: repeat(1,190px);
        
   
}
.medium_elements > li {
    background-color: magenta;
}
.small_element{
    display:grid;
    
}
</style>