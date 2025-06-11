# Web-Engineering II

## Front-end: Redux

### React – State-Management und REST-Anbindung

- Wenn mit React Webanwendung umgesetzt wird, übernimmt…
  - React den dynamischen Aufbau der Seite
  - Das Layout wird mit CSS umgesetzt
- Zwei Aspekte fehlen aber noch…
  - Anwendungsweites State-Management
  - Stringente Anbindung von Backend
- Zentrale Fragen zum State-Management
  - Wie werden anwendungsweite Änderungen im State sinnvoll verwaltet und zwischen den Komponenten ausgetauscht?
  - Wie werden stets nur jene Komponenten bei Änderungen im State aktualisiert, für die die Änderung auch relevant sind?
- Zentrale Fragen zum Backend
  - Wie können die oft asynchronen Anfragen an das Backend sinnvoll in das State-Management eingebunden werden?

### State-Management: Serverseitiges Rendering

- Bei serverseitigen Webanwendungen ist der State auf dem Server im Form einer User-Session
- Jede Anfrage vom Client wird auf dem Server bearbeitet, dort kann auf den gesamten State zugegriffen werden
- Bei Bedarf können Daten aus der Datenbank gelesen werden
- Die Antwort-Webseite kann mit allen notwendigen Daten des State ausgeliefert werden
- Eine Kommunikation zwischen den Komponenten auf Client-Seite ist nicht/ kaum notwendig, einen Client-State gibt es (fast) nicht

```
ControllerKlasse
Anfrage
DB
Servlet-Container/ App-Server/ …
Browser
HTML
Rendering
Antwort
User Session
State
```

### State-Management: Client-seitiges Rendering

- Mit SPAs und JavaScript-Web-Frameworks wie React, Vue, Angular ist ein wichtiger Teil der Kontrollstruktur zum Browser verschoben
- Insbesondere gibt es auf dem Server keinen State, nur auf Client-Seite
- Der State ist häufig über viele Komponenten verteilt
- Oft hat/benötigt jede Komponenten nur einen kleinen Teil des States

```
RestServices DB
Browser Server …
HTML Rendering
Component
Component
Component
Component
Rest-Client
Rest-Client
Rest-Client
Rest-Client
State
State
```

- Der Austausch des State zwischen einzelnen Komponenten ist bei SPA häufig nicht leicht
- Das gilt für React, Angular, etc. gleichermaßen
- Übliche Implementierungsansätze wie Singletons, Observer-Pattern, etc. sind nur mit Hilfsmitteln möglich  die Kommunikation zwischen Komponenten ist erschwert
- Bei Software-Bibliotheken wie React wird Aktualisierung von Komponenten nur durch die Änderung des lokalen States ausgelöst  Weiterreichen des States unverzichtbar
- Wenn der gleiche State an unterschiedlichen Orten verwendet wird oder innerhalb des States bidirektionale Abhängigkeiten bestehen, können schnell Endlosschleifen bei der Oberflächenaktualisierung entstehen

### Separation of Concerns

- Frage: Wie müsste das State-Management umgesetzt werden?
- Für Antwort kann Konzept „Separation of Concerns“ herangezogen werden
- In jeder Anwendung gibt in der einen oder anderen Form die folgenden Aspekte
  - Rendering: grafische Umsetzung der Benutzerschnittstelle
  - Anwendungslogik/ State: der logische Kern der Anwendung, häufig als Fachdomäne bezeichnet, umfasst auch den State
  - Anwendungs-Controller: Die Verbindung zwischen Darstellung und Anwendungslogik
  - Persistenzschicht: die Ebene, in der die Daten der Anwendungslogik gespeichert und wieder abgerufen werden kann
- Rendering, Anwendungslogik und Anwendungs-Controller entsprechen dem klassischen MVC-Pattern (Model-View-Controller)
- Je nach Software-Architektur werden diese Aspekte durch spezifische Software-Komponenten umgesetzt

### Veranschaulichung von MVC

```
a b c
x 60 30 10
y 50 30 20
z 80 10 10
A=50%
B=30%
C=20%
```

## State-Management in SPAs

- Die Fragestellung zum State-Management ist in allen SPAs gegeben
- Häufige Antwort: zentrales State-Management
  - Es gibt einen zentralen Store, der den State beinhaltet
  - Komponenten holen sich den State vom Store
  - Komponenten melden Änderungen des State an den Store
  - Der Store informiert alle „interessierten“ Komponenten, wenn sich der State geändert hat
- Redux setzt genau dieses Konzept um
- Vergleichbare Umsetzung in Angular: NgRx

## MVC in SPA mit Redux

```
Daten:
a | b | c
--|---|--
x | 60| 30| 10
y | 50| 30| 20
z | 80| 10| 10

Views (React-Components)  <--> Zentraler Store (Redux as Model) <--> Persistenz
```

- In SPAs übernimmt der zentrale Store die Funktion des Models

## Separation of Concerns bei React

- Aufgabenteilung bei React
  - Rendering: Umgesetzt mit CSS und entsprechenden Bibliotheken
  - Anwendungs-Controller: Kernaufgabe von React
  - Persistenzschicht: Umgesetzt durch REST-Backend
  - Anwendungslogik/ State: Redux und…
- Redux setzt zentralen Store bei React um
  - Komponenten verbinden sich mit dem Store
  - Wenn der State geändert werden soll, schicken Komponenten entsprechende Befehle an den Store
  - Die Änderungen am State werden vom Store übernommen
  - Der Store informiert alle Komponenten über die Änderungen am State
  - Daraufhin können die Komponenten aktualisiert werden

## React-Redux

## Redux

