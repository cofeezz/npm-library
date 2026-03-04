import express from "express";
import { pool } from "./db.js";

const app = express()
const port = 3000

app.use(express.json())

app.get("/h_check", async (req,res) => {
    
    try {
        pool.query("select 1")
        res.status(200).send({ api: "ok", db: "on"})
    } catch (error) {
        return res.status(503).send({ 
            res: res,
            status: 503,
            mensage: "banco indisponivle" 
         })
    }

})

// CRIAR ROTA / TASKS COM METH GET QUE LISTA AS TASKS

app.get("/tasks", async (req, res) => {
    const [rows] = await pool.query("SELECT id, title, created_at FROM tasks ORDER BY id DESC")

    return res.status(200).send({
        status: 200,
        tasks: rows,
        mensage: "listado com sucesso"
    })
})

app.listen(port, () =>{
    console.log(`servidor funcionando na porta: ${port}`)
})