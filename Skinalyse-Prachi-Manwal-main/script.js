const btn0 = document.getElementById('cta');
const btn1 = document.getElementById('cta1');
const btn2 = document.getElementById('cta2');
const btn3 = document.getElementById('submit-btn');
const fileInput = document.getElementById('image');
const previewImage = document.getElementById('preview');

btn0.addEventListener('click', () => {
    alert('Thank you for your interest! You will receive your instant result shortly.');
    btn0.style.display = 'none';
});

btn1.addEventListener('click', () => {
    captureImage();
    btn1.style.display = 'none';
});

btn2.addEventListener('click', () => {
    uploadImage();
    btn2.style.display = 'none'; 
});

btn3.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Your message has been sent successfully!');
    btn3
});

function captureImage() {
    // This function is now handled within the btn1 event listener
    if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
        navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            const video = document.createElement('video');
            video.srcObject = stream;
            video.play();
            document.getElementById('camera-container').appendChild(video);

            const captureButton = document.getElementById('capture-btn');
            captureButton.style.display = 'block';
            captureButton.onclick = () => {
                const canvas = document.createElement('canvas');
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                const dataURL = canvas.toDataURL('image/png');
                previewImage.src = dataURL;
                previewImage.style.display = 'block';
                stream.getTracks().forEach(track => track.stop());
                video.remove();
                captureButton.style.display = 'none';
            };
        })
        .catch(err => {
            console.error('Error accessing camera: ', err);
            alert('Unable to access camera. Please use image upload instead.');
        });
    };
}

function uploadImage() {
    document.getElementById('image').onchange = e => {
    const reader = new FileReader();
    reader.onload = e => {
        document.getElementById('preview').src = e.target.result;
        document.getElementById('preview').style.display = 'block';
    }
    reader.readAsDataURL(e.target.files[0]);
    };
}