Nachfolgend sehen Sie die Ergebnisse der getesteten Funktionen der von Ihnen abgegebenen WebAnwendung.
Übersicht über die Tests mit ihren Ergebnissen

Testschritte/ Funktionen, die im Rahmen des Tests auszuführen sind 49
... davon wurden tatsächlich ausgeführt 43
Vorgesehene Prüfungen zu den Testschritten 39
... davon konnten geprüft werden 39
... erfolgreiche Prüfungen 26
... Fehler 13
Server-Abstürze () 0
Testschritt Prfung Ergebnis Erluterung
Abrufen der Startseite Der Status-Code sollte 200
sein
true Die Seite konnte geladen werden: Vite + React + TS
Login-Dialog-Button finden Suche den Button zum
Öffnen des Login-Dialogs
true Das Web-Element wurde gefunden
Login-Dialog-Button drücken Die Click-Aktion sollte
erfolgreich sein
true Die Click-Aktion konnte erfolgreich ausgeführt werden. Es wurde
der Button mit der ID OpenLoginDialogButton geklickt.
Login-Dialog finden Suche den Login-Dialog per
ID
true Das Web-Element wurde gefunden
Usernamen admin eingeben Bestimme Textfeld für UserID und setze admin
true Der Wert konnte gesetzt werden.
Passwort fuer admin
eingeben
Bestimme Textfeld für
Passwort und setze 123
true Der Wert konnte gesetzt werden.
Button zum Ausfuehren des
Logins drücken
Die Click-Aktion sollte
erfolgreich sein
true Die Click-Aktion konnte erfolgreich ausgeführt werden. Es wurde
der Button mit der ID PerformLoginButton geklickt.
User-Management-Button
finden
Suche den Button zum
Öffnen des UserManagements
true Das Web-Element wurde gefunden
Den User admin finden Suche den Admin-User in
der Liste
false Das Web-Element mit der ID: UserItemadmin konnte nicht
gefunden werden.
Den Button zum Anlegen
von User finden
Den Button zum Anlegen
eines Users finden
true Das Web-Element wurde gefunden
Öffne Dialog zum Anlegen
von User
Die Click-Aktion sollte
erfolgreich sein
true Die Click-Aktion konnte erfolgreich ausgeführt werden. Es wurde
der Button mit der ID UserManagementPageCreateUserButton
geklickt.
User-ID eingeben Bestimme Textfeld für UserID und setze test123
true Der Wert konnte gesetzt werden.
User-Vornamen eingeben Bestimme Textfeld für UserVorname und setze Manfred
true Der Wert konnte gesetzt werden.
User-Nachnamen eingeben Bestimme Textfeld für UserNachname und setze
Mustermann
true Der Wert konnte gesetzt werden.
Seite 1 von
 15
