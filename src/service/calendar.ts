export const dayName = (day: number) => {
    let dayText: string;
    switch (day) {
        case 0:
            dayText = 'Sunday';
            break;
        case 1:
            dayText = 'Monday';
            break;
        case 2:
            dayText = 'Tueday';
            break;
        case 3:
            dayText = 'Wednesday';
            break;
        case 4:
            dayText = 'Thursday';
            break;
        case 5:
            dayText = 'Friday';
            break;
        case 6:
            dayText = 'Saturday';
            break;
        default:
            dayText = 'NA';
    }
    return dayText;
};

export const amOrPm = (hour: number) => {
    let am_pm = 'am';
    if (hour > 12) {
        hour -= 12;
        am_pm = 'pm';
    } else if (hour == 0) {
        hour = 12;
        am_pm = 'am';
    }
    return am_pm;
};
