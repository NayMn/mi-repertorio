import { Router } from "express";
import { cancionesController } from '../controllers/repertorio.controller.js';
const router = Router();

router.get('/canciones', cancionesController.cancionesGet)
router.post('/cancion', cancionesController.cancionesPost)
router.put('/cancion/:id', cancionesController.cancionesPut)
router.delete('/cancion', cancionesController.cancionesRemove)

export default router
