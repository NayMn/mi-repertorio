import { cancionesModels } from "../models/repertorio.model.js";

const cancionesGet = async (req, res) => {
    try {
        const cancionGet = await cancionesModels.seleccionar()
        return res.json(cancionGet)

    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}

const cancionesPost = async (req, res) => {

    try {
        const { titulo, artista, tono } = req.body
        const cancionPost = await cancionesModels.crear({ titulo, artista, tono })
        return res.json(cancionPost)

    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })

    }
}

const cancionesPut = async (req, res) => {
    try {
        const { id } = req.params
        const { titulo, artista, tono } = req.body
        const cancionPut = await cancionesModels.actualizar({ titulo, artista, tono, id })
        return res.json(cancionPut)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })

    }
}

const cancionesRemove = async (req, res) => {
    try {
        const { id } = req.query
        const cancionRemove = await cancionesModels.eliminar(id)
        return res.json(cancionRemove)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })

    }
}

export const cancionesController = {
    cancionesGet,
    cancionesPost,
    cancionesPut,
    cancionesRemove

}

