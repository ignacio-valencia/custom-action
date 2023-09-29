# Usar una imagen base de Node.js
FROM node:14

# Copiar los archivos necesarios al contenedor
COPY . .

# Instalar las dependencias
RUN npm install

# Dar permisos de ejecución al script entrypoint.sh
RUN chmod +x entrypoint.sh

# Definir el punto de entrada para ejecutar el script
ENTRYPOINT ["/entrypoint.sh"]
