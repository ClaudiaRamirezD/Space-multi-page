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

dots.forEach(dot => {
    dot.addEventListener("click", () => {
        const index = dot.dataset.index;
        const member = crewData[index];

        // Update content
        role.textContent = member.role.toLowerCase();
        name.textContent = member.name.toLowerCase();
        bio.textContent = member.bio;
        img.src = `../assets/crew/${member.image}.png`;
        imgWebp.srcset = `../assets/crew/${member.image}.webp`;

        // Update active dot
        dots.forEach(d => d.classList.remove("bg-white"));
        dots.forEach(d => d.classList.add("bg-gray-400"));
        dot.classList.remove("bg-gray-400");
        dot.classList.add("bg-white");
    });
});


