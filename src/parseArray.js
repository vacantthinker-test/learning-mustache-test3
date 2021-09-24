/**
 * take scopeToken from token, take arrayDataList of one from data.
 *      then mapping them.
 * @param token
 * @param data
 * @returns {string}
 */
import lookup from "./lookup";
import renderTemplate from "./renderTemplate";

export default function parseArray(token, data) {
    // token
    // #, arr, Array()
    let result = ''
    let keyName = token[1]
    let arrayData = lookup(data, keyName)
    for (let i = 0; i < arrayData.length; i++) {
        let dataItem = arrayData[i]
        let wrappedScopeData = {
            ...dataItem,
            '.': dataItem
        }
        let scopeToken = token[2]
        result += renderTemplate(scopeToken, wrappedScopeData)
    }

    return result
}