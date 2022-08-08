import { Controller } from '.';

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

export default 
it('read board request returns object with queried board title, even if it does not exist', () => {
    ['Dashboard','Nonexistant Board', 'Movies'].forEach(boardQuery => {
        const info = makeReadRequest(boardQuery)
        expect(info.board).toBe(boardQuery)
    })
})

it('if board doesnt exist, returns error property', () => {
    const info = makeReadRequest('Nonexistant Board')
    expect(info.error).toBeTruthy()
})

it('Dashboard request never returns error', () => {
    const info = makeReadRequest('Dashboard')
    expect(info.error).toBeFalsy()
})

it('if board exists, returns grid property with 3 arrays',() =>{
    const info = makeReadRequest('Dashboard')
    expect(info.grid.length).toEqual(3)
    
    info.grid.forEach(column => {
        expect(column).toEqual([])
    })
})