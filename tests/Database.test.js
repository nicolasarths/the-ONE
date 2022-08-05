//Type ``npm run test Database`` to run tests

import {Database, Block} from '../model'

let database
beforeEach(() => database = new Database)

describe('Data Base', () => {
    it('a created database exists', () => {
        expect(database).toBeTruthy()
    })
    it('is possible to store data', () => {
        expect(database.store('data')).toBeTruthy()
    })
    it('is possible to drop entire database', () => {
        database.dropAll()
        expect(database.data.length).toBe(0)
    })
})

describe('Storing data', () => {
    it('is possible to add multiple data at once with arrays', () => {
        const arr = [1, 2, 3]
        database.store(arr)
        expect(database.data).toEqual(arr)
    })
    it('is possible to store objects', () => {
        const object = { a: 1, b: 2, c: 3}
        database.store(object)
        expect(database.data[0]).toEqual(object)
    })
    it('is possible to add multiple objects with arrays', () => {
        database.store([{a: 1}, {b: 2}, {c: 3}])
        expect(database.data[0]).toEqual({a: 1})
        expect(database.data[1]).toEqual({b:2})
        expect(database.data[2]).toEqual({c:3})
    })
    it('is possible to add multiple different values', () => {
        const int = 1
        const float = 1.0
        const arr = [1, 2]
        const str = 'a'
        const obj = {a: 1}

        database.store([int, float, arr, str, obj])
        expect(database.data[0]).toEqual(int)
        expect(database.data[1]).toEqual(float)
        expect(database.data[2]).toEqual(arr)
        expect(database.data[3]).toEqual(str)
        expect(database.data[4]).toEqual(obj)
    })
    it('is possible to store blocks', () => {
        const myBlock = new Block()
        database.store(myBlock)
        expect(database.data[0]).toEqual(myBlock)
    })
})

describe('Retrieving data', () => {
    it('is possible to retrieve data', () => {
        const data = ''
        database.store(data)
        expect(database.retrieve(data)).toBe(data)
    })
    it('is possible to retrieve all data at once by not specifying anything', () => {
        database.dropAll()
        database.store([1, 2, 3])
        database.store(4)
        const result = database.retrieve() 
        expect(result).toEqual([ 1, 2, 3, 4])
    })
})

describe('Updating data', () => {
    it('is possible to update data', () => {
        const data = 0
        const update = 1
        database.store(data)
        database.update(data, update)
        expect(database.retrieve(update)).toBe(update)
    })
})