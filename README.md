
# Proyecto Final: Infraestructura Docker con Monitoreo

**Integrantes:** Ernesto Moreno ceron y sebastian sanchez villa 

## 📋 Descripción
Este proyecto implementa una infraestructura de software containerizada utilizando Docker y Docker Compose. Incluye un servidor Nginx como proxy inverso y balanceador de carga, 3 instancias de un backend en Node.js, y un stack completo de monitoreo (Prometheus, Grafana, Nginx Exporter y cAdvisor).

## 🛠️ Requisitos Previos
* Docker y Docker Compose instalados.
* k6 instalado (para pruebas de carga).
* Sistema operativo macOS (probado en chip Apple Silicon M1).

## 🚀 Cómo levantar la infraestructura
1. Clona este repositorio y entra a la carpeta del proyecto.
2. Ejecuta el siguiente comando en la terminal:
   ```bash
   docker compose up -d --build

