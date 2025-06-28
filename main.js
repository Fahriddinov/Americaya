let door = document.querySelector('.door');
let bagaj = document.querySelector('.bagaj');
let zavad = document.querySelector('.zavad');
let luk = document.querySelector('.luk');
let kandor = document.querySelector('.kandor');
let secret = document.querySelector('.secret');
let img = document.createElement("img");
img.style.display = "none";

door.addEventListener('click', () => {
    if (door.textContent == 'peysaj rasmini ochirish') {
        door.textContent = 'peysaj rasmini korish';
        img.style.display = "none";
    } else {
        door.textContent = 'peysaj rasmini ochirish';
        img.style.display = "block";
        img.src = "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=";
        document.body.appendChild(img);
    }
})

bagaj.addEventListener('click', () => {
    if (bagaj.textContent == 'bagaj ochirish') {
        bagaj.textContent = 'bagaj korish';
        img.style.display = "none";
    } else {
        bagaj.textContent = 'bagaj ochirish';
        img.style.display = "block";
        img.src = "https://images.unsplash.com/photo-1517758478390-c89333af4642?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhdXRpZnVsJTIwc2t5fGVufDB8fDB8fHww";
        document.body.appendChild(img);
    }
})

zavad.addEventListener('click', () => {
    if (zavad.textContent == 'olov rasmini ochirish') {
        zavad.textContent = 'olov rasmini korish';
        img.style.display = "none";
    } else {
        zavad.textContent = 'olov rasmini ochirish';
        img.style.display = "block";
        img.src = "https://chronicle.brightspotcdn.com/dims4/default/665e255/2147483647/strip/true/crop/10000x4500+0+0/resize/840x378!/quality/90/?url=http%3A%2F%2Fchronicle-brightspot.s3.us-east-1.amazonaws.com%2F6f%2F21%2F0d88b3b74334a1ad8697bb289185%2Fsachs-1129-getty-fb.jpg";
        document.body.appendChild(img);
    }
})

luk.addEventListener('click', () => {
    if (luk.textContent == '...') {
        luk.textContent = 'Americaya';
        img.style.display = "none";
    } else {
        luk.textContent = '...';
        img.style.display = "block";
        img.src = "https://preview.redd.it/rlne7n7ttw061.jpg?width=640&crop=smart&auto=webp&s=f10d886f49a875a44b1163e56a729d5fb98e901d";
        document.body.appendChild(img);
    }
})

kandor.addEventListener('click', () => {
    if (kandor.textContent == 'ozinni rasmini ochirish') {
        kandor.textContent = 'ozinni rasmini korish';
        img.style.display = "none";
    } else {
        kandor.textContent = 'ozinni rasmini ochirish';
        img.style.display = "block";
        img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSld0Vr3bIRwm8YPCUMdU3ZK6FtlrnNLLm1ag&s";
        document.body.appendChild(img);
    }
})

secret.addEventListener('click', () => {
    if (secret.textContent == 'Man etudim') {
        secret.textContent = 'Don\'t click🤫';
        img.style.display = "none";
    } else {
        secret.textContent = 'Man etudim';
        img.style.display = "block";
        img.style.marginTop = "400px";
        img.src = "https://pbs.twimg.com/media/GGhubSSa0AA_ie9.jpg";
        document.body.appendChild(img);
    }
})