
	
        var nomedohotel = prompt("Por favor digite o nome do hotel.");
        var nome = prompt("Digite seu nome:")
        alert('Ola '+nome+' você esta no ' + nomedohotel + ' seja bem vindo !');
        ver_senha();
		function inicio() {
			var escolha = parseInt(prompt('Seja bem vindo ao Hotel '+ nomedohotel +' ' + nome +' é um imenso plazer ter você por aqui!. Selecione umas das opções abaixo.\n\n1. Reserva de quartos\n2. Cadastro de hospedes\n3. Abastecer carros\n4. Convidados\n5. Hora de comer\n6. Auditorio \n7. Eventos \n8. Manuntenção do ar condicionado\n9. Sair'));
  
			switch (escolha) {
                case 1:
                    reserva_quartos();
                    break;
                case 2:
                    cadastro_hospedes();
                    break;
                case 3:
                    abastecer_carros();
                    break;
                case 4:
                    convidados();
                    break;
                case 5:
                    horadecomer();
                    break;
                case 6:
                    auditorio();
                    break;
                case 7:
                    quehorasvcpode();
                    break;
                case 8:
                    manutencaoAr()
                    break;
                case 9:
                    sair();
                    break;
				case 10:
                    erro();
                    break;
		}
    }
		function reserva_quartos() {
			alert(' HOTEL'+nomedohotel+'- RESERVA DE QUARTOS');
            let diaria = parseInt(prompt("Qual o valor padrão da diária?"));
            var qdias = parseInt(prompt("Quantas diárias serão necessárias?"));
            var totaldiaria = diaria * qdias;
            if (diaria < 0){
            alert("Valor Invalido " + nome);
            reserva_quartos();
           }

           if (qdias < 0 || qdias > 30 ) {
           alert("Valor Invalido " + nome);
           reserva_quartos();
		  }
            alert("O valor de "+qdias+" dias de hospedagem é de "+totaldiaria);
            let nomedoh = prompt("Qual o nome do hóspede ?");
            var hosp= prompt(nome+", você confimar a hospedagem para "+nomedoh+" por "+qdias+" dias ? S/N");

         if (hosp ==='S' || hosp ==='s'){
         alert(nomedoh+", reserva efetuada para "+nomedoh+". O valor total é de 550.0.");
         inicio();
       }
         else {
         alert(nomedoh+', reserva não efetuada')
         inicio();
         } 
      }
      
		function cadastro_hospedes() {
			alert('HOTEL {NOME DO HOTEL} - CADASTRO DE HÓSPEDES');
            		
			var lista_hospedes = [];
			sistema_cadastrar_hospedes();
			function sistema_cadastrar_hospedes() {

				var escolha_hospedes = parseInt(prompt('Cadastro de Hóspedes\n\n Selecione uma opção: \n1. Cadastrar \n2. Pesquisar \n3. Sair'));

				if (escolha_hospedes === 1) {
					cadastrar_hospedes();
				} else if (escolha_hospedes === 2) {
					pesquisar_hospedes();
				} else if (escolha_hospedes === 3) {
					
				} else {
					erro_pesquisar_hospedes();
				}
			}
			
			function cadastrar_hospedes() {
		
				if (lista_hospedes.length >= 15){
					alert("Numero máximo de hóspedes cadastrados.");
				} else {	
					var nome_hospede = prompt('Por favor, informe o nome da(o) hóspede:');
                    
					
				
					lista_hospedes.push(nome_hospede);
					console.log(lista_hospedes);
					alert("Sucesso! Hóspede " + nome_hospede + " foi cadastrada(o) com sucesso!\n");
				}
				
				sistema_cadastrar_hospedes();
			}
			
			function pesquisar_hospedes() {
				var nome_hospede = prompt('Por favor, informe o nome da(o) hóspede para pesquisa:');
			
				if (lista_hospedes.includes(nome_hospede)){
					alert(nome_hospede + ' encontrada(o).')
				} else {
					alert(nome_hospede + ' não foi encontrada(o).')
				}
				
				sistema_cadastrar_hospedes()
			}
			
			function erro_pesquisar_hospedes(){
				alert('Por favor, informe um número entre 1 e 3');
				sistema_cadastrar_hospedes();
			}
			
			sistema_cadastrar_hospede();
            let diaria = parseInt(prompt("Qual o valor padrão da diária?"));
           for (i=0; i < 5; i++ ){
            let nomeh = prompt("Qual o nome do Hospede ?");
            if (nomeh == "Pare") {
               break;
            }
            let idadeh = parseInt(prompt("Qual a idade do Hóspede ?")); 
            if (idadeh <= 6 ){
                alert(nomeh+" Cadastrada(o) com sucesso."+nomeh+" Possui gratuidade")
            }
            else if (idadeh >= 60){
                alert(nomeh+" Cadastrada(o) com sucesso"+nomeh+"Paga meia.")
            }
            else if (idadeh > 6 || idadeh < 60){
                alert(nomeh+"Cadastrado(o) com sucesso.")
           } 
		  }
          inicio();
		}

		function abastecer_carros() {
			alert('HOTEL' + nomedohotel +' - ABASTECER');
            
            let porcento = 0.3;

			let wayne_alcool = parseFloat(prompt("Qual o valor do álcool no posto Wayne Oil?")) * 42;
			let wayne_gasolina = parseFloat(prompt("Qual o valor da gasolina no posto Wayne Oil?")) * 42;

            alert("Agora no posto Stark Petro !")

			let stark_alcool = parseFloat(prompt("Qual o valor do álcool no posto Stark Petrol?")) * 42;
			let stark_gasolina= parseFloat(prompt("Qual o valor da gasolina no posto Stark Petrol?")) * 42;

			if (wayne_gasolina < stark_gasolina) {
				  if (wayne_alcool <= (wayne_gasolina - (wayne_gasolina * porcento))) {
					alert(nome + ", é mais barato abastecer com álcool no posto Wayne Oil");
				} else {
					alert(nome + ", é mais barato abastecer com gasolina no posto Wayne Oil")
				}} 
            else {
				  if (stark_alcool <= (stark_gasolina - (stark_gasolina * porcento))) {
					alert(nome + ", é mais barato abastecer com álcool no posto Stark Petrol");
				} else {
					alert(nome + ", é mais barato abastecer com gasolina no posto Stark Petrol")
				}
			}

			inicio();
}

