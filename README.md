# Exercício Final — Introdução à Programação Web (SIN1004)

Site em HTML, CSS e JavaScript, desenvolvido em trio.

## Estrutura de pastas

```
projeto/
├── index.html          (links: → site externo 1, → site externo 2, → pagina2.html, → pagina3.html)
├── pagina2.html         (links: → index.html, → pagina2-1.html)
├── pagina3.html         (links: → index.html, → pagina3-1.html)
├── pagina2-1.html       (links: → pagina2.html)
├── pagina3-1.html       (links: → pagina3.html) (contém o formulário → botão chama script.js → WhatsApp)
├── css/
│   └── style.css       (importado por todas as páginas)
├── js/
│   └── script.js       (função de envio via WhatsApp, chamada só na pagina3-1.html)
└── img/
    └── (imagens usadas nas páginas)
```

## Requisitos do exercício

- [ ] Página inicial (`index.html`) com apresentação do site
- [ ] 2 links externos na página inicial
- [ ] 2 links internos de aprofundamento (para pagina2.html e pagina3.html)
- [ ] Cada página de 2º nível leva a pelo menos mais uma página (total mínimo: 5 páginas)
- [ ] Uso de tabelas, âncoras, listas, título, div e imagens
- [ ] Formulário com botão que chama função JS para envio via WhatsApp (pagina3-1.html)
- [ ] CSS centralizado em um único arquivo (`css/style.css`)
- [ ] Um item CSS customizado (botão, menu ou fundo em camadas)

## Fluxo de trabalho em equipe

1. `git pull` antes de começar a editar
2. Editar apenas o(s) arquivo(s) combinado(s) com o grupo
3. `git commit -m "mensagem curta descrevendo a mudança"`
4. `git push`

## Entrega

- Formato: `.zip`
- Local: Teams
- Prazo: a definir
