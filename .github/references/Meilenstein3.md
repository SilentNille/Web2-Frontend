# ÜBUNG 2 – FINALE ABGABE

LV WEB-ENGINEERING II
THEMA REST-SERVER FÄLLIGKEIT SIEHE MOODLE
FINALE ABGABE
Grundlage für die Umsetzung und Benotung dieser finalen Abgabe von Übung 2 sind die „Allgemeinen
Regelungen für Übungsaufgaben“ sowie die Aufgabenstellung für Übung 2, die Sie beide im Moodle finden.
Die funktionalen Anforderungen und allgemeinen Anforderungen werden vor allem in der Aufgabenstellung von Übung 2 beschrieben. Nachfolgend gibt es noch einige Aspekte, die Sie bei der finalen Abgabe
beachten sollten.
FUNKTIONALE ANFORDERUNGEN
Für die finale Abgabe sollen nun alle Anforderungen der Aufgabenstellung umgesetzt werden. Das bedeutet insbesondere, dass die Verwaltung der Studiengänge und Studienbewerbungen ergänzt werden.
Für Studiengänge sollen alle CRUD-Methoden, also das Anlegen, Auflisten, Editieren und Löschen umgesetzt werden. Für Studienbewerbungen reicht das Auflisten der Studienbewerbungen. Das Anlegen von
Studienbewerbungen erfolgt über die Liste der Studiengänge.
Studiengangmanagement
Der Button zum Öffnen der Studiengangverwaltung sollte die ID „OpenDegreeCourseManagementPageButton“ haben.
Wenn das Studiengang-Management angezeigt wird, sollte die Liste mit den vorhandenen Studiengängen angezeigt werden. Über IDs können die verschiedenen Funktionen zum Verwalten der Studiengänge
identifiziert werden.
Abbildung 1: Studiengang-Management-Seite
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
Abbildung 2: Seite zum Anlegen von Studiengang
Damit die Felder des Formulars gefüllt werden können und der Studiengang angelegt werden kann,
müssen die folgenden IDs enthalten sein:
• „DegreeCourseManagementPageCreateComponent“: Diese ID zeigt an, dass die Komponente
zum Anlegen eines Studiengangs angezeigt wird. Hinweis: die ID DegreeCourseManagementPageListComponent darf jetzt nicht mehr zu sehen sein.
• „CreateDegreeCourseComponentEditName“: ID des Eingabefelds für den Namen
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
Abbildung 3: Komponenten zu Ändern eines Studiengangs
Wenn der Editier-Dialog für einen Studiengang angezeigt wird, sollten automatisch alle Daten in den
Formular-Feldern eingetragen sein. Das Formular sollte die folgenden IDs enthalten:
• „DegreeCourseManagementPageEditComponent“: Diese ID zeigt an, dass die Komponente zum
Editieren eines Studiengangs angezeigt wird.
• „EditDegreeCourseComponentEditName“
• „EditDegreeCourseComponentEditShortName“

• „EditDegreeCourseComponentEditUniversityName“
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
Wenn der Button zum Löschen einer Entität (Studiengang, etc.) gedrückt wird, sollte zunächst ein Dialog
zum Bestätigen des Löschens angezeigt werden. Der Dialog sollte ungefähr wie folgt aussehen:
Abbildung 4: Beispiel Löschen-Dialog für einen Studiengang
Der Löschen-Dialog sollte die folgenden IDs haben:
• Der Löschen-Dialog sollte eine ID haben, die sich wie folgt zusammensetzt:
o „DeleteDialog“
o Art der Entität (z.B. User, DegreeCourse, DegreeCourse Application)
o Unique Identifier von der Entität (beim User die User-ID, ansonsten der Unique Identifier)
o Beispiele: „DeleteDialogUsermanfred“, „DeleteDialogDegreeCourse234234234234“
• Button zum Ausführen des Löschens: „DeleteDialogConfirmButton“
• Button zum Abbrechen des Löschens: „DeleteDialogCancelButton“
Studienbewerbung über den Studiengang anlegen
Es bietet sich an, Studienbewerbungen über den Studiengang anzulegen, weil dann der Studiengang
nicht mehr über einen Selektor ausgewählt werden muss. Daher sollte es im Studiengang einen Button
zum Anlegen von Studienbewerbungen geben (siehe Screen Shot oben). Der Button sollte die ID
„CreateDegreeCourseApplicationForDegreeCourse“ sowie der ID des Studiengangs (z.B. „CreateDegreeCourseApplicationForDegreeCourse234234234234“) haben.

