if (document.getElementById("tech-name")) {
    const techData = [
        {
        name: "Launch vehicle",
        description:
            "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
        image: "image-launch-vehicle",
        },
        {
        name: "Spaceport",
        description:
            "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft. Based in the United States, our spaceport is a state-of-the-art facility capable of handling frequent commercial space launches.",
        image: "image-spaceport",
        },
        {
        name: "Space capsule",
        description:
            "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter Earth's atmosphere without wings. Our capsule is where you'll spend your journey to space. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
        image: "image-space-capsule",
        }
    ];

const techBtns = document.querySelectorAll(".tech-btn");
const techName = document.getElementById("tech-name");
const techDesc = document.getElementById("tech-desc");
const techImg = document.getElementById("tech-img");
const techImgWebp = document.getElementById("tech-img-webp");

let currentTech = 0;

function updateTech(index) {
    const tech = techData[index];
    currentTech = index;

    techName.textContent = tech.name.toLowerCase();
    techDesc.textContent = tech.description;
    techImg.src = `../assets/technology/${tech.image}-portrait.jpg`;
    techImg.alt = tech.name;
    techImgWebp.srcset = `../assets/technology/${tech.image}-landscape.jpg`;

    techBtns.forEach((btn, i) => {
    btn.classList.remove("bg-white", "text-black");
    btn.classList.add("text-white/50");
    if (i === index) {
        btn.classList.remove("text-white/50");
        btn.classList.add("bg-white", "text-black");
    }
    });
}

 techBtns.forEach(btn => {
    btn.addEventListener("click", () => {
    updateTech(Number(btn.dataset.index));
    });
});

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
    currentTech = (currentTech + 1) % techData.length;
    updateTech(currentTech);
    }

    if (e.key === "ArrowLeft") {
    currentTech = (currentTech - 1 + techData.length) % techData.length;
    updateTech(currentTech);
    }
});

updateTech(0);
}
