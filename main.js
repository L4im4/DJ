var cancion
var canvas
var video

function preload(){
cancion=loadSound("Peaches.mp3")
}

function setup(){
canvas=createCanvas(500,500)
canvas.position(600,250)
video=createCapture(VIDEO)
video.hide()

}  

function draw(){
image(video,0 ,0 , 500,500)
}

function start(){
    cancion.play()
    cancion.setVolume(1)
    cancion.rate(1)
}