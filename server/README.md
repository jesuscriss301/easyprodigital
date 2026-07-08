# Backend para guardar formularios RAG

## Requisitos
- MySQL Server
- Node.js 20+

## Crear la base de datos y tabla

```sql
CREATE DATABASE IF NOT EXISTS easyprodigital;
USE easyprodigital;

CREATE TABLE IF NOT EXISTS rag_forms (
  id INT AUTO_INCREMENT PRIMARY KEY,
  payload JSON NOT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
```

## Variables de entorno

```bash
export DB_HOST=localhost
export DB_PORT=3306
export DB_USER=root
export DB_PASSWORD=tu_password
export DB_NAME=easyprodigital

# Opcional: envío automático de correo de agradecimiento
export SMTP_HOST=smtp.tudominio.com
export SMTP_PORT=587
export SMTP_SECURE=false
export SMTP_USER=tu_usuario_smtp
export SMTP_PASS=tu_password_smtp
export MAIL_FROM=no-reply@tudominio.com
export MAIL_TO=info@easyprodigital.com
```

## Ejecutar

```bash
cd server
npm install
npm start
```

El formulario enviará los datos a `/api/rag-form`.

## Documentación Swagger

Una vez iniciado el servidor, puedes abrir:

- http://localhost:3001/api/docs
- http://localhost:3001/api/docs.json