Nachfolgend werden die konkreten Prüfungen des REST-Servers aufgeführt. Diese Prüfungen
wurden automatisch durchgeführt. Sie bilden die Anforderungen der Aufgabenstellung ab.
Da bei jedem automatisierten Prozess auch Fehler auftreten können, möchte ich Sie um die Prüfung
der aufgeführten Ergebnisse prüfen. Sollten die Angaben nicht korrekt sein, kommen Sie bitte in einer
der Übungen, um eine persönliche Abnahme durchzuführen.
Passwort eingeben Bestimme Textfeld für das
Passwort und setze asdf
true Der Wert konnte gesetzt werden.
Neuen Nutzer anlegen Die Click-Aktion sollte
erfolgreich sein
false Die Click-Aktion konnte nicht ausgeführt werden, obwohl das
Element gefunden wurde:
CreateUserComponentCreateUserButton Wahrscheinlich fehlt
die ID der erwarteten Komponente: UserItemadmin
Den User test123 finden Suche den angelegten User
in der Liste
false Das Web-Element mit der ID: UserItemtest123 konnte nicht
gefunden werden.
Start-Seite-Button finden Suche den Button zum
Öffnen der Startseite
false Das Web-Element mit der ID: OpenStartPageButton konnte nicht
gefunden werden.
Private Seite öffnen Die Click-Aktion sollte
erfolgreich sein
false Die Click-Aktion konnte nicht ausgeführt werden, weil der Link/
Button mit der ID OpenStartPageButton nicht gefunden wurde.
Logout Button drücken Die Click-Aktion sollte
erfolgreich sein
false Die Click-Aktion konnte nicht ausgeführt werden, weil der Link/
Button mit der ID LogoutButton nicht gefunden wurde.
Als User test123 einloggen Die Click-Aktion sollte
erfolgreich sein
false Die Click-Aktion konnte nicht ausgeführt werden, obwohl das
Element gefunden wurde: PerformLoginButton Wahrscheinlich
fehlt die ID der erwarteten Komponente: StartPage
User-Management-Button für
test123 finden
Der Button des UserManagements sollte nicht
vorhanden sein
true Das Web-Element ist wie erwartet nicht da.
Logout Button drücken Die Click-Aktion sollte
erfolgreich sein
false Die Click-Aktion konnte nicht ausgeführt werden, weil der Link/
Button mit der ID LogoutButton nicht gefunden wurde.
Login-Dialog-Button finden Suche den Button zum
Öffnen des Login-Dialogs
true Das Web-Element wurde gefunden
Login-Dialog-Button drücken Die Click-Aktion sollte
erfolgreich sein
true Die Click-Aktion konnte erfolgreich ausgeführt werden. Es wurde
der Button mit der ID OpenLoginDialogButton geklickt.
Login-Dialog finden Suche den Login-Dialog per
ID
true Das Web-Element wurde gefunden
Usernamen admin eingeben Bestimme Textfeld für UserID und setze admin
true Der Wert konnte gesetzt werden.
Passwort fuer admin
eingeben
Bestimme Textfeld für
Passwort und setze 123
true Der Wert konnte gesetzt werden.
Button zum Ausfuehren des
Logins drücken
Die Click-Aktion sollte
erfolgreich sein
true Die Click-Aktion konnte erfolgreich ausgeführt werden. Es wurde
der Button mit der ID PerformLoginButton geklickt.
Den Button zum Löschen
des Users test123 finden
Den Button zum Löschen
des Users test123 finden
false Das Web-Element mit der ID: UserItemDeleteButtontest123
konnte nicht gefunden werden.
Neuen User löschen Die Click-Aktion sollte
erfolgreich sein
false Die Click-Aktion konnte nicht ausgeführt werden, weil der Link/
Button mit der ID UserItemDeleteButtontest123 nicht gefunden
wurde.
Das Löschen des Users
bestätigen
Das Löschen des Users
bestatigen
false Das Web-Element mit der ID: DeleteDialogConfirmButton konnte
nicht gefunden werden.
Bestätige das Löschen des
neuen Users
Die Click-Aktion sollte
erfolgreich sein
false Die Click-Aktion konnte nicht ausgeführt werden, weil der Link/
Button mit der ID DeleteDialogConfirmButton nicht gefunden
wurde.
User-Management-Button
finden
Suche den Button zum
Öffnen des UserManagements
true Das Web-Element wurde gefunden
Den User test123 finden Der User test123 sollte nicht
mehr in der Liste sein
true Das Web-Element ist wie erwartet nicht da.
Logout Button drücken und
nach ID LandingPage
suchen
Die Click-Aktion sollte
erfolgreich sein
false Die Click-Aktion konnte nicht ausgeführt werden, weil der Link/
Button mit der ID LogoutButton nicht gefunden wurde.
Usernamen admin eingeben Bestimme Textfeld für UserID und setze admin
true Der Wert konnte gesetzt werden.
Falsches Passwort
eingebeben
Setze ein falsches Passwort true Der Wert konnte gesetzt werden.
Login-Dialog-Button drücken Die Click-Aktion sollte nicht
erfolgreich sein
true Die Click-Aktion ist wie erwartet gescheitert.
Seite 2 von
 15