Abbildung 5: Anlegen von Bewerbung über den Studiengang
Anschließend sollte der Dialog zum Anlegen einer Studienbewerbung für den betreffenden Studiengang
angezeigt werden.
Abbildung 6: Anlegen von Studienbewerbung über den Studiengang
Der Studiengang sollte bereits vorbelegt sein. Zum Anlegen der Studienbewerbung müssen nur noch die
User-ID als Textfeld, das Jahr und das Semester eingegeben werden.
Das Feld für die User-ID sollte nur bei einem Administrator editierbar sein, da nur ein Administrator Bewerbungen für beliebige User anlegen darf. Bei Nicht-Administratoren sollte das Feld mit der User-ID
mit der User-ID des aktuell eingeloggten Users vorbelegt sein und nicht editierbar sein.
Die Eingabe des Semesters (Sommer- oder Wintersemester) sollte über eine Selection-Box umgesetzt
werden. Die Selection-Box sollte wie folgt umgesetzt werden:

Abbildung 7: Umsetzen der Selection-Box für das Semester
Zum Eingeben der Studienbewerbungsdaten sollten die folgenden Felder vorhanden sein:
• „CreateDegreeCourseApplicationEditUserID“: ID des Eingabefelds für die User-ID
• „CreateDegreeCourseApplicationEditTargetPeriodYear“: ID des Eingabefelds für die User-ID
• „CreateDegreeCourseApplicationEditTargetPeriodName“: ID des Eingabefelds für die User-ID
Der Button zum Anlegen der Studienbewerbung sollte die ID „CreateDegreeCourseApplicationCreateButton“ haben.
Studienbewerbungen-Management
Der Button zum Öffnen der Studiengangverwaltung sollte die ID „OpenDegreeCourseApplicationManagementPageButton“ haben.
Wenn das Studienbewerbung-Management angezeigt wird, werden die Studienbewerbungen angezeigt.
Über IDs können die verschiedenen Funktionen zum Verwalten der Studienbewerbungen identifiziert
werden.
Abbildung 8: Studiengang-Management-Seite
Auf der Studienbewerbung-Management-Seite sollten die folgenden IDs enthalten sein:
• „DegreeCourseApplicationManagementPageListComponent“: diese ID zeigt an, dass derzeit die
Studienbewerbungsliste angezeigt wird.
• Für jede Studienbewerbung sollte es eine Komponente mit den folgenden IDs geben

o Die Studienbewerbung-Komponente sollte eine ID haben, die sich aus „DegreeCourseApplicationItem“ und der Studienbewerbung-ID zusammensetzt (z.B. für eine Studienbewerbung mit der ID 123123: „DegreeCourseApplicationItem123123“)
o Für die ausgegebenen Angaben zur Studienbewerbung sollten die IDs „ApplicantUserID“, „DegreeCourseName“, „TargetPeriodYear“, „TargetPeriodShortName“ sowie „UniversityShortName“ verwendet werden.
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
o Die ID der Studienbewerbung
• Beispiel: „DeleteDialogDegreeCourseApplication234234234“
• Button zum Ausführen des Löschens: „DeleteDialogConfirmButton“
• Button zum Abbrechen des Löschens: „DeleteDialogCancelButton“
ALLGEMEINE ANFORDERUNGEN
Es gelten die gleichen allgemeinen Anforderungen wie bei den anderen Meilensteinen zuvor. Achten Sie
bei den Oberflächenkomponenten, dass die Rechtevorgaben von Übung 1 eingehalten werden.
ZUSATZLEISTUNGEN
In der finalen Abgabe können Sie Zusatzleistungen umsetzen und sich anrechnen lassen. Es können dafür bis zu 20 Punkte angerechnet werden. Die möglichen Zusatzleisten entsprechen weitgehend denen,
die es bei Übung 1 gab. Eine volle Anrechnung der Zusatzpunkte setzt voraus, dass die Web-Oberfläche
der Funktionen gut umgesetzt ist.
• Editieren von Studienbewerbungen: 2-4 Zusatzpunkte (je nach Umsetzung)
• Nachrichten an andere User: Versenden von E-Mails oder Nachrichten von Usern an andere User: je nach Umfang der Umsetzung 2-5 Zusatzpunkte
• Registrierung: Nutzer können sich mit ihrer E-Mail-Adresse registrieren. An den User wird dann
eine E-Mail mit einem Aktivierungslink geschickt. Wenn der User dann den Aktivierungslink anklickt, wird der Account aktiviert. Anschließend kann sich der User einloggen.
Wenn alle Aspekte inklusive der E-Mail umgesetzt sind, können bis zu 5 Zusatzpunkte angerechnet werden. Hinweis: Ein einfaches Anlegen von Usern ohne die Aktivierung über einen Rest-Call
kann nicht als Registrierung angerechnet werden.
• Newsletter: Sie können das Verteilen von Newslettern oder anderen Benachrichtigungen an
ausgewählte User umsetzen. Je nach Umfang der Umsetzung können bis zu 5 Zusatzpunkte angerechnet werden.

