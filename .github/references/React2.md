# Web-Engineering II

## Front-End: React - Teil 1

### Überblick

- JavaScript-Softwarebibliothek (kein Framework!)
- Entwickelt von Facebook
- Komponenten werden als selbst definierte HTML-Tags repräsentiert
- Häufig für die Umsetzung von Single-Page-Applications (client-seitig)
- Mit Node.js aber auch serverseitiges (Vor-)Rendering möglich
- Open Source Projekt

### Ansatz

- Aktualisieren des DOM aufwändig
- Schaffung von Virtual DOM
- DOM-Diffing: selektive Aktualisieren des DOM auf Basis eines Vergleichs zwischen ursprünglichem und geändertem Virtual DOM
  → im DOM wird nur der wirklich geänderte Teil aktualisiert
- Performance von React im Vergleich zu anderen Frameworks sehr gut
- Aber: Vermischung von Rendering und Logik (Verstoß gegen MVC-Paradigma)

## React

- Setzt nicht alle Aspekte einer Webanwendung um
- Definition von Komponenten
- Verwalten des States innerhalb der Komponenten
- Layout wird mit CSS gemacht
- Es gibt mehrere Aspekte, für die weitere Software-Komponenten benötigt werden
  - Verwalten von Anwendungs-State: z.B. Redux
  - Kommunikation mit REST-Backend: Redux-Thunk, Axios, etc.
- Ohne diese weiteren Software-Komponenten wäre professionelle Umsetzung von Web-Seiten aufwändig
- Abweichender Ansatz zu Frameworks wie Angular:
  - Für Umsetzung von Anwendung können viele Komponenten zusammengeführt werden
  - Es sind viele Umsetzungsalternativen möglich

## Komponenten

### Funktions- und Klassenkomponenten

#### Funktionskomponente

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

#### Klassenkomponente

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

### Eigenschaften von Komponententypen

#### Funktionskomponenten (Eigenschaften)

- Haben keinen State
- HTML-Content wird mit `return()` zurückgegeben

#### Klassenkomponenten (Eigenschaften)

- Klassen haben einen State
- Der HTML-Content wird in der Funktion `render()` zurückgegeben
- Haben einen Life-Cycle
  - Der Konstruktor wird beim Instanziieren der Komponente aufgerufen
  - Die Funktion `componentDidMount()` wird aufgerufen, wenn die Komponenten im DOM eingebaut wurde
  - Die Funktion `componentWillUnmount()` wird aufgerufen, kurz bevor die Komponente aus dem DOM entfernt wird

### Beispiel: Timer als Funktionskomponente

```jsx
function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />, document.getElementById('root')
  );
}

setInterval(tick, 1000);
```

### Timer als Funktion oder Klasse

- Bei der Umsetzung als Funktion
  - Muss der Trigger zum Aktualisieren von Außen kommen
  - Muss die Komponente immer wieder in den DOM kopiert werden
- Bei Klassenkomponenten ist der Implementierungsansatz anders
  - Klassenkomponente hat sowohl State als auch Life-Cycle
  - Dadurch kann Komponente eigenständiger umgesetzt werden
  - Keine Trigger von außen notwendig
  - Durch Setzen von State

### Timer als Klasse

```jsx
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({date: new Date() });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```

- Im Konstruktor wird das Anfangsdatum gesetzt
- Sobald die Komponente angezeigt wird, wird die automatische Aktualisierung gestartet
- Sobald die Komponente nicht mehr angezeigt wird, kann der Timer gestoppt werden
- Die Funktion ändert State, dadurch wird Komponente neu gerendert
- Die Render-Methode gibt aktualisierten HTML-Code zurück
- Die Komponente wird eingefügt ohne State!

## Klassenkomponenten (State-Änderung)

- Der State sollte immer über die Methode `setState()` verändert werden, nie über direkte Zuweisung
- Nur wenn `setState()` aufgerufen wird, weiß React, dass die Komponente aktualisiert werden muss

```jsx
// Nicht gut
this.state.comment = 'Hello';

// Gut
this.setState({comment: 'Hello'});
```

## Rendering

### Render-Funktion

```jsx
ReactDOM.render(<p>Hello</p>, document.getElementById('root'));
```

- Komponenten werden mit der `render()`-Methode in den DOM-Tree eingefügt
- Parameter
  - HTML-Code
  - Das DOM-Element, in dem der HTML-Code eingefügt werden soll
- Mit `ReactDOM.render()` wird Root-Komponente gesetzt
- Es können auch mehrere Root-Komponenten gesetzt werden, es wird jedoch davon abgeraten
  - Root-Komponenten haben eigenen Kontext
  - Direkter Austausch zwischen Root-Komponenten ist nicht möglich
  - Performance wird bei mehreren Root-Komponenten beeinträchtigt

### Komponenten (Rendering)

```jsx
// Komponente definieren
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Komponente anlegen
const element = <Welcome name="Sara" />;

// Komponente im DOM einfügen
ReactDOM.render(
  element,
  document.getElementById('root')
);
```

- React-Komponente kann als selbstdefiniertes Tag verwendet werden
- Schritte zum Einfügen von Komponenten
  1. Komponente definieren
  2. Komponente instanziieren
  3. Komponente im DOM einfügen

### Mehrfache Instanziierung von Komponenten

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

