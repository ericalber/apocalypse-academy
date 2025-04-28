import styles from './Footer.module.scss';
import Link from 'next/link';
import Button from '../Button/Button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <h2 className={styles.logo}>Apocalypse Academy</h2>
            <p className={styles.tagline}>"Quando o sistema falhar, aqui ainda restará verdade."</p>
            <div className={styles.social}>
              <a href="#" aria-label="Instagram" className={styles.socialLink}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" aria-label="YouTube" className={styles.socialLink}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
              <a href="#" aria-label="Telegram" className={styles.socialLink}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-8.609 3.33c-2.068.8-4.133 1.598-5.724 2.21a405.15 405.15 0 0 1-2.849 1.09c-.42.147-.99.332-1.473.901-.728.968.193 1.798.919 2.286 1.61.516 3.275 1.009 4.654 1.472.846 1.467 1.618 2.92 2.454 4.342l.159.273c.51.885.947 1.643 1.486 1.725.394.06.946-.409 1.178-.8.11-.186.196-.401.303-.622.105-.217.42-.87.673-1.4l.697-1.495c2.48-5.314 4.95-10.636 7.396-16.013a2.076 2.076 0 0 0-.497-2.31 2.138 2.138 0 0 0-1.15-.603z"></path></svg>
              </a>
              <a href="#" aria-label="WhatsApp" className={styles.socialLink}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </a>
            </div>
          </div>
          
          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h3 className={styles.linkTitle}>Conteúdo</h3>
              <ul className={styles.linkList}>
                <li><Link href="/documentarios"><span>Documentários</span></Link></li>
                <li><Link href="/cursos"><span>Cursos</span></Link></li>
                <li><Link href="/revistas"><span>Revistas</span></Link></li>
                <li><Link href="/devocionais"><span>Devocionais</span></Link></li>
                <li><Link href="/blog"><span>Arquivos Secretos</span></Link></li>
              </ul>
            </div>
            
            <div className={styles.linkGroup}>
              <h3 className={styles.linkTitle}>Comunidade</h3>
              <ul className={styles.linkList}>
                <li><Link href="/comunidade"><span>Os Escolhidos</span></Link></li>
                <li><Link href="/eventos"><span>Eventos</span></Link></li>
                <li><Link href="/telegram"><span>Grupo Telegram</span></Link></li>
                <li><Link href="/whatsapp"><span>Grupo WhatsApp</span></Link></li>
              </ul>
            </div>
            
            <div className={styles.linkGroup}>
              <h3 className={styles.linkTitle}>Sobre</h3>
              <ul className={styles.linkList}>
                <li><Link href="/sobre"><span>Nossa Missão</span></Link></li>
                <li><Link href="/equipe"><span>Equipe</span></Link></li>
                <li><Link href="/contato"><span>Contato</span></Link></li>
                <li><Link href="/faq"><span>Perguntas Frequentes</span></Link></li>
              </ul>
            </div>
          </div>
          
          <div className={styles.newsletter}>
            <h3 className={styles.newsletterTitle}>Receba Atualizações Proféticas</h3>
            <p className={styles.newsletterText}>Inscreva-se para receber análises exclusivas sobre os sinais dos tempos.</p>
            <div className={styles.newsletterForm}>
              <input type="email" placeholder="Seu e-mail" className={styles.newsletterInput} />
              <Button variant="primary" size="medium">Inscrever</Button>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <div className={styles.copyright}>
            &copy; {currentYear} Apocalypse Academy. Todos os direitos reservados.
          </div>
          <div className={styles.legal}>
            <Link href="/termos"><span>Termos de Uso</span></Link>
            <Link href="/privacidade"><span>Política de Privacidade</span></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
