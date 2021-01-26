
let a = {
    _year:2004,
    edition: 0
}

Object.defineProperty(a, '_year', {
    writable: false
})

Object.defineProperty(a, 'year', {
    get() {
        return this._year
    },
    set(newValue){
        this._year = newValue
    },
})

a.year = 2006

console.log(a);