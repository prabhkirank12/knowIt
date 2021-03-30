
function modeChange() {

    const toggleSwitch = document.querySelector('input[type="checkbox"]')
    const toggleIcon = document.getElementById('toggle-icon');
    
    // Dark Mode Styles
    function darkMode() {
        toggleIcon.children[0].textContent = 'Dark Mode';
        toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    }
    
    
    // Light Mode Styles
    function lightMode() {
        toggleIcon.children[0].textContent = 'Light Mode';
        toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    }
    
    // Switch THeme Dynamically
    function switchTheme(event) {
        if (event.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            darkMode();
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            lightMode();
        }
    }
    // Event Listener
    toggleSwitch.addEventListener('change', switchTheme)
    
    // Check Local Storage For Theme
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
            darkMode();
        }
    }
}

export default modeChange;