// Escape Room Interativo com novos objetos e enigmas
const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let resolvidos = {
    grampeador: false,
    papeis: false,
    almofada: false,
    livro: false,
    janela: false,
    armario: false
}

function menuPrincipal() {
    console.log("\n🔐 Você está em uma sala trancada, cheia de mistérios...")
    console.log("Ao seu redor, você vê:")
    console.log("1. 📎 Um grampeador velho")
    console.log("2. 📄 Um monte de papéis amassados na mesa")
    console.log("3. 🛋️ Uma almofada fora do lugar")
    console.log("4. 📚 Um livro antigo empoeirado")
    console.log("5. 🪟 Uma janela com marcas estranhas")
    console.log("6. 🚪 Um armário trancado")
    console.log("7. 🔓 Tentar abrir a porta")

    rl.question("\nO que você deseja investigar? ", (resposta) => {
        switch(resposta.trim()) {
            case "1":
                investigarGrampeador()
                break
            case "2":
                investigarPapeis()
                break
            case "3":
                investigarAlmofada()
                break
            case "4":
                investigarLivro()
                break
            case "5":
                investigarJanela()
                break
            case "6":
                investigarArmario()
                break
            case "7":
                verificarSaida()
                break
            default:
                console.log("❌ Escolha inválida")
                menuPrincipal()
        }
    })
}

function investigarGrampeador(){
    if(resolvidos.grampeador){
        console.log("✅ Você já resolveu esse desafio")
        return menuPrincipal()
    }
    rl.question("\n📎 Dentro do grampeador tem um bilhete: 'Quanto mais seco, mais molhado eu fico. O que sou?' ", (resposta) => {
        if(resposta.trim().toLowerCase() == "toalha") {
            console.log("🎉 Acertou! Você desbloqueou a chave que estava no grampeador")
            resolvidos.grampeador = true
        } else {
            console.log("❌ Resposta errada. Tente novamente depois")
        }
        menuPrincipal()
    })
}

function investigarPapeis() {
    if (resolvidos.papeis) {
        console.log("✅ Você já resolveu esse desafio")
        return menuPrincipal()
    }
    rl.question("\n📄 Um dos papéis diz: 'O que aumenta quanto mais você tira?' ", (resposta) => {
        if(resposta.trim().toLowerCase() == "buraco") {
            console.log("🎉 Acertou! Você encontrou a chave no meio dos papéis")
            resolvidos.papeis = true
        } else {
            console.log("❌ Errou! Não é isso")
        }
        menuPrincipal()
    })
}

function investigarAlmofada() {
    if (resolvidos.almofada) {
        console.log("✅ Você já resolveu esse desafio")
        return menuPrincipal()
    }
    rl.question("\n🛋️ Na almofada, tem um enigma: 'Quanto mais você tira, maior ele fica. O que é?' ", (resposta) => {
        if(resposta.trim().toLowerCase().includes("buraco")) {
            console.log("🎉 Você acertou! A chave estava dentro da almofada")
            resolvidos.almofada = true
        } else {
            console.log("❌ Não é isso, pense um pouco mais")
        }
        menuPrincipal()
    })
}

function investigarLivro() {
    if (resolvidos.livro) {
        console.log("✅ Você já resolveu esse desafio")
        return menuPrincipal()
    }
    rl.question("\n📚 Um marcador destaca a frase: 'Tenho páginas, mas não sou gente. O que sou?' ", (resposta) => {
        if(resposta.trim().toLowerCase() == "livro") {
            console.log("🎉 Acertou! Dentro do livro havia uma pequena chave escondida")
            resolvidos.livro = true
        } else {
            console.log("❌ Errou! Reflita mais")
        }
        menuPrincipal()
    })
}

function investigarJanela() {
    if (resolvidos.janela) {
        console.log("✅ Você já resolveu esse desafio")
        return menuPrincipal()
    }
    rl.question("\n🪟 Há uma mensagem escrita com vapor: 'Tenho olhos mas não vejo. Quem sou?' ", (resposta) => {
        if(resposta.trim().toLowerCase() == "batata") {
            console.log("🎉 Exato! Dentro da fresta da janela havia uma chave escondida")
            resolvidos.janela = true
        } else {
            console.log("❌ Resposta errada. Tente novamente mais tarde")
        }
        menuPrincipal()
    })
}

function investigarArmario() {
    if (resolvidos.armario) {
        console.log("✅ Você já resolveu esse desafio")
        return menuPrincipal()
    }
    rl.question("\n🚪 No armário há uma trava com o enigma: 'Quanto mais você tem, menos vê. O que é?' ", (resposta) => {
        if(resposta.trim().toLowerCase() == "escuridão") {
            console.log("🎉 Acertou! Havia uma chave escondida atrás de um compartimento secreto")
            resolvidos.armario = true
        } else {
            console.log("❌ Não é isso. Tente novamente depois")
        }
        menuPrincipal()
    })
}

function verificarSaida() {
    if(resolvidos.grampeador && resolvidos.almofada && resolvidos.papeis && resolvidos.livro && resolvidos.janela && resolvidos.armario) {
        console.log("🔓 Você encontrou todas as chaves!")
        console.log("🎉 Parabéns, você escapou da sala com sucesso!")
        rl.close()
    } else {
        console.log("🚪 A porta ainda está fechada. Você não resolveu todos os enigmas...")
        menuPrincipal()
    }
}

console.log("🧩 Bem-vindo ao Escape Room Misterioso!")
menuPrincipal()
