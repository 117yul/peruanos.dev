## 👥 Agregar Nueva Comunidad

### Información de la Comunidad

**Nombre:**
<!-- Ejemplo: "React Peru" -->


**Descripción:**
<!-- Describe brevemente la comunidad (propósito, actividades, etc.) -->


**URL del logo:**
<!-- URL del logo de la comunidad (preferiblemente PNG o SVG) -->


**Ciudad:**
<!-- Ciudad principal donde opera la comunidad -->


**Temas/Topics:**
<!-- Separados por comas (Ejemplo: react, javascript, frontend, web) -->


### Información de Contacto

**Email:**
<!-- Email de contacto de la comunidad -->


**Website:**
<!-- URL del sitio web oficial (si no tiene, usar URL principal de redes sociales) -->


**GitHub:**
<!-- (Opcional) URL del perfil o organización en GitHub -->


**Twitter:**
<!-- (Opcional) URL del perfil en Twitter/X -->


**LinkedIn:**
<!-- (Opcional) URL de la página en LinkedIn -->


**Discord:**
<!-- (Opcional) URL del servidor de Discord -->


### Checklist

- [ ] He verificado que la comunidad no esté duplicada
- [ ] El logo es de buena calidad y tiene formato web (PNG, SVG, JPG)
- [ ] La URL del website es válida y funcional
- [ ] Al menos una red social está completa
- [ ] Los topics son relevantes a la comunidad
- [ ] He agregado la comunidad en `app/data/communities.ts`

### Ubicación del cambio

**Archivo modificado:** `app/data/communities.ts`

**JSON de la comunidad:**
```typescript
{
  name: "",
  description: "",
  logo_url: "",
  city: "",
  topics: [],
  contact: {
    email: "",
    website: "",
    socialMedia: {
      github: "",
      twitter: "",
      linkedin: "",
      discord: ""
    }
  }
}
```
