document.addEventListener('DOMContentLoaded', () => {
    // 0. Analytics & Tracking Helper
    const trackEvent = (name, action, category) => {
        // Track using Google Analytics
        if (typeof gtag === 'function') {
            gtag('event', action, {
                'event_category': category,
                'event_label': name
            });
        }
        // Track using Meta Pixel (Facebook)
        if (typeof fbq === 'function') {
            fbq('track', action, {
                content_name: name,
                content_category: category
            });
        }
        console.log(`[Tracking] ${action}: ${name}`);
    };

    // Auto-attach tracking to elements with data-track attributes
    document.querySelectorAll('[data-track]').forEach(element => {
        element.addEventListener('click', () => {
            const name = element.getAttribute('data-track');
            const event = element.getAttribute('data-event') || 'click';
            trackEvent(name, event, 'User Interaction');
        });
    });

    // 1. Sticky Header Logic
    const header = document.querySelector('.glass-header');
    const heroTitle = document.querySelector('.profile-title');
    
    window.addEventListener('scroll', () => {
        if (!heroTitle) return;
        
        const titleBottom = heroTitle.getBoundingClientRect().bottom;
        if (titleBottom < 0) {
            header.classList.add('visible');
        } else {
            header.classList.remove('visible');
        }
    }, { passive: true });

    // 2. VCard Generation (Updated with final domain)
    const vcardBtn = document.getElementById('vcard-download');
    if (vcardBtn) {
        vcardBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Priscila Bertolaccini
TITLE:Especialista em Mechas e Colorimetria
TEL;TYPE=CELL:+5535998171030
URL:https://pribertolaccini.com.br
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
            
            // Visual feedback
            const btnContent = vcardBtn.querySelector('h3');
            const originalText = btnContent.innerText;
            btnContent.innerText = '✓ Salvo!';
            vcardBtn.style.background = '#4CAF50';
            
            setTimeout(() => {
                btnContent.innerText = originalText;
                vcardBtn.style.background = '';
            }, 3000);
        });
    }
});
