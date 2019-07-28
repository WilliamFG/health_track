// Principal atividade física Health track

// Insere atividade física

var reg_add_atividade = document.querySelector(".add_atividade"); // acesso um elemento do DOM
reg_add_atividade.addEventListener("click", submeterFormAtividade); // escuta evento click do botão

function submeterFormAtividade(event){
	event.preventDefault();

	var validacaoCamposOK = AtividadeValidaCampos() // chama validação dos campos

		if (validacaoCamposOK) { // caso os campos estejam válidos insere atividade na tabela

			var InserirDadosTabela = AtividadeInsere()
		}	

}

