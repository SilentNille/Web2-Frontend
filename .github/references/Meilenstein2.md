# ÜBUNG 2, MEILENSTEIN 2 - VORGABEN

Grundlage für die Umsetzung und Benotung dieses Meilensteins sind die „Allgemeinen Regelungen für
Übungsaufgaben“ sowie die Aufgabenstellung für Übung 2, die Sie beide im Moodle finden.
Die Vorgaben für Meilenstein 1 gelten auch für diesen Meilenstein. Sollten Sie die Anforderungen von
Meilenstein 1 bei der letzten Abgabe nicht alle erfüllt haben, müssen sie zu diesem Meilenstein umgesetzt sein.
In diesem Dokument werden sowohl die funktionalen als auch allgemeinen Anforderungen an den Meilenstein 2 von Übung 2 weiter detailliert. Bitte beachten Sie, dass alle nachfolgenden Vorgaben exakt
eingehalten werden müssen, weil viele Aspekte über automatisierte Tests geprüft werden.
Für Abweichungen von den funktionalen Anforderungen gibt es bis zu 15 Abzugspunkte. Darüber hinaus
werden Abzugspunkte berechnet, wenn die allgemeinen Anforderungen nicht eingehalten werden oder
Korrekturen am Code erforderlich sind. Die Abzugspunkte orientieren sich an dem Aufwand der notwendig wäre, um das Problem zu beheben.
Sollte es grundlegende Probleme mit der abgegebenen Lösung geben, müsste auch für diesen Meilenstein eine persönliche Abnahme durchgeführt werden.
FUNKTIONALE ANFORDERUNGEN
In diesem Meilenstein sollen Sie das User-Management für Ihre Web-Anwendung umsetzen. Es sollen
alle in der Aufgabenstellung beschriebenen Funktionen für das User-Management umgesetzt werden
(Anlegen, Ändern und Löschen von Usern).
Die Funktionen des User-Managements werden über automatisierte Tests geprüft. Damit diese Tests
ausgeführt werden können, müssen die dafür notwendigen Buttons und Texteingabefelder entsprechende IDs haben. Daher sollten in Ihrer Web-Anwendungen die folgenden IDs enthalten sein.
Hinweis: Die vorgegebenen IDs des letzten Meilensteins müssen weiterhin vorhanden sein.
Button zum Öffnen User-Managements
Wenn nach dem Login die Startseite dargestellt wird, muss es auf der Seite einen Button geben, mit dem
das User-Management geöffnet werden kann. Dieser Button darf nur bei Usern angezeigt werden, die
auch Administrator sind. Der Button kann ein Link im Top-Menü, in einem Acitivity-Bar oder anderen
Menü sein. Wichtig ist, dass der Button die ID „OpenUserManagementPageButton“ hat.
<LinkContainer to="/userManagement" id="OpenUserManagementPageButton">
 <i className="fa fa-user mr-2 fa-fw activityBarItem"></i>
</LinkContainer>
Wenn das User-Management geöffnet wurde, muss es auf der Seite ein Tag mit der ID „UserManagementPage“ geben. Dieses Tag ist wichtig, damit die Tests prüfen können, ob das User-Management geöffnet wurde.
Die Rechtevorgaben von Übung 1 gelten auch für Übung 2. Das bedeutet, dass Button zum Öffnen des
User-Managements nur sichtbar sein darf, wenn der eingeloggte User ein Administrator ist.
Button zum Öffnen der Startseite
Wenn man das User-Management geöffnet hatte, muss es auch die Möglichkeit geben, zurück zur Startseite zu kommen. Der Button kann ein Link im Top-Menü, in einem Acitivity-Bar oder anderen Menü
sein. Wichtig ist, dass der Button die ID „OpenStartPageButton“ hat. Dieser Button muss immer für eingeloggte User sicherbar sein.
<LinkContainer to="/" id="OpenStartPageButton">
<i className="fa fa-home mr-3 fa-fw activityBarItem"></i>
</LinkContainer>
IDs von User-Komponenten
Entsprechend der Aufgabenstellung 2 sollten die User in einer Liste dargestellt werden.
Abbildung 1: User-Management-Seite
Auf der User-Management-Seite sollten die folgenden IDs enthalten sein:
• „UserManagementPageCreateUserButton“: ID des Buttons, mit dem ein neuer User angelegt
werden kann.
• Damit die User auf der Seite gefunden werden können, müssen die User-Komponenten eine eindeutige ID haben. Für jeden User sollte es eine Komponente mit den folgenden IDs geben
o Zur Identifikation der User-Komponente sollte diese eine ID haben, die sich aus „UserItem“ und der User-ID zusammensetzt (z.B. für den User manfred: „UserItemmanfred“)
o Der Button zum Editieren des Users setzt sich aus „UserItemEditButton“ und der User-ID
zusammen (z.B. für den User manfred: „UserItemEditButtonmanfred“)
o Der Button zum Löschen des Users setzt sich aus „UserItemDeleteButton“ und der UserID zusammen (z.B. für den User manfred: „UserItemDeleteButtonmanfred“)
const id = "UserItem" + user.id;
return (
 <UserComponent id={id} key={user.id} user={user}
 onClick={openEditUserModal} deleteUser={this.deleteUser} />
 )
