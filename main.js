function setup()
{
    canvas = createCanvas(550, 550);
    canvas.position(560, 160);
    video = createCapture(VIDEO);
    video.size(550, 500);
    PoseNet = ml5.PoseNet(video, modelLoaded);
    PoseNet.on('Pose' , gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet is Initialized");
}

difference = 0;
rightWristX = 0;
leftWristX = 0;


