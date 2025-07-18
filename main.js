document.addEventListener('DOMContentLoaded', () => {

    // =====================================================================
    // === FUNÇÃO PARA COR DE DESTAQUE ALEATÓRIA ===
    // =====================================================================
    const setRandomHighlightColor = () => {
        if (typeof iro === 'undefined') {
            console.warn("iro.js não foi carregado, usando cor padrão.");
            return;
        }

        // Se já existe uma cor salva, não define uma aleatória
        if (localStorage.getItem('highlightColor')) {
            return;
        }

        const MIN_BRIGHTNESS = 25;
        const MAX_BRIGHTNESS = 90;
        const MIN_SATURATION = 30;

        const randomHue = Math.floor(Math.random() * 361);
        const randomSaturation = Math.floor(MIN_SATURATION + (Math.random() * (100 - MIN_SATURATION)));
        const randomValue = Math.floor(MIN_BRIGHTNESS + (Math.random() * (MAX_BRIGHTNESS - MIN_BRIGHTNESS)));

        const tempColor = new iro.Color({ h: randomHue, s: randomSaturation, v: randomValue });
        const randomColorHex = tempColor.hexString;
        
        document.documentElement.style.setProperty('--cor-destaque', randomColorHex);
        localStorage.setItem('highlightColor', randomColorHex);
    };

    // =====================================================================
    // === FUNÇÃO PARA APLICAR COR SALVA ===
    // =====================================================================
    const applySavedHighlightColor = () => {
        const savedColor = localStorage.getItem('highlightColor');
        if (savedColor) {
            document.documentElement.style.setProperty('--cor-destaque', savedColor);
        }
    };


    // =====================================================================
    // === CORREÇÃO DO SCROLL PARA O TOPO (LINK INÍCIO) E SEÇÕES ===
    // =====================================================================
    document.querySelectorAll('.sidebar-nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === "#inicio") {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // =====================================================================
    // === LÓGICA DO EASTER EGG (MÃO E TÍTULO) ===
    // =====================================================================
    const contactNavLink = document.querySelector('.sidebar-nav a[href="#contato"]');
    const handContainer = document.getElementById('hand-easter-egg-container');
    const contactTitle = document.querySelector('#contato .section-title');

    if (contactNavLink && handContainer && contactTitle) {
        contactNavLink.addEventListener('click', (event) => {
            if (!handContainer.classList.contains('animate')) {
                handContainer.classList.add('animate');
                contactTitle.classList.add('blinking-title');

                setTimeout(() => {
                    handContainer.classList.remove('animate');
                    contactTitle.classList.remove('blinking-title');
                }, 2300);
            }
        });
    }

    // =====================================================================
    // === LÓGICA DE TRADUÇÃO (COPY ATUALIZADA) ===
    // =====================================================================
    const translations = {
        pt: {
            navHome: "Início",
            navAbout: "Sobre Mim",
            navExperience: "Experiência",
            navPortfolio: "Portfólio",
            navContact: "Contato",
            navArticles: "Artigos",
            navLocation: "São Paulo, Brasil",
            heroText: "Sou um comunicólogo e profissional de Relações Públicas apaixonado por criar conexões autênticas. Exploro o universo da tecnologia, cultura e design, sempre em busca de novas formas de contar histórias.",
            downloadButton: "Baixar",
            scrollingBanner: "apoie artistas independentes &nbsp;&nbsp;&nbsp;",
            experienceTitle: "Experiência",
            jobFreelancer: "Freelancer <br> <span class='at-symbol'>@</span> t.pr agency <span class='at-symbol'>@</span> Sollaris",
            jobInternCom: "Estagiário de Comunicação <br> <span class='at-symbol'>@</span> Rd Cultural",
            jobInternPr: "Estagiário de Relações Públicas <br><span class='at-symbol'>@</span> Unesp",
            jobAssistant: "Assistente de Compras <br> <span class='at-symbol'>@</span> Servimed",
            portfolioTitle: "(Projetos)",
            project1Name: "Nome do Projeto 1",
            project1Cat: "Branding",
            project2Name: "Nome do Projeto 2",
            project2Cat: "Website",
            project3Name: "Nome do Projeto 3",
            project3Cat: "Identidade Visual",
            project4Name: "Nome do Projeto 4",
            project4Cat: "Campanha",
            modalProjectName: "Nome do Projeto",
            modalProjectDesc: "Aqui vai a descrição detalhada do projeto, com mais imagens, vídeos e texto.",
            contactTitle: "Fale Comigo", // Revertido
            contactIntro: "Tem um projeto em mente ou uma pergunta? Quer colaborar ou apenas tomar um café para trocar ideias? Envie uma mensagem e vamos conversar.", // Revertido e refinado
            formName: "Seu Nome:",
            formNamePlaceholder: "Nome Completo",
            formEmail: "Seu E-mail:",
            formEmailPlaceholder: "seu.email@exemplo.com",
            formSubject: "Assunto:",
            formSubjectPlaceholder: "Orçamento, Parceria, Café...",
            formMessage: "Sua Mensagem:",
            formMessagePlaceholder: "Me conte um pouco sobre sua ideia...",
            formSubmit: "Enviar Mensagem",
            contactOtherTitle: "Outras Formas de Contato",
            contactPhone: "Telefone:",
            formSending: "Enviando...",
            formSuccess: "Mensagem enviada com sucesso!",
            formError: "Ocorreu um erro. Tente novamente.",
            formInvalid: "Por favor, corrija os erros.",
            formSuccessButton: "Enviado!",
            formErrorButton: "Erro! Tente Novamente",
        },
        en: {
            navHome: "Home",
            navAbout: "About Me",
            navExperience: "Experience",
            navPortfolio: "Portfolio",
            navContact: "Contact",
            navArticles: "Articles",
            navLocation: "São Paulo, Brazil",
            heroText: "I'm a communicologist and Public Relations professional passionate about creating authentic connections. I explore the universe of technology, culture, and design, always seeking new ways to tell stories.",
            downloadButton: "Download",
            scrollingBanner: "support independent artists &nbsp;&nbsp;&nbsp;",
            experienceTitle: "Experience",
            jobFreelancer: "Freelancer <br> <span class='at-symbol'>@</span> t.pr agency <span class='at-symbol'>@</span> Sollaris",
            jobInternCom: "Communication Intern <br> <span class='at-symbol'>@</span> Rd Cultural",
            jobInternPr: "Public Relations Intern <br><span class='at-symbol'>@</span> Unesp",
            jobAssistant: "Purchasing Assistant <br> <span class='at-symbol'>@</span> Servimed",
            portfolioTitle: "(Projects)",
            project1Name: "Project Name 1",
            project1Cat: "Branding",
            project2Name: "Project Name 2",
            project2Cat: "Website",
            project3Name: "Project Name 3",
            project3Cat: "Visual Identity",
            project4Name: "Project Name 4",
            project4Cat: "Campaign",
            modalProjectName: "Project Name",
            modalProjectDesc: "Here goes the detailed description of the project, with more images, videos, and text.",
            contactTitle: "Talk to Me", // Reverted
            contactIntro: "Have a project in mind or a question? Want to collaborate or just grab a coffee to exchange ideas? Send a message and let's talk.", // Reverted and refined
            formName: "Your Name:",
            formNamePlaceholder: "Full Name",
            formEmail: "Your E-mail:",
            formEmailPlaceholder: "your.email@example.com",
            formSubject: "Subject:",
            formSubjectPlaceholder: "Quote, Partnership, Coffee...",
            formMessage: "Your Message:",
            formMessagePlaceholder: "Tell me a little about your idea...",
            formSubmit: "Send Message",
            contactOtherTitle: "Other Ways to Contact",
            contactPhone: "Phone:",
            formSending: "Sending...",
            formSuccess: "Message sent successfully!",
            formError: "An error occurred. Please try again.",
            formInvalid: "Please correct the errors.",
            formSuccessButton: "Sent!",
            formErrorButton: "Error! Try Again",
        },
        es: {
            navHome: "Inicio",
            navAbout: "Sobre Mí",
            navExperience: "Experiencia",
            navPortfolio: "Portafolio",
            navContact: "Contacto",
            navArticles: "Artículos",
            navLocation: "São Paulo, Brasil",
            heroText: "Soy un comunicólogo y profesional de Relaciones Públicas apasionado por crear conexiones auténticas. Exploro el universo de la tecnología, la cultura y el diseño, siempre en busca de nuevas formas de contar historias.",
            downloadButton: "Descargar",
            scrollingBanner: "apoya a los artistas independientes &nbsp;&nbsp;&nbsp;",
            experienceTitle: "Experiencia",
            jobFreelancer: "Freelancer <br> <span class='at-symbol'>@</span> t.pr agency <span class='at-symbol'>@</span> Sollaris",
            jobInternCom: "Becario de Comunicación <br> <span class='at-symbol'>@</span> Rd Cultural",
            jobInternPr: "Becario de Relaciones Públicas <br><span class='at-symbol'>@</span> Unesp",
            jobAssistant: "Asistente de Compras <br> <span class='at-symbol'>@</span> Servimed",
            portfolioTitle: "(Proyectos)",
            project1Name: "Nome do Projeto 1",
            project1Cat: "Branding",
            project2Name: "Nome do Projeto 2",
            project2Cat: "Sitio Web",
            project3Name: "Nome do Projeto 3",
            project3Cat: "Identidade Visual",
            project4Name: "Nome do Projeto 4",
            project4Cat: "Campanha",
            modalProjectName: "Nome do Projeto",
            modalProjectDesc: "Aqui va la descripción detallada del proyecto, con más imágenes, videos y texto.",
            contactTitle: "Hable Conmigo", // Revertido
            contactIntro: "¿Tienes un proyecto en mente o una pregunta? ¿Quieres colaborar o simplemente tomar un café para intercambiar ideas? Envía un mensaje y hablemos.", // Revertido y refinado
            formName: "Tu Nombre:",
            formNamePlaceholder: "Nombre Completo",
            formEmail: "Tu E-mail:",
            formEmailPlaceholder: "tu.email@ejemplo.com",
            formSubject: "Asunto:",
            formSubjectPlaceholder: "Presupuesto, Colaboración, Café...",
            formMessage: "Tu Mensaje:",
            formMessagePlaceholder: "Cuéntame un poco sobre tu idea...",
            formSubmit: "Enviar Mensagem",
            contactOtherTitle: "Otras Formas de Contacto",
            contactPhone: "Teléfono:",
            formSending: "Enviando...",
            formSuccess: "¡Mensaje enviado con éxito!",
            formError: "Ocurrió un error. Inténtalo de nuevo.",
            formInvalid: "Por favor, corrija los errores.",
            formSuccessButton: "¡Enviado!",
            formErrorButton: "¡Error! Inténtalo de nuevo",
        }
    };

    const langButtons = document.querySelectorAll('.lang-button');
    const translatableElements = document.querySelectorAll('[data-translate-key]');
    const translatablePlaceholders = document.querySelectorAll('[data-translate-key-placeholder]');

    const setLanguage = (lang) => {
        translatableElements.forEach(el => {
            const key = el.dataset.translateKey;
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        translatablePlaceholders.forEach(el => {
            const key = el.dataset.translateKeyPlaceholder;
            if (translations[lang] && translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });
        
        langButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        localStorage.setItem('language', lang);
    };

    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedLang = button.dataset.lang;
            setLanguage(selectedLang);
        });
    });

    // =====================================================================
    // === LÓGICA DE TEMA (DIURNO/NOTURNO) ===
    // =====================================================================
    const themeToggleButtons = document.querySelectorAll('.theme-toggle-button');
const body = document.body;

const applyTheme = (theme) => {
    if (theme === 'night') {
        body.classList.add('night-mode');
    } else {
        body.classList.remove('night-mode');
    }
};

themeToggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        const isNightMode = body.classList.contains('night-mode');
        const newTheme = isNightMode ? 'day' : 'night';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    });
});

    // =====================================================================
    // === SELETOR DE CORES (IRO.JS) E LÓGICA RESPONSIVA ===
    // =====================================================================
    
    const pickerContainer = document.querySelector('.color-picker-container');
    const hexInput = document.getElementById('hexInput');
    const heroSection = document.querySelector('.hero-section');
    const image1Container = document.getElementById('image1');

    if (pickerContainer && hexInput && typeof iro !== 'undefined') {
        
        const initialColor = getComputedStyle(document.documentElement).getPropertyValue('--cor-destaque').trim();

        const colorPicker = new iro.ColorPicker(pickerContainer, {
            width: 150,
            color: initialColor,
            borderWidth: 0,
            borderColor: "#ffffff",
            layout: [ 
                { component: iro.ui.Slider, options: { sliderType: 'hue' } },
                { component: iro.ui.Slider, options: { sliderType: 'value' } }
            ]
        });

        hexInput.value = colorPicker.color.hexString;

        colorPicker.on('color:change', (color) => {
            
            const MIN_BRIGHTNESS = 40;
            const MAX_BRIGHTNESS = 90;
            const MIN_SATURATION = 50;

            let { h, s, v } = color.hsv;

            if (v < MIN_BRIGHTNESS) { v = MIN_BRIGHTNESS; }
            if (v > MAX_BRIGHTNESS) { v = MAX_BRIGHTNESS; }
            if (s < MIN_SATURATION) { s = MIN_SATURATION; }
            
            color.hsv = { h, s, v };
            
            const novaCorHex = color.hexString;
            document.documentElement.style.setProperty('--cor-destaque', novaCorHex);
            hexInput.value = novaCorHex;
            
            localStorage.setItem('highlightColor', novaCorHex);
        });

        hexInput.addEventListener('input', () => {
            const valor = hexInput.value;
            if (/^#[0-9a-fA-F]{6}$/.test(valor)) {
                colorPicker.color.hexString = valor;
            }
        });
    }

    // --- LÓGICA CORRIGIDA PARA POSICIONAMENTO DO COLOR PICKER ---
    const handleColorPickerLayout = () => {
        if (!heroSection || !image1Container || !pickerContainer) {
            return;
        }

        if (window.innerWidth <= 768) {
            // Mobile: Se o elemento seguinte ao hero-section não for o picker, mova-o para lá.
            if (heroSection.nextElementSibling !== pickerContainer) {
                heroSection.after(pickerContainer);
            }
        } else {
            // Desktop: Se o pai do picker não for o container da imagem, mova-o de volta.
            if (pickerContainer.parentElement !== image1Container) {
                image1Container.appendChild(pickerContainer);
            }
        }
    };

    // Executa no carregamento e no redimensionamento da tela
    handleColorPickerLayout();
    window.addEventListener('resize', handleColorPickerLayout);


    // =====================================================================
    // === BOTÃO DE DOWNLOAD ===
    // =====================================================================
    const downloadButton = document.getElementById('downloadButton');
    const caricatureImageElement = document.querySelector('#image1 .main-cascade-image');

    if (downloadButton && caricatureImageElement) {
        downloadButton.addEventListener('click', () => {
            try {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');

                canvas.width = caricatureImageElement.naturalWidth;
                canvas.height = caricatureImageElement.naturalHeight;

                const backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--cor-destaque').trim();

                ctx.fillStyle = backgroundColor;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(caricatureImageElement, 0, 0);

                const link = document.createElement('a');
                link.download = 'caricatura-henrique-marinhos.jpg'; 
                link.href = canvas.toDataURL('image/jpeg', 0.95); 

                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

            } catch (e) {
                console.error("Erro ao tentar baixar a imagem:", e);
                alert("Ocorreu um erro ao tentar baixar a imagem. Isso pode ser devido a restrições de segurança do seu navegador ao executar arquivos locais.");
            }
        });
    }

    // =====================================================================
    // === COLOR PICKER NA SIDEBAR E MOBILE NAV (IRO.JS) ===
    // =====================================================================
