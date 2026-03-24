import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Menu, X, Phone, MapPin, Instagram, Facebook, Heart, Search, UtensilsCrossed, Star, ArrowRight } from 'lucide-react';
import { GREEK_MENU, GreekMenuItem } from './types';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  const categories = ['Todos', 'Entradas', 'Pratos Principais', 'Sobremesas', 'Bebidas'];
  const filteredMenu = activeCategory === 'Todos' 
    ? GREEK_MENU 
    : GREEK_MENU.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-brand-white selection:bg-brand-brown-light selection:text-brand-brown-dark">
      {/* Header */}
      <header className="header-greek">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-brand-brown-dark rounded-full flex items-center justify-center text-white shadow-lg">
              <UtensilsCrossed size={24} />
            </div>
            <div>
              <h1 className="text-2xl text-brand-brown-dark tracking-tighter">OLIMPO</h1>
              <p className="text-[10px] font-bold text-brand-brown-mid uppercase tracking-[0.3em]">Sabores da Grécia</p>
            </div>
          </div>

          <nav className="hidden md:flex gap-10 items-center">
            {['Início', 'Menu', 'Sobre', 'Contato'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="font-sans text-brand-brown-mid hover:text-brand-brown-dark transition-colors font-medium text-sm uppercase tracking-widest"
              >
                {item}
              </a>
            ))}
            <div className="flex items-center gap-4 border-l border-brand-brown-light pl-6">
              <button className="text-brand-brown-mid hover:text-brand-brown-dark transition-colors">
                <Search size={20} />
              </button>
              <button 
                className="relative text-brand-brown-mid hover:text-brand-brown-dark transition-colors"
                onClick={() => setCartCount(prev => prev + 1)}
              >
                <ShoppingCart size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-brand-brown-dark text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </nav>

          <button className="md:hidden text-brand-brown-dark" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8"
          >
            {['Início', 'Menu', 'Sobre', 'Contato'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-3xl font-display text-brand-brown-dark uppercase tracking-widest"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="início" className="relative h-[80vh] flex items-center bg-[#FDFDFD] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-brown-mid font-bold tracking-[0.4em] text-xs uppercase mb-4 block">Gastronomia Mediterrânea</span>
            <h2 className="text-5xl md:text-8xl mb-6 leading-none text-brand-brown-dark">
              A Essência <br /> 
              <span className="text-brand-brown-mid italic">dos Deuses</span>
            </h2>
            <p className="text-lg text-brand-brown-mid mb-10 max-w-md leading-relaxed">
              Descubra os segredos da culinária grega em um ambiente minimalista e sofisticado, onde cada prato conta uma história milenar.
            </p>
            <div className="flex gap-4">
              <button className="btn-greek px-10 py-4 text-sm font-bold uppercase tracking-widest">
                Reservar Mesa
              </button>
              <button className="px-10 py-4 text-sm font-bold uppercase tracking-widest border border-brand-brown-dark rounded-full hover:bg-brand-brown-dark hover:text-white transition-all">
                Ver Menu
              </button>
            </div>
          </motion.div>
          <div className="hidden md:block relative">
            <div className="w-[600px] h-[600px] border border-brand-brown-light rounded-full absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"></div>
            <img 
              src="https://picsum.photos/seed/greek-food-hero/800/800" 
              alt="Greek Food" 
              className="rounded-full shadow-2xl border-8 border-white"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-24 bg-brand-white border-y border-brand-brown-light">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-5xl mb-8 text-brand-brown-dark leading-tight">Olá! É um prazer ter você por aqui.</h3>
          <p className="text-xl text-brand-brown-mid font-medium leading-relaxed">Estamos à disposição para ajudar você a vivenciar o melhor da Grécia em cada detalhe!</p>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-5xl text-brand-brown-dark mb-2 uppercase tracking-tighter">Nosso Menu</h2>
            <p className="text-brand-brown-mid font-medium tracking-widest uppercase text-xs">Ingredientes frescos e sazonais</p>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(cat => (
              <button 
                key={cat} 
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${activeCategory === cat ? 'bg-brand-brown-dark text-white' : 'bg-brand-brown-light text-brand-brown-dark hover:bg-brand-brown-mid hover:text-white'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredMenu.map((item) => (
            <motion.div 
              key={item.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="minimalist-card group overflow-hidden"
            >
              <div className="relative overflow-hidden rounded-xl mb-8 aspect-[4/3] bg-[#F5F5F5]">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-brown-dark/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-bold text-brand-brown-mid uppercase tracking-[0.2em]">{item.category}</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={10} className="fill-brand-brown-mid text-brand-brown-mid" />)}
                </div>
              </div>
              <h3 className="text-2xl text-brand-brown-dark mb-3 tracking-tight">{item.name}</h3>
              <p className="text-brand-brown-mid text-sm mb-8 leading-relaxed h-12 overflow-hidden">{item.description}</p>
              <div className="flex items-center justify-between pt-6 border-t border-brand-brown-light">
                <span className="text-2xl font-bold text-brand-brown-dark">R$ {item.price.toFixed(2)}</span>
                <button 
                  onClick={() => setCartCount(c => c + 1)}
                  className="btn-greek w-12 h-12"
                >
                  <ShoppingCart size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-24">
          <div className="flex-1">
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/greek-culture/800/1000" 
                alt="Greek Culture" 
                className="rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-12 -left-12 bg-brand-white p-10 rounded-2xl shadow-2xl max-w-[300px] hidden lg:block border border-brand-brown-light">
                <p className="text-brand-brown-dark font-display text-2xl mb-3">Tradição</p>
                <p className="text-brand-brown-mid text-sm leading-relaxed">Receitas passadas de geração em geração, mantendo a alma da Grécia viva em cada prato.</p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-5xl md:text-7xl text-brand-brown-dark mb-10 tracking-tighter uppercase">Nossa História</h2>
            <p className="text-xl text-brand-brown-mid mb-10 leading-relaxed font-light">
              O Olimpo nasceu do desejo de trazer a autêntica hospitalidade grega para o coração da cidade. Nossa cozinha é um tributo ao Mediterrâneo, focada na pureza dos ingredientes e na simplicidade elegante.
            </p>
            <div className="bg-white p-10 rounded-2xl border-l-8 border-brand-brown-dark shadow-sm mb-12">
              <p className="text-xl text-brand-brown-dark font-medium italic leading-relaxed">
                "Seja muito bem-vindo; nossa equipe esta muito animada para colaborar com você e proporcionar uma noite inesquecível!"
              </p>
            </div>
            <button className="flex items-center gap-4 text-brand-brown-dark font-bold uppercase tracking-widest text-sm group">
              Conheça Nossa Equipe <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-brand-brown-dark rounded-[60px] p-10 md:p-24 flex flex-col lg:flex-row gap-24 text-white">
            <div className="flex-1">
              <h2 className="text-5xl md:text-7xl mb-12 leading-none tracking-tighter uppercase">Reserve sua <br /> Experiência</h2>
              <div className="space-y-10">
                <div className="flex items-center gap-8">
                  <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center border border-white/20"><Phone size={24} /></div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-1">Telefone</p>
                    <span className="text-2xl font-light">(11) 3456-7890</span>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center border border-white/20"><MapPin size={24} /></div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-1">Localização</p>
                    <span className="text-2xl font-light">Av. Mediterrâneo, 100 - Jardins</span>
                  </div>
                </div>
                <div className="flex gap-6 pt-12">
                  <button className="w-14 h-14 bg-white text-brand-brown-dark rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-xl"><Instagram size={24} /></button>
                  <button className="w-14 h-14 bg-white text-brand-brown-dark rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-xl"><Facebook size={24} /></button>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-white rounded-[40px] p-12 text-brand-brown-dark shadow-2xl">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest mb-3 text-brand-brown-mid">Nome</label>
                    <input type="text" className="w-full border-b border-brand-brown-light py-4 focus:border-brand-brown-dark outline-none transition-colors bg-transparent" placeholder="Seu nome" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest mb-3 text-brand-brown-mid">Pessoas</label>
                    <select className="w-full border-b border-brand-brown-light py-4 focus:border-brand-brown-dark outline-none transition-colors bg-transparent">
                      <option>2 Pessoas</option>
                      <option>4 Pessoas</option>
                      <option>6+ Pessoas</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest mb-3 text-brand-brown-mid">Email</label>
                  <input type="email" className="w-full border-b border-brand-brown-light py-4 focus:border-brand-brown-dark outline-none transition-colors bg-transparent" placeholder="seu@email.com" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest mb-3 text-brand-brown-mid">Notas Adicionais</label>
                  <textarea rows={2} className="w-full border-b border-brand-brown-light py-4 focus:border-brand-brown-dark outline-none transition-colors bg-transparent resize-none" placeholder="Alguma restrição alimentar?"></textarea>
                </div>
                <button className="w-full py-6 bg-brand-brown-dark text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-brown-mid transition-all shadow-lg active:scale-[0.98]">
                  Confirmar Reserva
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-brand-brown-light">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-4">
            <UtensilsCrossed size={40} className="text-brand-brown-dark" />
            <h2 className="text-2xl font-display tracking-tighter">OLIMPO</h2>
          </div>
          <div className="flex gap-12 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-brown-mid">
            <a href="#" className="hover:text-brand-brown-dark transition-colors">Privacidade</a>
            <a href="#" className="hover:text-brand-brown-dark transition-colors">Termos</a>
            <a href="#" className="hover:text-brand-brown-dark transition-colors">Carreiras</a>
          </div>
          <p className="text-brand-brown-mid text-[10px] font-bold uppercase tracking-widest">© 2026 Olimpo Gastronomia. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
