## CASOS DE TESTE MANUAIS
### (ID 001) – LOGIN COM AS CREDENCIAIS VÁLIDAS

### PASSOS:
 - Acessar a página de login https://practice.expandtesting.com/login
 - Informar usuário válido
 - Informar senha válida
 - Clicar em "Login"

### DADOS DE TESTE:
- Username: practice
- Password: SuperSecretPassword!

### RESULTADO ESPERADO:
 - Usuário é autenticado com sucesso
 - Sistema redireciona para a página inicial

### RESULTADO OBTIDO:
- Login realizado com sucesso: You logged into a secure area!

### EVIDENCIA
![Login com credenciais válidas](prints/001.png)







## (ID 002) - LOGIN COM SENHA INVÁLIDA

### PASSOS:
- Acessar a página de login https://practice.expandtesting.com/login
- Informar usuário válido
- Informar senha inválida
- Clicar em "Login"

### DADOS DE TESTE
- Username: practice
- Password: Senha errada

### RESULTADO ESPERADO:
- Mensagem de erro exibida: Your password is invalid!

### EVIDENCIA
![LOGIN COM SENHA INVÁLIDA](prints/002.png)

## (ID 003) - LOGIN COM USUARIO VAZIO

## PASSOS:
- Acessar a página de login https://practice.expandtesting.com/login
- Informar usuário: vazio
- Password: SuperSecretPassword!

## RESULTADO ESPERADO:
- Mensagem de erro exibida: Your username is invalid!

### EVIDENCIA
![LOGIN COM USUARIO VAZIO](prints/003.png)

## (ID 004) - LOGIN COM A SENHA VAZIA

### PASSOS:
- Acessar a página de login https://practice.expandtesting.com/login
- Informar usuário: practice
- Password: vazio

### RESULTADO ESPERADO:
- Mensagem de erro exibida: Your password is invalid!

