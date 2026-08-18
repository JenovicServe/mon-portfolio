export const translations = {
  fr: {
    // Navbar
    nav: {
      home: 'Accueil',
      about: 'À propos',
      projects: 'Projets',
      skills: 'Compétences',
      certifications: 'Certifications',
      contact: 'Contact'
    },
    // Hero
    hero: {
      title: 'Jenovic Kanyinda',
      roles: [
        'Administrateur Système Jr',
        'DevOps Jr',
        'Technicien Électricien',
        'Administrateur Réseaux'
      ],
      description: 'Polyvalent et passionné par l\'infrastructure IT, l\'automatisation DevOps et les solutions électriques innovantes',
      contactBtn: 'Me contacter',
      projectsBtn: 'Voir mes réalisations'
    },
    // About
    about: {
      title: 'À propos de moi',
      intro: 'Je suis',
      name: 'Jenovic Kanyinda',
      introText: 'Administrateur Systèmes & Réseaux Junior doté d\'une double compétence alliant 3 ans de terrain en Électricité BT et 2 ans de pratique en Administration Systèmes et Réseaux.',
      stats: {
        elec: 'Installations électriques',
        incidents: 'Incidents IT/Électrique',
        resolution: 'Taux de résolution'
      },
      projectsDone: 'Projets réalisés',
      resolved: 'Résolus pour particuliers et PME',
      firstIntervention: 'En première intervention'
    },
    // Projects
    projects: {
      title: 'Mes Réalisations',
      filters: {
        all: 'Tous',
        devops: 'DevOps & Networking',
        web: 'Développement Web'
      },
      projectsCount: 'projet affiché',
      projectsCountPlural: 'projets affichés',
      noProjects: 'Aucun projet dans cette catégorie.',
      features: 'Fonctionnalités clés',
      viewProject: 'Voir le projet',
      
      // Projet 1
      jadmin: {
        title: 'JADMIN - Professional Network Toolkit',
        description: 'Calculateur IP cloud complet pour ingénieurs réseau',
        longDescription: 'Solution SaaS de calcul d\'adressage réseau : sous-réseaux IPv4/IPv6, découpage VLSM automatique avec sélection de classe A/B/C, agrégation de réseaux (Supernet). Interface moderne avec dark/light mode, tests automatisés CI/CD, déploiement Docker.',
        features: ['Calculateur IP complet', 'Support IPv4/IPv6', 'Découpage VLSM automatique', 'Agrégation de réseaux', 'Dark/Light mode', 'Tests CI/CD automatisés']
      },
      // Projet 2
      quindav: {
        title: 'QUINDAV - Réservation matériaux de construction',
        description: 'Plateforme de réservation en ligne pour matériaux de construction',
        longDescription: 'Solution digitale permettant aux clients de consulter le catalogue (vitres, carreaux, serrures, colles, équipements électriques) et d\'effectuer des réservations en ligne.',
        features: ['Catalogue de produits', 'Réservation en ligne', 'Interface responsive', 'Gestion des stocks']
      },
      // Projet 3 : EduManage (🟢 NOUVEAU)
      edumanage: {
        title: 'EduManage - Plateforme de Gestion Scolaire',
        description: 'Application web full-stack pour la gestion complète d\'établissements scolaires.',
        longDescription: 'Solution conçue pour numériser et centraliser l\'ensemble des opérations d\'un établissement scolaire. Elle offre une authentification multi-rôles (Admin, Professeur, Parent), un CRUD complet pour les élèves, une saisie de notes avec appréciation automatique, et des bulletins consultables en temps réel.',
        features: [
          '🔐 Authentification multi-rôles (Admin, Prof, Parent)',
          '👨‍🎓 Gestion CRUD des élèves',
          '📝 Saisie de notes avec appréciation',
          '📊 Bulletins et moyennes en temps réel',
          '⚙️ Gestion des classes et matières',
          '📥 Import Excel'
        ]
      },
      // Projet 4 : Global Services (🟢 NOUVEAU)
      globalServices: {
        title: 'Global Services - Site Web Professionnel',
        description: 'Site vitrine et dashboard administrateur pour une entreprise multiservices.',
        longDescription: 'Conception et développement d\'un site web professionnel complet pour Global Services SARL à Lubumbashi. Le projet inclut un site public de 6 pages dynamiques, un dashboard administrateur pour gérer le contenu, et une interface d\'administration autonome sans compétences techniques requises.',
        features: [
          '🎯 6 pages dynamiques et responsives',
          '🖥️ Dashboard administrateur complet',
          '📧 Notifications email automatiques',
          '🖼️ Upload et gestion d\'images',
          '🔒 Sécurité avec politiques RLS',
          '📊 Statistiques des messages'
        ]
      },
      // Projet 5 : QADOSH COLLECTIF (🟢 NOUVEAU)
      qadosh: {
        title: 'QADOSH COLLECTIF - Plateforme Ministère Gospel',
        description: 'Plateforme web complète pour un ministère gospel congolais (Célébration & Charity).',
        longDescription: 'QADOSH COLLECTIF est une plateforme web complète gérant deux entités : QADOSH CÉLÉBRATION (mouvement d\'adoration) et QADOSH CHARITY (bras humanitaire). Le site inclut une gestion avancée des événements, des galeries photos/vidéos, des témoignages validés par admin, un système de dons avec Mobile Money, et un espace administrateur avec CRUD complet sur tous les contenus.',
        features: [
          '🏠 Accueil dynamique avec carrousel animé',
          '🎵 Pages Célébration & Charity dédiées',
          '📅 Gestion d\'événements multi-photos',
          '📸 Galerie avec catégories (Célébration/Charity)',
          '💬 Témoignages avec validation admin',
          '💰 Contributions Mobile Money (M-Pesa, Airtel, Orange)',
          '🔐 Espace admin avec CRUD complet',
          '🌙 Mode sombre/clair'
        ]
      }
    },
    // Skills
    skills: {
      title: 'Compétences Techniques',
      categories: {
        sysadmin: 'Admin Systèmes & Réseaux',
        electricite: 'Électricité',
        dev: 'Développement & Outils'
      }
    },
    // Certifications
    certifications: {
      title: 'Certifications',
      view: 'Voir la certification'
    },
    // Contact
    contact: {
      title: 'Me contacter',
      subtitle: 'Discutons de vos projets',
      email: 'Email professionnel Zoho',
      whatsapp: 'WhatsApp disponible 24/7',
      response: 'Réponse sous 24h',
      contactDirect: 'Contact direct',
      contactText: 'Cliquez sur mon email ou mon numéro WhatsApp pour me contacter directement. Je réponds dans les meilleurs délais !',
      findMe: 'Retrouvez-moi sur'
    },
    // Footer
    footer: {
      rights: 'Tous droits réservés'
    }
  },

  // ============================================================
  // VERSION ANGLAISE
  // ============================================================
  en: {
    // Navbar
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      certifications: 'Certifications',
      contact: 'Contact'
    },
    // Hero
    hero: {
      title: 'Jenovic Kanyinda',
      roles: [
        'Jr System Administrator',
        'Jr DevOps',
        'Electrician Technician',
        'Network Administrator'
      ],
      description: 'Versatile and passionate about IT infrastructure, DevOps automation, and innovative electrical solutions',
      contactBtn: 'Contact me',
      projectsBtn: 'View my work'
    },
    // About
    about: {
      title: 'About me',
      intro: 'I am',
      name: 'Jenovic Kanyinda',
      introText: 'a Junior System & Network Administrator with dual expertise combining 3 years of field experience in Low Voltage Electricity and 2 years of practice in Systems and Network Administration.',
      stats: {
        elec: 'Electrical installations',
        incidents: 'IT/Electrical incidents',
        resolution: 'Resolution rate'
      },
      projectsDone: 'Projects completed',
      resolved: 'Resolved for individuals and SMEs',
      firstIntervention: 'On first intervention'
    },
    // Projects
    projects: {
      title: 'My Work',
      filters: {
        all: 'All',
        devops: 'DevOps & Networking',
        web: 'Web Development'
      },
      projectsCount: 'project shown',
      projectsCountPlural: 'projects shown',
      noProjects: 'No projects in this category.',
      features: 'Key features',
      viewProject: 'View project',
      
      // Projet 1
      jadmin: {
        title: 'JADMIN - Professional Network Toolkit',
        description: 'Complete cloud IP calculator for network engineers',
        longDescription: 'SaaS solution for network addressing: IPv4/IPv6 subnets, automatic VLSM with class A/B/C selection, route aggregation (Supernet). Modern interface with dark/light mode, CI/CD automated tests, Docker deployment.',
        features: ['Complete IP calculator', 'IPv4/IPv6 support', 'Automatic VLSM', 'Route aggregation', 'Dark/Light mode', 'CI/CD automated tests']
      },
      // Projet 2
      quindav: {
        title: 'QUINDAV - Building materials booking',
        description: 'Online booking platform for construction materials',
        longDescription: 'Digital solution allowing customers to browse the catalog (glass, tiles, locks, adhesives, electrical equipment) and make online reservations.',
        features: ['Product catalog', 'Online booking', 'Responsive interface', 'Inventory management']
      },
      // Projet 3 : EduManage (🟢 NOUVEAU)
      edumanage: {
        title: 'EduManage - School Management Platform',
        description: 'Full-stack web application for complete school management.',
        longDescription: 'Solution designed to digitize and centralize all operations of a school. It offers multi-role authentication (Admin, Teacher, Parent), complete student CRUD, grade entry with automatic appreciation, and real-time report cards.',
        features: [
          '🔐 Multi-role authentication (Admin, Teacher, Parent)',
          '👨‍🎓 Student CRUD management',
          '📝 Grade entry with appreciation',
          '📊 Real-time report cards and averages',
          '⚙️ Class and subject management',
          '📥 Excel import'
        ]
      },
      // Projet 4 : Global Services (🟢 NOUVEAU)
      globalServices: {
        title: 'Global Services - Professional Website',
        description: 'Corporate website and admin dashboard for a multi-service company.',
        longDescription: 'Design and development of a complete professional website for Global Services SARL in Lubumbashi. The project includes a 6-page dynamic public site, an admin dashboard to manage content, and an autonomous administration interface with no technical skills required.',
        features: [
          '🎯 6 dynamic and responsive pages',
          '🖥️ Complete admin dashboard',
          '📧 Automatic email notifications',
          '🖼️ Image upload and management',
          '🔒 Security with RLS policies',
          '📊 Message statistics'
        ]
      },
      // Projet 5 : QADOSH COLLECTIF (🟢 NOUVEAU)
      qadosh: {
        title: 'QADOSH COLLECTIF - Gospel Ministry Platform',
        description: 'Complete web platform for a Congolese gospel ministry (Celebration & Charity).',
        longDescription: 'QADOSH COLLECTIF is a complete web platform managing two entities: QADOSH CÉLÉBRATION (worship movement) and QADOSH CHARITY (humanitarian arm). The site includes advanced event management, photo/video galleries, admin-validated testimonials, a donation system with Mobile Money, and an admin space with full CRUD on all content.',
        features: [
          '🏠 Dynamic homepage with animated carousel',
          '🎵 Dedicated Celebration & Charity pages',
          '📅 Multi-photo event management',
          '📸 Gallery with categories (Celebration/Charity)',
          '💬 Testimonials with admin validation',
          '💰 Mobile Money contributions (M-Pesa, Airtel, Orange)',
          '🔐 Admin space with full CRUD',
          '🌙 Dark/Light mode'
        ]
      }
    },
    // Skills
    skills: {
      title: 'Technical Skills',
      categories: {
        sysadmin: 'Systems & Network Admin',
        electricite: 'Electricity',
        dev: 'Development & Tools'
      }
    },
    // Certifications
    certifications: {
      title: 'Certifications',
      view: 'View certification'
    },
    // Contact
    contact: {
      title: 'Contact me',
      subtitle: "Let's discuss your projects",
      email: 'Professional Zoho Email',
      whatsapp: 'WhatsApp available 24/7',
      response: 'Response within 24h',
      contactDirect: 'Direct contact',
      contactText: 'Click on my email or WhatsApp number to contact me directly. I will respond as soon as possible!',
      findMe: 'Find me on'
    },
    // Footer
    footer: {
      rights: 'All rights reserved'
    }
  }
}