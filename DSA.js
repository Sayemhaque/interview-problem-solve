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

getBiggestWord(para)