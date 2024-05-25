import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours";

export function hoursLoad({ date }) {
    const opening = openingHours.map((openingHour) => {
        const [scheduleHour] = openingHour.split(":")

        const isHourPast = dayjs(date).add(scheduleHour, 'hour').isAfter(dayjs())
        return {
            hour: openingHour,
            available: isHourPast
        }
    })
    
    console.log("🚀 ~ opening ~ opening:", opening)
}