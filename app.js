//Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0 хоёрдугаар тоглогчийг 1 гэж тэмдэглэе
var activePlayer = 1;
//Тоглогчдын цуглуулсан оноог хадгалах хувьсагч 
var scores = [0,0];
// Тоглогчийн ээлжиндээ цуглуулаж байгаа оноог хадгалах хувьсагч 
var roundScore = 0;
// Шооны аль талаараа буусаныг хадгалах хувьсагч хэрэгтэй 1-6 гэсэн утгыг энэ
//санамсаргүйгээр үүсгэж өгнө
var dice = Math.floor( Math.random()*6)+1;


//Програм эхлэхэд бэлтгэе
document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;

document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;


document.querySelector(".dice").style.display = "none";

