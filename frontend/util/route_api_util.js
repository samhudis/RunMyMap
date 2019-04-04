export const fetchRoutes = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/routes'
    })
}

export const fetchRoute = (id) => {
    return $.ajax({
        method: 'GET',
        url: `api/routes/${id}`
    })
}

export const createRoute = route => {
    return $.ajax({
        method: 'POSt',
        url: `api/routes`,
        data: { route: route }
    })
}