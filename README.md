# 	:woman_technologist: Project Tryunfo

Esse projeto contém uma série de informações sobre o que eu aprendi aqui na Trybe ao longo do curso de desenvolvimento web da Trybe. <br>
As habilidades desenvolvidas nesse projeto são:
* Ler o estado de um componente e usá-lo para alterar o que exibimos no browser
* Inicializar um componente, dando a ele um estado pré-definido
* Atualizar o estado de um componente
* Capturar eventos utilizando a sintaxe do React
* Criar formulários utilizando sintaxe JSX com as tags: input, textarea, select, form, checkbox
* Transmitir informações de componentes filhos para componentes pais via callbacks

## :rocket:Começando
Esse projeto foi proposto pelo curso de desenvolvimento web da Trybe.
### Desenvolvimento
Essa página foi feita usando HTML, CSS e JavaScript.
### Commits
Os commits foram feitos de acordo com os requisitos finalizados.
### Branch
Todo o projeto foi feita na branch 'juliana-oliveira-project-tryunfo', isso por conta da exigência do curso.
### Instalação
Antes de realizar o projeto, precisei instalar as dependências usando npm install.
### Visualização do projeto
O projeto poderá ser visualizado através do comando **npm start**.
### Testes
Os testes usando foram ESLint e Cypress, através dos **comandos**: <br>
* npm run cypress:open <br>
* npm run lint:styles
### Autores
Esse foi um projeto individual,que desenvolvido somente por Juliana Oliveira.
### Ferramentas usadas
Foi usado Visual Studio Code, além do Trello que auxiliou na organização das tarefas.
### Framework usado
Nenhum.

## :footprints:Requisitos
### Metodologia usada
No trabalho do desenvolvimento de software a gente sempre tem prazos, muitas vezes os prazos são apertados.<br>
Por outro lado, eu não quero criar algo que não entendo perfeitamente, como também fazer códigos rápidos pode levar a erros que podem demorar muito pra corrigir.<br>
Por isso, usei e sempre uso o método Baby Steps, que é uma estratégia de abordar o desafio passo à passo, defensivamente.<br>
Baby steps é um termo em inglês que quer dizer passos de bebê. Refere-se a fazer as coisas, quaisquer que sejam, devagar, com calma, passo a passo.
#### :footprints:Requisito 1. Crie o formulário que será usado para adicionar cartas ao baralho
Crie um formulário que será utilizado para criar as cartas do seu baralho.

  * Crie um componente chamado `Form` dentro da pasta `src/components`.

  * Renderize o componente `Form` dentro do componente principal `App`. 

  * Crie os seguintes itens dentro do component `Form`:
  
  * :bulb: **Dica:** Você pode criar um componente de input. Lembre-se de sempre ter uma label associada para cada input.

    - um campo do tipo `text` que contenha o atributo `data-testid="name-input"`. Este campo será usado para inserir o nome da carta.

    - um campo do tipo `textarea` que contenha o atributo `data-testid="description-input"`. Este campo será usado para inserir a descrição da carta.

    - um campo do tipo `number` que contenha o atributo `data-testid="attr1-input"`. Este campo será usado para inserir o primeiro atributo da carta. Ele é livre para você adicionar o atributo que mais combinar com o seu baralho.

    - um campo do tipo `number` que contenha o atributo `data-testid="attr2-input"`. Este campo será usado para inserir o segundo atributo da carta. Ele é livre para você adicionar o atributo que mais combinar com o seu baralho.

    - um campo do tipo `number` que contenha o atributo `data-testid="attr3-input"`. Este campo será usado para inserir o terceiro atributo da carta. Ele é livre para você adicionar o atributo que mais combinar com o seu baralho.

    - um campo do tipo `text` que contenha o atributo `data-testid="image-input"`. Este campo será usado para inserir o caminho para imagem da carta.

    - um campo do tipo `select` que contenha o atributo `data-testid="rare-input"`. Este campo será usado para inserir a raridade da carta e deverá ter as `options`: `normal`, `raro` e `muito raro` (é importante que as opções estejam nessa ordem).

    - um campo do tipo `checkbox` que contenha o atributo `data-testid="trunfo-input"`. Este campo será usado para inserir se a carta é o Super Trunfo.
    
    - um `button`que contenha o atributo  `data-testid="save-button"` e que tenha o texto "Salvar".

  

#### :footprints:Requisito 2. Adicione as props necessárias ao componente de formulário 

  * O componente `Form` deverá receber as seguintes props:
    - `cardName`, uma string;
    - `cardDescription`, uma string;
    - `cardAttr1`, uma string;
    - `cardAttr2`, uma string;
    - `cardAttr3`, uma string;
    - `cardImage`, uma string;
    - `cardRare`, uma string;
    - `cardTrunfo`, um boolean;
    - `hasTrunfo`, um boolean;
    - `isSaveButtonDisabled`, um boolean;
    - `onInputChange`, uma callback;
    - `onSaveButtonClick`, uma callback;


