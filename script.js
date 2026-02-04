const elDoc = document.getElementById("doc");
const btnValidate = document.getElementById("btnValidate");
const btnClear = document.getElementById("btnClear");
const btnCopy = document.getElementById("btnCopy");

const resultBox = document.getElementById("result");
const resultTitle = document.getElementById("resultTitle");
const resultDesc = document.getElementById("resultDesc");

function onlyDigits(str){ return (str || "").replace(/\D/g, ""); }

function formatCPF(d){
  return d
    .replace(/^(\d{3})(\d)/, "$1.$2")
    .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3-$4");
}
function formatCNPJ(d){
  return d
    .replace(/^(\d{2})(\d)/, "$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/^(\d{2})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3/$4")
    .replace(/^(\d{2})\.(\d{3})\.(\d{3})\/(\d{4})(\d)/, "$1.$2.$3/$4-$5");
}

function isAllSameDigits(d){
  return /^(\d)\1+$/.test(d);
}

// ===== CPF =====
function validateCPF(cpf){
  if(cpf.length !== 11) return false;
  if(isAllSameDigits(cpf)) return false;

  const calc = (base, factorStart) => {
    let sum = 0;
    for(let i=0, f=factorStart; i<base.length; i++, f--){
      sum += Number(base[i]) * f;
    }
    const mod = sum % 11;
    return mod < 2 ? 0 : 11 - mod;
  };

  const d1 = calc(cpf.slice(0,9), 10);
  const d2 = calc(cpf.slice(0,9) + String(d1), 11);

  return cpf.endsWith(`${d1}${d2}`);
}

// ===== CNPJ =====
function validateCNPJ(cnpj){
  if(cnpj.length !== 14) return false;
  if(isAllSameDigits(cnpj)) return false;

  const calc = (base) => {
    const weights = base.length === 12
      ? [5,4,3,2,9,8,7,6,5,4,3,2]
      : [6,5,4,3,2,9,8,7,6,5,4,3,2];

    let sum = 0;
    for(let i=0; i<base.length; i++){
      sum += Number(base[i]) * weights[i];
    }
    const mod = sum % 11;
    return mod < 2 ? 0 : 11 - mod;
  };

  const d1 = calc(cnpj.slice(0,12));
  const d2 = calc(cnpj.slice(0,12) + String(d1));

  return cnpj.endsWith(`${d1}${d2}`);
}

function setResult(type, title, desc){
  resultBox.classList.remove("good","bad");
  if(type) resultBox.classList.add(type);
  resultTitle.textContent = title;
  resultDesc.textContent = desc;
}

function autoFormat(){
  const digits = onlyDigits(elDoc.value);

  if(digits.length <= 11){
    elDoc.value = formatCPF(digits);
  } else {
    elDoc.value = formatCNPJ(digits.slice(0,14));
  }
}

function validateNow(){
  const digits = onlyDigits(elDoc.value);

  if(digits.length === 0){
    setResult(null, "Aguardando...", "Digite um CPF (11) ou CNPJ (14) para validar.");
    return;
  }

  if(digits.length === 11){
    const ok = validateCPF(digits);
    setResult(
      ok ? "good" : "bad",
      ok ? "CPF VÁLIDO ✅" : "CPF INVÁLIDO ❌",
      `Formato: ${formatCPF(digits)}`
    );
    return;
  }

  if(digits.length === 14){
    const ok = validateCNPJ(digits);
    setResult(
      ok ? "good" : "bad",
      ok ? "CNPJ VÁLIDO ✅" : "CNPJ INVÁLIDO ❌",
      `Formato: ${formatCNPJ(digits)}`
    );
    return;
  }

  setResult("bad", "Tamanho inválido ❌", "CPF tem 11 dígitos e CNPJ tem 14 dígitos.");
}

elDoc.addEventListener("input", () => {
  autoFormat();

  const digits = onlyDigits(elDoc.value);
  if(digits.length === 11 || digits.length === 14) validateNow();
  else setResult(null, "Aguardando...", "Digite um CPF (11) ou CNPJ (14) para validar.");
});

btnValidate.addEventListener("click", validateNow);

btnClear.addEventListener("click", () => {
  elDoc.value = "";
  setResult(null, "Aguardando...", "Digite um CPF (11) ou CNPJ (14) para validar.");
  elDoc.focus();
});

btnCopy.addEventListener("click", async () => {
  const value = elDoc.value.trim();
  if(!value){
    setResult("bad", "Nada para copiar ❌", "Digite um CPF/CNPJ antes de copiar.");
    return;
  }
  try{
    await navigator.clipboard.writeText(value);
    setResult("good", "Copiado ✅", `Copiei: ${value}`);
  }catch{
    setResult("bad", "Falha ao copiar ❌", "Seu navegador bloqueou a cópia. Copie manualmente.");
  }
});

// init
setResult(null, "Aguardando...", "Digite um CPF (11) ou CNPJ (14) para validar.");
