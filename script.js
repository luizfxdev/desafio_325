// Elementos do DOM
const planetNameInput = document.getElementById('planet-name');
const decodeBtn = document.getElementById('decode-btn');
const returnBtn = document.getElementById('return-btn');
const resultSection = document.getElementById('result-section');
const resultContent = document.getElementById('result-content');
const backgroundAudio = document.getElementById('background-audio');
const playAudioBtn = document.getElementById('play-audio');
const pauseAudioBtn = document.getElementById('pause-audio');

/**
 * Função principal para calcular o código do planeta
 * @param {string} nomeDoPlaneta - Nome do planeta a ser decodificado
 * @returns {object} - Objeto contendo o código total e os detalhes do cálculo
 */
function calcularCodigoPlaneta(nomeDoPlaneta) {
  // Remove espaços extras e converte para maiúsculas
  const normalizedName = nomeDoPlaneta.trim().toUpperCase();

  // Valida se o nome contém apenas letras
  if (!/^[A-ZÀ-Ÿ]+$/i.test(normalizedName)) {
    return null;
  }

  let totalCode = 0;
  const calculationSteps = [];

  // Calcula o valor de cada letra
  for (let i = 0; i < normalizedName.length; i++) {
    const char = normalizedName[i];
    const charCode = char.charCodeAt(0);

    // Valor baseado na posição no alfabeto (A=1, B=2, ..., Z=26)
    let value;

    if (charCode >= 65 && charCode <= 90) {
      value = charCode - 64; // A=65, então A-64=1
    } else {
      // Para caracteres acentuados, usa uma aproximação
      value = (charCode - 64) % 26 || 26;
    }

    totalCode += value;
    calculationSteps.push({
      letter: char,
      value: value
    });
  }

  return {
    total: totalCode,
    steps: calculationSteps,
    planetName: nomeDoPlaneta.trim()
  };
}

/**
 * Exibe o resultado da decodificação na interface
 * @param {object} result - Resultado do cálculo
 */
function displayResult(result) {
  if (!result) {
    resultContent.innerHTML = `
            <p class="error-message">
                ⚠️ Erro: Por favor, insira um nome válido contendo apenas letras.
            </p>
        `;
    resultSection.classList.add('active');
    return;
  }

  // Constrói o HTML com os passos do cálculo
  let stepsHTML = '<div class="calculation-details">';
  stepsHTML += '<p><strong>🔍 Cálculo Detalhado:</strong></p>';

  result.steps.forEach(step => {
    stepsHTML += `
            <div class="calculation-step">
                <strong>${step.letter}</strong>: ${step.value}
            </div>
        `;
  });

  // Adiciona a soma
  const sumExpression = result.steps.map(s => s.value).join(' + ');
  stepsHTML += `
        <div class="calculation-step" style="margin-top: 15px;">
            <strong>Soma:</strong> ${sumExpression} = ${result.total}
        </div>
    `;

  stepsHTML += '</div>';

  // Adiciona o resultado final destacado
  const finalHTML = `
        <div class="final-result">
            🌟 Código de Acesso do Planeta <strong>${result.planetName}</strong>: ${result.total}
        </div>
    `;

  resultContent.innerHTML = stepsHTML + finalHTML;
  resultSection.classList.add('active');
}

/**
 * Limpa o resultado e reseta o formulário
 */
function clearResult() {
  resultSection.classList.remove('active');
  resultContent.innerHTML = '';
  planetNameInput.value = '';
  planetNameInput.focus();
}

// Event Listeners

// Botão DECIFRAR
decodeBtn.addEventListener('click', () => {
  const planetName = planetNameInput.value;

  if (!planetName.trim()) {
    resultContent.innerHTML = `
            <p class="error-message">
                ⚠️ Por favor, insira o nome de um planeta.
            </p>
        `;
    resultSection.classList.add('active');
    return;
  }

  const result = calcularCodigoPlaneta(planetName);
  displayResult(result);
});

// Botão RETORNAR
returnBtn.addEventListener('click', () => {
  clearResult();
});

// Permite usar Enter para decifrar
planetNameInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    decodeBtn.click();
  }
});

// Controles de áudio
playAudioBtn.addEventListener('click', () => {
  backgroundAudio.play();
  playAudioBtn.style.opacity = '0.5';
  pauseAudioBtn.style.opacity = '1';
});

pauseAudioBtn.addEventListener('click', () => {
  backgroundAudio.pause();
  pauseAudioBtn.style.opacity = '0.5';
  playAudioBtn.style.opacity = '1';
});

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  planetNameInput.focus();
  pauseAudioBtn.style.opacity = '0.5';
});
