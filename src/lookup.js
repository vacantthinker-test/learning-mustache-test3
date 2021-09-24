export default function lookup(dataObject, keyName) {

    if (keyName !== '.' && keyName.indexOf('.') !== -1) {
        let tmp = dataObject
        let names = keyName.split('.')
        for (let i = 0; i < names.length; i++) {
            let item = names[i]
            tmp = tmp[item]
        }
        return tmp
    }

    return dataObject[keyName]
}