Test 1: Abrufen der Startseite
Gesendete Anfrage an den Server:
Startseite geöffnet
Vom Server erhaltene Antwort:
Konnte Startseite öffnen
Durchgeführte Tests:
Test 2: Login-Dialog-Button finden
Gesendete Anfrage an den Server:
Bestimme Element: OpenLoginDialogButton
Vom Server erhaltene Antwort:
Konnte das Element finden: OpenLoginDialogButton
Durchgeführte Tests:
Test 3: Login-Dialog-Button drücken
Gesendete Anfrage an den Server:
Clicke Element: OpenLoginDialogButton
Vom Server erhaltene Antwort:
Konnte das Element finden: OpenLoginDialogButton
Durchgeführte Tests:
Test 4: Login-Dialog finden
Gesendete Anfrage an den Server:
Bestimme Element: LoginDialog
Vom Server erhaltene Antwort:
Konnte das Element finden: LoginDialog
Durchgeführte Tests:
Test Ergebnis Erluterung
Der Status-Code sollte 200 sein true Die Seite konnte geladen werden: Vite + React + TS
Test Ergebnis Erluterung
Suche den Button zum Öffnen des
Login-Dialogs
true Das Web-Element wurde gefunden
Test Ergebnis Erluterung
Die Click-Aktion sollte erfolgreich
sein
true Die Click-Aktion konnte erfolgreich ausgeführt werden. Es wurde der Button mit der
ID OpenLoginDialogButton geklickt.
Seite 3 von
 15
Test 5: Usernamen admin eingeben
Gesendete Anfrage an den Server:
Bestimme Element: LoginDialogUserIDText
Vom Server erhaltene Antwort:
Konnte das Element finden: LoginDialogUserIDText
Durchgeführte Tests:
Test 6: Passwort fuer admin eingeben
Gesendete Anfrage an den Server:
Bestimme Element: LoginDialogPasswordText
Vom Server erhaltene Antwort:
Konnte das Element finden: LoginDialogPasswordText
Durchgeführte Tests:
Test 7: Button zum Ausfuehren des Logins drücken
Gesendete Anfrage an den Server:
Clicke Element: PerformLoginButton
Vom Server erhaltene Antwort:
Konnte das Element finden: PerformLoginButton
Durchgeführte Tests:
Test 8: User-Management-Button finden
Gesendete Anfrage an den Server:
Bestimme Element: OpenUserManagementPageButton
Vom Server erhaltene Antwort:
Konnte das Element finden: OpenUserManagementPageButton
Test Ergebnis Erluterung
Suche den Login-Dialog per ID true Das Web-Element wurde gefunden
Test Ergebnis Erluterung
Bestimme Textfeld für User-ID und
setze admin
true Der Wert konnte gesetzt werden.
Test Ergebnis Erluterung
Bestimme Textfeld für Passwort und
setze 123
true Der Wert konnte gesetzt werden.
Test Ergebnis Erluterung
Die Click-Aktion sollte erfolgreich
sein
true Die Click-Aktion konnte erfolgreich ausgeführt werden. Es wurde der Button mit der
ID PerformLoginButton geklickt.
Seite 4 von
 15
Durchgeführte Tests:
Test 9: User-Management öffnen
Gesendete Anfrage an den Server:
Clicke Element: OpenUserManagementPageButton
Vom Server erhaltene Antwort:
Konnte das Element nicht anklicken: OpenUserManagementPageButton
Durchgeführte Tests:
Test 10: Den User admin finden
Gesendete Anfrage an den Server:
Bestimme Element: UserItemadmin
Vom Server erhaltene Antwort:
Konnte das Element nicht finden: UserItemadmin
Durchgeführte Tests:
Test 11: Den Button zum Anlegen von User finden
Gesendete Anfrage an den Server:
Bestimme Element: UserManagementPageCreateUserButton
Vom Server erhaltene Antwort:
Konnte das Element finden: UserManagementPageCreateUserButton
Durchgeführte Tests:
Test 12: Öffne Dialog zum Anlegen von User
Gesendete Anfrage an den Server:
Clicke Element: UserManagementPageCreateUserButton
Vom Server erhaltene Antwort:
Konnte das Element finden: UserManagementPageCreateUserButton
Test Ergebnis Erluterung
Suche den Button zum Öffnen des
User-Managements
true Das Web-Element wurde gefunden
Test Ergebnis Erluterung
Test Ergebnis Erluterung
Suche den Admin-User in der Liste false Das Web-Element mit der ID: UserItemadmin konnte nicht gefunden werden.
Test Ergebnis Erluterung
Den Button zum Anlegen eines Users
finden
true Das Web-Element wurde gefunden
Seite 5 von
 15
