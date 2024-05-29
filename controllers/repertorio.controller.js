import { cancionesModels } from "../models/repertorio.model.js";

const cancionesGet = async (req, res) => {
    try {
        const canciones = await cancionesModels.seleccionar()
        return res.json(canciones)

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            error: "No se pueden obtener las canciones"
        })
    }
}

const cancionesPost = async (req, res) => {

    try {
        const { titulo, artista, tono } = req.body
        const cancionNueva = await cancionesModels.crear({ titulo, artista, tono })
        return res.json(cancionNueva)

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            error: "No se puede crear la cancion"
        })

    }
}

const cancionesPut = async (req, res) => {
    try {
        const { id } = req.params
        const { titulo, artista, tono } = req.body
        const cancionActualizada = await cancionesModels.actualizar({ titulo, artista, tono, id })
        return res.json(cancionActualizada)
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            error: "No se puede actualizar la cancion"
        })

    }
}

const cancionesRemove = async (req, res) => {
    try {
        const { id } = req.query
        const cancionEliminada = await cancionesModels.eliminar(id)
        return res.json(cancionEliminada)
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            error: "No se puede eliminar la cancion"
        })

    }
}

export const cancionesController = {
    cancionesGet,
    cancionesPost,
    cancionesPut,
    cancionesRemove

}

