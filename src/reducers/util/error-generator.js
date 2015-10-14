export default function generateError({name, action, expectedType}) {
    const {type, payload} = action;
    return `${name} reducer : action ${type} : the payload is not a(n) ${expectedType} it is : ${JSON.stringify(payload)}`;
}
