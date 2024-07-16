# NerdNet - Geek e Café

NerdNet é uma plataforma destinada aos amantes da cultura geek, oferecendo um espaço para conexão, interação e compartilhamento de ideias. O site permite que os usuários se cadastrem e façam login para acessar conteúdo exclusivo e interagir com outros membros da comunidade.

## Tecnologias Utilizadas

- **Frontend**: React.js
- **Backend**: Firebase (Firestore, Authentication)
- **Estilo**: CSS

## Funcionalidades

- **Cadastro de Usuários**: Os usuários podem criar uma conta utilizando e-mail e senha.
- **Login**: Acesso à conta com autenticação.
- **Navbar**: Navegação fácil com links para Login e Cadastro.
- **Design Responsivo**: Interface otimizada para diferentes dispositivos.

## Como Executar o Projeto

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/diiegopaiiva/nerdnet.git
   cd nerdnet
2. **Instale as dependências**:
    ```bash
    npm install
3. **Inicie o servidor de desenvolvimento**:
    ```bash
    npm start
4. **Abra seu navegador e acesse http://localhost:3000 para ver o aplicativo em funcionamento**.

## Configuração do Firebase
Para que o aplicativo funcione corretamente, você precisará configurar o Firebase:

1. Crie um projeto no Firebase Console.
2. Adicione um aplicativo web e copie as configurações do Firebase.
3. Substitua as configurações no arquivo src/firebase.js com as suas credenciais.
   
## Estrutura do Projeto
- `src/`: Código fonte do aplicativo.
- `public/`: Arquivos públicos, incluindo o favicon e o index.html.
- `src/components/`: Componentes React do projeto.
- `src/firebase.js`: Configuração do Firebase.

## Contribuição
Sinta-se à vontade para contribuir! Abra um pull request ou crie uma issue para discutir melhorias.

## Licença
Este projeto está licenciado sob a MIT License. Veja o arquivo LICENSE para mais detalhes.