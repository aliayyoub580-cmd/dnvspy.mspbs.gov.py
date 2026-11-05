# DINAVISA Paraguay – Portal de Verificación de Registro Sanitario

Aplicación web interactiva desarrollada con **React.js** y **Vite**, que recrea con alta fidelidad la interfaz del portal móvil de verificación de registros sanitarios de la **Dirección Nacional de Vigilancia Sanitaria (DINAVISA)** de la República del Paraguay.

---

## 📸 Características Principales

- **Fidelidad Visual Gobierno de Paraguay:** Recreación rigurosa de la identidad oficial de **DINAVISApy** y el **Gobierno Nacional (Paraguái Rekuái)** con escudos vectoriales SVG de alta definición.
- **Ruta de Navegación (Breadcrumbs):** Indicador de sección `RS / INFORMACIÓN` con estados activo e histórico según la especificación.
- **Tarjeta de Información del Producto:**
  - Borde azul característico (`#547DB8`) y fondo blanco.
  - **Insignia Circular Superior (Badge MS):** Medallón azul flotante (`#4169A8`) con texto blanco superpuesto al borde superior.
  - Campos normalizados:
    - **Categoría del Producto:** `PRODUCTO MEDICAMENTO DE SÍNTESIS QUÍMICA`
    - **Número de Registro Sanitario:** `MS-005566-01` (con función de copiado al portapapeles)
    - **Empresa / Titular:** `INDUFAR COMERCIAL E INDUSTRIAL SOCIEDAD ANONIMA`
    - **Denominación Comercial:** `T.G. 15`
    - **Denominación Genérica:** `TIRZEPATIDA`
    - **Fecha de Vencimiento:** `04-04-2030`
- **Acciones y Documentos del Registro:**
  - **PROSPECTO:** Icono de documento (`FileText`), abre el visor interactivo de ficha técnica oficial autorizada.
  - **CERTIFICADO:** Icono de galardón (`Award`), abre la vista de certificado con marco oficial, resolución y código QR de verificación.
  - **NOTIFICACIÓN DE MODIFICACIÓN POST-REGISTRO SANITARIO:** Icono de verificación (`CheckCircle2`), despliega la línea de tiempo de homologaciones.
- **Botón y Panel de Configuración (Settings):**
  - Botón cuadrado en azul marino oscuro (`#17243B`) con icono de engranaje blanco en la esquina superior derecha.
  - Selector de productos de prueba (T.G. 15 Indufar, Kitadol 500 Lasca, Inmunoglobulina Vencida).
  - Simulador de estado de carga (**Loading State**) y error 404 (**Not Found State**).
  - Modos de accesibilidad: Alto contraste y Modo oscuro.
- **100% Responsivo:** Optimizado con prioridad mobile-first para smartphones iOS / Android, adaptándose fluidamente a tablets y pantallas de escritorio.
- **Fase Frontend Standalone:** Sin dependencias externas de backend o base de datos en esta fase.

---

## 🛠️ Tecnologías

- **React 18** (Functional Components + Hooks)
- **Vite 6** (Build tool de ultra alta velocidad)
- **Lucide React** (Iconografía oficial)
- **CSS3 Moderno** (Variables CSS, Flexbox, CSS Grid, Media Queries, Animaciones fluidas)

---

## 🚀 Instalación y Ejecución

Clonar o abrir el directorio del proyecto y ejecutar:

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Compilar para producción
npm run build

# 4. Previsualizar la compilación de producción
npm run preview
```

El servidor local estará disponible en: `http://localhost:3000` (o el puerto asignado por Vite).

---

## 📁 Estructura del Proyecto

```text
Dnvspy/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── ActionModal.jsx         # Modales para Prospecto, Certificado y Notificaciones
│   │   ├── Breadcrumb.jsx          # Navegación RS / INFORMACIÓN
│   │   ├── DocumentActions.jsx     # Bloques de acción interactivos
│   │   ├── GovernmentBranding.jsx  # Escudos y marcas oficiales DINAVISA y Gobierno
│   │   ├── Header.jsx              # Barra superior con logo DINAVISApy y botón Settings
│   │   ├── ProductCard.jsx         # Ficha central de información del producto
│   │   ├── RegistrationBadge.jsx   # Insignia circular "MS"
│   │   └── SettingsPanel.jsx       # Panel lateral de configuración y simulaciones
│   ├── data/
│   │   └── productData.js          # Archivo de datos mock del producto y alternativas
│   ├── pages/
│   │   └── ProductInformation.jsx  # Página principal de consulta
│   ├── styles/
│   │   ├── components.css          # Estilos de los componentes del portal
│   │   ├── global.css              # Variables de diseño, reset y tipografías
│   │   └── responsive.css          # Reglas para smartphones, tablets y desktop
│   ├── App.jsx                     # Componente raíz
│   └── main.jsx                    # Punto de entrada de React
├── index.html
├── package.json
└── vite.config.js
```

---

## 🎨 Paleta de Color Oficial

| Elemento | Variable CSS | Color Hex |
|---|---|---|
| Fondo Principal | `--bg-main` | `#FFFFFF` |
| Azul Primario | `--primary-blue` | `#4169A8` |
| Azul Marino Oscuro | `--dark-navy` | `#17243B` |
| Texto Principal | `--text-main` | `#252525` |
| Texto Secundario | `--text-secondary` | `#89939F` |
| Borde de Ficha | `--card-border` | `#547DB8` |
| Borde Claro | `--light-border` | `#E8E8E8` |