- Redux ist ein State-Container für JavaScript-Anwendungen
- Quelloffene JavaScript-Bibliothek
- Zur Verwaltung von Anwendungszustand in einer Webanwendung
- Häufig Nutzung in Kombination mit React, Angular, etc.
- Ziel: alle Zustandsinformationen zentral an einer Stelle vorzuhalten und für alle Komponenten der Webanwendung zugänglich zu machen.
- Redux schließt zwei zentrale Design-Lücken von React
  - Die Kommunikation zwischen den Komponenten
  - Eine konsistente Verwaltung des Anwendungs-States

Quelle: `https://de.wikipedia.org/wiki/Redux_(JavaScript-Bibliothek)`

## Redux

```javascript
import { createStore } from "redux";
import rootReducer from "../reducers/index"; // Example path

const store = createStore(rootReducer);
export default store;
```

- Der zentrale Store wird mit `createStore()`-Methode von Redux angelegt
- Der Store wird dann allen Komponenten der React-Anwendung zur Verfügung gestellt, indem React-Komponenten in Redux-Komponente (`<Provider>`) eingebettet werden
- Alle Komponenten können über Actions den State ändern
- Die eigentlichen Änderungen werden im Store von „Reducern“ ausgeführt
- Anschließend informiert der Store alle „interessierten“ Komponenten, dass sich der State geändert hat → die Oberfläche wird damit aktualisiert

## Redux: Der Store

- Der Store verwaltet den State als Objekt, in dem beliebige Objekte abgelegt werden können
- Er koordiniert alle Änderungen am State über sogenannte Reducer
- Komponenten, die über Änderungen informiert werden wollen, können sich bei ihm registrieren
- Wenn Änderungen vorgenommen werden, informiert der Store alle Komponenten, die sich vorher bei ihm registriert haben
- Der Store hat die folgenden Funktionen, die von den Komponenten aufgerufen werden können
  - `getState()`: Zum Lesen des aktuellen States
  - `dispatch()`: Zum Versenden von Actions an den Store, damit Reducer die Action bearbeiten
  - `subscribe()`: Um über Änderungen im State informiert zu werden.
- Komponenten, die Änderungen am State vornehmen wollen, bekommen eine Referenz auf die `dispatch()`-Methode

## Redux: Reducer

```javascript
export default (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}
```

- Reducer sind Funktionen für das Anlegen und Ändern des States
- In Redux dürfen ausschließlich Reducer den State ändern
- Ein Reducer ist eine einfache JavaScript-Funktion, die 2 Parameter übergeben bekommt
  - Den aktuellen State
  - Die Aktion, die ausgeführt werden soll
- Der geänderte State wird zurückgegeben, wenn keine Änderungen vorgenommen werden sollen, wir der aktuelle State zurückgegeben

Beispiel für einen Reducer, der einen Counter hoch- oder runterzählt.

## Redux – Das ist anders…

- Ohne Redux ändern Komponenten ihren State selber (beispielsweise über `setState()`)
- Für einen konsistenten Einsatz von Redux darf das nicht mehr passieren!
- Wenn Redux verwendet wird, sollte der State nur noch zentral verwaltet werden
- Ansonsten besteht die Gefahr, dass der State inkonsistent wird
- Das bedeutet wiederum
  - Klassenkomponenten werden durch Redux weitgehend überflüssig (wenn State der Hauptgrund für ihre Nutzung war)
  - Der State ist der wesentliche Unterschied zwischen Klassen- und Funktionskomponenten bei React (vor Hooks)
  - Wenn der State zentral verwaltet wird, können auch (fast) alle Komponenten als Funktionen umgesetzt werden

Quelle: `https://de.wikipedia.org/wiki/Redux_(JavaScript-Bibliothek)` (Hinweis: Diese Aussage über Klassenkomponenten ist weniger zutreffend seit React Hooks)

## Redux: Action

```json
{
  "type": "ADD_MESSAGE",
  "payload": {
    "title": "React Redux Tutorial",
    "id": 1,
    "author": "Sebastian",
    "messageText": "Das ist Redux"
  }
}
```

- Reducer ändern den Status auf Basis von Actions
- Actions sind wie Nachrichten, die den Reducern mitteilen, was zu ändern ist
- Actions sind einfache JavaScript-Objekte
- Das Attribut `type` muss immer enthalten sein
- Das Attribut `payload` ist optional und kann den Inhalt für die Aktion umfassen
- Hinweis: Diese Namensgebung weicht von klassischen Actions in der Programmierung ab. Übliche Actions habe eine Methode `execute()` und führen die Logik selber aus

Beispiel für eine Action zum Anlegen einer Nachricht.

## Redux: Action

```javascript
import Constants from '../../Constants'; // Example path

export function addMessage(payload) {
  return { type: Constants.ADD_MESSAGE, payload };
};
```

- Actions beschreiben nur, was am State geändert werden soll
- Die eigentliche Änderung übernimmt der jeweils zuständige Reducer
- Über den Action-Type stellen Reducer fest, ob sie zuständig sind für das Bearbeiten der aktuellen Action
- Actions werden üblicherweise über entsprechende Methoden angelegt (Action Creators)
- Vergleichbar zum Factory-Method-Pattern

## Zusammenspiel

- Der Store wird mit den Reducern angelegt
- Die Reducer entscheiden anhand des Action-Types, ob sie die Action bearbeiten und welche Änderungen sie vornehmen
- Eine Action wird mit einem Action-Type angelegt (oft durch einen Action Creator)
- Eine Action hat bei Bedarf noch Daten (payload), die zum Bearbeiten der Aktion notwendig sind

