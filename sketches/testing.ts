type Venda = {
  produto: string;
  quantidade: number;
  ativo: boolean;
};

const vendas: Venda[] = [
  { produto: "Teclado", quantidade: 2, ativo: true },
  { produto: "Mouse", quantidade: 1, ativo: false },
  { produto: "Teclado", quantidade: 3, ativo: true },
  { produto: "Monitor", quantidade: 1, ativo: true },
  { produto: "Mouse", quantidade: 4, ativo: true },
];


const ativas = vendas.filter(venda => venda.ativo)

const agrupado = ativas.reduce((acc, venda) => {
  if (!acc[venda.produto]) {
    acc[venda.produto] = 0;
  }

  acc[venda.produto] += venda.quantidade

  return acc;
}, {})


const maisVendido = Object.entries(agrupado).reduce((acc, [produto, quantidade]) => {
  if (quantidade > acc.quantidade) {
    
  }
},{produto: "", quantidade: 0})

