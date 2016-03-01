# Teste FrontEnd Conta Azul

> Teste para vaga de frontend na ContaAzul.

### Requisitos

> node  ^0.10.29

> bower  ^1.3.12

## Testar o projeto
> Caso queira testar o projeto rodando, acesse o link http://teste-byivo-conta-azul.surge.sh/

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

## Rodando o projeto

> Para testar localmente, você precisará de um servidor web por causa do ngRoute. 
> Você pode simplesmente utilizar o servidor do python executando:

```shell
python -m SimpleHTTPServer [porta]
```
> Porém recomendo a utilização do simple http server do node, facilmente instalado executando:

```shell
sudo npm install http-server
```

> Depois de instalado, basta executar o comando na pasta que deseja servir:

```shell
http-server -p [porta]
```
> O projeto estará localmente disponível no link: http://localhost:[porta]

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

### Modais

> Resolvi utilizar o sweet alert para desenvolver as modais; Ele é muito lindo e prático, porém um pé no mato pra adicionar os estilos. Quando a popup é criada, os background-color dos botões são inseridos como estilo inline na tag, que por consequência, não basta apenas importar os estilos padrões .ca-btn e .ca-btn-primary para agregar novo estilo. Precisei usar !important nas cores para que tudo funcionasse.
