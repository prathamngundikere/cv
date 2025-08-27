var checkbox = document.querySelector('input[name=mode]')
var moon = document.getElementById('moon')

// Force dark mode on first load
document.documentElement.setAttribute('data-theme', 'dark')
checkbox.checked = true
moon.innerHTML = feather.icons['sun'].toSvg({'fill': 'var(--fg-color-dark)'})

// Add toggle listener
checkbox.addEventListener('change', function() {
    if(this.checked) {
        document.documentElement.setAttribute('data-theme', 'dark')
        moon.innerHTML = feather.icons['sun'].toSvg({'fill': 'var(--fg-color-dark)'})
    } else {
        document.documentElement.setAttribute('data-theme', 'light')
        moon.innerHTML = feather.icons['moon'].toSvg({'fill': 'var(--fg-color-dark)'})
    }
})

