# Usa una imagen oficial de Node.js como base
FROM node:18-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia package.json y package-lock.json antes de instalar dependencias
COPY package.json package-lock.json ./

 
RUN npm install

# Copia todo el código fuente al contenedor
COPY . .

# Este  el puerto en el que se ejecutará la aplicación
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
