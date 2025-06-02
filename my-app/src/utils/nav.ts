export const handleNavClick = (item: string, e: any) => {
    e.preventDefault();
    const sectionId = item.toLowerCase();
    const element = document.getElementById(sectionId);
    
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    
  };