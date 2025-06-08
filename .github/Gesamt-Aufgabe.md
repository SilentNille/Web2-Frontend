# ÜBUNG 2

LV WEB-ENGINEERING II
THEMA FRONTEND FÄLLIGKEIT SIEHE MOODLE
UMSETZUNG DES FRONT-ENDS FÜR DIE WEBSEITE
Im Rahmen der zweiten Übungsaufgabe soll das Frontend für Ihre Webseite als Single-Page-Anwendung
mit React umgesetzt werden. Das Frontend soll auf das Backend aus der ersten Übungsaufgabe zugreifen. Mit diesem Implementierungsschritt haben Sie eine vollständige Webanwendung mit allen relevanten Aspekten umgesetzt, wie sie auch im kommerziellen Umfeld zum Einsatz kommen.
Die Abgabe der Übung 2 unterteilt sich in die folgenden Abgabeschritte:
• Meilenstein 1: Umsetzung einer ersten Web-Anwendung, in der sich der Nutzer einloggen kann.
• Meilenstein 2: Umsetzung des User-Managements
• Meilenstein 3 (finale Abgabe): Bei der finalen Abgabe sollen alle nachfolgend beschrieben Anforderungen umgesetzt sein.
Die Termine für die Abgabe der Meilensteine sowie der finalen Abgabe werden im Moodle angegeben.
In den nachfolgenden Abschnitten wird das Frontend beschrieben, das zur finalen Abgabe umgesetzt
werden soll. Für die Meilensteine sowie die finale Abgabe gibt es in Moodle darüber hinaus noch Vorgabebeschreiben, in denen auch Hilfestellungen und Hinweise enthalten sind.
Bitte beachten Sie, dass entsprechend den allgemeinen Vorgaben auch die React-Anwendung mit TypeScript umgesetzt werden soll.
SOFTWARE-KOMPONENTEN
Setzen Sie das Frontend mit React um. Verwenden Sie Redux als State-Container. Zur Einbindung von
Redux sollten Sie das Redux-Toolkit verwenden, bei dem synchrone und asynchrone Aufrufe in einer
„Slice“ umgesetzt werden. Die alte Umsetzung von Redux mit Reducern ist veraltet und sollte nicht
mehr verwendet werden.
REST-Server
Für die Umsetzung des Web-Frontends benötigen Sie den REST-Server aus Übung 1. Dabei können Sie
zwischen den folgenden Optionen wählen:
• Sie nutzen Ihren REST-Server aus Übung 1.
• Im Moodle gibt es ausführbare REST-Server von mir, die den Funktionsumfang von Übung 1 korrekt umsetzen (für alle drei Betriebssysteme Windows, Linux und Mac). Sie können sich den entsprechenden Server runterladen und einfach starten.
Falls Sie Ihren eigenen REST-Server nutzen, sollten Sie folgende Punkte beachten:
• Ich werde die Funktionstests für die abgegebenen Lösungen mit meinem REST-Server testen.
Das bedeutet, dass Ihr REST-Server vollständig kompatibel zu Übung 1 bleiben muss.
• Vor der Abgabe der Meilensteine sollte Sie Tests mit meinem REST-Server aus Moodle durchführen, um sicherzustellen, dass es keine Probleme bei der Schnittstelle gibt.

Seite 2
• Wenn Sie Zusatzleistungen umsetzen, geht das nur mit Ihrem REST-Server. Falls Sie beispielsweise eine Registrierung mit E-Mail-Verifikation umsetzen, kann das nicht mit meinem RESTServer erfolgen. Die Pflichtfunktionen der Aufgabenstellung sollten aber trotzdem mit meinem
REST-Server korrekt funktionieren. Für das Vorführen der Zusatzleistungen können Sie dann Ihren REST-Server verwenden.
FUNKTIONALE ANFORDERUNGEN
Es müssen die folgenden funktionalen Anforderungen umgesetzt werden.
Landing Page
Die Landing-Page leitet zunächst auf den „öffentlichen“ Bereich der Web-Seite. Das sollte eine Willkommensseite mit einem kurzen Text sein.
Abbildung 1: Beispiel für eine Landing-Page
Login
Auf der Landing-Page gibt einen Login-Button. Wenn dieser gedrückt wird, öffnet sich ein modaler Login-Dialog. In dem Login-Dialog kann man User-Namen und Passwort eingeben. Über eine Login-Ausführen-Button wird dann der Login-Prozess gestartet.
Achtung: Es muss ein modaler Dialog sein! Ein eingebetteter Dialog ist nicht ausreichend. Falls das nicht
eingehalten wird, werden bei der finalen Abgabe Abzugspunkte berechnet.

Seite 3
Abbildung 2: Login-Dialog
Wenn die Credentials falsch waren, wird eine entsprechende Fehlernachricht angezeigt. Wenn die Credentials korrekt waren, wird die Startstartseite angezeigt.
Wichtig: Während des Logins sollte ein Spinner angezeigt werden. Dazu muss mit Redux ein asynchroner Zugriff gemacht werden. Sollte das nicht entsprechend umgesetzt werden, werden beim finalen
Meilenstein Abzugspunkte berechnet.
Startseite
Die Startseite wird nach einem erfolgreichen Login angezeigt. Sie sollte einen beliebigen Begrüßungstext
für den Nutzer anzeigen.

