// CourseService.js
// This service handles course management, progress tracking, and content delivery

class CourseService {
  constructor() {
    // Initialize with empty cache
    this.courseCache = {};
    this.userProgressCache = {};
  }
  
  // Get all available courses
  async getCourses(filters = {}) {
    // In a real implementation, this would fetch from an API
    // For now, we'll return mock data
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const courses = [
      {
        id: 'course-001',
        title: 'Escatologia Fundamental',
        description: 'Uma introdução abrangente aos estudos escatológicos, explorando as profecias bíblicas sobre os últimos dias.',
        instructor: 'Eric Alberto da Cruz',
        thumbnail: '/assets/images/courses/escatologia-fundamental.jpg',
        duration: '12 horas',
        modules: 8,
        lessons: 24,
        level: 'iniciante',
        category: 'escatologia',
        tags: ['profecias', 'apocalipse', 'daniel', 'últimos dias'],
        rating: 4.9,
        enrollments: 1250,
        featured: true,
        releaseDate: '2025-01-15'
      },
      {
        id: 'course-002',
        title: 'Inteligência Artificial e o Falso Profeta',
        description: 'Análise profunda das implicações proféticas do desenvolvimento da inteligência artificial e sua possível relação com as profecias sobre o falso profeta.',
        instructor: 'Lucas Mendonça',
        thumbnail: '/assets/images/courses/ia-falso-profeta.jpg',
        duration: '8 horas',
        modules: 6,
        lessons: 18,
        level: 'intermediário',
        category: 'tecnologia',
        tags: ['inteligência artificial', 'falso profeta', 'tecnologia', 'marca da besta'],
        rating: 4.8,
        enrollments: 980,
        featured: true,
        releaseDate: '2025-02-20'
      },
      {
        id: 'course-003',
        title: 'Geopolítica Profética: Nações nos Últimos Dias',
        description: 'Estudo detalhado sobre o papel das nações modernas no contexto das profecias bíblicas, com foco em Israel, Rússia, China e Estados Unidos.',
        instructor: 'Prof. Marcos Almeida',
        thumbnail: '/assets/images/courses/geopolitica-profetica.jpg',
        duration: '10 horas',
        modules: 7,
        lessons: 21,
        level: 'avançado',
        category: 'geopolítica',
        tags: ['israel', 'nações', 'guerras', 'alianças', 'oriente médio'],
        rating: 4.7,
        enrollments: 850,
        featured: false,
        releaseDate: '2025-03-10'
      },
      {
        id: 'course-004',
        title: 'Preparação Estratégica para Tempos Difíceis',
        description: 'Guia prático para preparação espiritual, emocional e material para os desafios dos últimos dias, com estratégias concretas de resiliência.',
        instructor: 'Eric Alberto da Cruz',
        thumbnail: '/assets/images/courses/preparacao-estrategica.jpg',
        duration: '6 horas',
        modules: 5,
        lessons: 15,
        level: 'todos',
        category: 'preparação',
        tags: ['resiliência', 'sobrevivência', 'comunidade', 'autossuficiência'],
        rating: 4.9,
        enrollments: 1500,
        featured: true,
        releaseDate: '2025-04-05'
      },
      {
        id: 'course-005',
        title: 'Batalha Cultural: Estratégias de Resistência',
        description: 'Análise da guerra cultural contemporânea e desenvolvimento de estratégias eficazes para resistir à desconstrução de valores bíblicos na sociedade.',
        instructor: 'Dra. Raquel Oliveira',
        thumbnail: '/assets/images/courses/batalha-cultural.jpg',
        duration: '9 horas',
        modules: 6,
        lessons: 18,
        level: 'intermediário',
        category: 'guerra cultural',
        tags: ['resistência', 'valores', 'família', 'educação', 'mídia'],
        rating: 4.6,
        enrollments: 720,
        featured: false,
        releaseDate: '2025-02-28'
      }
    ];
    
    // Apply filters if provided
    let filteredCourses = [...courses];
    
    if (filters.category) {
      filteredCourses = filteredCourses.filter(course => course.category === filters.category);
    }
    
    if (filters.level) {
      filteredCourses = filteredCourses.filter(course => course.level === filters.level);
    }
    
    if (filters.featured) {
      filteredCourses = filteredCourses.filter(course => course.featured);
    }
    
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      filteredCourses = filteredCourses.filter(course => 
        course.title.toLowerCase().includes(searchTerm) || 
        course.description.toLowerCase().includes(searchTerm) ||
        course.tags.some(tag => tag.toLowerCase().includes(searchTerm))
      );
    }
    
