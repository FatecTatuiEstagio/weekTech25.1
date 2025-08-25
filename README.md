# Fatec Tech Week Site

Este projeto é um site desenvolvido para a Fatec Tatuí. A Fatec Tech Week, um evento voltado para tecnologia, inovação e networking entre estudantes, profissionais e empresas do setor. O objetivo do site é divulgar informações sobre o evento, programação, palestrantes, inscrições e outras novidades relacionadas à semana tecnológica da Fatec.

## Tecnologias Utilizadas

- Framework: Vite

### Bibliotecas
- React
- TypeScript
- Tailwind CSS
- Radix UI
- TanStack Query
- Lucide React

## Instalação

### Usando Docker Compose

1. Certifique-se de ter o Docker e o Docker Compose instalados em sua máquina.

2. Execute o comando abaixo para subir o serviço:
    ```sh
    docker compose up --build
    ```

O site estará disponível em [http://localhost:4173](http://localhost:4173).

### Usando Docker (manual)

1. Construa a imagem Docker:
    ```sh
    docker build -t fatec-tech-week-site .
    ```

2. Execute o container:
    ```sh
    docker run -p 4173:4173 fatec-tech-week-site
    ```

O site estará disponível em [http://localhost:4173](http://localhost:4173).

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para enviar pull requests ou abrir issues para discutir melhorias e correções.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.