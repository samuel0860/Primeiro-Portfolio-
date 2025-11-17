# 💻 Portfólio - Samuel da Silva Sales

> Portfólio pessoal de um desenvolvedor Full Stack apaixonado por tecnologia e inovação.


## 🌟 Sobre o Projeto

Este é meu portfólio pessoal, desenvolvido para apresentar minhas habilidades, experiências profissionais e projetos como Desenvolvedor Full Stack. O site conta com um design moderno, responsivo e interativo.

**🔗 Acesse:** [https://samuel0860.github.io/Primeiro-Portfolio-/](https://samuel0860.github.io/Primeiro-Portfolio-/)

## ✨ Características

- 🎨 **Design Moderno** - Interface clean com gradientes vibrantes (azul, roxo e rosa)
- 📱 **Totalmente Responsivo** - Adaptável para desktop, tablet e mobile
- 🖼️ **Alternância de Fotos** - Transição suave entre imagens de perfil
- 🎯 **Carrossel de Habilidades** - Apresentação animada das tecnologias
- 🔗 **Integração com GitHub** - Projetos carregados automaticamente via API
- ⚡ **Rolagem Suave** - Navegação fluida pela página
- 🎭 **Efeitos Glassmorphism** - Cards com efeito de vidro fosco
- 💫 **Animações Interativas** - Hover effects e transições suaves

## 🛠️ Tecnologias Utilizadas

### Front-end
- **HTML5** - Estrutura semântica
- **CSS3** - Estilização avançada com Flexbox e Grid
- **JavaScript ES6+** - Interatividade e consumo de API

### Bibliotecas & Frameworks
- **Font Awesome 6.4.0** - Ícones vetoriais
- **Google Fonts (Poppins)** - Tipografia moderna
- **DevIcons** - Ícones de tecnologias

### APIs
- **GitHub REST API** - Carregamento dinâmico de repositórios

## 📂 Estrutura do Projeto

```
Primeiro-Portfolio-/
│
├── index.html          # Estrutura HTML principal
├── style.css           # Estilos e animações
├── script.js           # Lógica e interatividade
├── foto1.PNG           # Foto de perfil 1
├── foto2.PNG           # Foto de perfil 2
└── README.md           # Documentação do projeto
```

## 🚀 Como Executar

### Opção 1: Visualização Local

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/samuel0860/Primeiro-Portfolio-.git
   ```

2. **Navegue até a pasta:**
   ```bash
   cd Primeiro-Portfolio-
   ```

3. **Abra o arquivo:**
   - Abra o arquivo `index.html` diretamente no seu navegador
   - Ou use uma extensão como Live Server no VS Code

### Opção 2: GitHub Pages

O site está hospedado automaticamente via GitHub Pages:
- **URL:** [https://samuel0860.github.io/Primeiro-Portfolio-/](https://samuel0860.github.io/Primeiro-Portfolio-/)

## 🎨 Paleta de Cores

| Cor | Hexadecimal | Uso |
|-----|-------------|-----|
| Azul | `#4a9eff` | Títulos e destaques |
| Roxo | `#a855f7` | Gradientes e bordas |
| Rosa | `#ec4899` | Acentos e efeitos |
| Fundo Escuro 1 | `#0f0f1e` | Background principal |
| Fundo Escuro 2 | `#1a1a2e` | Background secundário |

## 📋 Seções do Site

### 🏠 Header
- Foto de perfil com alternância automática (5s)
- Nome e título profissional
- Links para redes sociais (GitHub, LinkedIn, Instagram, WhatsApp, Email)

### 👤 Sobre Mim
- Apresentação pessoal
- Formação acadêmica
- Experiências e objetivos

### 💼 Habilidades
- Carrossel animado de tecnologias
- Ícones oficiais das ferramentas
- Efeito hover interativo

### 🏢 Experiência
- Cargo atual na Bartofil
- Experiência como Freelancer
- Cards com animação ao hover

### 🚀 Projetos
- Integração automática com GitHub API
- Filtragem de repositórios específicos
- Informações: nome, descrição, linguagem, stars e forks
- Link direto para o repositório

### 📞 Contato
- Cards interativos com ícones
- Telefone, email e redes sociais
- Links diretos funcionais

## 🔧 Personalização

### Alterar Fotos de Perfil

No arquivo `index.html`, linha ~14-15:
```html
<img src="SUA_FOTO_1.PNG" alt="Samuel Sales" class="profile-image active" id="img1">
<img src="SUA_FOTO_2.PNG" alt="Samuel Sales" class="profile-image" id="img2">
```

### Adicionar/Remover Habilidades

No arquivo `index.html`, seção de habilidades (~45):
```html
<div class="skill-card">
    <img src="URL_DO_ICONE" alt="Nome da Tecnologia">
    <p>Nome da Tecnologia</p>
</div>
```

### Filtrar Repositórios

No arquivo `script.js`, linha ~15:
```javascript
const excludedRepos = ['repo1', 'repo2', 'repo3'];
```

### Alterar Cores

No arquivo `style.css`, modifique as variáveis de cor:
- Azul: `#4a9eff`
- Roxo: `#a855f7`
- Rosa: `#ec4899`

## 📱 Responsividade

O site é totalmente responsivo e se adapta a diferentes tamanhos de tela:

- **Desktop:** Layout completo com grid de 3 colunas
- **Tablet:** Grid adaptativo de 2 colunas
- **Mobile:** Layout em coluna única

Breakpoint principal: `768px`

## 🤝 Contribuições

Sugestões e melhorias são sempre bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abrir um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar como referência ou base para seu próprio portfólio.

## 👨‍💻 Autor

**Samuel da Silva Sales**

- 💼 Programador Full Stack
- 🎓 Análise e Desenvolvimento de Sistemas
- 📍 Barão de Cocais, Minas Gerais, Brasil

### 🔗 Conecte-se comigo:

[![GitHub](https://img.shields.io/badge/GitHub-samuel0860-181717?logo=github)](https://github.com/samuel0860)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Samuel%20Sales-0A66C2?logo=linkedin)](https://www.linkedin.com/in/samuel-sales-a02a5726a)
[![Instagram](https://img.shields.io/badge/Instagram-@samuel.sales.7315-E4405F?logo=instagram)](https://www.instagram.com/samuel.sales.7315)
[![Email](https://img.shields.io/badge/Email-Muelsales08@gmail.com-EA4335?logo=gmail)](mailto:Muelsales08@gmail.com)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-(31)%2097184--0575-25D366?logo=whatsapp)](https://wa.me/5531971840575)

---

<div align="center">
  <p>⭐ Se este projeto te ajudou de alguma forma, considere dar uma estrela!</p>
  <p>💻 Desenvolvido com paixão por Samuel da Silva Sales</p>
  <p>📅 2025</p>
</div>