Durchgeführte Tests:
Test 13: User-ID eingeben
Gesendete Anfrage an den Server:
Bestimme Element: CreateUserComponentEditUserID
Vom Server erhaltene Antwort:
Konnte das Element finden: CreateUserComponentEditUserID
Durchgeführte Tests:
Test 14: User-Vornamen eingeben
Gesendete Anfrage an den Server:
Bestimme Element: CreateUserComponentEditFirstName
Vom Server erhaltene Antwort:
Konnte das Element finden: CreateUserComponentEditFirstName
Durchgeführte Tests:
Test 15: User-Nachnamen eingeben
Gesendete Anfrage an den Server:
Bestimme Element: CreateUserComponentEditLastName
Vom Server erhaltene Antwort:
Konnte das Element finden: CreateUserComponentEditLastName
Durchgeführte Tests:
Test 16: Passwort eingeben
Gesendete Anfrage an den Server:
Bestimme Element: CreateUserComponentEditPassword
Vom Server erhaltene Antwort:
Test Ergebnis Erluterung
Die Click-Aktion sollte erfolgreich
sein
true Die Click-Aktion konnte erfolgreich ausgeführt werden. Es wurde der Button mit der
ID UserManagementPageCreateUserButton geklickt.
Test Ergebnis Erluterung
Bestimme Textfeld für User-ID und
setze test123
true Der Wert konnte gesetzt werden.
Test Ergebnis Erluterung
Bestimme Textfeld für User-Vorname
und setze Manfred
true Der Wert konnte gesetzt werden.
Test Ergebnis Erluterung
Bestimme Textfeld für UserNachname und setze Mustermann
true Der Wert konnte gesetzt werden.
Seite 6 von
 15
Konnte das Element finden: CreateUserComponentEditPassword
Durchgeführte Tests:
Test 17: Neuen Nutzer anlegen
Gesendete Anfrage an den Server:
Clicke Element: CreateUserComponentCreateUserButton
Vom Server erhaltene Antwort:
Konnte das Element nicht anklicken: CreateUserComponentCreateUserButton
Durchgeführte Tests:
Test 18: Den User test123 finden
Gesendete Anfrage an den Server:
Bestimme Element: UserItemtest123
Vom Server erhaltene Antwort:
Konnte das Element nicht finden: UserItemtest123
Durchgeführte Tests:
Test 19: Start-Seite-Button finden
Gesendete Anfrage an den Server:
Bestimme Element: OpenStartPageButton
Vom Server erhaltene Antwort:
Konnte das Element nicht finden: OpenStartPageButton
Durchgeführte Tests:
Test 20: Private Seite öffnen
Gesendete Anfrage an den Server:
Test Ergebnis Erluterung
Bestimme Textfeld für das Passwort
und setze asdf
true Der Wert konnte gesetzt werden.
Test Ergebnis Erluterung
Die Click-Aktion sollte erfolgreich
sein
false Die Click-Aktion konnte nicht ausgeführt werden, obwohl das Element gefunden
wurde: CreateUserComponentCreateUserButton Wahrscheinlich fehlt die ID der
erwarteten Komponente: UserItemadmin
Test Ergebnis Erluterung
Suche den angelegten User in der
Liste
false Das Web-Element mit der ID: UserItemtest123 konnte nicht gefunden werden.
Test Ergebnis Erluterung
Suche den Button zum Öffnen der
Startseite
false Das Web-Element mit der ID: OpenStartPageButton konnte nicht gefunden werden.
Seite 7 von
 15