### Properties

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}
```

- Bei Funktionskomponenten werden die Properties im Tag übergeben
- Sie können/sollen in der Komponente nur gelesen, nicht verändert werden

### Nesting (Verschachtelung)

```jsx
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      {/* ...weitere Inhalte... */}
    </div>
  );
}
```

- Durch Schachtelung können Komponenten einfacher gestaltet werden

```jsx
function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name} />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}
```

- Komponenten werden über die Custom-Tags ineinander geschachtelt
- React-Anwendungen setzen sich in der Regel aus hierarchisch strukturierten Komponenten zusammen

## JSX

```jsx
// Ohne JSX
const myelement = React.createElement('h1', {}, 'I do not use JSX!');

// Mit JSX
const myelement = <h1>I Love JSX!</h1>;

ReactDOM.render(myelement, document.getElementById('root'));
```

- JavaScript XML: erlaubt Einbettung von HTML im JavaScript-Code
- XHTML-Code ohne aufwändiges `createElement()`, etc
- Konvertiert HTML-Tags in React-Elemente

```jsx
const myelement = <h1>React is {5 + 5} times better with JSX</h1>;
```

- Auch Einbettung von dynamischen Elementen möglich

### JSX-Transkompilation

- JSX wird durch Transkompilation in React-Anwendung integriert (Source-to-Source-Kompilation)
- Übersetzung zunächst nach Babel oder Type-Script → dann nach JavaScript-Code → dann Einbindung in React-Komponente → dann Einbettung des Elements im DOM-Tree

### JSX-Beispiele

```jsx
const myelement = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);

const myelement2 = <input type="text" />;
```

- Ganze HTML-Blöcke können in runden Klammern geschrieben werden
- Wie bei XML müssen Elemente geschlossen werden

### Fragments

```jsx
// Fehler: Bei JSX muss auf der obersten Ebene immer ein einzelnes Root-Element sein
const myelement = (
  <li>Apples</li>
  <li>Bananas</li>
  <li>Cherries</li>
);
```

In manchen Fällen würde es keinen Sinn machen, ein weiteres Root-Element einzufügen:

```jsx
class Table extends React.Component {
  render() {
    return (
      <table>
        <tr>
          <Columns />
        </tr>
      </table>
    );
  }
}
```

Wenn ein unnötiges Root-Element vermieden werden soll, können die Elemente in ein React-Fragment eingebettet werden:

```jsx
class Columns extends React.Component {
  render() {
    return (
      <React.Fragment>
        <td>Hello</td>
        <td>World</td>
      </React.Fragment>
    );
  }
}
```

- Das Fragment-Element wird beim Rendering nicht übernommen

## Anwendung anlegen

- Aufsetzen von Anwendung am besten über das Modul "create-react-app"

### Setup

```bash
npm install -g create-react-app
create-react-app my-app
cd my-app
npm start
```

Projektstruktur:

```
your-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│ ├── favicon.ico
│ ├── index.html
│ └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
```

### Startprozess

- Aufruf von "npm start" startet das React-Start-Skript
- React-Start-Skript öffnet schließlich index.html
- Mit dem Laden von index.html wird index.js ausgeführt
- In index.html gibt es keine Referenz zu index.js
- Verknüpfung wird automatisch im React-Script durch Webpack umgesetzt
- Webpack
  - Open-Source-JavaScript-Modul-Packer
  - Wird verwendet unter anderem für das Zusammenführen von JavaScript und HTML-Seiten
  - Wenn "index.html" aufgerufen wird, ergänzt Webpack automatisch index.js aus dem "src"-Verzeichnis

Im index.html gibt es in der Regel ein Div mit der ID "root":

```html
<html>
<body>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root"></div>
</body>
</html>
```

- Der Knoten könnte jedoch auch beliebigen anderen Namen haben
- Bei Standardanwendung wird dieser Knoten im DOM durch index.js mit der React-Anwendung ersetzt

### Index.js

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

- Index.js integriert React-Anwendung in den DOM
  1. Laden von React und ReactDOM
  2. Laden der "App": React-Funktionskomponente
  3. Über DOM wird DIV-Element mit ID "root" durch React-Komponente ersetzt

### App.js

```jsx
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* [HTML-Content] */}
    </div>
  );
}

export default App;
```

- In der Datei App.js wird häufig die Root-Komponente definiert
- Sie muss jedoch nicht App heißen, kann beliebigen anderen Namen haben
- Mit return wird JSX-Code mit React-Komponenten zurückgegeben
- Mit "export default" wird angegeben, welche Komponente standardmäßig mit "require" importiert wird

Nach erfolgreichem Start:

```text
Compiled successfully!
You can now view de.coservices.daif.core.react in the browser.
Local: http://localhost:3000
On Your Network: http://192.168.0.45:3000
Note that the development build is not optimized.
```

- Hinweis: Startprozess dauert sehr lange...
- Aber Aktualisierungen werden automatisch übernommen!
- Nach Änderung einer Datei wird automatisch in Konsole Aktualisierung bestätigt

## CSS-Einbettung

- Layout wird bei React genauso wie bei HTML mit CSS umgesetzt
- Viele Ansätze zum Einbetten von CSS möglich
  - Beispielsweise:
    1. Laden von CSS-Datei in Komponente
    2. Laden von CSS-Modul in Komponente
    3. Einbetten von CSS-Code im Modul
  - Es gibt weitere Ansätze, doch das sind die gängigen Ansätze

### CSS-Datei laden

```jsx
import React from 'react';
import './DottedBox.css';

const DottedBox = () => (
  <div className="DottedBox">
    <p className="DottedBox_content">Get started with CSS styling</p>
  </div>
);

