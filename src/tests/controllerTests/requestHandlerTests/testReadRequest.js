import { RequestHandler, createRequest, readRequest } from '.';
import { Database } from '../../../model';


function makeJsonReadRequest (boardTitle) {
    const req = JSON.stringify(readRequest(boardTitle))
    return RequestHandler.handle(req)
}

function makeReadRequest (boardTitle) {
    return RequestHandler.handle(readRequest(boardTitle))
}

const dashboardInfo = () => makeReadRequest('dashboard')
afterEach(() => {
    Database.dropAll()
})

export default 

it('if board doesnt exist, returns error property', () => {
    const info = makeReadRequest('Nonexistant Board')
    expect(info.error).toBeTruthy()
})

it('Dashboard request never returns error', () => {
    expect(dashboardInfo().error).toBeFalsy()
})

it('if board exists, returns grid property with 3 arrays, each representing a column',() =>{
    expect(dashboardInfo().grid.length).toEqual(3)
    
    dashboardInfo().grid.forEach(column => {
        expect(Array.isArray(column)).toBeTruthy()
    })
})

it('newly created blocks are equally distributed between each column',() =>{
    const colSpecs = [1, 0, 0]

    for(let i=0; i<10; i++){
        RequestHandler.handle(createRequest)
        
        dashboardInfo().grid.forEach((col, i) => {
            expect(col.length).toBe(colSpecs[i])
        })

        if (colSpecs[0] > colSpecs[1]) colSpecs[1]++
        else if (colSpecs[1] > colSpecs[2]) colSpecs[2]++ 
        else colSpecs[0]++

    }
})
it('can retrieve objects in JSON format', () => {
    const info = makeJsonReadRequest('dashboard')
    expect(info.board).toBe('dashboard')
    expect(info.grid.length).toBe(3)
})