var cancion
var canvas
var video
var post
var leftx
var lefty
var rightx
var righty
var nosex
var nosey


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
nosex=res[0].pose.nose.x
nosey=res[0].pose.nose.y

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

if (nosey >0 && nosey <100) {
document.getElementById("volumen").innerHTML="El volumen es de 1"
cancion.setVolume(1)
}
else if(nosey >100 && nosey <200){
    document.getElementById("volumen").innerHTML="El volumen es de 0.8"
    cancion.setVolume(0.8)
}
else if(nosey >200 && nosey <300){
    document.getElementById("volumen").innerHTML="El volumen es de 0.6"
    cancion.setVolume(0.6)
}
else if(nosey >300 && nosey <400){
    document.getElementById("volumen").innerHTML="El volumen es de 0.4"
    cancion.setVolume(0.4)
}
else if(nosey >400 && nosey <500){
    document.getElementById("volumen").innerHTML="El volumen es de 0.2"
    cancion.setVolume(0.2)
}

if (nosex >0 && nosex <100) {
    document.getElementById("velocidad").innerHTML="La velocidad es de 0.5"
    cancion.rate(0.5)
}
else if( nosex >100 && nosex <200){
document.getElementById("velocidad").innerHTML="La velocidad es de 1"
cancion.rate(1)
}
else if( nosex >200 && nosex <300){
    document.getElementById("velocidad").innerHTML="La velocidad es de 1.5"
    cancion.rate(1.5)
    }
    else if( nosex >300 && nosex <400){
        document.getElementById("velocidad").innerHTML="La velocidad es de 2"
        cancion.rate(2)
        }
        else if( nosex >400 && nosex <500){
            document.getElementById("velocidad").innerHTML="La velocidad es de 2.5"
            cancion.rate(2.5)
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