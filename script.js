function toggleRamo(element) {
  element.classList.toggle("tachado");
}
const ramos = {
  // Año 1
  "Taller de Escritura": [],
  "Derecho Político": [],
  "Introducción al Derecho Privado": [],
  "Historia de las Instituciones Jurídicas": [],
  "Introducción al Derecho": [],

  "Expresión Oral y Argumentación": ["Taller de Escritura"],
  "Políticas de Equidad y Género": [],
  "Introducción al Derecho Constitucional Orgánico": ["Derecho Político"],
  "Acto Jurídico": ["Introducción al Derecho Privado"],
  "Historia Institucional de Chile": ["Historia de las Instituciones Jurídicas"],

  // Año 2
  "Sustentabilidad y Medio Ambiente": [],
  "Introducción a la Economía": [],
  "Derechos Fundamentales": ["Introducción al Derecho Constitucional Orgánico"],
  "Bienes": ["Acto Jurídico"],
  "Fundamentos del Derecho Procesal": ["Introducción al Derecho"],

  "Fundamentos del Derecho Penal y Teoría del Delito": ["Derechos Fundamentales"],
  "Acciones Constitucionales": ["Derechos Fundamentales"],
  "Derecho Administrativo I": ["Derecho Político"],
  "Obligaciones": ["Bienes"],
  "Normas Comunes a todo Procedimiento": ["Fundamentos del Derecho Procesal"],

  // Año 3
  "Participación Criminal y Penal": ["Fundamentos del Derecho Penal y Teoría del Delito"],
  "Derecho del Trabajo I": [],
  "Derecho Administrativo II": ["Derecho Administrativo I"],
  "Responsabilidad": ["Obligaciones"],
  "Procedimientos Civiles": ["Normas Comunes a todo Procedimiento"],

  "Estudio de los Delitos": ["Participación Criminal y Penal"],
  "Derecho del Trabajo II": ["Derecho del Trabajo I"],
  "Derecho Internacional Público": ["Derechos Fundamentales"],
  "Contratos": ["Obligaciones"],
  "Recursos Procesales y Juicio Ejecutivo": ["Procedimientos Civiles"],

  // Año 4
  "Proceso Penal": ["Estudio de los Delitos"],
  "Derecho Económico": ["Introducción a la Economía"],
  "Derecho Comercial I": ["Contratos"],
  "Derecho de Familia": ["Contratos"],
  "Solución Alternativa de Conflictos": ["Normas Comunes a todo Procedimiento"],

  "Multiculturalidad y Migraciones": [],
  "Taller": [],
  "Derecho Comercial II": ["Derecho Comercial I"],
  "Derecho Sucesorio": ["Contratos"],
  "Procedimientos de Familia": ["Derecho de Familia"],

  // Año 5
  "Ética": [],
  "Derecho Tributario I": ["Derecho Económico"],
  "Filosofía del Derecho": [],
  "Seminario de Integración Derecho Privado": ["Contratos"],
  "Clínica I": ["Recursos Procesales y Juicio Ejecutivo"],

  "Taller de Investigación Jurídica": ["Taller"],
  "Derecho Tributario II": ["Derecho Tributario I"],
  "Seminario de Integración Derecho Público": ["Derechos Fundamentales"],
  "Clínica II": ["Clínica I"]
};

const mallaDiv = document.getElementById("malla");
const estadoRamos = {};

function crearSemestre(titulo, ramosSemestre) {
  const contenedor = document.createElement("div");
  contenedor.classList.add("semestre");

  const tituloEl = document.createElement("h2");
  tituloEl.textContent = titulo;
  contenedor.appendChild(tituloEl);

  ramosSemestre.forEach(nombre => {
    const el = document.createElement("div");
    el.classList.add("ramo");
    el.textContent = nombre;

    el.addEventListener("click", () => toggleRamo(nombre, el));

    el.dataset.nombre = nombre;
    if (!ramos[nombre] || ramos[nombre].length === 0) {
      el.classList.remove("bloqueado");
    } else {
      el.classList.add("bloqueado");
    }

    contenedor.appendChild(el);
  });

  mallaDiv.appendChild(contenedor);
}

function toggleRamo(nombre, el) {
  if (el.classList.contains("bloqueado")) return;

  el.classList.toggle("aprobado");
  estadoRamos[nombre] = el.classList.contains("aprobado");

  actualizarBloqueos();
}

function actualizarBloqueos() {
  document.querySelectorAll(".ramo").forEach(el => {
    const nombre = el.dataset.nombre;
    const requisitos = ramos[nombre] || [];
    const cumplidos = requisitos.every(req => estadoRamos[req]);

    if (requisitos.length > 0 && !cumplidos) {
      el.classList.add("bloqueado");
    } else {
      el.classList.remove("bloqueado");
    }
  });
}

// Generar malla
crearSemestre("Año 1 - Semestre 1", [
  "Taller de Escritura",
  "Derecho Político",
  "Introducción al Derecho Privado",
  "Historia de las Instituciones Jurídicas",
  "Introducción al Derecho"
]);

crearSemestre("Año 1 - Semestre 2", [
  "Expresión Oral y Argumentación",
  "Políticas de Equidad y Género",
  "Introducción al Derecho Constitucional Orgánico",
  "Acto Jurídico",
  "Historia Institucional de Chile"
]);

crearSemestre("Año 2 - Semestre 3", [
  "Sustentabilidad y Medio Ambiente",
  "Introducción a la Economía",
  "Derechos Fundamentales",
  "Bienes",
  "Fundamentos del Derecho Procesal"
]);

crearSemestre("Año 2 - Semestre 4", [
  "Fundamentos del Derecho Penal y Teoría del Delito",
  "Acciones Constitucionales",
  "Derecho Administrativo I",
  "Obligaciones",
  "Normas Comunes a todo Procedimiento"
]);

crearSemestre("Año 3 - Semestre 5", [
  "Participación Criminal y Penal",
  "Derecho del Trabajo I",
  "Derecho Administrativo II",
  "Responsabilidad",
  "Procedimientos Civiles"
]);

crearSemestre("Año 3 - Semestre 6", [
  "Estudio de los Delitos",
  "Derecho del Trabajo II",
  "Derecho Internacional Público",
  "Contratos",
  "Recursos Procesales y Juicio Ejecutivo"
]);

crearSemestre("Año 4 - Semestre 7", [
  "Proceso Penal",
  "Derecho Económico",
  "Derecho Comercial I",
  "Derecho de Familia",
  "Solución Alternativa de Conflictos"
]);

crearSemestre("Año 4 - Semestre 8", [
  "Multiculturalidad y Migraciones",
  "Taller",
  "Derecho Comercial II",
  "Derecho Sucesorio",
  "Procedimientos de Familia"
]);

crearSemestre("Año 5 - Semestre 9", [
  "Ética",
  "Derecho Tributario I",
  "Filosofía del Derecho",
  "Seminario de Integración Derecho Privado",
  "Clínica I"
]);

crearSemestre("Año 5 - Semestre 10", [
  "Taller de Investigación Jurídica",
  "Derecho Tributario II",
  "Seminario de Integración Derecho Público",
  "Clínica II"
]);

actualizarBloqueos();