Seite 4
Abbildung 3: Beispiel für eine einfache private Startseite
Die Startseite enthält auch die wesentlichen Navigationselemente, für die Nutzung der Web-Anwendung. Hierzu gehört:
• Der Button zum Ausloggen (hier rechte oben zu sehen)
• Der Button, um die User-Management-Komponente anzuzeigen (nur für Administratoren)
• Der Button, um die Studiengang-Management-Komponente anzuzeigen
• Der Button, um die Studienbewerbung-Management-Komponente anzuzeigen.
Die Navigationselemente wurden in dieser Anwendung über das Top-Menü und den Activity-Bar links
umgesetzt. Sie können die Navigation anders umsetzen.
Wichtig: Die Navigationselemente sollten immer sichtbar sein, egal welche Seite gerade geöffnet ist.
Diese Buttons sollten nicht in einem Drop-Down-Menu sein, sondern immer unmittelbar erreichbar sein.
User-Management
Setzen Sie ein grundlegendes User-Management um. Hierzu gehören das Anlegen, Auflisten, Ändern
und Löschen von Usern. Beim Aktualisieren von Usern soll es auch möglich sein, das Passwort und die
Festlegung, ob ein User ein Administrator oder Standardnutzer ist, geändert werden können. Nach dem
Öffnen des User-Managements wird zunächst die Liste der User angezeigt.

Seite 5
Abbildung 4: Beispiel, wie das User-Management aussehen könnte.
Zum Editieren eines Users wird der Edit-Button bei dem jeweiligen User gedrückt. Anschließend wird das
Formular zum Editieren des Users angezeigt. Dieses Formular kann über einen modalen Pop-up-Dialog
oder auch eine Komponente in der Seite umgesetzt werden (siehe nachfolgende Abbildungen).
Abbildung 5: Editieren von Usern per Pop-up-Dialog
Abbildung 6: Editieren von User über eingebettete Komponente

Seite 6
Wichtig: Wenn der User nach dem Ändern gespeichert wird, sollte der geänderte User sofort in der User-Liste aktualisiert werden. Gleichermaßen sollte ein gelöschter User sofort aus der User-Liste entfernt
werden. Auch wenn ein neuer User hinzugefügt wird, sollte die Liste entsprechend erweitert werden.
Die User-Liste sollte kein Pop-Up-Dialog sein, sondern so wie in der Abbildung dargestellt die Seite umsetzen. Das User-Management sollte auch nicht auf der Startseite sein, sondern erst nach Drücken eines
entsprechenden Navigationselements angezeigt werden.
Studiengang-Management
In der Studiengang-Management-Komponente werden die Studiengänge aufgelistet, angelegt und geändert, bzw. gelöscht.
Abbildung 7: Beispiel für Studiengang-Management-Komponente
Die Funktionen zum Anlegen, Ändern und Löschen von Studiengängen sind nur verfügbar, wenn der eingeloggte User ein Administrator ist. Ein normaler User kann die Studiengänge auflisten, aber nicht editieren.
Neben den Buttons zum Editieren und Löschen von Studiengängen gibt es auch einen Button, zum Anlegen einer Studienbewerbung. Dieser ist sowohl für Administratoren als auch normale User sichtbar. Der
Unterschied besteht jedoch darin, dass normale Nutzer nur Bewerbungen für sich selbst anlegen können. Administratoren können Studienbewerbungen für alle User anlegen.
Anlegen von Studienbewerbungen
Zum Anlegen von Studienbewerbungen wird in der Studiengangliste für den betreffenden Studiengang
der Button „Create Application“ gedrückt (siehe Abbildung 7). Daraufhin öffnet sich die Ansicht um Anlegen einer Studienbewerbung.
Der Studiengang sollte in dem Formular bereits vorbelegt sein und aus dem Studiengang ermittelt werden, über den das Formular geöffnet wurde. Neben dem Studiengang können in dem Formular die UserID (für den der Studiengang angelegt werden soll), das Jahr sowie das Semester (WiSe oder SoSe) angegeben werden.

Seite 7
Wenn der Button „Perform Finish“ oder auch „Anlegen“ gedrückt wird, soll die Studienbewerbung angelegt werden. Wenn man dann in die Liste der Studienbewerbungen geht, sollte die angelegte Bewerbung aufgelistet werden.
Hinweis: Die Texte in den Buttons können Sie frei gestalten und auch anders nennen. Wichtig sind die
ID-Tags bei den Buttons, die beim automatischen Testen verwendet werden.
Abbildung 8: Anlegen von Studienbewerbung
Administratoren können Bewerbungen für alle Studierenden anlegen. Daher ist das Feld „User-ID“ bei
Administratoren editierbar. Bei Nicht-Administratoren wird die User-ID des aktuell eingeloggten Users
eingetragen. Das Feld für die User-ID sollte dann nicht-editierbar sein.
Studienbewerbung-Management
In der Studienbewerbung-Management-Komponente werden die Studienbewerbungen aufgelistet. Bei
einem normalen Nutzer werden seine eigenen Studienbewerbungen aufgelistet. Bei einem Administrator werden die Bewerbungen für alle User angezeigt.
Zur Reduzierung des Aufwands ist es nicht nötig, dass man Studienbewerbungen bearbeiten kann. Lediglich das Löschen von Bewerbungen muss möglich sein. Sollten Sie auch das Bearbeiten von Studienbewerbungen umsetzen, ist das eine Zusatzleistung, für die Sie Zusatzpunkte bekommen können.
Normale Nutzer können nur ihre eigenen Bewerbungen auflisten und löschen. Administratoren können
die Bewerbungen für alle Nutzer auflisten und löschen.

