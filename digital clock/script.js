let time=document.getElementById("time")
let d=document.getElementById("date")
let ampm=document.getElementsByClassName("ampm")
function gettime(){
    let now=new Date()
    
    let hours=now.getHours()
    let minutes=now.getMinutes()
    let second=now.getSeconds()
    let year=now.getFullYear()
    let month=now.getMonth()
    let date=now.getDate()
    
    
    if(hours>=12){
        ampm[0].innerText="PM"
    }
    else{
        ampm[0].innerText="AM"
    }
    
    hours=String(hours).padStart(2,"0")
    minutes=String(minutes).padStart(2,"0")
    second=String(second).padStart(2,"0")
    year=String(year).padStart(4,"0")
    month=String(month).padStart(2,"0")
    date=String(date).padStart(2,"0")
    time.innerText=(`${hours}:${minutes}:${second}`)
    d.innerText=(`${date}:${month}:${year}`)

}
setInterval(gettime, 1000)