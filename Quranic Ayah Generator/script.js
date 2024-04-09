
function getAyah(){
    let cacheBuster = Date.now(); // Unique value to prevent caching
    fetch(`https://api.alquran.cloud/v1/ayah/random/en.asad?cache=${cacheBuster}`)
.then(response => response.json())
.then(data =>{
    let para = document.querySelector(".para");
    let btn1 = document.querySelector(".btn1");
    let btn2 = document.querySelector(".btn2");

    para.innerHTML = data["data"]["text"];
    btn1.innerHTML = `Surah: ${data["data"]["surah"]["englishName"]}`;
    btn2.innerHTML = `Ayah No : ${data["data"]["surah"]["number"]}`;
})
}

document.querySelector(".btn").addEventListener("click", getAyah);
