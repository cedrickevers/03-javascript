/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }

    }
    // your code here



    class Dog extends Animal{
       	constructor(name){

  		super();/*A appelé before this */
 		this.name= name;
 		this.constructor.greeting ="Bark";
 		
        }
    }   

    document.getElementById("run").addEventListener("click", function(){

    	let firstCast = new Dog;
    	firstCast.name = "test";;
    	console.log(firstCast.sayHello());

    });

    




 

})();