Vom Server erhaltene Antwort:
Konnte das Element nicht anklicken, weil es nicht gefunden wurde: OpenStartPageButton
Durchgeführte Tests:
Test 21: Logout Button drücken
Gesendete Anfrage an den Server:
Vom Server erhaltene Antwort:
Konnte das Element nicht anklicken, weil es nicht gefunden wurde: LogoutButton
Durchgeführte Tests:
Test 22: Abrufen der Startseite
Gesendete Anfrage an den Server:
Startseite geöffnet
Vom Server erhaltene Antwort:
Konnte Startseite öffnen
Durchgeführte Tests:
Test 23: Login-Dialog-Button finden
Gesendete Anfrage an den Server:
Bestimme Element: OpenLoginDialogButton
Vom Server erhaltene Antwort:
Konnte das Element finden: OpenLoginDialogButton
Durchgeführte Tests:
Test 24: Login-Dialog-Button drücken
Gesendete Anfrage an den Server:
Clicke Element: OpenLoginDialogButton
Vom Server erhaltene Antwort:
Test Ergebnis Erluterung
Die Click-Aktion sollte erfolgreich
sein
false Die Click-Aktion konnte nicht ausgeführt werden, weil der Link/ Button mit der ID
OpenStartPageButton nicht gefunden wurde.
Test Ergebnis Erluterung
Die Click-Aktion sollte erfolgreich
sein
false Die Click-Aktion konnte nicht ausgeführt werden, weil der Link/ Button mit der ID
LogoutButton nicht gefunden wurde.
Test Ergebnis Erluterung
Test Ergebnis Erluterung
Seite 8 von
 15
Konnte das Element finden: OpenLoginDialogButton
Durchgeführte Tests:
Test 25: Usernamen admin eingeben
Gesendete Anfrage an den Server:
Bestimme Element: LoginDialogUserIDText
Vom Server erhaltene Antwort:
Konnte das Element finden: LoginDialogUserIDText
Durchgeführte Tests:
Test 26: Usernamen admin eingeben
Gesendete Anfrage an den Server:
Bestimme Element: LoginDialogPasswordText
Vom Server erhaltene Antwort:
Konnte das Element finden: LoginDialogPasswordText
Durchgeführte Tests:
Test 27: Als User test123 einloggen
Gesendete Anfrage an den Server:
Clicke Element: PerformLoginButton
Vom Server erhaltene Antwort:
Konnte das Element nicht anklicken: PerformLoginButton
Durchgeführte Tests:
Test 28: User-Management-Button für test123 finden
Gesendete Anfrage an den Server:
Bestimme Element: OpenUserManagementPageButton
Vom Server erhaltene Antwort:
Konnte das Element nicht finden: OpenUserManagementPageButton
Test Ergebnis Erluterung
Test Ergebnis Erluterung
Test Ergebnis Erluterung
Test Ergebnis Erluterung
Die Click-Aktion sollte erfolgreich
sein
false Die Click-Aktion konnte nicht ausgeführt werden, obwohl das Element gefunden
wurde: PerformLoginButton Wahrscheinlich fehlt die ID der erwarteten Komponente:
StartPage
Seite 9 von
 15
