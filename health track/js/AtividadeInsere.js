function AtividadeInsere(){
	//event.preventDefault(); // altera o comportamento padrão do botão de recarregar a página

	var form = document.querySelector("#formAdicionaAtividade");//lê o formulário

	var data_atividade = form.dt_Atividade.value; //lê a data da atividade digitada pelo usuário na tela
	var desc_atividade = form.tx_atividade.value; // lê a descrição da atividade
	var tempo_atividade = form.tmp_atividade.value; // lê o tempo de atividade
	var calorias_atividade = form.cal_atividade.value; // lê as calorias 

	var atividadeTr = document.createElement("tr"); //cria o tr dentro do arquivo html (cria a linha da tabela)
	
	var dtAtividadeTd = document.createElement("td"); // cria td data da atividade
	var descAtividadeTd = document.createElement("td");// cria td descrição da atividade
	var tempoAtividadeTd = document.createElement("td"); // cria td tempo de atividade
	var caloriasAtividadeTd = document.createElement("td");// cria td calorias

	dtAtividadeTd.textContent = data_atividade; // insere valores lidos dentro do td
	descAtividadeTd.textContent = desc_atividade; // insere valores lidos dentro do td
	tempoAtividadeTd.textContent = tempo_atividade+" min"; // insere valores lidos dentro do td
	caloriasAtividadeTd.textContent = calorias_atividade+" cal"; // insere valores lidos dentro do td

	atividadeTr.appendChild(dtAtividadeTd); //insere as TDs como filhos do TBody (atividadeTr)
	atividadeTr.appendChild(descAtividadeTd);//insere as TDs como filhos do TBody (atividadeTr)
	atividadeTr.appendChild(tempoAtividadeTd);//insere as TDs como filhos do TBody (atividadeTr)
	atividadeTr.appendChild(caloriasAtividadeTd);//insere as TDs como filhos do TBody (atividadeTr)

	var tabela = document.querySelector("#tabelaAtividade");
	tabela.appendChild(atividadeTr);

	form.reset(); //limpa formulário.
}