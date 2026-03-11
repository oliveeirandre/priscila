document.addEventListener('DOMContentLoaded', () => {
    // 1. Sticky Header Logic
    const header = document.querySelector('.glass-header');
    const heroTitle = document.querySelector('.profile-title');
    
    window.addEventListener('scroll', () => {
        // Show header when scrolled past the hero title to save space and context
        if (!heroTitle) return;
        
        const titleBottom = heroTitle.getBoundingClientRect().bottom;
        if (titleBottom < 0) {
            header.classList.add('visible');
        } else {
            header.classList.remove('visible');
        }
    }, { passive: true });

    // 2. Before/After Slider Logic
    const sliderContainer = document.querySelector('.ba-image-container');
    const imageBefore = document.querySelector('.ba-before');
    const sliderHandle = document.querySelector('.ba-slider-handle');

    if (sliderContainer && imageBefore && sliderHandle) {
        let isSliding = false;

        const slide = (x) => {
            const rect = sliderContainer.getBoundingClientRect();
            // Calculate percentage relative to container width
            let percent = ((x - rect.left) / rect.width) * 100;
            // Bound strictly between 0 and 100
            percent = Math.max(0, Math.min(100, percent));
            
            // Adjust clip-path mask to reveal the bottom image
            imageBefore.style.clipPath = `polygon(0 0, ${percent}% 0, ${percent}% 100%, 0 100%)`;
            // Move the visible handle slider
            sliderHandle.style.left = `${percent}%`;
        };

        // Mouse Events
        sliderContainer.addEventListener('mousedown', (e) => {
            isSliding = true;
            slide(e.clientX);
        });

        window.addEventListener('mouseup', () => {
            isSliding = false;
        });

        window.addEventListener('mousemove', (e) => {
            if (!isSliding) return;
            slide(e.clientX);
        });

        // Touch Events for Mobile
        sliderContainer.addEventListener('touchstart', (e) => {
            isSliding = true;
            slide(e.touches[0].clientX);
            // Optional: prevent scroll depending on layout needs, better smooth experience:
            // e.preventDefault(); 
        }, { passive: true });

        window.addEventListener('touchend', () => {
            isSliding = false;
        });

        window.addEventListener('touchmove', (e) => {
            if (!isSliding) return;
            slide(e.touches[0].clientX);
            // Prevent scrolling explicitly while actively swiping the handle sideways
            if (e.cancelable) e.preventDefault();
        }, { passive: false });
    }

    // 3. VCard Generation (Simulated Download for Contact Action Card)
    const vcardBtn = document.getElementById('vcard-download');
    if (vcardBtn) {
        vcardBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Formatar os dados do VCard
            const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Priscila Bertolaccini
TITLE:Especialista em Mechas e Visagismo
TEL;TYPE=CELL:+5535998171030
URL:https://linkfly.to/70306tc9vHi
END:VCARD`;

            const blob = new Blob([vcard], { type: 'text/vcard' });
            const url = window.URL.createObjectURL(blob);
            
            const a = document.createElement('a');
            a.setAttribute('href', url);
            a.setAttribute('download', 'priscila_bertolaccini.vcf');
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
            
            // Visual feedback (icon jump/color change)
            const icon = vcardBtn.querySelector('i');
            icon.className = 'fas fa-check';
            icon.style.color = '#4CAF50';
            
            setTimeout(() => {
                icon.className = 'fas fa-arrow-down';
                icon.style.color = '';
            }, 3000);
        });
    }
});
