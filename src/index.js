function toggleHidden(el) {
    if (el.classList.contains('hidden')) {
        el.classList.remove('hidden');
    } else {
        el.classList.add('hidden');
    }
}

function toggleEmailAddress() {
    const address = document.getElementById('email-address');
    toggleHidden(address);
}

window.onload = () => {
    const email = document.getElementById('email-contact');
    email.addEventListener('click', toggleEmailAddress, false);
}