function setup() {
    video = createCapture(VIDEO)
    video.size = (500,500)
    
    canvas = createCanvas(500,470)
    canvas.position = (560,150)
    
    poseNet = ml5.poseNet(video,modelloaded)
    }
    function draw() {
    background('red');
    }
    function modelloaded() {
    console.log('pose net is loaded')
    }
    
    function gotPoses(results)
    {
    if (results.lenght > 0)
    {
    console.log('results')
    }
    }
    