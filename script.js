const body = document.querySelector('body'),
    sidebar = document.querySelector('.sidebar'),
    toggle = document.querySelector('.toogle'),
    searchBtn = document.querySelector('.search-box'),
    modeSwitch = document.querySelector('.toggle-switch'),
    modeText = document.querySelector('.mode-text');

    toggle.addEventListener("click", () => {
        sidebar.classList.toggle("close"); // khi bấm vào switch thì body thêm class dark
        
    });

    searchBtn.addEventListener("click", () => {
        sidebar.classList.remove("close"); // khi bấm vào switch thì body thêm class dark
        
    });

    modeSwitch.addEventListener("click", () => {
        body.classList.toggle("dark"); // khi bấm vào switch thì body thêm class dark

        if(body.classList.contains("dark")){
            modeText.innerText = "Light Mode";
        }
        else{
            modeText.innerText = "Dark Mode";
        }
    });
