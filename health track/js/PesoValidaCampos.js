function PesoValidaCampos(){
	//event.preventDefault();

	var camposValidados = true

	var form = document.querySelector("#formAdicionaPeso");//lê o formulário

	var data_pesagem = form.dt_pesagem.value; //lê a data da pesagem digitada pelo usuário na tela
	var numero_peso = form.nr_Peso.value; // lê o peso

	if (data_pesagem == "" || numero_peso == "")

	{
		camposValidados = false
		alert ("existem campos vazios, favor preencher todos os campos!"); 
	}

	else if (numero_peso <= 0) 

	{
		camposValidados = false
		alert ("insira um valor maior que 0kg !"); 
	}

	else if (numero_peso > 500) 

	{
		camposValidados = false
		alert ("insira um valor menor que 500kg !"); 
	
	}

	return camposValidados;
}