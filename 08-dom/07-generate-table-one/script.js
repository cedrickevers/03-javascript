/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let target = document.getElementById("target");
    let table = document.createElement("table");
    let trArray = []
    for(let i = 0; i < 10; i++){
    	trArray.push(document.createElement("tr"));
        table.appendChild(trArray[i]);
    }

    let tr = document.createElement("tr");
    let tr2 = document.createElement("tr");
    let td = document.createElement("td");
    td.textContent = "test";







    tr.appendChild(td); 
   
    table.appendChild(tr2); 
   
    target.appendChild(table); 

})();
