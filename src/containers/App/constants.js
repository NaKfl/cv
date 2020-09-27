export const PARTICLES_PARAM = {
  particles: {
    number: {
      value: 100,
    },
    size: {
      value: 3,
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: 'repulse',
      },
    },
  },
};

export const MENU_ITEM = {
  ABOUT: { value: 0, icon: 'fa fa-user' },
  SKILLS: { value: 1, icon: 'fa fa-list-alt' },
  WORKS: { value: 2, icon: 'fa fa-briefcase' },
  PROJECT: { value: 3, icon: 'fa fa-project-diagram' },
  'THE END': { value: 4, icon: 'fa fa-sign-out-alt' },
};
