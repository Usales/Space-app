# Space App 🚀

Um projeto React moderno que simula uma galeria de fotos espaciais, desenvolvido durante o curso da Alura.

## 🆕 Alterações Recentes

- Filtro de busca por tags totalmente funcional e visualmente destacado.
- Barra de pesquisa global no cabeçalho, filtrando fotos em tempo real por título.
- Filtro combinado: busca por texto + tags.
- Novas rotas: "Mais Curtidas" e "Surpreenda-me", acessíveis pela barra lateral.
- Página "Temas" com cards visuais e imagens temáticas.
- Melhoria visual dos cards (efeito hover, responsividade, acessibilidade).
- Componentização aprimorada e centralização do estado de busca.

## 🛠️ Tecnologias Utilizadas

- React
- Vite
- Styled Components
- React Icons
- React Hooks (useState, useEffect)
- CSS Grid e Flexbox
- JavaScript ES6+

## ✨ Funcionalidades

- Galeria de fotos com layout responsivo
- Modal para visualização ampliada das imagens
- Sistema de favoritos
- Filtros por tags
- Busca por texto no cabeçalho
- Filtro combinado (tags + texto)
- Seção de fotos populares
- Interface moderna e intuitiva
- Rotas para páginas temáticas

## 🎨 UI/UX

O projeto foi desenvolvido seguindo princípios modernos de UI/UX:

- **Design System**: Utilização de cores, fontes e espaçamentos consistentes
- **Feedback Visual**: Animações e transições suaves para melhor interatividade
- **Acessibilidade**: Estrutura semântica, contraste adequado e textos alternativos em imagens
- **Responsividade**: Layout adaptável para diferentes tamanhos de tela

## 🚀 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/Usales/Space-app
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto:
```bash
npm run dev
```

## 📁 Estrutura do Projeto

```
space-app/
├── src/
│   ├── Componentes/
│   │   ├── BarraLateral/
│   │   ├── BannerTitulo/
│   │   ├── Cabecalho/
│   │   ├── Galeria/
│   │   ├── Temas/
│   │   ├── Sobre/
│   │   └── Rodape/
│   ├── App.jsx
│   └── main.jsx
├── public/
│   └── imagens/
└── package.json
```

## 🎯 Conceitos Aplicados

### Componentização
- Componentes reutilizáveis
- Props para comunicação entre componentes
- Styled Components para estilização

### Estado e Gerenciamento
- Uso de useState para gerenciamento local
- Estado centralizado para busca e filtros
- Estado para controlar favoritos e modais

### Estilização
- CSS-in-JS com Styled Components
- Variáveis CSS para consistência
- Flexbox e Grid para layouts modernos

### Performance
- Lazy loading de imagens
- Componentes otimizados
- Transições suaves

### Boas Práticas Adotadas
- Separação clara de responsabilidades entre componentes
- Navegação por rotas com React Router
- Acessibilidade: uso de alt em imagens, contraste e navegação por teclado
- Responsividade aprimorada
- Código limpo e organizado

## 🎨 Design

O projeto foi baseado no design do Figma:
[Link do Projeto Figma](https://www.figma.com/design/vgNq83nBKAuwW079nWloQQ/React--arquivos-est%C3%A1ticos-com-integra%C3%A7%C3%A3o-de-conceito-%C3%A1rea-de-component-%7C-SpaceApp--Community-?node-id=123-1462&t=KvqFduz2bi5EpdY3-0)

## 👨‍💻 Autor

Gabriel Henriques Sales
- [LinkedIn](https://www.linkedin.com/in/gabriel-henriques-sales-43953b218/)
- [GitHub](https://github.com/Usales)
- [Instagram](https://www.instagram.com/gab_sales_salerno/following/)

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