```
[Component] -- dispatches --> [Action] --> [Store] --> [Reducer] --> [New State in Store]
                                                                         |
                                                                         v
                                                                    [Component receives new state]
```

## Ablauf beim Ändern eines States

1.  Von einer Komponente der Web-Seite wird ein Event ausgelöst (z.B. ein Button wird gedrückt)
2.  Der Event ruft die Funktion zum Instanziieren der Aktion auf (Action Creator), übergibt die relevanten Daten und sendet (`dispatch`) die Aktion an den Store
3.  Der Store gibt die Aktion an die Reducer weiter
    1.  Die Reducer, die sich aufgrund des Action-Types für die Aktion zuständig fühlen, führen die entsprechenden Änderungen am State aus (geben einen neuen State zurück)
    2.  Anschließend reichen Sie die Aktion mit `next()` weiter (in Middleware-Kontext, nicht direkt im Reducer)
4.  Wenn alle Reducer abgearbeitet sind (d.h. der Root-Reducer hat den neuen State berechnet), leitet der Store den geänderten State an die Komponenten weiter, die sich registriert hatten (`subscribe` / `connect`)
5.  Die entsprechenden Komponenten werden aktualisiert (neu gerendert mit den neuen Props/State)

## Redux: Änderungen am State

```javascript
// Falsch!! (Mutating state directly)
// state.articles.push(action.payload);

// Richtig (Returning a new state object without mutating the original)
// return Object.assign({}, state, {messages: state.messages.concat(action.payload)});
// Or using spread syntax (more common now):
// return { ...state, messages: [...state.messages, action.payload] };
```

- Reducer sollten die Objekte im State nicht verändern, sondern immer ersetzen! (Immutability)
- Ansonsten bekommt der Store nicht mit, dass sich der State geändert hat (bei oberflächlichem Vergleich)
- Der Store vergleicht die Referenzen im Store (oder die Werte bei flachen Vergleichen)
- Wenn die Referenz sich nicht geändert hat, sendet er kein Update an die entsprechenden Komponenten → die Oberfläche wird dann nicht aktualisiert
- Beispiel: Kombination von `Object.assign()` und `Array.concat()` für Liste von Nachrichten (oder Spread-Syntax)

## Hinweis: JavaScript-Array-Funktionen

```javascript
var array = [1, 2, 3, 4, 5];
array.push(6); // Modifies 'array' in place
```

- `Array.prototype.push()`
  - Verändert der Original-Array, Referenz bleibt die gleiche (nicht immutable)
- `Object.assign()`
  - Kopiert die Werte aller aufzählbaren, eigenen Eigenschaften von einem oder mehreren Quellobjekten in ein neues Zielobjekt.
  - Es wird das neue Zielobjekt zurückgegeben.
  - Gleiche Attribute werden überschrieben

```javascript
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign({}, target, source); // Create new object
// Ergebnis: Object { a: 1, b: 4, c: 5 } (target is not mutated if {} is first arg)
```

## Hinweis: JavaScript-Array-Funktionen

```javascript
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
// Ergebnis: Array ["a", "b", "c", "d", "e", "f"]
// array1 and array2 are unchanged
```

- `Array.prototype.concat()`
  - Führt zwei oder mehr Arrays zu einem zusammen.
  - Methode ändert nicht die existierenden Arrays, sondern gibt stattdessen ein neues Array zurück (immutable friendly)

## Reducer: Hinzufügen von Messages

```javascript
function rootReducer(state = initialState, action) {
  if (action.type === Constants.ADD_MESSAGE) {
    // Using spread syntax for immutability
    return {
      ...state,
      messages: [...state.messages, action.payload]
    };
    // Old way:
    // return Object.assign({}, state, {
    //   messages: state.messages.concat(action.payload)
    // });
  }
  return state;
}
```

- Der Reducer erzeugt einen Array mit den aktuellen Nachrichten im State und der neu hinzugekommenen Message
- In `action.payload` ist eine neue Message
- `state.messages.concat(action.payload)` oder `[...state.messages, action.payload]` erzeugt einen neuen Array
- `Object.assign({}, state, {messages:…` oder `{ ...state, messages: ... }` erzeugt ein neues State-Objekt

## Eine erste Anwendung

## Schritte, um Redux in React-Applikation einzubinden

1.  Beim Anlegen der React-Applikation wird der Redux-Store angelegt und die App wird im Redux-Provider (`<Provider store={store}>`) eingebettet
    → dadurch können sich die Komponenten mit Redux verbinden
2.  Beim Anlegen des Stores wird der (Root-)Reducer übergeben
    → Der Root-Reducer beinhaltet alle Reducer, die für das Ändern des States verantwortlich sind
3.  Action-Factory-Methods (Action Creators) werden umgesetzt
    → Sie instanziieren die Actions, die verschickt werden sollen
4.  Die Action-Factory-Methods werden an die HTML-Komponenten angebunden (z.B. über Event Handler, die `dispatch` aufrufen)
    → damit können HTML-Komponenten Actions auslösen
5.  Komponenten werden mit dem Redux-Store verbunden (mit `connect()` HOC oder Hooks wie `useSelector`, `useDispatch`)
    → dadurch werden die Komponenten Actions verschicken, bzw. werden über Änderungen informiert

## 1. React-Redux: Anwendung mit Redux anlegen

- Installation: `npm i react-redux redux` (redux is also needed)

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './tutorials/Articles/ArticlesApp'; // Example path
import rootReducer from './tutorials/Articles/reducers/index'; // Example path

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

## 1. React-Redux: Anwendung mit Redux anlegen

