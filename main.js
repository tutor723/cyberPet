//Element storage
let health = document.getElementById("health");
let drink = document.getElementById("drink");
let energy = document.getElementById("energy");
let happiness = document.getElementById("happiness");
let game = document.getElementById("game");
let name = document.getElementById("name");
let dogPicture = "./PiskelArt/Dog.gif";
let catPicture = "./PiskelArt/Cat.gif";
let gameOverPicture = "./PiskelArt/GameOver.gif";
let animalType = "Dog";

//
let drink1 = drink.value;
let health1 = health.value;
let game1 = game.value;
let happiness1 = happiness.value;
let energy1 = energy.value;

//Time management
const d = new Date();
    let time1 = d.getTime();
  
    function start(){setTimeout(function(){

     // document.getElementById('lifeSpan').style.visibility = "hidden"
    

     //
    if(  document.getElementById("health").value != 0 ){
  if(  document.getElementById("energy").value != 0  ){
   document.getElementById('eatBtn').style.visibility = "visible";
         document.getElementById('drinkBtn').style.visibility = "visible";
         document.getElementById('gameBtn').style.visibility = "visible";
        document.getElementById("drink").value -= 7;
        if(document.getElementById("energy").value <= 50 || document.getElementById("drink").value <=50){
         if (document.getElementById("energy").value ===0  || document.getElementById("drink").value === 0)
         {document.getElementById("health").value = 0;}
         document.getElementById("health").value -= 10;
        }
       document.getElementById("happiness").value -= 6;
       
      document.getElementById("game").value -= 5;
      document.getElementById("energy").value -= 4;
   //   console.log(document.getElementById("drink").value);
     if(document.getElementById("health").value <= 60 || document.getElementById("energy").value <= 60 || document.getElementById("happiness").value < 50){
      document.getElementById('animalStatusText').innerText = `${document.getElementById("petNameTitle").textContent} is sad`
     }

    }


    else if ( document.getElementById("energy").value === 0){
      //   console.log(document.getElementById("health").value)
      //   console.log("loss")

      //Pet death function
        const petDied = () => {
        
         
        //Sets animal status and picture
        document.getElementById('animalStatusText').textContent = `${document.getElementById("petNameTitle").textContent} Died`
        document.getElementById("animalPicture").src = gameOverPicture;

        //Sets all animal values to 0
        document.getElementById("drink").value = 0;
        document.getElementById("happiness").value = 0;
        document.getElementById("health").value = 0;
       document.getElementById("game").value = 0;
       document.getElementById("energy").value = 0;

      
      //  document.getElementById('animalStatusText').innerText = `${document.getElementById("petNameTitle").textContent} Died`
      //  document.getElementById("animalPicture").src = gameOverPicture;

      //Hide game buttons on death
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
      //        console.log(document.getElementById("health").value)
      //   console.log("loss")

      //Pet death function again
        const petDied = () => {
        
         
         document.getElementById('animalStatusText').textContent = `${document.getElementById("petNameTitle").textContent} Died`
         document.getElementById("animalPicture").src = gameOverPicture;

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
       health.value += 2;
       document.getElementById("drink").value += 3;
       let drink1 = drink.value
      //  console.log(drink1);

       return this;
    }

    eat() {
        this.name;
       health.value += 2;
       document.getElementById("energy").value += 3;
       let health1 = health.value
      //  console.log(health1);
       game.value += 4;
       
       return this;
        
    }

 game() {
        this.name;
        
      
       document.getElementById("energy").value -= 3;
       document.getElementById("drink").value -= 2;

       document.getElementById("happiness").value += 3;
     
      //  console.log(game1);
        
       return this;
    }
}

class DogClass extends Cyberpet {
   constructor(name) {
      super(name);
   }

   playFetch() {
      this.name;
        
      
      document.getElementById("energy").value -= 3;
      document.getElementById("drink").value -= 2;

      document.getElementById("happiness").value += 3;
    
      // console.log(game1);
       
      return this;
   }
}

class CatClass extends Cyberpet {
   constructor(name) {
      super(name);
   }

   playWithToy() {
      this.name;
        
      
      document.getElementById("energy").value -= 3;
      document.getElementById("drink").value -= 2;

      document.getElementById("happiness").value += 3;
    
      // console.log(game1);
       
      return this;
   }
};



//Eat button functionality
document.getElementById('eatBtn').addEventListener('click', () => {
   let name = document.getElementById("name").value
   const pet = new Cyberpet (name);
   pet.eat(name)

   // console.log(pet.eat(name));
});

//Drink button functionality
document.getElementById('drinkBtn').addEventListener('click', () => {
   let name = document.getElementById("name").value;
   
   const pet = new Cyberpet (name);
   
pet.drink(name);

//  console.log( pet.drink(name));
});


//Play button functionality
document.getElementById('gameBtn').addEventListener('click', () => {
   let name = document.getElementById("name").value
   
  const pet = new Cyberpet (name)
    
pet.game(name)

//  console.log( pet.game(name));

//  console.log(health1);

})

//Sets images and text of the game based on whether a cat or dog is chosen
document.getElementById('dogButton').addEventListener('click', function() {
   document.getElementById("startMenuAnimalPicture").src = dogPicture;
   document.getElementById("animalPicture").src = dogPicture;
   document.getElementById("gameBtn").textContent = "Play Fetch";
   animalType = "DOG";
});

//Sets images and text of the game based on whether a cat or dog is chosen
document.getElementById('catButton').addEventListener('click', function() {
   document.getElementById("startMenuAnimalPicture").src = catPicture;
   document.getElementById("animalPicture").src = catPicture;
   document.getElementById("gameBtn").textContent = "Play With Toy";
   animalType = "CAT";
});

//Start game functionality
document.getElementById('start').addEventListener('click', function() {
  
   //Hides start menu, displays main game screen
   document.getElementById('mainGame').style.display = "flex";
   document.getElementById('overlay').style.display = "none";
   
   //Sets text to display animal name and type
   document.getElementById("petNameTitle").textContent = document.getElementById("name").value.toUpperCase();
   document.getElementById("petTypeTitle").textContent = animalType;
   
   //Sets all starting values to default
   document.getElementById("drink").value = 100;
   document.getElementById("health").value = 100;
   document.getElementById("game").value = 100;
   document.getElementById("happiness").value = 100;
   document.getElementById("energy").value = 100;

   //If health is > 60, animal is happy else animal is 
   if(document.getElementById("health").value >= 60 || document.getElementById("energy").value >= 60 ){

   document.getElementById('animalStatusText').innerText = `${document.getElementById("name").value} is Happy` 
}
// else if(document.getElementById("health").value >= 60 )  {
   
//    console.log(health1)
//    document.getElementById('animalStatusText').innerText = `${document.getElementById("name").value} is Happy` 
// }

   start();


});






//document.getElementById('namePlease').style.visibility = "hidden"
