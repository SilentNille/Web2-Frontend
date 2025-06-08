# Meilenstein 1 - Übung 2

## React-Anwendung mit Anbindung an REST-Server

THEMA REST-SERVER FÄLLIGKEIT SIEHE MOODLE
ÜBUNG 2, MEILENSTEIN 1 - VORGABEN
Grundlage für die Umsetzung und Benotung dieses Meilensteins sind die „Allgemeinen Regelungen für
Übungsaufgaben“ sowie die Aufgabenstellung für Übung 2, die Sie beide im Moodle finden.
In diesem Dokument werden sowohl die funktionalen als auch allgemeinen Anforderungen an den Meilenstein 1 von Übung 2 weiter detailliert. Bitte beachten Sie, dass alle nachfolgenden Vorgaben exakt
eingehalten werden müssen, weil viele Aspekte über automatisierte Tests geprüft werden.
Für Abweichungen von den funktionalen Anforderungen gibt es bis zu 15 Abzugspunkte. Darüber hinaus
werden Abzugspunkte berechnet, wenn die allgemeinen Anforderungen nicht eingehalten werden oder
Korrekturen am Code notwendig sind. Die Abzugspunkte orientieren sich an dem Aufwand der notwendig wäre, um das Problem zu beheben.
Sollte es grundlegende Probleme mit der abgegebenen Lösung geben, müsste auch für diesen Meilenstein eine persönliche Abnahme durchgeführt werden.
FUNKTIONALE ANFORDERUNGEN
In diesem Meilenstein sollen Sie die ersten Seiten umsetzen und Ihr Backend aus Übung 1 anbinden.
Konkret soll der folgende Funktionsumfang umgesetzt werden (vergleiche Aufgabenstellung Übung 2):
• Beim Aufrufen der Root-URL (<http://localhost:3000>) soll die Landing-Page der Web-Anwendung
angezeigt werden. Die Landing Page ist die „öffentliche“ Seite, die dem nicht-eigeloggten User
angezeigt wird.
• Über Drücken des „Login“-Buttons wird der modale Login-Dialog angezeigt.
• Wenn die Credentials im Dialog eingegeben werden und der „Login-Ausführen“-Button gedrückt
wird, wird die Authentifizierung per Basic-Authentication gegenüber dem Backend durchgeführt
(wie in Übung 1 umgesetzt).
• Bei erfolgreicher Authentifizierung wird der Token im Redux-Store abgelegt und auf die Startseite weitergeleitet. Die Startseite ist die „private“ Seite, die nur dem eingeloggten Nutzer angezeigt wird.
• Wenn der „Logout“-Button gedrückt wird, wird der Token im Redux-Store gelöscht und wieder
auf die Landing Page weitergeleitet (die „öffentliche“ Seite).
Entsprechend den funktionalen Anforderungen müssen die folgenden Seiten/ Komponenten umgesetzt
werden:
• Landing-Page (öffentliche Seite)
• Login-Dialog
• Startseite (private Seite)
Der Prozess des Aufrufens der Seite, das Einloggen und dann Ausloggen wird über automatisierte Tests
geprüft. Damit diese Tests ausgeführt werden können, müssen die dafür notwendigen Buttons und Texteingabefelder entsprechende IDs haben. Daher sollten in Ihrer Web-Anwendungen die folgenden IDs
enthalten sein:

Landing Page
Damit geprüft werden kann, ob die Landing-Page angezeigt wird, sollte in einem Div die Tag-ID
„LandingPage“ enthalten sein:

```html
    <div className="page-content" id="LandingPage" style={{ background: 'white' }}>
        Diese ID muss immer im DOM sein, wenn die Landing-Page angezeigt wird.
    </div>
```

Diese ID muss immer im DOM sein, wenn die Landing-Page angezeigt wird.
Button zum Öffnen des Login-Dialogs
Der Button zum Öffnen des Login-Dialogs muss die ID „OpenLoginDialogButton“ haben. Der Code
könnte wie folgt aussehen:

```html
    <div>
        <Button id="OpenLoginDialogButton" variant="light" onClick={this.showLoginDialog} >
            Login
        </Button>
    </div>
```

Der Button zum Öffnen des Login-Dialogs darf nicht in einem Drop-Down-Menü sein, weil er sonst ggfls.
erst beim Drücken des Drop-Down-Menüs erzeugt wird und daher von den automatisierten SeleniumTests nicht gefunden wird! Der Button zum Öffnen des Login-Dialogs sollte nur zu sehen sein, wenn der
User nicht eingeloggt ist.
Login-Dialog
Wenn der Button zum Einloggen gedrückt wird, wird der Login-Dialog angezeigt. Der Login-Dialog sollten
die folgenden IDs haben:
• Der Dialog sollte die ID „LoginDialog“ haben.
• Das Feld zum Eingeben des User-ID sollte die ID „LoginDialogUserIDText“ haben.
• Das Feld zum Eingeben des Passworts sollte die ID „LoginDialogPasswordText“ haben.
• Der Button zum Ausführen des Logins sollte die ID „PerformLoginButton“ haben.
Abbildung 1: Login-Dialog
Bei einem Textfeld zum Eingeben der User-ID wird beispielsweise die ID wie folgt festgelegt:

```html
    <Form.Control id=" LoginDialogUserIDText " type="text" placeholder="User ID" name="userID"
    onChange={this.handleChange} />
```

Startseite
Damit geprüft werden kann, ob die Startseite angezeigt wird, sollte in einem Div die ID „StartPage“ enthalten sein:

```html
    <div className="page-content" id="StartPage" style={{ background: 'white' }}>
```

Logout
Um den Logout-Prozess zu starten, sollte es eine Komponente mit der ID „LogoutButton“ geben. Der Logout-Button sollte nur vorhanden sein, wenn der User eingeloggt ist. Der Logout-Button muss immer in
der Seite sichtbar sein, wenn man eingeloggt ist. Er darf nicht in einem Drop-Down-Menu sein, wenn der
entsprechende Button erst erzeugt wird, wenn das Drop-Down-Menü angeklickt wird.
Hinweis
• Achten Sie darauf, dass die IDs exakt eingehalten werden. Auch beispielsweise Leerzeichen am
Anfang oder Ende verhindern, dass die Komponenten gefunden werden.
• Die IDs müssen bei den Komponenten eingetragen sein, die die tatsächlichen Events umsetzen.
Beispielsweise müssen die IDs für den Login- und Logout-Button bei den tatsächlichen ButtonKomponenten eingetragen sein. Es reicht nicht, wenn die IDs bei einer umgebenden React-Komponente eingetragen sind, denn dort ist nicht die onClick()-Funktion umgesetzt.
• Sie können über die Entwickler-Tools von Firefox oder Chrom prüfen, wird die eigentliche WebSeite aussieht. Darüber können Sie sicherstellen, dass die IDs auch korrekt eingetragen sind.
HINWEISE ZUR ANBINDUNG DES REST-SERVERS
In diesem Meilenstein sollen Sie den REST-Server aus Übung 1 per HTTPS anbinden. Dabei werden Sie
auf zwei Probleme treffen:
• Der Browser wird das von Ihnen selbst erstellte Zertifikat ablehnen.
• Es werden CORS-Fehler angezeigt.
Nachfolgend wird kurz erläutert, wie Sie diese Probleme beheben.
Zertifikatsfehler
Für die Umsetzung von HTTPS in Übung 1 haben Sie ein Zertifikat selbst erstellt. Browser akzeptieren
jedoch in der Regel nur Zertifikate von offiziellen Zertifizierungsstellen. Damit Ihr Browser das selbst erstellte Zertifikat akzeptiert, müssen Sie in dem Browser zunächst eine Ausnahmeregel einrichten.
Rufen Sie hierzu mit dem Browser eine beliebige GET-Route von Ihrem REST-Server auf. Sie können beispielsweise die GET-Route von der Public-User-Route aufrufen. Der Browser wird dann eine Fehlermeldung ausgeben, dass das Zertifikat nicht gültig ist und der Zugriff auf die Web-Seite gefährlich ist. Es gibt
dann in der Regel einen Button, um eine Ausnahmeregel für Ihre Web-Seite einzurichten. Legen Sie die
Ausnahmeregel an. Anschließend sollten Sie die GET-Route problemlos ausführen können.
Bitte lesen Sie hierzu auch die Vorlesungsfolien zur React-Beispielanwendung ab Folie 52. Dort wird
auch beschrieben, wie unter Mac die Ausnahmeregel hinzugefügt werden kann.

CORS-Fehler
Wenn Sie von Ihrer React-Anwendung auf Ihren REST-Server aus Übung 1 zugreifen wollen, werden Sie
zunächst CORS-Fehler bekommen. CORS steht für Cross-Origin Resource Sharing. Dieser Fehler wird vom
Browser ausgelöst. Bitte lesen Sie sich dazu die Vorlesungsfolien zur React-Beispielanwendung durch (ab
Folie 46). Dort wird der Fehler und wie man ihn behebt ausführlich beschrieben.
Insbesondere müssen Sie die folgende Zeile möglichst gleich nach dem Anlegen der Express-Instanz im
REST-Server haben:
app.use("*", cors())
Die Ergänzungen im REST-Server für das CORS müssen vor den eigentlichen Routen sein, also ganz oben
in der Server-Datei!
Darüber hinaus müssen Sie dem Browser Ihr selbst erstelltes Zertifikat bekannt machen. Rufen Sie
hierzu eine GET-Route Ihres Rest-Servers mit dem Browser auf. Anschließend wird der Browser auf das
nicht gültige Zertifikat hinweisen. Wenn Sie anschließend das Zertifikat im Browser akzeptieren, sollte
der Browser für eine Zeit lang das Zertifikat auch in der React-Anwendung nicht mehr ablehnen.
WEITERE HINWEISE
Es gibt für Redux Development Tools sowohl von Visual Studio Code als auch für die verschiedenen
Browser. Damit können Sie stets einsehen, welche Daten derzeit im Store sind.
Auch bei React-Anwendungen kann mit einem Debugger der Code schrittweise geprüft werden. Hierfür
können in Visual Studio Code beispielsweise der Chrome- oder Mozilla-Debugger installiert werden.
ALLGEMEINE ANFORDERUNGEN
Bitte halten Sie auch die folgenden Anforderungen exakt ein.
Port
Die React-Anwendung sollte unter Port 3000 laufen. Das ist der Standard-Port, mit dem React-Anwendungen angelegt werden. Für die Kommunikation sollte http verwendet werden. Auch das wird automatisch beim Anlegen des React-Projekts so festgelegt.
Abhängigkeiten prüfen
Über den Befehl „npm install“ werden alle Abhängigkeiten zu Drittanbietermodulen aufgelöst und die
Module im Verzeichnis „node_modules“ abgelegt. Achten Sie darauf, dass alle erforderlichen Abhängigkeiten in der package.json eingetragen sind. Wenn Sie Module als global in Ihrer Entwicklungsumgebung
eingetragen hatten, kann es sein, dass die Abhängigkeit nicht drinsteht! Testen Sie das vor Ihrer Abgabe.
Falls nicht alle Abhängigkeiten korrekt aufgelöst werden, werden Abzugspunkte berechnet.
Start-Skript anlegen
Durch den Befehl „npm start“ kann die Anwendung gestartet werden. Wenn das Startskript nicht definiert
wurde oder nicht korrekt funktioniert, werden dafür Abzugspunkte berechnet.
