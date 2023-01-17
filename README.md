## Descrição

> Uma Landing Page sobre Pokémons e suas habilidades.

- Header com os links de âncora para as seções.
- Seção com 3 banners (Slider).
- Seção com cards.
- Mobile: Blocado abaixo do outro.
- Desktop: Um ao lado do outro (garantindo a mesma altura).
- Segunda seção de cards.
- Formulário de newsletter.
- Footer.

> Este projeto é um fork deste repositório https://github.com/agenciafmd/frontend-vagas.git.
>
> O layout como fonte de inspiração do desafio para a vaga de Front-End encontra-se no [Figma](https://www.figma.com/file/SSTsobmlfwSgfxIpk1OWqP/Desafio-para-vaga-de-Front-End?node-id=201%3A4&t=wAMIFXHqq9ZpS4GZ-0).

---

## Inicialização

```
npm install
npm start
```

---

## Frameworks e Bibliotecas

- ReactJs:

  > Utilizei o ReactJS para a reutilização de componentes e utilização de hooks como useState e useEffect.

- Axios:

  > Facilidade de integrar com endpoints externos, código simples e bem dinâmico.

- Styled-Components/Emotion:

  > O Styled-components permite escrever código CSS real para estilizar componentes, utilizando JavaScript.

- Material Ui:

  > O MUI oferece ferramentas de interface de design pronta para os componentes.

- React Responsive Carousel:
  > Utilizei React Responsive Carousel para o componente banner com slide automático, pois possibilita a agilidade de desenvolvimento comparado à um carrossel estilizado somente com CSS.

---

## Ferramenta

- Netlify-cli
  > Utilizei o Netlify CLI para hospedagem demonstrativa do site.

---

## API's

- Lista de pokemons:
  - Endpoint: "https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit={limit}"
    > Retorna lista de 8 primeiros Pokémons contendo Nome e Url.
- Método da solicitação:
  - GET
- Parametros:

  - offset
    > Posição inicial dos pokémons que irá se deslocar
    > Ex: params: { offset: 8, limit: 8 }
  - limit
    > Limite de pokémons que será permitida retornar

- Lista de pokemons:
  - Endpoint: "https://pokeapi.co/api/v2/pokemon/${pokeName}"
    > Retorna o detalhameto do pokémon através do nome.
- Método da solicitação:
  - GET
- Parametros:

  - pokeName
    > Nome do Pokémon
    > Ex: params: { pokeName: "bulbasaur"}

---

## Implementações Futuras

1. Seção de cards

   - Mobile: Slider;
   - Desktop: Slider desligado;

2. Seção do Formulário
   - Validação de Formulário;

---

## Status do projeto

> Projeto em progresso

## Contato

- E-mail: adrianemaciel.developer@gmail.com
- Linkedin: https://linkedin.com/in/adrianemacieldeveloper/