export default DottedBox;
```

```css
.DottedBox {
  margin: 40px;
  border: 5px dotted pink;
}
```

- In Komponenten können CSS-Dateien direkt geladen werden
- Wichtig: class-Attribut muss umbenannt werden in "className"

### Anwendung der Styles

```jsx
<input
  type="number"
  name="id"
  id="id"
  value={id}
  onChange={this.handleChange} />
<input
  className="loginButton"
  type="button"
  value="Submit"
  onClick={this.handleSubmit} />
```

- Zum Anwenden der CSS-Styles werden Attribute in den Tags gesetzt
- Hinweise: nicht alle Aspekte von Bibliotheken wie Bootstrap können übernommen werden, weil sie JavaScript beinhalten.

### CSS Modules

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import styles from './mystyle.module.css';

class Car extends React.Component {
  render() {
    return <h1 className={styles.bigblue}>Hello Car!</h1>;
  }
}

export default Car;
```

- Alternativ können CSS-Styles auch als CSS Modules geladen werden
- Das Modul sollte `*.module.css` heißen
- Zugriff auf Styles über das importierte CSS-Modul

### Inline Styles

```jsx
import React from 'react';

const divStyle = {
  margin: '40px',
  border: '5px solid pink'
};

const Box = () => (
  <div style={divStyle}>
    <p>Get started with inline style</p>
  </div>
);

export default Box;
```

- CSS-Styles können auch in Komponente selber definiert werden
- Dieser Ansatz ist jedoch nicht empfehlenswert, da Wiederverwendung nicht möglich ist

### Bedingte Formatierung

```jsx
render() {
  let className = 'menu';
  if (this.props.isActive) {
    className += 'menu-active';
  }
  return <span className={className}>Menu</span>
}
```

- In `render()`-Methode können Properties für bedingte Formatierungen verwendet werden
- Hinweis:
  - "class" ist ein Schlüsselwort in JavaScript
  - JSX wird in JavaScript transkompiliert
  - Zur Vermeidung von Problemen wird daher häufig anstelle von "class" das Attribut "className" verwendet!
  - Es kann aber auch class verwendet werden

## Properties und State

- Properties sind Objekte, die von "oben" nach "unten" gereicht werden (von Parent-Komponenten zu Child-Komponenten)
- State sind die Objekte in einer Klasse
- Properties und State stellen den "lokalen" State in den Funktionen und Klassen dar
- Grundlage für das Rendering der Komponenten
- Properties sollten grundsätzlich nicht geändert werden, sondern immer von Parent-Komponente vorgegeben werden.
- In Klassen ergänzen Properties den lokalen State.
- Der State in Klassen kann verändert werden
  → Funktionskomponenten sollten die eigenen Daten nie verändern, nur darstellen!
  → Klassen können hingegen den eigenen Zustand verwalten und ändern

### Properties: Beispiel

```jsx
class App extends Component {
  render() {
    const characters = [
      { name: 'Charlie', job: 'Janitor', },
      { name: 'Mac', job: 'Bouncer' },
    ]
    return (
      <div className="container">
        <Table characterData={characters} />
      </div>)
  }
}
```

- `Characters[]` werden in Klassenkomponente definiert und an Child-Komponente weitergegeben
- Bei Übergabe wird der Name der Property festgelegt

```jsx
class Table extends Component {
  render() {
    const { characterData } = this.props
    return (
      <table>
        <TableHeader />
        <TableBody characterData={characterData} />
      </table>
    )
  }
}
```

- Table-Klasse holt sich den Array aus den Properties und leitet den Array an `TableBody`-Element weiter

```jsx
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  )
}
```

- `TableHeader` ist einfache Funktion, mit der der Header-Code delegiert wird

```jsx
const TableBody = props => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
      </tr>
    )
  })
  return <tbody>{rows}</tbody>
}
```

- `TableBody` ist Funktion, die Properties erhält
- Aus den Properties wird der `characterData`-Array geholt und über "map" durchlaufen
- Für jedes Element wird ein HTML-Table-Row-Element in "rows" geschrieben.

## State in Klassenkomponenten

- Der State in der Klasse umfasst Daten aus dem Backend und zum aktuellen Stand der Client-Anwendung, die noch nicht persistiert sind
- Beispiel: Waren im Shopping-Cart, die noch nicht bestellt wurden

```jsx
class App extends Component {
  state = {
    characters: [],
  }
}
```

- Im Gegensatz zu Funktionskomponenten können Klassen Methoden zum Ändern des States definieren
- Die Methoden können an Child-Komponenten per Funktions-Pointer weitergereicht werden

### Container-Komponenten-Konzept

- Gängiger Ansatz
  - Klassenkomponente ist "Container"-Komponente, die den State verwaltet
  - Die Klassenkomponenten beinhaltet mehrere Funktionskomponenten
  - Die Funktionskomponenten übernehmen die Darstellung der Weboberfläche
  - Die Klassenkomponente gibt an die Funktionskomponenten Funktions-Pointer, damit Funktionskomponenten State verändern können

### Beispiel für Methode zum Ändern des States

```javascript
removeCharacter = index => {
  const { characters } = this.state
  this.setState({
    characters: characters.filter((character, i) => {
      return i !== index
    }),
  })
}
```

- Schritte zum Löschen von Eintrag im Array
  1. Array aus dem State holen
  2. Den State neu setzen mit dem gefilterten Array

