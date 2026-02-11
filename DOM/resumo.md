# Guia Completo do DOM (Document Object Model)

## O que é o DOM?

O DOM (Document Object Model) é uma interface de programação que representa a estrutura de um documento HTML ou XML como uma árvore de objetos. Cada elemento, atributo e texto no documento se torna um nó que pode ser manipulado via JavaScript.

---

## 1. Seleção de Elementos

### `document.getElementById(id)`
Seleciona um elemento pelo seu ID único.
```javascript
const elemento = document.getElementById('meuId');
```

### `document.getElementsByClassName(className)`
Retorna uma HTMLCollection com todos os elementos que possuem a classe especificada.
```javascript
const elementos = document.getElementsByClassName('minhaClasse');
```

### `document.getElementsByTagName(tagName)`
Retorna uma HTMLCollection com todos os elementos da tag especificada.
```javascript
const paragrafos = document.getElementsByTagName('p');
```

### `document.querySelector(selector)`
Retorna o **primeiro** elemento que corresponde ao seletor CSS.
```javascript
const elemento = document.querySelector('.classe #id > filho');
```

### `document.querySelectorAll(selector)`
Retorna uma NodeList com **todos** os elementos que correspondem ao seletor CSS.
```javascript
const elementos = document.querySelectorAll('div.ativa');
```

---

## 2. Manipulação de Conteúdo

### `element.innerHTML`
Obtém ou define o conteúdo HTML interno de um elemento.
```javascript
elemento.innerHTML = '<strong>Novo conteúdo</strong>';
```

### `element.textContent`
Obtém ou define apenas o texto de um elemento (sem HTML).
```javascript
elemento.textContent = 'Texto puro';
```

### `element.innerText`
Similar ao textContent, mas considera estilos CSS (não exibe texto oculto).
```javascript
const textoVisivel = elemento.innerText;
```

### `element.value`
Obtém ou define o valor de inputs, textareas e selects.
```javascript
const valorInput = document.querySelector('input').value;
```

---

## 3. Manipulação de Atributos

### `element.getAttribute(attr)`
Obtém o valor de um atributo específico.
```javascript
const src = imagem.getAttribute('src');
```

### `element.setAttribute(attr, value)`
Define ou altera o valor de um atributo.
```javascript
imagem.setAttribute('alt', 'Descrição da imagem');
```

### `element.removeAttribute(attr)`
Remove um atributo do elemento.
```javascript
elemento.removeAttribute('disabled');
```

### `element.hasAttribute(attr)`
Verifica se o elemento possui determinado atributo.
```javascript
if (elemento.hasAttribute('data-id')) { }
```

### Propriedades diretas
Acesso direto a atributos comuns.
```javascript
elemento.id = 'novoId';
elemento.className = 'novaClasse';
imagem.src = 'nova-imagem.jpg';
link.href = 'https://exemplo.com';
```

---

## 4. Manipulação de Classes CSS

### `element.classList.add(classe)`
Adiciona uma ou mais classes ao elemento.
```javascript
elemento.classList.add('ativa', 'destaque');
```

### `element.classList.remove(classe)`
Remove uma ou mais classes do elemento.
```javascript
elemento.classList.remove('ativa');
```

### `element.classList.toggle(classe)`
Adiciona a classe se não existir, remove se existir.
```javascript
elemento.classList.toggle('visivel');
```

### `element.classList.contains(classe)`
Verifica se o elemento possui determinada classe.
```javascript
if (elemento.classList.contains('ativa')) { }
```

### `element.classList.replace(antiga, nova)`
Substitui uma classe por outra.
```javascript
elemento.classList.replace('erro', 'sucesso');
```

---

## 5. Manipulação de Estilos CSS

### `element.style.propriedade`
Acessa ou modifica estilos inline diretamente.
```javascript
elemento.style.color = 'red';
elemento.style.backgroundColor = '#fff';
elemento.style.fontSize = '16px';
```

### `window.getComputedStyle(element)`
Obtém todos os estilos computados (incluindo CSS externo).
```javascript
const estilos = window.getComputedStyle(elemento);
const cor = estilos.color;
```

---

## 6. Criação e Remoção de Elementos

### `document.createElement(tag)`
Cria um novo elemento HTML.
```javascript
const novaDiv = document.createElement('div');
```

### `element.appendChild(child)`
Adiciona um elemento filho ao final.
```javascript
pai.appendChild(novaDiv);
```

