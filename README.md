# Memoteca

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## figma
https://www.figma.com/file/YTSUBbe7Zgwx3L567TAzTc/Memoteca---Angular%3A-Come%C3%A7ando-com-o-Framework?type=design&node-id=148-26&mode=design

## Angular CLI
npm install -g @angular/cli@14.0.0

## Backend
npm init -y
## Instalar Json Server
npm i json-server
## Cria um arquivo db.json
{
    "pensamentos": [
        {
            "id": 1,
            "conteudo": "Que bom que vc veio",
            "autoria": "Nay",
            "modelo": "modelo1"
        },
        {
            "id": 2,
            "conteudo": "Estudando Angular",
            "autoria": "Dev Alura",
            "modelo": "modelo2"
        },
        {
            "id": 3,
            "conteudo": "Angular é o melhor'",
            "autoria": "Dev Alura",
            "modelo": "modelo3"
        }
    ]
}
## conf packger Json
"start": "json-server --watch db.json --port 3000"
## Start backend
npm start