function setupSidebarColorPicker(containerSelector, inputSelector, iroContainerSelector) {
    const container = document.querySelector(containerSelector);
    const hexInput = container ? container.querySelector(inputSelector) : null;
    const iroDiv = container ? container.querySelector(iroContainerSelector) : null;

    if (container && hexInput && iroDiv && typeof iro !== 'undefined') {
        iroDiv.innerHTML = '';
        const initialColor = getComputedStyle(document.documentElement).getPropertyValue('--cor-destaque').trim();

        // Reduz altura e remove padding extra do container
        iroDiv.style.minHeight = '28px';
        iroDiv.style.display = 'flex';
        iroDiv.style.flexDirection = 'column';
        iroDiv.style.alignItems = 'center';
        iroDiv.style.justifyContent = 'center';
        iroDiv.style.padding = '0';
        iroDiv.style.margin = '0';

        // Apenas dois sliders: hue e value (brilho). Remove qualquer campo extra.
        const colorPicker = new iro.ColorPicker(iroDiv, {
            width: 100,
            color: initialColor,
            borderWidth: 0,
            borderColor: "#ffffff",
            layout: [
                { component: iro.ui.Slider, options: { sliderType: 'hue', sliderHeight: 14, sliderHandleHeight: 13 } },
                { component: iro.ui.Slider, options: { sliderType: 'value', sliderHeight: 14, sliderHandleHeight: 13 } }
            ]
        });

        // Ajusta sliders e handles para ficarem dentro do card e não ultrapassarem
        setTimeout(() => {
            const sliders = iroDiv.querySelectorAll('.IroSlider');
            sliders.forEach(slider => {
                slider.style.margin = '3px auto 0 auto';
                slider.style.width = '100%';
                slider.style.maxWidth = window.innerWidth <= 768 ? '110px' : '100px';
                slider.style.minWidth = window.innerWidth <= 768 ? '80px' : '60px';
                slider.style.height = window.innerWidth <= 768 ? '18px' : '14px';
                slider.style.borderRadius = window.innerWidth <= 768 ? '9px' : '7px';
                slider.style.overflow = 'hidden';
                slider.style.padding = '0';
                slider.style.position = 'relative';
            });
            const handles = iroDiv.querySelectorAll('.IroSliderHandle');
            handles.forEach(handle => {
                handle.style.width = window.innerWidth <= 768 ? '17px' : '13px';
                handle.style.height = window.innerWidth <= 768 ? '17px' : '13px';
                handle.style.minWidth = '0';
                handle.style.minHeight = '0';
                handle.style.maxWidth = window.innerWidth <= 768 ? '17px' : '13px';
                handle.style.maxHeight = window.innerWidth <= 768 ? '17px' : '13px';
                handle.style.top = '50%';
                handle.style.left = '50%';
                handle.style.transform = 'translate(-50%, -50%)';
                handle.style.right = 'auto';
                handle.style.position = 'absolute';
                handle.style.boxShadow = '0 0 0 1.5px #fff, 0 0 0 2.5px var(--color-border)';
                handle.style.border = '1.5px solid var(--color-border)';
            });
        }, 100);

        hexInput.value = colorPicker.color.hexString;

        colorPicker.on('color:change', (color) => {
            const MIN_BRIGHTNESS = 40;
            const MAX_BRIGHTNESS = 90;
            const MIN_SATURATION = 50;
            let { h, s, v } = color.hsv;
            if (v < MIN_BRIGHTNESS) { v = MIN_BRIGHTNESS; }
            if (v > MAX_BRIGHTNESS) { v = MAX_BRIGHTNESS; }
            if (s < MIN_SATURATION) { s = MIN_SATURATION; }
            color.hsv = { h, s, v };
            const novaCorHex = color.hexString;
            document.documentElement.style.setProperty('--cor-destaque', novaCorHex);
            hexInput.value = novaCorHex;
            localStorage.setItem('highlightColor', novaCorHex);
        });

        hexInput.addEventListener('input', () => {
            const valor = hexInput.value;
            if (/^#[0-9a-fA-F]{6}$/.test(valor)) {
                colorPicker.color.hexString = valor;
            }
        });
    }
}

