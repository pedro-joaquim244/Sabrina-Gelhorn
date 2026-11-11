export const siteConfig = {
  name: 'Sabrina Gelhorn',
  fullName: 'Sabrina Jany Gelhorn',
  profession: 'Psicóloga e Psicopedagoga',
  city: 'Curitiba, Paraná',
  crp: '08/17950',
  whatsappNumber: '5541988049908',
  whatsappMessage: 'Olá, Sabrina! Gostaria de saber mais sobre seu trabalho e formas de atendimento.',
  get whatsappUrl() {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(this.whatsappMessage)}`;
  },
};
