export const cloneDeep = (objectToClone) => {
    const cloned = JSON.parse(JSON.stringify(objectToClone));
    return cloned
}