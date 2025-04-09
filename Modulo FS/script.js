// NODE -> MODULO FS -> SCRIPT.JS

const fs = require("fs")

    fs.writeFileSync("mensagem.xlsx", "Oi, criei esse arquivo pelo node")

    console.log("Arquivo criado com sucesso!")