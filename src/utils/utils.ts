export const groupBy = (objArray, property) => {
    return objArray.reduce((acc, obj) => {
        const key = obj[property];
        return {...acc, [key]: obj}
    }, {})
}