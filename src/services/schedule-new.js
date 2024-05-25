import { apiConfig } from './api-config'

export async function scheduleNew({ id, name, when }) {
    try {      
        const url = `${apiConfig.baseURL}/schedules`

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id,
                name,
                when
            })
        }

        await fetch(url, options)
        
        alert('Agendamento realizado com sucesso!')
    } catch (error) {
        console.log(error)
        alert('Não foi possível realizar o agendamento. Tente novamente mais tarde.')
    }
}