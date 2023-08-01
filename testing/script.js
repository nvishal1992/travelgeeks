const bookPages = document.getElementById("bookPages");
let currentPage = 0;

function addPage(imageSrc) {
    const pageDiv = document.createElement("div");
    pageDiv.classList.add("page-overlay");

    const pageImg = document.createElement("img");
    pageImg.src = imageSrc;
    pageImg.classList.add("page-image");

    pageDiv.appendChild(pageImg);
    bookPages.appendChild(pageDiv);
}

function turnPage() {
    const bookContainer = document.querySelector(".book-container");
    const pageOverlays = document.querySelectorAll(".page-overlay");
    const bookCover = document.querySelector(".book-cover");

    bookContainer.style.pointerEvents = "none";

    bookCover.style.transition = "transform 0.5s";
    bookCover.style.transform = "rotateY(90deg)";

    setTimeout(() => {
        pageOverlays[currentPage].style.transition = "transform 0.5s";
        pageOverlays[currentPage].style.transform = "rotateY(0deg)";

        currentPage = (currentPage + 1) % pageOverlays.length;

        bookCover.style.transition = "none";
        bookCover.style.transform = "rotateY(-90deg)";

        bookContainer.style.pointerEvents = "auto";
    }, 500);
}

function handleFileSelect(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function () {
            addPage(reader.result);
        };
        reader.readAsDataURL(file);
    }
}
