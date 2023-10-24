var video = document.getElementById("video");

video.addEventListener("touchstart", capture);
video.addEventListener("mousedown", capture);

function on_cam_success(stream)
{
    video.srcObject = stream;
}

function on_cam_error(err)
{
    alert("Error. "+err.message);
}

var constraints = { audio: false, video: true };
navigator.mediaDevices.getUserMedia(constraints)
.then(on_cam_success)
.catch(on_cam_error);

function capture()
{
    var c = document.getElementById("canvas");
    c.width = video.width;
    c.height = video.height;
    var ctx = c.getContext("2d");
    ctx.drawImage(video, 0, 0, 640, 480);
}