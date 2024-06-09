# Docker

Docker es una plataforma de código abierto que permite a los desarrolladores automatizar el despliegue, escalado y administración de aplicaciones dentro de contenedores. Un contenedor es una unidad de software que empaqueta el código de una aplicación junto con todas sus dependencias, librerías y configuraciones necesarias para que pueda ejecutarse de manera consistente en cualquier entorno.

## Características principales de Docker:

- Portabilidad: Los contenedores pueden ejecutarse en cualquier sistema que tenga Docker instalado, independientemente del entorno subyacente (Linux, Windows, etc.). Esto facilita la transferencia de aplicaciones entre diferentes entornos de desarrollo, pruebas y producción sin que haya problemas de compatibilidad.

- Aislamiento: Cada contenedor se ejecuta en un entorno aislado, lo que significa que no interfieren entre sí. Esto mejora la seguridad y permite ejecutar múltiples aplicaciones en el mismo host sin conflictos.

- Ligereza: Los contenedores son más ligeros que las máquinas virtuales porque comparten el mismo sistema operativo base y solo contienen lo necesario para ejecutar la aplicación. Esto permite un uso más eficiente de los recursos del sistema.

- Escalabilidad: Docker facilita el escalado de aplicaciones mediante la creación rápida de múltiples instancias de contenedores, lo cual es ideal para arquitecturas de microservicios y aplicaciones distribuidas.

- Eficiencia en el desarrollo y despliegue: Docker permite a los desarrolladores crear entornos de desarrollo replicables que coinciden con los entornos de producción, lo que reduce los problemas de "funciona en mi máquina" y acelera el ciclo de desarrollo.

## Componentes de Docker:

- Docker Engine: Es el motor de Docker, una aplicación cliente-servidor que comprende un demonio de larga ejecución (dockerd), una API REST que especifica interfaces que los programas pueden usar para hablar con el demonio, y una interfaz de línea de comandos (docker).

- Docker Hub: Es un servicio en la nube de Docker que permite almacenar y distribuir imágenes de contenedores. Los desarrolladores pueden compartir imágenes de sus aplicaciones y usar imágenes base públicas o de terceros.

- Docker Compose: Una herramienta para definir y ejecutar aplicaciones Docker multi-contenedor. Con un archivo YAML, los usuarios pueden especificar los servicios, redes y volúmenes necesarios para la aplicación.

- Docker Swarm: Es el orquestador nativo de Docker para la administración y escalado de contenedores. Permite agrupar múltiples instancias de Docker en un clúster, coordinando los contenedores distribuidos en los nodos del clúster.

En resumen, Docker es una tecnología que ha revolucionado el desarrollo y despliegue de software al proporcionar una manera eficiente, reproducible y escalable de gestionar aplicaciones mediante contenedores.

## Usos de Docker

Docker puede ser utilizado para una amplia variedad de casos en el desarrollo y despliegue de software. Aquí tienes algunas de las aplicaciones más comunes:

1. Desarrollo de Software
   Entornos de Desarrollo Consistentes: Docker permite crear un entorno de desarrollo que es idéntico al de producción, eliminando el problema de "funciona en mi máquina". Los desarrolladores pueden compartir configuraciones de Docker con sus equipos para asegurarse de que todos trabajen en un entorno uniforme.
   Aislamiento de Dependencias: Cada contenedor puede tener sus propias dependencias y librerías, evitando conflictos con otras aplicaciones.
2. Despliegue y Escalabilidad
   Despliegue Continuo: Docker facilita la integración y despliegue continuo (CI/CD). Las imágenes Docker pueden ser construidas y probadas automáticamente, y luego desplegadas en producción sin necesidad de configuraciones adicionales.
   Escalabilidad Fácil: Con Docker, puedes escalar rápidamente tu aplicación creando múltiples instancias de contenedores y balanceando la carga entre ellos. Esto es especialmente útil para aplicaciones basadas en microservicios.
3. Microservicios
   División de Aplicaciones Monolíticas: Docker es ideal para dividir aplicaciones monolíticas en microservicios, permitiendo a los equipos trabajar en diferentes componentes de la aplicación de manera independiente.
   Despliegue Independiente: Cada microservicio puede ser desplegado, escalado y actualizado independientemente de los demás.
