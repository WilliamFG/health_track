function AtividadeValidaCampos(){
	//event.preventDefault();

	var camposValidados = true

	var form = document.querySelector("#formAdicionaAtividade");//lê o formulário

	var data_atividade = form.dt_Atividade.value; //lê a data da atividade digitada pelo usuário na tela
	var desc_atividade = form.tx_atividade.value; // lê a descrição da atividade
	var tempo_atividade = form.tmp_atividade.value; // lê o tempo de atividade
	var calorias_atividade = form.cal_atividade.value; // lê as calorias 

	if (data_atividade == "" || desc_atividade == "" || tempo_atividade == "" || calorias_atividade == ""  )

	{
		camposValidados = false
		alert ("existem campos vazios, favor preencher todos os campos!"); 
	}

	return camposValidados;
}