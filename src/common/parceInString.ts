export const parseString = (arr: []) => {
    const string = arr.map((el: { name: string, isAdded: boolean }) => {
        if (el.isAdded) {
            return el.name;
        }
    })
    return `"${string.join(";")}"`;
}
