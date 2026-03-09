const menu = document.getElementById("menu");
const levelPage = document.getElementById("levelPage");
const levelTitle = document.getElementById("levelTitle");
const story1 = document.getElementById("story1");
const story2 = document.getElementById("story2");
const story3 = document.getElementById("story3");

function openLevel(level){

menu.style.display="none";
levelPage.classList.remove("hidden");

levelTitle.innerText="Level " + level;

/* STORIES FOR EACH LEVEL */

if(level === 1){

story1.innerText="Story for level 1";
story2.innerText="More explanation for level 1";
story3.innerText="Ending of level 1";

}

if(level === 2){

story1.innerText="Story for level 2";
story2.innerText="More explanation for level 2";
story3.innerText="Ending of level 2";

}

if(level === 3){

story1.innerText="Story for level 3";
story2.innerText="More explanation for level 3";
story3.innerText="Ending of level 3";

}

}

function goBack(){

menu.style.display="block";
levelPage.classList.add("hidden");

}
