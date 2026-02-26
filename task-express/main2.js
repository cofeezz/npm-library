import { title } from "node:process";

let task = [
    {id: 1, title: "estudar HTML", done: false},
    {id: 2, title: "estudart java", done: true}
]

app.get("/task", (req,res) =>{
    let title = req.body.title

    const task = {
        id: nextId,
        title: title,
        done: false
    }
    nextId = nextId + 1
    task.push(newTask)

    res.status(200).send("tarefa criada com sucesso!")
})

app.get("/task/:id", (req, res) =>{
    let id = parseInt(req.parans.id)

    let task =task.find((t) => t.id === id)

    if (!task) {
        return res.status(404).send("tarefa nao encontrada")
    } else {
        return res.status(200).send({
            mensage: "encontrada",
            task: task
        })
    }
})


// app.get("/tasks", (req, res) =>{
//     let title = req.body.title

//     tasks.push({
//         id: + 1,
//         title: title,
//         done: false
//     })
//     res.status(200).send("tarefa criada com sucesso!")
// })