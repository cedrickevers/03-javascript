/* becode/javascript
 *
 * /08-dom/03-select-three/script.js - 8.3: sélection multiple par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    // let owned = document.getElementsByTagName("p");
    // let total = owned.length;
    // for(let i = 0; i < total; i++ ){
    // 	console.log(owned.class;
    // 	if(owned[i].className = "target"){
    // 		owned[i].textContent = "owned";
    // 	}
    	
    // } 

    let owned = document.getElementsByClassName("target");
    for (let i = 0; i < owned.length; i ++){
         owned[i].textContent= "owned";
    }
})();
