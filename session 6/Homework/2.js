let userselect = document.getElementById('user-select');
let btnRemove = document.getElementById('btn-remove');
btnRemove.addEventListener('click', () => {
    // console.dir (userselect);
    userselect.remove(userselect.selectedIndex);
})