Seite 8
Abbildung 9: Liste der Studienbewerbungen
Allgemeine Vorgaben
Bitte beachten Sie die folgenden Vorgaben, die für alle Editierseiten für die Entitäten (User, Studiengang, Studienbewerbung) gelten:
• Für jede Entität soll es eine eigene „Seite“ geben. Beispielsweise: User und Studiengänge sollen
nicht auf einer Seite dargestellt werden.
• Zur Navigation zwischen den Seiten sollte es nicht notwendig sein, den Back-Button vom Browser zu nutzen. Für die Navigation sollten es stets entsprechende Buttons/ Links in der Anwendung geben. Diese Buttons dürfen nicht in einem Drop-Down-Menü sein, weil sie ansonsten
nicht sichtbar sind, bevor das Drop-Down-Menü geöffnet ist.
• Wenn eine Komponente Entitäten auflistet (z.B. User-Liste), dann sollten die Entitäten immer
automatisch von REST-Server abgerufen werden (in der Regel, wenn die React-Komponente gemountet wird). Hierzu sollte es nicht notwendig sein, einen Button (z.B. „Refresh“) zu drücken.
• Wenn eine Entität gelöscht werden soll, ist nach dem Drücken des Löschen-Buttons zunächst ein
Bestätigungsdialog anzuzeigen. Erst nach dem Bestätigen des Löschens sollte die Entität gelöscht werden.
IT-SICHERHEIT
Die Web-Anwendung sollte die Anforderungen umsetzen, die sie auch bereits beim REST-Server umgesetzt haben:
• Die Web-Anwendung soll sich über Basic-Authentication am REST-Server anmelden.
• Die Web-Anwendung sollte mit dem REST-Server per HTTPS kommunizieren.
• Es soll eine einfache Autorisierung umgesetzt werden. Damit soll sichergestellt wird, dass bestimmte Operationen (z.B. das Bearbeiten von Usern) nur durch einen Administrator durchgeführt werden kann. Beispielsweise sollte der Link zur User-Liste für bei Administratoren angezeigt werden.
Konkret sollen die folgenden Rechtevorgaben eingehalten werden:
• Den Button zum Öffnen des User-Managements haben nur Administratoren
• Die Studiengangliste können alle eingeloggten Nutzer öffnen. Jedoch können nur Administratoren die Studiengangdaten bearbeiten.

Seite 9
• Alle eingeloggten User können in der Studiengangliste den Button zum Anlegen von Bewerbungen drücken.
• Administratoren können Bewerbungen für alle User anlegen. Nicht-Administratoren können Bewerbungen nur für sich anlegen.
• Administratoren können die Bewerbungen von allen Studierenden sehen und löschen. Standardnutzer können nur ihre eigenen Bewerbungen sehen und löschen.
Verwenden Sie auf keinen Fall den Local Storage des Browsers. Daten sollten ausschließlich im ReduxStore abgelegt werden. Werden diese Vorgaben nicht eingehalten, werden mindestens 5 Abzugspunkte
berechnet.
VORGABEN FÜR DIE AUTORISIERUNG
Die Autorisierung der Web-Anwendung sollte gleichermaßen umgesetzt werden wie im REST-Server
(siehe Aufgabenstellung von Übung 1).
ALLGEMEINE HINWEISE ZUR IMPLEMENTIERUNG
Bitte beachten Sie, dass die React-Anwendung, das REST-Backend sowie die Datenbank jeweils separate
Server-Anwendungen sind! Die gesamte Web-Anwendung besteht dementsprechend aus 3 Servern. Bei
der Umsetzung sollten Sie auch die folgenden Aspekte berücksichtigen
Starten des Projekts
Die automatisierten Tests verwenden „npm start“ zum Starten der Web-Anwendung. Funktioniert diese
Start-Methode nicht, werden mindestens 5 Abzugspunkte berechnet.
Projektstruktur
Die Projektstruktur sollte wie rechts dargestellt organisiert werden (Beispiel aus einem anderen Semester). Unter dem SourceVerzeichnis sollte es ein „react“-Verzeichnis geben. Dort sollten
alle React-Komponenten nach Funktionskomplexen organisiert
sein. Beispielsweise sind alle Komponenten für die Foren-Liste im
Verzeichnis „forumThread“.
Im Verzeichnis können ganz oben die Management-Komponenten liegen (hier beispielsweise die ForumThreadPage.js). Darüber
hinaus sollte es die Unterverzeichnisse „state“ und „components“
geben. Im Verzeichnis „state“ sollten die Entitäten, Actions, Services und alles andere, was zu Redux gehört, drin sein. Im Unterverzeichnis „components“ sollten alle React-Komponenten liegen.
Formatierung
Der Code muss korrekt formatiert und ohne Code-Leichen sein.
Überflüssige Leerzeilen sind zu entfernen. Verwenden Sie einheitliche Regel für die Benennung von Modulen (z.B. in Bezug auf Großund Kleinschreibung). Abbildung 10: Projektstruktur

