/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  CheckCircle, 
  Smartphone, 
  Printer, 
  BookOpen, 
  FileText,
  Users, 
  Clock, 
  Download,
  Package,
  Infinity as InfinityIcon,
  ShieldCheck, 
  Star, 
  ChevronDown, 
  ChevronUp,
  Play,
  Gift,
  ShoppingCart,
  RefreshCw,
  Smile,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left font-semibold text-gray-800 focus:outline-none"
      >
        <span>{question}</span>
        {isOpen ? <ChevronUp className="h-5 w-5 text-purple-600" /> : <ChevronDown className="h-5 w-5 text-gray-400" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="mt-2 text-gray-600 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const [isUpsellOpen, setIsUpsellOpen] = useState(false);
  const currentDate = new Date().toLocaleDateString('pt-BR');

  return (
    <div className="min-h-screen bg-white selection:bg-purple-100 selection:text-purple-900">
      {/* Top Bar */}
      <div className="bg-purple-main py-2 text-center text-xs font-bold tracking-wider text-white uppercase">
        OFERTA VÁLIDA SOMENTE HOJE: {currentDate}
      </div>

      {/* Hero Section */}
      <section className="px-4 pt-12 pb-20 text-center">
        <div className="mx-auto max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
          >
            Tenha <span className="text-purple-main">200 Dinâmicas Prontas e Organizadas</span> Para o Ano Inteiro em Menos de 1 Dia
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl"
          >
            Planos de aula prontos, alinhados à BNCC, para você aplicar já na próxima semana sem perder horas planejando
          </motion.p>

          {/* Video Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative mx-auto mt-12 aspect-[9/16] w-full max-w-[400px] overflow-hidden rounded-3xl bg-black shadow-2xl ring-1 ring-gray-200"
          >
            <iframe 
              src="https://fast.wistia.net/embed/iframe/z5sscb8x8p?videoFoam=true" 
              title="Wistia video player" 
              allow="autoplay; fullscreen" 
              frameBorder="0" 
              scrolling="no" 
              className="h-full w-full" 
              name="wistia_embed" 
              allowFullScreen
            ></iframe>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12"
          >
            <a 
              href="#planos"
              className="inline-flex items-center justify-center rounded-full bg-green-main px-10 py-4 text-lg font-bold text-white shadow-xl transition-all hover:bg-emerald-600 hover:shadow-2xl active:scale-95"
            >
              QUERO AGORA!
            </a>
          </motion.div>
        </div>
      </section>

      {/* What You'll Receive Section */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-5xl tracking-tight">O Que Você Vai Receber</h2>
            <div className="mt-4 h-1.5 w-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-500"></div>
          </div>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: FileText, title: "Material Completo", desc: "+250 dinâmicas de Arte organizadas e prontas para usar" },
              { icon: Smartphone, title: "Acesso Digital", desc: "Acesse por celular, tablet ou computador a qualquer hora" },
              { icon: Printer, title: "Pronto para Imprimir", desc: "Material formatado para impressão em qualquer tamanho" },
              { icon: CheckCircle, title: "100% BNCC", desc: "Todas as atividades alinhadas com códigos e habilidades" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center rounded-[40px] bg-white p-8 text-center shadow-xl shadow-gray-100 transition-all hover:shadow-2xl hover:-translate-y-2">
                <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-pink-500 text-white shadow-lg shadow-purple-200">
                  <item.icon className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 leading-tight">{item.title}</h3>
                <p className="mt-4 text-gray-500 leading-relaxed text-sm font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusive Bonuses */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-bold tracking-widest text-purple-600 uppercase ring-1 ring-purple-100 shadow-sm">
              <Gift className="h-3.5 w-3.5" />
              Presente Exclusivo
            </div>
            <h2 className="mt-6 text-3xl font-bold text-gray-900 sm:text-5xl">Bônus Exclusivos</h2>
            <div className="mt-4 h-1.5 w-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-500"></div>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {[
              { 
                title: "50 Técnicas de Pintura e Desenho", 
                desc: "Guia completo com técnicas artísticas para todas as idades",
                price: "R$27", 
                img: "https://image2url.com/r2/default/images/1775085466133-bebbcef3-ffb5-42d3-8be8-89ecb16784c8.png" 
              },
              { 
                title: "30 Projetos de Arte Prontos", 
                desc: "Projetos criativos completos com passo a passo ilustrado",
                price: "R$37", 
                img: "https://image2url.com/r2/default/images/1775085522082-32748241-5e7c-4802-a64f-11760a18bc31.png" 
              },
              { 
                title: "Apostila de Artes Visuais", 
                desc: "Exercícios práticos de composição, cores e texturas",
                price: "R$33", 
                img: "https://image2url.com/r2/default/images/1775085612990-95fe5915-3151-40aa-bf16-8c5570a7e446.png" 
              },
            ].map((bonus, i) => (
              <div key={i} className="group relative overflow-hidden rounded-[40px] bg-white p-6 shadow-xl shadow-gray-100 border-2 border-[#7C3AED] transition-all hover:shadow-2xl">
                <div className="relative aspect-square overflow-hidden rounded-[32px]">
                  <img 
                    src={bonus.img} 
                    alt={bonus.title} 
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-0 right-0 flex items-center gap-1.5 rounded-bl-[20px] bg-gradient-to-r from-[#7C3AED] to-[#DB2777] px-5 py-2 text-xs font-black text-white shadow-lg">
                    <Gift className="h-3.5 w-3.5" />
                    GRÁTIS
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <h3 className="text-xl font-bold text-gray-900 leading-tight">{bonus.title}</h3>
                  <p className="mt-4 text-sm text-gray-500 leading-relaxed font-medium px-4">{bonus.desc}</p>
                  
                  <div className="mt-8 rounded-[24px] bg-white border border-emerald-100 p-5 shadow-sm">
                    <p className="text-xs font-bold text-gray-400 line-through">Valor Real: {bonus.price}</p>
                    <p className="mt-1 text-lg font-black text-emerald-500">Você Paga: R$ 0,00</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 overflow-hidden rounded-[32px] bg-[#7C3AED] p-10 text-center text-white shadow-2xl shadow-purple-200">
            <p className="text-xl font-bold">Todos esses bônus dariam mais de</p>
            <div className="mt-4 inline-block rounded-full border-2 border-red-600 bg-white px-6 py-1">
              <p className="text-2xl font-black text-red-600">R$ 241,00</p>
            </div>
            <p className="mt-6 text-xl font-bold uppercase tracking-tight">
              mas SOMENTE HOJE,
            </p>
            <p className="mt-2 text-4xl font-black text-yellow-400 uppercase tracking-tighter">
              VOCÊ LEVA DE GRAÇA!
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="planos" className="py-24 px-4">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-center">
            <h2 className="text-center text-4xl font-bold text-gray-900 sm:text-5xl">Escolha Seu Plano</h2>
            <div className="mt-4 h-1.5 w-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-500"></div>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {/* Basic Plan */}
            <div className="flex flex-col rounded-[40px] bg-white p-10 shadow-xl shadow-gray-100 ring-1 ring-gray-100 transition-all hover:shadow-2xl">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900">Plano Básico</h3>
                <div className="mt-8">
                  <span className="text-lg font-bold text-gray-300 line-through">R$ 97</span>
                  <div className="mt-1 flex items-baseline justify-center gap-1">
                    <span className="text-6xl font-black text-[#7C3AED]">R$ 14,90</span>
                  </div>
                  <p className="mt-2 text-xs font-bold text-gray-400 uppercase tracking-widest">pagamento único</p>
                </div>
              </div>
              <ul className="mt-10 space-y-5">
                {["+200 Dinâmicas de Artes PDF", "Acesso digital", "Garantia de 7 dias"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 font-medium">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 text-emerald-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => setIsUpsellOpen(true)}
                className="mt-auto pt-12"
              >
                <div className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 py-5 text-lg font-black text-white shadow-lg shadow-emerald-100 transition-all hover:bg-emerald-600 active:scale-95">
                  <ShoppingCart className="h-5 w-5" />
                  ESCOLHER PLANO BÁSICO
                </div>
              </button>
            </div>

            {/* Premium Plan */}
            <div className="relative flex flex-col rounded-[40px] bg-white p-10 shadow-2xl shadow-purple-100 ring-4 ring-[#7C3AED]">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-full bg-[#7C3AED] px-6 py-2 text-xs font-black text-white uppercase tracking-widest shadow-lg">
                MAIS POPULAR
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900">Plano Premium</h3>
                <div className="mt-8">
                  <span className="text-lg font-bold text-gray-300 line-through">R$ 356</span>
                  <div className="mt-1 flex items-baseline justify-center gap-1">
                    <span className="text-6xl font-black text-[#7C3AED]">R$ 37,90</span>
                  </div>
                  <p className="mt-2 text-xs font-bold text-gray-400 uppercase tracking-widest">pagamento único</p>
                  <div className="mt-4 inline-block rounded-full bg-blue-50 px-4 py-1 text-[10px] font-bold text-blue-600 uppercase tracking-tight">
                    +1736 pessoas escolheram essa oferta
                  </div>
                </div>
              </div>
              <ul className="mt-10 space-y-5">
                {[
                  { text: "+200 Dinâmicas de Artes PDF", type: 'check' },
                  { text: "Acesso digital", type: 'check' },
                  { text: "BÔNUS: 50 Técnicas de Pintura e Desenho", type: 'gift' },
                  { text: "BÔNUS: 30 Projetos de Arte Prontos", type: 'gift' },
                  { text: "BÔNUS: Apostila de Artes Visuais", type: 'gift' },
                  { text: "BÔNUS: Grupo no Whatsapp", type: 'gift' },
                  { text: "Atualizações semanais", type: 'check' },
                  { text: "Suporte prioritário", type: 'check' },
                  { text: "Garantia de 7 dias", type: 'check' }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-900 font-bold">
                    {item.type === 'check' ? (
                      <CheckCircle className="h-6 w-6 flex-shrink-0 text-emerald-500" />
                    ) : (
                      <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md bg-purple-100 text-purple-600">
                        <Gift className="h-4 w-4" />
                      </div>
                    )}
                    <span className={item.type === 'gift' ? 'text-purple-700' : ''}>{item.text}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="https://pay.kirvano.com/fb421c0c-2b7a-42ac-ada2-8be9726ed1a7"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto pt-12 block"
              >
                <div className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 py-5 text-lg font-black text-white shadow-lg shadow-emerald-100 transition-all hover:bg-emerald-600 active:scale-95">
                  <ShoppingCart className="h-5 w-5" />
                  QUERO O PACOTE COMPLETO!
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center">
            <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">O Que Nossos Clientes Dizem</h2>
            <div className="mt-4 h-1.5 w-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-500"></div>
            <div className="mt-6 flex flex-col items-center justify-center gap-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
              </div>
              <p className="text-sm font-medium text-gray-500">4.9/5 - 578 avaliações</p>
            </div>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {[
              { 
                name: "Fernanda Lima", 
                role: "Professora de Artes — SP", 
                text: "As dinâmicas transformaram minhas aulas! Meus alunos nunca estiveram tão engajados com artes. O material é completo, organizado e me poupou horas de planejamento toda semana!",
                img: "https://i.imgur.com/qJdbv4W.png"
              },
              { 
                name: "Juliana Mendes", 
                role: "Mãe de Aluno — RJ", 
                text: "Minha filha sempre achou artes uma matéria chata. Depois que a professora começou a usar essas dinâmicas, ela chegou em casa animada querendo mostrar o que fez na aula. Recomendo demais!",
                img: "https://i.imgur.com/HeFz7I6.png"
              },
              { 
                name: "Prof. Mariana Costa", 
                role: "Educadora Infantil — MG", 
                text: "Finalmente um material que entende a nossa realidade. As crianças amam e eu economizo horas de planejamento.",
                img: "https://i.imgur.com/waCOTQ9.png"
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
                <p className="text-gray-600 italic leading-relaxed">“{item.text}”</p>
                <div className="mt-8 flex items-center gap-4">
                  <img src={item.img} alt={item.name} className="h-12 w-12 rounded-full object-cover" referrerPolicy="no-referrer" />
                  <div>
                    <p className="font-bold text-gray-900">{item.name}</p>
                    <p className="text-xs text-gray-500">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Author */}
      <section className="py-24 px-4">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col items-center gap-12 lg:flex-row">
            <div className="relative h-64 w-64 flex-shrink-0 overflow-hidden rounded-full shadow-2xl ring-8 ring-purple-50">
              <img 
                src="https://image2url.com/r2/default/images/1775087715439-c52aad3c-ec94-4c6e-b647-c4e187a647e7.png" 
                alt="Jessica Queiroz" 
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-purple-main text-sm font-bold uppercase tracking-widest">Sobre a Autora</h2>
              <h3 className="mt-2 text-4xl font-black text-gray-900">Jessica Queiroz</h3>
              <p className="mt-1 text-lg font-medium text-purple-600">Educadora de Artes Especialista</p>
              
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { value: "15+", label: "Anos de Experiência" },
                  { value: "3.500+", label: "Professores Formados" },
                  { value: "200+", label: "Workshops Realizados" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <p className="text-2xl font-black text-purple-main">{stat.value}</p>
                    <p className="mt-1 text-[10px] font-bold text-gray-500 uppercase leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>

              <p className="mt-10 text-lg text-gray-600 leading-relaxed italic">
                "Dediquei minha carreira a tornar as artes mais acessíveis e divertidas. Essas dinâmicas são o resultado de anos de pesquisa e prática em sala de aula."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Perguntas Frequentes</h2>
            <div className="mt-4 h-1.5 w-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-500"></div>
            <p className="mt-4 text-gray-600">Ainda tem dúvidas? A gente te ajuda a esclarecer tudo.</p>
          </div>
          <div className="mt-12 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 sm:p-10">
            <FAQItem 
              question="Como acessar o material?" 
              answer="Imediatamente após a confirmação do pagamento, você receberá um e-mail com seus dados de acesso à nossa plataforma exclusiva, onde poderá baixar todos os PDFs."
            />
            <FAQItem 
              question="Posso usar em escola/curso?" 
              answer="Sim! O material foi desenvolvido especificamente para ser aplicado em ambientes escolares, cursos livres de arte e até mesmo em casa por pais educadores."
            />
            <FAQItem 
              question="Serve para qual idade?" 
              answer="As dinâmicas abrangem desde o ensino fundamental I até o ensino médio, com adaptações sugeridas para cada nível de maturidade dos alunos."
            />
            <FAQItem 
              question="Preciso ter experiência prévia com artes?" 
              answer="Não é necessário. Cada dinâmica vem com instruções passo a passo, lista de materiais e objetivos pedagógicos claros, facilitando a aplicação mesmo para quem não é especialista."
            />
            <FAQItem 
              question="Como funciona a garantia?" 
              answer="Oferecemos uma garantia incondicional de 7 dias. Se por qualquer motivo você achar que o material não é para você, basta nos enviar um e-mail e devolveremos 100% do seu investimento."
            />
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-24 px-4">
        <div className="mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-[2.5rem] bg-white p-8 text-center shadow-2xl border-2 border-[#7c3aed] sm:p-16">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-purple-100 text-purple-main">
              <ShieldCheck className="h-10 w-10" />
            </div>
            <h2 className="mt-8 text-4xl font-black text-gray-900 uppercase tracking-tight">GARANTIA DE 7 DIAS</h2>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-600 leading-relaxed">
              Teste o material por 7 dias. Se não ficar satisfeito, devolvemos seu dinheiro sem complicação.
            </p>

            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              {[
                { icon: ShieldCheck, title: "Garantia de 7 Dias", desc: "Teste o material por 7 dias sem compromisso." },
                { icon: RefreshCw, title: "Risco Zero", desc: "Se não ficar satisfeito, devolvemos 100% seu dinheiro." },
                { icon: Smile, title: "Sem Burocracia", desc: "Reembolso rápido e sem complicação." },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#7c3aed] text-white shadow-lg">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-16">
              <a 
                href="#planos"
                className="inline-flex items-center justify-center rounded-full bg-[#22c55e] px-10 py-5 text-xl font-black text-white shadow-[0_10px_20px_-5px_rgba(34,197,94,0.3)] transition-all hover:bg-[#16a34a] hover:shadow-[0_15px_25px_-5px_rgba(34,197,94,0.4)] active:scale-95"
              >
                GARANTIR MINHA VAGA COM SEGURANÇA
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 px-4 text-center">
        <p className="text-sm text-gray-500">
          © 2026 Artful Lessons — Todos os direitos reservados
        </p>
        <div className="mt-4 flex justify-center gap-6 text-xs font-medium text-gray-400">
          <a href="#" className="hover:text-purple-main">Política de Privacidade</a>
          <a href="#" className="hover:text-purple-main">Termos de Uso</a>
        </div>
      </footer>

      {/* Upsell Modal */}
      <AnimatePresence>
        {isUpsellOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsUpsellOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-lg overflow-hidden rounded-[2.5rem] bg-white p-8 shadow-2xl sm:p-12"
            >
              <button 
                onClick={() => setIsUpsellOpen(false)}
                className="absolute right-6 top-6 text-gray-400 transition-colors hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="flex flex-col items-center text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-yellow-50 text-yellow-500">
                  <Gift className="h-10 w-10" />
                </div>
                
                <h2 className="mt-8 text-3xl font-black text-gray-900 sm:text-4xl">
                  Espere! Oferta Exclusiva!
                </h2>
                
                <p className="mt-4 text-lg font-bold text-gray-500">
                  Upgrade para o Premium com <br />
                  <span className="text-emerald-500 font-black">DESCONTO EXTRA</span>
                </p>

                <div className="mt-8 w-full rounded-3xl bg-gray-50 p-8">
                  <p className="text-base font-bold text-gray-400 line-through">De: R$ 37,90</p>
                  <p className="mt-1 text-sm font-bold text-gray-600">Por apenas</p>
                  <p className="text-6xl font-black text-[#22c55e]">R$ 27,90</p>
                  <p className="mt-4 text-lg font-black text-red-500">
                    Economize R$ 10 agora!
                  </p>
                </div>

                <ul className="mt-10 w-full space-y-4 text-left">
                  {[
                    "Todos os bônus inclusos",
                    "Atualizações mensais",
                    "Suporte prioritário"
                  ].map((text, i) => (
                    <li key={i} className="flex items-center gap-3 font-bold text-gray-700">
                      <CheckCircle className="h-6 w-6 text-emerald-500" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 w-full space-y-4">
                  <a 
                    href="https://pay.kirvano.com/56cfb244-22ee-43f5-8c10-69e16919e732"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full rounded-2xl bg-emerald-500 py-6 text-xl font-black text-white shadow-xl shadow-emerald-100 text-center transition-all hover:bg-emerald-600 active:scale-95"
                  >
                    SIM, QUERO O DESCONTO!
                  </a>
                  <a 
                    href="https://pay.kirvano.com/1d2cec46-f80d-44bb-badf-2ff8282d2cc3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-2 text-sm font-bold text-gray-400 transition-colors hover:text-gray-600"
                  >
                    Não, quero o pacote básico
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
