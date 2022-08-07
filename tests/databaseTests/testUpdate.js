import { Database } from "../../model"
import mock from "../testHelpers/mock"

export default it('is possible to update data', () => {
    const update1 = 'Anything can be placed here.'
    const update2 = 12345

    Database.storeLots(mock.randomValues)
    Database.update(1, update1)
    Database.update(2, update2)

    expect(Database.retrieve()[0]).toEqual(mock.block(1, update1))
    expect(Database.retrieve()[1]).toEqual(mock.block(2, update2))

    Database.update(1, update2)
    Database.update(2, update1)
    expect(Database.retrieve()[0]).toEqual(mock.block(1,update2))
    expect(Database.retrieve()[1]).toEqual(mock.block(2, update1))
})