# NodeJsRedsSpringGrupal1
Repositorio utilizado para entrega de spring grupal del curso de NodeJS - Tecnológico de Antioquia - Grupo NodeJS Reds

Pasos: 

1) En un carpeta cualquiera se debe clonar el proyecto con el siguiente comando(solo por primera vez):
git clone https://github.com/jdsancheztorres/NodeJsRedsSpringGrupal1.git 

Ejemplo: en la carpeta C:\JoseDanilo\NodeJs\Entregas\ ejecutar el comando.

2) De lo contrario, si ya se tiene el proyecto clonado en su equipo local se debe intentar ejecutar el comando pull
con el fin de descargar cambios, antes de realizar nuevas actualizaciones en dichos archivos. En este caso, se debe
ejecutar el siguiente comando:

git pull

Nota: para ver cambios realizados en el repositorio se puede ejecutar el comando git log

Ejemplo: 
C:\JoseDanilo\NodeJs\Entregas\NodeJsRedsSpringGrupal1>git pull
Already up-to-date.

3) Para subir cambios se debe ejecutar las siguientes instrucciones(luego de haber ejecutado el anterior paso):

git add .
git commit -m "actualización proyecto NodeJS Reds"
git push origin master

Ejemplo:

C:\JoseDanilo\NodeJs\Entregas\NodeJsRedsSpringGrupal1>git add .

C:\JoseDanilo\NodeJs\Entregas\NodeJsRedsSpringGrupal1>git commit -m "actualizaci
ón proyecto NodeJS Reds"
[master d509c7d] actualización proyecto NodeJS Reds
 1 file changed, 26 insertions(+)

Warning: Your console font probably doesn't support Unicode. If you experience s
trange characters in the output, consider switching to a TrueType font such as C
onsolas!

C:\JoseDanilo\NodeJs\Entregas\NodeJsRedsSpringGrupal1>git push origin master
Username for 'https://github.com': jdsancheztorres
Password for 'https://jdsancheztorres@github.com':
Counting objects: 3, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 771 bytes | 385.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0)
To https://github.com/jdsancheztorres/NodeJsRedsSpringGrupal1.git
   9d7cbcb..d509c7d  master -> master

EJECUCIÓN PROYECTO:

Al momento de clonar el proyecto, se debe ejecutar el siguiente comando dentro de la misma carpeta:

npm start

Ejemplo:

C:\JoseDanilo\NodeJs>git clone https://github.com/jdsancheztorres/NodeJsRedsSpri
ngGrupal1.git
Cloning into 'NodeJsRedsSpringGrupal1'...
remote: Enumerating objects: 1086, done.
remote: Counting objects: 100% (1086/1086), done.
remote: Compressing objects: 100% (826/826), done.
remote: Total 1086 (delta 210), reused 1082 (delta 208), pack-reused 0
Receiving objects: 100% (1086/1086), 1.49 MiB | 261.00 KiB/s, done.
Resolving deltas: 100% (210/210), done.

C:\JoseDanilo\NodeJs>dir
 El volumen de la unidad C no tiene etiqueta.
 El número de serie del volumen es: 6E8C-3941

 Directorio de C:\JoseDanilo\NodeJs

08/06/2019  10:14 p. m.    <DIR>          .
08/06/2019  10:14 p. m.    <DIR>          ..
19/05/2019  01:42 a. m.               443 archivo.js
18/05/2019  10:43 p. m.               463 calculo.js
18/05/2019  10:56 p. m.               276 datos.js
18/05/2019  11:26 p. m.               579 datos2.js
19/05/2019  11:17 a. m.               967 datos3.js
08/06/2019  09:37 p. m.    <DIR>          Entregas
08/06/2019  09:10 p. m.    <DIR>          myApp
08/06/2019  10:14 p. m.    <DIR>          NodeJsRedsSpringGrupal1
19/05/2019  12:12 a. m.    <DIR>          node_modules
19/05/2019  12:12 a. m.            14.673 package-lock.json
18/05/2019  02:53 p. m.               153 primero.js
18/05/2019  03:02 p. m.               450 primero2.js
18/05/2019  03:09 p. m.               557 primero3ProcesoNonBlocking.js
18/05/2019  04:21 p. m.               273 primero4Callback.js
19/05/2019  12:02 a. m.                62 promedio.txt
19/05/2019  09:12 p. m.    <DIR>          repositorio
              11 archivos         18.896 bytes
               7 dirs  527.945.154.560 bytes libres

C:\JoseDanilo\NodeJs>cd NodeJsRedsSpringGrupal1

C:\JoseDanilo\NodeJs\NodeJsRedsSpringGrupal1>npm start

> nodejsredsspringgrupal1@0.0.0 start C:\JoseDanilo\NodeJs\NodeJsRedsSpringGrupa
l1
> node ./bin/www

GET / 304 254.557 ms - -
GET /stylesheets/style.css 200 3.724 ms - 119



Finalmente, desde un navegador se debe ejecutar la siguiente URL: http://localhost:3000/