- Von Redux wird die `createStore()`-Methode importiert, um den Store anzulegen
- Es wird die `Provider`-Komponente importiert, um die React-App darin einzubetten → Dadurch können sich eingebettete Komponenten mit Redux verbinden

```jsx
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// …
const store = createStore(rootReducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

## 1. React-Redux: Anwendung mit Redux anlegen

- Die „App“ kann zunächst eine normale React-Komponente sein
- Beim Anlegen vom Store wird der Root-Reducer übergeben

```jsx
import App from './tutorials/Articles/ArticlesApp';
import rootReducer from './tutorials/Articles/reducers/index';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

## 2. (Root-)Reducer anlegen

- Der Root-Reducer kann zunächst ein einfache Funktion sein
- Die Funktion bekommt den aktuellen State und die Aktion übergeben
- Mit der Zuweisung vom State im Funktionskopf (`state = initialState`) kann der State initialisiert werden
- Bei sehr kleinen Anwendungen kann es ausreichen, eine Reducer zu haben, der alle Änderungen vornimmt

```javascript
const initialState = {
  articles: []
};

function rootReducer(state = initialState, action) {
  // Handle actions here
  return state;
};

export default rootReducer;
```

## 2. (Root-)Reducer anlegen

- Üblicherweise setzt sich jedoch der Root-Reducer aus mehreren Reducern zusammen (slice reducers)
- Zum Zusammenführen von Reducern wird `combineReducers()` verwendet

```javascript
import { combineReducers } from 'redux';
import { authentication } from './authentication.reducer'; // Example
import { registration } from './registration.reducer'; // Example
import { users } from './users.reducer'; // Example

const rootReducer = combineReducers({
  authentication,
  registration,
  users
});

export default rootReducer;
```

## 2. (Root-)Reducer anlegen

- Beispiel: Reducer um Artikel (Artikelbezeichnung und ID) anzulegen

```javascript
import { ADD_ARTICLE } from "../constants/actionTypes"; // Example path

const initialState = {
  articles: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return { ...state, articles: [...state.articles, action.payload] };
    // Old way:
    // return Object.assign({}, state, {
    //   articles: state.articles.concat(action.payload)
    // });
  }
  return state;
};

export default rootReducer;
```

- `ADD_ARTICLE` ist String, identifiziert Action Type
- Reducer-Funktion bekommt den aktuelle State und die auszuführende Action übergeben

## 2. (Root-)Reducer anlegen

- Der Reducer muss den aktualisierten State zurückgeben
- Ganz wichtig: die betreffenden Objekte im State dürfen nicht verändert, sondern müssen ersetzt werden! (Immutability)
- Ansonsten wird stellt Redux keine Änderung im State fest und die Komponenten werden nicht aktualisiert

```javascript
// …
function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return { ...state, articles: [...state.articles, action.payload] };
  }
  return state;
};
// …
```

## 3. Action-Factories anlegen (Action Creators)

- Actions sind einfache JavaScript-Objekte, die alle Informationen beinhalten müssen, damit die Reducer die Anfrage bearbeiten können
- Beispiel Action Object:

```json
{
  "type": "ADD_ARTICLE",
  "payload": { "title": "React Redux Tutorial", "id": 1 }
}
```

- Für ein konsistentes Anlegen von Actions werden die Actions über entsprechende Factory-Methods (Action Creators) angelegt:

```javascript
export function addArticle(payload) {
  return { type: "ADD_ARTICLE", payload };
};
```

## 3. Action-Factories anlegen: Action-Types

- Action-Types sind einfache Strings
- Um Verwechselungen und Fehler zu vermeiden, sollten Action-Types als Konstanten angelegt werden
- Sie können in einer zentralen Datei `constants.js` (oder `actionTypes.js`) abgelegt werden

```javascript
// constants/actionTypes.js
export const ADD_ARTICLE = "ADD_ARTICLE";

// actions/index.js
import { ADD_ARTICLE } from "../constants/actionTypes";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}
```

- Angepasste Factory-Method:

## 3. Action-Factories anlegen: Reducer erweitern

- Für jeden Action-Type sind die entsprechenden Aktionen im Reducer umzusetzen

```javascript
import { ADD_ARTICLE } from "../constants/actionTypes";
// …
function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return { ...state, articles: [...state.articles, action.payload] };
  }
  return state;
};
export default rootReducer;
```

## 4. HTML-Komponenten mit Actions verbinden

- Zum Ändern des States im Store aus einem Formular heraus müssen die folgenden Schritte ausgeführt werden:
  1. Die Änderungen im Formular werden in den State der Komponente übernommen (lokaler UI State)
  2. Bei Drücken des „Submit“-Button wird eine Funktion aufgerufen, die eine Aktion erzeugt (via Action Creator) und
  3. … die Aktion an den Store schickt (via `dispatch`).
  4. Der Store gibt die Aktion an den Reducer
  5. Der Reducer ändert den State (gibt neuen State zurück)

## 4. HTML-Komponenten mit Actions verbinden

- Formular zum Anlegen von Artikeln

```jsx
import React, { Component } from 'react';
// …
class ConnectedForm extends Component {
  // constructor, handleChange, handleSubmit, render
  // …
  render() {
    // const { title, id } = this.state; // Assuming local state for form fields
    return (
      <form onSubmit={this.handleSubmit}> {/* Use onSubmit for forms */}
        <label htmlFor="title">Artikelbezeichnung</label> {/* Corrected htmlFor */}
        <input type="text" name="title" id="title" value={this.state.title}
          onChange={this.handleChange} />
        {/* … other fields … */}
        <input type="submit" value="Submit" /> {/* Use type="submit" */}
      </form>
    );
  }
  // …
}
```

