import React, { useState, useEffect } from 'react';
import styles from '../styles/PartePage.module.css';
import Head from 'next/head';
import Link from 'next/link';

// Custom layout for Parte page only
export default function PartePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDesignType, setSelectedDesignType] = useState('klasicke');
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    designType: 'klasicke'
  });
  const [showFaq, setShowFaq] = useState(null);

  // Collection of examples
  const slides = [
    { id: 1, image: '/images/parte/parte1.jpg', type: 'klasicke', title: 'Klasické parte' },
    { id: 2, image: '/images/parte/parte2.jpg', type: 'klasicke', title: 'Klasické parte s fotografií' },
    { id: 3, image: '/images/parte/moderne1.jpg', type: 'moderni', title: 'Moderní minimalistické parte' },
    { id: 4, image: '/images/parte/moderne2.jpg', type: 'moderni', title: 'Moderní parte s fotografií' },
    { id: 5, image: '/images/parte/tematicke1.jpg', type: 'tematicke', title: 'Tematické parte - příroda' },
    { id: 6, image: '/images/parte/tematicke2.jpg', type: 'tematicke', title: 'Tematické parte - koníčky' }
  ];

  // FAQ items
  const faqs = [
    {
      id: 1,
      question: "Jak rychle mohu dostat parte?",
      answer: "První návrh obdržíte do 24 hodin od zaslání potřebných informací a fotografií. Finální verzi dostanete ihned po schválení návrhu a přijetí platby."
    },
    {
      id: 2,
      question: "Mohu si parte nechat upravit podle svých představ?",
      answer: "Samozřejmě. Návrh můžeme upravovat dokud nebudete plně spokojeni. U klasického a moderního parte jsou v ceně 2-3 revize, u tematického parte neomezený počet revizí."
    },
    {
      id: 3,
      question: "Jak parte vytisknu?",
      answer: "Obdržíte PDF soubor ve vysokém rozlišení, který můžete vytisknout na domácí tiskárně nebo odnést do jakékoliv tiskárny. Poskytuji také instrukce pro tisk a doporučení na kvalitní papír."
    },
    {
      id: 4,
      question: "Může být parte plně personalizované?",
      answer: "Ano, parte můžeme přizpůsobit přesně osobnosti a zálibám Vašeho blízkého. Můžete zvolit barvy, motivy, texty i celkový styl podle svých představ."
    },
    {
      id: 5,
      question: "Jak probíhá platba?",
      answer: "Po schválení návrhu Vám zašlu jednoduché platební údaje. Cena je symbolická a nepřesáhne 200 Kč, protože nechci na Vašem bolu vydělávat."
    }
  ];

  // Testimonials
  const testimonials = [
    {
      id: 1,
      name: "Jana K.",
      quote: "Moc děkuji za krásné parte pro tatínka. I v takto těžké chvíli bylo příjemné spolupracovat s někým, kdo přistupuje k celé věci s takovou citlivostí a pochopením.",
      rating: 5
    },
    {
      id: 2,
      name: "Tomáš N.",
      quote: "Parte pro maminku bylo přesně takové, jak by si přála. Děkuji za rychlost a profesionalitu v této náročné situaci.",
      rating: 5
    },
    {
      id: 3,
      name: "Lucie P.",
      quote: "Neměla jsem představu, jak parte vytvořit. S Petrou to bylo jednoduché - stačilo poslat fotku a pár řádek o babičce a výsledek předčil očekávání.",
      rating: 5
    }
  ];

  // Use cases
  const useCases = [
    {
      id: 'klasicke',
      title: "Klasické parte",
      subtitle: "Tradiční vzpomínka",
      description: "Ideální, když chcete zachovat tradiční formát parte s možností přidat fotografii a osobní text."
    },
    {
      id: 'moderni',
      title: "Moderní parte",
      subtitle: "Současný přístup",
      description: "Pro ty, kteří preferují čistý design s důrazem na osobní prvky a estetiku."
    },
    {
      id: 'tematicke',
      title: "Tematické parte",
      subtitle: "Osobnost a záliby",
      description: "Návrh, který odráží koníčky, profesi nebo životní lásky Vašeho blízkého."
    }
  ];

  // Pain points and solutions
  const painPoints = [
    {
      id: 1,
      problem: "Nemám čas na zařizování parte",
      solution: "Stačí krátký e-mail či telefonát a vše zařídím za Vás během jednoho dne."
    },
    {
      id: 2,
      problem: "Nevím, jak parte vytvořit",
      solution: "Provedu Vás celým procesem od začátku do konce. Nepotřebujete žádné technické znalosti."
    },
    {
      id: 3,
      problem: "Potřebuji parte rychle",
      solution: "První návrh dostanete do 24 hodin, expresní dodání finální verze možné do 12 hodin."
    }
  ];

  // Benefits of service
  const benefits = [
    {
      id: 1,
      title: "Osobní přístup",
      description: "Každé parte vytvářím s respektem a citem pro jedinečnost Vašeho blízkého."
    },
    {
      id: 2,
      title: "Rychlé zpracování",
      description: "První návrh do 24 hodin, finální verze ihned po schválení."
    },
    {
      id: 3,
      title: "Symbolická cena",
      description: "Cena nepřesáhne 200 Kč, bez ohledu na typ parte nebo počet revizí."
    },
    {
      id: 4,
      title: "Plná kontrola",
      description: "Žádné zveřejnění bez Vašeho souhlasu, možnost kdykoliv proces ukončit."
    }
  ];

  // Filter slides by selected type
  const filteredSlides = slides.filter(slide => slide.type === selectedDesignType);

  // Handle showing a specific slide
  const showSlide = (slideIndex) => {
    if (slideIndex < 0 || slideIndex >= filteredSlides.length) {
      return;
    }
    setCurrentSlide(slideIndex);
  };

  // Reset current slide when design type changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [selectedDesignType]);

  // Handle previous slide button
  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      showSlide(currentSlide - 1);
    } else {
      // Loop to the last slide
      showSlide(filteredSlides.length - 1);
    }
  };

  // Handle next slide button
  const handleNextSlide = () => {
    if (currentSlide < filteredSlides.length - 1) {
      showSlide(currentSlide + 1);
    } else {
      // Loop to the first slide
      showSlide(0);
    }
  };

  // Toggle modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    // Disable/enable body scrolling when modal is open/closed
    document.body.style.overflow = isModalOpen ? 'auto' : 'hidden';
  };

  // Toggle contact form
  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
    setFormData({ ...formData, designType: selectedDesignType });
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Here would be code to send the form to the server
    alert('Děkuji za Váš zájem. Ozvu se Vám co nejdříve.');
    setShowContactForm(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      designType: selectedDesignType
    });
  };

  // Toggle FAQ
  const toggleFaq = (id) => {
    if (showFaq === id) {
      setShowFaq(null);
    } else {
      setShowFaq(id);
    }
  };

  // Cleanup function for body overflow when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Pricing plans - updated prices and characteristics
  const pricingPlans = [
    {
      id: 'klasicke',
      title: 'Klasické',
      price: 'od 200 Kč',
      features: [
        'Tradiční design',
        'Jedna fotografie',
        'Dvě revize návrhu',
        'Dodání do 24 hodin',
        'PDF připravené k tisku'
      ]
    },
    {
      id: 'moderni',
      title: 'Moderní',
      price: 'od 200 Kč',
      features: [
        'Moderní minimalistický design',
        'Až tři fotografie',
        'Tři revize návrhu',
        'Dodání do 24 hodin',
        'PDF připravené k tisku',
        'Editovatelný soubor'
      ]
    },
    {
      id: 'tematicke',
      title: 'Tematické',
      price: 'od 200 Kč',
      features: [
        'Zcela personalizovaný design',
        'Neomezený počet fotografií',
        'Neomezené revize návrhu',
        'Express dodání (do 12 hodin)',
        'PDF připravené k tisku',
        'Editovatelný soubor'
      ]
    }
  ];

  return (
    <div className={styles.parteRoot}>
      <Head>
        <title>Důstojné parte pro Vašeho blízkého | Personalizované parte za symbolickou cenu</title>
        <meta name="description" content="Vytvořím pro Vás parte přesně podle Vašich představ - tradiční, moderní nebo tematické. S úctou a citlivostí Vám pomůžu připomenout život, který za to opravdu stál. Symbolická cena do 200 Kč." />
      </Head>

      {/* Navigation bar - simple and clear */}
      <div className={styles.navBar}>
        <Link href="/" className={styles.homeLink}>
          <div className={styles.homeLinkInner}>← Zpět na hlavní stránku</div>
        </Link>
        <div className={styles.navLinks}>
          <a href="#ukazky" className={styles.navLink}>Ukázky</a>
          <a href="#vyhody" className={styles.navLink}>Výhody</a>
          <a href="#proces" className={styles.navLink}>Postup</a>
          <a href="#cenik" className={styles.navLink}>Ceník</a>
          <a href="#faq" className={styles.navLink}>FAQ</a>
        </div>
      </div>

      <div className={styles.pageContainer}>
        {/* Hero section - clear outcome */}
        <div className={styles.heroSection}>
          <div className={styles.starAccent}>✦</div>
          <div className={styles.heroContent}>
            <h1 className={styles.mainTitle}>Důstojné parte pro Vašeho blízkého</h1>
            <p className={styles.mainDescription}>
              Vytvořím pro Vás jedinečné parte, které s úctou připomene osobnost a životní cestu člověka, který byl Vašemu srdci blízký.
            </p>
            <div className={styles.heroObjection}>
              <p>Cena je symbolická a nepřekročí 200 Kč. Nechci se na Vašem bolu obohacovat.</p>
            </div>
            <div className={styles.statusContainer}>
              <div className={styles.statusWrapper}>
                <span className={styles.statusBadge}>
                  <span className={styles.statusDot}></span>
                  Jsem Vám k dispozici
                </span>
              </div>
            </div>
            <p className={styles.contactButtonContainer}>
              <button
                onClick={toggleContactForm}
                className={styles.ctaButton}
              >
                Kontaktujte mě
              </button>
            </p>
          </div>
        </div>

        {/* Social proof - build trust */}
        <div className={styles.testimonialsSection}>
          <h2 className={styles.sectionTitle}>Co o nás říkají klienti</h2>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className={styles.testimonialCard}>
                <div className={styles.testimonialRating}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className={styles.star}>★</span>
                  ))}
                </div>
                <p className={styles.testimonialQuote}>"{testimonial.quote}"</p>
                <p className={styles.testimonialAuthor}>{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Use cases */}
        <div id="ukazky" className={styles.useCasesSection}>
          <h2 className={styles.sectionTitle}>Druhy parte</h2>
          <div className={styles.useCasesGrid}>
            {useCases.map((useCase) => (
              <div 
                key={useCase.id} 
                className={styles.useCaseCard}
                onClick={() => setSelectedDesignType(useCase.id)}
              >
                <div className={`${styles.useCaseCardInner} ${selectedDesignType === useCase.id ? styles.selectedCard : ''}`}>
                  <h3 className={styles.useCaseTitle}>{useCase.title}</h3>
                  <p className={styles.useCaseSubtitle}>{useCase.subtitle}</p>
                  <p className={styles.useCaseDescription}>{useCase.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Product showcase */}
          <div className={styles.showcaseSection}>
            <div className={styles.designTypeSelector}>
              <button 
                className={`${styles.typeButton} ${selectedDesignType === 'klasicke' ? styles.activeType : ''}`}
                onClick={() => setSelectedDesignType('klasicke')}
              >
                Klasické
              </button>
              <button 
                className={`${styles.typeButton} ${selectedDesignType === 'moderni' ? styles.activeType : ''}`}
                onClick={() => setSelectedDesignType('moderni')}
              >
                Moderní
              </button>
              <button 
                className={`${styles.typeButton} ${selectedDesignType === 'tematicke' ? styles.activeType : ''}`}
                onClick={() => setSelectedDesignType('tematicke')}
              >
                Tematické
              </button>
            </div>
            
            <div className={styles.carouselSection}>
              <div className={styles.carouselContainer}>
                <div className={styles.carouselWrapper}>
                  {filteredSlides.map((slide, index) => (
                    <div 
                      key={slide.id}
                      className={`${styles.slideItem} ${index === currentSlide ? styles.activeSlide : styles.hiddenSlide}`}
                    >
                      <img
                        src={slide.image}
                        className={styles.slideImage}
                        alt={slide.title}
                      />
                      <div className={styles.slideCaption}>{slide.title}</div>
                    </div>
                  ))}
                </div>
                
                <div className={styles.slideIndicators}>
                  {filteredSlides.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      className={`${styles.indicator} ${index === currentSlide ? styles.activeIndicator : ''}`}
                      aria-current={index === currentSlide ? 'true' : 'false'}
                      aria-label={`Ukázka ${index + 1}`}
                      onClick={() => showSlide(index)}
                    ></button>
                  ))}
                </div>
                
                <button
                  type="button"
                  className={styles.prevButton}
                  onClick={handlePrevSlide}
                >
                  <span className={styles.controlButton}>
                    <svg
                      className={styles.controlIcon}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 1 1 5l4 4"
                      />
                    </svg>
                    <span className={styles.srOnly}>Předchozí</span>
                  </span>
                </button>
                <button
                  type="button"
                  className={styles.nextButton}
                  onClick={handleNextSlide}
                >
                  <span className={styles.controlButton}>
                    <svg
                      className={styles.controlIcon}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                    <span className={styles.srOnly}>Další</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Pain points */}
        <div className={styles.painPointsSection}>
          <h2 className={styles.sectionTitle}>S čím Vám pomohu</h2>
          <div className={styles.painPointsGrid}>
            {painPoints.map((painPoint) => (
              <div key={painPoint.id} className={styles.painPointCard}>
                <div className={styles.painPointProblem}>
                  <h3 className={styles.painPointTitle}>{painPoint.problem}</h3>
                </div>
                <div className={styles.painPointSolution}>
                  <p>{painPoint.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Why us */}
        <div className={styles.whyUsSection}>
          <h2 className={styles.sectionTitle}>Proč zvolit mé služby</h2>
          <div className={styles.whyUsContent}>
            <p className={styles.whyUsIntro}>
              Ztráta blízkého člověka přináší těžké chvíle. Vytvoření parte je jedním ze způsobů, jak důstojně uctít jeho památku a oznámit odchod ostatním. Nabízím Vám:
            </p>
            <div className={styles.whyUsGrid}>
              <div className={styles.whyUsItem}>
                <h3 className={styles.whyUsItemTitle}>Osobní přístup</h3>
                <p>Ke každému návrhu přistupuji s maximální citlivostí a respektem k Vaší situaci.</p>
              </div>
              <div className={styles.whyUsItem}>
                <h3 className={styles.whyUsItemTitle}>Symbolická cena</h3>
                <p>Cena nepřekročí 200 Kč, protože nechci na Vašem bolu vydělávat.</p>
              </div>
              <div className={styles.whyUsItem}>
                <h3 className={styles.whyUsItemTitle}>Rychlost zpracování</h3>
                <p>První návrh obdržíte do 24 hodin, finální verzi obratem po schválení.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* How it works */}
        <div id="proces" className={styles.processSection}>
          <h2 className={styles.sectionTitle}>Jak to funguje</h2>
          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>1</div>
              <h3 className={styles.stepTitle}>Kontakt</h3>
              <p className={styles.stepDescription}>
                Napište mi e-mail nebo vyplňte kontaktní formulář. Ozveme se Vám během několika hodin.
              </p>
            </div>
            
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>2</div>
              <h3 className={styles.stepTitle}>Sdílení</h3>
              <p className={styles.stepDescription}>
                Pošlete mi oblíbený text, fotografie nebo cokoliv, co Vám připomíná Vašeho blízkého.
              </p>
            </div>
            
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>3</div>
              <h3 className={styles.stepTitle}>Návrh</h3>
              <p className={styles.stepDescription}>
                Během jednoho dne Vám zašlu návrh v nízké kvalitě rozlišení, který můžeme dále upravovat.
              </p>
            </div>
            
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>4</div>
              <h3 className={styles.stepTitle}>Finalizace</h3>
              <p className={styles.stepDescription}>
                Po přijetí platby Vám obratem pošlu finální soubor, který si můžete vytisknout.
              </p>
            </div>
          </div>

          <div className={styles.processGuarantees}>
            <div className={styles.processGuarantee}>
              <span className={styles.guaranteeIcon}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.infoIcon}>
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 16H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <p>Bez Vašeho souhlasu nikdy nic nezveřejním.</p>
            </div>
            <div className={styles.processGuarantee}>
              <span className={styles.guaranteeIcon}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.infoIcon}>
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 16H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <p>Kdykoliv můžete kontakt přerušit, celou situaci si rozmyslet, neuchovávám žádná data.</p>
            </div>
          </div>
          
          <button
            onClick={toggleModal}
            className={styles.processButton}
          >
            Zobrazit podrobný postup
          </button>
        </div>
        
        {/* Benefits section */}
        <div id="vyhody" className={styles.benefitsSection}>
          <h2 className={styles.sectionTitle}>Hlavní výhody</h2>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit) => (
              <div key={benefit.id} className={styles.benefitCard}>
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                <p className={styles.benefitDescription}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing section */}
        <div id="cenik" className={styles.pricingSection}>
          <h2 className={styles.sectionTitle}>Ceník</h2>
          <div className={styles.pricingIntro}>
            <p>Cena za návrh a zpracování parte je symbolická a nepřekročí 200 korun. Nechci se na Vašem bolu obohacovat.</p>
          </div>
          <div className={styles.pricingGrid}>
            {pricingPlans.map((plan) => (
              <div key={plan.id} className={`${styles.pricingCard} ${selectedDesignType === plan.id ? styles.highlightedPlan : ''}`}>
                <h3 className={styles.pricingTitle}>{plan.title}</h3>
                <p className={styles.pricingPrice}>{plan.price}</p>
                <ul className={styles.featuresList}>
                  {plan.features.map((feature, index) => (
                    <li key={index} className={styles.featureItem}>
                      <svg className={styles.checkIcon} viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  className={styles.selectPlanButton}
                  onClick={() => {
                    setSelectedDesignType(plan.id);
                    toggleContactForm();
                  }}
                >
                  Vybrat
                </button>
              </div>
            ))}
          </div>
        </div>
        
        {/* FAQ section */}
        <div id="faq" className={styles.faqSection}>
          <h2 className={styles.sectionTitle}>Často kladené otázky</h2>
          <div className={styles.faqList}>
            {faqs.map((faq) => (
              <div key={faq.id} className={styles.faqItem}>
                <button 
                  className={`${styles.faqQuestion} ${showFaq === faq.id ? styles.faqQuestionActive : ''}`}
                  onClick={() => toggleFaq(faq.id)}
                >
                  {faq.question}
                  <span className={styles.faqIcon}>
                    {showFaq === faq.id ? '−' : '+'}
                  </span>
                </button>
                <div className={`${styles.faqAnswer} ${showFaq === faq.id ? styles.faqAnswerShow : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA section */}
        <div className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Důstojné parte během 24 hodin</h2>
          <p className={styles.ctaDescription}>
            Nechte mi na sebe kontakt a já se Vám ozvu co nejdříve, abychom společně vytvořili parte, které bude důstojnou vzpomínkou na Vašeho blízkého.
          </p>
          <button
            onClick={toggleContactForm}
            className={styles.ctaButtonLarge}
          >
            Kontaktujte mě nyní
          </button>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div
            className={styles.modalOverlay}
            onClick={toggleModal}
          >
            <div className={styles.modalContainer} onClick={e => e.stopPropagation()}>
              {/* Modal content */}
              <div className={styles.modalContent}>
                {/* Modal header */}
                <div className={styles.modalHeader}>
                  <h2 className={styles.modalTitle}>
                    Jaký je postup?
                  </h2>
                </div>
                
                {/* Modal body */}
                <div className={styles.modalBody}>
                  <ol className={styles.modalList}>
                    <li>Bez vašeho souhlasu nikdy nic nezveřejním.</li>
                    <li>
                      Cena bude symbolická, nepřekročí 200 korun, nechci se na vašem
                      bolu obohacovat.
                    </li>
                    <li>
                      V&nbsp;e-mailu zašlete oblíbený text, fotografie, barvu,
                      vzpomínku, cokoliv, co vám vašeho zesnulého může připomínat,
                      nebo co měl rád.
                    </li>
                    <li>
                      Během jednoho dne vám zpět, na váš&nbsp;e-mail, zašlu návrh
                      v&nbsp;nízké kvalitě rozlišení.
                    </li>
                    <li>Ten můžeme dál zdokonalovat. Bude to na vás.</li>
                    <li>
                      Kdykoliv můžete kontakt přerušit, celou situaci si rozmyslet,
                      neuchovávám žádná data.
                    </li>
                    <li>
                      Po přijetí platby, vám obratem, na váš&nbsp;e-mail, zašlu PDF,
                      které si můžete vytisknout
                    </li>
                  </ol>
                </div>
                
                {/* Modal footer */}
                <div className={styles.modalFooter}>
                  <button
                    onClick={toggleModal}
                    type="button"
                    className={styles.modalCloseButton}
                  >
                    Zavřít
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contact Form Modal */}
        {showContactForm && (
          <div className={styles.modalOverlay} onClick={toggleContactForm}>
            <div className={styles.formContainer} onClick={e => e.stopPropagation()}>
              <div className={styles.formHeader}>
                <h2 className={styles.formTitle}>Kontaktujte mě</h2>
                <button 
                  className={styles.formCloseButton} 
                  onClick={toggleContactForm}
                >
                  ×
                </button>
              </div>
              <form className={styles.contactForm} onSubmit={handleFormSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.formLabel}>Vaše jméno</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={styles.formInput}
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.formLabel}>E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={styles.formInput}
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.formLabel}>Telefon (nepovinné)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className={styles.formInput}
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="designType" className={styles.formLabel}>Typ parte</label>
                  <select
                    id="designType"
                    name="designType"
                    className={styles.formSelect}
                    value={formData.designType}
                    onChange={handleInputChange}
                  >
                    <option value="klasicke">Klasické</option>
                    <option value="moderni">Moderní</option>
                    <option value="tematicke">Tematické</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.formLabel}>Zpráva</label>
                  <textarea
                    id="message"
                    name="message"
                    className={styles.formTextarea}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Sdělte mi prosím Vaše požadavky, nebo cokoliv, co by mi mohlo pomoci připravit parte podle Vašich představ..."
                    rows={5}
                  ></textarea>
                </div>
                <div className={styles.formNote}>
                  Odpovím Vám co nejdříve, nejpozději však do 24 hodin.
                </div>
                <div className={styles.formGroup}>
                  <button type="submit" className={styles.formSubmitButton}>
                    Odeslat
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className={styles.footer}>
          <div className={styles.footerContent}>
            <div className={styles.footerLinks}>
              <a href="#" className={styles.footerLink}>Zásady ochrany soukromí</a>
              <a href="#" className={styles.footerLink}>Podmínky služby</a>
            </div>
            <div className={styles.footerInfo}>
              <p className={styles.footerText}>
                Dobře prožitý život | Parte na míru
              </p>
              <p className={styles.footerContact}>
                Email: petraformankova@icloud.com
              </p>
            </div>
            <p className={styles.footerCopyright}>
              © Petra Formánková / 2022
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}