4. Pruebas y QA
   Pruebas Automatizadas: Docker permite ejecutar pruebas automatizadas en un entorno controlado. Puedes crear contenedores efímeros para pruebas que se destruyen una vez completadas, asegurando que cada prueba se realice en un entorno limpio.
   Entornos de Pruebas Reproducibles: Facilita la creación de entornos de prueba que son consistentes y reproducibles, reduciendo la variabilidad en los resultados de las pruebas.
5. Aplicaciones Legacy
   Migración a Nuevas Infraestructuras: Docker permite encapsular aplicaciones legacy en contenedores, facilitando su migración a nuevas infraestructuras sin necesidad de modificar el código.
6. Desarrollo y Pruebas en la Nube
   Plataformas en la Nube: Docker es compatible con muchas plataformas de nube como AWS, Azure y Google Cloud. Puedes desarrollar y probar aplicaciones localmente en Docker y luego desplegarlas en la nube con mínima configuración adicional.
   Entornos Multi-Cloud: Facilita el despliegue de aplicaciones en múltiples proveedores de nube, ofreciendo flexibilidad y evitando el vendor lock-in.
7. Big Data y Machine Learning
   Contenedores para Análisis de Datos: Docker puede ser utilizado para crear entornos de análisis de datos con herramientas específicas, facilitando la replicación de entornos complejos.
   Modelos de Machine Learning: Los modelos de machine learning pueden ser empaquetados junto con sus dependencias en contenedores, asegurando que se ejecuten de manera consistente en cualquier entorno.
8. Educación y Experimentación
   Entornos de Aprendizaje: Docker es una excelente herramienta para crear entornos de aprendizaje y experimentación, permitiendo a los estudiantes y profesionales probar nuevas tecnologías y configuraciones sin riesgo de dañar su sistema principal.
9. Seguridad
   Aislamiento de Aplicaciones: Docker proporciona un nivel de aislamiento para las aplicaciones, mejorando la seguridad al limitar el impacto de vulnerabilidades y exploits a un contenedor específico.
   En resumen, Docker es una herramienta muy versátil que puede ser utilizada para mejorar la consistencia, escalabilidad, eficiencia y seguridad en el desarrollo y despliegue de aplicaciones.

## Instalacion de Docker

La instalación de Docker puede variar según el sistema operativo que estés utilizando. A continuación, te proporciono una guía para instalar Docker en los sistemas operativos más comunes: Ubuntu, Windows y macOS.

### Instalación de Docker en Ubuntu / Debian / Mint

(este es mi caso) Tenga en cuenta que generalmente usar linea de comandos

1. Actualizar el índice de paquetes apt:

```bash
sudo apt-get update

```

2. Instalar paquetes necesarios

```bash
sudo apt-get install apt-transport-https ca-certificates curl software-properties-common

```

3. Agregar la clave GPG de Docker:

```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

4. Agregar el repositorio de Docker:

```bash
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

```

5. Actualizar el índice de paquetes apt de nuevo:

```bash
 sudo apt-get update
```

6. Instalar Docker

```bash
sudo apt-get install docker-ce
```

7. Verificar la instalacion:

```bash
sudo systemctl status docker

```

8. (opcional) Añadir tu usuario al grupo de docker:

```bash
sudo usermod -aG docker ${USER}

```

Nota: Debes cerrar sesión y volver a iniciarla para que los cambios tengan efecto.

### Instalación de Docker en Windows

1. Descargar Docker Desktop:

- Ve a la página de Docker `https://www.docker.com/get-started/` y descarga el instalador para Windows.

2. Ejecutar el instalador:

- Ejecuta el archivo descargado y sigue las instrucciones del asistente de instalación.

3. Reiniciar el sistema:

- Es posible que se te solicite reiniciar el sistema durante el proceso de instalación.

4. Iniciar Docker Desktop:

- Después de la instalación, inicia Docker Desktop desde el menú de inicio.

### Verificar la instalación:

Ejecuta una terminal powershell y ejecuta

```bash
docker --version

```

##############################

```bash

```

```bash

```
