function calcular() {
    // Pegar valores dos inputs
    const custo_ingredientes = parseFloat(document.getElementById('custo_ingredientes').value);
    const custo_embalagem = parseFloat(document.getElementById('custo_embalagem').value);
    const custo_energia = parseFloat(document.getElementById('custo_energia').value);
    const outros_custos = parseFloat(document.getElementById('outros_custos').value);
    const quantidade_brigadeiros = parseInt(document.getElementById('quantidade_brigadeiros').value);
    const margem_lucro = parseFloat(document.getElementById('margem_lucro').value);

    // Cálculos
    const custo_total = custo_ingredientes + custo_embalagem * quantidade_brigadeiros + custo_energia + outros_custos;
    const custo_por_brigadeiro = custo_total / quantidade_brigadeiros;
    const preco_venda = custo_por_brigadeiro + (custo_por_brigadeiro * margem_lucro / 100);

    // Exibir resultados
    document.getElementById('custo_por_brigadeiro').textContent = custo_por_brigadeiro.toFixed(2);
    document.getElementById('preco_venda').textContent = preco_venda.toFixed(2);
}