Button zum Anlegen eines Users
Zum Anlegen eines Users wird ein Button mit der ID „UserManagementPageCreateUserButton“ gedrückt.
<i id="UserManagementPageCreateUserButton" className="fa fa-plus-circle mr-3 fa-fw fa-2x"
 onClick={this.openCreateUserModal}></i>
Nach dem Drücken dieses Buttons wird ein Formular angezeigt, in dem ein neuer User angelegt werden
kann.
Damit die Felder des Formulars gefüllt werden können und der User angelegt werden kann, müssen die
folgenden IDs enthalten sein:
• „UserManagementPageCreateComponent“: Diese ID zeigt an, dass die Komponente zum Anlegen eines Users angezeigt wird.
• „CreateUserComponentEditUserID“: ID des Eingabefelds für die User-ID
• „CreateUserComponentEditFirstName“: ID des Eingabefelds für den Vornamen
• „CreateUserComponentEditLastName“: ID des Eingabefelds für den Nachnamen
• „CreateUserComponentEditPassword“: ID des Eingabefelds für das Passwort
• „CreateUserComponentEditIsAdministrator“: ID des Eingabefelds, mit dem der User zum Administrator gemacht werden kann
• „CreateUserComponentCreateUserButton“: ID des Buttons, um den User anzulegen
Wenn der Button zum Anlegen des Users gedrückt wird, sollte die Anwendung automatisch wieder zur
Liste wechseln. Der angelegte User sollte dann in der Liste zu sehen sein.
Bei einem Textfeld wird beispielsweise die ID wie folgt festgelegt:
<Form.Control id="CreateUserComponentEditUserID" type="text" placeholder="User ID" name="username"
onChange={this.handleSubmit} />
Button zum Editieren eines Users
Entsprechend der Aufgabenstellung für Übung 2 sollte es bei jedem User einen Button zum Editieren des
Users geben. Wenn der Button zum Editieren eines Users gedrückt wurde, wird ein Formular angezeigt,
in dem die Felder zum Editieren der User-Daten enthalten sind. Dieses Formular kann ein modaler Dialog sein oder in der Seite eingebettet sein.
Abbildung 2: Komponenten zu Ändern eines Users
Wenn der Editier-Dialog für einen User angezeigt wird, sollten automatisch alle Daten, außer das Passwort, des Users in den Formular-Feldern eingetragen sein. Damit die Felder des Formulars gefüllt werden können und der User angelegt werden kann, müssen die folgenden IDs enthalten sein:
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
Wenn der Button zum Speichern des Users gedrückt wird, sollte eine Nachricht angezeigt werden, dass
der User gespeichert wurde (das ist jedoch optional und muss nicht umgesetzt werden). Wenn man zu
der Liste zurückgeht, sollte der User mit den geänderten Daten angezeigt werden.
Löschen eines Users
Wenn der Button zum Löschen eines Users gedrückt wird, sollte zunächst ein Dialog zum Bestätigen des
Löschens angezeigt werden. Der Dialog sollte ungefähr wie folgt aussehen:
Abbildung 3: Beispiel Löschen-Dialog für eine Studienbewerbung
Der Löschen-Dialog sollte die folgenden IDs haben:
• Der Löschen-Dialog sollte eine ID haben, die sich wie folgt zusammensetzt:
o „DeleteDialogUser“
o Die User-ID
o Beispiel: „DeleteDialogUsermanfred“
• Button zum Ausführen des Löschens: „DeleteDialogConfirmButton“
• Button zum Abbrechen des Löschens: „DeleteDialogCancelButton“
ALLGEMEINE ANFORDERUNGEN
Es gelten die gleichen allgemeinen Anforderungen aus Meilenstein 1. Achten Sie bei den Oberflächenkomponenten, dass die Rechtevorgaben von Übung 1 eingehalten werden.