### Weiterleiten der Methode an Funktionskomponenten

```jsx
render() {
  const { characters } = this.state
  return (
    <div className="container">
      <Table characterData={characters} removeCharacter={this.removeCharacter} />
    </div>
  )
}
```

- Funktion wird mit dem Namen "removeCharacter" an Table-Komponente weitergeleitet

```jsx
const Table = props => {
  const { characterData, removeCharacter } = props
  return (
    <table>
      <TableHeader />
      <TableBody
        characterData={characterData}
        removeCharacter={removeCharacter} />
    </table>
  )
}
```

- Funktionskomponente kann Methode an weitere Funktionskomponente weiterleiten
- Die Methode muss jedoch zunächst aus den Properties übernommen werden

```jsx
const TableBody = props => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => props.removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    )
  })
  return <tbody>{rows}</tbody>
}
```

- In der Funktionskomponente kann Methode an Event von HTML-Komponenten gehangen werden (z.B. an `onClick()`)

## Listen

### Darstellen von Listen

```jsx
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```

- Listen werden häufig in `<ul>`-Elementen dargestellt

### Keys für Listenelemente

```jsx
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>{number}</li>
);

// Besser mit eindeutigen IDs:
const todoItems = todos.map((todo) =>
  <li key={todo.id}>{todo.text}</li>
);
```

- Zum Bearbeiten von Listen sollten den Listenelementen IDs zugewiesen werden
- Besser ist es, wenn die Objekte richtige IDs haben

# Web-Engineering II (Teil 2)

## Front-End: React – Teil 2 (Formulare)

### Formulare

- Formulare sind in der Regel Klassenkomponenten, da State benötigt wird
- Komponenten, die Formulare umsetzen, müssen…
  - Änderungen in den Formularfeldern übernehmen
  - Den State ändern und die anderen Komponenten (und ggfls. das Backend) informieren, wenn Formular abgeschickt wird
- Formularfelder werden im State angelegt/ initialisiert

```jsx
import React, { Component } from 'react';

class Form extends Component {
  initialState = {
    name: '',
    job: '',
  };
  state = this.initialState;
}
```

### Formulare: Übernehmen von Änderungen

- Automatisches Übernehmen von Werten in Formularfeldern durch `onChange`-Methode von HTML-Elementen
- Dazu muss…
  - Methode zum Umgang mit Änderungen in Komponente implementiert werden (z.B. `handleChange()`)
  - Methode muss an HTML-Formularelemente gebunden werden
  - Geänderte Werte werden mit `setState()` in den State übernommen

```javascript
handleChange = event => {
  const { name, value } = event.target;
  this.setState({
    [name]: value,
  });
}
```

### Formulare (Continued)

Anmerkung: Der Titel "Formulare" wurde hier zu "Formulare (Continued)" geändert, um eine doppelte Überschrift zu vermeiden, da der vorherige Abschnitt ebenfalls "Formulare" hieß und dies zu einem Linting-Fehler führen würde.

- An die beiden Input-Felder wird die Methode `handleChange()` gebunden
- Mit dem `value`-Attribut wird die Ausgabe im Formular automatisch an den Wert im State gebunden

```jsx
render() {
  const { name, job } = this.state;
  return (
    <form>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" value={name}
        onChange={this.handleChange} />
      <label htmlFor="job">Job</label>
      <input type="text" name="job" id="job" value={job}
        onChange={this.handleChange} />
    </form>
  );
}
```

### Formulare: Submit

- Wenn der Submit-Button im Formular gedrückt wird, muss der State in der Klasse geändert werden
- Notwendige Schritte
  - Methode zum Ändern des State implementieren
  - Methode muss zum Formular runtergereicht werden

```javascript
handleSubmit = character => {
  this.setState({ characters: [...this.state.characters, character] });
}

render() {
  const { characters } = this.state;
  return (
    <div className="container">
      <Table characterData={characters} removeCharacter={this.removeCharacter} />
      <Form handleSubmit={this.handleSubmit}/>
    </div>
  );
}
```

- Bei einem Submit werden die eingegebenen Daten „hochgereicht“
- Anschließend werden die Formularfelder geleert

```javascript
// …
submitForm = () => {
  this.props.handleSubmit(this.state);
  this.setState(this.initialState);
}
// …
return (
  <form>
    {/* … */}
    <input type="text" name="job" id="job" value={job}
      onChange={this.handleChange} />
    <input type="button" value="Submit" onClick={this.submitForm} />
  </form>
);
// …
```

### Event-Handling: HTML und React

- Event-Handling in React ähnlich wie in HTML, aber leicht anders!
- HTML

```html
<button onclick="activateLasers()">
  Activate Lasers
</button>
```

- In React

```jsx
<button onClick={activateLasers}>
  Activate Lasers
</button>
```

- Methode in geschweiften Klammern und ohne runde Klammern

- Standardverhalten von HTML-Elementen wird auch unterschiedlich unterdrückt (z.B. Wechsel zu einer Seite bei einem Link)
- HTML: Rückgabe von `false` bei Event-Funktion

```html
<a href="#" onclick="console.log('The link was clicked.'); return false">
  Click me
</a>
```

- In React: Beim Event muss `preventDefault()` aufgerufen werden

```jsx
function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }
  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}
```

### Event-Handling: Binding von Methode in React (1)

- Bei Verwendung von JSX muss die Methode in Komponente mit `bind()` an „this“ (Instanz) gebunden werden! Ansonsten ist die Funktion „undefined“.

