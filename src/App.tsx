import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Menu, X, Phone, MapPin, Instagram, Facebook, Heart, Search, Cpu, Star, ArrowRight, Laptop, Monitor, Mouse } from 'lucide-react';
import { COMPUTER_PRODUCTS, ComputerProduct } from './types';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  const categories = ['Todos', 'Laptops', 'Desktops', 'Componentes', 'Periféricos'];
  const filteredProducts = activeCategory === 'Todos' 
    ? COMPUTER_PRODUCTS 
    : COMPUTER_PRODUCTS.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-brand-white selection:bg-brand-brown-light selection:text-brand-brown-dark">
      {/* Header */}
      <header className="header-tech">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-brand-black rounded-full flex items-center justify-center text-white shadow-lg">
              <Cpu size={24} />
            </div>
            <div>
              <h1 className="text-2xl text-brand-black tracking-tighter">TECH BROWN</h1>
              <p className="text-[10px] font-bold text-brand-brown-mid uppercase tracking-[0.3em]">Inovação Minimalista</p>
            </div>
          </div>

          <nav className="hidden md:flex gap-10 items-center">
            {['Início', 'Loja', 'Sobre', 'Contato'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="font-sans text-brand-brown-mid hover:text-brand-black transition-colors font-medium text-sm uppercase tracking-widest"
              >
                {item}
              </a>
            ))}
            <div className="flex items-center gap-4 border-l border-brand-brown-light pl-6">
              <button className="text-brand-brown-mid hover:text-brand-black transition-colors">
                <Search size={20} />
              </button>
              <button 
                className="relative text-brand-brown-mid hover:text-brand-black transition-colors"
                onClick={() => setCartCount(prev => prev + 1)}
              >
                <ShoppingCart size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-brand-black text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </nav>

          <button className="md:hidden text-brand-black" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
            {['Início', 'Loja', 'Sobre', 'Contato'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-3xl font-display text-brand-black uppercase tracking-widest"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="início" className="relative h-[80vh] flex items-center bg-[#FAFAFA] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-brown-mid font-bold tracking-[0.4em] text-xs uppercase mb-4 block">Tecnologia de Alta Performance</span>
            <h2 className="text-5xl md:text-8xl mb-6 leading-none text-brand-black">
              Poder <br /> 
              <span className="text-brand-brown-mid italic">Redefinido</span>
            </h2>
            <p className="text-lg text-brand-brown-mid mb-10 max-w-md leading-relaxed">
              Explore nossa seleção curada de hardware e periféricos que unem desempenho extremo a uma estética sofisticada.
            </p>
            <div className="flex gap-4">
              <button className="btn-tech px-10 py-4 text-sm font-bold uppercase tracking-widest">
                Ver Ofertas
              </button>
              <button className="px-10 py-4 text-sm font-bold uppercase tracking-widest border border-brand-black rounded-full hover:bg-brand-black hover:text-white transition-all">
                Configurador
              </button>
            </div>
          </motion.div>
          <div className="hidden md:block relative">
            <div className="w-[600px] h-[600px] border border-brand-brown-light rounded-full absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10"></div>
            <img 
              src="https://picsum.photos/seed/tech-hero/800/800" 
              alt="High Tech Hardware" 
              className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-24 bg-brand-white border-y border-brand-brown-light">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-5xl mb-8 text-brand-black leading-tight">Olá! É um prazer ter você por aqui.</h3>
          <p className="text-xl text-brand-brown-mid font-medium leading-relaxed">Estamos à disposição para ajudar você a encontrar a solução tecnológica ideal!</p>
        </div>
      </section>

      {/* Products Section */}
      <section id="loja" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-5xl text-brand-black mb-2 uppercase tracking-tighter">Nossa Loja</h2>
            <p className="text-brand-brown-mid font-medium tracking-widest uppercase text-xs">Hardware de elite para profissionais</p>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(cat => (
              <button 
                key={cat} 
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${activeCategory === cat ? 'bg-brand-black text-white' : 'bg-brand-brown-light text-brand-brown-dark hover:bg-brand-brown-mid hover:text-white'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((product) => (
            <motion.div 
              key={product.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="minimalist-card group overflow-hidden"
            >
              <div className="relative overflow-hidden rounded-xl mb-8 aspect-square bg-[#F5F5F5]">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-black/5 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-bold text-brand-brown-mid uppercase tracking-[0.2em]">{product.category}</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={10} className="fill-brand-brown-mid text-brand-brown-mid" />)}
                </div>
              </div>
              <h3 className="text-2xl text-brand-black mb-3 tracking-tight">{product.name}</h3>
              <p className="text-brand-brown-mid text-sm mb-8 leading-relaxed h-12 overflow-hidden">{product.description}</p>
              <div className="flex items-center justify-between pt-6 border-t border-brand-brown-light">
                <span className="text-2xl font-bold text-brand-black">R$ {product.price.toFixed(2)}</span>
                <button 
                  onClick={() => setCartCount(c => c + 1)}
                  className="btn-tech w-12 h-12"
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
                src="https://picsum.photos/seed/tech-about/800/1000" 
                alt="Tech Innovation" 
                className="rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-12 -left-12 bg-brand-white p-10 rounded-2xl shadow-2xl max-w-[300px] hidden lg:block border border-brand-brown-light">
                <p className="text-brand-black font-display text-2xl mb-3">Performance</p>
                <p className="text-brand-brown-mid text-sm leading-relaxed">Nossa curadoria foca em componentes que entregam a máxima eficiência sem comprometer o design.</p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-5xl md:text-7xl text-brand-black mb-10 tracking-tighter uppercase">Nossa Visão</h2>
            <p className="text-xl text-brand-brown-mid mb-10 leading-relaxed font-light">
              A Tech Brown nasceu para preencher a lacuna entre a tecnologia bruta e o design refinado. Acreditamos que seu setup deve ser tão elegante quanto poderoso.
            </p>
            <div className="bg-white p-10 rounded-2xl border-l-8 border-brand-black shadow-sm mb-12">
              <p className="text-xl text-brand-black font-medium italic leading-relaxed">
                "Seja muito bem-vindo; nossa equipe esta muito animada para colaborar com você na construção do seu setup dos sonhos!"
              </p>
            </div>
            <button className="flex items-center gap-4 text-brand-black font-bold uppercase tracking-widest text-sm group">
              Nossa Consultoria <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-brand-black rounded-[60px] p-10 md:p-24 flex flex-col lg:flex-row gap-24 text-white">
            <div className="flex-1">
              <h2 className="text-5xl md:text-7xl mb-12 leading-none tracking-tighter uppercase">Fale com um <br /> Especialista</h2>
              <div className="space-y-10">
                <div className="flex items-center gap-8">
                  <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center border border-white/20"><Phone size={24} /></div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-1">Suporte</p>
                    <span className="text-2xl font-light">(11) 4004-TECH</span>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center border border-white/20"><MapPin size={24} /></div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-1">Showroom</p>
                    <span className="text-2xl font-light">Rua da Inovação, 1024 - Tech Park</span>
                  </div>
                </div>
                <div className="flex gap-6 pt-12">
                  <button className="w-14 h-14 bg-white text-brand-black rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-xl"><Instagram size={24} /></button>
                  <button className="w-14 h-14 bg-white text-brand-black rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-xl"><Facebook size={24} /></button>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-white rounded-[40px] p-12 text-brand-black shadow-2xl">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest mb-3 text-brand-brown-mid">Nome</label>
                    <input type="text" className="w-full border-b border-brand-brown-light py-4 focus:border-brand-black outline-none transition-colors bg-transparent" placeholder="Seu nome" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest mb-3 text-brand-brown-mid">Interesse</label>
                    <select className="w-full border-b border-brand-brown-light py-4 focus:border-brand-black outline-none transition-colors bg-transparent">
                      <option>Montagem de PC</option>
                      <option>Laptops Pro</option>
                      <option>Upgrade</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest mb-3 text-brand-brown-mid">Email</label>
                  <input type="email" className="w-full border-b border-brand-brown-light py-4 focus:border-brand-black outline-none transition-colors bg-transparent" placeholder="seu@email.com" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest mb-3 text-brand-brown-mid">Especificações</label>
                  <textarea rows={2} className="w-full border-b border-brand-brown-light py-4 focus:border-brand-black outline-none transition-colors bg-transparent resize-none" placeholder="Quais componentes você procura?"></textarea>
                </div>
                <button className="w-full py-6 bg-brand-black text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-brown-mid transition-all shadow-lg active:scale-[0.98]">
                  Solicitar Orçamento
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
            <Cpu size={40} className="text-brand-black" />
            <h2 className="text-2xl font-display tracking-tighter">TECH BROWN</h2>
          </div>
          <div className="flex gap-12 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-brown-mid">
            <a href="#" className="hover:text-brand-black transition-colors">Privacidade</a>
            <a href="#" className="hover:text-brand-black transition-colors">Termos</a>
            <a href="#" className="hover:text-brand-black transition-colors">Suporte</a>
          </div>
          <p className="text-brand-brown-mid text-[10px] font-bold uppercase tracking-widest">© 2026 Tech Brown. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
