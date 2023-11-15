let container = document.querySelector('.text')
let vid1,vid2 ;


let btn1 = document.querySelector('.play');
let btn2 = document.querySelector('.open-camera');

btn1.onclick =()=>{
    vid1 = document.querySelector(".vid1")
    vid2 = document.querySelector(".vid2")
    vid2.pause()
    vid1.style.display = 'block'
    vid2.style.display = 'none'
    vid1.src = './images/Can You Hear The Music.mp4';
    vid1.play()
}
btn2.onclick =async()=>{
    let stream = null;

    vid1 = document.querySelector(".vid1")
    vid2 = document.querySelector(".vid2")
    vid1.pause()
    vid1.style.display = 'none'
    vid2.style.display = 'block'
    try {
        stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true
        })
        vid2.srcObject = stream;
        
        vid2.play()
    } catch (error) {
        vid1.style.display = 'block'
        vid2.style.display = 'none'
        vid1.src = './images/Can You Hear The Music.mp4'
    }
}
