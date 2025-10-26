import { Request, Response } from "express";


import { Pet } from '../models/pet';
import { createMenuObject } from "../helpers/createMenuObject";

export const search = (req: Request, res: Response) => {
    //pegando a query inicio
    let query: string = req.query.q as string;


    //Se n dig nada retorn page inicial
    if(!query){
        res.redirect('/');
        return;
    }


    //listar pelo que o cliente consultou.
    let list = Pet.getFromName(query);

    res.render('pages/page', {
        menu: createMenuObject(''),
        list,
        query
    });

    // res.render('pages/search');
}

