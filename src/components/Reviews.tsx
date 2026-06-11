const reviews = [
  {
    name: "Анна К.",
    location: "Москва",
    tea: "Да Хун Пао",
    rating: 5,
    text: "Покупаю уже третий раз. Аромат невероятный — дымный, тёплый, обволакивающий. Завариваю по вечерам, помогает расслабиться после работы.",
    avatar: "А",
  },
  {
    name: "Михаил Р.",
    location: "Санкт-Петербург",
    tea: "Гёкуро",
    rating: 5,
    text: "Впервые попробовал теневой зелёный чай — это другой мир. Сладкий умами-вкус, никакой горечи. Буду заказывать снова.",
    avatar: "М",
  },
  {
    name: "Елена В.",
    location: "Казань",
    tea: "Дарджилинг First Flush",
    rating: 5,
    text: "Очень свежий чай, чувствуется что прямо с плантации. Мускатное послевкусие долго держится. Отличный подарок для любителей чая.",
    avatar: "Е",
  },
  {
    name: "Дмитрий С.",
    location: "Екатеринбург",
    tea: "Белый пион",
    rating: 4,
    text: "Нежный и деликатный. Хорошо идёт утром — не перегружает, но бодрит. Упаковка аккуратная, доставили быстро.",
    avatar: "Д",
  },
  {
    name: "Ольга Т.",
    location: "Новосибирск",
    tea: "Да Хун Пао",
    rating: 5,
    text: "Подруга посоветовала этот магазин — не пожалела. Качество на уровне дорогих чайных лавок, а цена приятная. Теперь только здесь.",
    avatar: "О",
  },
  {
    name: "Игорь Л.",
    location: "Краснодар",
    tea: "Гёкуро",
    rating: 5,
    text: "Знаток японских чаёв — этот Гёкуро очень достойный. Видно, что хранили правильно. Рекомендую всем, кто хочет попробовать настоящий японский чай.",
    avatar: "И",
  },
]

export default function Reviews() {
  return (
    <section className="relative z-20 px-8 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-white/50 text-xs uppercase tracking-widest mb-2">Отзывы</p>
          <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">
            Что говорят <span className="font-medium italic">покупатели</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 flex flex-col gap-4 hover:border-white/20 transition-all duration-300"
            >
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white text-sm font-medium shrink-0">
                  {review.avatar}
                </div>
                <div>
                  <p className="text-white text-sm font-medium leading-none mb-0.5">{review.name}</p>
                  <p className="text-white/40 text-xs">{review.location}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <span key={s} className={s < review.rating ? "text-amber-400" : "text-white/15"}>
                      ★
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-white/65 text-xs leading-relaxed flex-1">"{review.text}"</p>

              <p className="text-white/30 text-[10px] uppercase tracking-widest border-t border-white/10 pt-3">
                {review.tea}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
