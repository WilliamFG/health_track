function PressaoInsere(){
	//event.preventDefault(); // altera o comportamento padrão do botão de recarregar a página

	var form = document.querySelector("#formAdicionaPressao");//lê o formulário

	var data_pressao = form.dt_pressao.value; //lê a data da pressão digitada pelo usuário na tela
	var numero_pressao = form.nr_Pressao.value; // lê o pressao

	var Pressaotr = document.createElement("tr"); //cria o tr dentro do arquivo html (cria a linha da tabela)
	
	var dtPressaoTd = document.createElement("td"); // cria td data da pressão
	var nrPressaoTd = document.createElement("td");// cria td pressão
	
	dtPressaoTd.textContent = data_pressao; // insere valores lidos dentro do td
	nrPressaoTd.textContent = numero_pressao + " mmHg"; // insere valores lidos dentro do td


	Pressaotr.appendChild(dtPressaoTd); //insere as TDs como filhos do TBody (Pressaotr)
	Pressaotr.appendChild(nrPressaoTd);//insere as TDs como filhos do TBody (Pressaotr)


	var tabela = document.querySelector("#tabelaPressao");
	tabela.appendChild(Pressaotr);

	form.reset(); //limpa formulário.
}