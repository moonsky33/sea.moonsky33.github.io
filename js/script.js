// 侧边栏和移动端侧边栏手势
let isSidebarOpen = false;

function toggleNav() {
    var sidebar = document.getElementById("sidebar");
    var main = document.getElementById("main");
    var toggleButton = document.querySelector('.togglebtn'); 
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
        main.style.marginLeft = "0";
        toggleButton.style.visibility = "visible";
        document.removeEventListener('click', handleOutsideClick);
    } else {
        sidebar.style.width = "250px";
        main.style.marginLeft = "250px";
        toggleButton.style.visibility = "hidden";
        setTimeout(() => {
            document.addEventListener('click', handleOutsideClick);
        }, 0);
    }
}

function openNav() {
    var sidebar = document.getElementById("sidebar");
    var main = document.getElementById("main");
    sidebar.style.width = "250px";
    main.style.marginLeft = "250px";
    isSidebarOpen = true;
    document.addEventListener('click', handleOutsideClick);
}
function closeNav() {
    var sidebar = document.getElementById("sidebar");
    var main = document.getElementById("main");
    sidebar.style.width = "0";
    main.style.marginLeft = "0";
    isSidebarOpen = false;
    document.removeEventListener('click', handleOutsideClick);
}

function handleOutsideClick(event) {
    var sidebar = document.getElementById("sidebar");
    if (!sidebar.contains(event.target) && sidebar.style.width === "250px") {
        closeNav();
    }
}

let touchStartX = 0;
let touchEndX = 0;

function checkSwipe() {
    if (touchEndX - touchStartX > 100 && !isSidebarOpen) {
        openNav();
    } else if (touchStartX - touchEndX > 100 && isSidebarOpen) {
        closeNav();
    }
}

document.addEventListener('touchstart', function(event) {
    touchStartX = event.changedTouches[0].screenX;
});

document.addEventListener('touchend', function(event) {
    touchEndX = event.changedTouches[0].screenX;
    checkSwipe();
});

function toggleCollapsible(element) {
    var content = element.nextElementSibling;
    var arrow = element.querySelector('.arrow');
    if (content.style.display === "block") {
        content.style.display = "none";
        arrow.classList.remove('down');
    } else {
        content.style.display = "block";
        arrow.classList.add('down');
    }
}
// 雨天控制
document.addEventListener("DOMContentLoaded", function() {
    const weatherButton = document.getElementById('weatherButton');

    // 监听天气按钮点击事件
    weatherButton.addEventListener('click', function() {
        toggleRain();
        if (rainInterval) {
            weatherButton.textContent = '🌧';
        } else {
            weatherButton.textContent = '☀';
        }
    });
});

// 获取当前天气弹窗
document.addEventListener("DOMContentLoaded", function() {
    var weather2Modal = document.getElementById("weather2Modal");
    var weather2Button = document.getElementById("weather2Button");
    var weather2Close = document.getElementsByClassName("weather2-close")[0];
    weather2Button.onclick = function() {
        weather2Modal.style.display = "block";
    }
    weather2Close.onclick = function() {
        weather2Modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == weather2Modal) {
            weather2Modal.style.display = "none";
        }
    }
});