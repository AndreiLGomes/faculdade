# Projeto: Cadastro de Usuários com Formulário de Contato

## Visão Geral

Este projeto consiste em um sistema simples de cadastro de usuários, com armazenamento temporário em memória, uma página de contato, e uma página "sobre". Todo o sistema foi refatorado a partir de um código legado com diversos problemas de manutenção e organização.

---

## Estrutura de Pastas

```
EAD-5/
├── assets/img/
├── css/styles.css           # Estilo global para todas as páginas
├── js/                      # Scripts JavaScript organizados por responsabilidade
│   ├── contato.js
│   ├── index.js
│   ├── script1.js
│   ├── scriptExtra.js
│   └── utilsScript.js
├── paginas/
│   ├── contato.html
│   ├── index.html
│   └── Sobre.html
└── README.md
```

## Passos para Rodar o Projeto

Clone ou baixe este repositório.

Abra o projeto em seu editor de código (como VS Code).

## Execute uma extensão de servidor local (ex: "Live Server" no VS Code).

## Problemas encontrados e ajustes realizados

### 1. `index.html`

**Problemas:**

- Uso de `<center>` (tag obsoleta).
- Inputs soltos, sem `<form>`.
- `onclick="..."` inline no HTML.
- Estilos inline e `<style>` dentro do HTML.
- IDs conflitantes com JS legado.
- Duplicidade de botão "Adicionar".

**Ajustes:**

- Todos os estilos foram movidos para `styles.css`.
- Inputs foram organizados dentro de um `<form>` semântico.
- `addEventListener` usado no `index.js` para evitar inline JS.
- IDs foram padronizados para funcionar com `script1.js` (ex: `listausers`).
- HTML limpo e padronizado.

---

### 2. `script1.js`

**Problemas:**

- Código legado e protegido. Estava acoplado ao HTML.
- Dependia de IDs específicos.

**Ajustes:**

- Nenhum ajuste interno feito (por regra).
- O restante do sistema foi adaptado para funcionar com ele, respeitando nomenclaturas e estrutura.

---

### 3. `index.js`

**Problemas:**

- Inicialmente inexistente. Era necessário separar JS moderno do legado.

**Ajustes:**

- Criado para gerenciar os eventos da página de cadastro.
- Adiciona eventos ao botão de cadastro e de navegação para `contato.html`.

---

### 4. `styles.css`

**Problemas:**

- Inicialmente misturado com regras conflitantes.
- Duplicidade de seletores (`button`, `body`, etc).
- Sem estilo para `textarea`.

**Ajustes:**

- Consolidado e limpo.
- Estilo responsivo incluído.
- `textarea` agora segue o mesmo visual de `input`.

---

### 5. `contato.html`

**Problemas:**

- Estilos embutidos (duplicados com `styles.css`).
- ID do `form` era diferente do usado no JS (`myForm`).
- Script inline dentro da página.

**Ajustes:**

- Todos os estilos movidos para o CSS externo.
- Corrigido `id="formContato"` para coincidir com o JS.
- Criado `contato.js` para lidar com envio e navegação.

---

### 6. `contato.js`

**Problemas:**

- Inicialmente inexistente.
- Função `enviaProBack()` estava isolada sem uso real.

**Ajustes:**

- Criado e conectado ao HTML.
- Adicionada interação com o form: loga os dados e impede envio.
- Função `enviaProBack()` integrada ao submit.

---

### 7. `Sobre.html`

**Problemas:**

- Não estava conectada a nenhuma página.
- HTML sem estilo aplicado.

**Ajustes:**

- Passou a ser acessível por um botão ao lado de "Cadastro de Usuários".
- Estrutura pronta para ser estilizada com a mesma classe `.container`.

---

## Conclusão

O sistema foi totalmente reestruturado com base nas melhores práticas de HTML, CSS e JavaScript. Código legado foi respeitado e adaptado. O projeto agora está limpo, modularizado e mais fácil de manter e evoluir.
