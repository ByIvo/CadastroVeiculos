# Teste FrontEnd Conta Azul

> Teste para vaga de frontend na ContaAzul.

### Requisitos

> node  ^0.10.29

> bower  ^1.3.12

## Setup de desenvolvimento

### Instalar dependências

```shell
sudo npm install
```

### Em caso de falha na execução do bower, executar:

```shell
bower install
```

### Watch para mudanças
```shell
grunt watch
```

### Gerar distribuição
```shell
grunt dist
```

## Principais problemas enfrentados

### Referência de objetos em memória

> Mesmo ao cancelar uma edição, a referência de memória alterava o objeto no Service (sem validar os dados!); A solução foi criar no controller duas variáveis (old e new) e, no submit do form, identificar o tipo de ação (edição ou novo) para destinar ao tratamento correto dentro do Serviço.

### Seleção era perdida ao navegar entre as páginas

> A seleção era perdida ao navegar entre as páginas; A solução foi criar um serviço para gerenciar todas as seleções; Dessa forma, mesmo ao cadastrar/editar um carro, a seleção sempre é mantida.

### Ao clicar no 'selecionar todos', todos os carros (incluindo os não exibidos) eram selecionados.

> Como recurso de usabilidade, a ação 'selecionar todos' deve apenas marcar os itens exibidos naquela página; Para corrigir isso, foi criado um campo chamados itens exibidos e forçar a opção ng-repeat à gravar os itens exibidos dentro dessa variável no escopo; Com esse dado, consigo saber os itens exibidos, quais selecionar e também se todos estão selecionados;

### Paginação

> Sem dúvida um dos melhores recursos utilizados foram os de paginação; Foi utilizado um componente que automatiza todo o gerenciamento e, segundo um template que eu defini, a paginação trabalha da melhor forma possível.

### Máscaras

> Tive de utilizar dois componentes distintos relacionados à máscaras; Um deles genérico, onde eu informo o pattern que valida e outro específico para moeda nacional. Por menos otimizado que seja, irei manter assim para garantir o prazo e qualidade pro usuário.

