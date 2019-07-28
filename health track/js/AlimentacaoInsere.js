function AlimentacaoInsere(){
	//event.preventDefault(); // altera o comportamento padrão do botão de recarregar a página

	var form = document.querySelector("#formAdicionaAlimentacao");//lê o formulário

	var data_alimentacao = form.dt_alimentacao.value; //lê a data da alimentacao digitada pelo usuário na tela
	var numero_alimentacao = form.nr_Alimentacao.value; // lê o alimentação

	var alimentacaotr = document.createElement("tr"); //cria o tr dentro do arquivo html (cria a linha da tabela)
	
	var dtAlimentacaoTd = document.createElement("td"); // cria td data da alimentacao
	var nrAlimentacaoTd = document.createElement("td");// cria td alimentação
	
	dtAlimentacaoTd.textContent = data_alimentacao; // insere valores lidos dentro do td
	nrAlimentacaoTd.textContent = numero_alimentacao; // insere valores lidos dentro do td


	alimentacaotr.appendChild(dtAlimentacaoTd); //insere as TDs como filhos do TBody (alimentacaotr)
	alimentacaotr.appendChild(nrAlimentacaoTd);//insere as TDs como filhos do TBody (alimentacaotr)


	var tabela = document.querySelector("#tabelaAlimentacao");
	tabela.appendChild(alimentacaotr);

	form.reset(); //limpa formulário.
} 