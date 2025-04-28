# Instruções para Executar o Site Apocalypse Academy Localmente

Este guia fornece instruções passo a passo para executar o site Apocalypse Academy em seu computador local. Isso permitirá que você visualize e interaja com o site completo antes de fazer o deploy em um servidor de produção.

## Pré-requisitos

Antes de começar, você precisará ter instalado em seu computador:

1. **Node.js** (versão 14.0.0 ou superior)
2. **npm** (geralmente vem com o Node.js)
3. **Git** (opcional, mas recomendado)

Você pode verificar se já tem estas ferramentas instaladas executando os seguintes comandos no terminal:

```bash
node -v
npm -v
git --version
```

Se algum destes comandos não for reconhecido, você precisará instalar a ferramenta correspondente.

## Passo 1: Preparar os Arquivos

1. Descompacte o arquivo `apocalypse-academy-website-export.zip` que foi enviado para você.
2. Você verá uma pasta chamada `export` - esta contém os arquivos compilados para produção.
3. Para desenvolvimento local, precisamos dos arquivos fonte completos. Descompacte o arquivo `apocalypse-academy-website.zip` (se disponível) ou use a pasta `website` do projeto original.

## Passo 2: Instalar Dependências

1. Abra um terminal ou prompt de comando.
2. Navegue até a pasta do projeto:

```bash
cd caminho/para/apocalypse-academy/website
```

3. Instale as dependências do projeto:

```bash
npm install
```

Este comando pode levar alguns minutos para ser concluído, pois ele baixa todas as bibliotecas necessárias para o projeto.

## Passo 3: Iniciar o Servidor de Desenvolvimento

Após a instalação das dependências, você pode iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

Este comando iniciará um servidor local e abrirá automaticamente o site em seu navegador padrão. Se o navegador não abrir automaticamente, você pode acessar o site manualmente digitando o seguinte endereço no navegador:

```
http://localhost:3000
```

## Passo 4: Navegar pelo Site

Agora você pode navegar pelo site completo em seu ambiente local:

- Página inicial: http://localhost:3000/
- Documentários: http://localhost:3000/documentarios
- Cursos: http://localhost:3000/cursos
- Revistas: http://localhost:3000/revistas

Todas as funcionalidades do site estarão disponíveis para teste, exceto aquelas que dependem de serviços externos (como processamento de pagamentos ou autenticação).

## Passo 5: Personalização (Opcional)

Se você deseja fazer alterações no site:

1. Os arquivos de páginas estão localizados na pasta `pages/`
2. Os componentes reutilizáveis estão na pasta `components/`
3. Os estilos estão na pasta `styles/`
4. As imagens e outros recursos estáticos estão na pasta `public/`

Após fazer alterações em qualquer arquivo, o servidor de desenvolvimento atualizará automaticamente o site no navegador.

## Solução de Problemas

Se você encontrar algum problema ao executar o site localmente, aqui estão algumas soluções comuns:

### Erro de porta em uso

Se a porta 3000 já estiver em uso por outro aplicativo, você pode iniciar o servidor em uma porta diferente:

```bash
npm run dev -- -p 3001
```

### Erros de dependência

Se você encontrar erros relacionados a dependências, tente:

```bash
npm clean-install
```

### Problemas de compatibilidade de Node.js

Este projeto foi desenvolvido com Node.js versão 14+. Se você estiver usando uma versão mais antiga, considere atualizar ou usar uma ferramenta como nvm para gerenciar múltiplas versões do Node.js.

## Próximos Passos

Depois de testar o site localmente, você pode:

1. Fazer o deploy em um servidor de produção seguindo as instruções de deploy fornecidas
2. Personalizar o conteúdo para suas necessidades específicas
3. Adicionar funcionalidades adicionais conforme necessário

Para qualquer dúvida adicional, consulte a documentação completa do projeto ou entre em contato para suporte técnico.
