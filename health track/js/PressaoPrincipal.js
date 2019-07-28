// Principal pressao Health track

var reg_add_pressao = document.querySelector(".add_pressao"); // acesso um elemento do DOM
reg_add_pressao.addEventListener("click", submeterFormPressao); // escuta evento click do botão

function submeterFormPressao(event){
	event.preventDefault();

	var validacaoCamposOK = PressaoValidaCampos() // chama validação dos campos

		if (validacaoCamposOK) { // caso os campos estejam válidos insere atividade na tabela

			var InserirDadosTabela = PressaoInsere()
		}	

}




