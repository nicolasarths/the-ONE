//Type ``npm run test Database`` to run tests
import Data from './Data'

class Database {
    constructor(){
        this.data = []
        this.idCounter = 1
    }

    #save(array){
        array.forEach(item => {
            this.idCounter++
            this.data.push(new Data(item, this.idCounter))
        })
    }

    store(...data){
        this.#save(data)
    }

    storeLots(...arrays){
        arrays.forEach(array => this.#save(array))
    }

    #findItems(query){
        return this.data.filter(item => item.item == query)
    }

    retrieve(){
        return this.data
    }

    delete(_id){
        this.data = this.data.filter(item => item.id != _id);
    }

    #query(by, query){
        return this.data.find(item => item[by] == query)
    }

    update(id, update){
        this.data.map(item => {
            if (item.id == id) item.item = update
        })
    }

    dropAll(){
        this.data = []
        this.idCounter = 0
    }
}

const database = new Database()

export default database