function tampilkanGif() {
    let gifHTML = "";

    if (count >= 10) {
        gifHTML = `<img src="https://media.tenor.com/lfDATg4Bhc0AAAAM/happy-cat.gif" class="w-64 rounded-xl shadow-lg">`;
    } else if (count >= 5) {
        gifHTML = `<img src="https://media.tenor.com/pdX9YTI4_eoAAAAM/cat-cat-with-tongue.gif" class="w-64 rounded-xl shadow-lg">`;
    } else if (count >= 3) {
        gifHTML = `<img src="https://media.tenor.com/U3no6l5qz7YAAAAM/shock-cat-shock.gif" class="w-64 rounded-xl shadow-lg">`;
    } else {
        gifHTML = "";
    }

    gifContainer.innerHTML = gifHTML;
}

function tambah(){
    count++;
    number.innerText = count;
    tampilkanGif();
}

function kurang(){
    count--;
    number.innerText = count;
    tampilkanGif();
}

btnTambah.addEventListener("click", tambah);
btnKurang.addEventListener("click", kurang);