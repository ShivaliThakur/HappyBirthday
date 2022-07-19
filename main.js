eyeX= 0;
eyeY= 0;

function preload(){
BirthdayCap= loadImage('https://i.postimg.cc/SxpdGTRY/image-removebg-preview-1.png');
}

function setup(){
canvas= createCanvas(300,300);
canvas.position(500,700);
video= createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet= ml5.poseNet(video,modelLoaded);
poseNet.on('pose', gotPoses);

}

function draw(){
    image(video,0,0,300,300);
    image(BirthdayCap,eyeX,eyeY,130,120);
    
}

function take_snapshot(){
    save('filter-image.png');
}

function modelLoaded(){
    console.log("PoseNet is initialised");
}

function gotPoses(results){
if(results.length>0){
console.log(results);
eyeX= results[0].pose.leftEye.x-80;
eyeY= results[0].pose.leftEye.y-150;
}
}