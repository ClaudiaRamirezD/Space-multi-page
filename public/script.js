const toggleButtons = document.querySelectorAll('[data-collapse-toggle]');
const menu = document.getElementById('mobile-menu-2');

toggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const isHidden = menu.classList.contains('hidden');

        btn.setAttribute('aria-expanded', String(isHidden)); // Actualiza aquí adentro

        if (isHidden) {
            menu.classList.remove('hidden');
            menu.classList.add('flex');
        } else {
            menu.classList.remove('flex');
            menu.classList.add('hidden');
        }
    });
});



const crewData = [
    {
    role: "Commander",
    name: "Douglas Hurley",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    image: "image-douglas-hurley",
    },
    {
    role: "Mission Specialist",
    name: "Mark Shuttleworth",
    bio: "Mark Richard Shuttleworth is the founder of Canonical, the company behind the Linux-based Ubuntu operating system. He became the first South African to travel to space.",
    image: "image-mark-shuttleworth",
    },
    {
    role: "Pilot",
    name: "Victor Glover",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.",
    image: "image-victor-glover",
    },
    {
    role: "Flight Engineer",
    name: "Anousheh Ansari",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. She became the first Iranian in space and the first self-funded woman to fly to the ISS.",
    image: "image-anousheh-ansari",
    }
];

const dots = document.querySelectorAll(".dot");
const role = document.getElementById("crew-role");
const name = document.getElementById("crew-name");
const bio = document.getElementById("crew-bio");
const img = document.getElementById("crew-img");
const imgWebp = document.getElementById("crew-img-webp");


let currentIndex = 0;

function updateCrew(index) {
    const member = crewData[index];
    currentIndex = index;

    role.textContent = member.role.toLowerCase();
    name.textContent = member.name.toLowerCase();
    bio.textContent = member.bio;
    img.src = `../assets/crew/${member.image}.png`;
    imgWebp.srcset = `../assets/crew/${member.image}.webp`;

    dots.forEach((d, i) => {
        d.classList.remove("bg-white");
        d.classList.add("bg-gray-400");
        if (i == index) d.classList.replace("bg-gray-400", "bg-white");
    });
}

dots.forEach(dot => {
    dot.addEventListener("click", () => {
        updateCrew(Number(dot.dataset.index));
    });
});

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
        currentIndex = (currentIndex + 1) % crewData.length;
        updateCrew(currentIndex);
    }

    if (e.key === "ArrowLeft") {
        currentIndex = (currentIndex - 1 + crewData.length) % crewData.length;
        updateCrew(currentIndex);
    }
});


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

    // Actualiza texto
    techName.textContent = tech.name.toLowerCase();
    techDesc.textContent = tech.description;

    // Actualiza imágenes
    techImg.src = `../assets/technology/${tech.image}-portrait.jpg`;
    techImg.alt = tech.name;
    techImgWebp.srcset = `../assets/technology/${tech.image}-landscape.jpg`;

    // Actualiza botones activos
    techBtns.forEach((btn, i) => {
    btn.classList.remove("bg-white", "text-black");
    btn.classList.add("text-white/50");
    if (i === index) {
        btn.classList.remove("text-white/50");
        btn.classList.add("bg-white", "text-black");
    }
    });
}

  // Click en botones
techBtns.forEach(btn => {
    btn.addEventListener("click", () => {
    updateTech(Number(btn.dataset.index));
    });
});

  // Navegación con flechas del teclado
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

  // Inicializar
updateTech(0);