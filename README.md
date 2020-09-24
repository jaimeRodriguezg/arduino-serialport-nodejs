# arduino-serialport-nodejs

#Subir programa al arduino
*hecho en arduino uno

Conectar el arduino uno y subir el archivo que se encuentra en arduino/contador/contador.ino
Anotar el puerto del arduino para su posterior ejecucion en nodejs


#Para instalar modulos de node

Ingresar en consola:
´npm install´


#Para ejecutar estando dentro de la carpeta del programa

Ingresar en consola
node server/server -p {puerto del arduino}

*si el puerto del arduino es '/dev/ttyACM0' se puede ejecutar el programa como:
npm start o node server/server

para mas informacion, ejecutar:

node server/server help 


#Luego de ejecutarlo abrir el navegador y escribir

localhost:3000
