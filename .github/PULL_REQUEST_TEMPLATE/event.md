## 📅 Agregar Nuevo Evento

### Información del Evento

**Título del evento:**
<!-- Ejemplo: "Tech Talk: Introducción a React" -->


**Descripción:**
<!-- Describe brevemente el evento (qué se tratará, quién lo organiza, etc.) -->


**Fecha:**
<!-- Formato: YYYY-MM-DD (Ejemplo: 2025-06-25) -->


**Hora:**
<!-- Formato: HH:MM (Ejemplo: 19:00) -->


**Ubicación:**
<!-- Dirección del evento o plataforma virtual -->


**Ciudad:**
<!-- Ciudad donde se realiza el evento -->


**Tipo de evento:**
<!-- Selecciona uno: Presencial | Virtual | Híbrido -->


**URL de la imagen:**
<!-- (Opcional) URL de la imagen del evento -->


**URL de registro:**
<!-- Link donde los usuarios pueden registrarse al evento -->


**Tags:**
<!-- Separados por comas (Ejemplo: javascript, react, frontend) -->


**Organizador:**
<!-- (Opcional) Nombre del organizador o comunidad -->


### Checklist

- [ ] He verificado que el evento no esté duplicado
- [ ] La fecha del evento es válida y está en formato correcto (YYYY-MM-DD)
- [ ] La hora está en formato correcto (HH:MM)
- [ ] El URL de registro es válido y funcional
- [ ] Los tags son relevantes al contenido del evento
- [ ] He agregado el evento en `app/data/events.ts`

### Ubicación del cambio

**Archivo modificado:** `app/data/events.ts`

**JSON del evento:**
```typescript
{
  title: "",
  description: "",
  date: "",
  time: "",
  location: "",
  city: "",
  type: "", // Presencial | Virtual | Híbrido
  image_url: "",
  registration_url: "",
  tags: [],
  organizer: ""
}
```
