Live version https://wiecek-k.github.io/Jezdzcy-Szopokalipsy/

Projekt grupowy mający na celu przy użyciu HTML/CSS stworzyć stronę na podstawie dostarczonej makiety


## Zalezności

Na komputerze musi być zainstalowana LTS-wersja [Node.js](https://nodejs.org/en/).

## Przed rozpoczęciem pracy

Jeden raz na projekt zainstalować wszystkie zalezności.

```shell
npm ci
```

### Praca

Włączyć tryp pracy.

```shell
npm run dev
```

W przeglądarce przejść na [http://localhost:1234](http://localhost:1234).

## Pliki i folderzy

- Wszystkie partials plików styłów powinny być w folderze `src/sass` i importować się w
  `src/sass/main.scss`
- Zdjęcia dodawajcie w folder `src/images`, przed tym zoptymizujcie te zdjęcia które dodajecie.
  Program po prostu kopiuje wykorzystane zdjęcia aby system nie musiał optymizować je, bo na słabych
  komputerach to moze zająć duzo czasu.