Seite 10
CSS
Achten Sie bei der Verwendung von CSS darauf, dass Sie nicht Tags, die für die automatisierten Tests
vorgesehen sind, auf „hidden“ gesetzt sind. Ansonsten kann das Tag nicht gefunden werden und damit
scheitern die entsprechenden Tests.
Konfiguration und Umgebungsvariablen:
URLs (z.B. zum Backend) und vergleichbare Angaben, die vom Deployment abhängig sind, sollten als
Konfigurationsparameter ausgelagert werden. Verwenden Sie hierzu ein Konfigurationsmodul. Sie können beispielsweise das Modul 'react-global-configuration' verwenden. Die dafür notwendigen Konfigurations-Module sollten dann im Verzeichnis „./config“ sein. Sie können die URL zum Backend aber auch als
Umgebungsvariable in der .env-Datei hinterlegen.
Passwörter (z.B. für E-Mail-Server) sollten auf jeden Fall als Umgebungsvariablen ausgelagert werden
und nicht Teil der Anwendung sein.
Vor der Abgabe
Bevor Sie Ihre Lösungen der zweiten Übung abgeben, sollten Sie Ihre Web-Anwendung mit den Referenz-REST-Servern von mir testen, die Sie in Moodle finden.
Hinweise zum State-Management
Setzen Sie Redux für das State-Management entsprechend den Erläuterungen in den Vorlesungsfolien
ein. Redux muss jedoch nicht für alle Entitäten eingesetzt werden!
Redux wird vor allem dann eingesetzt, wenn Daten von mehr als einer Komponente verwendet werden.
Nach der Authentifizierung werden die Daten zum User und insbesondere der Token für alle weiteren
Aufrufe benötigt. Daher sollten die Daten des eingeloggten Nutzers inklusive des Tokens im Redux-Store
verwaltet werden. Für alle anderen Daten ist der Einsatz von Redux nicht notwendig!
Wichtig: Der Token darf nicht als Cookie übergeben und verwaltet werden! Auch die Verwendung des
Local Storage ist nicht zulässig.
Mindestens für den Login-Request zum Backend soll ein asynchroner Aufruf mit Redux umgesetzt werden. Solang der Aufruf dauert, sollte ein Spinner angezeigt werden.
Hinweise zur Umsetzung der React-Komponenten
Es steht Ihnen frei, ob Sie die React-Komponenten als Funktions- oder Klassenkomponenten umsetzen.
Der gängige Ansatz ist heute die Verwendung von Funktionskomponenten. In Bezug auf eine Einarbeitung sind Klassenkomponenten für mache Studierende einfacher.
Daten sollten erst geholt werden, wenn sie benötigt werden. Dafür bietet sich in React-Klassen-Komponenten die Methode componentDidMount() an. In Funktionskomponenten würde Sie dazu React.useEffect() verwenden.
Wenn Daten geändert wurden (hinzugefügt, geändert oder gelöscht), müssen sich die Listen automatisch aktualisieren. Es darf nicht notwendig sein, dass Seiten manuell aktualisiert werden.
Grundsätzlich sollte die Anwendung so konzipiert/ umgesetzt werden, dass eine Nutzung auch mit vielen Usern und Daten möglich ist.

Seite 11
Hinweise zum Design
Die Oberfläche muss nicht die Qualität einer professionellen Anwendung aufweisen. Sie sollte aber den
grundlegenden Anforderungen an eine Anwendung gerecht werden, die von einem Informatikstudierenden erwartet werden können. Das bedeutet:
• Das Frontend sollte gängige Anforderungen an die Software-Ergonomie erfüllen
• Die Oberflächenstruktur sollte klar, einfach und nachvollziehbar sein.
• Modale Dialoge sollten nur für das Login und Bestätigungen (z.B. beim Löschen von Entitäten)
benutzt werden. Auch zum Anlegen können Dialoge verwendet werden. Das ist heutzutage aber
eher selten.
• Die Anwendung sollte fully-responsive sein. Das bedeutet, dass auch bei starker Verkleinerung
des Browsers, z.B. auf die Größe eines mobilen Endgeräts die Anwendung noch gut zu nutzen
ist. Es ist empfehlenswert, hierfür gängige CSS-Bibliotheken wie Bootstrap zu verwenden, damit
Sie das nicht selber umsetzen müssen.
Werden die Grundanforderungen an die Benutzeroberfläche nicht erfüllt, können für die betreffenden
Aspekte Abzugspunkte berechnet werden.
Verwendung des Local Storage oder Cookies
Sicherheitskritische Daten wie der Token sollten nie im Local Storage des Browsers abgelegt werden.
Das wird in zahlreichen Online-Beiträge beschrieben:

