import dayjs from 'dayjs'
import { scheduleNew } from '../../services/schedule-new'
import { schedulesDay } from '../schedules/load'

const form = document.querySelector('form')
const clientName = document.getElementById('client')
const selectedDate = document.getElementById('date')

const today = dayjs(new Date()).format('YYYY-MM-DD')

selectedDate.value = today
selectedDate.min = today

form.onsubmit = async (event) => {
    event.preventDefault()
    
    try {
        const name = clientName.value.trim();
        if (!name) {
            return alert('Por favor, preencha o nome do cliente.')
        }
        
        const hourSelected = document.querySelector('.hour-selected')
        
        if (!hourSelected) {
            return alert('Por favor, selecione um horário disponível.')
        }

        const [hour] = hourSelected.textContent.split(':')
        
        const when = dayjs(selectedDate.value).add(hour, 'hour')

        const id = new Date().getTime()

        await scheduleNew({
            id,
            name,
            when
        })

        await schedulesDay()

        clientName.value = ''
    } catch (error) {
        alert('Não foi possível realizar o agendamento. Tente novamente mais tarde.')
        console.log(error)
    }
}
    