Quelle: `https://www.valentinog.com/blog/redux/`

## 4. HTML-Komponenten mit Actions verbinden

- Änderungen vom Form in den State übernehmen (lokaler Komponenten-State)

```jsx
import React, { Component } from 'react';
// …
class ConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", id: "" }; // Initialize local state
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this); // Bind handleSubmit
  }

  handleChange = event => { // Arrow function for auto-binding
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }
  // … render …
}
```

- Methode muss an Instanz gebunden werden (oder Arrow Function verwenden)
- Das geänderte Attribute wird aktualisiert
- Methode wird an Input gehängt

## 4. HTML-Komponenten mit Actions verbinden

- Zum Weiterleiten der geänderten Daten mit dem Submit-Button muss …
  1. eine Aktion mit den Daten aus dem Formular angelegt werden (via Action Creator)
  2. die Aktion per `dispatch()` an den Store geschickt werden
- Damit Aktionen an den Store geschickt werden können, wird zunächst eine Referenz auf die `dispatch()`-Methode benötigt
- Die Referenz auf die `dispatch()`-Methode kann über zwei Wege bestimmt werden
  - Eine mit Redux verbundenen Komponenten bekommt die Referenz auf die Methode mit den Properties (wenn `connect` ohne `mapDispatchToProps` oder mit `null` als zweitem Argument verwendet wird, oder wenn `mapDispatchToProps` nicht `dispatch` selbst überschreibt)
  - Es wird die Funktion `mapDispatchToProps()` verwendet (bevorzugt für saubere Trennung)
- Der gängige Ansatz ist die Verwendung der Methode `mapDispatchToProps()` (oder `useDispatch` Hook)

## 4. HTML-Komponenten mit Actions verbinden

- Es muss zunächst die Factory-Methode für die Action/en geladen werden (z.B. `addArticle`), die später per `dispatch()` verschickt werden sollen
- Der Methode `mapDispatchToProps()` wird die `dispatch()`-Methode übergeben, wenn sie von Redux später aufgerufen wird
- Der `dispatch()`-Methode kann dann die Action übergeben, die über die Factory-Methode `addArticle()` erzeugt wird

```javascript
import React, { Component } from 'react';
// …
import { addArticle } from '../actions/index'; // Action creator

function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article))
    // You can also use bindActionCreators here
  };
}
// …
```

Quelle: `https://www.valentinog.com/blog/redux/`
- Factory-Method zum Anlegen von einem Artikel
- `mapDispatchToProps` ruft Factory-Methode auf und dispatches

## 4. HTML-Komponenten mit Actions verbinden

- Damit `mapDispatchToProps()` aufgerufen wird, muss die Komponente mit Redux verbunden werden
- Bei der `connect()`-Funktion wird `mapDispatchToProps()` als 2ter Parameter übergeben
- `connect()` gibt eine Funktion zum Einbetten der eigentlichen Komponenten zurück (Higher-Order Component), dieser wird dann das `ConnectedForm` übergeben

```jsx
import React, { Component } from 'react';
import { connect } from "react-redux";
// …
// const Form = connect(null, mapDispatchToProps)(ConnectedForm); // null for mapStateToProps if not needed
// export default Form;
```

Quelle: `https://www.valentinog.com/blog/redux/`
- Die `connect()`-Funktion wird von `react-redux` importiert
- Die Funktion `mapDispatchToProps` wird beim Aufruf der `connect`-Funktion als 2ter Parameter übergeben

## 4. HTML-Komponenten mit Actions verbinden

- Als letzten Schritt muss noch an das Submit das Erzeugen und Versenden der Aktion umgesetzt werden

```jsx
// …
class ConnectedForm extends Component {
  // … constructor, handleChange …
  handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission
    const { title, id } = this.state; // Get data from local state
    this.props.addArticle({ title, id }); // Call action creator from props
    this.setState({ title: "", id: "" }); // Clear form
  }
  // … render with <form onSubmit={this.handleSubmit}> …
}
```

Quelle: `https://www.valentinog.com/blog/redux/`
- Die `handleSubmit`-Funktion mit an die Komponente gebunden werden (im Konstruktor oder als Arrow Function)
- In der `handleSubmit()`-Funktion wird die Factory-Method `addArticle()` (aus `this.props`) mit den Daten aus dem Formular aufgerufen
- An den Button (oder `<form>`) wird der Aufruf von `handleSubmit()` angehangen

## 5. Komponenten mit Store verbinden

- Komponenten, die den zentralen Store verwenden wollen, müssen mit dem Store verbunden werden
- Zum Anbinden einer Komponenten an den Store gibt es die `connect()`-Methode von `react-redux` (oder Hooks):
  - `connect()`-Methode importieren
  - Anstelle von der Komponente wird `connect()`-Methode aufgerufen
  - `connect()` gibt „Higher-Order“-Komponente zurück, in die dann die eigentliche Komponente eingebettet wird
  - Es wird die Higher-Order-Komponente zurückgegeben

```jsx
import { connect } from 'react-redux';
// …
class LoginButton extends Component { /* ... */ }
export default connect()(LoginButton); // Simplest connection, gives dispatch as prop
```

## 5. Komponenten mit Store verbinden

- Durch das Verbinden der Komponente mit dem Store erhalten die Komponenten in ihren Properties die `dispatch()`-Methode vom Store (wenn `mapDispatchToProps` nicht anders definiert ist)
- Mit der `dispatch()`-Methode können Komponenten Action an Store schicken
- Sie erhalten aber noch nicht den geänderten State, wenn sich der State im Store ändert (dafür braucht man `mapStateToProps`)

