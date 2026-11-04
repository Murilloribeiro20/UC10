// Essa função extrai os campos do formulrio
function validateLead({ name, email, phone, interest }) {
// Cria um vetor que bai acumular os problemas encontrados ao longo da validação
  const errors = [];

// Validação do nome: verifica se o nome nõa é uma string ou se tem menos de 3 caracteres
  if (typeof name !== "string" || name.trim().length < 3) {
    errors.push("Informe seu nome (mínimo de 2 caracteres).");
  }
// Validação de E-mail: Verifica se o e-mail não é uma string ou se ele nõa passa
// no teste de validação de e-mail
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  //validação de e-mail

  if (typeof email !== "string" || !emailPattern.test(email.trim())) {
    errors.push("Informe um e-mail válido.");
  }
// Validação de telefone: Verifica se o telefone foi preenchido no formulário e se o tipo
// da variavel "phone é diferente de string"
  if (phone && typeof phone !== "string") {
    errors.push("O telefone deve ser um texto.");
  }
// Cria um vetor com as opções de modalidade de curso
  const allowedInterests = ["Online", "Presencial", "Ainda não sei"];

  if (interest && !allowedInterests.includes(interest)) {
    errors.push("Selecione uma modalidade válida.");
  }
// se for igual a zero = true; senão = false
  return { valid: errors.length === 0, errors };

  
}

function normalizeCourseFilter(modality) {
  if (!modality || modality === "Todos") return null;
  const allowed = ["Online", "Presencial"];
  return allowed.includes(modality) ? modality : null;
}

module.exports = { validateLead, normalizeCourseFilter };
