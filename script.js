 let months= ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]
let weeks=["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]

let hours=document.getElementById("hrs")
let minutes=document.getElementById("mins")
let seconds=document.getElementById("sec")
let day=document.getElementById("day")
let ampm=document.getElementById("am-pm")
let month=document.getElementById("mon")
let year=document.getElementById("year")
let date=document.getElementById("date")

setInterval(()=>{


let time= new Date
hours.innerHTML=time.getHours()
minutes.innerHTML=(time.getMinutes()<=10?"0":"")+time.getMinutes()
seconds.innerHTML=(time.getSeconds()<10?"0":"")+time.getSeconds()
date.innerHTML=time.getDate()
month.innerHTML=months[time.getMonth()]
day.innerHTML=weeks[time.getDay()]
year.innerHTML=time.getFullYear()
ampm.innerHTML=time.getHours()>=12?"PM":"AM"
},1000)