### `element.insertBefore(novo, referencia)`
Insere um elemento antes de outro elemento filho.
```javascript
pai.insertBefore(novoElemento, elementoReferencia);
```

### `element.removeChild(child)`
Remove um elemento filho.
```javascript
pai.removeChild(elementoFilho);
```

### `element.remove()`
Remove o próprio elemento.
```javascript
elemento.remove();
```

### `element.replaceChild(novo, antigo)`
Substitui um elemento filho por outro.
```javascript
pai.replaceChild(novoElemento, elementoAntigo);
```

### `element.cloneNode(deep)`
Clona um elemento. Se `deep = true`, clona com todos os filhos.
```javascript
const clone = elemento.cloneNode(true);
```

---

## 7. Navegação entre Elementos

### `element.parentElement`
Retorna o elemento pai.
```javascript
const pai = elemento.parentElement;
```

### `element.children`
Retorna uma HTMLCollection com os filhos diretos.
```javascript
const filhos = elemento.children;
```

### `element.firstElementChild`
Retorna o primeiro filho (elemento).
```javascript
const primeiro = elemento.firstElementChild;
```

### `element.lastElementChild`
Retorna o último filho (elemento).
```javascript
const ultimo = elemento.lastElementChild;
```

### `element.nextElementSibling`
Retorna o próximo elemento irmão.
```javascript
const proximo = elemento.nextElementSibling;
```

### `element.previousElementSibling`
Retorna o elemento irmão anterior.
```javascript
const anterior = elemento.previousElementSibling;
```

---

## 8. Eventos

### `element.addEventListener(evento, função)`
Adiciona um ouvinte de evento ao elemento.
```javascript
botao.addEventListener('click', function() {
    alert('Clicou!');
});
```

### `element.removeEventListener(evento, função)`
Remove um ouvinte de evento específico.
```javascript
botao.removeEventListener('click', minhaFuncao);
```

### Principais eventos:
- `click` - Clique do mouse
- `dblclick` - Clique duplo
- `mouseenter` - Mouse entra no elemento
- `mouseleave` - Mouse sai do elemento
- `mousemove` - Mouse se move sobre o elemento
- `keydown` - Tecla pressionada
- `keyup` - Tecla solta
- `keypress` - Tecla pressionada (caractere)
- `submit` - Formulário enviado
- `change` - Valor de input alterado
- `input` - Entrada de dados em tempo real
- `focus` - Elemento recebe foco
- `blur` - Elemento perde foco
- `load` - Página ou recurso carregado
- `DOMContentLoaded` - DOM totalmente carregado
- `scroll` - Rolagem da página
- `resize` - Redimensionamento da janela

### Objeto Event
```javascript
elemento.addEventListener('click', function(event) {
    event.preventDefault(); // Previne comportamento padrão
    event.stopPropagation(); // Para propagação do evento
    console.log(event.target); // Elemento que disparou o evento
    console.log(event.currentTarget); // Elemento com o listener
});
```

---

## 9. Manipulação de Formulários

### `form.elements`
Acessa todos os elementos de um formulário.
```javascript
const inputs = formulario.elements;
```

### `input.focus()`
Define o foco em um input.
```javascript
campoNome.focus();
```

### `input.blur()`
Remove o foco de um input.
```javascript
campoNome.blur();
```

### `form.reset()`
Reseta todos os campos do formulário.
```javascript
formulario.reset();
```

### `form.submit()`
Envia o formulário programaticamente.
```javascript
formulario.submit();
```

---

## 10. Dimensões e Posicionamento

### `element.offsetWidth` / `element.offsetHeight`
Largura/altura total do elemento (incluindo padding e border).
```javascript
const largura = elemento.offsetWidth;
```

### `element.clientWidth` / `element.clientHeight`
Largura/altura da área de conteúdo (incluindo padding, sem scrollbar).
```javascript
const altura = elemento.clientHeight;
```

### `element.scrollWidth` / `element.scrollHeight`
Largura/altura total do conteúdo (incluindo partes ocultas por scroll).
```javascript
const alturaTotal = elemento.scrollHeight;
```

### `element.offsetTop` / `element.offsetLeft`
Posição relativa ao elemento pai posicionado.
```javascript
const topo = elemento.offsetTop;
```

### `element.getBoundingClientRect()`
Retorna objeto com tamanho e posição relativa ao viewport.
```javascript
const rect = elemento.getBoundingClientRect();
console.log(rect.top, rect.left, rect.width, rect.height);
```

