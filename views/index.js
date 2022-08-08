import Factory from "../controller/Factory"
import responses from "../controller/responses"
import { Database } from "../model"

export default class BlockView {
    constructor(block){
        this.title = block.title
    }

    static constructViews(){
        const grid = Factory.constructGrid()
        if (grid.length == 3) {

            return responses.success
        }
    }

}