Durchgeführte Tests:
Test 29: Logout Button drücken
Gesendete Anfrage an den Server:
Vom Server erhaltene Antwort:
Konnte das Element nicht anklicken, weil es nicht gefunden wurde: LogoutButton
Durchgeführte Tests:
Test 30: Login-Dialog-Button finden
Gesendete Anfrage an den Server:
Bestimme Element: OpenLoginDialogButton
Vom Server erhaltene Antwort:
Konnte das Element finden: OpenLoginDialogButton
Durchgeführte Tests:
Test 31: Login-Dialog-Button drücken
Gesendete Anfrage an den Server:
Clicke Element: OpenLoginDialogButton
Vom Server erhaltene Antwort:
Konnte das Element finden: OpenLoginDialogButton
Durchgeführte Tests:
Test 32: Login-Dialog finden
Gesendete Anfrage an den Server:
Bestimme Element: LoginDialog
Vom Server erhaltene Antwort:
Test Ergebnis Erluterung
Der Button des User-Managements
sollte nicht vorhanden sein
true Das Web-Element ist wie erwartet nicht da.
Test Ergebnis Erluterung
Die Click-Aktion sollte erfolgreich
sein
false Die Click-Aktion konnte nicht ausgeführt werden, weil der Link/ Button mit der ID
LogoutButton nicht gefunden wurde.
Test Ergebnis Erluterung
Suche den Button zum Öffnen des
Login-Dialogs
true Das Web-Element wurde gefunden
Test Ergebnis Erluterung
Die Click-Aktion sollte erfolgreich
sein
true Die Click-Aktion konnte erfolgreich ausgeführt werden. Es wurde der Button mit der
ID OpenLoginDialogButton geklickt.
Seite 10 von
 15
Konnte das Element finden: LoginDialog
Durchgeführte Tests:
Test 33: Usernamen admin eingeben
Gesendete Anfrage an den Server:
Bestimme Element: LoginDialogUserIDText
Vom Server erhaltene Antwort:
Konnte das Element finden: LoginDialogUserIDText
Durchgeführte Tests:
Test 34: Passwort fuer admin eingeben
Gesendete Anfrage an den Server:
Bestimme Element: LoginDialogPasswordText
Vom Server erhaltene Antwort:
Konnte das Element finden: LoginDialogPasswordText
Durchgeführte Tests:
Test 35: Button zum Ausfuehren des Logins drücken
Gesendete Anfrage an den Server:
Clicke Element: PerformLoginButton
Vom Server erhaltene Antwort:
Konnte das Element finden: PerformLoginButton
Durchgeführte Tests:
Test 36: User-Management-Button finden
Gesendete Anfrage an den Server:
Bestimme Element: OpenUserManagementPageButton
Test Ergebnis Erluterung
Suche den Login-Dialog per ID true Das Web-Element wurde gefunden
Test Ergebnis Erluterung
Bestimme Textfeld für User-ID und
setze admin
true Der Wert konnte gesetzt werden.
Test Ergebnis Erluterung
Bestimme Textfeld für Passwort und
setze 123
true Der Wert konnte gesetzt werden.
Test Ergebnis Erluterung
Die Click-Aktion sollte erfolgreich
sein
true Die Click-Aktion konnte erfolgreich ausgeführt werden. Es wurde der Button mit der
ID PerformLoginButton geklickt.
Seite 11 von
 15
Vom Server erhaltene Antwort:
Konnte das Element finden: OpenUserManagementPageButton
Durchgeführte Tests:
Test 37: User-Management öffnen
Gesendete Anfrage an den Server:
Clicke Element: OpenUserManagementPageButton
Vom Server erhaltene Antwort:
Konnte das Element finden: OpenUserManagementPageButton
Durchgeführte Tests:
Test 38: Den Button zum Löschen des Users test123 finden
Gesendete Anfrage an den Server:
Bestimme Element: UserItemDeleteButtontest123
Vom Server erhaltene Antwort:
Konnte das Element nicht finden: UserItemDeleteButtontest123
Durchgeführte Tests:
Test 39: Neuen User löschen
Gesendete Anfrage an den Server:
Vom Server erhaltene Antwort:
Konnte das Element nicht anklicken, weil es nicht gefunden wurde: UserItemDeleteButtontest123
Durchgeführte Tests:
Test 40: Das Löschen des Users bestätigen
Gesendete Anfrage an den Server:
Bestimme Element: DeleteDialogConfirmButton
Vom Server erhaltene Antwort:
Test Ergebnis Erluterung
Test Ergebnis Erluterung
Test Ergebnis Erluterung
Den Button zum Löschen des Users
test123 finden
false Das Web-Element mit der ID: UserItemDeleteButtontest123 konnte nicht gefunden
werden.
Test Ergebnis Erluterung
Die Click-Aktion sollte erfolgreich
sein
false Die Click-Aktion konnte nicht ausgeführt werden, weil der Link/ Button mit der ID
UserItemDeleteButtontest123 nicht gefunden wurde.
Seite 12 von
 15
