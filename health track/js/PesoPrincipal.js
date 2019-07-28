// Principal pesagem Health track

var reg_add_peso = document.querySelector(".add_peso"); // acesso um elemento do DOM
reg_add_peso.addEventListener("click", submeterFormPeso); // escuta evento click do botão

function submeterFormPeso(event){
	event.preventDefault();

	var validacaoCamposOK = PesoValidaCampos() // chama validação dos campos

		if (validacaoCamposOK) { // caso os campos estejam válidos insere atividade na tabela

			var InserirDadosTabela = PesoInsere()
		}	

}




