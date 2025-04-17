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
    img.src = `/assets/crew/${member.image}.png`;
    imgWebp.srcset = `/assets/crew/${member.image}.webp`;

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