document.addEventListener('DOMContentLoaded', () => {
    const endDate = new Date('April 12, 2025 00:00:00').getTime();

    const updateClock = () => {
        const now = new Date().getTime();
        const distance = endDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('clock').innerHTML = 
            `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) {
            clearInterval(interval);
            document.getElementById('clock').innerHTML = '¡Ya es el día de la boda!';
        }
    };

    const interval = setInterval(updateClock, 1000);

    document.getElementById('rsvp-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('¡Gracias por confirmar tu asistencia!');
    });
});
