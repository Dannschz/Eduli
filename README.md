# Eduli
Sistema de educación en linea

## Requerimientos
Node 12.14.0 https://nodejs.org/es/
####
Npm 6.14.5
####
Git https://git-scm.com/

## Clonar o descargar repositorio
### Clonar con SSH
En terminal o git bash escribir el siguinte comando:
###
git clone git@github.com:strcoder/Eduli.git
### Clonar con HTTPS
En terminal o git bash escribir el siguinte comando:
###
git clone https://github.com/strcoder/Eduli.git
### Descargar
Dar click en el boton codigo y descargar el zip

## Instalar dependencias
Ya que el repositorio haya clonado o descargado correctamente en terminal debera posicionarse en la carpeta raíz del proyecto
Ya posicionado correectamente en la raíz del proyecto escribir el siguiente comando
###
npm install && npm install -D

## Variables de entorno 

Ya que las dependencias sean instaladas correctamente debera asignar las variables de entorno para que el proyecto funcione correctamente
Las variables de entorno estan en el archivo 

### .env.example

Lo que se debera hacer es crear un nuevo archivo llamado .env en el cual debera poner las variables que se encuentre en el .env.example

### .env

ESto debera ir dentro del archivo .env

###

PORT=3000
ENV=development

API_URL=https://eduliapi.vercel.app
ADMIN_API_KEYS_TOKEN=2f90df25038c836a029b881674c9814ff05feb500a82f83cd88d14b77d558d07

## Scripts diponibles

UNa vez terminadas las configuraciones podra correr los siguientes scripts para correr el proyecto

### npm run start

Correra el programa con node en el modo que se le defina en la variable de entorno ENV 

### npm run start:dev

Correra el programa con nodemon en modo que se le defina en la variable de entorno ENV(Hot reload)

### npm run build

Corre las configuraciones para el proyecto en modo producción (En este caso la variable de entono ENV deberá de ser igual a production)(ENV= production)

### npm run lint 

Con este comando eslint buscara problemas dentro del codigo y de acuerdo con las configuraciones que se le definal dentro del archivo .eslintrc e intentarra solucionarlo para evitar problemas a la hora de correr el proyecto
