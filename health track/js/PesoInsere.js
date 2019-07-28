function PesoInsere(){
	//event.preventDefault(); // altera o comportamento padrão do botão de recarregar a página

	var form = document.querySelector("#formAdicionaPeso");//lê o formulário

	var data_pesagem = form.dt_pesagem.value; //lê a data da pesagem digitada pelo usuário na tela
	var numero_peso = form.nr_Peso.value; // lê o peso

	var Pesotr = document.createElement("tr"); //cria o tr dentro do arquivo html (cria a linha da tabela)
	
	var dtPesagemTd = document.createElement("td"); // cria td data da pesagem
	var nrPesoTd = document.createElement("td");// cria td peso
	
	dtPesagemTd.textContent = data_pesagem; // insere valores lidos dentro do td
	nrPesoTd.textContent = numero_peso + "kg"; // insere valores lidos dentro do td


	Pesotr.appendChild(dtPesagemTd); //insere as TDs como filhos do TBody (Pesotr)
	Pesotr.appendChild(nrPesoTd);//insere as TDs como filhos do TBody (Pesotr)


	var tabela = document.querySelector("#tabelaPeso");
	tabela.appendChild(Pesotr);

	form.reset(); //limpa formulário.
} 