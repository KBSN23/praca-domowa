[BACKEND]
Do testowania komunikacji z backendem, używałem prostej aplikacji napisanej we frameworku express, znaleźć ją można w katalogu /backend.

Aby móc uruchamiać aplikację backendową, należy zainstalować zależności za pomocą polecenia : npm install. (mając zainstalowane środowisko uruchomieniowe nodeJS).
Aby uruchomić aplikację backendową, należy użyć polecenia : node app.js.


[FRONTEND]
Aplikacja napisana z użyciem połączenia React + Redux + Typescript.
Aby zainstalować wszystkie zależności aplikacji, należy użyć polecenia : npm install

Nie jestem pewien czy dobrze zrozumiałem działanie belki mówiącej o poziomie naładowania. Stan naładowania, znajduje się w
pliku frontend/src/store/batterySlice.ts w linijce 8. Na potrzeby ćwiczenia wartość ta jest hardcodowana jako 100, w rzeczywistości, byłaby prawdopodobnie pobierana z backendu.

Aby uruchomić lokalnie aplikację, należy użyć polecenia : npm start,
uwaga, bez wcześniej uruchomionego testowego serwera /backend/app.js, jakakolwiek interakcja z widgetem zakończy się niepowodzeniem.



[TESTOWANIE]
Testy jednostkowe napisałem z użyciem bibliotek react-testing-library i jest. Testy end-to-end tworzyłem za pomocą biblioteki cypress.

aby uruchomić testy jednostkowe : npm run test:unit
aby uruchomić testy end-to-end : npm run test:e2e