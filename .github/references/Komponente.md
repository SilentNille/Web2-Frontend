# Web-Engineering II

## Funktions- und Klassenkomponenten

- Schon mit ersten Release von React gab es Funktions- und Klassenkomponenten
- Funktionskomponente
  - JavaScript-Funktion
  - Ergebnis wird mit „return“ zurückgegeben
  - Vor dem „return“ ist Komponentenlogik

```jsx
import StartPage from "./react/views/StartPage";

function App() {
  return (
    <div>
      <StartPage />
    </div>
  );
}
export default App;
```

### Varianten von Funktionskomponenten

- Funktionskomponenten können auf 3 Arten geschrieben werden

```jsx
function Function1(props) {
  return (
    <Function2 />
  );
}

const Function2 = () => {
  const greeting = 'Hello Function Component!';
  return <Headline value={greeting} />;
};

const Headline = ({ value }) => <h1>{value}</h1>;

export default Function1;
```

- JavaScript-Funktion
- Arrow-Funktion
- Verkürzte Arrow-Funktion

### Klassenkomponente

- JavaScript-Klasse (extends `React.Component`)
- Erbt zahlreiche Aspekte von `Component` (z.B. `setState()`)
- Hat Instanz-Variablen `props` und `state`
- `render()`-Funktion muss überschrieben werden
- Ergebnis wird in `render()`-Funktion mit `return` zurückgegeben
- Klassenkomponenten kann Konstruktor, Funktionen und in Render-Funktion vor dem `return` Logik beinhalten

```jsx
import React from "react";
import StartPage from "./react/views/StartPage";

class AppKlasse extends React.Component {
  render() {
    return <StartPage />;
  }
}
export default AppKlasse;
```

### Unterschiede: Syntax

- Bis 2019 konnten komplexe Anwendungen nur mit Klassenkomponenten umgesetzt werden
- Nur in Klassenkomponenten…
  - State-Management (Verwalten eines Zustands)
    - Funktion `setState()`
  - Life-Cycle-Management (Ausführen von Funktionen zu einem bestimmten Zeitpunkt)
    - `componentDidMount()`
    - `componentWillUnmount()`
    - etc.

### Einführung von Hooks

- Möglichkeiten von Funktionskomponenten haben sich in 2019 mit dem React-Release 16.8 verändert
- Einführung von Hooks
- Durch Hooks…
  - Können Funktionskomponenten einen State verwalten.
  - Können in Funktionskomponenten Life-Cycle-Funktionen verwendet werden
- Hooks sind Funktionen von React, mit denen spezielle Aspekte umgesetzt werden können, die in Funktionen sonst nicht möglich wären
- Hooks können nur in Funktionskomponenten verwendet werden
- Mit den Hooks kann in Funktionskomponenten fast alles gemacht werden, was in Klassenkomponenten schon möglich ist

### Übersicht über Hooks

- Häufig genutzte Hooks
  - `useState`: State-Variablen anlegen
  - `useEffect`: Ausführen von Funktionen nach dem Zeichnen der Komponente
  - `useContext`: Verwenden von Kontextobjekten
  - `useReducer`: State-Management wie bei Redux
- Selten verwendete Hooks
  - `useCallback`, `useMemo`, `useRef`, `useImperativeHandle`, `useLayoutEffect`, `useDebugValue`

## State-Management

### Grundlagen

- Daten in Komponenten können unterschieden werden in `props` und `state`
- `props` sind statisch und sollten nicht verändert werden
- `state` sind lokale Daten, die verändert werden können
- Änderung im `state` sind observable → Neuzeichnen der Komponente
- In Klassenkomponente werden `props` im Konstruktor übergeben

```jsx
class StartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  render() {
    return <h1>Who is living young, wild, and free? - {this.props.name}</h1>;
  }
}
```

Hinweise:

- Konstruktor der Super-Klasse muss aufgerufen werden
- Für Zugriff auf `props` in Klassenkomponente muss `this` verwendet werden

### Grundlagen

- In Funktionskomponente werden `props` als Funktionsparameter übergeben

