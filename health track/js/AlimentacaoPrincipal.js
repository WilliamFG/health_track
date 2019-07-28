// Principal registro alimentação Health track

var reg_add_alimentacao = document.querySelector(".add_alimentacao"); // acesso um elemento do DOM
reg_add_alimentacao.addEventListener("click", submeterFormPeso); // escuta evento click do botão

function submeterFormPeso(event){
	event.preventDefault();

	var validacaoCamposOK = AlimentacaoValidaCampos() // chama validação dos campos

		if (validacaoCamposOK) { // caso os campos estejam válidos insere atividade na tabela

			var InserirDadosTabela = AlimentacaoInsere()
		}	

}