```jsx
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({ isToggleOn: !state.isToggleOn }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
```

### Event-Handling: Binding von Methode in React (2)

- Alternative 1 zum Binding: Arrow-Functions
  - Das Binding der Methode an die Instanz ist nur notwendig bei regulären Funktionsdeklarationen
  - Wird die Methode als Arrow-Function deklariert, ist das Binding nicht notwendig
  - Arrow-Functions werden automatisch an „this“ gebunden

```jsx
class LoggingButton extends React.Component {
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}
```

### Event-Handling: Binding von Methode in React (3)

- Alternative 2 zum Binding: Arrow-Functions in HTML-Komponente
  - Wenn Methodenaufruf in HTML-Komponente als Arrow-Function geschrieben wird, ist ebenfalls ein Binding nicht notwendig
  - Nachteil: Callbacks werden immer wieder neu erzeugt → unnötige Aufrufe für Aktualisierung von Web-Seite

```jsx
class LoggingButton extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    // Avoid this pattern if performance is critical or the component re-renders often
    return (
      <button onClick={() => this.handleClick()}>
        Click me
      </button>
    );
  }
}
```

### Event-Handling: Parameter in Schleifen (1)

- In Listen muss häufig Parameter zur Identifikation des Eintrags an Methode übergeben werden
- Mögliche Umsetzung:

```jsx
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```

### Event-Handling: Parameter in Schleifen (2)

- Beispiel bei Tabelle mit Einträgen, die per Button gelöscht werden

```jsx
const TableBody = props => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => props.removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
}
```

## Hinweis: map-Funktion

- Die `map()` Methode wendet auf jedes Element des Arrays die bereitgestellte Funktion an und gibt das Ergebnis in einem neuen Array zurück.

```jsx
const TableBody = props => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => props.removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
}
```

## Nutzen von REST-APIs

## REST-Einbindung (Grundlagen)

- Für das Gestalten von React-Anwendungen werden in der Regel RESTAPIs verwendet
- Grundsätzlich können alle REST-APIs verwendet werden (z.B. Axios, jQuery AJAX, das im Browser vordefinierte `window.fetch`, etc.)
- Üblicherweise wird der AJAX-Call beim Aufbau der Klassenkomponente ausgeführt: `componentDidMount()`
- Das Ergebnis wird dann verwendet, um mit `setState()` den Zustand zu setzen
- Nach `setState()` wird die Komponente automatisch aktualisiert

## REST-Einbindung (Beispiel: Initialisierung und Fetch)

- State zunächst leer initialisieren
- In `componentDidMount()` wird REST-Services aufgerufen

```jsx
import React, { Component } from 'react';

class App extends Component {
  state = {
    data: [],
  }

  componentDidMount() {
    const wikiURL = 'https://ghibliapi.herokuapp.com/films';
    fetch(wikiURL)
      .then(result => result.json())
      .then(result => {
        this.setState({
          data: result,
        });
      });
  }
  // ... render method etc.
}
```

## REST-Einbindung (Fetch API und Spinner)

- Innerhalb von React-Komponenten kann die native Fetch-API des Browsers verwendet werden (Standardfunktion in JavaScript)
- `fetch()` gibt Promise zurück
- Wenn Spinner für das Laden angezeigt werden soll, kann vorher ein Flag im State gesetzt werden

```jsx
// …
componentDidMount() {
  this.setState({ isLoading: true });
  fetch('https://ghibliapi.herokuapp.com/films')
    .then(response => response.json())
    .then(data => this.setState({ hits: data.hits, isLoading: false }));
}
// …
```

## REST-Einbindung (Verarbeitung des Ergebnisses)

- Ergebnis des REST-Calls ist in der Regel ein Object-Array, der als JSON vom Server kam
- Mit dem Object-Array kann dann ein Element-Array erzeugt werden, der dann per JSX eingebaut werden kann
- Hinweis: in React sollten Elemente in Listen möglichst immer eine ID/ Key haben!

```jsx
render() {
  const { data } = this.state;
  const result = data.map((entry, index) => { // Using index as key is not ideal if list can change
    return <li key={entry.id || index}>{entry.title}</li>;
  });
  return <ul>{result}</ul>;
}
```

## Kommunikation zwischen Komponenten (Übersicht)

- Umsetzung der Kommunikation zwischen den Komponenten ist abhängig von der Konstellation der Kommunikationspartner

  - **Parent to Child**
    - Props
    - InstanzMethoden
  - **Child to Parent**
    - Callback
    - EventBubbling
  - **Child to Child**
    - ParentComponent
  - **Any to Any**
    - Observer Pattern
    - Globale Variablen
    - Context

Quelle: `https://www.javascriptstuff.com/component-communication/`

## Parent-To-Child: Props

- Bei Klassenkomponenten

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

- Zentraler Mechanismus in React für Weitergabe von Daten und Methoden

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

- Bei Funktionskomponenten

```jsx
<Welcome name="Sara" />
```

## Parent-To-Child: Instanzmethoden (Definition)

```jsx
class TheChild extends React.Component {
  myFunc() {
    return "hello";
  }
}
```

- Wenn der Parent per Methode mit dem Child kommunizieren soll
- Beim Anlegen der Children werden die Referenzen im State abgelegt und können aufgerufen werden
- Komponente mit Funktion, die aufgerufen werden soll:

## Parent-To-Child: Instanzmethoden (Aufruf)

