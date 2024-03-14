 const shareScreen = () => {
    // we don't handle all button paths. To do so you'd need to check the dom or have UI framework
    console.log('Clicked')
    changeButtons([
        'green', 'green', 'blue', 'blue', 'green', 'green', 'green', 'green'
    ]);
 }