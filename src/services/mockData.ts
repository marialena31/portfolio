const mockData = {
  en: {
    about: {
      title: "About Me",
      description: "I am a web developer with expertise in modern technologies...",
      image: "/images/profile.jpg",
      socialLinks: [
        {
          platform: "LinkedIn",
          url: "https://linkedin.com/in/yourprofile",
          icon: "linkedin"
        }
      ]
    },
    skills: {
      title: "Technical Skills",
      categories: [
        {
          name: "Frontend",
          skills: [
            {
              name: "React",
              icon: "react",
              level: 90
            }
          ]
        }
      ]
    },
    services: {
      title: "Services",
      services: [
        {
          title: "Web Development",
          description: "Modern and responsive web applications",
          icon: "code"
        }
      ]
    },
    portfolio: {
      title: "Portfolio",
      projects: [
        {
          title: "Project 1",
          description: "A modern web application",
          image: "/images/project1.jpg",
          technologies: ["React", "Node.js"],
          link: "https://project1.com",
          github: "https://github.com/username/project1"
        }
      ]
    },
    references: {
      title: "References",
      references: [
        {
          name: "Company 1",
          logo: "/images/company1.png",
          url: "https://company1.com"
        }
      ]
    }
  },
  fr: {
    // French version of the data structure
    about: {
      title: "À Propos",
      description: "Je suis une développeuse web spécialisée...",
      // Rest of French content
    }
  },
  es: {
    // Spanish version of the data structure
    about: {
      title: "Sobre Mí",
      description: "Soy una desarrolladora web...",
      // Rest of Spanish content
    }
  },
  translations: {
    en: {
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        submit: "Send Message",
        success: "Message sent successfully!",
        errors: {
          required: "This field is required",
          invalidEmail: "Please enter a valid email address",
          minLength: "This field must be at least {{min}} characters long"
        }
      }
    },
    fr: {
      form: {
        name: "Nom",
        email: "Email",
        message: "Message",
        submit: "Envoyer",
        success: "Message envoyé avec succès !",
        errors: {
          required: "Ce champ est obligatoire",
          invalidEmail: "Veuillez entrer une adresse email valide",
          minLength: "Ce champ doit contenir au moins {{min}} caractères"
        }
      }
    },
    es: {
      form: {
        name: "Nombre",
        email: "Correo electrónico",
        message: "Mensaje",
        submit: "Enviar mensaje",
        success: "¡Mensaje enviado con éxito!",
        errors: {
          required: "Este campo es obligatorio",
          invalidEmail: "Por favor, introduce un correo electrónico válido",
          minLength: "Este campo debe tener al menos {{min}} caracteres"
        }
      }
    }
  }
};

export default mockData;
