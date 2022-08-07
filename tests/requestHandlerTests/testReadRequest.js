import Controller from "../../controller";
import BlockView from '../../views'

const request = {
    method: 'read',
    model: {
        type: 'board',
        specs: {
            title: 'dashboard'
        }
    }
}

export default function () {
    const response = Controller.requestHandler(request)
    expect(typeof(response)).toBe('object')
    expect(Array.isArray(response.columns)).toBeTruthy()
    expect(response.columns[0]).toBeInstanceOf(BlockView)
}