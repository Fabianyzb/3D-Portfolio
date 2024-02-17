# NOTAS

1. Iniciar con npm create vite@latest ./ -- --template react
2. npm install -D tailwindcss
3. npx tailwindcss init
4. npm install --legacy-peer-deps @react-three/fiber @react-three/drei maath react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom
5. npm install react-parallax-tilt  (import Tilt from "react-parallax-tilt")
6. Importar carpetas de assets: company, tech, components y canvas.
7. Si tailwind no esta funcionando con vite esta es la solucion: $ npm install --legacy-peer-deps -D postcss autoprefixer
8. Luego de eso: $ npx tailwindcss init -p
9. Para usar react three hay que instalar Three.js: npm install --legacy-peer-deps three
10. Tuve que bajar de la version actual a la "three": "^0.149.0" para que las luces funcionaran
