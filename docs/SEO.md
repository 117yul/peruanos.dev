# SEO Configuration - Peruanos.dev

## 📄 Archivos Creados para SEO

### 1. **robots.txt** (`/public/robots.txt`)
Archivo que indica a los motores de búsqueda qué pueden rastrear:
- ✅ Permite acceso a todas las páginas públicas
- ❌ Bloquea acceso a `/api/`
- 🗺️ Incluye referencia al sitemap

### 2. **sitemap.ts** (`/app/sitemap.ts`)
Generador dinámico de sitemap XML para Next.js:
- 📍 Lista todas las rutas principales
- 🔄 Frecuencia de actualización por página
- ⭐ Prioridades asignadas

### 3. **manifest.ts** (`/app/manifest.ts`)
Manifiesto para PWA (Progressive Web App):
- 📱 Configuración de íconos
- 🎨 Colores de tema
- 📝 Nombre y descripción de la app

### 4. **structured-data.ts** (`/app/lib/structured-data.ts`)
Schemas JSON-LD para datos estructurados:
- 🏢 Organization Schema
- 🌐 Website Schema
- 🍞 Breadcrumb Schema
- 📅 Event Schema

## 🔧 Metadata Mejorado

### Layout Principal (`/app/layout.tsx`)
Metadata global con:
- 📱 Open Graph (Facebook, LinkedIn)
- 🐦 Twitter Cards
- 🤖 Configuración de robots
- ✅ Verificación de motores de búsqueda
- 🔗 URLs canónicas
- 🌐 Datos estructurados (JSON-LD)

### Página de Inicio (`/app/page.tsx`)
Metadata específico con descripción y Open Graph optimizados.

## 📋 Checklist de Configuración

### Tareas Completadas ✅
- [x] robots.txt creado
- [x] sitemap.ts implementado
- [x] manifest.ts para PWA
- [x] Metadata global en layout
- [x] Metadata específico en páginas
- [x] Datos estructurados (JSON-LD)
- [x] Open Graph tags
- [x] Twitter Cards

### Tareas Pendientes ⏳
- [ ] Reemplazar código de verificación de Google Search Console
- [ ] Crear imágenes Open Graph (1200x630px)
- [ ] Crear imágenes Twitter Card (1200x600px)
- [ ] Crear íconos PWA (192x192, 512x512)
- [ ] Configurar analytics avanzados
- [ ] Implementar breadcrumbs en páginas internas

## 🎨 Imágenes Requeridas

Crear y colocar en `/public/images/`:

1. **og-image.png** (1200x630px)
   - Imagen para Facebook, LinkedIn, WhatsApp
   
2. **twitter-image.png** (1200x600px)
   - Imagen optimizada para Twitter
   
3. **icon-192.png** (192x192px)
   - Ícono PWA pequeño
   
4. **icon-512.png** (512x512px)
   - Ícono PWA grande

## 🔍 Verificación de Motores de Búsqueda

En `/app/layout.tsx`, actualizar:

```typescript
verification: {
  google: 'tu-codigo-de-verificacion-google',
  // Obtener en: https://search.google.com/search-console
}
```

## 📊 Herramientas de Validación

### Validar SEO:
- **Google Search Console**: https://search.google.com/search-console
- **Google Rich Results Test**: https://search.google.com/test/rich-results
- **Meta Tags Validator**: https://metatags.io/
- **Open Graph Debugger**: https://www.opengraph.xyz/

### Validar Estructuras:
- **Schema Markup Validator**: https://validator.schema.org/
- **Google Rich Results**: https://search.google.com/test/rich-results

### Validar Rendimiento:
- **PageSpeed Insights**: https://pagespeed.web.dev/
- **Lighthouse**: Dev Tools > Lighthouse

## 🚀 Próximos Pasos

1. **Crear imágenes** para Open Graph y PWA
2. **Verificar dominio** en Google Search Console
3. **Enviar sitemap** a Google y Bing
4. **Monitorear** métricas en Analytics
5. **Optimizar** contenido basado en keywords

## 📝 Keywords Principales

- comunidad tech Perú
- eventos tecnología Perú
- desarrolladores peruanos
- comunidades tecnológicas
- meetups Perú
- código abierto Perú
- tech Peru

## 🔗 URLs Importantes

- Sitemap: https://peruanos.dev/sitemap.xml
- Robots: https://peruanos.dev/robots.txt
- Manifest: https://peruanos.dev/manifest.webmanifest

---

**Última actualización**: 30 de enero de 2025