function manutencaoAr() {
    alert('HOTEL ' + nomedohotel + ' - MANUTENCAO AR CONDICIONADO');
        
            let mais_barata = "";
			let valor_mais_barato = 0;

			do {
				let nome_empresa = prompt("Qual o nome da empresa?");
				let valorAP = parseFloat(prompt("Qual o valor do aparelho?"));
				let quantAP= parseInt(prompt("Qual a quantidade de aparelhos?"));
				let desconto = parseInt(prompt("Qual o percentual de desconto?"));
				let minAP = parseInt(prompt("Qual o número mínimo de aparelhos para conseguir o desconto?"));
				let total = valorAP * quantAP;

				if (quantAP >= minAP) {
					total = total - (total * desconto / 100);
				}

				if (mais_barata == "" && valor_mais_barato == 0) {
					mais_barata = nome_empresa;
					valor_mais_barato = total;
				} else if (total < valor_mais_barato) {
					mais_barata = nome_empresa;
					valor_mais_barato = total
				}

				alert("O serviço de "+nome_empresa+" custará R$"+total);
				confirmacao_manutencao = prompt("Deseja informar novos dados, " + nome + "? (S/N)");
			} while (confirmacao_manutencao == "s" || confirmacao_manutencao == "S")

			alert("O orçamento de menor valor é o " + mais_barata + " com R$" + valor_mais_barato);

			inicio();
    
		}

       function convidados(){
        let garcom = 10.50;
        let gh = parseInt(prompt("Qual a duração do evento em horas ? "));
        let qh = parseInt(prompt("Quantos garçons serão necessarios ?"));   
        let total = garcom * gh * qh;
        alert("Custo total: R$ " + total);
        let reserva = prompt("Gostaria de efetuar a reserva ? S/N");

        if (reserva == "S" || reserva == "s"){
        alert(nome + ",reserva efetuada com sucesso");
        }  
       inicio();
       }
      function horadecomer(){
        
        let cafelitros = 0.2;
        let agualitros = 0.5;
        let qntsalgados = 7;

        let cafe = 0.80;
        let agua = 0.40;
        let salgados = (0.34 * 7);
        let nc = parseInt(prompt("Qual o numero de convidados para o evento ?"))
        if (nc > 350){
            alert("Quantidade de convidados superior á capacidade máxima.")
        }
        else {
        let total = (cafelitros * nc) * cafe + (agualitros * nc) * agua + (qntsalgados * nc) * salgados;

        alert("O evento precisará de " +cafelitros * nc+ " litros de café, " + agualitros * nc+ " litros de água, " + qntsalgados * nc + " salgados. O custo total do evento será de R$ "+total.toFixed(2));
        }
        let reserva = prompt("Gostaria de efetuar a reserva ? S/N");
        if (reserva == "S" || reserva == "s"){
            alert(nome +" ,reserva efetuada com sucesso.");
        }
        else (
            alert(nome + " ,reserva não efetuada.tente novamente ")
        )
    }

        function auditorio(){
        let laranja = 150;
        let nc = parseInt(prompt("Qual o numero de convidados para seu evento ?"));
    
        if (nc <= 0 ){
            alert("Numero de convidados invalidos");
        }
        else if (nc < 220 && nc > 1){
            if (nc > 150) {
            alert("Use o auditório Laranja (inclua mais "+(nc - laranja)+" cadeiras");
            }
          else {
            alert("Use o auditório Laranja.");
          }
        }  
        else {
            if (nc < 350){
                alert("Use o auditório Colorado");
            } else {
                alert("Quantidade de convidados superior á capacidade máxima.")
            }
        }
        inicio();
        }
        function quehorasvcpode(){
              let dia = (prompt("Qual o dia do seu evento ?"));
              let hora = (prompt("Qual hora do seu evento ?"));

              if (dia == "sabado" || dia == "domingo"){
                  if (hora >= 7 && hora <= 15){
                    alert("")
                 }  
               else {
                alert("Restaurante indisponivel.");
               }
            
              if (dia == "segunda" || dia == "terça");{
                 if (hora >= 7 && dia <= 23){
                    alert("")
                 }
                 else {
                    alert("Restaurante indisponivel.");
                 }}


              if (dia == "quarta" || dia == "quinta");{
                 if (hora >= 7 && dia <= 23){
                    alert("")
                 }
                 else {
                    alert("Restaurante indisponivel.");
                 }}

               if (dia == "sexta");{
                 if (hora >= 7 && dia <= 23){
                    alert("")
                 }

                 else {
                    alert("Restaurante indisponivel.");
                 }}}
                let nde = prompt("Qual o nome da empresa ?");
                alert("Restaurante reservado para "+nde+""+dia+" ás "+hora+"hrs.");


        inicio();
        }
    
		function erro() {
			alert('Por favor, informe um número entre 1 e 4');
			inicio();
		}

		function sair() {
			var confirma = confirm('Você deseja sair?');
			if (confirma) {
                alert("Agrademos por utilizar os serviços do banco. "+ nome + " foi um plazer você por aqui!");
				window.close();
			} else {
				inicio();
			}
		}
        function ver_senha() {
            var senha = parseInt(prompt("Por favor" + nome + " digite sua senha: "));

            if (senha != 2678 || senha === " ") {
                alert("Senha inválida..."); 
				ver_senha();
            }
        }
      
       
        
		inicio();
