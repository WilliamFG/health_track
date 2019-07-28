function PressaoValidaCampos(){
	//event.preventDefault();

	var camposValidados = true

	var form = document.querySelector("#formAdicionaPressao");//lê o formulário

	var data_pressao = form.dt_pressao.value; //lê a data da pressão digitada pelo usuário na tela
	var numero_pressao = form.nr_Pressao.value; // lê o pressao

	if (data_pressao == "" || numero_pressao == "")

	{
		camposValidados = false
		alert ("existem campos vazios, favor preencher todos os campos!"); 
	}

	return camposValidados;
}