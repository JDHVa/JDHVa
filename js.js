document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('modo-toggle');
    const body = document.body;

    if (localStorage.getItem('modo-oscuro') === 'true') {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('modo-oscuro', 'true');
        } else {
            localStorage.setItem('modo-oscuro', 'false');
        }
    });

    const searchBar = document.getElementById('search-bar');
    const allBookCards = document.querySelectorAll('.producto-card');

   if (searchBar) {
        searchBar.addEventListener('input', (evento) => {
            const searchTerm = evento.target.value.toLowerCase();

            allBookCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                if (title.includes(searchTerm)) {
                    card.style.display = 'flex'; 
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    let clickCount = 0;
    const counterDisplay = document.getElementById('click-counter');
    const countElement = document.getElementById('click-count');
    
    document.addEventListener('click', () => {
        clickCount++;
        
        countElement.textContent = clickCount;
        
       counterDisplay.classList.remove('click-animate');
        
       void counterDisplay.offsetWidth; 
        
        counterDisplay.classList.add('click-animate');
    });


 
    function actualizarTotal() {
        if(totalMonto) {
            totalMonto.textContent = `$${totalCarrito.toFixed(2)}`;
        }
    }



 
    function mostrarToast(mensaje) {
        const container = document.getElementById('toast-container');
        if (!container) return; 
        
        const toast = document.createElement('div');
        toast.classList.add('toast');
        toast.textContent = mensaje;
        container.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('show');
        }, 10); 

        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                if (container.contains(toast)) {
                     container.removeChild(toast);
                }
            }, 300);
        }, 3000);
    }

});
const imagenes = [
    "media/yop.jpg",
    "media/yop2.jpg", 
    "media/yop3.jpg",
    "media/yop4.jpg",
    "media/yop5.jpg"
];

let indiceActual = 0; 
const tiempoCambio = 3000; 
const cursorDot = document.getElementById('mi-cursor');

const imagenElemento = document.getElementById("imagen-cambiante");

function cambiarImagen() {
    indiceActual++;
    if (indiceActual >= imagenes.length) {
        indiceActual = 0;
    }

    imagenElemento.src = imagenes[indiceActual];
}

setInterval(cambiarImagen, tiempoCambio);
const observador = new IntersectionObserver((entradas) => {
  entradas.forEach(entrada => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('animar-visible');
    }
  });
});

const elementosOcultos = document.querySelectorAll('.animar-oculto');
elementosOcultos.forEach((el) => observador.observe(el));

const canvas = document.getElementById('canvas-particulas');
const ctx = canvas.getContext('2d');

let particlesArray;

const colorClaro = 'rgba(0, 90, 156, 1)';   
const colorOscuro = 'rgba(255, 195, 0, 1)'; 
let currentColor = colorClaro;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouse = {
    x: null,
    y: null,
    radius: (canvas.height / 80) * (canvas.width / 80) 
}

window.addEventListener('mousemove', (event) => {
    mouse.x = event.x;
    mouse.y = event.y;

    if(cursorDot) {
        cursorDot.style.left = event.x + 'px';
        cursorDot.style.top = event.y + 'px';
    }
});

window.addEventListener('mouseout', () => {
    mouse.x = undefined;
    mouse.y = undefined;
});

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    mouse.radius = (canvas.height / 80) * (canvas.width / 80); 
    init();
});

class Particle {
    constructor(x, y, directionX, directionY, size) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = currentColor;
        ctx.fill();
    }

    update() {
        if (this.x > canvas.width || this.x < 0) {
            this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
            this.directionY = -this.directionY;
        }

        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius + this.size) {
            if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
                this.x += 5; 
            }
            if (mouse.x > this.x && this.x > this.size * 10) {
                this.x -= 5; 
            }
            if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
                this.y += 5; 
            }
            if (mouse.y > this.y && this.y > this.size * 10) {
                this.y -= 5; 
            }
        }
        this.x += this.directionX;
        this.y += this.directionY;

        this.draw();
    }
}

function init() {
    particlesArray = [];
    let numberOfParticles = (canvas.height * canvas.width) / 9000;

    for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 3) + 1;
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * 2) - 1; 
        let directionY = (Math.random() * 2) - 1;

        particlesArray.push(new Particle(x, y, directionX, directionY, size));
    }
}

function connect() {
    let opacityValue = 1;
    for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
            let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x))
                         + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
            
            if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                opacityValue = 1 - (distance / 20000);
                
                let rgbColor = currentColor === colorClaro ? '0, 90, 156' : '255, 195, 0';
                
                ctx.strokeStyle = 'rgba(' + rgbColor + ',' + opacityValue + ')';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
            }
        }
    }
}

function checkTheme() {
    if (document.body.classList.contains('dark-mode')) {
        currentColor = colorOscuro;
    } else {
        currentColor = colorClaro;
    }
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
    }
    connect();
}

const btnToggle = document.getElementById('modo-toggle');
if(btnToggle){
    btnToggle.addEventListener('click', () => {
        setTimeout(checkTheme, 50);
    });
}

checkTheme();
init();
animate();

const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('nav'); 

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    
    if(navbar.classList.contains('active')){
        menuIcon.innerHTML = '&#10005;'; 
    } else {
        menuIcon.innerHTML = '&#9776;'; 
    }
});

window.onscroll = () => {
    navbar.classList.remove('active');
    menuIcon.innerHTML = '&#9776;';
};

document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuIcon.innerHTML = '&#9776;';
    });
});