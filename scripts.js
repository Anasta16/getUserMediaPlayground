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

document.querySelector('#share').addEventListener('click', (e) => {
    getMicAndCamera(e);
})