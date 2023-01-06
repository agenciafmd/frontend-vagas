# Pull Request Checklist
Antes de submeter uma pull request, verifique se ela segue as seguintes recomendações ( faz parte da nossa avaliação :slightly_smiling_face:) 


## Styleguides

Em nossos projetos adotamos uma Styleguides ([Commit Amigão](https://github.com/BeeTech-global/bee-stylish/blob/master/commits/README.md#anatomia-do-commit-amig%C3%A3o)) para facilitar a identificação de um commit, onde a estrutura é baseada em

```
<tipo>(<escopo>): <assunto>
```

<b>Os valores permitidos para o `<tipo>` são:</b>

-  feat (nova funcionalidade)
-  style (formatação geral no código. Não confundir com CSS)
-  refactor (refatoração de código de produção)
-  test (adicionar/refatorar testes)
-  fix (adivinha qual é esse)
-  docs (e esse também)
-  chore (atualização de tarefas ou código que não está relacionado a produção)

  <b>`<escopo>`</b><br>
    
  O escopo deve especificar o diretório e/ou arquivo que foi trabalhado.
  
  <b>`<assunto>`</b>

    - Máximo de 50 caracteres
    - Tipo de escopo devem estar em letras minúsculas
    - Assunto deve estar no imperativo

Exemplo:
  
```
  feat(app/app.component.ts): cria método para resgatar dados da rota ativa 
```
  
    
### Hora da verdade, os seus commit's estão seguindo as recomendações? ( `preencha com "x" uma das alternativas` :monocle_face:)
 - [] Sim <br>
 - [] Não
