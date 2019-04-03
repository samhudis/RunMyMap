export const fetchRoutes = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/routes'
    })
}