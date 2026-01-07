# O Grande Evento - Liga dos Titãs

## Identificação do Projeto

**Projeto Final:** Web Experience
**Módulo M2:** Fundamentos de Programação Web

**Autoras:**

* Gabriella Ayres
* Débora Andrade

## Tema Escolhido
**O Grande Evento** — Site para um **torneio desportivo (Futebol)**, representando a *Liga dos Titãs 2026*, com foco na organização de horários e arenas e na interação com o utilizador.

**Link do Repositório:** [O Grande Evento](https://github.com/DebsAndrade/Projeto-Grande-Evento-M2.git)

---
 
## Descrição do Projeto

O Grande Evento é uma página web que apresenta toda a informação relevante sobre um evento de grande escala, incluindo horários, arenas e bilhetes.
O projeto foi desenvolvido com especial atenção à organização visual, acessibilidade e interatividade.

---

## Passos para Executar a Página

1. Clonar o repositório:
   ```bash
   git clone https://github.com/DebsAndrade/Projeto-Grande-Evento-M2.git

2. Abrir a pasta do projeto:

   cd Projeto-Grande-Evento-M2


3. Abrir o ficheiro index.html no navegador:

  Duplo clique no ficheiro ou utilizar a extensão Live Server no Visual Studio Code


---
## Principais Decisões Tomadas e Justificação
### Organização da Informação com Grid

* Foi utilizado CSS Grid (via classes do Tailwind) para organizar o horário dos eventos;

* A grelha divide os eventos por arenas e horários, permitindo uma leitura clara:

* A estrutura adapta-se a diferentes tamanhos de ecrã, garantindo responsividade.

### Filtro de Horários

* Implementado um sistema de filtro por Arena A e Arena B;

* O utilizador consegue visualizar apenas os eventos relevantes, reduzindo a complexidade da informação.

* A funcionalidade melhora significativamente a experiência de navegação.

### Modal de Compra de Bilhetes

* Criado um modal interativo para a compra de bilhetes;

* O modal permite escolher tipo e quantidade de bilhetes, com cálculo automático do preço;

* Esta solução evita a mudança de página, tornando a experiência mais fluida.

### Menu Sticky

* O cabeçalho utiliza a propriedade sticky;

* Mantém o botão “Comprar Bilhete” sempre acessível durante o scroll;

* Facilita o acesso rápido à ação principal do site.

### Tecnologias Utilizadas

* HTML5;

* Tailwind CSS;

* JavaScript;

* Font Awesome (ícones);

* Google Fonts (Oswald).

### Funcionalidades Implementadas

* Layout responsivo;

* Organização clara de horários;

* Filtro interativo por arena;

* Modal de compra de bilhetes;

* Menu fixo (sticky).

---

## Considerações Finais

O projeto O Grande Evento permitiu aplicar conhecimentos de desenvolvimento web, com destaque para a organização de informação complexa através de CSS Grid e a implementação de funcionalidades interativas.

As soluções adotadas contribuíram para uma navegação clara e intuitiva, cumprindo os objetivos propostos. Como evolução futura, poderão ser acrescentadas novas funcionalidades e melhorias de acessibilidade.