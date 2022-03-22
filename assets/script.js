
var timeEl = document.getElementById("countdown");
var mainEl = document.getElementById("main");
var secondsLeft = 3;
var startQuizEl = document.getElementById("startquiz");

var pageTwoT = document.getElementById("alerts-t")
var pageThreeT = document.getElementById("parent-t");
var pageFourT = document.getElementById("all-t");
var pageFiveT = document.getElementById("quotes-t");
var pageSixT = document.getElementById("js-t");

var pageTwoF = document.getElementById("strings-f") || document.getElementById("booleans-one-f") || document.getElementById("numbers-one-f");
var pageThreeF = document.getElementById("quotes-f") || document.getElementById("curly-one-f") || document.getElementById("square-one-f");
var pageFourF = document.getElementById("numbers-two-f") || document.getElementById("arrays-f") || document.getElementById("booleans-two-f");
var pageFiveF = document.getElementById("commas-f") || document.getElementById("curly-two-f") || document.getElementById("parent-f");
var pageSixF = document.getElementById("terminal-f") || document.getElementById("leaps-f") || document.getElementById("console-f");


function pageTwo() {
    var pageTwoEl = document.getElementById("pagetwo");
    if (pageTwoEl.style.display = "none") {
        pageTwoEl.style.display = "block";
    } else {
        pageTwoEl.style.display = "none";
    }
    var pageOneEl = document.getElementById("pageone");
    if (pageOneEl.style.display = "block") {
        pageOneEl.style.display = "none";
    }
}

function pageThree() {
    var pageThreeEl = document.getElementById("pagethree");
    if (pageThreeEl.style.display = "none") {
        pageThreeEl.style.display = "block";
    } else {
        pageThreeEl.style.display = "none";
    }
    var pageTwoEl = document.getElementById("pagetwo");
    if (pageTwoEl.style.display = "block") {
        pageTwoEl.style.display = "none";
    }
}

function pageFour() {
    var pageFourEl = document.getElementById("pagefour");
    if (pageFourEl.style.display = "none") {
        pageFourEl.style.display = "block";
    } else {
        pageFourEl.style.display = "none";
    }
    var pageThreeEl = document.getElementById("pagethree");
    if (pageThreeEl.style.display = "block") {
        pageThreeEl.style.display = "none";
    }
}

function pageFive() {
    var pageFiveEl = document.getElementById("pagefive");
    if (pageFiveEl.style.display = "none") {
        pageFiveEl.style.display = "block";
    } else {
        pageFiveEl.style.display = "none";
    }
    var pageFourEl = document.getElementById("pagefour");
    if (pageFourEl.style.display = "block") {
        pageFourEl.style.display = "none";
    }
}

function pageSix() {
    var pageSixEl = document.getElementById("pagesix");
    if (pageSixEl.style.display = "none") {
        pageSixEl.style.display = "block";
    } else {
        pageSixEl.style.display = "none";
    }
    var pageFiveEl = document.getElementById("pagefive");
    if (pageFiveEl.style.display = "block") {
        pageFiveEl.style.display = "none";
    }
}

function pageSeven() {
    var pageSevenEl = document.getElementById("pageseven");
    if (pageSevenEl.style.display = "none") {
        pageSevenEl.style.display = "block";
    } else {
        pageSevenEl.style.display = "none";
    }
    var pageSixEl = document.getElementById("pagesix");
    if (pageSixEl.style.display = "block") {
        pageSixEl.style.display = "none";
    }
}

function pageEight() {
    var pageEightEl = document.getElementById("pageeight");
    if (pageEightEl.style.display = "none") {
        pageEightEl.style.display = "block";
    } else {
        pageEightEl.style.display = "none";
    }
    var pageSevenEl = document.getElementById("pageseven");
    if (pageSevenEl.style.display = "block") {
        pageSevenEl.style.display = "none";
    }
}

function setTime() {
    var timerInterval = setInterval(function() {
    secondsLeft--;    
    timeEl.textContent = secondsLeft;
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

function goPageTwo() {
    setTime();
    pageTwo();
}

startQuizEl.addEventListener("click", goPageTwo);

function goPageThree() {
    pageThree();
}

pageTwoT.addEventListener("click", goPageThree);
pageTwoF.addEventListener("click", goPageThree);

function goPageFour() {
    pageFour();
}

pageThreeT.addEventListener("click", goPageFour);
pageThreeF.addEventListener("click", goPageFour);

function goPageFive() {
    pageFive();
}

pageFourT.addEventListener("click", goPageFive);
pageFourF.addEventListener("click", goPageFive);

function goPageSix() {
    pageSix();
}

pageFiveT.addEventListener("click", goPageSix);
pageFiveF.addEventListener("click", goPageSix);

function goPageSeven() {
    pageSeven();
}

pageSixT.addEventListener("click", goPageSeven);
pageSixF.addEventListener("click", goPageSeven);