- <https://snyk.io/blog/is-localstorage-safe-to-use/>
- <https://dev.to/rdegges/please-stop-using-local-storage-1i04>
- <https://resources.infosecinstitute.com/topic/html5-security-local-storage/>
- <https://forums.meteor.com/t/security-dont-store-tokens-in-localstorage/50539>
- <https://cheatsheetseries.owasp.org/cheatsheets/HTML5_Security_Cheat_Sheet.html>
- <https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/JSON_Web_Token_for_Java_Cheat_Sheet.md#token-storage-on-client-side>
Daher darf in Übung 2 der Token nicht im Local Storage abgelegt werden.
Gleichermaßen ist auch die Verwendung von Cookies in der Regel nicht sicher. Auch diese dürfen im
Übung 2 nicht verwendet werden. Das bedeutet, dass bei einem Refresh der Web-Anwendung der State
weg ist und sich der User neu einloggen muss. Das ist die normale Funktionsweise einer Single-Page-Anwendung.
VORGABEN FÜR DAS AUTOMATISCHE TESTEN
Die Überprüfung der funktionalen Anforderungen wird automatisiert über Selenium-Tests durchgeführt.
Hierzu müssen in den HTML-Tags der Anwendung entsprechende IDs eingetragen werden. Diese Vorgaben sind exakt einzuhalten. Jede Abweichung von diesen Vorgaben führt automatisch zu entsprechenden Abzugspunkten.

Seite 12
Abbildung 11: Beispiel für das Einfügen einer ID in einem Activity-Bar-Item
Bitte beachten Sie, dass die IDs für Selenium in den Tags eingefügt werden müssen, in denen der EventHandler ist. Es reicht nicht, diese in übergeordneten Tags einzufügen. Wenn Sie beispielsweise eine
React-Login-Button-Komponenten schreiben, muss die ID bei dem HTML-Button und nicht bei der ReactKomponente eingefügt werden! Bei dem Beispiel oben ist der LinkContainer die Komponenten, die beim
Anklicken den Event feuert. Daher muss die ID dort gesetzt werden.
Bitte kommen Sie in den Übungen oder Vorlesungen zu mir, falls Sie dazu noch Fragen haben.
ÜBERSICHT ÜBER DIE IDS FÜR DAS AUTOMATISIERTE TESTEN
Nachfolgend werden übersichtsartig die IDs aufgeführt, die in den Web-Seiten vorhanden sein müssen.
Landing-Page
In der Landing-Page müssen zwei IDs gesetzt sein:
• Auf der Seite selbst muss ein Tag die ID „LandingPage“ haben, damit geprüft werden kann, ob
die Landing-Page angezeigt wird.
• Der Login-Button, der den Dialog zum Login öffnet, sollte die ID „OpenLoginDialogButton“ haben.
Abbildung 12: Landing-Page
Wenn der Button zum Einloggen gedrückt wird, wird der Login-Dialog angezeigt. Der Login-Dialog sollten
die folgenden IDs haben:
• Der Dialog sollte die ID „LoginDialog“ haben.

Seite 13
• Das Feld zum Eingeben des User-ID sollte die ID „LoginDialogUserIDText“ haben.
• Das Feld zum Eingeben des Passworts sollte die ID „LoginDialogPasswordText“ haben.
• Der Button zum Ausführen des Logins sollte die ID „PerformLoginButton“ haben.
Abbildung 13: Login-Dialog
Seiten nach dem erfolgreichen Login
Nach dem Login wird der „private“ Bereich der Web-Seite angezeigt, der nur für eingeloggte User sichtbar ist. Im „privaten“ Bereich sollten immer, egal welche Daten derzeit angezeigt werden, die folgenden
Navigationselemente sichtbar und mit den folgenden IDs belegt sein:
• „LogoutButton“: Der Button, um sich auszuloggen.
• „OpenStartPageButton“: Der Button, um die Startseite anzuzeigen.
• „OpenUserManagementPageButton“: Der Button, um die User-Management-Komponente anzuzeigen.
• „OpenDegreeCourseManagementPageButton“: Der Button, um die Studiengang-ManagementKomponente anzuzeigen.
• „OpenDegreeCourseApplicationManagementPageButton“: Der Button, um die Studienbewerbung-Management-Komponente anzuzeigen.
Jede Seite sollte Ihre ID haben, damit über die Tests festgestellt werden kann, ob die Seite auch angezeigt wird. Konkret müssen die Seiten die folgenden IDs haben, die sichtbar sein müssen, solange die
Seite angezeigt wird:
• „StartPage“: ID in der Startseite
• „UserManagementPage“: ID in der User-Management-Komponente
• „DegreeCourseManagementPage“: ID in der Studiengang-Management-Komponente
• „DegreeCourseApplicationManagementPage“: ID in der Studienbewerbung-Management-Komponente
Beachten Sie, dass nur der Administrator das User-Management öffnen darf. Dementsprechend darf bei
Nicht-Administratoren der Button „OpenUserManagementPageButton“ nicht zu sehen/ vorhanden sein.

