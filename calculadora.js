const eloHerois = [
    {nome: "Ferro", minVitorias: 1, maxVitorias: 10},
    {nome: "Bronze", minVitorias: 11, maxVitorias: 20},
    {nome: "Prata", minVitorias: 21, maxVitorias: 50},
    {nome: "Ouro", minVitorias: 51, maxVitorias: 80},
    {nome: "Diamante", minVitorias: 81, maxVitorias: 90},
    {nome: "Lendário", minVitorias: 91, maxVitorias: 100},
    {nome: "Imortal", minVitorias: 101},
]

let heroisLOL = [
    {nome: "Garen", vitorias: 45, derrotas: 5},
    {nome: "Lux", vitorias: 75, derrotas: 25},
    {nome: "Jinx", vitorias: 95, derrotas: 5},
    {nome: "Zed", vitorias: 120, derrotas: 30},
    {nome: "Yasuo", vitorias: 85, derrotas: 15},
    {nome: "Ahri", vitorias: 55, derrotas: 5},
    {nome: "Thresh", vitorias: 65, derrotas: 35},
    {nome: "Lee Sin", vitorias: 10, derrotas: 10},
]

function obterEloDoHeroi(vitoriasDoHeroi, derrotasDoHeroi) {
    const vitorias = vitoriasDoHeroi - derrotasDoHeroi;
    for (const elo of eloHerois) {
        if (vitorias >= elo.minVitorias && (elo.maxVitorias === undefined || vitorias <= elo.maxVitorias)) {
            return elo.nome;
        }
    }
    return "Desconhecido";
}

console.log("--- ELO dos Heróis ---");
for (const heroi of heroisLOL) {
    const nomeDoHeroi = heroi.nome;
    const vitoriasDoHeroi = heroi.vitorias;
    const derrotasDoHeroi = heroi.derrotas;
    const vitorias = vitoriasDoHeroi - derrotasDoHeroi;

    const eloDoHeroi = obterEloDoHeroi(vitoriasDoHeroi, derrotasDoHeroi);

    console.log(`O Herói ${nomeDoHeroi}, com saldo atual de ${vitorias} vitórias, está no ELO ${eloDoHeroi}.`);
}
