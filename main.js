let health = document.getElementById("health");
let drink = document.getElementById("drink");
let energy = document.getElementById("energy");
let happiness = document.getElementById("happiness");
let game = document.getElementById("game");
let name = document.getElementById("name");
let dogPicture = "./PiskelArt/Dog.gif";
let catPicture = "./PiskelArt/Cat.gif";
let animalType = "Cat";


let drink1 = drink.value;
let health1 = health.value;
let game1 = game.value;
let happiness1 = happiness.value;
let energy1 = energy.value;
const d = new Date();
    let time1 = d.getTime();
  
    function start(){setTimeout(function(){

     // document.getElementById('lifeSpan').style.visibility = "hidden"
    
    if(  document.getElementById("health").value != 0 ){
  if(  document.getElementById("energy").value != 0  ){
   document.getElementById('eatBtn').style.visibility = "visible";
         document.getElementById('drinkBtn').style.visibility = "visible";
         document.getElementById('gameBtn').style.visibility = "visible";
        document.getElementById("drink").value -= 10;
        if(document.getElementById("energy").value <= 50 || document.getElementById("drink").value <=50){
         if (document.getElementById("energy").value ===0  || document.getElementById("drink").value === 0)
         {document.getElementById("health").value === 0;}
         document.getElementById("health").value -= 20;
        }
       document.getElementById("happiness").value -= 5;
       
      document.getElementById("game").value -= 5;
      document.getElementById("energy").value -= 10;
     console.log(document.getElementById("drink").value);
     if(document.getElementById("health").value <= 60 || document.getElementById("energy").value <= 60){
      document.getElementById('animalStatusText').innerText = `You are sad`
     }

    }


    else if ( document.getElementById("energy").value === 0){
        console.log(document.getElementById("health").value)
        console.log("loss")
        const petDied = () => {
        
         
        
        document.getElementById('animalStatusText').textContent = `You are die`
        document.getElementById("drink").value = 0;
        document.getElementById("happiness").value = 0;
        document.getElementById("health").value = 0;
       document.getElementById("game").value = 0;
       document.getElementById("energy").value = 0;
       document.getElementById('animalStatusText').innerText = `You are die`

       document.getElementById('eatBtn').style.visibility = "hidden";
       document.getElementById('drinkBtn').style.visibility = "hidden";
         document.getElementById('gameBtn').style.visibility = "hidden";
       
       return;
     }
     petDied();
        return;  
     
     }
     
         }
         else {
             console.log(document.getElementById("health").value)
        console.log("loss")
        const petDied = () => {
        
         
         document.getElementById('animalStatusText').textContent = `You are die`
         document.getElementById('eatBtn').style.visibility = "hidden";
         document.getElementById('drinkBtn').style.visibility = "hidden";
         document.getElementById('gameBtn').style.visibility = "hidden";
         document.getElementById("drink").value = 0;
         document.getElementById("happiness").value = 0;
         document.getElementById("health").value = 0;
        document.getElementById("game").value = 0;
        document.getElementById("energy").value = 0;
        
         
         return;
     }
     petDied();
        return;  
         }
     
           start();
         }, 1000);
     }
  
    

class Cyberpet {
    constructor(name) {
        this.name = name;
        
       
    }

    drink() {
        this.name;
       drink.value += 2;
       document.getElementById("energy").value += 5;
       let drink1 = drink.value
       console.log(drink1);
       
       return this;

        
    }

    eat() {
        this.name;
       health.value += 2;
       document.getElementById("energy").value += 2;
       let health1 = health.value
       console.log(health1);
     
       
        
       return this;
        
    }

   

 game() {
        this.name;
        
       game.value += 2;
       document.getElementById("energy").value -= 5;
       document.getElementById("happiness").value += 2;
     
       console.log(game1);
        
       return this;
        
    }
    
}


document.getElementById('eatBtn').addEventListener('click', () => {
   let name = document.getElementById("name").value
   
  const pet = new Cyberpet (name)
    
pet.eat(name)
 console.log( pet.eat(name));
})

document.getElementById('drinkBtn').addEventListener('click', () => {
   let name = document.getElementById("name").value
  
  const pet = new Cyberpet (name)
    
pet.drink(name)
 console.log( pet.drink(name));
})



document.getElementById('gameBtn').addEventListener('click', () => {
   let name = document.getElementById("name").value
   
  const pet = new Cyberpet (name)
    
pet.game(name)
 console.log( pet.game(name));

 console.log(health1);

})

document.getElementById('dogButton').addEventListener('click', function() {
   document.getElementById("startMenuAnimalPicture").src = dogPicture;
   document.getElementById("animalPicture").src = dogPicture;
   animalType = "Dog";
});

document.getElementById('catButton').addEventListener('click', function() {
   document.getElementById("startMenuAnimalPicture").src = catPicture;
   document.getElementById("animalPicture").src = catPicture;
   animalType = "Cat";
});

document.getElementById('start').addEventListener('click', function() {
  
   document.getElementById('mainGame').style.display = "flex";
   document.getElementById('overlay').style.display = "none";
   
   setTimeout(function() {
   
   document.getElementById("petNameTitle").textContent = document.getElementById("name").value;
   document.getElementById("petTypeTitle").textContent = animalType;
   
   document.getElementById("drink").value = 100;
   document.getElementById("health").value = 100;
   document.getElementById("game").value = 100;
   document.getElementById("happiness").value = 100;
   document.getElementById("energy").value = 100;
  
   start();
},500)
});

if(document.getElementById("health").value >= 60 || document.getElementById("energy").value >= 60 ){

   document.getElementById('animalStatusText').innerText = `Happy` 
}
else if(document.getElementById("health").value >= 60 )  {
   
   console.log(health1)
   document.getElementById('animalStatusText').innerText = `happy` 
}





//document.getElementById('namePlease').style.visibility = "hidden"
