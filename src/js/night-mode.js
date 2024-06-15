function autoNightMode() {
    const currentHour = new Date().getHours();
    const toggleSwitch = document.getElementById('toggle-night-mode');

    if (currentHour >= 18 || currentHour < 6) {
        document.body.classList.add('night-mode');
        toggleSwitch.checked = true;
    } else {
        document.body.classList.remove('night-mode');
        toggleSwitch.checked = false;
    }
}

document.getElementById('toggle-night-mode').addEventListener('change', function () {
    document.body.classList.toggle('night-mode');
});

window.onload = autoNightMode;