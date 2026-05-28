// Máscara automática no CEP: 00000-000
document.getElementById("cep").addEventListener("input", function () {
  let valor = this.value.replace(/\D/g, "");
  if (valor.length > 5) {
    valor = valor.replace(/^(\d{5})(\d{0,3})/, "$1-$2");
  }
  this.value = valor;
});

// Converter UF para maiúsculo automaticamente
document.getElementById("uf").addEventListener("input", function () {
  this.value = this.value.toUpperCase();
});

// Envio do formulário com validações
document.getElementById("formEndereco").addEventListener("submit", function (e) {
  e.preventDefault();

  const cep = document.getElementById("cep").value;
  const logradouro = document.getElementById("logradouro").value;
  const numero = document.getElementById("numero").value;
  const uf = document.getElementById("uf").value;

  // Validar CEP usando regex com grupos de captura
  const regexCEP = /^(\d{5})-(\d{3})$/;
  if (!regexCEP.test(cep)) {
    alert("CEP inválido. Use o formato 00000-000.");
    return;
  }

  // Validar logradouro
  if (logradouro.trim().length < 5) {
    alert("Logradouro deve conter no mínimo 5 caracteres.");
    return;
  }

  // Validar número
  const regexNumero = /^\d+$/;
  if (!regexNumero.test(numero)) {
    alert("Número deve conter apenas dígitos.");
    return;
  }

  // Validar UF usando regex
  const regexUF = /^[A-Z]{2}$/;
  if (!regexUF.test(uf)) {
    alert("UF inválida. Use 2 letras maiúsculas (ex: SP, RJ).");
    return;
  }

  alert("Endereço cadastrado com sucesso");
});
