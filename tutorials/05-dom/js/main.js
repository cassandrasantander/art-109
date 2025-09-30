console.log("hello hello")

//js timeout changes h1 title after 3 seconds

setTimeout(function () {
    document.querySelector("#page-title").style.color = "pink";
    console.log("timeout worked!")
},  3000)

// click event on header changes background color

document.querySelector("header").onclick = function() {
    // console.log("click header")
    document.querySelector("body").
}