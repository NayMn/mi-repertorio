import { pool } from '../database/connection.js'
const seleccionar = async () => {
    const { rows } = await pool.query("SELECT * FROM canciones")
    return rows
}

const crear = async ({ titulo, artista, tono }) => {
    const querySql = {
        text: "INSERT INTO CANCIONES (titulo, artista, tono) VALUES ($1, $2, $3) RETURNING *",
        values: [titulo, artista, tono]
    }
    const { rows } = await pool.query(querySql)
    return rows[0]
}



const actualizar = async ({ titulo, artista, tono, id }) => {

    const querySQL = {
        text: "UPDATE canciones SET titulo = $1, artista = $2, tono = $3 WHERE id = $4 RETURNING *;",
        values: [titulo, artista, tono, id]
    }
    const { rows } = await pool.query(querySQL)
    return rows[0]
}

const eliminar = async (id) => {

    const querySQL = {
        text: "DELETE FROM canciones WHERE id = $1 RETURNING *;",
        values: [id]
    }
    const { rows } = await pool.query(querySQL)
    return rows[0]
}

export const cancionesModels = {
    seleccionar,
    crear,
    actualizar,
    eliminar
}