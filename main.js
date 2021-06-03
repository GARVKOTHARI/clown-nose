noseX = 0;
noseY = 0;


function preload() {
    clown_nose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}

function setup() {
    canvas = createCanvas(500 , 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500 , 500);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function modelLoaded() {
    console.log("PoseNet is initialized");
}

function draw() {
    image(video, 0, 0, 500, 500);

    image(clown_nose, noseX, noseY, 30, 30);
}

function gotPoses(Results) {


    if(Results.length>0) {
        console.log(Results);

        noseX = Results[0].pose.nose.x-15;
        noseY = Results[0].pose.nose.y-15;
        console.log("nose x = " + Results[0].pose.nose.x);
        console.log("nose y = " + Results[0].pose.nose.y);
    }
    
}

function take_snapshot() {
    save('my filter face.png');
} 