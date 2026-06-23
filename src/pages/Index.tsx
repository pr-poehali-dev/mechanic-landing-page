import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const HERO_IMG = 'https://cdn.poehali.dev/projects/d6abc938-b80f-4bdf-93c3-5712fe60b668/files/073bf44b-4e66-46d2-94a1-28c8ce475448.jpg';
const PORTRAIT_IMG = 'https://cdn.poehali.dev/projects/d6abc938-b80f-4bdf-93c3-5712fe60b668/files/0ead71e7-e9ab-4769-ba1b-303d0ec05f48.jpg';

const advantages = [
  { icon: 'UserCheck', title: 'Индивидуальный подход', text: 'Работаю лично с каждой машиной — без конвейера и спешки.' },
  { icon: 'Wallet', title: 'Честные цены', text: 'Без посредников и накруток. Платите только за реальную работу.' },
  { icon: 'Award', title: 'Опыт более 10 лет', text: 'Знаю автомобили изнутри. Любая марка — отечественная или иномарка.' },
  { icon: 'ShieldCheck', title: 'Гарантия на работы', text: 'Отвечаю за результат. Гарантия на все виды ремонта.' },
];

const services = [
  { icon: 'ScanLine', title: 'Диагностика', text: 'Компьютерная и визуальная проверка всех систем.' },
  { icon: 'Droplet', title: 'Замена масла', text: 'Масло, фильтры, технические жидкости.' },
  { icon: 'Cog', title: 'Подвеска', text: 'Ремонт и замена элементов ходовой части.' },
  { icon: 'Zap', title: 'Электрика', text: 'Поиск и устранение неисправностей проводки.' },
  { icon: 'CircleDot', title: 'Тормозная система', text: 'Колодки, диски, суппорты, прокачка тормозов.' },
  { icon: 'Wrench', title: 'Ремонт двигателя', text: 'Капитальный и текущий ремонт ДВС.' },
];

const reasons = [
  { icon: 'Handshake', title: 'Без посредников', text: 'Вы общаетесь напрямую с мастером, а не с менеджером.' },
  { icon: 'MessageSquareQuote', title: 'Честные рекомендации', text: 'Не навязываю лишнего — говорю как есть.' },
  { icon: 'BadgeCheck', title: 'Личная ответственность', text: 'Моё имя — моя репутация в каждом ремонте.' },
  { icon: 'PackageCheck', title: 'Качественные запчасти', text: 'Использую проверенных поставщиков и оригинал.' },
];

const reviews = [
  { name: 'Алексей', car: 'Toyota Camry', text: 'Иван нашёл проблему, которую не увидели в трёх сервисах. Честно, быстро, по делу. Рекомендую!' },
  { name: 'Марина', car: 'Hyundai Solaris', text: 'Очень довольна. Объяснил всё простым языком, цена адекватная, машина едет как новая.' },
  { name: 'Дмитрий', car: 'Lada Vesta', text: 'Делал подвеску и тормоза. Всё в срок, с гарантией. Теперь только к нему.' },
];

const navLinks = [
  { label: 'Услуги', href: '#services' },
  { label: 'Обо мне', href: '#about' },
  { label: 'Отзывы', href: '#reviews' },
  { label: 'Контакты', href: '#contacts' },
];

