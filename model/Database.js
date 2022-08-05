//Type ``npm run test Database`` to run tests

class Database {
    constructor(){
        this.data = []
        this.items = []
    }

    #store(data){ 
        this.data.push({
            index: this.data.length,
            item: data
        })
        this.items.push(data)
    }

    store(data){
        if (Array.isArray(data)){
            data.forEach(item => this.#store(item))
        } else {
            this.#store(data)
        }
        return true;
    }

    retrieve(query){
        if (query === undefined){
            return this.items
        }
        const index = this.items.indexOf(query)
        const data = this.items[index]
        return data
    }

    #findItem(query){
        return this.data.find(item => item.item === query)
    }

    delete(){
        this.dropAll()
    }

    update(data, update){
       /*  const {index} = this.#findItem(data)
        console.log(this.data[index])
        this.data[index] = 
        console.log(this.data[index]) */
        this.store(update)
    }

    dropAll(){
        this.data = []
        this.items = []
    }
}

export default new Database()