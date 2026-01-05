CASOS DE TESTE MANUAIS
(ID 001) – LOGIN COM AS CREDENCIAIS VÁLIDAS

PASSOS:
1 - Acessar a página de login https://practice.expandtesting.com/login
2 - Informar usuário válido
3 - Informar senha válida
4 - Clicar em "Login"

DADOS DE TESTE:
1 - Username: practice
2 - Password: SuperSecretPassword!

RESULTADO ESPERADO:
1 - Usuário é autenticado com sucesso
2 - Sistema redireciona para a página inicial

RESULTADO OBTIDO:
Login realizado com sucesso: You logged into a secure area!

print:






(ID 002) - LOGIN COM SENHA INVÁLIDA

PASSOS:
1 - Acessar a página de login https://practice.expandtesting.com/login
2 - Informar usuário válido
3 - Informar senha inválida
4 - Clicar em "Login"

DADOS DE TESTE
1 - Username: practice
2 - Password: Senha errada

RESULTADO ESPERADO:
1 - Mensagem de erro exibida: Your password is invalid!

(ID 003) - LOGIN COM USUARIO VAZIO

PASSOS:
1 - Acessar a página de login https://practice.expandtesting.com/login
2 - Informar usuário: vazio
2 - Password: SuperSecretPassword!

RESULTADO ESPERADO:
1 - Mensagem de erro exibida: Your username is invalid!

(ID 004) - LOGIN COM A SENHA VAZIA

PASSOS:
1 - Acessar a página de login https://practice.expandtesting.com/login
2 - Informar usuário: practice
2 - Password: vazio

RESULTADO ESPERADO:
1 - Mensagem de erro exibida: Your password is invalid!

