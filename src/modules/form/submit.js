import dayjs from 'dayjs'

const form = document.querySelector('form')
const selectedDate = document.getElementById('date')

const today = dayjs(new Date()).format('YYYY-MM-DD')

selectedDate.value = today
selectedDate.min = today

form.onsubmit = async (event) => {
    event.preventDefault()
    console.log('qwe')
}
    