Seite 14
User-Management
Wenn das User-Management angezeigt wird, müssen über IDs die verschiedenen Funktionen zum Verwalten der User identifiziert werden.
Abbildung 14: User-Management-Seite
Auf der User-Management-Seite sollten die folgenden IDs enthalten sein:
• „UserManagementPageListComponent“: diese ID zeigt an, dass derzeit die User-Liste angezeigt
wird.
• „UserManagementPageCreateUserButton“: ID des Buttons zum Anlegen eines Users
• Für jeden aufgelisteten User sollte es eine Komponente mit den folgenden IDs geben
o Die User-Komponente sollte eine ID haben, die sich aus „UserItem“ und der User-ID zusammensetzt (z.B. für den User manfred: „UserItemmanfred“)
o Die Elemente, in denen die User-ID, der Vorname und der Nachname ausgegeben werden, sollten die ID „UserID“, „FirstName“ sowie „LastName“ haben.
o Der Button zum Editieren des Users setzt sich aus „UserItemEditButton“ und der User-ID
zusammen (z.B. für den User manfred: „UserItemEditButtonmanfred“)
o Der Button zum Löschen des Users setzt sich aus „UserItemDeleteButton“ und der UserID zusammen (z.B. für den User manfred: „UserItemDeleteButtonmanfred“)
Anlegen eines Users
Wenn der Button zum Anlegen eines Users gedrückt wurde, wird ein Formular angezeigt, in dem die Felder zum Eingeben der User-Daten enthalten sind. Dieses Formular kann ein modaler Dialog sein oder in
der Seite eingebettet sein.

Seite 15
Abbildung 15: Seite zum Anlegen eines Users
Damit die Felder des Formulars mit Selenium gefüllt werden können und der User angelegt werden
kann, müssen die folgenden IDs enthalten sein:
• „UserManagementPageCreateComponent“: Diese ID zeigt an, dass die Komponente zum Anlegen eines Users angezeigt wird.
• „CreateUserComponentEditUserID“: ID des Eingabefelds für die User-ID
• „CreateUserComponentEditFirstName“: ID des Eingabefelds für den Vornamen
• „CreateUserComponentEditLastName“: ID des Eingabefelds für den Nachnamen
• „CreateUserComponentEditPassword“: ID des Eingabefelds für das Passwort
• „CreateUserComponentEditIsAdministrator“: ID des Eingabefelds, mit dem der User zum Administrator gemacht werden kann
• „CreateUserComponentCreateUserButton“: ID des Buttons, um den User anzulegen
• „OpenUserManagementPageListComponentButton“: Der Button mit dieser ID öffnet wieder die
User-Liste
Wenn der Button zum Anlegen des Users gedrückt wird, sollte die Anwendung automatisch wieder zur
Liste wechseln. Der angelegte User sollte dann in der Liste zu sehen sein.
Editieren eines Users
Wenn der Button zum Editieren eines Users gedrückt wurde, wird ein Formular angezeigt, in dem die
Felder zum Editieren der User-Daten enthalten sind. Dieses Formular kann ein modaler Dialog sein oder
in der Seite eingebettet sein.

Seite 16
Abbildung 16: Komponenten zum Ändern eines Users
Wenn der Editier-Dialog für einen User angezeigt wird, sollten automatisch alle Daten, außer das Passwort, des Users in den Formular-Feldern eingetragen sein. Das Editier-Formular sollte die folgenden IDs
enthalten:
• „UserManagementPageEditComponent“: Diese ID zeigt an, dass die Komponente zum Editieren
eines Users angezeigt wird.
• „EditUserComponentEditUserID“: ID des Eingabefelds für die User-ID
• „EditUserComponentEditFirstName“: ID des Eingabefelds für den Vornamen
• „EditUserComponentEditLastName“: ID des Eingabefelds für den Nachnamen
• „EditUserComponentEditPassword“: ID des Eingabefelds für das Passwort
• „EditUserComponentEditIsAdministrator“: ID des Eingabefelds, mit dem der User zum Administrator gemacht werden kann
• „EditUserComponentSaveUserButton“: ID des Buttons, um den User anzulegen
• „OpenUserManagementPageListComponentButton“: der Button mit dieser ID öffnet wieder die
User-Liste
Wenn der Button zum Speichern des Users gedrückt wird, ist es empfehlenswert, dass eine Nachricht
angezeigt wird, dass der User gespeichert wurde. Das Anzeigen der Nachricht muss jedoch nicht umgesetzt werden. Wenn man zu der Liste zurückgeht, muss aber der User mit den geänderten Daten angezeigt werden.
Löschen eines Users
Wenn der Button zum Löschen einer Entität (User, Studiengang, etc.) gedrückt wird, sollte zunächst ein
Dialog zum Bestätigen des Löschens angezeigt werden. Der Dialog sollte ungefähr wie folgt aussehen:

Seite 17
Abbildung 17: Beispiel Löschen-Dialog für eine Studienbewerbung
Der Löschen-Dialog sollte die folgenden IDs haben:
• Der Löschen-Dialog sollte eine ID haben, die sich wie folgt zusammensetzt:
o „DeleteDialog“
o Art der Entität (z.B. User, DegreeCourse, DegreeCourseApplication)
o Unique Identifier von der Entität (beim User die User-ID, ansonsten der Unique Identifier)
o Beispiele: „DeleteDialogUsermanfred“, „DeleteDialogDegreeCourse234234234234“
• Button zum Ausführen des Löschens: „DeleteDialogConfirmButton“
• Button zum Abbrechen des Löschens: „DeleteDialogCancelButton“
Studiengangmanagement
Der Button zum Öffnen der Studiengangverwaltung sollte die ID „OpenDegreeCourseManagementPageButton“ haben.
Wenn das Studiengang-Management angezeigt wird, sollte die Liste mit den vorhandenen Studiengängen angezeigt werden. Über IDs können die verschiedenen Funktionen zum Verwalten der Studiengänge
identifiziert werden.
Abbildung 18: Studiengang-Management-Seite

