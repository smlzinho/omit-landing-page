'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  Zap,
  Target,
  MessageSquare,
  Layout,
  BarChart3,
  Users,
  Plus,
  Minus,
  Star,
  ShieldCheck,
  TrendingDown,
  Shield
} from 'lucide-react';
import styles from './landing.module.css';
import { trackFBEvent } from '@/lib/facebook';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      className={styles.faqItem}
      onClick={() => setIsOpen(!isOpen)}
      style={{ cursor: 'pointer' }}
      initial={false}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h4 style={{ fontSize: '18px', fontWeight: 600 }}>{question}</h4>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          style={{ fontSize: '24px', color: '#86868b' }}
        >
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </motion.span>
      </div>
      {isOpen && (
        <motion.p
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          style={{ marginTop: '16px', color: '#86868b', lineHeight: 1.6, overflow: 'hidden' }}
        >
          {answer}
        </motion.p>
      )}
    </motion.div>
  );
};

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

export default function LandingPage() {
  const scrollToOffer = () => {
    document.getElementById('final-offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.landingWrapper}>
      {/* Header / Logo */}
      <header style={{ padding: '20px', textAlign: 'center', borderBottom: '1px solid #f0f0f0' }}>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ fontWeight: 800, fontSize: '20px', letterSpacing: '-1px' }}
        >
          OMIT <span style={{ color: '#d4af37' }}>PRO</span>
        </motion.h3>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <FadeIn>
          <div className={styles.badge}>Lançamento Oficial 2026</div>
        </FadeIn>

        <motion.h1
          className={styles.headline}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Vender ficou<br />fácil demais.
        </motion.h1>

        <FadeIn delay={0.2}>
          <p className={styles.subheadline}>
            A única plataforma tudo-em-um que une Inteligência Artificial avançada, mineração de produtos e estratégias validadas.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <motion.button
            onClick={scrollToOffer}
            className={`${styles.ctaButton} ${styles.ctaGold}`}
            style={{
              padding: '18px 48px',
              fontSize: '18px'
            }}
            animate={{
              y: [0, -4, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{ scale: 1.05, backgroundColor: '#000' }}
            whileTap={{ scale: 0.95 }}
          >
            DESCOBRIR COMO FUNCIONA
          </motion.button>
        </FadeIn>
      </section>

      {/* Problem & Solution */}
      <section className={styles.section}>
        <FadeIn>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(32px, 5vw, 40px)', marginBottom: '40px', fontWeight: 800 }}>O Jogo Mudou.</h2>
        </FadeIn>

        <div className={styles.comparisonGrid}>
          <motion.div
            className={`${styles.comparisonBox} ${styles.oldWay}`}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 style={{ color: '#ff3b30', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '10px' }}>
              <XCircle size={24} /> Jeito Antigo
            </h3>
            <ul className={styles.comparisonList}>
              <li>Gastar R$ 2.000+ em ferramentas separadas</li>
              <li>Perder horas minerando produtos manualmente</li>
              <li>Ficar no prejuízo sem saber onde errou</li>
              <li>Depender da sorte para escolher o nicho</li>
              <li>Trabalho manual, lento e cansativo</li>
            </ul>
          </motion.div>

          <motion.div
            className={`${styles.comparisonBox} ${styles.newWay}`}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 style={{ color: '#34c759', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '10px' }}>
              <CheckCircle2 size={24} /> Com OMIT
            </h3>
            <ul className={styles.comparisonList}>
              <li>Tudo em um só lugar por um valor simbólico</li>
              <li>IA encontra os produtos virais em segundos</li>
              <li>Simulador de lucro real para evitar prejuízo</li>
              <li>Estratégias de elite (Claude 3.5 & DeepSeek)</li>
              <li>O seu negócio rodando com inteligência</li>
              <li>+ 20 funcionalidades exclusivas</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Features List */}
      <section style={{ background: '#f5f5f7', padding: '80px 20px' }}>
        <div className={styles.section}>
          <FadeIn>
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(32px, 5vw, 40px)', marginBottom: '16px', fontWeight: 800 }}>Ecossistema de Elite</h2>
            <p style={{ textAlign: 'center', color: '#86868b', marginBottom: '40px' }}>20+ ferramentas de inteligência artificial prontas para escalar seu lucro.</p>
          </FadeIn>

          <div className={styles.featuresGrid}>
            {[
              { title: "Mineração de Elite", icon: <Target size={24} />, desc: "Rastreamos os produtos que estão explodindo em vendas agora." },
              { title: "Cursos & Mentorias", icon: <Users size={24} />, desc: "Treinamentos práticos do absoluto zero à escala." },
              { title: "Estratégia Neural", icon: <Zap size={24} />, desc: "Uso do Claude 3.5 e DeepSeek para planos de vendas perfeitos." },
              { title: "Simulador de Lucro", icon: <BarChart3 size={24} />, desc: "Entenda sua margem real antes de investir um único real." },
              { title: "Copys de Conversão", icon: <MessageSquare size={24} />, desc: "Gere textos persuasivos que vendem qualquer produto." },
              { title: "Suporte VIP", icon: <Layout size={24} />, desc: "Comunidade e especialistas focados no seu resultado." }
            ].map((f, i) => (
              <motion.div
                key={i}
                className={styles.featureCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, backgroundColor: '#ffffff', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}
              >
                <div style={{ color: '#d4af37', marginBottom: '15px' }}>{f.icon}</div>
                <h4 style={{ fontSize: '20px', marginBottom: '10px', fontWeight: 700 }}>{f.title}</h4>
                <p style={{ color: '#86868b', fontSize: '15px', lineHeight: 1.5 }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.section}>
        <FadeIn>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(32px, 5vw, 40px)', marginBottom: '48px', fontWeight: 800 }}>O que estão dizendo...</h2>
        </FadeIn>

        <div className={styles.reviewsGrid}>
          {[
            { name: "Lucas Mendes", role: "Dropshipper", text: "Paguei 47 reais e obtive mais valor que em curso de 2 mil. A mineração é insana.", image: "/avatars/lucas_new.png" },
            { name: "Ana Paula", role: "E-commerce", text: "O simulador de lucro salvou meu negócio. Parei de 'achar' e comecei a lucrar de verdade.", image: "/avatars/ana.png" },
            { name: "Ricardo Silva", role: "Marketing Digital", text: "A facilidade de usar as IAs integradas é o que faz a diferença no dia a dia.", image: "/avatars/ricardo.png" }
          ].map((r, i) => (
            <motion.div
              key={i}
              className={styles.reviewCard}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className={styles.reviewHeader}>
                <div
                  className={styles.avatar}
                  style={{ backgroundImage: `url(${r.image})` }}
                ></div>
                <div>
                  <div style={{ fontWeight: 700 }}>{r.name}</div>
                  <div style={{ fontSize: '12px', color: '#86868b', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    {r.role} • <div className="flex gap-0.5" style={{ color: '#d4af37', display: 'flex' }}>
                      <Star size={10} fill="#d4af37" />
                      <Star size={10} fill="#d4af37" />
                      <Star size={10} fill="#d4af37" />
                      <Star size={10} fill="#d4af37" />
                      <Star size={10} fill="#d4af37" />
                    </div>
                  </div>
                </div>
              </div>
              <p style={{ fontStyle: 'italic', color: '#424245', lineHeight: 1.6 }}>"{r.text}"</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final Offer Section (Combo Gold) */}
      <section className={styles.offerSection} id="final-offer">
        <FadeIn>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(32px, 5vw, 48px)', marginBottom: '60px', fontWeight: 900 }}>Pare de Rasgar Dinheiro.</h2>
        </FadeIn>

        <div className={styles.offerContainer}>
          {/* Left Column: Old Way */}
          <motion.div
            className={styles.oldWayColumn}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 style={{ fontSize: '20px', fontWeight: 800, textTransform: 'uppercase', color: '#86868b', marginBottom: '32px' }}>O Jeito Antigo</h3>
            <div style={{ color: '#fff', fontSize: '14px' }}>
              {[
                "Curso de Dropshipping (R$ 997)",
                "Ferramenta de Mineração (R$ 297/mês)",
                "Editor de Vídeo (R$ 500/mês)",
                "Hospedagem + Shopify (R$ 150/mês)",
                "Mentorias Vagas (R$ 2.000+)"
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', opacity: 0.6 }}>
                  <XCircle size={14} color="#ff3b30" /> <span style={{ textDecoration: 'line-through' }}>{item}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '40px' }}>
              <p style={{ fontSize: '10px', textTransform: 'uppercase', color: '#86868b' }}>Custo Mensal Estimado</p>
              <h4 style={{ fontSize: '32px', fontWeight: 900, color: '#ff3b30' }}>R$ 3.944,00</h4>
            </div>
          </motion.div>

          {/* Right Column: Combo Gold */}
          <motion.div
            className={styles.newWayColumn}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.indispensavel}>Indispensável</div>
            <h3 style={{ fontSize: '24px', fontWeight: 900, color: '#1d1d1f', marginBottom: '8px' }}>OMIT - COMBO GOLD</h3>
            <p style={{ fontSize: '12px', color: '#34c759', fontWeight: 800, textTransform: 'uppercase', marginBottom: '24px' }}>+20 Funcionalidades Premium</p>

            <ul className={styles.newWayList}>
              {[
                "Minerador de Produtos Virais",
                "Radar de Fornecedores 24h",
                "Criador de Criativos com IA",
                "Navegador de Nichos Ocultos",
                "Simulador de ROI Automática",
                "Estratégias de Elite Inclusas",
                "Acesso Vitalício e Imediato"
              ].map((item, idx) => (
                <li key={idx}><CheckCircle2 size={18} color="#34c759" fill="rgba(52, 199, 89, 0.1)" /> {item}</li>
              ))}
            </ul>

            <div className={styles.priceHighlight}>
              <span style={{ color: '#86868b', fontSize: '14px', marginBottom: '8px', display: 'block' }}>Investimento Único (Hoje)</span>
              <span className={styles.oldPriceRed}>de R$ 3.944,00</span>
              <span className={styles.newPriceGreen} style={{ color: '#1d1d1f' }}>R$ 47,90</span>

              <motion.a
                href="https://pay.kiwify.com.br/P2vOqMs"
                className={`${styles.ctaButton} ${styles.ctaGold}`}
                style={{ width: '100%', marginTop: '24px' }}
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => trackFBEvent('InitiateCheckout', { currency: 'BRL', value: 47.90 })}
              >
                COMEÇAR AQUI <ArrowRight className="inline-block ml-2" />
              </motion.a>
              <p style={{ textAlign: 'center', fontSize: '12px', color: '#86868b', marginTop: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                <ShieldCheck size={12} /> Acesso Seguro & Imediato
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.section}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(32px, 5vw, 40px)', marginBottom: '48px', fontWeight: 800 }}>Dúvidas Frequentes</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <FAQItem
              question="O pagamento é mensal?"
              answer="Não. Nesta oferta especial, o pagamento é único de R$ 47,90 para acesso vitalício."
            />
            <FAQItem
              question="Funciona para iniciantes?"
              answer="Sim! Temos cursos e tutorias em vídeo ensinando do zero como usar cada ferramenta."
            />
            <FAQItem
              question="O acesso é vitalício?"
              answer="Sim, o valor promocional garante acesso vitalício a todas as ferramentas atuais da plataforma."
            />
            <FAQItem
              question="O suporte é humanizado?"
              answer="Sim, temos um time de especialistas pronto para tirar suas dúvidas dentro da plataforma."
            />
          </div>
        </div>
      </section>

      {/* Final Platform Access Section */}
      <section style={{ background: '#f5f5f7', padding: '60px 20px', textAlign: 'center', borderTop: '1px solid #e5e5e7' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h3 style={{ color: '#1d1d1f', fontSize: '24px', marginBottom: '12px', fontWeight: 700 }}>Já é nosso aluno?</h3>
          <p style={{ color: '#86868b', marginBottom: '24px' }}>
            Para acessar a plataforma OMIT e todas as suas ferramentas após o pagamento, clique no botão abaixo:
          </p>
          <motion.a
            href="https://suas-vendas-seu-lucro-dnjgbb8bs-samuels-projects-59b087e2.vercel.app/login-kiwify"
            className={`${styles.ctaButton} ${styles.ctaGold}`}
            style={{ display: 'inline-flex', padding: '16px 40px', textDecoration: 'none' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ACESSAR PLATAFORMA APÓS A COMPRA <ArrowRight size={18} className="ml-2" />
          </motion.a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '60px 20px', textAlign: 'center', color: '#86868b', fontSize: '14px', borderTop: '1px solid #f0f0f0' }}>
        © 2026 OMIT • Todos os direitos reservados.
      </footer>
    </div>
  );
}
