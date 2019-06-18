/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    let date = new  Date();
    let dateY = date.getFullYear();
    let dateM = date.getMonth();
    let dateD = date.getDate();

    let age;

    let ageY =document.getElementById('dob-year').value;
    let ageM =document.getElementById('dob-month').value;
    let ageD =document.getElementById('dob-day').value;

    let launch = document.getElementById("run");


 

launch.addEventListener("click", function(){

	ageY = dateY - ageY;
	alert(ageY);
    ageM= dateM - ageM;
    ageD= dateD - ageD;
	alert("Tu as "  + ageY + "ans " + ageM  + "mois  et " + ageD  + "jour(s)");
})

   
    
})();
