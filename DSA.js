const para = "In the age of rapid technological advancements, our world is undergoing unprecedented changes. From artificial intelligence and automation transforming industries to the ongoing digital revolution, society is adapting to new paradigms. Innovations in healthcare, education, and communication are enhancing our quality of life, while environmental challenges are demanding sustainable solutions. As we navigate this dynamic landscape, the need for lifelong learning and global collaboration becomes increasingly evident"




const getBiggestWord = (para) => {
    const paraArr = para.split(" ")
    console.log(paraArr)
    let biggestWord = ""
    for (let i = 0; i < paraArr.length; i++) {
        if (paraArr[i].length > biggestWord.length) {
            biggestWord = paraArr[i]
        }
    }
    console.log(biggestWord)
}

// getBiggestWord(para)







// Problem-------1

// Write a JavaScript function that takes a positive integer as input and prints a pattern of asterisks (*) in the shape of a right-angled triangle. The number of rows in the triangle should be equal to the input integer. For example, if the input is 5, the output should look like this:
/*
**
***
****
*****/

const createPattern = (input) => {
    for (let i = 1; i <= input; i++) {
        console.log('*'.repeat(i));
    }
}

// createPattern(5)

//write a javascript program to check two numbers and return true if one of the number is 100 or if the sum of the two numbers is 100

function checkNumber(num1, num2) {
    if (num1 === 100 || num2 === 100 || num1 + num2 === 100) {
        return true
    }
    else {
        return false
    }
}

console.log(checkNumber(1, 80))
