//Type ``npm run test Database`` to run tests

import {Database, Block} from '../model'

beforeEach(() => Database.dropAll())

describe('Database', () => {
    it('can be created', () => {
        expect(Database).toBeTruthy()
    })
    it('is possible to store data', () => {
        expect(Database.store('data')).toBeTruthy()
    })
    it('is possible to drop entire Database', () => {
        Database.dropAll()
        expect(Database.data.length).toBe(0)
    })
})

describe('Storing data', () => {
    it('is possible to add multiple data at once with arrays', () => {
        const arr = [1, 2, 3]
        Database.store(arr)
        expect(Database.retrieve()).toEqual(arr)
    })
    it('is possible to store objects', () => {
        const object = { a: 1, b: 2, c: 3}
        Database.store(object)
        expect(Database.retrieve()).toEqual([object])
    })
    it('is possible to add multiple objects with arrays', () => {
        Database.store([{a: 1}, {b: 2}, {c: 3}])
        expect(Database.items[0]).toEqual({a: 1})
        expect(Database.items[1]).toEqual({b:2})
        expect(Database.items[2]).toEqual({c:3})
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
        Database.store([1, 2])
        expect(Database.delete(1)).toBeFalsy()
        expect(Database.retrieve()).toEqual([2])
    })
    it('is possible to update data', () => {
        const data = 0
        const update = 1
        Database.store(data)
        Database.update(data, update)
        expect(Database.retrieve(update)).toBe(update)
    })
})