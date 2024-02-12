# tList API com NODE.js e Mysql

Esempio dell'API de To Do List elaborado com NODE.js e base de dados MySql.

## Istruzioni di Installazione

1.  Clone il repository.
2.  Installa le dipendenze con `npm init -y `.
3.  Installa: `npm install express`.
4.  Installa: `npm install mysql2`.
5.  Installa: `npm install nodemon -D`.
6.  Installa: `npx eslint --init`.
7.  Installa: `npm install cors`.
8.  Installa: `npm install dotenv`.
9.  Use: `Docker`.
10. Use: `npm install`.

## Configurazione

Configura il file `.env` con le tue variabili d'ambiente.

## Criando o Banco de Dados e a Tabela

Siga estas instruções para criar o banco de dados e a tabela que armazenarão as tarefas do seu projeto:

**1. Crie o banco de dados:**

```sql
CREATE DATABASE tlist;
```

**2. Selecione o banco de dados:**

```sql
USE tlist;
```

**3. Crie a tabela:**

```sql
CREATE TABLE tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(45) NOT NULL,
  description VARCHAR(45) NOT NULL,
  status VARCHAR(45) NOT NULL,
  created_at VARCHAR(45) NOT NULL,
  updated_at VARCHAR(45) NOT NULL
);
```

**4. Explicação das colunas:**

-   **id:** Identificador único da tarefa (auto-incrementado)
-   **title:** Título da tarefa
-   **description:** Descrição da tarefa
-   **status:** Status da tarefa (pendente, em andamento, concluído)
-   **created_at:** Data e hora de criação da tarefa
-   **updated_at:** Data e hora da última atualização da tarefa

**5. Próximos passos:**

Após criar o banco de dados e a tabela, você pode começar a inserir e gerenciar as tarefas do seu projeto utilizando, por exemplo, o insomnia.

## Utilizzo

1. Avvia il server: `npm start` o `npm run dev`.
2. Accedi all'API su `http://localhost:3333`.

## Contribuzione

Senti libero di contribuire! Leggi [CONTRIBUTING.md](./CONTRIBUTING.md) per ulteriori dettagli.

## Licenza

Questo progetto è concesso in licenza sotto la Licenza MIT - consulta il file [LICENSE.md](./LICENSE.md) per i dettagli.

## Contatto

-   Email: albertomaffeii@gmail.com
-   Issues: [GitHub Issues](https://github.com/albertomaffeii/api-rest/issues)
