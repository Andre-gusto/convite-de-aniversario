# Convite de Aniversário — site interativo

## Estrutura

- `index.html` → primeira tela, com o envelope e o carimbo clicável.
- `convite.html` → convite de aniversário.
- `style.css` → design, responsividade e animações.
- `script.js` → interação do envelope e partículas.
- `config.js` → onde você coloca os links dos botões.
- `assets/envelope.jpeg` → arte do envelope enviada por você.
- `assets/convite.jpeg` → arte do convite enviada por você.

## Como configurar os botões

Abra `config.js` e altere:

```js
const conviteConfig = {
  localizacao: "SEU_LINK_DO_MAPS",
  confirmacao: "SEU_LINK_DE_CONFIRMACAO"
};
```

### Exemplo com Google Maps

```js
localizacao: "https://www.google.com/maps/..."
```

### Exemplo com WhatsApp

```js
confirmacao: "https://wa.me/5585999999999?text=Olá!%20Confirmo%20minha%20presença."
```

## Como testar

Não é necessário instalar servidor para testar.

Basta abrir `index.html` no navegador.

Para publicar, envie todos os arquivos e a pasta `assets` para uma hospedagem de site estático, como GitHub Pages, Netlify, Vercel ou outra hospedagem que aceite HTML/CSS/JS.

## Observação

O layout foi feito pensando principalmente em celular, porque o convite normalmente será aberto pelo WhatsApp. A arte original foi preservada e os efeitos foram adicionados por cima para não alterar o visual principal.
