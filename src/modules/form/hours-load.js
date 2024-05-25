import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours";
import { hoursClick } from "./hours-click";

const list = document.getElementById('hours')

export function hoursLoad({ date }) {
    list.innerHTML = ''
    const opening = openingHours.map((openingHour) => {
        const [scheduleHour] = openingHour.split(":")

        const isHourPast = dayjs(date).add(scheduleHour, 'hour').isAfter(dayjs())
        return {
            hour: openingHour,
            available: isHourPast
        }
    })
    
    opening.forEach((element) => {
        // <li data-period="morning" value="09:00" class="hour hour-available">09:00</li>
        const li = document.createElement('li')

        li.classList.add('hour')
        if (element.available) {
            li.classList.add('hour-available')
        } else {
            li.classList.add('hour-unavailable')
        }

        li.dataset.period = 'morning'
        li.textContent = element.hour

        if (element.hour === '9:00') {
            hourHeaderAdd('Manhã')
        } else if (element.hour === '13:00') {
            hourHeaderAdd('Tarde')
        } else if (element.hour === '18:00') {
            hourHeaderAdd('Noite')
        }

        list.append(li)
    })

    hoursClick()
}

function hourHeaderAdd(title) {
    const header = document.createElement('li')
    header.textContent = title
    header.classList.add('hour-period')
    list.append(header)
}