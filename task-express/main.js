import express from "express";

const app = express()
const port = 3000

app.use(express.json())

app.get("/check", (req,res) => {
    res.status(200).send({
        status: "em funcionamento",
        db: "conectado"
    })
})

app.get("/sobre", (req ,res) => {
    return res.status(200).send({
        email: "a@gmail.com",
        telefone: "40028922"
    })
})

app.get("/saudacao/:id", (req,res) =>{
    const userId = req.params.id
    return res.status(200).send({
        mensagem: `bem vindo: ${userId}`
    })
})

app.listen(port, () =>{
    console.log(`servidor funcionando na ${port}`)
})