    return filteredCourses;
  }
  
  // Get detailed course information
  async getCourseDetails(courseId) {
    // Check cache first
    if (this.courseCache[courseId]) {
      return this.courseCache[courseId];
    }
    
    // In a real implementation, this would fetch from an API
    // For now, we'll return mock data for a specific course
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock detailed course data
    const courseDetails = {
      id: courseId,
      title: 'Escatologia Fundamental',
      description: 'Uma introdução abrangente aos estudos escatológicos, explorando as profecias bíblicas sobre os últimos dias. Este curso fornece uma base sólida para compreender os eventos proféticos e sua relevância para o mundo contemporâneo.',
      longDescription: `
        Este curso oferece uma introdução abrangente à escatologia bíblica, explorando as profecias sobre os últimos dias encontradas nas Escrituras. Através de uma análise detalhada dos livros proféticos, especialmente Daniel e Apocalipse, os alunos desenvolverão uma compreensão sólida dos eventos futuros previstos na Bíblia.
        
        O curso aborda as diferentes interpretações escatológicas, incluindo pré-milenismo, pós-milenismo e amilenismo, apresentando os argumentos de cada posição de forma equilibrada. Também examina os sinais dos tempos mencionados por Jesus e pelos apóstolos, relacionando-os com eventos contemporâneos.
        
        Ao final do curso, os alunos estarão equipados com ferramentas hermenêuticas para interpretar textos proféticos e terão uma visão clara da linha do tempo profética bíblica, permitindo-lhes discernir os sinais dos tempos com sabedoria e equilíbrio.
      `,
      instructor: {
        id: 'instructor-001',
        name: 'Eric Alberto da Cruz',
        title: 'Pastor, Jornalista e Escritor',
        bio: 'Fundador da Apocalypse Academy, Eric combina formação teológica com experiência jornalística para analisar eventos contemporâneos à luz das profecias bíblicas.',
        image: '/assets/images/instructors/eric-alberto.jpg'
      },
      thumbnail: '/assets/images/courses/escatologia-fundamental.jpg',
      coverImage: '/assets/images/courses/escatologia-fundamental-cover.jpg',
      duration: '12 horas',
      modules: [
        {
          id: 'module-001',
          title: 'Introdução à Escatologia',
          description: 'Fundamentos e importância do estudo escatológico',
          lessons: [
            {
              id: 'lesson-001',
              title: 'O que é Escatologia?',
              duration: '25 minutos',
              videoId: 'video-001',
              resources: [
                { type: 'pdf', title: 'Apostila - Introdução à Escatologia', url: '/assets/resources/apostila-escatologia.pdf' },
                { type: 'slides', title: 'Slides da Aula', url: '/assets/resources/slides-escatologia-intro.pdf' }
              ]
            },
            {
              id: 'lesson-002',
              title: 'A Importância do Estudo Profético',
              duration: '30 minutos',
              videoId: 'video-002',
              resources: [
                { type: 'pdf', title: 'Leitura Complementar', url: '/assets/resources/importancia-estudo-profetico.pdf' }
              ]
            },
            {
              id: 'lesson-003',
              title: 'Princípios de Interpretação Profética',
              duration: '40 minutos',
              videoId: 'video-003',
              resources: [
                { type: 'pdf', title: 'Guia de Interpretação', url: '/assets/resources/guia-interpretacao.pdf' },
                { type: 'quiz', title: 'Quiz - Princípios Básicos', url: '/quizzes/principios-basicos' }
              ]
            }
          ]
        },
        {
          id: 'module-002',
          title: 'O Livro de Daniel',
          description: 'Análise das profecias de Daniel e sua relevância contemporânea',
          lessons: [
            {
              id: 'lesson-004',
              title: 'Contexto Histórico de Daniel',
              duration: '35 minutos',
              videoId: 'video-004',
              resources: [
                { type: 'pdf', title: 'Linha do Tempo - Babilônia', url: '/assets/resources/linha-tempo-babilonia.pdf' }
              ]
            },
            {
              id: 'lesson-005',
              title: 'As Quatro Bestas e os Reinos Mundiais',
              duration: '45 minutos',
              videoId: 'video-005',
              resources: [
                { type: 'pdf', title: 'Mapa dos Impérios Antigos', url: '/assets/resources/mapa-imperios.pdf' },
                { type: 'quiz', title: 'Quiz - Reinos Mundiais', url: '/quizzes/reinos-mundiais' }
              ]
            },
            {
              id: 'lesson-006',
              title: 'A Profecia das 70 Semanas',
              duration: '50 minutos',
              videoId: 'video-006',
              resources: [
                { type: 'pdf', title: 'Cálculo Detalhado das 70 Semanas', url: '/assets/resources/calculo-70-semanas.pdf' }
              ]
            }
          ]
        }
      ],
      requirements: [
        'Conhecimento básico da Bíblia',
        'Disposição para estudar textos proféticos complexos',
        'Mente aberta para diferentes interpretações escatológicas'
      ],
      objectives: [
        'Compreender os fundamentos da escatologia bíblica',
        'Interpretar corretamente os livros proféticos de Daniel e Apocalipse',
        'Identificar os sinais dos tempos mencionados nas Escrituras',
        'Desenvolver uma visão equilibrada sobre os eventos do fim dos tempos'
      ],
      level: 'iniciante',
      category: 'escatologia',
      tags: ['profecias', 'apocalipse', 'daniel', 'últimos dias'],
      rating: 4.9,
      reviews: [
        {
          id: 'review-001',
          user: 'João Silva',
          rating: 5,
          comment: 'Curso excelente! Apresenta as diferentes visões escatológicas de forma equilibrada e fundamentada.',
          date: '2025-02-10'
        },
        {
          id: 'review-002',
          user: 'Maria Oliveira',
          rating: 4,
          comment: 'Conteúdo muito bem estruturado. Recomendo para quem quer entender as profecias bíblicas.',
          date: '2025-02-15'
        }
      ],
      enrollments: 1250,
      featured: true,
      releaseDate: '2025-01-15',
      lastUpdated: '2025-03-20',
      price: {
        regular: 'Incluído na assinatura',
        premium: 'Incluído na assinatura Premium'
      },
      certificate: true
    };
    
    // Store in cache
    this.courseCache[courseId] = courseDetails;
    
    return courseDetails;
  }
  
  // Enroll user in a course
  async enrollInCourse(userId, courseId) {
    // In a real implementation, this would call an API endpoint
    // For now, we'll simulate a successful enrollment
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const enrollment = {
      userId,
      courseId,
      enrollmentDate: new Date().toISOString(),
      progress: 0,
      lastAccessDate: new Date().toISOString(),
      status: 'active'
    };
    
    // Initialize user progress for this course
    this.initializeUserProgress(userId, courseId);
    
    return enrollment;
  }
  
  // Initialize user progress for a course
  async initializeUserProgress(userId, courseId) {
    const courseDetails = await this.getCourseDetails(courseId);
    
    // Create progress tracking structure
    const progress = {
      userId,
      courseId,
      startDate: new Date().toISOString(),
      lastAccessDate: new Date().toISOString(),
      completedLessons: [],
      moduleProgress: courseDetails.modules.map(module => ({
        moduleId: module.id,
        completed: false,
        lessonProgress: module.lessons.map(lesson => ({
          lessonId: lesson.id,
          completed: false,
          watchTime: 0,
          lastPosition: 0,
          quizResults: []
        }))
      })),
      overallProgress: 0,
      certificateIssued: false
    };
    
    // Store in cache
    if (!this.userProgressCache[userId]) {
      this.userProgressCache[userId] = {};
    }
    this.userProgressCache[userId][courseId] = progress;
    
    return progress;
  }
  
  // Get user progress for a course
  async getUserProgress(userId, courseId) {
    // Check if progress exists in cache
    if (this.userProgressCache[userId] && this.userProgressCache[userId][courseId]) {
      return this.userProgressCache[userId][courseId];
    }
    
    // In a real implementation, this would fetch from an API
    // For now, we'll return mock data
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 600));
    
    // If no progress found, initialize it
    return this.initializeUserProgress(userId, courseId);
  }
  
  // Update lesson progress
  async updateLessonProgress(userId, courseId, lessonId, data) {
    // Get current progress
    const progress = await this.getUserProgress(userId, courseId);
    
    // Find the module and lesson
    let lessonProgress = null;
    for (const moduleProgress of progress.moduleProgress) {
      for (const lesson of moduleProgress.lessonProgress) {
        if (lesson.lessonId === lessonId) {
          lessonProgress = lesson;
          break;
        }
      }
      if (lessonProgress) break;
    }
    
    if (!lessonProgress) {
      throw new Error('Lesson not found in course progress');
    }
    
    // Update lesson progress
    Object.assign(lessonProgress, data);
    
    // Mark lesson as completed if watchTime is sufficient
    if (data.watchTime && data.watchTime >= 0.9 * data.duration) {
      lessonProgress.completed = true;
      
      // Add to completed lessons if not already there
      if (!progress.completedLessons.includes(lessonId)) {
        progress.completedLessons.push(lessonId);
      }
    }
    
    // Update module completion status
    for (const moduleProgress of progress.moduleProgress) {
      const allLessonsCompleted = moduleProgress.lessonProgress.every(lesson => lesson.completed);
      moduleProgress.completed = allLessonsCompleted;
    }
    
    // Update overall progress
    const courseDetails = await this.getCourseDetails(courseId);
    const totalLessons = courseDetails.modules.reduce((total, module) => total + module.lessons.length, 0);
    progress.overallProgress = (progress.completedLessons.length / totalLessons) * 100;
    
    // Update last access date
    progress.lastAccessDate = new Date().toISOString();
    
    // In a real implementation, this would save to an API
    // For now, we'll update the cache
    this.userProgressCache[userId][courseId] = progress;
    
    return progress;
  }
  
  // Get course resources
  async getCourseResources(courseId) {
    // In a real implementation, this would fetch from an API
    // For now, we'll extract resources from course details
    
    const courseDetails = await this.getCourseDetails(courseId);
    
    // Collect all resources from all lessons
    const resour
(Content truncated due to size limit. Use line ranges to read in chunks)