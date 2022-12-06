# Especificações do Projeto

Neste projeto nós decidimos abordar o problema do acumulo, da desorganização, da falta de acesso, e da falta de segurança de documentos em papel de diversas empresas, específicamente escritórios de advocacia, contabilidade, varejistas. No geral empresas que trabalham com um grande fluxo de documentos tendem a alocar salas e até mesmo galpões para armazenar documentos. E inevitavelmente o gerenciamento de tantos dados guardados fica ineficaz, possivelmente causando até a perda de documentações importantes . Sendo assim desenvolveremos uma aplicação para solucionar os problemas citados e otimizar o fluxo de trabalho das empresas clientes, buscando a melhor perfomace possível. 

## Personas

Luke Skywalker tem 38 anos, é gerente em um escritório de contabilidade, no dia-a-dia trabalha com um grande volume de documentos em papéis. Gosta de viajar, jogar video-games. Ele busca se desenvolver profissionalmente, porém sente que o trabalho que está fazendo atualmente não o beneficiará no futuro, além de ser exaustivo.

Obiwan Kenoby tem 56 anos, é diretor executivo de um escritório de advocacia. Ele se considera um homem culto, gosta de vinho tinto, ópera, teatros e assistir fantástico. Ele está ansioso pela sua aposentadoria. Em seu cotidiano, existe a necessidade de filtrar o teor e as características dos processos em que seu escritório trabalha. Sendo assim, o gerenciador de documentos lhe serviria para armazenar todos processos de forma mais organizada e eficiente, facilitando assim a busca e o manuseio de toda documentação.

Anakin Skywalker tem 25 anos, trabalha no setor financeiro de um varejo. Gosta de viajar, conhecer e socializar com novas pessoas, é uma pessoa carismática e gosta de assistir filmes. Em seu trabalho ele normalmente precisa de enviar relatórios diários, e com o grande volume de documentos em papel, seu trabalho se torna extremamente cansativo devido a necessidade de ter que realizar a busca dos documentos físicamente, seu tempo não é investido da forma que o torne mais efetivo .

## Histórias de Usuários

Com base na análise das personas foram identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
| Anakin Skywalker  | Digitalizar, acessar e arquivar documentos | Organizar e facilitar o trabalho no cotidiano |
| Luke Skywalker    | Ter acesso, permissões e controle sobre as permissões dos usuários e sobre os documentos digitalizados  |  Organizar, garantir acesso e segurança aos documentos |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-------------------------|------------|-------------|
|RF-001| Permitir que o usuário arquive os documentos | ALTA | João Egydio / Abdon França |
|RF-002| Funcionalidade de salvar perfil e salvar imagem | ALTA | Raí Átila  / Gabriel de Assis |
|RF-003| Permitir a busca dos documentos | ALTA | Guilherme / João Egydio |
|RF-004| Criação do cadastro e o login dos usuários  e redefinir senha | ALTA | Raí Átila / Gabriel de Assis |
|RF-005| Funcionalidade para segmentar, classificar e organizar os documentos | MÉDIA | Gabriel de Assis |
|RF-006| Configuração das tabelas do CRUD server JSON | ALTA | Gabriel de Assis / Raí Átila |
|RF-007| Funcionalidade da criação de pastas | ALTA | João Egydio / Abdon França |
|RF-008| Filtrar documentos/pastas | MÉDIA | Guilherme / Raí Átila / João Egydio |
|RF-009| Permitir que os usuários criem as categorias | ALTA | Gabriel de Assis / Abdon França |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade | Responsável | Status |
|-------|-------------------------|----|---------|-------|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | João Egydio |
|RNF-002| O sistem deve ter uma UX(User Experience) simples e inutiva | ALTA | Guilherme Henrique |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| Utilização de um semi banco de dados                  |
