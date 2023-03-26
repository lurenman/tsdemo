
// export let evar = 18
// export let estr: string = "haha"

class EClass {
    name = ""
    constructor(name: string) {
        this.name = name
    }
    isAcceptable(s: string) {
        return s;
    }
}
export { EClass }