console.log("Script Running")

let button = document.querySelector("#RULES")
console.log(button)
let p = document.querySelector("#R")
console.log(p)

button.addEventListener("click",function(event){
  p.textContent = "Do not bunt to break up a no-hitter(moving soon!)"
})

let img = document.querySelector(".img")
console.log(img)


img.addEventListener("mouseover",function(event){
  img.src = "https://imageio.forbes.com/specials-images/imageserve/64d1701ce386a6b0e8de498f/APTOPIX-White-Sox-Guardians-Baseball/0x0.jpg?crop=1969,1108,x0,y81,safe&height=400&width=711&fit=bounds"
})


img.addEventListener("mouseout",function(event){
  img.src = "https://img.mlbstatic.com/mlb-images/image/private/ar_16:9,g_auto,q_auto:good,w_1536,c_fill,f_jpg/mlb/xadjqvxdyyxbrewq3kqr"
})



let ruels= document.querySelectorAll(".ruels")


for (let i =0;i <ruels.length;i++){
    ruels[i].addEventListener("click",function
 (event){ ruels[i].style.color ="blue"                      
        })
}
