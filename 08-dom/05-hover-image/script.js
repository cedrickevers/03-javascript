/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    let img = document.getElementsByTagName('img')[0];
    let imgSrc = img.getAttribute('src');
    let imgHover = img.getAttribute("data-hover");

    img.addEventListener("mouseover",function(){
   	   img.setAttribute("src", imgHover);
    });

    img.addEventListener("mouseleave",function(){
   	   img.setAttribute("src", imgSrc);
    });
})();
