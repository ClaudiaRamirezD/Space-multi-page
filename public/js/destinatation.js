const destinations = {
    moon: {
        name: "moon",
        image: {
        webp: "../assets/destination/image-moon.webp",
        png: "/assets/destination/image-moon.png",
        },
        description:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance: "384,400 km",
        travel: "3 days",
    },
    mars: {
        name: "mars",
        image: {
        webp: "../assets/destination/image-mars.webp",
        png: "/assets/destination/image-mars.png",
        },
        description:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        distance: "225 mil. km",
        travel: "9 months",
    },
    europa: {
        name: "europa",
        image: {
        webp: "../assets/destination/image-europa.webp",
        png: "/assets/destination/image-europa.png",
        },
        description:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        distance: "628 mil. km",
        travel: "3 years",
    },
    titan: {
        name: "titan",
        image: {
        webp: "../assets/destination/image-titan.webp",
        png: "/assets/destination/image-titan.png",
        },
        description:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        distance: "1.6 bil. km",
        travel: "7 years",
    },
};
document.addEventListener("DOMContentLoaded", () => {
    const queryParams = new URLSearchParams(window.location.search);
    const current = queryParams.get("planet") || "moon"; // default to moon

    const data = destinations[current.toLowerCase()];
    if (!data) return;

    // Actualizar la imagen
    const picture = document.querySelector(".pic-destination picture");
    if (picture) {
        picture.innerHTML = `
            <source srcset="${data.image.webp}">
            <img src="${data.image.png}" alt="${data.name}" class="size-56 lg:size-76 my-8 md:my-12" />
        `;
}


    // Actualizar el título
    document.querySelector("h2").textContent = data.name;

    // Actualizar la descripción
    document.querySelector(".info-dest p").textContent = data.description;

    // Actualizar distancia y tiempo
    const distance = document.querySelector(".avg-distance span");
    const travel = document.querySelectorAll(".avg-distance span")[1];
    distance.textContent = data.distance;
    travel.textContent = data.travel;

    // Resaltar el planeta actual en los tabs
    document.querySelectorAll(".info-dest ul li a").forEach((link) => {
        const href = new URL(link.href);
        if (href.searchParams.get("planet") === current) {
        link.setAttribute("aria-current", "page");
        } else {
        link.removeAttribute("aria-current");
        }
    });
});
