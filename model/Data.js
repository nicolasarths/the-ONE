export default class Data {
    constructor (item, id) {
        return {
            id,
            item
        }
    }

    static newData(item, id){
        return new Data(item, id)
    }
}