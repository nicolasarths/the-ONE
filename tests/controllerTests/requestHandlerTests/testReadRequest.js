import { Controller, Block, createRequest } from '.';
import { Database } from '../../../model';

function makeReadRequest (boardTitle) {
    const request = {
        method: 'read',
        model: {
            type: 'board',
            specs: {
                title: boardTitle
            }
        }
    }

    return Controller.handle(request)
}

const dashboardInfo = () => makeReadRequest('dashboard')
afterEach(() => {
    Database.dropAll()
})

export default 
it('read board request returns object with queried board title, even if it does not exist', () => {
    ['dashboard','Nonexistant Board', 'Movies'].forEach(boardQuery => {
        const info = makeReadRequest(boardQuery)
        expect(info.board).toBe(boardQuery)
    })
})

it('if board doesnt exist, returns error property', () => {
    const info = makeReadRequest('Nonexistant Board')
    expect(info.error).toBeTruthy()
})

it('Dashboard request never returns error', () => {
    expect(dashboardInfo().error).toBeFalsy()
})

it('if board exists, returns grid property with 3 arrays',() =>{
    expect(dashboardInfo().grid.length).toEqual(3)
    
    dashboardInfo().grid.forEach(column => {
        expect(Array.isArray(column)).toBeTruthy()
    })
})

it('newly created blocks are equally distributed',() =>{
    const colSpecs = [1, 0, 0]

    for(let i=0; i<10; i++){
        Controller.handle(createRequest)
        
        dashboardInfo().grid.forEach((col, i) => {
            expect(col.length).toBe(colSpecs[i])
        })

        if (colSpecs[0] > colSpecs[1]) colSpecs[1]++
        else if (colSpecs[1] > colSpecs[2]) colSpecs[2]++ 
        else colSpecs[0]++

    }
})