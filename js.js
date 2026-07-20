document.addEventListener('DOMContentLoaded', () => {

    // ===== DARK MODE =====
    const toggleBtn = document.getElementById('modo-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    if (localStorage.getItem('modo-oscuro') === 'true') {
        body.classList.add('dark-mode');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }

    toggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDark = body.classList.contains('dark-mode');
        localStorage.setItem('modo-oscuro', isDark);
        themeIcon.classList.toggle('fa-moon', !isDark);
        themeIcon.classList.toggle('fa-sun', isDark);
    });

    // ===== MOBILE MENU =====
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('nav');

    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
        const icon = menuIcon.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
    });

    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
            const icon = menuIcon.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-xmark');
        });
    });

    window.addEventListener('scroll', () => {
        navbar.classList.remove('active');
        const icon = menuIcon.querySelector('i');
        if (icon) {
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-xmark');
        }
    });


    // ===== IMAGE CAROUSEL =====
    const imagenes = ['media/yop.jpg', 'media/yop2.jpg', 'media/yop3.jpg', 'media/yop4.jpg', 'media/yop5.jpg'];
    let imgIndex = 0;
    const imgEl = document.getElementById('imagen-cambiante');
    if (imgEl) {
        imgEl.style.transition = 'opacity 0.3s ease';
        setInterval(() => {
            imgIndex = (imgIndex + 1) % imagenes.length;
            imgEl.style.opacity = '0';
            setTimeout(() => {
                imgEl.src = imagenes[imgIndex];
                imgEl.style.opacity = '1';
            }, 300);
        }, 3500);
    }

    // ===== SCROLL ANIMATIONS =====
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });

    document.querySelectorAll('.glass-card, .section-title, .section-subtitle, .hero-content, .about-image').forEach(el => {
        el.classList.add('fade-up');
        obs.observe(el);
    });

    // ===== NEURAL NETWORK BACKGROUND =====
    const canvas = document.getElementById('neural-bg');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let w, h, dpr;
    let scrollY = 0;
    let mouse = { x: null, y: null };
    let nodes = [];
    let packets = [];
    let pulses = [];

    function isDark() { return body.classList.contains('dark-mode'); }

    function col() {
        const d = isDark();
        return {
            node: d ? 'rgba(167,139,250,0.35)' : 'rgba(124,58,237,0.25)',
            nodeCore: d ? 'rgba(167,139,250,0.7)' : 'rgba(124,58,237,0.55)',
            conn: d ? 'rgba(31,64,104,0.07)' : 'rgba(22,36,71,0.04)',
            connActive: d ? 'rgba(167,139,250,0.18)' : 'rgba(124,58,237,0.12)',
            packet: d ? 'rgba(167,139,250,0.8)' : 'rgba(124,58,237,0.7)',
            glow: d ? 'rgba(167,139,250,' : 'rgba(124,58,237,',
            navy: d ? 'rgba(42,90,142,0.5)' : 'rgba(22,36,71,0.35)',
        };
    }

    function resize() {
        dpr = Math.min(window.devicePixelRatio, 2);
        w = window.innerWidth;
        h = window.innerHeight;
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        canvas.style.width = w + 'px';
        canvas.style.height = h + 'px';
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        generateNodes();
    }

    function generateNodes() {
        nodes = [];
        const totalPage = document.documentElement.scrollHeight;
        const density = 0.00004;
        const count = Math.floor(w * totalPage * density);
        const capped = Math.min(count, 180);

        for (let i = 0; i < capped; i++) {
            nodes.push({
                xBase: Math.random() * w,
                yPage: Math.random() * totalPage,
                x: 0, y: 0,
                radius: 2 + Math.random() * 3,
                phase: Math.random() * Math.PI * 2,
                speed: 0.3 + Math.random() * 0.5,
                activation: 0,
            });
        }
    }

    window.addEventListener('scroll', () => { scrollY = window.pageYOffset; });
    window.addEventListener('resize', resize);

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    window.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });

    let frame = 0;

    function spawnPacket() {
        const visible = nodes.filter(n => n.y > -50 && n.y < h + 50);
        if (visible.length < 2) return;

        let bestDist = Infinity, bestA = null, bestB = null;
        const a = visible[Math.floor(Math.random() * visible.length)];
        for (const b of visible) {
            if (a === b) continue;
            const dx = a.x - b.x, dy = a.y - b.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 200 && dist > 30 && dist < bestDist) {
                bestDist = dist;
                bestB = b;
                bestA = a;
            }
        }
        if (!bestA || !bestB) return;

        packets.push({
            ax: bestA.x, ay: bestA.y,
            bx: bestB.x, by: bestB.y,
            progress: 0,
            speed: 0.015 + Math.random() * 0.01,
            size: 1.5 + Math.random() * 1.5,
            targetNode: bestB,
        });
    }

    function animate() {
        requestAnimationFrame(animate);
        frame++;
        ctx.clearRect(0, 0, w, h);

        const c = col();
        const time = frame * 0.015;
        const connectionDist = 160;

        // Update node screen positions
        nodes.forEach(n => {
            n.x = n.xBase + Math.sin(time * n.speed + n.phase) * 8;
            n.y = (n.yPage - scrollY) + Math.cos(time * n.speed * 0.7 + n.phase) * 6;
            n.activation *= 0.96;

            // Mouse attraction
            if (mouse.x !== null) {
                const dx = mouse.x - n.x;
                const dy = mouse.y - n.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 150) {
                    const force = (150 - dist) / 150;
                    n.x += dx * force * 0.04;
                    n.y += dy * force * 0.04;
                    n.activation = Math.min(1, n.activation + force * 0.03);
                }
            }
        });

        // Only render visible nodes
        const visible = nodes.filter(n => n.y > -80 && n.y < h + 80);

        // Draw connections
        for (let i = 0; i < visible.length; i++) {
            for (let j = i + 1; j < visible.length; j++) {
                const a = visible[i], b = visible[j];
                const dx = a.x - b.x, dy = a.y - b.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist > connectionDist) continue;

                const opacity = 1 - dist / connectionDist;
                const active = a.activation > 0.05 || b.activation > 0.05;

                ctx.beginPath();
                ctx.moveTo(a.x, a.y);
                ctx.lineTo(b.x, b.y);
                ctx.strokeStyle = active ? c.connActive : c.conn;
                ctx.lineWidth = active ? opacity * 1.2 : opacity * 0.5;
                ctx.globalAlpha = opacity;
                ctx.stroke();
                ctx.globalAlpha = 1;
            }
        }

        // Spawn packets
        if (frame % 20 === 0) spawnPacket();

        // Draw packets
        for (let i = packets.length - 1; i >= 0; i--) {
            const p = packets[i];
            p.progress += p.speed;

            if (p.progress >= 1) {
                if (p.targetNode) p.targetNode.activation = Math.min(1, p.targetNode.activation + 0.5);
                pulses.push({ x: p.bx, y: p.by, radius: 0, opacity: 0.4 });
                packets.splice(i, 1);
                continue;
            }

            const x = p.ax + (p.bx - p.ax) * p.progress;
            const y = p.ay + (p.by - p.ay) * p.progress;

            // Glow
            const grad = ctx.createRadialGradient(x, y, 0, x, y, p.size * 4);
            grad.addColorStop(0, c.glow + '0.4)');
            grad.addColorStop(1, 'transparent');
            ctx.beginPath();
            ctx.arc(x, y, p.size * 4, 0, Math.PI * 2);
            ctx.fillStyle = grad;
            ctx.fill();

            // Core
            ctx.beginPath();
            ctx.arc(x, y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = c.packet;
            ctx.fill();
        }

        // Draw pulses
        for (let i = pulses.length - 1; i >= 0; i--) {
            const ring = pulses[i];
            ring.radius += 1;
            ring.opacity -= 0.012;
            if (ring.opacity <= 0) { pulses.splice(i, 1); continue; }

            ctx.beginPath();
            ctx.arc(ring.x, ring.y, ring.radius, 0, Math.PI * 2);
            ctx.strokeStyle = c.glow + ring.opacity + ')';
            ctx.lineWidth = 1;
            ctx.stroke();
        }

        // Draw nodes
        visible.forEach(n => {
            const r = n.radius + n.activation * 2;

            // Outer glow
            if (n.activation > 0.03) {
                const grad = ctx.createRadialGradient(n.x, n.y, r, n.x, n.y, r + 10);
                grad.addColorStop(0, c.glow + (n.activation * 0.2) + ')');
                grad.addColorStop(1, 'transparent');
                ctx.beginPath();
                ctx.arc(n.x, n.y, r + 10, 0, Math.PI * 2);
                ctx.fillStyle = grad;
                ctx.fill();
            }

            // Node
            ctx.beginPath();
            ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
            ctx.fillStyle = n.activation > 0.1 ? c.nodeCore : c.node;
            ctx.fill();

            // Specular
            ctx.beginPath();
            ctx.arc(n.x - r * 0.2, n.y - r * 0.2, r * 0.35, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255,255,255,0.15)';
            ctx.fill();
        });
    }

    scrollY = window.pageYOffset;
    resize();
    animate();

});