```javascript
// class LoginButton extends Component {
//   // …
//   showLoginDialog() {
//     const dispatch = this.props.dispatch;
//     dispatch(getShowLoginDialogAction());
//   }
//   render() { /* ... */ }
// }
```

## 5. Komponenten mit Store verbinden

- Komponenten müssen mit dem Store verbunden werden, wenn…
  a) … Komponenten über Änderungen im State informiert werden wollen (Daten aus dem Store lesen)
  b) … die Komponenten den State verändern wollen (Actions dispatchen)
- Wenn Komponenten über Änderungen im State informiert werden sollen, …
  - … muss die Komponenten bei Änderungen informiert werden, um sich neu zu rendern
  - … für das Rendern werden der aktuelle State benötigt (selektiert via `mapStateToProps` oder `useSelector`)
- Wenn Komponenten den State verändern wollen, brauchen sie eine Referenz auf die `dispatch()`-Methode, damit …
  - … lokale Funktionen mit `dispatch()` Actions verschicken können.
  - … um Funktionen, die nicht in der Komponente definiert sind, denen die `dispatch()`-Methode weiterzureichen (via `mapDispatchToProps` oder `useDispatch`)

## 5. Komponenten mit Store verbinden: MapStateToProps

- Damit Komponenten über Änderungen im State informiert werden, muss beim `connect()` Redux mitgeteilt werden, welcher Teil des State in die Properties kopiert werden sollen
- Das Kopieren der Daten aus dem State wird über eine Funktion mit dem Namen `mapStateToProps()` gemacht (oder `useSelector` Hook)
- `mapStateToProps()` kopiert sich aus dem State jene Daten, die für die Komponente von Relevanz sind
- Hinweis: Die Properties setzen sich damit aus den Properties der Parent-Komponenten und den von Redux kopierten Properties zusammen (und der `dispatch()`-Methode, falls nicht überschrieben)
- Der Impuls zum Rendern von Komponenten kommt nun auch vom Store, nicht mehr nur von der Parent-Komponente

## 5. Komponenten mit Store verbinden: MapStateToProps

- Beispiel: Die Komponenten soll die aktuellen Artikel im Store auflisten
- Die Liste soll automatisch aktualisiert werden, wenn ein neuer Artikel dazukommt

```jsx
import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { articles: state.articles }; // Assuming 'articles' is a top-level key in your state
};

const ConnectedList = ({ articles }) => ( // Functional component
  <ul>
    {articles.map(el => (
      <li key={el.id}>{el.title}</li>
    ))}
  </ul>
);

const List = connect(mapStateToProps)(ConnectedList);
export default List;
```

- In den Array `articles` wird der `articles`-Array aus dem State kopiert
- Zum Rendern holt sich die Komponente den kopierten Array aus den Properties
- Beim Verbinden der Komponente wird die Funktion übergeben, die das Kopieren des States ausführt

## 5. Komponenten mit Store verbinden: MapStateToProps

- `ConnectedList` eine Funktionskomponente
- Sie bekommt die Artikel als Properties übergeben
- Sie gibt als HTML eine Liste zurück, in der die Artikel als List-Items enthalten sind.
- Jedes List-Item hat als `key`-Attribute die ID des Artikels
- React empfiehlt für Listen, immer ein `key`-Attribut zu setzen!
- `ConnectedList` entspricht einer normale React-Funktionskomponente

```jsx
const ConnectedList = ({ articles }) => (
  <ul>
    {articles.map(el => (
      <li key={el.id}>{el.title}</li>
    ))}
  </ul>
);
```

## 5. Komponenten mit Store verbinden: MapStateToProps

- `mapStateToProps` ist eine Funktion, die als Parameter den State übergeben bekommt
- Sie holt sich aus dem State nur die Artikel raus (oder was auch immer benötigt wird) und gibt ein Objekt mit den Artikeln als einziges Attribut zurück
- Dieses Objekt wird zu den Properties hinzugefügt, die die Komponente beim nächsten Rendern erhält

```javascript
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { articles: state.articles };
};
// …
const List = connect(mapStateToProps)(ConnectedList);
export default List;
```

## 5. Komponenten mit Store verbinden: MapStateToProps

- Vor dem Exportieren der Komponente wird die `connect()`-Methode von `react-redux` aufgerufen, als Parameter wird die `mapStateToProps()`-Methode übergeben
- Mit dem `connect()` merkt sich der Store, dass diese Komponente an Änderungen interessiert ist
- Wenn sich der State ändert, übergibt der Store an `mapStateToProps()` den aktuellen State
- `mapStateToProps()` gibt den relevanten Teil des States zurück
- Dieses zurückgegebene Objekt kopiert dann der Store in die Properties der Komponente und ruft die `render()`-Methode der Komponenten auf (bzw. rendert die Funktionskomponente neu)

## 5. Komponenten mit Store verbinden: MapStateToProps

- Beim `connect()` wird die eigentliche Komponente in eine Higher-Order-Komponenten eingebettet
- Die Higher-Order-Komponente erweitert die Funktionen der Komponente durch Redux-spezifische Funktionen wie das Anreichern des State
- Exportiert wird nicht die ursprüngliche Komponente, sondern die Higher-Order-Redux-Komponente mit der eingebetteten React-Komponente

```
Redux-Komponente: List (Higher-Order Component)
  └─ ConnectedList (Your original component)
```

## 5. Komponenten mit Store verbinden: MapStateToProps (Visualized)

```
[Store (Gesamter State)] ----> mapStateToProps ----> [Teil-State as Props] ----> [ConnectedList]
       ^                                                                            |
       |                                                                            v
       ---------------------- (Update-Events / Registriert sich als Observer) ------
```