// Inicializa o color picker na sidebar (desktop)
setupSidebarColorPicker('.sidebar-nav .sidebar-color-picker', '.hex-input', '#colorPickerSidebar');
// Inicializa o color picker na mobile-nav (mobile)
setupSidebarColorPicker('.mobile-nav .sidebar-color-picker', '.hex-input', '#colorPickerMobile');

    // =====================================================================
    // === CASCATA DE IMAGENS HERO (ALTERNÂNCIA DE FOTOS) ===
    // =====================================================================
    const cascadeContainer = document.getElementById('cascadeContainer');
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');

    if (cascadeContainer && image1 && image2) {
        cascadeContainer.addEventListener('click', (event) => {
            // Não alterna se clicar em um color picker ou input dentro da sidebar/mobile-nav
            const isColorPicker = event.target.closest('.sidebar-color-picker');
            if (isColorPicker) return;
            image1.classList.toggle('top-image');
            image1.classList.toggle('bottom-image');
            image2.classList.toggle('top-image');
            image2.classList.toggle('bottom-image');
        });
    }
    
    // =====================================================================
    // === HOVER LISTA DE EXPERIÊNCIA ===
    // =====================================================================
    const experienceItemsV2 = document.querySelectorAll('.experience-item-v2');

    experienceItemsV2.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.classList.add('highlighted');
        });

        item.addEventListener('mouseout', () => {
            item.classList.remove('highlighted');
        });
    });

    // =====================================================================
    // === JANELA MODAL PORTFÓLIO ===
    // =====================================================================
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const modalOverlay = document.getElementById('projectModal');
    const modalCloseButton = document.getElementById('modalCloseButton');

    if (modalOverlay && modalCloseButton) { 
        portfolioItems.forEach(item => {
            item.addEventListener('click', () => {
                item.classList.add('opening');
                document.body.classList.add('modal-open'); 

                setTimeout(() => {
                    modalOverlay.classList.add('visible');
                }, 300);
            });
        });

        const closeModal = () => {
            modalOverlay.classList.remove('visible');
            document.body.classList.remove('modal-open');

            setTimeout(() => {
                const openingItem = document.querySelector('.portfolio-item.opening');
                if (openingItem) {
                    openingItem.classList.remove('opening');
                }
            }, 400); 
        }

        modalCloseButton.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', (event) => {
            if (event.target === modalOverlay) {
                closeModal();
            }
        });
    }
    
    // =====================================================================
    // === FORMULÁRIO DE CONTATO (LÓGICA DE FEEDBACK NO BOTÃO) ===
    // =====================================================================
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        const googleScriptURL = 'https://script.google.com/macros/s/AKfycbyGeCv27IzkZXXL23PgcLPo-nccHMf0vWONfwaQljIzlNPzo-CaSl2A0tqSPMNIfZM-lw/exec';
        const formInputs = contactForm.querySelectorAll('input, textarea');
        const submitButton = contactForm.querySelector('.submit-button');
        
        const validateField = (input) => {
            const errorSpan = document.getElementById(`${input.id}Error`);
            const value = input.value.trim();
            let errorMessage = '';

            if (input.hasAttribute('required') && value === '') {
                errorMessage = 'Este campo é obrigatório.';
            } else if (input.type === 'email' && value !== '' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                errorMessage = 'Por favor, insira um e-mail válido.';
            }

            if (errorSpan) {
                errorSpan.textContent = errorMessage;
            }
            
            if (errorMessage) {
                input.classList.add('invalid');
                return false;
            } else {
                input.classList.remove('invalid');
                return true;
            }
        };

        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            let isFormValid = true;
            formInputs.forEach(input => {
                if (!validateField(input)) {
                    isFormValid = false;
                }
            });

            const currentLang = localStorage.getItem('language') || 'pt';
            const originalButtonText = translations[currentLang].formSubmit;

            const resetButton = (delay) => {
                setTimeout(() => {
                    submitButton.classList.remove('success', 'error');
                    submitButton.textContent = originalButtonText;
                    submitButton.disabled = false;
                }, delay);
            };

            if (isFormValid) {
                submitButton.disabled = true;
                submitButton.textContent = translations[currentLang].formSending;
                
                fetch(googleScriptURL, {
                    method: 'POST',
                    body: new FormData(contactForm)
                })
                .then(response => response.json())
                .then(data => {
                    if (data.result === 'success') {
                        contactForm.reset();
                        formInputs.forEach(input => input.classList.remove('invalid'));
                        submitButton.classList.add('success');
                        submitButton.textContent = translations[currentLang].formSuccessButton;
                        resetButton(4000); 
                    } else {
                        console.error('Erro retornado pelo Google Script:', data.error);
                        submitButton.classList.add('error');
                        submitButton.textContent = translations[currentLang].formErrorButton;
                        resetButton(5000);
                    }
                })
                .catch(error => {
                    console.error('Erro ao enviar o formulário:', error);
                    submitButton.classList.add('error');
                    submitButton.textContent = translations[currentLang].formErrorButton;
                    resetButton(5000);
                });

            }
        });

        formInputs.forEach(input => {
            input.addEventListener('blur', () => validateField(input));
            input.addEventListener('input', () => {
                if(submitButton.classList.contains('error')) {
                    submitButton.classList.remove('error');
                    const currentLang = localStorage.getItem('language') || 'pt';
                    submitButton.textContent = translations[currentLang].formSubmit;
                }
            });
        });
    }

    // =====================================================================
    // === SCROLLSPY DA BARRA LATERAL ===
    // =====================================================================
    const scrollSpyLinks = document.querySelectorAll('.sidebar-nav a');
    const sections = document.querySelectorAll('section[id], div.hero-section[id]');

    const onScroll = () => {
        const scrollPosition = window.scrollY + (window.innerHeight / 2);

        let activeSet = false;
        sections.forEach(section => {
            if (section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
                const currentId = section.getAttribute('id');
                scrollSpyLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
                });
                activeSet = true;
            }
        });

        // Se nenhuma seção estiver ativa (ex: no topo da página), ativa o "Início"
        if (!activeSet) {
             scrollSpyLinks.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === '#inicio');
            });
        }
    };

    window.addEventListener('scroll', onScroll);
    
    // =====================================================================
    // === LÓGICA DE TRANSIÇÃO DE PÁGINA ===
    // =====================================================================
    const mainContainer = document.querySelector('.container.fade-in-on-load');
    const allLinks = document.querySelectorAll('a');

    allLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Verifica se é um link para outra página .html e não um link interno (#) ou externo
            if (href && href.endsWith('.html') && !href.startsWith('http') && !href.startsWith('#')) {
                e.preventDefault(); 

                if (mainContainer) {
                    mainContainer.classList.add('fade-out-on-exit');
                }

                setTimeout(() => {
                    window.location.href = href;
                }, 600); // Deve corresponder à duração da animação fadeOutOnExit
            }
        });
    });
    
    // =====================================================================
    // === INICIALIZAÇÃO DA PÁGINA ===
    // =====================================================================
    applySavedHighlightColor(); 
    setRandomHighlightColor(); 
    const savedLanguage = localStorage.getItem('language') || 'pt';
    setLanguage(savedLanguage);
    onScroll();

});

/* =================================================================== */
/* === LÓGICA DO MENU HAMBÚRGUER (MOBILE) === */
/* =================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

    if (hamburgerBtn && mobileNav && mobileMenuOverlay) {
        const toggleMenu = () => {
            const isMenuOpen = hamburgerBtn.classList.contains('active');

            hamburgerBtn.classList.toggle('active');
            mobileNav.classList.toggle('open');
            mobileMenuOverlay.classList.toggle('visible');
            document.body.classList.toggle('modal-open');

            hamburgerBtn.setAttribute('aria-expanded', !isMenuOpen);
        };

        hamburgerBtn.addEventListener('click', toggleMenu);
        mobileMenuOverlay.addEventListener('click', toggleMenu);

        // Adicionado: Fecha o menu ao clicar em um link
        const navLinks = mobileNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });
    }