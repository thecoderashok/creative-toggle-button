let offToggle = document.getElementById('toggleOff');
let OnToggle = document.getElementById('toggleOn');

offToggle.addEventListener('click', function (){
    offToggle.classList.add("animation-on")
    OnToggle.classList.add("animation-on-2")
    OnToggle.classList.remove("animation-off")
    offToggle.classList.remove("animation-off-2")
})

OnToggle.addEventListener('click', function (){
    OnToggle.classList.remove("animation-on-2")
    OnToggle.classList.add("animation-off")
    offToggle.classList.remove("animation-on")
    offToggle.classList.add("animation-off-2")
})