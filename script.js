document.addEventListener('DOMContentLoaded', () => {
    // Muestra la primera sección por defecto
    showSection('momentos');
});

function showSection(sectionId) {
    // Oculta todas las secciones
    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => section.classList.add('hidden'));
    
    // Muestra la sección seleccionada
    document.getElementById(sectionId).classList.remove('hidden');
}
