function findMatching(drivers, name) {
    return drivers.filter(driver => 
        driver.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(drivers, name) {
    return drivers.filter(fuzzy => fuzzy[0] === name[0])
}

function matchName(drivers, name) {
    return drivers.filter(match => match.name === name)
}
