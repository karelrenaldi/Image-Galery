const gallery = document.querySelector(".gallery");
const overlay = document.querySelector(".overlay-outer");
const overlayImage = overlay.querySelector("img");
const overlayClose = overlay.querySelector(".close");

// h for horizontal and v for vertical
function generateHtml([h, v]) {
    return `
    <div class="item h${h} v${v}">
        <img src="images/${randomNumber(12)}.jpg">
            <div class="item__overlay">
            <button class="view-button">view ⇏</button>
        </div>
    </div>
    `;
}

function randomNumber(limit) {
    return Math.floor(Math.random() * limit) + 1;
}

const holedDigits = Array.from({ length: 30 }, () => [1, 1]);

const digits = Array.from({ length: 50 }, () => [
    randomNumber(4),
    randomNumber(4),
    ]).concat(holedDigits);

const html = digits.map((size) => generateHtml(size)).join("");
gallery.insertAdjacentHTML("afterbegin", html);

const viewButtons = document.querySelectorAll(".view-button");

viewButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        overlay.classList.add("open");
        nowButton = e.currentTarget;
        imageSrc = nowButton.closest(".item").querySelector("img").src;
        overlayImage.src = imageSrc;
    });
});

overlayClose.addEventListener("click", () => {
    overlay.classList.remove("open");
});

overlay.addEventListener('click',(e)=>{
    const isInner = e.target.closest(".overlay-inner");
    isInner ? null : overlay.classList.remove("open");
});