```jsx
function Foo(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

- Die Übergabe von Props wird über Vater-Komponente für Funktions- und Klassenkomponenten gleichermaßen umgesetzt

```jsx
return (
  <>
    {/* … */}
    <Foo name="Manfred" />
  </>
);
```

## State ändern: Klassenkomponente

```jsx
class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <p>count: {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click
        </button>
      </div>
    );
  }
}
```

- Counter wird beim Anlegen der Komponenten initialisiert
- Mit `this.setState()` wird State geändert. Dadurch wird die Komponente automatisch neu gezeichnet!

## State in Funktionskomponente: `useState()`-Hook

- Verwenden des Hooks `useState()`
- Initialwert wird übergeben: `useState(initialwert)`
- Es wird in einem Array die Referenz auf den Wert sowie die Funktion zurückgegeben, mit der der Wert geändert werden kann (`[value, setValue]`)

```jsx
const FunctionalComponent = () => {
  const [count, setCount] = React.useState(0); // useState hook

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
};
```

- Beispiel zeigt: Funktionskomponenten sind tendenziell kürzer als Klassenkomponenten für denselben Zweck
- Funktional gibt es (mit Hooks) oft keinen Unterschied mehr für viele Anwendungsfälle

## Life-Cycle-Management

### Klassenkomponenten

- Basisklasse von React-Komponente (`React.Component`) implementiert diverse Funktionen (Lifecycle Methods), die zu bestimmten Zeiten aufgerufen werden
- Können überschrieben werden, um bestimmte Aspekte umzusetzen
- Beispiel: `componentDidMount()` wird aufgerufen, wenn Komponente im DOM-Tree eingehangen wurde

```jsx
class ClassComponent extends React.Component {
  componentDidMount() {
    console.log("Hello");
  }

  render() {
    return <h1>Hello, World</h1>;
  }
}
```

### Klassenkomponenten: Life-cycle-Methoden

- Methoden für das Mounting von Komponenten (ausgewählt)
  - `constructor()`
  - `render()`
  - `componentDidMount()`
- Methoden für das Aktualisieren (ausgewählt)
  - `shouldComponentUpdate()`
  - `render()`
  - `componentDidUpdate()`
- Methode für das Un-Mounting
  - `componentWillUnmount()`
- Error-Handling
  - `componentDidCatch()` (und `static getDerivedStateFromError()`)

### Funktionskomponente (`useEffect` Hook)

- Ersatz für `componentDidMount()` (und `componentDidUpdate()`, `componentWillUnmount()`)

```jsx
const FunctionalComponent = () => {
  React.useEffect(() => {
    console.log("Hello"); // Runs after every render by default
  }, []); // Empty dependency array: runs only once after initial render (like componentDidMount)

  return <h1>Hello, World</h1>;
};
```

- `useEffect()` bekommt 2 Parameter
  - Der Effekt: eine Funktion, die ausgeführt werden soll
  - Dependency List (optional): ein Array von beobachtbaren State-Objekten/Props.
    - Wenn nicht angegeben: Effekt läuft nach jeder Renderung.
    - Leeres Array `[]`: Effekt läuft nur einmal nach der ersten Renderung.
    - Array mit Werten `[dep1, dep2]`: Effekt läuft nach der ersten Renderung und immer dann, wenn sich einer der Werte in der Dependency List ändert.

### Funktionskomponente (`useEffect` Hook)

- Ersatz für `componentWillUnmount()` (Cleanup-Funktion)

```jsx
React.useEffect(() => {
  // This is like componentDidMount (if dependency array is empty)
  // or componentDidUpdate (if dependencies change)

  return () => {
    // This is the cleanup function, like componentWillUnmount
    console.log("Bye");
  };
}, []); // Empty dependency array means cleanup runs on unmount
```

- Wie beim Ersatz von `componentDidMount` verwenden von `[]` als ObservableList (Dependency Array) für einmalige Ausführung.
- Jedoch Rückgabe von Arrow-Funktion mit `return` (die Cleanup-Funktion).
- Auswerten der Rückgabe (Cleanup-Funktion) wird ausgeführt, wenn Komponenten aus DOM entfernt wird oder bevor der Effekt erneut läuft (wenn Dependencies sich ändern).

### Funktionskomponente (`useEffect` Hook)

- Automatisches Ausführen von Funktionen bei Änderung eines State-Items
- Wenn `counter` sich ändert, wird `books`-Array erweitert

```jsx
function BooksList () {
  const [books, updateBooks] = React.useState([]);
  const [counter, updateCounter] = React.useState(0);

  React.useEffect(function effectFunction() {
    // This effect runs when 'counter' changes
    if (counter > 0) { // Avoid running on initial mount if counter is 0
      updateBooks(prevBooks => [...prevBooks, { name: `A new Book ${counter}`, id: counter }]);
    }
  }, [counter]); // Dependency array includes 'counter'

  const incrementCounter = () => {
    updateCounter(prevCounter => prevCounter + 1);
  };
  // ... render books and button to call incrementCounter
}
```

### `componentDidMount` und `componentWillUnmount` Äquivalente

- Klassenkomponente:

```jsx
// componentDidMount() {
//   window.addEventListener('mousemove', () => {});
// }

