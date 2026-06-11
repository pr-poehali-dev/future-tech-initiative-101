import Icon from "@/components/ui/icon"

export default function Footer() {
  return (
    <footer className="relative z-20 px-8 py-16 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mb-12">
          <div className="flex flex-col gap-4">
            <p className="text-white text-sm uppercase tracking-widest font-medium">Чайная лавка</p>
            <p className="text-white/50 text-xs leading-relaxed">
              Элитный чай со всего мира. Прямые поставки с плантаций Китая, Японии и Индии.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="text-white/40 hover:text-white transition-colors duration-200">
                <Icon name="Send" size={16} />
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors duration-200">
                <Icon name="Instagram" size={16} />
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors duration-200">
                <Icon name="MessageCircle" size={16} />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-white/50 text-xs uppercase tracking-widest">Навигация</p>
            <nav className="flex flex-col gap-3">
              <a href="#catalog" className="text-white/70 text-xs hover:text-white transition-colors duration-200">Каталог чаёв</a>
              <a href="#" className="text-white/70 text-xs hover:text-white transition-colors duration-200">О нас</a>
              <a href="#" className="text-white/70 text-xs hover:text-white transition-colors duration-200">Доставка и оплата</a>
              <a href="#" className="text-white/70 text-xs hover:text-white transition-colors duration-200">Отзывы</a>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-white/50 text-xs uppercase tracking-widest">Контакты</p>
            <div className="flex flex-col gap-3">
              <a href="tel:+78001234567" className="text-white/70 text-xs hover:text-white transition-colors duration-200 flex items-center gap-2">
                <Icon name="Phone" size={12} />
                +7 800 123-45-67
              </a>
              <a href="mailto:hello@chaylav.ru" className="text-white/70 text-xs hover:text-white transition-colors duration-200 flex items-center gap-2">
                <Icon name="Mail" size={12} />
                hello@chaylav.ru
              </a>
              <p className="text-white/50 text-xs flex items-center gap-2">
                <Icon name="Clock" size={12} />
                Пн–Вс, 9:00 — 21:00
              </p>
              <a
                href="https://maps.google.com/?q=ул.+Чайная,+12,+Москва"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 text-xs hover:text-white transition-colors duration-200 flex items-start gap-2"
              >
                <Icon name="MapPin" size={12} className="mt-0.5 shrink-0" />
                ул. Чайная, 12, Москва
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-white/25 text-xs">© 2025 Чайная лавка. Все права защищены.</p>
          <p className="text-white/25 text-xs">Доставка по всей России</p>
        </div>
      </div>
    </footer>
  )
}