```jsx
class TheParent extends React.Component {
  render() {
    return (
      <TheChild ref={foo => { this.foo = foo; }} />
    );
  }

  componentDidMount() {
    var x = this.foo.myFunc();
    // x is now 'hello'
  }
}
```

- Im Parent wird beim Anlegen mit `ref=` eine Referenz angelegt und kann im State abgelegt werden
- Eher seltener Ansatz für Kommunikation

## Child-To-Parent: Callback

```jsx
<MyChild myFunc={this.handleChildFunc} />
```

- Der gängige Kommunikationsansatz vom Child zum Parent
- Übergabe der Callback-Methode:
  - Klassenkomponente definiert Funktion
  - Beim Anlegen von Child-Komponenten wird denen die Referenz auf die Funktion übergeben
  - Die Child-Komponenten kann sich die Referenz auf die Funktion aus den Props holen und aufrufen

```jsx
this.props.myFunc();
```

## Child-To-Parent: Event Bubbling

```jsx
class ParentComponent extends React.Component {
  render() {
    return (
      <div onKeyUp={this.handleKeyUp}>
        {/* … */}
      </div>
    );
  }

  handleKeyUp = (event) => {
    // …
  }
}
```

- Kein React-spezifischer Kommunikationsansatz, sondern klassischer DOM-Ansatz
- Im Parent können schon Event-Handler an Child-Komponente angehangen werden
- Eher selten verwendet

## Zwischen Child-Komponenten (Grundkonzept)

- Direkte Kommunikation zwischen Child-Komponenten schwierig, weil sie keine Referenzen aufeinander haben
- In der Regel übernimmt Root-Komponente die Kommunikation
  - Benachrichtigung, der Root-Komponente
  - Root-Komponente aktualisiert den eigenen State und bei Aktualisierung in `render()` die Props in den Child-Komponenten

Quelle: `https://medium.com/@haixiang6123/react-js-component-communication-between-sibling-components-1fdd21328c64`

## Zwischen Child-Komponenten (Beispiel: State Handling im Parent)

```jsx
class SessionApp extends Component {
  constructor(props) {
    super(props);
    this.state = { currentUser: "" };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    // Assuming Constants.USER_ID is defined elsewhere
    if (localStorage != null) {
      const userID = localStorage.getItem(Constants.USER_ID);
      this.setState({currentUser: userID});
    }
  }
  // …
}
```

- Methode in der Parent-Komponente definieren und weiterreichen
- Wenn Komponenten informieren wollen, rufen Sie die Funktion auf
- `setState()` führt zu Rendering von Komponenten

## Hinweis: Umsetzen von Nachrichten

```javascript
module.exports = {
  USER_LOGGED_IN: 'UserLoggedIn',
  THEME_CHANGED: 'ThemeChanged',
  SELECTION_CHANGED_EVENT: 'SelectionChanged',
}
```

- Wenn sich Komponenten gegenseitig informieren, sollten Konstanten verwendet werden, um die Nachrichtenart eindeutig zu identifizieren
- Diese Konstanten sollten in zentraler Datei ausgelagert werden.
- Mögliche Umsetzung: Modul mit entsprechenden Exports

## Zwischen Child-Komponenten (Beispiel: Rendering im Parent)

```jsx
// …
render() {
  const userName = this.state.currentUser;
  return (
    <div>
      <SessionLoginComponent loginChanged={this.handleLogin} />
      <SessionWelcomeText currentUser={userName} />
    </div>
  )
}
// …
```

- Funktionen zum Ändern des States werden an Komponenten mit Interaktionsmöglichkeiten weitergereicht
- Wenn Methode durch Child-Komponente aufgerufen wird, wird der State in Parent-Komponente geändert
- Dadurch wird Komponente aktualisiert und Änderungen an Child-Komponenten weitergereicht

## Zwischen Child-Komponenten (Beispiel: Aufruf im Child)

```jsx
class LoginComponent extends Component {
  handleLogin(e) {
    // … //Hier ist der Login-Prozess
    if (localStorage != null) {
      // Assuming Constants.USER_ID is defined
      localStorage.setItem(Constants.USER_ID, this.state.userID);
    }
    this.props.loginChanged(); // Call the method passed from parent
  }

  render() {
    // …
    return (
      <form>
        {/* … */}
        <input type="button" value="Submit" onClick={this.handleLogin.bind(this)} />
      </form>
    );
    // …
  }
}
```

- Aufrufen der Parent-Methode

## Zwischen beliebigen Komponenten

- Wenn der Komponentenbaum sehr tief ist und/ oder die Child-Komponenten keine unmittelbare Parent-Komponente gemeinsam haben, wird Kommunikation über Referenzen schwierig
- In diesem Fall wird eine Kommunikationsmöglichkeit unabhängig von den Parent-Komponenten benötigt
- Mögliche Umsetzungsoptionen
  - Observer Pattern
  - Global Variables
  - Context

## Observer-Pattern (Grundlagen)

- Gängiges Programmiermuster (Pattern) in objektorientierter Programmierung
- Lose gekoppelte Kommunikation zwischen
  - Observable (Objekt, das sich ändert) und
  - Observer (Objekt, das über Änderungen informiert wird)
- Observer ist Interface mit `update()`-Methode
- Observable ist Klasse, bei dem sich Observer per `addObserver()` registrieren kann.

## Observer-Pattern (Umsetzung und Bibliotheken)

