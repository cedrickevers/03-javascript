/* becode/javascript
 *
 * /08-dom/09-match-password-one/script.js - 8.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let launch = document.getElementById("run").addEventListener("click", function(){

    	let passOne = document.getElementById("pass-one");
    	let passTwo = document.getElementById("pass-two");

    	if( passTwo.value !== passOne.value){
    		passOne.style.border = " 10px  solid red";
		}    	 
    })
})();