• Bilder-Upload: Wenn zusätzlich zu den Texten (z.B. in Forum-Nachrichten) auch Bilder hochgeladen werden, können bis zu 5 Zusatzpunkte angerechnet werden.
• Paging- oder Suchfunktionen: Wenn Suchfunktionen (z.B. beim User-Management oder den Foren) umgesetzt werden oder ein Paging-Mechanismus, können bis zu 5 Zusatzpunkte angerechnet werden.
• Front-end-Tests mit Selenium oder TestCafe: Wenn Sie automatisierte End-to-End-Tests umsetzen, können je nach Qualität und Umfang der Tests hierfür bis zu 8 Zusatzpunkte angerechnet
werden.
• Lokal Filterfunktion: In Ergänzung zu der Suche auf dem Server kann auch eine lokale Suche in
den Einträgen, die es schon im Client gibt, umgesetzt werden. Hierfür können bis zu 3 Zusatzpunkte angerechnet werden.
• Umsetzung von weiteren Entitäten: Wenn weitere Entitäten über die Web-Oberfläche verwaltet werden können, können je nach Qualität der Umsetzung bis zu 5 Zusatzpunkte je Entität angerechnet werden.
Für ein sehr gutes Design der Web-Seite können bis zu 10 Zusatzpunkte berechnet werden. Das setzt
jedoch die Umsetzung der geforderten funktionalen Anforderungen voraus sowie die grafisch ansprechende Umsetzung der Funktionen.
Anmerkung: Es können nur Zusatzpunkte vergeben werden für Implementierungen, die nicht in meinen
Vorlesungsfolien oder -videos beschrieben werden!
Das sind nur einige Vorschläge für Zusatzleistungen, die Sie umsetzen können. Sollten Sie noch andere
Ideen für Zusatzleistungen haben, die besser zu Ihrer Webseite passen, können Sie mir diese per E-Mail
vorschlagen. Ich gebe Ihnen dann eine Rückmeldung, ob das angerechnet werden kann.
Beschreiben Sie Ihre Zusatzleistungen in einem separaten Dokument. Erläutern Sie in dem Dokument
Ihre Zusatzleistungen kurz aber gut verständlich. Ergänzen Sie ihre Beschreibung gegebenenfalls mit
Screen Shots.
ABGABE
Bitte packen Sie den Source-Code der React-Anwendung in einer ZIP-Datei. Entfernen Sie vorher das
Verzeichnis "node_modules". Laden Sie die Zip-Datei zum Fälligkeitstermin hoch. Wenn Sie Zusatzleistungen erbracht haben, beschreiben Sie diese in einem PDF-Dokument und laden Sie das Dokument
ebenfalls hoch.
ABNAHME
Wie bei allen Abgaben zuvor wird auch dieser Meilenstein über automatische Funktionstests geprüft.
Darüber hinaus wird auch geprüft, ob die Projektstruktur wie vorgegeben umgesetzt wurde.
Wenn Sie Zusatzleistungen erbracht haben, ist eine persönliche Abnahme notwendig. Bitte kommen Sie
hierfür in den Übungen auf mich zu. Die persönliche Abnahme wird ca. 20-30 Minuten dauern.
Viel Erfolg!