- Umsetzung von Observer-Pattern über Bibliotheken möglich
- Gängige Bibliotheken: EventEmitter, PubSubJS, MicroEvent.js, mobx
- Am weitesten verbreitet: EventEmitter
- Zentrales Objekt zum Registrieren von Listenern
- Methode zum Versenden von Events
- Emitter verteilt Events an entsprechende Listener
- Schritte
  1. Definieren eines Singleton-Modules mit dem Event-Emitter
  2. Registrieren von Listenern beim Event-Emitter
  3. Versenden von Events von den Komponenten, die einen Zustandswechsel veranlassen

## Hinweis: Singleton

- Singleton ist Software-Pattern, bei dem von einem Objekt nur eine Instanz angelegt werden soll
- Andere Objekte können sich direkt die Instanz holen, ohne dass die Referenz rumgereicht werden muss

```java
// Singleton in Java
public class Singleton {
  static private Singleton instance_ = null;

  static public Singleton instance() {
    if (null == instance_) {
      instance_ = new Singleton();
    }
    return instance_;
  }

  protected Singleton() {
    // nur um Zugriff zu verhindern
  }
}
```

## Observer-Pattern mit EventEmitter

```javascript
import EventEmitter from 'eventemitter3';

const eventEmitter = new EventEmitter();

const Emitter = {
  addListener: (event, fn) => eventEmitter.on(event, fn),
  removeListener: (event, fn) => eventEmitter.off(event, fn),
  sendEvent: (event, payload) => eventEmitter.emit(event, payload)
}

Object.freeze(Emitter);
export default Emitter;
```

- Methoden Hinzufügen und Entfernen von Listenern sowie dem Versenden von Listener
- `Object.freeze()` stellt sicher, dass Emitter nicht geändert wird

## Observer-Pattern: Registrieren von Listener

```jsx
import Emitter from './SessionEventEmitter';
// Assuming Constants.LOGIN_CHANGED_EVENT is defined

class WelcomeText extends Component {
  constructor(props) {
    super(props);
    this.handleEmitterEvent = this.handleEmitterEvent.bind(this);
    this.state = { username: props.userID };
  }

  componentDidMount() {
    Emitter.addListener(Constants.LOGIN_CHANGED_EVENT, (newValue) =>
      this.handleEmitterEvent(newValue));
  }

  componentWillUnmount() {
    Emitter.removeListener(Constants.LOGIN_CHANGED_EVENT, this.handleEmitterEvent); // Important to pass the same function reference
  }

  handleEmitterEvent(newValue) {
    this.setState({username: newValue});
  }
  // …
}
```

## Observer-Pattern: Versenden von Events

```jsx
import Emitter from './SessionEventEmitter';
// Assuming Constants.LOGIN_CHANGED_EVENT is defined

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.state = { userID: '' /* or some initial value */ };
  }

  handleLogin(e) {
    // …
    Emitter.sendEvent(Constants.LOGIN_CHANGED_EVENT, this.state.userID);
  }
  // …
}
```

- Beim Versenden der Events werden die Art des Events und die relevanten Daten übergeben
- Listener sollten nur auf spezifische Events reagieren
- Der Empfang eines Events sollte keine weiteren Events auslösen, sonst besteht die Gefahr von Endlosschleifen!

## Alternative 2: Globale Variablen

- Globale Variablen können im Webanwendungen beispielsweise im `window`-Objekt angelegt werden.

```javascript
// …
componentWillMount: function () { // componentWillMount is deprecated, use constructor or componentDidMount
  window.MyVars = {
    theme: "dark",
  };
}
// …
```

- Es wird jedoch grundsätzlich davon abgeraten, globale Variablen zu verwenden
  - Seiteneffekte sind bei größeren Anwendungen schwer abzuschätzen
  - Außerdem: Änderungen an Variablen lösen kein `redraw()` bei relevanten Komponenten aus

## Alternative 3: Context (Deklaration)

- Context ist React-Konzept vergleichbar zu globalen Variablen
- Context wird mit einem Standardwert für einen Teil des Komponentenbaum deklariert

```jsx
// …
const ThemeContext = React.createContext('light');

class App extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}
// …
```

- Child-Komponenten können auf Context-Objekt zugreifen, ohne dass es per Props weitergeleitet wurde

## Alternative 3: Context (Zugriff)

- In Child-Komponenten kann über `this.context` auf Werte zugegriffen werden
- Einsatz von Context nur in Ausnahmefällen empfohlen

```jsx
// …
class ThemedButton extends React.Component {
  static contextType = ThemeContext; // Or using ThemeContext.Consumer for functional components before hooks
  render() {
    return <Button theme={this.context} />;
  }
}
// …
```

- Einsatz nur empfohlen, wenn viele Komponenten die Daten benötigen und ein Weiterreichen aufwändig wäre (z.B. Festlegen von Theme)
- Achtung: Änderungen im Context führt zu einem Neu-Rendern von allen betroffenen Komponenten

## Kommunikation zwischen Komponenten (Zusammenfassung)

- Je nach Art der Kommunikation können unterschiedliche Ansätze verwendet werden
- Ein einheitlicher Ansatz ist in React zunächst nicht vorgesehen
- Eine direkte Kommunikation zwischen verteilten Komponenten, die keine Referenzen aufeinander haben, ist ohne Zusatz-Software-Komponenten schwierig
- In der Regel Umsetzung über andere Software-Komponenten wie Redux

## Bedingte Ausgabe (Grundlegendes Beispiel)

