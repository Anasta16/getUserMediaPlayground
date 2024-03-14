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
        changeButtons([
            'green', 'blue', 'blue', 'grey', 'grey', 'grey', 'grey', 'grey'
        ])
    } catch (error) {
        // user denied access to constraints
        console.log('user denied access to constraints');
        console.log(error);
    }
};

const showMyFeed = (e) => {
    if (!stream) {
        alert("Stream still loading...");
        return;
    }
    videoEl.srcObject = stream; // this will set our MediaStream (stream) to our <video />
    const tracks = stream.getTracks();
    console.log(tracks);
    changeButtons([
        'green', 'green', 'blue', 'blue', 'blue', 'grey', 'grey', 'blue'
    ]);
}

const stopMyFeed = () => {
    if (!stream) {
        alert("Stream still loading...");
        return;
    }
    const tracks = stream.getTracks();
    tracks.forEach((track) => {
        track.stop(); // disassociates the track with the source
    });
    changeButtons([
        'blue', 'grey', 'grey', 'grey', 'grey', 'grey', 'grey', 'grey'
    ]);
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

document.querySelector('#change-size').addEventListener('click', (e) => {
    changeVideoSize(e);
})

document.querySelector('#start-record').addEventListener('click', (e) => {
    startRecording(e);
})

document.querySelector('#stop-record').addEventListener('click', (e) => {
    stopRecording(e);
})

document.querySelector('#play-record').addEventListener('click', (e) => {
    playRecording(e);
})