const deepClone = (obj: any) => {
    return JSON.parse(JSON.stringify(obj));
}

export {
    deepClone
}