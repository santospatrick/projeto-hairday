import dayjs from "dayjs"
import { apiConfig } from "./api-config"

export async function scheduleFetchByDay({ date }) {
    try {
        const response = await fetch(`${apiConfig.baseURL}/schedules`)

        const data = await response.json()

        const dailySchedules = data.filter((schedule) => {
            return dayjs(date).isSame(dayjs(schedule.when), 'day')
        })

        return dailySchedules
    } catch (error) {
        console.log(error)
        alert('Não foi possível carregar os horários disponíveis. Tente novamente mais tarde.')
    }
}