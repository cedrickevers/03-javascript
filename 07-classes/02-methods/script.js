/* becode/javascript
 *
 * /07-classes/02-methods/script.js - 7.2: méthodes
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    class Person{
    	costructor(Firstname,lastname){
    		this.firstname = firstname;
    		this.lastname = lastname;
    		this
    	}
    	get fullname() {
    return this.firstname + " " + this.lastname;
  }

    }


    let moi = new Person("miakis", "Sora");
    moi.firstname ="miakis";
    moi.lastname ="miakis";

    console.log(moi.fullname);


})();
