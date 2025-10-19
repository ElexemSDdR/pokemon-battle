import { Router } from 'express';
import { getPokemonsByName } from '../controllers/pokemonController.js';

const router: Router = Router()

router.get('/pokemon', getPokemonsByName)

export default router
