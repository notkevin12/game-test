let buttons = document.getElementsByClassName("button");
    resets = document.getElementsByClassName("reset");
    contentcols = document.getElementsByClassName("contentcol");
    toolboxes = document.getElementsByClassName("toolbox");
    planets = document.getElementsByClassName("planet");
    earth = document.getElementById("earth");
    mars = document.getElementById("mars");
    draggable = ["cool-weather", "distance-from-the-sun", "greenhouse-gases", "infrared-radiation-absorbed", "infrared-radiation-bounced-around", "infrared-radiation-leaves", "infrared-radiation-reflected", "oxygen-layer", "ozone", "planet-axis-tilt", "solar-flares", "sunlight-absorbed", "sunlight-bounced-around", "sunlight-leaves", "sunlight-reflected", "time-of-day", "warm-weather"];
    draggablenames = ["Cool Weather", "Distance From The Sun", "Greenhouse Gases", "Infrared Radiation Absorbed", "Infrared Radiation Bounced Around", "Infrared Radiation Leaves", "Infrared Radiation Reflected", "Oxygen Layer", "Ozone Layer", "Planet Axis Tilt", "Solar Flares", "Sunlight Absorbed", "Sunlight Bounced Around", "Sunlight Leaves", "Sunlight Reflected", "Time of Day", "Warm Weather"];
    dragstore = new Array;
    questions = ["Q1: What prevents heat from leaving the Earth's surface? And how so?", "Q2: Explain why Earth and Mars have different climates (Earth is warm enough to sustain life, but Mars is not) when they both have ozone layers.", "Q3: Explain what the ozone layer and greenhouse gases do for Earth."];
    page = 1;



for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("mouseover", function() {
        this.style.transform = "scale(1.1)";
    });
    buttons[i].addEventListener("mouseleave", function() {
        this.style.transform = "scale(1)";
    });
}
document.getElementById("previous").addEventListener("click", function() {
    if (page > 1) {
        page--;
        document.getElementById("question").children[0].innerHTML = questions[page - 1];
        if (page === 2) {
            document.getElementById("next").style.display = "flex";
        }
        else if (page === 1) {
            this.style.display = "none";
        }
        rearrange(page);
    }
});
document.getElementById("next").addEventListener("click", function() {
    if (page < 3) {
        page++;
        document.getElementById("question").children[0].innerHTML = questions[page - 1];
        if (page === 2) {
            document.getElementById("previous").style.display = "flex";
        }
        else if (page === 3) {
            this.style.display = "none";
        }
        rearrange(page);
    }
});

for (let i = 0; i < draggable.length; i++) {
    dragstore[i] = createDraggable(i);
}

initialize();
function initialize() {
    for (let i = 0; i < toolboxes.length; i++) {
        while (toolboxes[i].firstChild) {
            toolboxes[i].removeChild(toolboxes[i].firstChild);
        }
        for (let j = 0; j < dragstore.length; j++) {
            toolboxes[i].appendChild(dragstore[j].cloneNode(true));
        }
    }
    $( "div.draggable" ).draggable( {
        scroll: false,
        appendTo: "#interactable", 
        containment: "#interactable",
        stack: "img",
        start: function() {
            this.style.boxShadow = "3px 3px 10px black";
            this.style.cursor = "grabbing";
        },
        stop: function() {
            this.style.boxShadow = "none";
            this.style.cursor = "grab";
        }
    });
}

for (let i = 0; i < resets.length; i++) {
    resets[i].addEventListener("click", initialize);
}

function rearrange(input) {
    let multi = document.getElementsByClassName("multi");
    if (input === 2) {
        for (let i = 0; i < multi.length; i++) {
            multi[i].style.display = "flex";
        }
        for (let i = 0; i < contentcols.length; i++) {
            contentcols[i].style.width = "25%";
        }
    }
    else {
        for (let i = 0; i < multi.length; i++) {
            multi[i].style.display = "none";
        }
        for (let i = 0; i < contentcols.length; i++) {
            contentcols[i].style.width = "50%";
        }
    }
}

function createDraggable(index) {
    let image = document.createElement("img");
        imgwrap = document.createElement("div");
        imglabel = document.createElement("div");
        wrap = document.createElement("div");
    image.src = "media/" + draggable[index] + ".png";
    if (index === 2 || index === 7 || index === 8) {
        image.style.height = "80%";
        image.style.width = "auto";
    }
    else {
        image.style.height = "90%";
        image.style.width = "auto";
    }
    imgwrap.className = "imgwrap";
    imgwrap.appendChild(image);
    imglabel.className = "imglabel";
    imglabel.innerHTML = draggablenames[index];
    wrap.classList.add("draggable");
    wrap.classList.add("index" + index);
    wrap.addEventListener("mousedown", function() {
        this.style.cursor = "grabbing";
    })
    wrap.addEventListener("mouseup", function() {
        this.style.cursor = "grab";
    })
    wrap.appendChild(imgwrap);
    wrap.appendChild(imglabel);
    return wrap;
}


$( "div.planetcol" ).droppable( {
    drop: function(event, ui) {
        //alert(ui.draggable);
        ui.draggable.css({transform: 'scale(2)'});
    }
});

$( "div.toolcol" ).droppable( {
    drop: function(event, ui) {
        //alert(ui.draggable);
        ui.draggable.css({transform: 'scale(1)'});
    }
});