Seite 18
Auf der Studiengang-Management-Seite sollten die folgenden IDs enthalten sein:
• „DegreeCourseManagementPageListComponent“: diese ID zeigt an, dass derzeit die Studiengang-Liste angezeigt wird.
• „DegreeCourseManagementPageCreateDegreeCourseButton“: ID des Buttons zum Anlegen eines Studiengangs
• Für jeden Studiengang sollte es eine Komponente mit den folgenden IDs geben
o Die Studiengang-Komponente sollte eine ID haben, die sich aus „DegreeCourseItem“
und der Sudiengang-ID zusammensetzt. Im Unterschied zum User ist das in diesem Fall
der Unique Identifier (z.B. für eine Studiengang mit der ID 123123:
„DegreeCourseItem123123“)
o Für die ausgegebenen Angaben zum Studiengang sollten die IDs „UniversityName“, „DepartmentName“ sowie „Name“ verwendet werden.
o Der Button zum Editieren des Studiengangs setzt sich aus „DegreeCourseItemEditButton“ und der ID zusammen (z.B. „DegreeCourseItemEditButton123123“)
o Der Button zum Löschen des Studiengangs setzt sich aus „DegreeCourseItemDeleteButton“ und der ID zusammen (z.B. „DegreeCourseItemDeleteButton123123“)
Anlegen eines Studiengangs
Wenn der Button zum Anlegen eines Studiengangs gedrückt wurde, wird ein Formular angezeigt, in dem
die Felder zum Eingeben der Studiengangdaten enthalten sind. Dieses Formular kann ein modaler Dialog
sein oder in der Seite eingebettet sein.
Abbildung 19: Seite zum Anlegen von Studiengang
Damit die Felder des Formulars gefüllt werden können und der Studiengang angelegt werden kann,
müssen die folgenden IDs enthalten sein:
• „DegreeCourseManagementPageCreateComponent“: Diese ID zeigt an, dass die Komponente
zum Anlegen eines Studiengangs angezeigt wird. Hinweis: die ID DegreeCourseManagementPageListComponent darf jetzt nicht mehr zu sehen sein.
• „CreateDegreeCourseComponentEditName“: ID des Eingabefelds für den Namen

Seite 19
• „CreateDegreeCourseComponentEditShortName“: ID des Eingabefelds für die Kurzbezeichnung
• „CreateDegreeCourseComponentEditUniversityName“: ID des Eingabefelds für den Hochschulnamen
• „CreateDegreeCourseComponentEditUniversityShortName“: ID des Eingabefelds für die Hochschulkurzbezeichnung
• „CreateDegreeCourseComponentEditDepartmentName“: ID des Eingabefelds für den Fachbereichsnamen
• „CreateDegreeCourseComponentEditDepartmentShortName“: ID des Eingabefelds für die Fachbereichskurzbezeichnung
• „CreateDegreeCourseComponentCreateDegreeCourseButton“: ID des Buttons, um den
Studiengang anzulegen
• „OpenDegreeCourseManagementPageListComponentButton“: der Button mit dieser ID öffnet
wieder die Studiengang-Liste
Wenn der Button zum Anlegen des Studiengangs gedrückt wird, sollte die Anwendung automatisch wieder zur Liste wechseln. Der angelegte Studiengang sollte dann in der Liste zu sehen sein.
Editieren eines Studiengangs
Wenn der Button zum Editieren eines Studiengangs gedrückt wurde, wird ein Formular angezeigt, in
dem die Felder zum Editieren der Studiengang-Daten enthalten sind. Dieses Formular kann ein modaler
Dialog sein oder in der Seite eingebettet sein.
Abbildung 20: Komponenten zu Ändern eines Studiengangs
Wenn der Editier-Dialog für einen Studiengang angezeigt wird, sollten automatisch alle Daten in den
Formular-Feldern eingetragen sein. Das Formular sollte die folgenden IDs enthalten:
• „DegreeCourseManagementPageEditComponent“: Diese ID zeigt an, dass die Komponente zum
Editieren eines Studiengangs angezeigt wird.
• „EditDegreeCourseComponentEditName“
• „EditDegreeCourseComponentEditShortName“
• „EditDegreeCourseComponentEditUniversityName“

Seite 20
• „EditDegreeCourseComponentEditUniversityShortName“
• „EditDegreeCourseComponentEditDepartmentName“
• „EditDegreeCourseComponentEditDepartmentShortName“
• „EditDegreeCourseComponentSaveDegreeCourseButton“: ID des Buttons, um den User anzulegen
• „OpenDegreeCourseManagementPageListComponentButton“: der Button mit dieser ID öffnet
wieder die Studiengang-Liste
Wenn der Button zum Speichern des Studiengangs gedrückt wird, sollte eine Nachricht angezeigt werden, dass der Studiengang gespeichert wurde. Das Anzeigen der Nachricht ist wieder optional und muss
nicht umgesetzt werden. Wenn man zu der Liste zurückgeht, sollte der Studiengang mit den geänderten
Daten angezeigt werden.
Löschen eines Studiengangs
Das Löschen eines Studiengangs sollte korrespondierend zum Löschen eines Users umgesetzt werden
(einschließlich der IDs).
Studienbewerbung über Studiengang anlegen
Es bietet sich an, Studienbewerbungen über den Studiengang anzulegen, weil dann der Studiengang
nicht mehr über einen Selektor ausgewählt werden muss. Daher sollte es im Studiengang einen Button
zum Anlegen von Studienbewerbungen geben (siehe Screen Shot oben). Der Button sollte die ID
„CreateDegreeCourseApplicationForDegreeCourse“ sowie der ID des Studiengangs (z.B. „CreateDegreeCourseApplicationForDegreeCourse234234234234“) haben.
Abbildung 21: Anlegen von Bewerbung über den Studiengang
Anschließend sollte der Dialog zum Anlegen einer Studienbewerbung für den betreffenden Studiengang
angezeigt werden.

