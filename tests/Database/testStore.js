import { Database } from '../../model'
import mock from '../testHelpers/mock'

function storeRandomValues(){
    mock.randomValues.forEach(value => Database.store(value))
}

function areThereDuplicates(array){
    const duplicates = array.filter((item, index) => array.indexOf(item) !== index)
    return duplicates.length > 0
}

const ids = Database.retrieve().map(data => data.id)

export default it('.store() stores data as unique items', () => {
    storeRandomValues()
    expect(Database.retrieve()).toEqual(mock.mockBlocksOfRandomValues())
    storeRandomValues()
    storeRandomValues()
    storeRandomValues()
    
    expect(Database.retrieve().length).toBe(mock.randomValues.length*4)
    expect(areThereDuplicates(Database.retrieve())).toBeFalsy()
})