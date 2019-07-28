function AlimentacaoValidaCampos(){
	//event.preventDefault();

	var camposValidados = true

	var form = document.querySelector("#formAdicionaAlimentacao");//lê o formulário

	var data_alimentacao = form.dt_alimentacao.value; //lê a data da alimentacao digitada pelo usuário na tela
	var numero_alimentacao = form.nr_Alimentacao.value; // lê o aliemntação

	if (data_alimentacao == "" || numero_alimentacao == "")

	{
		camposValidados = false
		alert ("existem campos vazios, favor preencher todos os campos!"); 
	}

	else if (numero_alimentacao <= 0) 

	{
		camposValidados = false
		alert ("insira um valor maior que 0kg !"); 
	}

	else if (numero_alimentacao > 500) 

	{
		camposValidados = false
		alert ("insira um valor menor que 500kg !"); 
	
	}

	return camposValidados;
}