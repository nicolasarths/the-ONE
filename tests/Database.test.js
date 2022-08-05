//Type ``npm run test Database`` to run tests

import {Database, Block} from '../model'

beforeEach(() => Database.dropAll())

describe('Database', () => {
    it('can be created', () => {
        expect(Database).toBeTruthy()
    })
    it('is possible to store data', () => {
        expect(Database.store('data')).toBe(undefined)
    })
    it('stored data has index', () => {
        Database.store(['data'])
        expect(Database.retrieve('data', true)).toEqual(1)

        Database.store('data', 'moreData')
        expect(Database.retrieve('data', true)).toEqual([1,2])

        Database.store('moreData')
        expect(Database.retrieve('moreData', true)).toEqual([3, 4])
    })
    it('is possible to drop entire Database', () => {
        Database.dropAll()
        expect(Database.data.length).toBe(0)
    })
})

describe('Storing data', () => {
    it('is possible to add multiple data at once using commas', () => {
        Database.store(1, 2, 3)
        expect(Database.retrieve()).toEqual([1, 2, 3])
    })
    it('is possible to add multiple data at once with arrays', () => {
        const arr = [1, 2, 3]
        Database.store(arr)
        expect(Database.retrieve()).toEqual(arr)
    })
    it('is possible to store array(s) using array(s) inside array', () => {
        const arr = ['an Array']
        Database.store([arr])
        expect(Database.retrieve()).toEqual([arr])

        Database.dropAll()
        Database.store([arr, arr])
        expect(Database.retrieve()).toEqual([arr, arr])
        
    })
    it('is possible to store objects', () => {
        const object = { a: 1, b: 2, c: 3}
        Database.store(object)
        expect(Database.retrieve()).toEqual([object])
    })
    it('is possible to add multiple objects with arrays', () => {
        const multipleObjects = [{a: 1}, {b: 2}, {c: 3}]
        Database.store(multipleObjects)
        expect(Database.retrieve()).toEqual(multipleObjects)
    })
    it('is possible to add multiple different values', () => {
        const int = 1
        const float = 1.0
        const arr = [1, 2]
        const str = 'a'
        const obj = {a: 1}

        const seed = [int, float, arr, str, obj]
        Database.store(seed)
        expect(Database.retrieve()).toEqual(seed)
    })
    it('is possible to store blocks', () => {
        const myBlock = new Block()
        Database.store(myBlock)
        expect(Database.retrieve()).toEqual([myBlock])
    })
    it('every data stored has a unique identifier', () => {
        Database.store([1, 1])
        expect(Database.data[0] == Database.data[1]).toBe(false)
    })
})

describe('Retrieving data', () => {
    it('is possible to retrieve data', () => {
        const data = ''
        Database.store(data)
        expect(Database.retrieve(data)).toBe(data)
    })
    it('is possible to retrieve all data at once by not specifying anything', () => {
        Database.store([1, 2, 3])
        Database.store(4)
        const result = Database.retrieve() 
        expect(result).toEqual([ 1, 2, 3, 4])
    })
})

describe('Updating data', () => {
    it('is possible to delete data', () => {
        const aBlock = new Block()
        Database.store([1, 2, aBlock, 'String', 5])
        Database.delete(1)
        expect(Database.retrieve()).toEqual([2, aBlock, 'String', 5])
        Database.delete('String')
        expect(Database.retrieve()).toEqual([2, aBlock, 5])
        Database.delete(aBlock)
        expect(Database.retrieve()).toEqual([2, 5])
    })
    it('is possible to update data', () => {
        const aBlock = new Block() 
        const data = [1, 2, aBlock, 'String', 5]
        Database.store(data)
        Database.update('String', 'Updated String')

        const updatedData = [1, 2, aBlock, 'Updated String', 5]
        expect(Database.retrieve()).toEqual(updatedData)
        
        const updatedBlock = new Block()
        updatedBlock.rename('Updated Block')
        Database.update(aBlock, updatedBlock)
        
        const updatedData2 = [1, 2, updatedBlock, 'Updated String', 5]
        expect(Database.retrieve()).toEqual(updatedData2)
    })
})