- Häufig soll die Ausgabe von Komponenten an bestimmte Bedingungen geknüpft werden
- Beispielsweise: ein User ist eingeloggt oder kein User ist eingeloggt

```jsx
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}
```

## Bedingte Ausgabe für Login-Button

- Mögliche Umsetzung für Login-Komponente

```jsx
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}
```

## Bedingte Ausgabe für Login-Control (State und Handler)

```jsx
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }
  // …
}
```

## Bedingte Ausgabe für Login-Control (Rendering)

```jsx
// …
render() {
  const isLoggedIn = this.state.isLoggedIn;
  let button;
  if (isLoggedIn) {
    button = <LogoutButton onClick={this.handleLogoutClick} />;
  } else {
    button = <LoginButton onClick={this.handleLoginClick} />;
  }
  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />{button}
    </div>
  );
}
// } // Closing brace for class
```

## Bedingte Ausgabe in JSX (Mit ternärem Operator)

- Es können auch direkt im JSX-Code bedingte Ausdrücke integriert werden.

```jsx
function Mailbox(props) {
  // Assuming isLoggedIn is part of props or state for Mailbox
  const isLoggedIn = props.isLoggedIn; // or this.state.isLoggedIn if Mailbox is a class
  return (
    <div>
      The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
    </div>
  );
}

// Example usage within another component's render
// render() {
//   const isLoggedIn = this.state.isLoggedIn;
//   return (
//     <div>
//       {isLoggedIn ? <LogoutButton onClick={this.handleLogoutClick} />
//                   : <LoginButton onClick={this.handleLoginClick} /> }
//     </div>
//   );
// }
```

## Bedingte Ausgabe in JSX (Komponenten ausblenden)

- Durch die Rückgabe von `null` können Komponenten auf Basis von Bedingungen ausgeblendet werden.

```jsx
function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }
  return (
    <div className="warning">
      Warning!
    </div>
  );
}
```

## React Router (Einführung)

## React Routen

- React setzt grundsätzlich Single Page Application um
- Seite wird einmal geladen
- Inhalt der Seiten wird auf Basis der Interaktionen geändert
- URL bleibt immer gleich
- Zuweilen ist aber Verwendung von Routen sinnvoll
  - `www.seite.de/impressum`
  - `www.seite.de/ueberuns`
- Besonderheit bei SPA
  - Wechsel zwischen Routen soll nicht zu einem Reload der Seiten führen
  - Keine Links mit `href` möglich (für interne SPA routing)
- Zum Umsetzen solcher Routen kann man React-Router verwenden
- Installation: `npm install react-router-dom`

## React-Router (BrowserRouter)

- Anwendung muss in `BrowserRouter`-Tag eingeschlossen werden
- Notwendig, damit Sub-Komponenten Links zum Wechsel zwischen Routen verwenden können

```jsx
// …
import { BrowserRouter } from 'react-router-dom';
// …
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
```

## React-Router (Switch und Route)

- Zum Wechsel zwischen unterschiedlichen Routen wird `Switch`-Tag (oder `<Routes>` in v6+) verwendet

```jsx
// …
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import { Routes, Route } from 'react-router-dom'; // Updated for v6
// …
function App() {
  return (
    <main>
      <Routes> {/* Switch is replaced by Routes in react-router-dom v6 */}
        <Route path="/" element={<Home />} exact /> {/* component is replaced by element */}
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </main>
  )
}
// ….
```

## React-Router (Links)

- Für die Links müssen Router-Links verwendet werden!
- Keine normalen Links mit `href` möglich, weil sonst Seite neu geladen wird (bei SPA nicht erwünscht/ problematisch)

```jsx
// …
import { Link } from 'react-router-dom';
// …
function Navbar() {
  return (
    <div>
      <Link to="/">Home </Link>
      <Link to="/about">About Us </Link>
      <Link to="/shop">Shop Now </Link>
    </div>
  );
};
```

## React-Router und Bootstrap

- Für Nutzung von Bootstrap und React-Router wird weiteres Modul benötigt
- Design soll von Bootstrap, Link-Handling von Router kommen
- `npm install -S react-router-bootstrap`
- Komponenten, die Link-Actions haben, werden in `LinkContainer` eingebettet

```jsx
// …
import { LinkContainer } from 'react-router-bootstrap';
import Button from 'react-bootstrap/Button'; // Assuming Button is from react-bootstrap
// …
<LinkContainer to="/foo/bar">
  <Button>Foo</Button>
</LinkContainer>
// …
```

## React-Router und Bootstrap Navigation-Bar

- Für Navigation-Bar sind 2 Ansätze möglich
  - Einbettung eines Router-Links in `Navbar.Brand`-Tag
  - Einbettung von `Nav.Link` in Router-`LinkContainer`

```jsx
// …
// render() { // Assuming this is inside a component's render method
// return (
//   <Navbar bg="light" expand="lg">
//     <Navbar.Brand href="/"> {/* This href will cause a full page reload if not handled */}
//       <Link to="/">Home </Link> {/* Better to use LinkContainer for Navbar.Brand if it's a NavLink */}
//     </Navbar.Brand>
//     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//     <Navbar.Collapse id="basic-navbar-nav">
//       <Nav className="mr-auto">
//         <LinkContainer to="/aboutUs">
//           <Nav.Link eventKey={1}>Über uns</Nav.Link>
//         </LinkContainer>
//         {/* … */}
//       </Nav>
//     </Navbar.Collapse>
//   </Navbar>
// );
// }
// …
```
