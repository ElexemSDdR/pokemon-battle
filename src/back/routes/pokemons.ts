import { Router } from 'express';
import type { Request, Response } from 'express';
import { getPokemonsByName, setPokemonsOnBattle } from '../controllers/pokemonController.js';

const router: Router = Router()

router.get('/pokemon', getPokemonsByName)
router.get('/pokemon/battle', setPokemonsOnBattle)

export default router
