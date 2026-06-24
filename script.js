function showMessage() {
    alert("Welcome to Adventure Peaks! Let's start your adventure.");
}

function showPlace(place) {

    let info = "";

    switch(place) {

        case "Himalayas":
            info = "The Himalayas are the highest mountain range in the world and a paradise for trekkers.";
            break;

        case "Spiti Valley":
            info = "Spiti Valley is famous for its cold desert landscapes, monasteries, and adventure tourism.";
            break;

        case "Manali":
            info = "Manali is one of India's most popular hill stations known for snow and adventure sports.";
            break;

        case "Valley of Flowers":
            info = "Valley of Flowers is a UNESCO World Heritage Site known for its colorful flowers.";
            break;

        case "Trekking":
            info = "Trekking helps you explore mountains, forests, and beautiful natural trails.";
            break;

        case "Camping":
            info = "Camping lets you spend time in nature and enjoy outdoor adventures.";
            break;

        case "Rock Climbing":
            info = "Rock Climbing is an exciting activity that improves strength and confidence.";
            break;

        case "River Rafting":
            info = "River Rafting is a thrilling water sport done on fast-flowing rivers.";
            break;
    }

    document.getElementById("info-box").innerHTML =
        "<h3>" + place + "</h3><br><p>" + info + "</p>";
}