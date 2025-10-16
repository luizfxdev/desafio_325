# 🚀 Aventura Galáctica: Códigos dos Planetas

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-Concluído-success?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

## 📋 Sobre o Projeto

Uma aplicação web interativa e imersiva que decifra códigos de acesso de planetas baseado na soma dos valores numéricos de cada letra do alfabeto. O projeto apresenta uma interface futurística com tema espacial, animações holográficas e design responsivo.

**Deploy:** [Ver Demonstração](#) | **Repositório:** [GitHub](https://github.com/luizfxdev/desafio_325)

---

## 🎯 Desafio

Cada planeta possui um código de acesso único, calculado pela soma dos valores numéricos de cada letra do seu nome, onde A=1, B=2, C=3... Z=26.

### Exemplo de Cálculo:
**Planeta: Zogrox**
- Z: 26
- O: 15
- G: 7
- R: 18
- O: 15
- X: 24

**Código de Acesso: 105**

---

## ✨ Funcionalidades

- 🌌 **Interface Espacial Imersiva**: Vídeo de fundo em alta resolução com tema sci-fi
- 🎵 **Áudio Ambiente**: Música tema com controles de play/pause
- ✨ **Efeitos Holográficos**: Botões com animações de glitch e scan lines
- 📊 **Cálculo Detalhado**: Exibição passo a passo da decodificação
- 📱 **Design Responsivo**: Adaptação completa para dispositivos móveis
- ⌨️ **Navegação por Teclado**: Suporte para tecla Enter
- 🎨 **Tema Cyberpunk**: Paleta de cores neon (ciano e magenta)

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Estilização avançada com animações e glassmorphism
- **JavaScript (Vanilla)**: Lógica de cálculo e manipulação do DOM
- **Design Responsivo**: Flexbox e Media Queries

---

## 🎨 Principais Recursos de Design

### Animações CSS

```css
@keyframes glitch {
    0%, 100% { transform: translateX(0); opacity: 0.3; }
    20% { transform: translateX(-5px); opacity: 0.5; }
    40% { transform: translateX(5px); opacity: 0.7; }
    60% { transform: translateX(-3px); opacity: 0.5; }
    80% { transform: translateX(3px); opacity: 0.3; }
}

@keyframes scan {
    0% { top: -10%; }
    100% { top: 110%; }
}
```

### Efeito Holográfico nos Botões

```css
.hologram {
    border: 2px solid rgba(0, 255, 255, 0.5);
    background: rgba(0, 255, 255, 0.1);
    box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
    backdrop-filter: blur(5px);
}
```

---

## 💻 Lógica Principal

### Função de Cálculo do Código

```javascript
function calcularCodigoPlaneta(nomeDoPlaneta) {
    const normalizedName = nomeDoPlaneta.trim().toUpperCase();
    
    if (!/^[A-ZÀ-Ÿ]+$/i.test(normalizedName)) {
        return null;
    }
    
    let totalCode = 0;
    const calculationSteps = [];
    
    for (let i = 0; i < normalizedName.length; i++) {
        const char = normalizedName[i];
        const charCode = char.charCodeAt(0);
        
        let value;
        if (charCode >= 65 && charCode <= 90) {
            value = charCode - 64; // A=65, então A-64=1
        } else {
            value = ((charCode - 64) % 26) || 26;
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
```

---

## 📂 Estrutura do Projeto

```
desafio_325/
│
├── index.html          # Estrutura HTML principal
├── styles.css          # Estilização e animações
├── script.js           # Lógica JavaScript
├── assets/
│   ├── background.mp4  # Vídeo de fundo espacial
│   └── theme.mp3       # Música ambiente
└── README.md           # Documentação
```

---

## 🚀 Como Executar

1. **Clone o repositório:**
```bash
git clone https://github.com/luizfxdev/desafio_325.git
```

2. **Acesse o diretório:**
```bash
cd desafio_325
```

3. **Adicione os assets:**
   - Coloque o arquivo `background.mp4` na pasta `assets/`
   - Coloque o arquivo `theme.mp3` na pasta `assets/`

4. **Abra o arquivo:**
```bash
# Abra o index.html no seu navegador
```

---

## 🧪 Exemplos de Teste

| Planeta | Código Esperado |
|---------|----------------|
| Terra   | 62            |
| Marte   | 57            |
| Venus   | 81            |
| Zogrox  | 105           |

---

## 📱 Responsividade

O projeto adapta-se perfeitamente a diferentes tamanhos de tela:

- **Desktop**: Container posicionado à esquerda com largura fixa
- **Tablet**: Ajuste de espaçamentos e dimensões
- **Mobile**: Container centralizado, botões empilhados verticalmente

```css
@media (max-width: 768px) {
    .container {
        position: static;
        transform: none;
        margin: 30px auto;
        width: calc(100% - 40px);
    }
    
    .button-section {
        flex-direction: column;
    }
}
```

---

## 🎯 Aprendizados

- ✅ Manipulação de strings e códigos ASCII
- ✅ Validação de entrada de dados
- ✅ Criação de animações CSS avançadas
- ✅ Design responsivo com Flexbox
- ✅ Controle de elementos de mídia (áudio/vídeo)
- ✅ Técnicas de glassmorphism e backdrop-filter
- ✅ Desenvolvimento de UI/UX imersiva

---

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abrir um Pull Request

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

**LuizFXdev** | [GitHub](https://github.com/luizfxdev) | [LinkedIn](https://www.linkedin.com/in/luizfxdev)

---

## 🌟 Mostre seu apoio

Se este projeto foi útil para você, considere dar uma ⭐️ no repositório!

---

<div align="center">
  <sub>Desenvolvido com 💙 por Luiz Felipe</sub>
</div>
