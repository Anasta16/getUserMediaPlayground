const videoEl = document.querySelector('#my-video');
let stream = null; // Init stream bar so we can use it anywhere

const constraints = {
    audio: true, // use your headphones or be prepared for feedback
    video: true
}

// starting point in basically every webRTC app
const getMicAndCamera = async (e) => {
    try {
        stream = await navigator.mediaDevices.getUserMedia(constraints);
        console.log(stream);
    } catch (error) {
        // user denied access to constraints
        console.log('user denied access to constraints');
    }
};

const showMyFeed = (e) => {
    videoEl.srcObject = stream; // this will set our MediaStream (stream) to our <video />
    const tracks = stream.getTracks();
    console.log(tracks);
}

const stopMyFeed = () => {
    const tracks = stream.getTracks();
    tracks.forEach((track) => {
        track.stop(); // disassociates the track with the source
    })
}

document.querySelector('#share').addEventListener('click', (e) => {
    getMicAndCamera(e);
});

document.querySelector('#show-video').addEventListener('click', (e) => {
    showMyFeed(e);
});

document.querySelector('#stop-video').addEventListener('click', (e) => {
    stopMyFeed(e);
});