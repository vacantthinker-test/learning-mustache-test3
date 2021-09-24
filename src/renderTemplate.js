import lookup from "./lookup";
import parseArray from "./parseArray";

export default function renderTemplate(tokens, data) {
    console.log('renderTemplate', tokens)
    console.log('renderTemplate', data)

    let result = ''
    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i]
        let type = token[0]
        let value = token[1]

        switch (type) {
            case 'text': // [text, '<ul>']
                result += value
                break
            case 'name':
                result += lookup(data, value)
                break
            case '#':
                result += parseArray(token, data)
                break
        }
    }

    return result
}