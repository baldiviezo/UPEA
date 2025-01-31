//------footer
const footer = document.querySelector('footer');
footer.innerHTML = `
    <img src="../img/logout.svg" class="logout">
    <div>
        <button id="moduleOne">Edificio 1</button>
        <button id="moduleTwo">Edificio 2</button>
    </div>
`;
//------Change module
const footer__buttons = document.querySelectorAll('footer div button');
footer__buttons.forEach(button =>{
    button.addEventListener('click', ()=>{window.open(`./${button.id}.html`,"_self")})
});
//------Close
//const logout = document.querySelector('.logout');
//logout.addEventListener('click', ()=>{window.open(`./close.html`,"_self")});
