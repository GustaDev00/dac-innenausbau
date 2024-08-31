# Bubowl Boilerplate

Este é o projeto boilerplate, configurado com um design atômico, que utiliza uma abordagem estruturada para desenvolvimento de componentes em React. Este projeto tem os componentes estruturados em três níveis principais: átomos, moléculas e organismos.

## Estrutura de Pastas
Os componentes são organizados nas seguintes categorias, seguindo a metodologia de design atômico:

- **Atoms**
- **Molecules**
- **Organisms**

Cada componente inclui os seguintes arquivos:
- `animations.ts`: Arquivo que gerencia e exporta as animações utilizadas no componente.
- `constants.tsx`: Arquivo que contém e exporta constantes, incluindo textos e valores fixos usados no componente.
- `index.tsx`: Arquivo principal do componente que contém a lógica e o JSX.
- `styles.ts`: Arquivo que utiliza styled-components para estilizar o componente.
- `props.ts`: Arquivo de TypeScript que define as propriedades (`props`) do componente.

## Instruções Iniciais

### Instalação
Ao clonar o projeto, execute o seguinte comando para instalar as dependências:
```bash
yarn
```

### Desenvolvimento
Para iniciar o ambiente de desenvolvimento, utilize:
```bash
yarn dev
```
Este comando irá iniciar o servidor de desenvolvimento Next.js, permitindo que você visualize suas alterações em tempo real.



### Scripts Disponíveis
Os seguintes comandos estão configurados no package.json para facilitar o desenvolvimento e a organização dos componentes:
```bash
yarn dev
```

#### yarn atoms
Cria um novo componente átomo. Exemplo de uso:
```bash
yarn atoms nome-do-componente
```

#### yarn molecules
Cria um novo componente molécula. Exemplo de uso:
```bash
yarn molecules nome-do-componente
```

#### yarn organisms
Cria um novo componente organismo. Exemplo de uso:
```bash
yarn organisms nome-do-componente
```
Estes comandos devem ser usados para criar novos componentes dentro das categorias especificadas, seguindo a metodologia de design atômico.

#### Outros Scripts

- yarn build: Executa o script de sitemap e conversão de mídias para o formato WebP antes de construir o aplicativo para produção.

- yarn start: Inicia o servidor de produção.

- yarn lint: Executa o linter no código do projeto para garantir a conformidade com as regras de estilo de código.


Este documento README inclui todas as instruções e detalhes necessários para começar a trabalhar no projeto, explicando tanto a estrutura do código quanto como utilizar os scripts para criação e desenvolvimento de componentes. Ele também orienta sobre a instalação e os primeiros passos, garantindo que qualquer pessoa com acesso ao repositório possa entender e contribuir para o projeto eficazmente.