Konnte das Element nicht finden: DeleteDialogConfirmButton
Durchgeführte Tests:
Test 41: Bestätige das Löschen des neuen Users
Gesendete Anfrage an den Server:
Vom Server erhaltene Antwort:
Konnte das Element nicht anklicken, weil es nicht gefunden wurde: DeleteDialogConfirmButton
Durchgeführte Tests:
Test 42: User-Management-Button finden
Gesendete Anfrage an den Server:
Bestimme Element: OpenUserManagementPageButton
Vom Server erhaltene Antwort:
Konnte das Element finden: OpenUserManagementPageButton
Durchgeführte Tests:
Test 43: Den User test123 finden
Gesendete Anfrage an den Server:
Bestimme Element: UserItemtest123
Vom Server erhaltene Antwort:
Konnte das Element nicht finden: UserItemtest123
Durchgeführte Tests:
Test 44: Logout Button drücken und nach ID LandingPage suchen
Gesendete Anfrage an den Server:
Vom Server erhaltene Antwort:
Test Ergebnis Erluterung
Das Löschen des Users bestatigen false Das Web-Element mit der ID: DeleteDialogConfirmButton konnte nicht gefunden
werden.
Test Ergebnis Erluterung
Die Click-Aktion sollte erfolgreich
sein
false Die Click-Aktion konnte nicht ausgeführt werden, weil der Link/ Button mit der ID
DeleteDialogConfirmButton nicht gefunden wurde.
Test Ergebnis Erluterung
Suche den Button zum Öffnen des
User-Managements
true Das Web-Element wurde gefunden
Test Ergebnis Erluterung
Der User test123 sollte nicht mehr in
der Liste sein
true Das Web-Element ist wie erwartet nicht da.
Seite 13 von
 15
Konnte das Element nicht anklicken, weil es nicht gefunden wurde: LogoutButton
Durchgeführte Tests:
Test 45: Startseite nochmal abrufen
Gesendete Anfrage an den Server:
Startseite geöffnet
Vom Server erhaltene Antwort:
Konnte Startseite öffnen
Durchgeführte Tests:
Test 46: Login-Dialog-Button öffnen
Gesendete Anfrage an den Server:
Clicke Element: OpenLoginDialogButton
Vom Server erhaltene Antwort:
Konnte das Element finden: OpenLoginDialogButton
Durchgeführte Tests:
Test 47: Usernamen admin eingeben
Gesendete Anfrage an den Server:
Bestimme Element: LoginDialogUserIDText
Vom Server erhaltene Antwort:
Konnte das Element finden: LoginDialogUserIDText
Durchgeführte Tests:
Test 48: Falsches Passwort eingebeben
Gesendete Anfrage an den Server:
Bestimme Element: LoginDialogPasswordText
Vom Server erhaltene Antwort:
Konnte das Element finden: LoginDialogPasswordText
Test Ergebnis Erluterung
Die Click-Aktion sollte erfolgreich
sein
false Die Click-Aktion konnte nicht ausgeführt werden, weil der Link/ Button mit der ID
LogoutButton nicht gefunden wurde.
Test Ergebnis Erluterung
Test Ergebnis Erluterung
Test Ergebnis Erluterung
Bestimme Textfeld für User-ID und
setze admin
true Der Wert konnte gesetzt werden.
Seite 14 von
 15
Durchgeführte Tests:
Test 49: Login-Dialog-Button drücken
Gesendete Anfrage an den Server:
Clicke Element: PerformLoginButton
Vom Server erhaltene Antwort:
Konnte das Element nicht anklicken: PerformLoginButton
Durchgeführte Tests:
Test Ergebnis Erluterung
Setze ein falsches Passwort true Der Wert konnte gesetzt werden.
Test Ergebnis Erluterung
Die Click-Aktion sollte nicht
erfolgreich sein
true Die Click-Aktion ist wie erwartet gescheitert.
Seite 15 von
 15
