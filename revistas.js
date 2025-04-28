import Head from 'next/head';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import styles from '../styles/Magazines.module.scss';
import Button from '../components/Button/Button';

export default function Magazines() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Revistas | Apocalypse Academy</title>
        <meta name="description" content="Revistas digitais com análises profundas sobre os eventos atuais à luz das profecias bíblicas - Apocalypse Academy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Revistas Digitais</h1>
            <p className={styles.subtitle}>Análises profundas sobre os eventos atuais à luz das profecias bíblicas.</p>
          </div>
        </section>

        <section className={styles.featuredMagazine}>
          <div className={styles.sectionContainer}>
            <div className={styles.featuredContent}>
              <div className={styles.featuredCover}>
                <img src="/images/revista-01.jpg" alt="Apocalypse Chronicles - Edição 01" />
              </div>
              <div className={styles.featuredInfo}>
                <span className={styles.featuredLabel}>Edição Atual</span>
                <h2>Apocalypse Chronicles</h2>
                <h3>Edição 01: Desvendando os Sinais dos Tempos</h3>
                <p className={styles.featuredDescription}>
                  Nossa edição inaugural explora os sinais proféticos manifestos nos eventos globais recentes. 
                  Desde a ressurgência do islamismo radical até o avanço da inteligência artificial, 
                  analisamos como as profecias bíblicas estão se cumprindo diante de nossos olhos.
                </p>
                <div className={styles.featuredTopics}>
                  <h4>Nesta edição:</h4>
                  <ul>
                    <li>A Grande Ressurgência: O Despertar do Islamismo Radical</li>
                    <li>Inteligência Artificial: O Caminho para a Marca?</li>
                    <li>Israel e as Nações: Análise Geopolítica</li>
                    <li>A Igreja Perseguida: Relatório Global 2025</li>
                    <li>Entrevista Exclusiva: Sobreviventes da Grande Tribulação</li>
                  </ul>
                </div>
                <div className={styles.featuredMeta}>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Publicação</span>
                    <span className={styles.metaValue}>Abril 2025</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Páginas</span>
                    <span className={styles.metaValue}>64</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Formato</span>
                    <span className={styles.metaValue}>Digital (PDF)</span>
                  </div>
                </div>
                <div className={styles.featuredActions}>
                  <Button variant="primary" size="large">Ler Agora</Button>
                  <Button variant="outline" size="large">Download PDF</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.upcomingSection}>
          <div className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>Próxima Edição</h2>
            <div className={styles.upcomingContent}>
              <div className={styles.upcomingInfo}>
                <h3>Edição 02: O Grande Reset Profético</h3>
                <p className={styles.upcomingDescription}>
                  Nossa segunda edição explorará as transformações econômicas e sociais globais à luz das profecias bíblicas. 
                  Analisaremos como as mudanças nas estruturas financeiras, moedas digitais e controle social 
                  podem estar preparando o caminho para o sistema profetizado no livro do Apocalipse.
                </p>
                <div className={styles.upcomingTopics}>
                  <h4>Destaques:</h4>
                  <ul>
                    <li>Moedas Digitais e o Fim do Dinheiro Físico</li>
                    <li>Crédito Social: O Controle Total</li>
                    <li>Transhumanismo: A Fusão Homem-Máquina</li>
                    <li>A Nova Ordem Econômica Mundial</li>
                  </ul>
                </div>
                <div className={styles.upcomingMeta}>
                  <span>Lançamento: Julho 2025</span>
                </div>
                <Button variant="outline">Receber Notificação</Button>
              </div>
              <div className={styles.upcomingCover}>
                <img src="/images/revista-02-preview.jpg" alt="Apocalypse Chronicles - Edição 02 (Preview)" />
                <div className={styles.comingSoonBadge}>Em Breve</div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.archiveSection}>
          <div className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>Edições Especiais</h2>
            
            <div className={styles.archiveGrid}>
              <div className={styles.magazineCard}>
                <div className={styles.magazineCover}>
                  <img src="/images/revista-especial-israel.jpg" alt="Edição Especial: Israel" />
                </div>
                <div className={styles.magazineContent}>
                  <h3>Israel: O Centro da Profecia</h3>
                  <p>Um olhar aprofundado sobre o papel de Israel no plano profético e os eventos recentes no Oriente Médio.</p>
                  <div className={styles.magazineMeta}>
                    <span>Março 2025</span>
                    <span>48 páginas</span>
                  </div>
                  <Button variant="primary" fullWidth>Ler Agora</Button>
                </div>
              </div>
              
              <div className={styles.magazineCard}>
                <div className={styles.magazineCover}>
                  <img src="/images/revista-especial-tecnologia.jpg" alt="Edição Especial: Tecnologia" />
                </div>
                <div className={styles.magazineContent}>
                  <h3>Tecnologia e Profecia</h3>
                  <p>Como os avanços tecnológicos modernos se alinham com as profecias sobre os últimos dias.</p>
                  <div className={styles.magazineMeta}>
                    <span>Fevereiro 2025</span>
                    <span>56 páginas</span>
                  </div>
                  <Button variant="primary" fullWidth>Ler Agora</Button>
                </div>
              </div>
              
              <div className={styles.magazineCard}>
                <div className={styles.magazineCover}>
                  <img src="/images/revista-especial-igreja.jpg" alt="Edição Especial: Igreja" />
                </div>
                <div className={styles.magazineContent}>
                  <h3>A Igreja nos Últimos Dias</h3>
                  <p>Análise do estado atual da igreja global e seu papel nos eventos finais da história.</p>
                  <div className={styles.magazineMeta}>
                    <span>Janeiro 2025</span>
                    <span>52 páginas</span>
                  </div>
                  <Button variant="primary" fullWidth>Ler Agora</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className={styles.subscriptionSection}>
          <div className={styles.sectionContainer}>
            <div className={styles.subscriptionCard}>
              <div className={styles.subscriptionContent}>
                <h2>Assine Nossas Revistas</h2>
                <p>Receba todas as edições da Apocalypse Chronicles diretamente em seu e-mail, além de acesso a edições especiais exclusivas e conteúdo bônus.</p>
                
                <div className={styles.subscriptionPlans}>
                  <div className={styles.planCard}>
                    <h3>Plano Mensal</h3>
                    <div className={styles.planPrice}>
                      <span className={styles.currency}>R$</span>
                      <span className={styles.amount}>19</span>
                      <span className={styles.period}>/mês</span>
                    </div>
                    <ul className={styles.planFeatures}>
                      <li>Acesso a todas as edições regulares</li>
                      <li>Notificações de novos lançamentos</li>
                      <li>Formato digital (PDF)</li>
                    </ul>
                    <Button variant="outline" fullWidth>Assinar</Button>
                  </div>
                  
                  <div className={`${styles.planCard} ${styles.featuredPlan}`}>
                    <div className={styles.bestValueBadge}>Melhor Valor</div>
                    <h3>Plano Anual</h3>
                    <div className={styles.planPrice}>
                      <span className={styles.currency}>R$</span>
                      <span className={styles.amount}>179</span>
                      <span className={styles.period}>/ano</span>
                    </div>
                    <div className={styles.savings}>Economize R$ 49</div>
                    <ul className={styles.planFeatures}>
                      <li>Acesso a todas as edições regulares</li>
                      <li>Acesso a todas as edições especiais</li>
                      <li>Conteúdo exclusivo para assinantes</li>
                      <li>Formato digital (PDF)</li>
                    </ul>
                    <Button variant="primary" fullWidth>Assinar</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className={styles.testimonialSection}>
          <div className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>O Que Dizem Nossos Leitores</h2>
            
            <div className={styles.testimonialsList}>
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialContent}>
                  <p>"As análises da Apocalypse Chronicles são profundas e revelam conexões entre eventos atuais e profecias que eu nunca havia percebido antes."</p>
                </div>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.testimonialAvatar}>
                    <img src="/images/reader-1.jpg" alt="Avatar" />
                  </div>
                  <div className={styles.testimonialInfo}>
                    <h4>Carlos Mendonça</h4>
                    <p>Pastor e Teólogo</p>
                  </div>
                </div>
              </div>
              
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialContent}>
                  <p>"A qualidade editorial e o design da revista são excepcionais. O conteúdo é apresentado de forma clara e visualmente impactante."</p>
                </div>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.testimonialAvatar}>
                    <img src="/images/reader-2.jpg" alt="Avatar" />
                  </div>
                  <div className={styles.testimonialInfo}>
                    <h4>Ana Luiza Silva</h4>
                    <p>Designer Gráfica</p>
                  </div>
                </div>
              </div>
              
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialContent}>
                  <p>"Como estudante de teologia, encontro nas revistas da Apocalypse Academy um material valioso que combina rigor acadêmico com aplicação prática."</p>
                </div>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.testimonialAvatar}>
                    <img src="/images/reader-3.jpg" alt="Avatar" />
                  </div>
                  <div className={styles.testimonialInfo}>
                    <h4>Marcos Oliveira</h4>
                    <p>Estudante de Teologia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
