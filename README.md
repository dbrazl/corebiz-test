# Shopping

Esse projeto teve como intenção a criação da página inicial de uma loja virtual. A proposta, API para consumo e o layout foi oferecido pela Corebiz como forma de teste para a oportunidade de Front-End Developer.

O objetivo é verificar minhas habilidades em React.js construindo páginas responsivas e consumo de API's.

O site pode ser acessado por meio do seguinte - [link]().

<img src="./assets/images/apresentation.png" width="1500" height="1000" />

#### Observação

Durante a criação do software eu identifiquei um erro na API. O campo de retorno dos produtos <strong>installments</strong> retorna o valor da parcela erroneamente. O valor está com um dígito a menos que o padrão dos demais preços da API.

Um exemplo é o primeiro item que retorna em seu listPrice o valor de cinco dígitos 25990 enquanto o seu valor de parcela retorna o valor total de quatro dígitos 2887.

Por não fazer muito sentido o valor total do produto parcelado ser mais barato que o valor a vista, conclui que o campo está com erro de retorno. Mesmo com esse problema, a aplicação web está consumindo o valor da parcela como é enviado. Será necessário criar uma correção para essa campo.

Ademais, agradeço a - [Corebiz](https://www.corebiz.ag/en/) pela oportunidade.
