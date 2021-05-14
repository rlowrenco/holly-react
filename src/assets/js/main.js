import ScrollReveal from 'scrollreveal';

export function setupScrollReveal() {
	if (document.body.classList.contains('has-animations')) {
		const { sr = ScrollReveal() } = window;

		sr.reveal('.hero-title, .hero-paragraph, .hero-form', {
			duration: 1000,
			distance: '40px',
			easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
			origin: 'top',
			interval: 150,
		});

		sr.reveal('.hero-ball', {
			delay: 1000,
			duration: 1400,
			distance: '40px',
			easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
			origin: 'bottom',
			interval: 200,
		});

		sr.reveal('.hero-illustration-browser, .hero-squares', {
			delay: 400,
			duration: 600,
			distance: '40px',
			easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
			origin: 'right',
			interval: 150,
		});
	}
}
