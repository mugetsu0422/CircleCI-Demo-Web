export const calcStreak = (timestamp, streakinfo) => {
  let streak = streakinfo.streak
  let lastdaylogin = streakinfo.lastlogindate

  const lastdayloginUTC = new Date(lastdaylogin).toISOString().slice(0, 10)
  const timestampUTC = timestamp.toISOString().slice(0, 10)
  const yesterday = new Date((timestamp.getTime() - 86400000)).toISOString().slice(0, 10)

  if (lastdayloginUTC === yesterday && timestampUTC !== yesterday) {
    return streak + 1
  } else if (timestampUTC === lastdayloginUTC) {
    return streak
  } else {
    return 0
  }
}