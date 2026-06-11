import Icon from "@/components/ui/icon"

const perks = [
  { icon: "Leaf", text: "Дегустация 5 сортов чая" },
  { icon: "Users", text: "Уютная атмосфера для компании" },
  { icon: "BookOpen", text: "Рассказ о культуре чаепития" },
  { icon: "Gift", text: "Подарок каждому гостю" },
]

export default function TeaInvite() {
  return (
    <section className="relative z-20 px-8 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden border border-white/10">

          {/* Фон */}
          <div className="absolute inset-0">
            <img
              src="https://cdn.poehali.dev/projects/91ed680b-5b5f-46c7-90bd-83c4820d3516/files/c3f90b9e-7126-4e58-b6d1-07720415c07b.jpg"
              alt="Чайная лавка"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/30" />
          </div>

          {/* Контент */}
          <div className="relative p-10 md:p-16 grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-white/50 text-xs uppercase tracking-widest mb-3">Приходите в гости</p>
                <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight leading-tight">
                  Попьём чай <br />
                  <span className="font-medium italic">вместе?</span>
                </h2>
              </div>

              <p className="text-white/60 text-sm leading-relaxed">
                Мы ждём вас в нашей лавке на ул. Чайной, 12. Здесь всегда тепло, тихо и пахнет хорошим чаем. Приходите одни или с друзьями — мы угостим и расскажем всё о каждом сорте.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {perks.map((perk) => (
                  <div key={perk.text} className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-white/8 border border-white/15 flex items-center justify-center shrink-0">
                      <Icon name={perk.icon} size={13} className="text-amber-400" />
                    </div>
                    <span className="text-white/65 text-xs leading-snug">{perk.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://maps.google.com/?q=ул.+Чайная,+12,+Москва"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-white text-black text-xs font-medium hover:bg-white/90 transition-all duration-200 flex items-center gap-2"
                >
                  <Icon name="MapPin" size={13} />
                  Как добраться
                </a>
                <a
                  href="tel:+78001234567"
                  className="px-6 py-3 rounded-full border border-white/25 text-white text-xs hover:bg-white/10 transition-all duration-200 flex items-center gap-2"
                >
                  <Icon name="Phone" size={13} />
                  Позвонить
                </a>
              </div>
            </div>

            {/* Карточка с деталями */}
            <div className="flex flex-col gap-4 md:ml-auto md:w-72">
              <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-5 flex flex-col gap-4">
                <p className="text-white text-sm font-medium">Мы здесь</p>

                <div className="flex flex-col gap-3">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" size={14} className="text-amber-400 mt-0.5 shrink-0" />
                    <span className="text-white/65 text-xs leading-relaxed">ул. Чайная, 12, Москва<br />м. Чистые пруды, 5 мин пешком</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Clock" size={14} className="text-amber-400 shrink-0" />
                    <span className="text-white/65 text-xs">Пн–Вс, 9:00 — 21:00</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" size={14} className="text-amber-400 shrink-0" />
                    <span className="text-white/65 text-xs">+7 800 123-45-67</span>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <p className="text-white/40 text-[10px] uppercase tracking-widest mb-2">Атмосфера</p>
                  <div className="flex flex-wrap gap-1.5">
                    {["Тихо", "Уютно", "Без суеты", "Wi-Fi"].map((tag) => (
                      <span key={tag} className="text-[10px] text-white/50 border border-white/15 rounded-full px-2 py-0.5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
