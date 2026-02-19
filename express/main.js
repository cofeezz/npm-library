import express from "express"
const app = express()
app.use(express.json())
// app.get("/", "/aluno", (request, response) =>{
//     console.log("hello word")
//     response.send("hello word")
// })
// app.listen(3000, () => {
//     console.log("Rodando em https://localhost3000")
// })

// const app = express()
// app.use(express.json())
// app.get("/aluno", (request, response) =>{
//     console.log("ALUNO")
//     response.send("Presente")
// })
// app.listen(3000, () => {
//     console.log("Rodando em https://localhost3000")
// })


// const app = express()
// app.use(express.json())
// app.get("/professor", (request, response) =>{
//     console.log("PROFESSOR")
//     response.send("veio")
// })
// app.listen(3000, () => {
//     console.log("Rodando em https://localhost3000")
// })

let tasks = [
    {id: 1, title: "estudar express", description: ""},
    {id: 2, title: "estudar npm", description: ""}
]

app.listen(3000, () => {
    console.log("Vamos estudar")
})

app.get("/tasks", (req, res) =>{
    const { title } = req.body
    const newTask = {id: tasks.length + 1, title}
    tasks.push(newTask)
    res.status(201).json(newTask)
    console.log(tasks.length)
})
