 const shareScreen = async () => {
    const options = {
        video: true,
        audio: false,
        surfaceSwitching: 'include', // include/exclude, NOT a boolean (true/false)
    }
    try {
        mediaStream = await navigator.mediaDevices.getDisplayMedia(options);
    } catch (error) {
        console.log(error);
    }
    // we don't handle all button paths. To do so you'd need to check the dom or have UI framework
    console.log('Clicked')
    changeButtons([
        'green', 'green', 'blue', 'blue', 'green', 'green', 'green', 'green'
    ]);
 }