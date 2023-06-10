var cancion
var canvas
var video
var post
var leftx
var lefty
var rightx
var righty

function preload(){
cancion=loadSound("Peaches.mp3")
}

function setup(){
canvas=createCanvas(500,500)
canvas.position(600,250)
video=createCapture(VIDEO)
video.hide()
post=ml5.poseNet(video, model)
post.on("pose", posiciones)
}  

function posiciones(res){
console.log(res)
leftx=res[0].pose.leftWrist.x
lefty=res[0].pose.leftWrist.y
rightx=res[0].pose.rightWrist.x
righty=res[0].pose.rightWrist.y
}

function model(){
console.log("Model Loaded!")
}


function draw(){
image(video,0 ,0 , 500,500)
fill("red")
circle(leftx, lefty, 20)
fill("green")
circle(rightx, righty, 20)

if (lefty >0 && lefty <100) {
document.getElementById("volumen").innerHTML="El volumen es de 1"
cancion.setVolume(1)
}
else if(lefty >100 && lefty <200){
    document.getElementById("volumen").innerHTML="El volumen es de 0.8"
    cancion.setVolume(0.8)
}
else if(lefty >200 && lefty <300){
    document.getElementById("volumen").innerHTML="El volumen es de 0.6"
    cancion.setVolume(0.6)
}
else if(lefty >300 && lefty <400){
    document.getElementById("volumen").innerHTML="El volumen es de 0.4"
    cancion.setVolume(0.4)
}
else if(lefty >400 && lefty <500){
    document.getElementById("volumen").innerHTML="El volumen es de 0.2"
    cancion.setVolume(0.2)
}




}

function start(){
    cancion.play()
    cancion.setVolume(1)
    cancion.rate(1)
}

function Stp() {
    cancion.stop()
}