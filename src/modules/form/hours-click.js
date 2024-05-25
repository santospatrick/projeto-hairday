export function hoursClick() {
    const hours = document.querySelectorAll('.hour-available')
    hours.forEach((hour) => {
        hour.addEventListener('click', () => {
            const selected = document.querySelector('.hour-selected')
            if (selected) {
                selected.classList.remove('hour-selected')
            }
            hour.classList.add('hour-selected')
        })
    })
}