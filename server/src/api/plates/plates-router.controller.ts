import { Router, Request, Response, NextFunction } from 'express';
import { sample, random, now } from 'lodash';

let generatePlateResult = () => {
    return {
        availability: sample([true, false]),
        searchCount: random(1, 1000),
        lastSearched: new Date(now() - random(1, 100000))
    }
};

export class PlatesRouter {
    router: Router

    /**
     * Initialize the HeroRouter
     */
    constructor() {
        this.router = Router();
        this.init();
    }

    // /**
    //  * GET all GroceryList.
    //  */
    // public list(req: Request, res: Response, next: NextFunction) {
    //     //res.send(GroceryList);
    //     res.json(GroceryList);
    // }

    // public detail(req: Request, res: Response, next: NextFunction) {
    //     const item = GroceryList.filter((item) => item.id == req.params.id)[0];
    //     res.status(200).json(item);
    // }

    // public update(req: Request, res: Response, next: NextFunction) {
    //     let { name, quantity } = req.body;

    //     let item = GroceryList.filter((item) => item.id == req.params.id)[0];
    //     if (!item) {
    //         res.sendStatus(404);
    //     }

    //     GroceryList.map((item) => {
    //         if (item.id == req.params.id) {
    //             item.name = name;
    //             item.quantity = quantity;
    //         }
    //     });

    //     res.status(200).json(GroceryList.filter((item) => item.id = req.params.id)[0]);
    // }

    // public destroy(req: Request, res: Response, next: NextFunction) {
    //     const item = GroceryList.filter((item) => item.id = req.params.id)[0];

    //     if (!item) {
    //         res.sendStatus(404);
    //     }

    //     let index = GroceryList.indexOf(item);
    //     GroceryList.splice(index, 1);

    //     res.status(202);
    // }

    searchPlates(req: Request, res: Response) {
        let body = req.body;
        let params = req.params;
        let query = req.query;

        // res.send({
        //     params: params,
        //     query: query
        // });

        res.send(generatePlateResult());
    }

    /**
     * Take each handler, and attach to one of the Express.Router's
     * endpoints.
     */
    init() {
        // this.router.get('/', this.list);
        // this.router.get('/:id', this.detail);
        // this.router.put('/:id', this.update);
        // this.router.delete('/:id', this.destroy);

        this.router.get('/regions/:regionCode', this.searchPlates);
    }

}

// Create the HeroRouter, and export its configured Express.Router
const platesRouter = new PlatesRouter();
platesRouter.init();

export default platesRouter.router;