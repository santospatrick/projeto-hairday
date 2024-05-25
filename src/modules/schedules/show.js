import dayjs from 'dayjs'

const periodMorning = document.getElementById('period-morning')
const periodAfternoon = document.getElementById('period-afternoon')
const periodNight = document.getElementById('period-night')

export function schedulesShow({ dailySchedules }) {
    try {
        periodMorning.innerHTML = ''
        periodAfternoon.innerHTML = ''
        periodNight.innerHTML = ''

        dailySchedules.forEach((schedule) => {
            // <li>
            //   <strong>11:00</strong>
            //   <span>Rodrigo Gonçalves</span>
            //   <img
            //     src="./src/assets/cancel.svg"
            //     alt="Cancelar"
            //     class="cancel-icon"
            //   />
            // </li>
            const li = document.createElement('li')
            const strong = document.createElement('strong')
            const span = document.createElement('span')
            const img = document.createElement('img')

            li.setAttribute('data-id', schedule.id)
            strong.textContent = dayjs(schedule.when).format('HH:mm')
            span.textContent = schedule.name

            img.src = './src/assets/cancel.svg'
            img.alt = 'Cancelar'
            img.classList.add('cancel-icon')

            li.append(strong, span, img)

            const hour = dayjs(schedule.when).hour()

            if (hour <= 12) {
                periodMorning.append(li)
            } else if (hour > 12 && hour <= 18) {
                periodAfternoon.append(li)
            } else {
                periodNight.append(li)
            }
        })
    } catch (error) {
        console.log("🚀 ~ schedulesShow ~ error:", error)
        alert('Não foi possível carregar os agendamentos. Tente novamente mais tarde.')
    }
}