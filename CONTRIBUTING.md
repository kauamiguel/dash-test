# Guia de Contribuição

Obrigado pelo interesse em contribuir com o Goexplosion Dashboard! Este documento fornece diretrizes para contribuir com o projeto.

## Índice

- [Código de Conduta](#código-de-conduta)
- [Como Contribuir](#como-contribuir)
- [Reportando Bugs](#reportando-bugs)
- [Sugerindo Melhorias](#sugerindo-melhorias)
- [Processo de Pull Request](#processo-de-pull-request)
- [Estilo de Código](#estilo-de-código)
- [Testes](#testes)
- [Documentação](#documentação)

## Código de Conduta

Este projeto e todos os participantes estão sujeitos ao nosso Código de Conduta. Ao participar, espera-se que você mantenha este código. Por favor, reporte comportamento inaceitável.

## Como Contribuir

### Reportando Bugs

Bugs são rastreados como issues no GitHub. Ao criar uma issue para um bug, inclua:

- Um título claro e descritivo
- Passos detalhados para reproduzir o bug
- Comportamento esperado vs. comportamento observado
- Screenshots, se aplicável
- Informações do ambiente (navegador, sistema operacional, etc.)
- Contexto adicional que possa ser útil

### Sugerindo Melhorias

Melhorias também são rastreadas como issues no GitHub. Ao sugerir uma melhoria, inclua:

- Um título claro e descritivo
- Descrição detalhada da melhoria proposta
- Justificativa para a melhoria (como ela beneficia o projeto)
- Possíveis implementações ou abordagens
- Mockups ou exemplos, se aplicável

## Processo de Pull Request

1. Certifique-se de que sua ideia já foi discutida em uma issue
2. Fork o repositório
3. Crie um branch a partir de `main`
4. Faça suas alterações
5. Certifique-se de que seu código segue as diretrizes de estilo
6. Certifique-se de que todos os testes passam
7. Atualize a documentação, se necessário
8. Envie um pull request para o branch `main`

### Requisitos para Pull Requests

- Deve passar em todos os testes
- Deve seguir as diretrizes de estilo de código
- Deve incluir testes para novas funcionalidades
- Deve atualizar a documentação relevante
- Deve ser revisado por pelo menos um mantenedor

## Estilo de Código

### JavaScript/React

- Usamos ESLint e Prettier para formatação de código
- Siga as convenções do React Hooks
- Use componentes funcionais e hooks em vez de classes
- Prefira desestruturação para props e state
- Use nomes descritivos para variáveis e funções
- Evite comentários óbvios, prefira código autoexplicativo
- Documente funções complexas com JSDoc

### CSS/Styling

- Usamos Tailwind CSS para estilização
- Siga a convenção de nomes do Tailwind
- Evite CSS inline, exceto para valores dinâmicos
- Mantenha a consistência com o design system

## Testes

- Escreva testes para todas as novas funcionalidades
- Mantenha a cobertura de testes existente
- Use Jest e React Testing Library para testes
- Teste componentes isoladamente
- Escreva testes de integração para fluxos importantes

## Documentação

- Mantenha o README.md atualizado
- Documente novas funcionalidades nos arquivos relevantes
- Atualize o CHANGELOG.md para novas versões
- Use comentários JSDoc para funções complexas
- Mantenha a documentação da API atualizada

---

Agradecemos suas contribuições para tornar o Goexplosion Dashboard ainda melhor!

