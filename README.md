📝 Notes App
Aplicación móvil de notas desarrollada con React Native y Expo como proyecto de práctica y aprendizaje.
La aplicación permite crear, editar, eliminar, buscar y marcar notas favoritas, además de persistir la información localmente en el dispositivo.

✨ Funcionalidades


✅ Crear notas


✅ Editar notas


✅ Eliminar notas


✅ Marcar favoritas


✅ Buscar notas


✅ Persistencia local con AsyncStorage


✅ Navegación entre pantallas


✅ Estado global con Zustand


✅ Animaciones con Reanimated


✅ Build APK Android con EAS Build



📱 Tecnologías utilizadas


React Native


Expo


TypeScript


Zustand


Expo Router


AsyncStorage


React Native Reanimated


EAS Build



📂 Estructura del proyecto
app/ ├── index.tsx └── note/      └── [id].tsxsrc/ ├── components/ ├── hooks/ ├── store/ └── styles/

🚀 Instalación
1. Clonar repositorio
git clone https://github.com/AFSoto/notas-app-react-native.git

2. Instalar dependencias
npm install

3. Ejecutar proyecto
npx expo start

📦 Generar APK Android
La aplicación utiliza:
EAS Build
Configurar EAS
eas build:configure

Generar APK
eas build -p android --profile preview

🧠 Conceptos aprendidos
Durante el desarrollo de esta app se trabajó con:


Hooks personalizados


Estado global


Persistencia local


Navegación dinámica


Componentes reutilizables


Animaciones móviles


Arquitectura básica React Native


Build y distribución Android


