const express = require("express")
const app = express()
const employee_data = require("./data")


app.get("/", async (req, res) => {
    res.send("working")
})


app.get("/employeeData", async (req, res) => {
    res.send(employee_data)
})


app.get("/employee/:id", async (req, res) => {
    const Id = req.params.id;
    const employee = employee_data.employees.find(employee => employee.id == Id)
    res.send(employee)
})


app.get("/employee", async (req, res) => {
    try {
        const employeeId = req.query.employeeId
        const employeeObjId = req.query.employeeObjId
        console.log(employeeId)
        const employeeSingle = employee_data.employees.find(employee => employee.id === employeeId)
        const result = employeeSingle.employee.find(employee => employee.id === employeeObjId)
        res.send(result)
    } catch (error) {
        res.send(error)
    }
})

app.listen(3000, () => {
    console.log("server is running")
})