As props do componente `Form` deverão ser utilizadas conforme o indicado abaixo:

  * Campo `name-input`: a propriedade `value` deve receber o valor da prop `cardName` e a prop `onChange` deve receber o valor da prop `onInputChange`.

  * Campo `description-input`: a propriedade `value` deve receber o valor da prop `cardDescription` e a prop `onChange` deve receber o valor da prop `onInputChange`.

  * Campo `attr1-input`: a propriedade `value` deve receber o valor da prop `cardAttr1` e a prop `onChange` deve receber o valor da prop `onInputChange`.

  * Campo `attr2-input`: a propriedade `value` deve receber o valor da prop `cardAttr2` e a prop `onChange` deve receber o valor da prop `onInputChange`.

  * Campo `attr3-input`: a propriedade `value` deve receber o valor da prop `cardAttr3` e a prop `onChange` deve receber o valor da prop `onInputChange`.

  * Campo `image-input`: a propriedade `value` deve receber o valor da prop `cardImage` e a prop `onChange` deve receber o valor da prop `onInputChange`.

  * Campo `rare-input`: a propriedade `value` deve receber o valor da prop `cardRare` e a prop `onChange` deve receber o valor da prop `onInputChange`.

  * Campo `trunfo-input`: a propriedade `checked` deve receber o valor da prop `cardTrunfo` e a prop `onChange` deve receber o valor da prop `onInputChange`.

  * Botão `save-button`: a propriedade `disabled` deve receber o valor da prop `isSaveButtonDisabled` e a prop `onClick` deve receber o valor da prop `onSaveButtonClick`.

**Obs:** por enquanto a prop `hasTrunfo` ainda não foi utilizada, mas não se preocupe, pois ela será usada em breve.

#### :footprints:Requisito 3. Crie e renderize o componente Card com as props necessárias

  * Crie um componente com o nome `Card` na pasta `src/components` e renderize-o  no componente principal `App`. O componente `Card` deve receber as seguintes props: 
    - `cardName`, uma string;
    - `cardDescription`, uma string;
    - `cardAttr1`, uma string;
    - `cardAttr2`, uma string;
    - `cardAttr3`, uma string;
    - `cardImage`, uma string;
    - `cardRare`, uma string;
    - `cardTrunfo`, um boolean;

  * Renderize o componente `Card` dentro do componente principal `App`.

  * Exiba o valor da prop `cardName`. Você pode usar qualquer tag HTML que faça sentido, desde que ela tenha o atributo `data-testid="name-card"`.

  * Exiba a imagem usando a tag HTML `img`, com o atributo `src` que tenha o valor da prop `cardImage` e o atributo `alt` com o valor da prop `cardName`. Essa imagem também deve ter o atributo `data-testid="image-card"`

  * Exiba o valor da prop `cardDescription`. Você pode usar qualquer tag HTML que faça sentido, desde que ela tenha o atributo `data-testid="description-card"`.
  
  * Exiba o valor da prop `cardAttr1`. Você pode usar qualquer tag HTML que faça sentido, desde que ela tenha o atributo `data-testid="attr1-card"`.

  * Exiba o valor da prop `cardAttr2`. Você pode usar qualquer tag HTML que faça sentido, desde que ela tenha o atributo `data-testid="attr2-card"`
  * Exiba o valor da prop `cardAttr3`. Você pode usar qualquer tag HTML que faça sentido, desde que ela tenha o atributo `data-testid="attr3-card"`.

  * Exiba o valor da prop `cardRare`. Você pode usar qualquer tag HTML que faça sentido, desde que ela tenha o atributo `data-testid="rare-card"`.

  * Exiba o texto `Super Trunfo` somente quando o valor da prop `cardTrunfo` for `true`. Você pode usar qualquer tag HTML que faça sentido, desde que ela tenha o atributo `data-testid="trunfo-card"`.

  **Dica: Você pode utilizar renderização condicional para renderizar ou não o texto do super trunfo.**


#### :footprints:Requisito 4. Crie o preview da carta que está sendo criada pelo formulário

Até o momento você criou dois componentes que recebem `props`, agora está na hora de criar o estado dos componentes.
Os componentes `Form` e `Card` irão compartilhar o mesmo estado para exibir as mesmas informações (isso já te dá uma dica de onde o estado deve estar, não é mesmo?).
Quando alguma informação é digitada em algum campo do formulário, o componente `Card` deve exibir a mesma informação em tempo real, criando um preview da carta antes de ela ser salva no baralho (a funcionalidade de salvar será feita nos próximos requisitos). 

Você deverá usar a prop `onInputChange` para passar uma callback para lidar com os eventos de `onChange` dos inputs do formulário. Não se esqueça que os valores dos inputs (que também são passados por props) também devem ser salvos em um estado.

**Dica:** o mesmo estado usado para controlar os inputs do formulário podem ser passados para o componente `Card`.

