const months = {
    1: { displayName: 'Jan' },
    2: { displayName: 'Feb' },
    3: { displayName: 'Mar' },
    4: { displayName: 'Apr' },
    5: { displayName: 'May' },
    6: { displayName: 'Jun' },
    7: { displayName: 'Jul' },
    8: { displayName: 'Aug' },
    9: { displayName: 'Sep' },
    10: { displayName: 'Oct' },
    11: { displayName: 'Nov' },
    12: { displayName: 'Dec' },
}

const days = {
    1: { displayName: 'Mon' },
    2: { displayName: 'Tue' },
    3: { displayName: 'Wed' },
    4: { displayName: 'Thu' },
    5: { displayName: 'Fri' },
    6: { displayName: 'Sat' },
    7: { displayName: 'Sun' },
}

const formatDay = (date) => { return days[date.getDay() + 1].displayName }

const formatMonth = (date) => { return months[date.getMonth() + 1].displayName }

const formatDateNumber = (date) => { return date.toString().slice(8, 10) }

export { formatDay, formatMonth, formatDateNumber }