// componentWillUnmount() {
//   window.removeEventListener('mousemove', () => {});
// }
```

- Funktionskomponente mit `useEffect`:

```jsx
useEffect(() => {
  const handleMouseMove = () => { /* ... */ };
  window.addEventListener('mousemove', handleMouseMove);

  // returned function will be called on component unmount (or before re-running effect)
  return () => {
    window.removeEventListener('mousemove', handleMouseMove);
  };
}, []); // Empty array means effect runs once on mount, cleanup on unmount
```

## State-Management mit `useReducer`

### `useReducer`-Hook

- `useReducer()` erlaubt ähnliches State-Management über Reducer wie bei Redux, jeder eher bezogen auf eine Komponente (lokaler State) oder mit Context für globaler State.
- Sollte verwendet werden, wenn kein Redux verwendet wird und Komponente einen komplexeren State hat (mit mehreren Werte, die in Kombination verändert werden sollen, oder wenn die nächste State-Logik komplex ist).
- In diesen Fällen besser als `useState()`, weil dort nur Änderungen von einem State-Attribut vorgenommen werden können (bzw. man müsste mehrere `useState` Aufrufe oder ein Objekt in `useState` verwalten).

### `useReducer`-Hook

```jsx
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = React.useReducer(reducer, initialState); // useReducer hook

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}
```

## Store mit React-Funktionen umsetzen (`useReducer` + `useContext`)

- Mit React-Context kann einfacher Redux-Store nachgebildet werden

```jsx
import React, { createContext, useReducer, useContext } from 'react';

// const defaultState = { /* ... */ };
// const reducer = (state, action) => { /* ... */ };

const StoreContext = createContext(null);

export function StoreProvider({ children, reducer, defaultState }) { // Pass reducer and defaultState
  const [state, dispatch] = useReducer(reducer, defaultState);
  const value = { state, dispatch };
  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export const useStore = () => useContext(StoreContext);
```

## Store mit React-Funktionen umsetzen (`useReducer` + `useContext`)

- Nutzen des erzeugten Stores

```jsx
import React from 'react';
import { useStore } from './store-provider'; // Assuming store-provider.js contains the above

export default function Counter() {
  const { state, dispatch } = useStore(); // Consuming the context

  return (
    <section className="counter">
      <div className="value">{state.counter}</div> {/* Assuming counter is in state */}
      <button onClick={() => dispatch({ type: 'COUNTER_INC' })}>Add</button>
      <button onClick={() => dispatch({ type: 'COUNTER_DEC' })}>Subtract</button>
    </section>
  );
}
```

### `useReducer`-Hook

- Es fehlt die selektive Update-Funktion über `mapStateToProps()` (wie in Redux `connect`). `useContext` triggert ein Re-Render in allen Konsumenten, wenn sich der Context-Wert ändert.
- Bei State-Änderungen werden stets alle Komponenten aktualisiert, die den Context konsumieren (es sei denn, man optimiert mit `React.memo` und selektiven Props).
- Bei kleinen Anwendungen ok, bei großen wird das zum Problem ohne weitere Optimierungen.
- Ersetzt nicht den globalen Anwendungs-State-Tree von Redux mit seinen Optimierungen und Middleware-Funktionen direkt, kann aber eine Alternative für bestimmte Szenarien sein.

## Allgemeines

## Was ist besser? Funktions- vs. Klassenkomponenten

- Derzeit ist Nutzung von Funktionskomponenten mit Hooks weiter verbreitet und oft der empfohlene Weg in modernen React-Anwendungen.
- Es gibt jedoch keinen funktionalen Vorteil per se für alle Anwendungsfälle; beide können ähnliche Dinge erreichen.
- Der Hauptunterschied besteht in der Syntax und dem mentalen Modell.
- Funktionskomponenten sind in der Regel kürzer und können (für manche Entwickler) einfacher zu lesen und zu testen sein, besonders mit Hooks.
- Es wurde vermutet, dass Funktionskomponenten schneller sind, das konnten Performance-Tests jedoch nicht pauschal belegen; die Unterschiede sind oft marginal und hängen von der Implementierung ab.
- Es gibt noch einige seltene Aspekte in Klassenkomponenten (z.B. Error Boundaries, die noch als Klassenkomponenten geschrieben werden müssen, obwohl `getDerivedStateFromError` auch mit Hooks simuliert werden kann), die nicht direkt mit Funktionskomponenten/Hooks möglich sind, aber die meisten Anwendungsfälle sind abgedeckt.
- Bei sehr großen Anwendung kann mit Klassenkomponenten gerade in Verbindung mit Redux (`connect` HOC) besser gesteuert werden, welche Komponenten neu gezeichnet werden (durch `shouldComponentUpdate`). Mit Funktionskomponenten und Hooks erreicht man ähnliche Optimierungen durch `React.memo`, `useMemo`, und `useCallback`.

Die React-Community und das React-Team favorisieren zunehmend Funktionskomponenten mit Hooks.
