export default class Scanner {
    constructor(template) {
        this.template = template;
        this.position = 0
        this.tail = this.template
    }

    scan(tag) {
        // not the end && the start is the tag
        if ((!this.eos()) && this.tail.indexOf(tag) === 0) {
            this.position += tag.length;
            this.tail = this.template.substring(this.position)
        }
    }

    /**
     * while-loop until the stopTag
     * @param stopTag
     */
    scanUntil(stopTag) {
        const start = this.position
        // not the end && the start not the stopTag
        while ((!this.eos()) && this.tail.indexOf(stopTag) !== 0) {
            this.position++;
            this.tail = this.template.substring(this.position)
        }
        return this.template.substring(start, this.position)
    }

    /**
     * end of string
     */
    eos() {
        return this.position >= this.template.length
    }
}