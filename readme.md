# 🎲 Techbat Express - Catálogo de Juegos de Mesa

**Techbat Express** 
**"Desarrollando nuestra interfaz gráfica"**.

---

## 🧾 Descripción del proyecto

**Techbat Express** representa una tienda ficticia dedicada a la venta de juegos de mesa.  
La plataforma permite a los usuarios explorar un catálogo por categorías, registrarse, iniciar sesión, modificar su perfil, y simular compras a través de un carrito virtual.

El sistema contempla diferentes tipos de usuarios con funcionalidades específicas.

---

## 👤 Roles de Usuario

| Rol       | Funciones                                                                 |
|-----------|---------------------------------------------------------------------------|
| Cliente   | Registro, inicio de sesión, navegación de juegos, agregar al carrito, simulación de compra. |
| Administrador | Acceso a panel de administración, donde puede agregar juegos al catálogo.              |

---

## 🚀 Funcionalidades principales

- Registro de usuarios con validaciones estrictas.
- Inicio de sesión con distinción de roles.
- Recuperación de contraseña (simulada).
- Modificación de perfil del usuario.
- Visualización de catálogo dinámico.
- Carrito funcional con contador en tiempo real.
- Panel de administrador para agregar juegos.
- Simulación de pago tras agregar productos.

---

## 🖌️ Tecnologías utilizadas

- **HTML5**
- **CSS3**
- **Bootstrap 5**
- **JavaScript (ES6)**
- **LocalStorage** (para simular persistencia de datos)

---

## 🎨 Características del diseño

- Diseño responsivo (mobile-first) utilizando **Bootstrap Grid (12 columnas)**.
- Interfaz limpia, moderna y adaptada para escritorio, tablet y móvil.
- Icono de carrito con contador dinámico.
- Tarjetas visuales con animaciones y consistencia de estilo.

---

## 📁 Estructura del proyecto

TechbatExpress/
├── css/
│ └── style.css
├── img/
│ └── (imágenes de los juegos)
├── js/
│ ├── index.js
│ ├── admin.js
│ ├── carrito.js
│ ├── login.js
│ ├── perfil.js
│ ├── recuperar.js
│ └── registro.js
├── views/
│ ├── index.html
│ ├── admin.html
│ ├── carrito.html
│ ├── login.html
│ ├── perfil.html
│ ├── recuperar.html
│ └── registro.html
└── readme.md


---

##  Cómo probar la aplicación

1. Abrir `index.html` desde un servidor local (Live Server o similar).
2. Registrarse como usuario o iniciar sesión como:
   - Admin: `admin@techbat.com` / `Admin123!`
   - Cliente: `cliente@techbat.com` / `Cliente123!`
3. Agregar productos al carrito desde el catálogo.
4. Visualizar y simular pago desde la página `carrito.html`.
5. Acceder como administrador para agregar nuevos juegos.

---

##  Autor

Desarrollado como parte del curso de desarrollo web — Año 2025.  
**Institución:** [DUOCUC]  
**Estudiante:** [José Sepúlveda C]

---

