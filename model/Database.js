export default class Database {
    constructor(){
        this.data = []
    }

    store(data){
        if (Array.isArray(data)){
            data.forEach(item => this.data.push(item))
        } else {
            this.data.push(data)
        }
        return true;
    }

    retrieve(query){
        if (arguments[0] === undefined){
            return this.data
        }
        const index = this.data.indexOf(query)
        const data = this.data[index]
        return data
    }

    update(data, update){
        this.data[0] = update
    }

    dropAll(){
        this.data = []
    }

}