if(sessionStorage.getItem("accessGranted") !== "true" && !window.location.href.includes("index.html"))
{
    window.location.href = "index.html";
}

function verifyEmail()
{
    var emailInput = document.getElementById("emailInput");
    var output = document.getElementById("emailOutput");
    var email = emailInput.value.toLowerCase().trim();

    if(email === "dmortiz@albany.edu" || email === "jrbaez@albany.edu")
    {
        sessionStorage.setItem("accessGranted", "true");
        unlockNav();
        output.innerHTML = "Welcome in!";
    }
    else
    {
        output.innerHTML = "Invalid email, please enter an authorized school email.";
    }
}

function unlockNav()
{
    var links = document.querySelectorAll("nav a");

    links.forEach(function(link, index)
    {
        if(index !== 0)
        {
            link.style.pointerEvents = "auto";
            link.style.opacity = "1";
        }
    });
}

window.onload = function()
{
    if(sessionStorage.getItem("accessGranted") === "true")
    {
        unlockNav();
    }

    showSlide(slideIndex);
};

let slideIndex = 1;

function moveSlide(n)
{
    showSlide(slideIndex += n);
}

function showSlide(n)
{
    let slides = document.getElementsByClassName("slide");

    if(slides.length === 0)
    {
        return;
    }

    if(n > slides.length)
    {
        slideIndex = 1;
    }

    if(n < 1)
    {
        slideIndex = slides.length;
    }

    for(let i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}