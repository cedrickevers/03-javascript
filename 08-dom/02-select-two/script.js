/* becode/javascript
 *
 * /08-dom/02-select-two/script.js - 8.2: sélection par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
   // let owned = document.getElementsByTagName("p");
   // console.log(owned);
   // let i = 0;
   // for(let target in owned){
   // 	if (target.Id= "target"){
   // 		i++;
   // 		target[0].textContent = "Owned";

   // 	}
   // }

     let owned = document.getElementsByTagName("p");
   console.log(owned);
   let total = owned.length;
   for(let i = 0; i < total; i++ ){
   	if (owned[i].Id= "target"){
   		owned[i].textContent = "Owned";
   	}
   }
})();