## 5. Komponenten mit Store verbinden: MapDispatchToProps

- Damit Komponenten Actions an den Store, bzw. die Reducer schicken kann, braucht die Komponenten eine Referenz auf die `dispatch()`-Methode
- Eine Komponente, die per `connect()` mit dem Store verbunden wurde, erhält standardmäßig eine Referenz in den Properties (wenn `mapDispatchToProps` nicht oder als `null` übergeben wird)

```javascript
// showLoginDialog() {
//   const dispatch = this.props.dispatch;
//   dispatch(getShowLoginDialogAction());
// }
// …
// const mapDispatchToProps = dispatch => bindActionCreators({
//   showLoginDialogAction: authenticationService.showLoginDialog, // Assuming these are action creators
//   hideLoginDialogAction: authenticationService.hideLoginDialog,
//   authenticateUserAction: authenticationService.authenticateUser
// }, dispatch);

// const ConnectedUserSessionWidget = connect(mapStateToProps, mapDispatchToProps)(UserSessionWidget);
```

## 5. Komponenten mit Store verbinden: MapDispatchToProps

- Wenn Funktionen aus anderen Modulen (Action Creators) `dispatch()` verwenden sollen, müssen diese Funktionen per `mapDispatchToProps()` verknüpft werden
- Diese Funktionen werden mit `connect()` dem Store übergeben (indirekt, `mapDispatchToProps` erhält `dispatch`)
- Der Store wrappt diese Funktion in Funktionen, die den Funktionen die Dispatch-Methode übergeben (oder `mapDispatchToProps` tut dies explizit)

```javascript
// handleClose() {
//   const { hideLoginDialogAction } = this.props; // This prop is created by mapDispatchToProps
//   hideLoginDialogAction();
// }
// …
// const mapDispatchToProps = dispatch => bindActionCreators({
//   showLoginDialogAction: authenticationService.showLoginDialog,
//   hideLoginDialogAction: authenticationService.hideLoginDialog,
//   authenticateUserAction: authenticationService.authenticateUser
// }, dispatch);

// const ConnectedUserSessionWidget = connect(mapStateToProps, mapDispatchToProps)(UserSessionWidget);
```

## 5. Komponenten mit Store verbinden: MapDispatchToProps

- Wenn bei `connect()` eine `mapDispatchToProps()`-Funktion übergeben wird, wird die `dispatch()`-Methode nicht mehr standardmäßig als Prop im State mitgeliefert!
- `bindActionCreators()` ermöglicht das einfache Einbinden von mehreren Funktionen (Action Creators)

```javascript
import { bindActionCreators } from 'redux';
// ...
// const increment = () => ({ type: 'INCREMENT' }); // Example action creator
// …
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ increment, decrement, reset }, dispatch);
// }

// connect(
//   null, // mapStateToProps
//   mapDispatchToProps
// )(Counter);
```

## 5. Komponenten mit Store verbinden: MapDispatchToProps

- Wenn den Funktionen abweichende Namen gegebene werden sollen (als Props in der Komponente), kann diese auch bei `bindActionCreators()` gemacht werden oder direkt im Objekt, das `mapDispatchToProps` zurückgibt.

```javascript
// const mapDispatchToProps = dispatch => bindActionCreators({
//   showLoginDialogAction: authenticationService.showLoginDialog,
//   hideLoginDialogAction: authenticationService.hideLoginDialog,
//   authenticateUserAction: authenticationService.authenticateUser
// }, dispatch);

// Alternative without bindActionCreators:
// const mapDispatchToProps = dispatch => ({
//    showLoginDialogAction: () => dispatch(authenticationService.showLoginDialog()),
//    // ...
// });
```

## Redux- und React-Einbindung

- Das erste Aufsetzen der Redux- und React-Einbindung ist aufwändig und etwas komplex
- Jedoch die Erweiterung um neue Aktionen und Reducer geht in der Regel sehr schnell
- Die Struktur von Actions und Reducer ist immer sehr ähnlich
- Neue Funktionen können durch Kopieren und Anpassen umgesetzt werden

## Anbindung eine REST-Backends

## Anbindung von REST-Backend

- Redux setzt zentralen Store um, sieht aber keine Funktionen für das Anbinden von REST-Backend vor (ist synchron)
- Anbinden von Backend beinhaltet asynchronen Aufruf ans REST-Backend und anschließend asynchrone Aktualisierung der Web-Oberfläche
- Frage: Wann und wo sollte Aufruf ausgeführt werden?

```
[React-Anwendung]         [Redux-Store] <--> [Reducer]
  ├─ Komponente --dispatch--> [Action?] ---------?--------> [REST-Backend]
  ├─ Komponente                                              ├─ End-Point
  └─ Komponente                                              └─ End-Point
```

## Anbindung von REST-Backend

- Die Frage ist: Wo sollten die asynchronen Aufrufe gestartet werden?
- Die naheliegende Antwort: in den Actions (bzw. durch Middleware, die Actions verarbeitet, die Asynchronität beschreiben)
- Die asynchronen Aufrufe an das Back-end werden immer durch eine Action ausgelöst
- Für jede Action muss auch überwacht werden, ob die Action erfolgreich ausgeführt wurde
- Je nach Rücklauf vom Backend müssen unterschiedliche angepasste Folgeaktivitäten ausgeführt werden
- Beispiel: Schritte einer Action zum Abrufen einer Liste von Produkten
  1. Anfrage an den Server wird abgeschickt, der Status ist „pending“ (Action: `FETCH_PRODUCTS_PENDING`)
  2. Die Antwort vom Server kommt zurück. Mögliche Ergebnisse:
     1. Die Anfrage war erfolgreich → die Produkte werden dargestellt (Action: `FETCH_PRODUCTS_SUCCESS`)
     2. Die Anfrage ist fehlgeschlagen → eine entsprechende Nachricht wird dargestellt (Action: `FETCH_PRODUCTS_ERROR`)
