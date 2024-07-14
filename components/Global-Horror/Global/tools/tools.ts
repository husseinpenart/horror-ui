
export const truncate = (input: string, numLine, propsLine) =>
    input?.length > propsLine ? `${input.substring(0, numLine)}...` : input;

export const removeTags = (str) => {
    if (str === undefined || str === null || str === '') {
        return false;
    } else {
        str = str.toString();
    }
    return str.replace(/(<([^>]+)>)/ig, '');
}

