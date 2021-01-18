let buttons = document.getElementsByClassName("button");
    contentcols = document.getElementsByClassName("contentcol");
    planets = document.getElementsByClassName("planet");
    toolboxes = document.getElementsByClassName("toolbox");
    earth = document.getElementById("earth");
    mars = document.getElementById("mars");
    draggable = ["solar-flares", "time-day", "weather-cools", "weather-heats", "sunlight-reflect", "distance-sun", "earth-rotation", "sunlight-leaves", "sunlight-bounce", "infrared-bounce", "infrared-absorb", "sunlight-absorb", "infrared-reflect", "infrared-leaves","ozone", "greenhouse", "oxygen"];
    questions = ["Q1: What prevents heat from leaving the Earth's surface? And how so?", "Q2: Explain why Earth and Mars have different climates (Earth is warm enough to sustain life, but Mars is not) when they both have ozone layers.", "Q3: Explain what the ozone layer and greenhouse gases do for Earth."];
    page = 1;



for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("mouseover", buttonover);
    buttons[i].addEventListener("mouseleave", buttonleave);
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
    for (let j = 0; j < toolboxes.length; j++) {
        console.log("Hello");
        let newitem = document.createElement("div");
        newitem.id = draggable[i];
        newitem.innerHTML = draggable[i];
        newitem.style.height = "10vh";
        newitem.style.width = "100%";
        newitem.style.backgroundColor = "blue";
        newitem.style.cursor = "grab";
        //newitem.addEventListener("mousedown", highlight);
        //newitem.addEventListener("mouseup", unhighlight);
        $(function() {
            $( "#" + draggable[i] ).draggable( {
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
        });
        toolboxes[j].appendChild(newitem);
    }
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

function buttonover() {
    this.style.transform = "scale(1.1)";
}
function buttonleave() {
    this.style.transform = "scale(1)";
}
function highlight() {
    this.style.boxShadow = "3px 3px 10px black";
    this.style.cursor = "grabbing";
}
function unhighlight() {
    this.style.boxShadow = "none";
    this.style.cursor = "grab";
}