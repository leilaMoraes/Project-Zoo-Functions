# ⭐ Boas-Vindas ao Repositório Zoo Functions 🐘
> *Clique nas setas para ver mais* 
<details>
<summary><strong>👩‍💻 O Que Foi Desenvolvido</strong></summary><br />

Pensando no desenvolvimento das habilidades em ES6, Higher Order Functions e testes, este projeto consiste em desenvolver funções que buscam informações sobre os animais de um zoológico como: espécie e local de origem. Além disso, também busca dados sobre as pessoas que colaboram com a manutenção e cuidado do zoológico.

A sequência dos requisitos desse projeto foi disposta de forma a proporcionar a experiência de entender na prática como o desenvolvimento orientado a testes ajuda a garantir um código de qualidade. Para isso, foi implementado testes para funções já existentes, percebendo os casos de uso da aplicação e garantindo que ela está funcionando da maneira correta!

Obs: Os requisitos 9 e 14 não foram implementados.
</details>

<details>
<summary><strong>👀 Para Rodar Localmente</strong></summary><br />

1. Clone o repositório   
  `git clone git@github.com:leilaMoraes/Project-Zoo-Functions.git`
2. Navegue até a pasta do repositório clonado  
    `cd Project-Zoo-Functions`
3. Instale as dependências no diretório raiz  
  `npm install`
</details>

<details>
<summary><strong>🏗 Estrutura do projeto</strong></summary><br />

Na pasta raiz do projeto, temos as pastas `src`, `test` e `data`.

A pasta `src` é composta por arquivos referentes a cada uma das funções que foram implementadas, a pasta `data` contém o arquivo `zoo_data.js`, que armazena os dados que foram utilizados para retornar as informações sobre o zoológico.

A pasta `test`, contém os arquivos em que foram implementados os testes unitários correspondentes a cada função, o nome do arquivo é o nome da função alvo acrescido do sufixo `.test.js`.

**Por exemplo:** o arquivo `src/getOpeningHours.js` conterá a implementação da função `getOpeningHours` e o arquivo `test/getOpeningHours.test.js` deve conter os testes referentes a ela.

Obs: A criação de todas essas pastas e arquivos foram de responsabilidade da Trybe, o que foi desenvolvido por mim foram os testes e funções pedidas nos requisitos.

<details>
<summary>O arquivo <code>zoo_data.js</code> contém um <strong>objeto</strong> no seguinte formato:</summary><br />

```javascript
{
	species: [
    {
      id: lionId,
      name: 'lions',
      popularity: 4,
      location: 'NE',
      availability: ['Tuesday', 'Thursday', 'Saturday', 'Sunday'],
      residents: [
        {
          name: 'Zena',
          sex: 'female',
          age: 12,
        }
      ],
    }
  ],
  employees: [
    {
      id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
      firstName: 'Nigel',
      lastName: 'Nelson',
      managers: [burlId, olaId],
      responsibleFor: [lionId, tigersId],
    }
  ],
  hours: {
    Tuesday: { open: 8, close: 6 },
    Wednesday: { open: 8, close: 6 },
    Thursday: { open: 10, close: 8 },
    Friday: { open: 10, close: 8 },
    Saturday: { open: 8, close: 10 },
    Sunday: { open: 8, close: 8 },
    Monday: { open: 0, close: 0 },
  },
  prices: {
    adult: 49.99,
    senior: 24.99,
    child: 20.99,
  },
}
```

<details>
<summary>O array <code>species</code> guarda as informações de cada espécie do zoológico</summary><br />

  | Chave | Descrição |
  | ------------ | ----------|
  | `id`         | é o identificador da espécie |
  | `name`       | é o nome da espécie, por exemplo, `lions` |
  | `popularity` | é o popularidade daquela espécie |
  | `location`   | é a região que a espécie do animal veio, pode ter os seguintes valores: <br> - `NE`: nordeste; <br> - `NW`: noroeste; <br> - `SE`: sudeste; <br> - `SW`: sudoeste. |
  | `availability` | é a disponibilidade de visitação dos animais dessa espécie |
  | `residents`    | são as informações dos animais daquela espécie que residem no zoológico, onde: <br> - `name`: é o nome do animal, por exemplo `'Zena'`; <br> - `sex`: é o sexo do animal, por exemplo: `'female'` (fêmea); <br> - `age`: é a idade do animal. |
</details>

<details>
<summary>O array <code>employees</code> é onde ficam as informações de cada pessoa colaboradora</summary><br />

  | Chave | Descrição |
  | ----------- | ------ |
  | `id`        | é o identificador dessa pessoa |
  | `firstName` | é o primeiro nome dessa pessoa |
  | `lastName` | é o último nome dessa pessoa |
  | `managers` | são os `ids` das lideranças dessa pessoa |
  | `responsibleFor` | são os `ids` das espécies que essa pessoa é responsável |
</details>

<details>
<summary>O objeto <code>hours</code> guarda as informações sobre o horários de funcionamento do zoológico</summary><br />

  | Chave | Descrição|
  | ------ | ------ |
  | `Tuesday`<br> `Wednesday`<br> `Thursday`<br> `Friday`<br> `Saturday`<br> `Sunday`<br> `Monday` | são os dias da semana: <br> - `open`: é o horário que o zoológico abre; <br> - `close`: é o horário que o zoológico fecha. |
</details>

<details>
<summary>O objeto <code>prices</code> é responsável por guardar as informações sobre o valor da entrada do zoológico</summary><br />

  | Chave | Descrição |
  | -------- | ------ |
  | `adult`  | é o preço para adultos |
  | `senior` | é o preço para idosos |
  | `child`  | é o preço para crianças |

</details>
</details>
</details>

## Requisitos do Projeto

1. Implemente a função `getSpeciesByIds`. ✔️
2. Implemente a função `getAnimalsOlderThan`. ✔️
3. Implemente a função `getEmployeeByName`. ✔️
4. Implemente a função `getRelatedEmployees`. ✔️
5. Implemente a função `countAnimals`. ✔️
6. Obtenha ao menos 80% de cobertura de testes na função `handlerElephants`. ✔️
7. Obtenha ao menos 90% de cobertura de testes na função `handlerElephants`. ✔️
8. Implemente a função `calculateEntry`. ✔️
9. Implemente a função `getSchedule`. ✖️
10. Implemente a função `getOldestFromFirstSpecies`. ✔️
11. Implemente a função `getEmployeesCoverage`. ✔️
12. Obtenha ao menos 85% de cobertura de testes na função `getOpeningHours`. ✔️
13. Obtenha ao menos 95% de cobertura de testes na função `getOpeningHours`. ✔️
14. Implemente a função `getAnimalMap`. ✖️
15. Obtenha 100% de cobertura de testes na função `handlerElephants`. ✔️
16. Obtenha ao menos 100% de cobertura de testes na função `getOpeningHours`. ✔️
