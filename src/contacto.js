document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('contenedor-formulario-contacto');
    
    // Solo actúa si encuentra el ID en la página actual
    if (contenedor) {
        // Comprobamos si la página pide el tema claro
        const esTemaClaro = contenedor.getAttribute('data-theme') === 'light';
        const claseTema = esTemaClaro ? 'light-theme' : '';

        contenedor.innerHTML = `
            <section class="contact-form-global ${claseTema}">
                <div class="contact-container">
                    <h4 class="section-title">¿Dudas? Contáctanos</h4>
                    <p class="contact-subtitle">Pídenos información sobre fechas personalizadas o detalles técnicos.</p>
                    
                    <form class="form__container" action="https://formsubmit.co/tu-correo@ejemplo.com" method="POST">
                        <div class="form-grid">
                            <fieldset> 
                                <legend>INFORMACIÓN BÁSICA</legend>
                                <input name="Nombre" type="text" placeholder="Nombre" required>
                                <input name="Apellido" type="text" placeholder="Apellido">
                                <textarea name="Mensaje" rows="5" placeholder="Escribe tu mensaje..." required></textarea>
                            </fieldset>

                            <fieldset> 
                                <legend>INFORMACIÓN DE CONTACTO</legend>
                                <input name="Email" type="email" placeholder="Email" required>
                                <input name="Telefono" type="text" placeholder="Nº de Teléfono">
                                
                                <div class="form-info-box">
                                    <p><i class="fa-solid fa-clock"></i> Te responderemos en menos de 24h.</p>
                                </div>
                                <button type="submit" class="submit-btn">ENVIAR MENSAJE</button>
                            </fieldset>
                        </div>
                    </form>
                </div>
            </section>
        `;
    }
});