const Index = () => {
  const [form, setForm] = useState({ name: '', phone: '', car: '', problem: '' });

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 glass">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
              <Icon name="Wrench" className="text-primary-foreground" size={20} />
            </div>
            <span className="font-oswald font-bold text-lg tracking-wide">БОЛДИН<span className="text-primary">.АВТО</span></span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide font-medium">{l.label}</a>
            ))}
          </nav>
          <Button asChild className="rounded-xl font-semibold">
            <a href="#booking">Записаться</a>
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-28 pb-20 grid-pattern">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 glass-yellow rounded-full px-4 py-1.5 mb-6">
              <Icon name="MapPin" size={16} className="text-primary" />
              <span className="text-sm">Ступино · Личный автомастер</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] mb-6">
              Ремонт автомобилей <br /><span className="text-gradient-yellow">от одного мастера</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mb-8 font-golos normal-case tracking-normal">
              Работаю лично с каждым клиентом. Без посредников и лишних наценок.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-xl text-base font-semibold h-13 px-7 animate-glow">
                <a href="#booking"><Icon name="CalendarCheck" size={20} className="mr-2" />Записаться на ремонт</a>
              </Button>
              <Button asChild size="lg" variant="secondary" className="rounded-xl text-base font-semibold h-13 px-7">
                <a href="tel:+70000000000"><Icon name="Phone" size={20} className="mr-2" />Позвонить</a>
              </Button>
            </div>
            <div className="flex gap-8 mt-10">
              {[['10+', 'лет опыта'], ['500+', 'авто в год'], ['100%', 'гарантия']].map(([n, t]) => (
                <div key={t}>
                  <div className="font-oswald text-3xl font-bold text-primary">{n}</div>
                  <div className="text-sm text-muted-foreground">{t}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-primary/30 blur-2xl rounded-3xl" />
            <img src={HERO_IMG} alt="Автомастер за работой" className="relative rounded-3xl w-full object-cover aspect-[4/3] border border-white/10" />
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((a) => (
            <div key={a.title} className="glass rounded-2xl p-6 hover-lift">
              <div className="w-12 h-12 rounded-xl glass-yellow flex items-center justify-center mb-4">
                <Icon name={a.icon} size={24} className="text-primary" />
              </div>
              <h3 className="text-lg mb-2">{a.title}</h3>
              <p className="text-sm text-muted-foreground font-golos normal-case tracking-normal">{a.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-primary font-oswald uppercase tracking-widest text-sm">Что я делаю</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3">Услуги</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group glass rounded-2xl p-7 hover-lift">
              <div className="flex items-start justify-between mb-5">
                <div className="w-14 h-14 rounded-xl glass-yellow flex items-center justify-center">
                  <Icon name={s.icon} size={26} className="text-primary" />
                </div>
                <Icon name="ArrowUpRight" size={22} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-xl mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground font-golos normal-case tracking-normal">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-3 bg-primary/20 blur-2xl rounded-3xl" />
            <img src={PORTRAIT_IMG} alt="Иван Иванов" className="relative rounded-3xl w-full object-cover aspect-[4/5] border border-white/10" />
            <div className="absolute bottom-6 left-6 glass-yellow rounded-2xl px-5 py-3">
              <div className="font-oswald font-bold text-lg">Иван Иванов</div>
              <div className="text-sm text-muted-foreground normal-case tracking-normal">Автомеханик · Ступино</div>
            </div>
          </div>
          <div>
            <span className="text-primary font-oswald uppercase tracking-widest text-sm">Обо мне</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">Иванов Иван Иванович</h2>
            <p className="text-muted-foreground mb-4 font-golos normal-case tracking-normal leading-relaxed">
              Я — независимый автомеханик из Ступино. За плечами более 10 лет в ремонте автомобилей разных марок.
              Начинал помощником в крупном сервисе, а сегодня работаю на себя, чтобы давать клиентам честный сервис без посредников.
            </p>
            <p className="text-muted-foreground mb-8 font-golos normal-case tracking-normal leading-relaxed">
              Каждый автомобиль для меня — личная ответственность. Я не передаю работу стажёрам и не навязываю лишнего.
              Диагностирую, объясняю и ремонтирую так, как сделал бы для себя.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {reasons.map((r) => (
                <div key={r.title} className="flex gap-3 items-start glass rounded-xl p-4">
                  <Icon name={r.icon} size={22} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <div className="font-semibold text-sm mb-1 uppercase tracking-wide font-oswald">{r.title}</div>
                    <div className="text-xs text-muted-foreground font-golos normal-case tracking-normal">{r.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-20 container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-primary font-oswald uppercase tracking-widest text-sm">Что говорят клиенты</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3">Отзывы</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="glass rounded-2xl p-7 hover-lift">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon key={i} name="Star" size={18} className="text-primary fill-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 font-golos normal-case tracking-normal leading-relaxed">«{r.text}»</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-oswald font-bold text-primary-foreground">{r.name[0]}</div>
                <div>
                  <div className="font-semibold uppercase tracking-wide font-oswald text-sm">{r.name}</div>
                  <div className="text-xs text-muted-foreground normal-case tracking-normal">{r.car}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BOOKING FORM */}
      <section id="booking" className="py-20 container mx-auto px-4">
        <div className="glass-yellow rounded-3xl p-8 md:p-12 grid lg:grid-cols-2 gap-10 items-center relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Записаться <span className="text-gradient-yellow">на ремонт</span></h2>
            <p className="text-muted-foreground mb-6 font-golos normal-case tracking-normal">
              Оставьте заявку — перезвоню, уточню детали и подберём удобное время. Без обязательств.
            </p>
            <div className="space-y-3">
              {['Бесплатная консультация по телефону', 'Честная оценка стоимости', 'Гарантия на все работы'].map((t) => (
                <div key={t} className="flex items-center gap-3 text-sm">
                  <Icon name="CheckCircle2" size={20} className="text-primary" />
                  <span className="font-golos normal-case tracking-normal">{t}</span>
                </div>
              ))}
            </div>
          </div>
          <form className="relative space-y-4" onSubmit={(e) => e.preventDefault()}>
            <Input placeholder="Ваше имя" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="h-12 rounded-xl bg-background/50 border-white/10" />
            <Input placeholder="Телефон" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="h-12 rounded-xl bg-background/50 border-white/10" />
            <Input placeholder="Марка и модель авто" value={form.car} onChange={(e) => setForm({ ...form, car: e.target.value })} className="h-12 rounded-xl bg-background/50 border-white/10" />
            <Textarea placeholder="Опишите проблему" value={form.problem} onChange={(e) => setForm({ ...form, problem: e.target.value })} className="rounded-xl bg-background/50 border-white/10 min-h-24" />
            <Button type="submit" size="lg" className="w-full rounded-xl text-base font-semibold h-13">
              Отправить заявку <Icon name="Send" size={18} className="ml-2" />
            </Button>
          </form>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-20 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <span className="text-primary font-oswald uppercase tracking-widest text-sm">Контакты</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-8">Где меня найти</h2>
            <div className="space-y-4">
              {[
                { icon: 'MapPin', label: 'Город', value: 'Ступино, Московская область', href: '#' },
                { icon: 'Phone', label: 'Телефон', value: '+7 000 000-00-00', href: 'tel:+70000000000' },
                { icon: 'Send', label: 'Telegram', value: '@boldin_auto', href: '#' },
                { icon: 'MessageCircle', label: 'WhatsApp', value: '+7 000 000-00-00', href: '#' },
                { icon: 'MessagesSquare', label: 'MAX', value: 'Иванов Иван', href: '#' },
              ].map((c) => (
                <a key={c.label} href={c.href} className="flex items-center gap-4 glass rounded-2xl p-4 hover-lift">
                  <div className="w-11 h-11 rounded-xl glass-yellow flex items-center justify-center shrink-0">
                    <Icon name={c.icon} size={22} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">{c.label}</div>
                    <div className="font-semibold font-golos normal-case tracking-normal">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden border border-white/10 min-h-80 glass">
            <iframe
              title="Карта Ступино"
              src="https://yandex.ru/map-widget/v1/?ll=38.077%2C54.889&z=12&text=%D0%A1%D1%82%D1%83%D0%BF%D0%B8%D0%BD%D0%BE"
              className="w-full h-full min-h-80"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Icon name="Wrench" className="text-primary-foreground" size={16} />
            </div>
            <span className="font-oswald font-bold tracking-wide">БОЛДИН<span className="text-primary">.АВТО</span></span>
          </div>
          <p className="text-sm text-muted-foreground font-golos normal-case tracking-normal">© 2026 Иванов Иван Иванович · Ступино</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;