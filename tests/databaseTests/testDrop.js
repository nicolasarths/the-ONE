import { Database } from "../../model"
import mock from '../testHelpers/mock'

export default it('.dropAll() erases all data and resets idCounter', () => {  
    mock.randomValues.forEach(value => Database.store(value))
    expect(Database.retrieve()).not.toBe([])
    Database.dropAll()
    expect(Database.retrieve()).toEqual([])
})