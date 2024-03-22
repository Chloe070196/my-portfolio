const projects = [
  {
    title: 'Lesson booking website',
    stack: ['JavaScript', 'Tailwind', 'React'],
    description:
      'A website where visitors can access a calendar, check lesson times, and make booking requests. Currently in development.',
    gitHubUrl: '',
    imageUrl:
      '/src/assets/png/preview_calendar.png',
    imageDescription: '',
    projectPath: '/lesson-booking-project-walkthrough',
    tags: {
      deployed: false,
      current: true,
      frontend: true,
      backend: false
    }
  },
  {
    title: 'English learning app',
    stack: ['TypeScript', 'React', 'nestJS', 'prisma'],
    description:
      'This app is being built with English learners in mind. Once registered and logged in, they will be able to spent time leaning new English phrases, revising, or practising using what they have learnt.',
    gitHubUrl: 'https://github.com/Chloe070196/phrases-web-app',
    imageUrl: '/src/assets/png/preview_phrase_app_login.png',
    imageDescription: '',
    projectPath: '/phrase-learning-app-walkthrough',
    tags: {
      deployed: false,
      current: true,
      frontend: true,
      backend: true
    }
  },
  {
    title: 'TBC',
    stack: ['js', 'tailwind', 'react'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem ex, neque exercitationem in nobis dolore porro ratione nostrum aliquam at magnam, vitae perspiciatis possimus? Aspernatur eos perspiciatis natus eius cum.',
    projectPath: "/",
    gitHubUrl: '',
    imageUrl: '',
    imageDescription: '',
    tags: {
      deployed: true,
      current: true,
      frontend: true,
      backend: true
    }
  }
]

export default projects
