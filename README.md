MyNotes App - Personal Productivity Mobile
MyNotes es una aplicación móvil moderna para la gestión de notas personales, desarrollada con React Native y Expo. Este proyecto nace como una iniciativa para dominar el desarrollo de aplicaciones móviles nativas, aplicando principios de arquitectura limpia y una experiencia de usuario (UX) fluida.

La aplicación permite a los usuarios capturar ideas rápidamente, organizar sus pensamientos y mantener su información segura directamente en su dispositivo.

✨ Funcionalidades Principales
Gestión Total de Notas: Flujo completo de creación, edición y eliminación de notas.

Sistema de Favoritos: Marca tus notas más importantes para un acceso rápido.

Búsqueda Inteligente: Filtra y encuentra notas específicas en tiempo real.

Persistencia Local: Gracias a AsyncStorage, tus notas se mantienen guardadas incluso si cierras la aplicación o reinicias el teléfono.

Diseño Responsivo: Interfaz adaptada para una visualización óptima en diversos tamaños de pantalla y dispositivos.

🛠️ Stack Tecnológico
Framework: Expo (SDK 55) para un desarrollo ágil.

Core: React Native para renderizado nativo.

Estado: React Hooks (useState, useEffect).

Almacenamiento: AsyncStorage (Persistencia local clave-valor).

Estilos: StyleSheet de React Native (CSS-in-JS).

 Guía de Instalación
Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1. Prerrequisitos
Tener instalado Node.js (LTS).

Instalar la aplicación Expo Go en tu dispositivo móvil (Android / iOS).

2. Clonar y Configurar
Clona el repositorio y entra en la carpeta del proyecto:

Bash
git clone https://github.com/tu-usuario/notas-app.git
cd notas-app
3. Instalar Dependencias
Instala los paquetes necesarios utilizando npm:

Bash
npm install
4. Ejecutar la Aplicación
Inicia el servidor de desarrollo de Expo:

Bash
npx expo start
5. Visualización
Una vez que aparezca el código QR en tu terminal:

Abre la app Expo Go en tu celular.

Escanea el código QR.

¡La aplicación se cargará automáticamente!

📂 Estructura de Carpetas
Plaintext
src/
 ├── components/   # Componentes atómicos y reutilizables.
 ├── screens/      # Pantallas principales (Home, Editor, etc.).
 ├── styles/       # Temas, colores y estilos globales.
 ├── data/         # Lógica de manejo de datos y persistencia.
 └── hooks/        # Lógica de negocio extraída en hooks.
Desarrollado con 💻 por Andrés Felipe Soto Quintero