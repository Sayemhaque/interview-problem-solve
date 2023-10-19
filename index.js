const express = require("express")
const app = express()
const employee_data = require("./data")


app.get("/" , async(req,res) => {
    res.send("working")
})


app.get("/employeeData",async(req,res) => {
    res.send(employee_data)
})

app.get("/employee/:id", async(req,res) => {
    const id = req.params.id;
    const employee = employee_data.employees.find(id => id === id)
    res.send(employee)
})
app.get("/employee", async(req,res) => {
    const employeeId = req.query.employeeId
    const employeeObj = req.params.employeeObj
    console.log(employeeId,employeeObj)
    const employeeSingle = employee_data.employees.find(id => id === employeeId)
    const result  = employeeSingle?.employee?.find(id => id == 4)
    console.log(result)
    res.send(result)
})

app.listen(3000,() => {
    console.log("server is running")
})