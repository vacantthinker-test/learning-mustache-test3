import Scanner from "./Scanner";
import nestedTokens from "./nestedTokens";

/**
 *
 * @param template
 * @returns {*[]}
 */
export default function parseTemplateToTokens(template){
    let tokens = [];
    let scanner = new Scanner(template)

    let startTag = '{{'
    let endTag = '}}'
    while (!scanner.eos()){
        // startTag
        let text = scanner.scanUntil(startTag); // {{
        if (text !== '') {
            tokens.push(['text', text])
        }
        scanner.scan(startTag)

        // endTag
        let name = scanner.scanUntil(endTag); // {{ xxx }} name -> xxx
        if (name !== '') {
            let type = name[0]
            let value = name.substring(1)
            switch (type) {
                case '#':
                    tokens.push(['#', value])
                    break
                case '/':
                    tokens.push(['/',value])
                    break
                default:
                    tokens.push(['name', name])
                    break
            }
        }
        scanner.scan(endTag)

    }
    return nestedTokens(tokens)
}