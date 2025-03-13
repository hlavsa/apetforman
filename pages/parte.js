import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/PartePage.module.css'; // Předpokládáme, že CSS je v samostatném souboru

export default function PartePage() {
  // State management
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDesignType, setSelectedDesignType] = useState('klasicke');
  const [showContactForm, setShowContactForm] = useState(false);
  const [availability, setAvailability] = useState({ isAvailable: false, message: '', dotColor: '' });
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
    { id: 1, image: '/images/parte/klasicke1.jpg', type: 'klasicke', title: 'Klasické parte' },
    { id: 2, image: '/images/parte/klasicke2.jpg', type: 'klasicke', title: 'Klasické parte s fotografií' },
    { id: 3, image: '/images/parte/klasicke3.jpg', type: 'klasicke', title: 'Klasické parte s křížem' },
    { id: 4, image: '/images/parte/tematicke1.jpg', type: 'tematicke', title: 'Tematické parte - příroda' },
    { id: 5, image: '/images/parte/tematicke2.jpg', type: 'tematicke', title: 'Tematické parte - koníčky' },
    { id: 6, image: '/images/parte/tematicke3.jpg', type: 'tematicke', title: 'Tematické parte - profese' }
  ];

  // FAQ items
  const faqs = [
    {
      id: 1,
      question: "Jak rychle mohu dostat parte?",
      answer: "S pochopením pro citlivost situace pro Vás připravím první návrh do 24-48 hodin od našeho spojení. Pokud je situace naléhavá, mohu nabídnout i rychlejší zpracování. Finální verzi obdržíte ihned po schválení návrhu."
    },
    {
      id: 2,
      question: "Kolik úprav je možné provést?",
      answer: "Neomezený počet úprav, dokud nebudete s návrhem spokojeni. Chápu, že jde o citlivé rozhodování v těžké chvíli, a proto Vám poskytnu dostatek času a prostoru pro všechny změny, které budete potřebovat."
    },
    {
      id: 3,
      question: "V jakých formátech dostanu finální parte?",
      answer: "Obdržíte PDF připravené k tisku i v digitální verzi pro případné sdílení. Vše s jednoduchým návodem pro další použití, abyste se v této náročné době nemuseli zatěžovat technickými detaily."
    },
    {
      id: 4,
      question: "Jaké jsou možnosti tisku?",
      answer: "Soubor bude připraven pro použití v jakékoliv tiskárně. Pokud si nebudete vědět rady, ráda doporučím diskrétní a citlivé služby ve Vašem okolí, nebo mohu tisk zajistit pro Vás, abyste se tím nemuseli zabývat."
    },
    {
      id: 5,
      question: "Jak mohu poslat fotografii zesnulého?",
      answer: "Stačí jakákoli fotografie, která je Vám blízká a vystihuje osobnost Vašeho blízkého. Společně vybereme nejvhodnější záběr a podle potřeby provedu jemné úpravy, aby výsledek působil důstojně."
    },
    {
      id: 6,
      question: "Jaké formáty parte jsou k dispozici?",
      answer: "Nabízím běžné formáty jako A5, DL nebo čtvercový tvar, ale vždy se přizpůsobím Vašim potřebám. Formát není tak důležitý jako obsah a způsob, jakým uctí památku Vašeho blízkého."
    },
    {
      id: 7,
      question: "Může být parte osobní a jedinečné?",
      answer: "Ano, a právě o to se snažím - vytvořit parte, které skutečně odráží jedinečnost života Vašeho blízkého. Ať už miloval přírodu, měl zvláštní koníček nebo specifickou profesi, parte může citlivě odrážet jeho osobnost a to, co jej činilo výjimečným."
    },
    {
      id: 8,
      question: "Jak je zajištěna ochrana osobních údajů?",
      answer: "Se všemi informacemi nakládám s maximální citlivostí a diskrétností. Žádné údaje nejsou nikdy sdíleny s třetími stranami a veškeré materiály jsou používány výhradně pro vytvoření parte. Respektuji soukromí Vaší rodiny v tomto těžkém období."
    },
    {
      id: 9,
      question: "Co když potřebuji parte velmi rychle?",
      answer: "Chápu, že některé situace vyžadují okamžitou reakci. V naléhavých případech dokáži připravit parte i do 12 hodin. Stačí mi o této potřebě dát vědět a udělám vše pro to, abych Vám v této těžké chvíli vyšel/šla maximálně vstříc."
    },
    {
      id: 10,
      question: "Jak probíhá platba?",
      answer: "Platbu řešíme až po Vaší naprosté spokojenosti s návrhem. Symbolická částka slouží především na pokrytí nákladů, protože mým cílem není na Vašem zármutku vydělávat, ale nabídnout pomocnou ruku v těžké chvíli."
    }
  ];

  // Testimonials
  const testimonials = [
    {
      id: 1,
      name: "Jana K.",
      quote: "Děkuji za citlivý přístup při tvorbě parte pro mého tatínka. Ve chvíli, kdy jsem neměla sílu řešit další věci, jste mi nabídli pomocnou ruku a vytvořili důstojnou vzpomínku, která opravdu vystihovala jeho osobnost.",
      rating: 5
    },
    {
      id: 2,
      name: "Tomáš N.",
      quote: "V nejtěžším období mého života jsem ocenil Váš lidský přístup. Parte pro maminku bylo přesně takové, jak by si přála - jednoduché, ale plné lásky. Nešlo Vám o peníze, ale o skutečnou pomoc, a to se v dnešní době cení.",
      rating: 5
    },
    {
      id: 3,
      name: "Lucie P.",
      quote: "Hledala jsem způsob, jak vytvořit pro babičku parte, které by bylo stejně výjimečné jako ona sama. Díky Vašemu citlivému přístupu a trpělivosti při mnoha úpravách vzniklo něco, na co jsem skutečně hrdá, a co by potěšilo i ji.",
      rating: 5
    }
  ];

  // Use cases
  const useCases = [
    {
      id: 'klasicke',
      title: "Klasické parte",
      subtitle: "Tradiční vzpomínka",
      description: "Důstojné klasické parte s možností křesťanských symbolů i bez nich. Jednoduchý, ale působivý způsob, jak uctít památku Vašeho blízkého."
    },
    {
      id: 'tematicke',
      title: "TEMATICKÉ parte",
      subtitle: "Odraz jedinečné osobnosti",
      description: "Parte vytvořené tak, aby odráželo osobnost, záliby a životní lásky Vašeho blízkého. Způsob, jak skutečně oslavit jedinečný život, který zanechal stopu v našich srdcích."
    }
  ];

  // Process steps
  const processSteps = [
    {
      id: 1,
      number: "1",
      title: "Společná konzultace",
      description: "V klidném rozhovoru si povíme o Vašem blízkém a o tom, jak byste si přáli uctít jeho památku."
    },
    {
      id: 2,
      number: "2",
      title: "Citlivý návrh",
      description: "Vytvořím návrh parte, který odráží jedinečnost osobnosti Vašeho blízkého a respektuje Vaše přání."
    },
    {
      id: 3,
      number: "3",
      title: "Čas na rozmyšlenou",
      description: "Společně projdeme návrh a vneseme všechny úpravy, na které máte právo a které budou potřeba pro Vaši spokojenost."
    },
    {
      id: 4,
      number: "4",
      title: "Předání hotového parte",
      description: "Dostanete hotové parte v podobě, kterou potřebujete, společně s podporou pro případný tisk."
    }
  ];

  // Benefits
  const benefits = [
    {
      id: 1,
      title: "Lidský přístup",
      description: "Ke každému parte přistupuji s respektem k jedinečnosti života, který připomíná, a s vědomím citlivosti situace, ve které se nacházíte."
    },
    {
      id: 2,
      title: "Čas pro Vás",
      description: "Nikdy Vás nebudu tlačit do rychlých rozhodnutí. Vždy máte dostatek času přemýšlet a požádat o jakékoli úpravy."
    },
    {
      id: 3,
      title: "Vstřícnost a pochopení",
      description: "Rozumím, že procházíte těžkým obdobím. Přizpůsobím se Vašim možnostem a potřebám, ať už jde o čas, komunikaci nebo finance."
    },
    {
      id: 4,
      title: "Důstojná vzpomínka",
      description: "Společně vytvoříme parte, které bude skutečně důstojnou vzpomínkou na život, který měl význam a zanechal stopu."
    }
  ];

  // Pricing plans
  const pricingPlans = [
    {
      id: 'klasicke',
      title: 'KLASICKÉ PARTE',
      description: 'Důstojné tradiční zpracování',
      price: '200 Kč',
      features: [
        'Tradiční citlivý design',
        'Fotografie Vašeho blízkého',
        'Neomezený počet úprav',
        'Dodání podle Vašich potřeb',
        'PDF připravené k tisku',
        'Podpora při zajištění tisku'
      ]
    },
    {
      id: 'tematicke',
      title: 'TEMATICKÉ PARTE',
      description: 'Vzpomínka odrážející jedinečnost',
      price: '350 Kč',
      features: [
        'Personalizovaný design',
        'Více fotografií a osobních prvků',
        'Neomezený počet úprav',
        'Možnost rychlého zpracování',
        'Kompletní tisková příprava',
        'Možnost textových úprav'
      ]
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

  const checkAvailability = () => {
    const now = new Date();
    const hours = now.getHours();
    const isAvailable = hours >= 10 && hours < 18;
    
    return {
      isAvailable,
      message: isAvailable ? 'Jsem tu pro Vás' : 'Teď nejsem k dispozici',
      dotColor: isAvailable ? '#4CAF50' : '#FF5252' // Green for available, red for unavailable
    };
  };

  // Reset current slide when design type changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [selectedDesignType]);

  useEffect(() => {
    const updateAvailability = () => {
      setAvailability(checkAvailability());
    };
    
    // Set initial availability
    updateAvailability();
    
    // Update every minute
    const intervalId = setInterval(updateAvailability, 60000);
    
    // Cleanup interval on unmount
    return () => clearInterval(intervalId);
  }, []);

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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    try {
      // Vytvoření textu e-mailu z údajů ve formuláři
      const subject = `Žádost o vytvoření parte - ${formData.designType === 'klasicke' ? 'Klasické' : 'Osobní tematické'}`;
      
      const body = `
  Dobrý den Petro,
  
  chtěl/a bych Vás požádat o vytvoření parte pro mého blízkého.
  
  Moje údaje:
  Jméno: ${formData.name}
  E-mail: ${formData.email}
  Telefon: ${formData.phone || 'Neuvedeno'}
  
  Typ parte: ${formData.designType === 'klasicke' ? 'Klasické' : 'Osobní tematické'}
  
  Moje zpráva:
  ${formData.message}
  
  Fotografie a další nápady posílám v příloze e-mailu.
  
      `;
      
      // Zakódování pro použití v mailto:
      const encodedSubject = encodeURIComponent(subject);
      const encodedBody = encodeURIComponent(body);
      
      // Vytvoření mailto: odkazu
      const mailtoLink = `mailto:petraformankova@icloud.com?subject=${encodedSubject}&body=${encodedBody}`;
      
      // Nejprve zobrazíme potvrzení přímo ve formuláři
      setSubmitStatus({
        submitted: true,
        message: "Otevírám váš e-mailový klient... Pokud se neotevře automaticky, zkontrolujte prosím nastavení vašeho prohlížeče."
      });
      
      // Krátká prodleva pro lepší UX
      setTimeout(() => {
        // Otevření e-mailového klienta
        window.location.href = mailtoLink;
        
        // ODSTRANĚNO: Nezavíráme drawer, aby zůstal otevřený
        // setShowContactForm(false);
        // document.body.style.overflow = 'auto';
        
        // Aktualizace statusu pro potvrzení po úspěšném otevření
        setSubmitStatus({
          submitted: true,
          message: "E-mailový klient byl otevřen. Po odeslání e-mailu můžete tento formulář zavřít."
        });
      }, 5000);
      
      // Reset formuláře NENÍ proveden, aby uživatel viděl, co odeslal
      // Pokud chcete zachovat data ve formuláři, odstraňte následující reset
      /*
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        designType: selectedDesignType
      });
      */
      
    } catch (error) {
      console.error("Chyba při otevírání e-mailového klienta:", error);
      setSubmitStatus({
        submitted: true,
        message: "Nepodařilo se otevřít e-mailový klient. Prosím, kontaktujte nás přímo na petraformankova@icloud.com."
      });
    }
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

  return (
    <div className={styles.pageRoot}>
      <Head>
        <title>Důstojné parte s lidským přístupem | Vzpomínka s úctou</title>
        <meta name="description" content="Pomohu Vám vytvořit parte, které důstojně uctí památku Vašeho blízkého. S pochopením, lidským přístupem a za symbolickou cenu, protože nechci vydělávat na Vašem zármutku." />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Navigation bar */}
      <nav className={styles.topNav}>
        <Link href="/" className={styles.backLink}>
          ← Zpět na hlavní stránku
        </Link>
        <ul className={styles.navLinks}>
          <li><a href="#jak-to-funguje">Jak Vám pomohu</a></li>
          <li><a href="#typy-parte">Typy parte</a></li>
          <li><a href="#vyhody">Proč se na mě obrátit</a></li>
          <li><a href="#cenik">Cena</a></li>
        </ul>
      </nav>

      {/* Hero section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <p className={styles.heroTagline}>Uctít dobře prožitý život, který zanechal stopu</p>
          
          <h1 className={styles.heroTitle}>
            DŮSTOJNÉ <span className={styles.highlightedParte}>PARTE</span><br />S LIDSKÝM<br />PŘÍSTUPEM
          </h1>
          
          <p className={styles.heroNote}>
          Poskytuji rychlé, citlivé a personalizované zpracování parte do 48 hodin,<br />
            <span className={styles.highlighted}>s možností express dodání do 24 hodin</span>.
          </p>
          
          <button onClick={toggleContactForm} className={styles.ctaBtn}>
            KONTAKTUJTE MĚ
          </button>
          
          <div className={styles.availabilityInfo}>
          <span className={styles.availabilityBadge}>
            <span className={styles.availabilityDot} style={{ backgroundColor: availability.dotColor }}></span>
            {availability.message}
            </span>
            <span className={styles.priceBadge}>•</span>
            <span className={styles.priceBadge}>od 200 Kč</span>
            <span className={styles.priceBadge}>•</span>
            <span className={styles.priceBadge}>Nechci vydělávat na vašem zármutku</span>
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section className={styles.testimonialsSection}>
        <h2 className={styles.sectionTitle}>ZKUŠENOSTI OSTATNÍCH V PODOBNÉ SITUACI</h2>
        <div className={styles.testimonialsContainer}>
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className={styles.testimonialCard}>
              <div className={styles.rating}>
                {Array(testimonial.rating).fill('★').join('')}
              </div>
              <p className={styles.quote}>{testimonial.quote}</p>
              <p className={styles.author}>{testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process section */}
      <section id="jak-to-funguje" className={styles.processSectionSteps}>
        <h2 className={styles.sectionTitle}>JAK VÁM MOHU POMOCI</h2>
        <p className={styles.sectionIntro}>
          Lidský přístup a pochopení v těžké chvíli. Jsem tu, abych Vám ulehčila jeden z mnoha úkolů, které před Vámi nyní stojí.
        </p>
        
        <div className={styles.processSteps}>
          {processSteps.map((step, index) => (
            <div key={step.id} className={styles.processStep}>
              <div className={styles.stepNumber}>{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {index < processSteps.length - 1 && (
                <div className={styles.stepArrow}>→</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Types of parte section */}
      <section id="typy-parte" className={styles.typesSection}>
        <h2 className={styles.sectionTitle}>JAKÉ PARTE MOHU VYTVOŘIT</h2>
        <p className={styles.sectionIntro}>
          Každý člověk je jedinečný a zaslouží si vzpomínku, která odráží jeho osobnost, hodnoty a to, co v životě miloval.
        </p>
        
        {/* Types selection */}
        <div className={styles.useCasesGrid}>
          {useCases.map(useCase => (
            <div 
              key={useCase.id} 
              className={`${styles.useCaseCard} ${selectedDesignType === useCase.id ? styles.activeUseCase : ''}`}
              onClick={() => setSelectedDesignType(useCase.id)}
            >
              <h3>{useCase.title}</h3>
              <p className={styles.subtitle}>{useCase.subtitle}</p>
              <p className={styles.smallText}>{useCase.description}</p>
            </div>
          ))}
        </div>
        
        {/* Carousel for examples */}
        <div className={styles.carouselWrap}>
          <div className={styles.carouselContainer}>
            {filteredSlides.map((slide, index) => (
              <div 
                key={slide.id}
                className={index === currentSlide ? styles.carouselSlideActive : styles.carouselSlide}
              >
                <img src={slide.image} alt={slide.title} />
                <div className={styles.slideLabel}>{slide.title}</div>
              </div>
            ))}
          </div>
          <div className={styles.carouselControls}>
            <button onClick={handlePrevSlide}>Předchozí</button>
            <button onClick={handleNextSlide}>Další</button>
          </div>
        </div>
      </section>

      {/* Benefits section */}
      <section id="vyhody" className={styles.benefitsSection}>
        <h2 className={styles.sectionTitle}>PROČ SE NA MĚ OBRÁTIT</h2>
        <p className={styles.sectionIntro}>
          Vytvořit parte je citlivý úkol, který vyžaduje lidský přístup a respekt k jedinečnosti života, který připomíná.
        </p>
        
        <div className={styles.benefitsGrid}>
          {benefits.map(benefit => (
            <div key={benefit.id} className={styles.benefitCard}>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing section */}
      <section id="cenik" className={styles.pricingSection}>
        <h2 className={styles.sectionTitle}>CENÍK</h2>
        <p className={styles.sectionIntro}>
          Nechci na Vašem zármutku vydělávat. Částka slouží pouze k pokrytí základních nákladů a času, který přípravě parte věnuji.
        </p>
        <p className={styles.sectionIntro}>Pokud se nacházíte v náročné finanční situaci, neváhejte mě kontaktovat – vždy najdeme řešení.</p>
        
        <div className={styles.pricingCards}>
          {pricingPlans.map(plan => (
            <div 
              key={plan.id} 
              className={`${styles.pricingCard}`}
            >
              <h3>{plan.title}</h3>
              <p className={styles.planDesc}>{plan.description}</p>
              <ul className={styles.planFeatures}>
                {plan.features.map((feature, index) => (
                  <li key={index}>
                    <span className={styles.checkmark}>✓</span> {feature}
                  </li>
                ))}
              </ul>
              <p className={styles.planPrice}>{plan.price}</p>
              
              <button 
                onClick={() => {
                  toggleContactForm();
                }}
                className={styles.selectPlanBtn}
              >
                Kontaktujte mě
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>REKAPITULACE</h2>
        <p className={styles.sectionIntro}>
          Zde najdete odpovědi na nejčastější otázky. Pokud byste se chtěli zeptat na cokoliv dalšího, neváhejte mě kontaktovat.
        </p>
        
        <div className={styles.faqWrap}>
          {faqs.map(faq => (
            <div key={faq.id} className={styles.faqItem}>
              <button 
                className={`${styles.faqQ} ${showFaq === faq.id ? styles.faqQactive : ''}`}
                onClick={() => toggleFaq(faq.id)}
                aria-expanded={showFaq === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
              >
                {faq.question}
                <span className={styles.faqIcon}>
                  {showFaq === faq.id ? '−' : '+'}
                </span>
              </button>
              <div 
                id={`faq-answer-${faq.id}`}
                className={`${styles.faqA} ${showFaq === faq.id ? styles.faqAshow : ''}`}
                aria-hidden={showFaq !== faq.id}
              >
                <div className={styles.faqAcontent}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <h2>POMOCNÁ RUKA V TĚŽKÉ CHVÍLI</h2>
        <p>
          Vím, že nyní procházíte jedním z nejtěžších období života. Jsem tu, abych Vám nabídla pomocnou ruku 
          a vytvořila parte, které bude důstojnou vzpomínkou na Vašeho blízkého.
        </p>
        <button onClick={toggleContactForm} className={styles.ctaBtn}>
          KONTAKTUJTE MĚ
        </button>
      </section>

      {showConfirmation && (
        <div className={styles.confirmationOverlay}>
            <div className={styles.confirmationPanel}>
            <h2>Děkujeme za Vaši zprávu</h2>
            <p>Pro dokončení objednávky parte následujte tyto jednoduché kroky:</p>
            
            <ol className={styles.confirmationSteps}>
                <li>
                <h3>Zašlete e-mail s fotografiemi</h3>
                <p>Napište prosím e-mail na adresu <strong>petraformankova@icloud.com</strong></p>
                <p>Do předmětu uveďte: <strong>Parte - {submittedData?.name}</strong></p>
                </li>
                <li>
                <h3>Přiložte fotografie</h3>
                <p>Vyberte a přiložte kvalitní fotografie, které by měly být součástí parte.</p>
                </li>
                <li>
                <h3>Očekávejte odpověď</h3>
                <p>Ozvu se Vám co nejdříve s potvrzením a informacemi o dalším postupu.</p>
                </li>
            </ol>
            
            <p className={styles.confirmationNote}>
                Pokud byste měli jakékoliv otázky, neváhejte mě kontaktovat na tel. čísle: <strong>+420 123 456 789</strong>
            </p>
            
            <button 
                className={styles.confirmationCloseBtn}
                onClick={() => setShowConfirmation(false)}
            >
                Rozumím
            </button>
            </div>
        </div>
        )}

      {/* Modal with process explanation */}
      {/* Contact Form Drawer */}
{showContactForm && (
  <div 
    className={`${styles.drawerOverlay} ${styles.drawerOverlayOpen}`} 
    onClick={toggleContactForm}
  >
    <div 
      className={`${styles.drawerContainer} ${styles.drawerContainerOpen}`} 
      onClick={e => e.stopPropagation()}
    >
      <div className={styles.drawerHeader}>
        <h2>Spojte se se mnou</h2>
        <button onClick={toggleContactForm} className={styles.closeDrawerBtn}>×</button>
      </div>
      <div className={styles.drawerContent}>
        <form className={styles.contactForm} onSubmit={handleFormSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Vaše jméno</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">Telefon (nepovinné)</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="designType">Jaký typ parte Vás zajímá</label>
            <select
              id="designType"
              name="designType"
              value={formData.designType}
              onChange={handleInputChange}
            >
              <option value="klasicke">Klasické</option>
              <option value="tematicke">Osobní tematické</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Vaše zpráva nebo přání</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Zde můžete popsat, co byste si přáli nebo sdílet jakékoli informace o Vašem blízkém. Neváhejte napsat cokoliv, co považujete za důležité..."
              rows={5}
            ></textarea>
          </div>
          <div className={styles.formNote}>
            Odpovím Vám co nejdříve, obvykle do 24 hodin.
          </div>

          {submitStatus && submitStatus.submitted && (
                <div className={styles.submitStatusMessage}>
                <p>{submitStatus.message}</p>
                </div>
            )}
          <div className={styles.formGroup}>
            <button type="submit" className={styles.submitBtn}>
              Otevřít e-mailový klient
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
)}

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <p>Důstojné parte | Vzpomínka s úctou</p>
          <p>E-mail: <a href="mailto:petraformankova@icloud.com">petraformankova@icloud.com</a></p>
          <p>© 2025 Důstojné Parte | <span className={styles.footerMessage}>S respektem k životu, který zanechal stopu</span></p>
        </div>
      </footer>
    </div>
  );
}