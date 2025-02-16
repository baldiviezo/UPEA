//------Header
const header = document.querySelector('header');
header.innerHTML = `
        <div class="header__top">
            <img src="../img/home.svg">
            <h1>U.P.E.A.</h1>
            <img src="../img/menu.svg" class="header__menu">
        </div>
        <div class="header__bottom">
            <div class="logo">
                <img src="../img/logoSMS.png">
            </div>
            <div class="container">
                <div class="key">Fecha y hora</div>
                <div id="showDate"></div>
            </div>
        </div>
`;
//------Fecha que se mostrara en header
const showDate = document.querySelector('#showDate');
setInterval(() => {
    let date = new Date();
    let month = date.getMonth() + 1;
    function dateCorrection(number){
        if(number <= 10){
            let string = '0'+number;
            return string; 
        }else{
            return number;
        }
    }   
    showDate.innerText = `${dateCorrection(date.getDate())}-${dateCorrection(month)}-${date.getFullYear()} ${dateCorrection(date.getHours())}:${dateCorrection(date.getMinutes())}:${dateCorrection(date.getSeconds())}`;
}, 1000);
//------Side bar
const sideBar = document.querySelector('.sideBar');
sideBar.innerHTML = `
    <div class="sideBar__container">
        <div class="sidebar__header">
            <img src="../img/x.svg" class="sidebar__close">
        </div>
        <div class="sidebar__body">
            <ul class="nav__list">
                <li><a href="./moduleOne.html" class="nav__link">Modulos</a></li>
            </ul>
        </div>
    </div>
`;
const header__menu = document.querySelector('header .header__menu');
const sideBar__close = document.querySelector('.sidebar__header');
header__menu.addEventListener('click', () => {
    sideBar.classList.add('modal__show');
});
sideBar__close.addEventListener('click', () => {
    sideBar.classList.remove('modal__show');
});

