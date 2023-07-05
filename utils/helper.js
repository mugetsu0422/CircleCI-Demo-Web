export const getVisiblePage = (totalPages, visiblePages, curPage) => {
    // Limit the visible page
    if (visiblePages > totalPages) {
        visiblePages = totalPages;
    }
    const half = Math.floor(visiblePages / 2);
    var start = curPage - half + 1 - visiblePages % 2;
    var end = curPage + half;

    // handle boundary case
    if (start <= 0) {
        start = 1;
        end = visiblePages;
    }
    if (end > totalPages) {
        start = totalPages - visiblePages + 1;
        end = totalPages;
    }

    const pages = []
    for (let i = start; i <= end; i++) {
        pages.push({
            value: i,
            isCurrent: i === +curPage
        })
    }
    return pages
}

export const calcStreak = (timestamp, streakinfo) => {
    let streak = streakinfo.streak
    let lastdaylogin = streakinfo.lastlogindate
    
    const lastdayloginUTC = new Date(lastdaylogin).toISOString().slice(0,10)
    const timestampUTC = timestamp.toISOString().slice(0, 10)
    const yesterday = new Date((timestamp.getTime() - 86400000)).toISOString().slice(0, 10)

    if (lastdayloginUTC === yesterday && timestampUTC !== yesterday) {
        streak = streak + 1
    }else if(timestampUTC === lastdayloginUTC){
        streak
    }else {
        streak = 1
    }
    return streak
}