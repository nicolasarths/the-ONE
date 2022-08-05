//Type ``npm run test Database`` to run tests

let id = 0

function extractData(args){
    const onlyOneArgument = args.length == 1
    const firstArgument = args[0]
    const firstArgumentIsArray = Array.isArray(firstArgument)
    const soloArgumentIsArray = onlyOneArgument && firstArgumentIsArray

    if (soloArgumentIsArray){
        return firstArgument
    } else {
        return args
    }
}

class Database {
    constructor(){
        this.data = []
    }

    #store(data){ 
        this.data.push({
            id: id,
            item: data
        })
        id++
    }

    store(...args){
        const data = extractData(args)

        const dataIsArray = Array.isArray(data)


        if (dataIsArray){
            data.forEach(item => this.#store(item))
        } else {
            this.#store(data)
        }
    }

    #retrieveAllItems(){
        const result = []
        this.data.forEach(item => result.push(item.item))
        return result
    }

    #findItem(query){
        return this.data.find(item => item.item == query)
    }

    #retrieveIds(query){
        const result = []
        const data = this.data
        const items = data.filter(item => item.item == query)    
        items.forEach(item => result.push(item.id))
        
        if (result.length == 1){
            return result[0]
        } else {
            return result
        }
    }

    retrieve(query, retrieveId){
        if (query === undefined){
            return this.#retrieveAllItems()
        } else if (retrieveId){
            return this.#retrieveIds(query)
        }
        return this.#findItem(query).item
    }

    delete(item){
        this.data = this.data.filter(it => it.item != item);
    }

    #findIndex(query){
        const item = this.#findItem(query)
        return this.data.indexOf(item)
    }

    update(item, update){
        const index = this.#findIndex(item)
        this.data[index].item = update
    }

    dropAll(){
        this.data = []
    }
}

export default new Database()