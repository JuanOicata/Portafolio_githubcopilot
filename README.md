# 🚀 Portafolio Profesional - Juan Oicata

Portafolio web profesional y responsivo para ingeniero de sistemas. Diseño moderno con colores morado y negro, múltiples páginas navegables y contenido detallado sobre servicios, proyectos y habilidades.

## 📋 Características

✅ **Diseño Moderno**
- Colores: Morado (#7c3aed) + Negro (#0F0F0F)
- Responsive en móvil, tablet y desktop
- Animaciones suaves y efectos hover atractivos
- Gradientes y diseño limpio

✅ **Múltiples Páginas**
- **index.html** - Portada y resumen principal
- **sobre-mi.html** - Perfil profesional completo
- **servicios.html** - Servicios detallados
- **proyectos.html** - 6 proyectos destacados con descripción detallada
- **habilidades.html** - Tecnologías y competencias con adornos
- **contacto.html** - Formulario de contacto y información

✅ **Contenido Adornado**
- Proyectos con contexto, solución implementada y resultados
- Habilidades clasificadas por categorías con descripción
- Servicios detallados con procesos
- Textos profesionales y persuasivos

✅ **Interactividad**
- Menú responsivo (hamburguesa en móvil)
- Navegación smooth entre páginas
- Animaciones al scroll
- Formulario de contacto funcional
- Enlaces activos en navegación

## 📁 Estructura de Archivos

```
portafolio/
├── index.html          # Página principal
├── sobre-mi.html       # Información personal
├── servicios.html      # Servicios ofrecidos
├── proyectos.html      # Proyectos destacados
├── habilidades.html    # Tecnologías y habilidades
├── contacto.html       # Información de contacto
├── styles.css          # Estilos compartidos
├── script.js           # JavaScript compartido
└── README.md           # Este archivo
```

## 🎨 Paleta de Colores

- **Negro Primario**: #0F0F0F
- **Negro Secundario**: #1a1a1a
- **Morado Principal**: #7c3aed
- **Morado Claro**: #a78bfa
- **Blanco**: #FFFFFF
- **Gris**: #e5e7eb

## 🚀 Cómo Usar

### Opción 1: Abrir Directamente en Navegador
1. Abre `index.html` en tu navegador web
2. Navega entre páginas usando el menú superior
3. El portafolio es completamente funcional offline

### Opción 2: Hosting Local
```bash
# Con Python 3
python -m http.server 8000

# Con Node.js
npx http-server

# Con PHP
php -S localhost:8000
```

Luego accede a `http://localhost:8000`

## ✏️ Personalización

### Cambiar Información Personal
En cada página, busca y reemplaza:
- `Juan Oicata` por tu nombre
- `jeotoicata@gmail.com` por tu email
- `juanoicata` en LinkedIn/GitHub por tus usuarios

### Cambiar Colores
En `styles.css`, líneas 5-7:
```css
--color-purple: #7c3aed;       /* Cambia el morado */
--color-purple-light: #a78bfa; /* Cambia el morado claro */
```

### Agregar/Modificar Proyectos
En `proyectos.html`, duplica una tarjeta `proyecto-card` y personaliza:
- Título y descripción
- Tecnologías en `tech-tag`
- Contexto y resultados

### Agregar/Modificar Habilidades
En `habilidades.html`, duplica una sección `tech-category` y actualiza:
- Nombre de la tecnología
- Descripción
- Listado de competencias

## 📱 Responsivo

El portafolio es completamente responsive:
- **Desktop**: Menú completo, diseño de múltiples columnas
- **Tablet**: Menú adaptado, layout ajustado
- **Móvil**: Menú hamburguesa, diseño de una columna

## 🔧 Funcionalidades JavaScript

- ✅ Toggle de menú móvil
- ✅ Marcar link activo según página
- ✅ Animaciones de scroll
- ✅ Smooth scroll a secciones
- ✅ Formulario de contacto funcional

## 📧 Formulario de Contacto

El formulario usa `mailto:` para enviar emails. Al hacer clic en "Enviar", se abre el cliente de email con los datos pre-llenados.

Para mayor funcionalidad, puedes integrar servicios como:
- **Formspree.io**
- **EmailJS**
- **Netlify Forms**
- **Backend personalizado**

## 📤 Exportar a PDF

1. Abre cualquier página en el navegador
2. Presiona `Ctrl+P` (Windows) o `Cmd+P` (Mac)
3. Selecciona "Guardar como PDF"
4. Listo! Tienes tu portafolio en PDF

## 🌐 Desplegar

### Opción 1: GitHub Pages (Gratis)
1. Crea repositorio en GitHub
2. Sube los archivos
3. Ve a Settings → Pages
4. Selecciona rama main
5. Tu portafolio está en línea!

### Opción 2: Netlify (Gratis)
1. Sube la carpeta a Netlify
2. Asigna dominio personalizado (opcional)
3. Listo!

### Opción 3: Hosting Compartido
Sube los archivos via FTP a tu hosting

## 📊 Páginas Incluidas

### 1. **index.html** - Portada
- Presentación principal
- CTA (Call-to-Action) buttons
- Resumen rápido
- Estadísticas
- Servicios principales
- Metodología
- Propuesta de valor
- Contacto rápido

### 2. **sobre-mi.html** - Sobre Mí
- Historia profesional
- Valores profesionales
- Trayectoria cronológica
- Certificaciones

### 3. **servicios.html** - Servicios
- 6 servicios principales (con ícono y descripción detallada)
- 6 servicios complementarios
- Proceso de trabajo paso a paso
- Metodología ágil

### 4. **proyectos.html** - Proyectos
- 6 proyectos destacados
- Contexto, solución e impacto para cada uno
- Tecnologías usadas con tags
- Estadísticas de impacto
- Links a proyectos reales

### 5. **habilidades.html** - Habilidades
- Lenguajes de programación (con ratings)
- Frameworks y librerías
- Herramientas y DevOps
- Competencias técnicas avanzadas
- Certificaciones

### 6. **contacto.html** - Contacto
- Múltiples formas de contacto (email, LinkedIn, GitHub)
- Formulario de contacto con validación
- Disponibilidad y tiempos de respuesta
- Checklist previa
- Casos de uso principales

## 🎓 Tecnologías Usadas

- **HTML5**: Estructura semántica
- **CSS3**: Flexbox, Grid, gradientes, animaciones
- **JavaScript Vanilla**: Sin dependencias externas
- **Responsive Design**: Mobile-first
- **Accesibilidad**: WCAG compliant

## ✨ Características Avanzadas

- 🎨 Gradientes dinámicos en títulos
- ✨ Efectos glow al hover
- 📱 Menú hamburguesa automático
- 🔄 Animaciones al scroll
- 🎯 Smooth scroll
- 🌙 Diseño oscuro (Dark Mode) nativo
- ♿ Accesibilidad mejorada

## 🐛 Troubleshooting

**Problema**: Las imágenes no cargan
- Solución: Verifica las rutas relativas de las imágenes

**Problema**: El menú no funciona en móvil
- Solución: Asegúrate de que JavaScript está habilitado

**Problema**: Los estilos no se aplican
- Solución: Verifica que `styles.css` esté en la misma carpeta

**Problema**: El formulario no envía
- Solución: Por defecto usa mailto:. Para email automático, integra Formspree o similar

## 📝 Notas Importantes

- ✅ Completamente responsive
- ✅ Funciona offline
- ✅ Sin dependencias externas
- ✅ SEO-friendly
- ✅ Rápido y ligero
- ✅ Fácil de personalizar
- ✅ Listo para producción

## 📄 Licencia

Libre para usar y personalizar. Hecho con ❤️ para tu portafolio profesional.

## 📞 Soporte

Para dudas o mejoras, contacta a Juan Oicata:
- 📧 Email: jeotoicata@gmail.com
- 💼 LinkedIn: linkedin.com/in/juanoicata
- 💻 GitHub: github.com/juanoicata

---

**Última actualización**: 2024
**Versión**: 2.0 (Multi-página mejorada)