- Dieser Prozess kann am besten innerhalb der Action (mithilfe von Middleware wie Redux Thunk oder Redux Saga) abgebildet werden

## Redux-Thunk

- Thunk ist eine alternative Bezeichnung für Funktion (eine Funktion, die Arbeit aufschiebt)
- In Redux sind Actions nur Objekte, mit einem Type und dem Payload
- Die Software-Komponente Redux-Thunk ist eine Erweiterung (Middleware) für Redux, um anstelle von Objekten auch Funktionen an den Store zu senden (`dispatch(someFunction)`)
- Die einzige Aufgabe von Redux-Thunk ist: wenn in der Action eine Funktion ist, führt Thunk die Funktion aus (und übergibt ihr `dispatch` und `getState`)

## Redux-Thunk

- Redux-Thunk ist eine sehr einfache Middleware-Funktion (siehe Source-Code in `node_modules`)

```javascript
function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => next => action => {
    // This gets called for every action you dispatch.
    // If it's a function, call it.
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }
    // Otherwise, just continue processing this action as usual
    return next(action);
  };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;
export default thunk;
```

## Redux-Thunk

- In Redux sind Actions nur Objekte, mit einem Type und dem Payload
- Die Software-Komponente Redux-Thunk ist eine Erweiterung für Redux, um anstelle von Objekten nun Funktionen an den Store zu senden
- Die einzige Aufgabe von Redux-Thunk ist: wenn in der Action eine Funktion ist, führt Thunk die Funktion aus
- Dafür ist das Registrieren von Thunk als Middleware erforderlich:

```javascript
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk'; // The middleware
import rootReducer from './rootReducer'; // Your root reducer
import initialState from './initialState'; // Optional initial state

const middlewares = [thunk];
const store = createStore(rootReducer, initialState, applyMiddleware(...middlewares));
```

## Redux-Thunk: Beispiel

- Das Abrufen von Produkten wird in mögliche 3 Actions unterteilt (Request, Success, Failure)
  1. Das Abrufen wird gestartet, der Status ist „pending“
  2. Das Abrufen war erfolgreich
  3. Beim Abrufen ist ein Fehler aufgetreten

```javascript
// Action Types
export const FETCH_PRODUCTS_PENDING = 'FETCH_PRODUCTS_PENDING';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';

// Action Creators (synchronous actions)
function fetchProductsPending() {
  return { type: FETCH_PRODUCTS_PENDING };
}

function fetchProductsSuccess(products) {
  return { type: FETCH_PRODUCTS_SUCCESS, products: products }; // payload often named 'payload'
}

function fetchProductsError(error) {
  return { type: FETCH_PRODUCTS_ERROR, error: error }; // payload often named 'error'
}
```

## Redux-Thunk: Beispiel

- Der zuständige Reducer
  - Abrufen wird gestartet: Der aktuelle State wird zurückgegeben, der Status ist „pending“
  - Der Abruf war erfolgreich: die Produkte werden zum State hinzugefügt, „pending“ ist false
  - Beim Abruf gab es einen Fehler: der State bleibt gleich (oder Fehlerinfo wird gespeichert), „pending“ ist false

```javascript
// productsReducer.js
// export function productsReducer(state = initialState, action) { // Assuming initialState is defined
//   switch(action.type) {
//     case FETCH_PRODUCTS_PENDING:
//       return { ...state, pending: true };
//     case FETCH_PRODUCTS_SUCCESS:
//       return { ...state, pending: false, products: action.products }; // or action.payload
//     case FETCH_PRODUCTS_ERROR:
//       return { ...state, pending: false, error: action.error };
//     default:
//       return state;
//   }
// }
```

## Redux-Thunk: Beispiel

- Die Funktion (Thunk Action Creator): die `dispatch()`-Methode wird 3 mal aufgerufen und bildet den Prozess ab

```javascript
import {fetchProductsPending, fetchProductsSuccess, fetchProductsError} from './actions'; // Path to action creators

function fetchProducts() { // This is the thunk action creator
  return dispatch => {
    dispatch(fetchProductsPending());
    fetch('https://exampleapi.com/products') // API call
      .then(res => {
        if (!res.ok) { throw new Error(res.statusText); } // Handle HTTP errors
        return res.json();
      })
      .then(res => {
        // if(res.error) { throw(res.error); } // If API returns error in JSON body
        dispatch(fetchProductsSuccess(res.products)); // Assuming API returns { products: [...] }
        return res.products;
      })
      .catch(error => {
        dispatch(fetchProductsError(error.toString())); // Dispatch error
      });
  };
}
export default fetchProducts;
```

## Redux-Thunk: Beispiel

- Registrieren der Action-Function (Thunk) in der Komponente via `mapDispatchToProps`
- Wenn Thunk noch nicht registriert ist (als Middleware im Store), sehen Sie diese Antwort (Fehler: Actions must be plain objects...)

```javascript
// const mapDispatchToProps = dispatch => bindActionCreators({
//   fetchProducts: fetchProductsAction // fetchProductsAction is the thunk (e.g., the fetchProducts function from previous slide)
// }, dispatch);

// Or more simply:
// const mapDispatchToProps = {
//   fetchProducts: fetchProductsAction // Redux can bind this automatically if it's an action creator
// };


// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ProductView);
```