Veja como deve ser o funcionamento da aplicação:

  * Ao digitar algo no campo com o `data-testid="name-input"` do formulário, o mesmo valor deverá ser renderizado no componente `Card`, no elemento com o `data-testid="name-card"`.
  
  * Ao digitar algo no campo com o `data-testid="description-input"` do formulário, o mesmo valor deverá ser renderizado no componente `Card`, no elemento com o `data-testid="description-card"`.

  * Ao digitar algo no campo com o `data-testid="image-input"` do formulário, o mesmo valor deverá ser passado para o componente `Card`, e ser usado no atributo `src` do elemento com o `data-testid="image-card"`.

  * Ao digitar algo no campo com o `data-testid="attr1-input"` do formulário, o mesmo valor deverá ser renderizado no componente `Card`, no elemento com o `data-testid="attr1-card"`.

  * Ao digitar algo no campo com o `data-testid="attr2-input"` do formulário, o mesmo valor deverá ser renderizado no componente `Card`, no elemento com o `data-testid="attr2-card"`.

  * Ao digitar algo no campo com o `data-testid="attr3-input"` do formulário, o mesmo valor deverá ser renderizado no componente `Card`, no elemento com o `data-testid="attr3-card"`.

  * Ao selecionar algum valor no `select` com o `data-testid="rare-input"` do formulário, o mesmo valor deverá ser renderizado no componente `Card`, no elemento com o `data-testid="rare-card"`.

  * Quando campo do tipo `checkbox` que possui o `data-testid="trunfo-input"` estiver `checked`, deverá ser renderizado no componente `Card` o texto `Super Trunfo` dentro do elemento com o `data-testid="trunfo-card"`.

  **Dica:** para campos que precisem de um valor padrão (como o campo de raridade, por exemplo) você pode iniciar o estado já com esse valor.


#### :footprints:Requisito 5. Faça a validação do botão de Salvar no formulário

  O botão que possui o atributo `data-testid="save-button"` só deve estar habilitado se todas as informações do formulário estiverem preenchidas corretamente, seguindo as seguintes regras:

  * Os campos `Nome`, `Descrição`, `Imagem` e `Raridade ` devem conter alguma informação (ou seja, os `inputs` não podem estar vazios).

  * A soma dos valores dos 3 atributos (`attr1-input`, `attr2-input` e `attr3-input`) não pode ultrapassar o valor **210**.

  * Cada um dos três atributos pode ter **no máximo 90 pontos cada**.
  
  * Os atributos não podem receber valores negativos.

#### :footprints:Requisito 6. Crie a função do botão salvar
Agora que o botão de salvar já está validado, você pode adicionar uma nova carta ao seu baralho. Isso significa que você precisará criar um novo estado na sua aplicação para salvar a lista de cartas existentes no seu baralho.
**Dica:** você pode salvar cada carta em um formato de objeto e ter um _array_ com esses objetos no seu estado.

  * Ao clicar no botão que possui o atributo `data-testid="save-button"`, as informações que foram preenchidas no formulário deverão ser salvas no estado da sua aplicação.
  
  * Após salvar as informações, os `inputs` do formulário `Nome`, `Descrição` e `Imagem` e o conteúdo do preview da carta deverão ser limpos.

  * Após salvar as informações, os três campos de atributos devem ter valor 0.

  * Após salvar as informações, o campo `Raridade` deve conter o valor `normal`.


#### :footprints:Requisito 7. Crie a validação do Super Trunfo
Em um baralho de Super Trunfo pode existir apenas **uma carta Super Trunfo**. Por isso é necessário fazer uma validação para que somente 1 carta Super Trunfo seja salva no seu baralho.

Para que uma carta seja salva como Super Trunfo é preciso que o input com o `data-testid="trunfo-input"` esteja `checked` na hora de salvar a carta. Por isso, a validação será feita nesse campo. Para fazer essa validação, você deve usar o prop `hasTrunfo` do componente `Form`.

  * Caso já exista uma carta Super Trunfo em seu baralho, o formulário de criação de carta não deverá exibir o `checkbox` `data-testid="trunfo-input"`. No seu lugar deve ser renderizada a frase: "Você já tem um Super Trunfo em seu baralho".

  **Dica: Lembre-se de utilizar a renderização condicional do React nesse requisito.**


#### :footprints:Requisito 8. Exiba a lista de cartas que estão salvas no estado
Você já tem várias cartas legais em seu baralho, agora é a hora de listá-las para que você possa ver toda sua coleção.

  * Renderize dentro do component `App` uma lista com todas as cartas que você tem no estado da aplicação.
  * Garanta que sempre que uma carta for adicionada, a lista é atualizada automaticamente.

**Dica:** você pode reutilizar o componente `Card` nesse requisito.

#### :footprints:Requisito 9. Crie um botão para remover uma carta do baralho

  * Criar, em cada carta que está sendo renderizada do seu baralho, um `button` com o texto `Excluir` e o atributo `data-testid="delete-button"`.
  
  * A carta de _preview_ **não pode ter esse botão**.
  
  * Ao clicar neste botão, a carta deve ser excluída do seu baralho, ou seja, não deverá mais ser renderizada na página.
  **Dica: Lembre-se que o baralho está sendo renderizado a partir do estado do seu componente!**
  
  * Se a carta excluída for uma carta Super Trunfo, o `checkbox` do formulário deverá aparecer novamente, tornando possível a criação de uma nova carta Super Trunfo.
