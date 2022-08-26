const form = document.getElementById("form-deposito");
const nomeBeneficiario = document.getElementById("nome-beneficiario");


function validaNome(nomeCompleto){
    const nomeComoArray = nomeCompleto.split(" ")
    return nomeComoArray.length >= 2;
}

form.addEventListener("submit",function(e){
    let formValido = false;
    e.preventDefault(); 

    const numeroContaBeneficiario = document.getElementById("numero-conta");
    const valorDeposito = document.getElementById("valor-deposito");
    const mensagemSucesso = `Montante de:  <b>${valorDeposito.value}</b> depositado para o cliente:<b> ${nomeBeneficiario.value}</b> - conta:  <b>${numeroContaBeneficiario.value}</b>`;

    formValido = validaNome(nomeBeneficiario.value)
    if (formValido){
        const containermensagemsucesso = document.querySelector(".mensagem-sucesso");
        containermensagemsucesso.innerHTML = mensagemSucesso;
        containermensagemsucesso.style.display = "block";


        nomeBeneficiario.value = "";
        numeroContaBeneficiario.value = "";
        valorDeposito.value = "";
    }
    else
        nomeBeneficiario.style.border = "1px solid red";   
    
    

})

nomeBeneficiario.addEventListener("keyup",function(e){
    console.log(e.target.value);
    formValido = validaNome(e.target.value);

    if (!formValido){

        nomeBeneficiario.classList.add("error");
        // nomeBeneficiario.style.border = "1px solid red";   
        document.querySelector(".error-message").style.display ="block";
    }
    else {
        nomeBeneficiario.classList.remove("error")
        nomeBeneficiario.style.border = "";
        document.querySelector(".error-message").style.display ="none";
  

    }
    
    
})

