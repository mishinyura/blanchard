const headerNav = document.querySelector('.header__nav'),
    burgerBtn = document.querySelector('.header__btn_burger');

const editConditionNavBar = (btn) => {
    headerNav.classList.toggle('active')
    btn.target.classList.toggle('active')
}

burgerBtn.addEventListener('click', editConditionNavBar)