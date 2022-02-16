let yourName = "Zachary Dowell" 
let gb = 0    
let cc = 0      
let sugar = 0   
document.getElementById('credit').textContent = `Created by ${yourName}`



document.getElementById('add-gb').addEventListener('click', function() {
    let plusButton =document.querySelector('.add-gb');
    
        gb += 1;
        document.getElementById('qty-gb').textContent = gb;
        document.getElementById('qty-total').textContent= gb + cc+ sugar;
})


document.getElementById('minus-gb').addEventListener('click', function() {
    if(gb > 0) {
    gb -= 1;
    }
        document.getElementById('qty-gb').textContent = gb;
        document.getElementById('qty-total').textContent= gb + cc+ sugar;
       
        
})


document.getElementById('add-cc').addEventListener('click', function(){
    let plusButton =document.querySelector('.add-cc');
    cc +=1;
    document.getElementById('qty-cc').textContent = cc;
    document.getElementById('qty-total').textContent= gb + cc+ sugar;
    

})


document.getElementById('minus-cc').addEventListener('click', function() {
    
    if(cc > 0) {
        cc -= 1;
    }
        document.getElementById('qty-cc').textContent = cc;
        document.getElementById('qty-total').textContent= gb + cc+ sugar;
       
      
})


document.getElementById('add-sugar').addEventListener('click', function(){
    let plusButton =document.querySelector('.add-sugar');
    sugar +=1 ;
    document.getElementById('qty-sugar').textContent = sugar;
    document.getElementById('qty-total').textContent= gb + cc+ sugar;
    
   
})


document.getElementById('minus-sugar').addEventListener('click', function() {
  
    if(sugar > 0) {
        sugar -= 1;
    }
        document.getElementById('qty-sugar').textContent = sugar;
        document.getElementById('qty-total').textContent= gb + cc+ sugar;
       
    
})