### `window.scrollTo(x, y)`
Rola a página para uma posição específica.
```javascript
window.scrollTo(0, 500);
```

### `element.scrollIntoView()`
Rola a página até o elemento ficar visível.
```javascript
elemento.scrollIntoView({ behavior: 'smooth' });
```

---

## 11. Data Attributes

### Definindo no HTML
```html
<div data-id="123" data-user="Thiago" data-active="true"></div>
```

### Acessando via JavaScript
```javascript
const elemento = document.querySelector('div');

// Leitura
console.log(elemento.dataset.id); // "123"
console.log(elemento.dataset.user); // "Thiago"
console.log(elemento.dataset.active); // "true"

// Escrita
elemento.dataset.score = "100";
```

---

## 12. Métodos Úteis do Document

### `document.write(conteudo)`
Escreve conteúdo diretamente no documento (uso não recomendado).
```javascript
document.write('<h1>Título</h1>');
```

### `document.createTextNode(texto)`
Cria um nó de texto.
```javascript
const texto = document.createTextNode('Olá mundo');
```

### `document.createDocumentFragment()`
Cria um fragmento de documento (para inserções em lote).
```javascript
const fragment = document.createDocumentFragment();
```

### `document.body`
Acessa o elemento `<body>`.
```javascript
document.body.style.backgroundColor = '#f0f0f0';
```

### `document.head`
Acessa o elemento `<head>`.
```javascript
const meta = document.createElement('meta');
document.head.appendChild(meta);
```

### `document.title`
Obtém ou define o título da página.
```javascript
document.title = 'Novo Título';
```

### `document.cookie`
Acessa ou define cookies.
```javascript
document.cookie = "usuario=Thiago";
```

---

## 13. Inserção Avançada de Elementos

### `element.insertAdjacentHTML(position, html)`
Insere HTML em posições específicas.

Posições:
- `beforebegin` - Antes do elemento
- `afterbegin` - Dentro, antes do primeiro filho
- `beforeend` - Dentro, depois do último filho
- `afterend` - Depois do elemento

```javascript
elemento.insertAdjacentHTML('beforeend', '<p>Novo parágrafo</p>');
```

### `element.insertAdjacentElement(position, element)`
Similar, mas insere um elemento (não HTML).
```javascript
elemento.insertAdjacentElement('afterbegin', novoElemento);
```

### `element.insertAdjacentText(position, text)`
Insere texto puro.
```javascript
elemento.insertAdjacentText('beforeend', 'Texto adicional');
```

---

## 14. Verificações Úteis

### `element.matches(selector)`
Verifica se o elemento corresponde ao seletor CSS.
```javascript
if (elemento.matches('.ativa')) { }
```

### `element.closest(selector)`
Busca o ancestral mais próximo que corresponde ao seletor.
```javascript
const container = elemento.closest('.container');
```

### `element.contains(outroElemento)`
Verifica se o elemento contém outro elemento.
```javascript
if (pai.contains(filho)) { }
```

---

## Dicas de Boas Práticas

1. **Use `querySelector` e `querySelectorAll`** para maior flexibilidade
2. **Prefira `addEventListener`** ao invés de atributos onclick no HTML
3. **Cache seleções frequentes** em variáveis
4. **Use `textContent` para texto puro** (mais seguro que innerHTML)
5. **Delegação de eventos**: adicione listeners em elementos pais para melhor performance
6. **Evite manipular o DOM em loops** - use DocumentFragment
7. **Prefira classes CSS** a manipulação direta de styles

---

## Exemplo Prático Completo

```javascript
// Seleção
const botao = document.querySelector('#meuBotao');
const lista = document.querySelector('.lista');

// Evento
botao.addEventListener('click', function() {
    // Criação
    const novoItem = document.createElement('li');
    
    // Conteúdo
    novoItem.textContent = 'Novo item';
    
    // Classes
    novoItem.classList.add('item-lista');
    
    // Atributos
    novoItem.setAttribute('data-id', Date.now());
    
    // Inserção
    lista.appendChild(novoItem);
    
    // Animação com estilo
    novoItem.style.opacity = '0';
    setTimeout(() => {
        novoItem.style.transition = 'opacity 0.5s';
        novoItem.style.opacity = '1';
    }, 10);
});
```

---

## Conclusão

O DOM é uma ferramenta poderosa que permite manipular completamente a estrutura, estilo e comportamento de páginas web. Dominar essas funcionalidades é essencial para qualquer desenvolvedor front-end criar interfaces dinâmicas e interativas.