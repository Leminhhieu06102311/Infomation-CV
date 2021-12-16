const closeChildren = document.getElementsByClassName('header__item-link-mobile')
const closeMenu = document.getElementsByClassName('header__list-mobile')
console.log(closeMenu)
function close() {
    closeMenu.classList.add('remove')
}

for(const closeChildrens of closeChildren) {
    closeChildrens.addEventListener('click', close)
}