const requestURL = "/xml/info.xml"; 

function Open(){
const xhr = new XMLHttpRequest(); 
 
xhr.open('GET',requestURL , false); 
xhr.send(); 
 
let xmlData = xhr; 
xmlData = (new DOMParser()).parseFromString(xhr.responseText, "text/xml"); 

let hashA = window.location.hash.substring(1);
let list = xmlData.getElementById(hashA);

document.getElementById('title').textContent=list.getElementsByTagName('name')[0].textContent;
document.getElementById('article').textContent=list.getElementsByTagName('text')[0].textContent;

let pictures1 = document.querySelectorAll('[class^="photo-card1"]');
let newImage = list.getElementsByTagName('pica')[0].textContent;
pictures1[0].src = newImage;
let pictures2 = document.querySelectorAll('[class^="photo-card2"]');
let newImage2 = list.getElementsByTagName('picb')[0].textContent;
pictures2[0].src = newImage2;
let pictures3 = document.querySelectorAll('[class^="photo-card3"]');
let newImage3 = list.getElementsByTagName('picc')[0].textContent;
pictures3[0].src = newImage3;
let pictures4 = document.querySelectorAll('[class^="photo-card4"]');
let newImage4 = list.getElementsByTagName('picd')[0].textContent;
pictures4[0].src = newImage4;
let pictures5 = document.querySelectorAll('[class^="photo-card5"]');
let newImage5 = list.getElementsByTagName('pice')[0].textContent;
pictures5[0].src = newImage5;
let pictures6 = document.querySelectorAll('[class^="photo-card6"]');
let newImage6 = list.getElementsByTagName('picf')[0].textContent;
pictures6[0].src = newImage6;
let pictures7 = document.querySelectorAll('[class^="photo-card7"]');
let newImage7 = list.getElementsByTagName('picg')[0].textContent;
pictures7[0].src = newImage7;
let pictures8 = document.querySelectorAll('[class^="photo-card8"]');
let newImage8 = list.getElementsByTagName('pich')[0].textContent;
pictures8[0].src = newImage8;
let pictures9 = document.querySelectorAll('[class^="photo-card9"]');
let newImage9 = list.getElementsByTagName('pici')[0].textContent;
pictures9[0].src = newImage9;
let pictures10 = document.querySelectorAll('[class^="photo-card10"]');
let newImage10 = list.getElementsByTagName('picj')[0].textContent;
pictures10[0].src = newImage10;
let pictures11 = document.querySelectorAll('[class^="photo-card11"]');
let newImage11 = list.getElementsByTagName('pick')[0].textContent;
pictures11[0].src = newImage11;
let pictures12 = document.querySelectorAll('[class^="photo-card12"]');
let newImage12 = list.getElementsByTagName('picm')[0].textContent;
pictures12[0].src = newImage12;
console.log(xmlData);
}
window.addEventListener('hashchange', Open);

Open();