Seite 21
Abbildung 22: Anlegen von Studienbewerbung über den Studiengang
Der Studiengang sollte bereits vorbelegt sein. Zum Anlegen der Studienbewerbung müssen nur noch die
User-ID als Textfeld, das Jahr und das Semester eingegeben werden.
Das Feld für die User-ID sollte nur bei einem Administrator editierbar sein, da nur ein Administrator Bewerbungen für beliebige User anlegen darf. Bei Nicht-Administratoren sollte das Feld mit der User-ID
mit der User-ID des aktuell eingeloggten Users vorbelegt sein und nicht editierbar sein.
Die Eingabe des Semesters (Sommer- oder Wintersemester) sollte über eine Selection-Box umgesetzt
werden. Die Selection-Box sollte wie folgt umgesetzt werden:
Abbildung 23: Umsetzen der Selection-Box für das Semester
Zum Eingeben der Studienbewerbungsdaten sollten die folgenden Felder vorhanden sein:
• „CreateDegreeCourseApplicationEditUserID“: ID des Eingabefelds für die User-ID
• „CreateDegreeCourseApplicationEditTargetPeriodYear“: ID des Eingabefelds für die User-ID
• „CreateDegreeCourseApplicationEditTargetPeriodName“: ID des Eingabefelds für die User-ID
Der Button zum Anlegen der Studienbewerbung sollte die ID „CreateDegreeCourseApplicationCreateButton“ haben.
Studienbewerbungen-Management
Wenn das Studienbewerbung-Management angezeigt wird, werden die Studienbewerbungen angezeigt.
Über IDs können die verschiedenen Funktionen zum Verwalten der Studienbewerbungen identifiziert
werden.

Seite 22
Abbildung 24: Studiengang-Management-Seite
Auf der Studienbewerbung-Management-Seite sollten die folgenden IDs enthalten sein:
• „DegreeCourseApplicationManagementPageListComponent“: diese ID zeigt an, dass derzeit die
Studienbewerbungsliste angezeigt wird.
• Für jede Studienbewerbung sollte es eine Komponente mit den folgenden IDs geben
o Die Studienbewerbung-Komponente sollte eine ID haben, die sich aus „DegreeCourseApplicationItem“ und der Sudienbewerbung-ID zusammensetzt (z.B. für eine Studienbewerbung mit der ID 123123: „DegreeCourseApplicationItem123123“)
o Für die ausgegebenen Angaben zur Studienbewerbung sollten die IDs „ApplicantUserID“, „DegreeCourseName“, „TargetPeriodYear“, „TargetPeriodShortName“ sowie „UniversityShortName“ verwendet werden.
o Der Button zum Löschen des Studiengangs setzt sich aus „DegreeCourseApplicationItemDeleteButton“ und der ID zusammen (z.B. „DegreeCourseItemApplicationDeleteButton123123“)
Ein Editieren von Bewerbungen muss nicht umgesetzt werden. Dementsprechend muss es den Button
dafür auch nicht geben.
Löschen von Studienbewerbungen
Das Löschen einer Studienbewerbung sollte korrespondierend zum Löschen eines Users oder Studiengangs umgesetzt werden (einschließlich der IDs). Der Button zum Löschen einer Studienbewerbung
sollte die ID „DegreeCourseApplicationDeleteButton“ sowie der ID der Studienbewerbung haben.
Wenn der Button zum Löschen einer Studienbewerbung gedrückt wird, sollte wie immer zunächst ein
Dialog zum Bestätigen des Löschens angezeigt werden.
Der Löschen-Dialog sollte die folgenden IDs haben:
• Der Löschen-Dialog sollte eine ID haben, die sich wie folgt zusammensetzt:
o „DeleteDialogDegreeCourseApplication“

Seite 23
o Die ID der Studienbewerbung
• Beispiel: „DeleteDialogDegreeCourseApplication234234234“
• Button zum Ausführen des Löschens: „DeleteDialogConfirmButton“
• Button zum Abbrechen des Löschens: „DeleteDialogCancelButton“
ÜBUNGSLEISTUNGEN
Zum Bestehen der Übung müssen die folgenden Übungsleistungen erbracht werden:
• Meilenstein 1
• Meilenstein 2
• Meilenstein 3 (Finale Abgabe)
Für jede dieser Übungsleistung gibt es im Moodle ein weiteres Dokument, in dem die Vorgaben weiter
beschrieben und Hilfestellungen gegeben werden.
