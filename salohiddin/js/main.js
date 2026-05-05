const body = document.querySelector("body");
const dark = document.querySelector(".dark");
const logo_img = document.querySelector(".logo_img");

dark.addEventListener("click", () => {
  body.classList.toggle("active");
});

const translations = {
  uz: {
    titlee: "Biznes konsalting",
    desc: "Biz sizning biznesingizni rivojlantiramiz.Bu 2022-yilda suratga olingan mashhur romantik komediya bo'lib, o'z kompaniyasi direktorining (CEO) ko'r-ko'rona uchrashuviga dugonasi o'rniga borgan qiz va ularning o'rtasidagi kutilmagan munosabatlar haqida hikoya qiladi.",
    dark: "Tungi rejim",
    logo_word: "Biznes konsalting",
    hero_learn: "Ko'proq o'rganish",
    hero_h1: "Biz sizning biznesingizni yangi darajaga olib chiqamiz",
    intro_h3: "Kompaniya",
    intro_h5: "shiori bu yerda",
    two_p1: "Biznes konsalting",
    two_h1: "Sizning biznesingiz uchun qanday xizmatlarni taklif qilamiz",
    two_p2:
      "Biznesni rivojlantirish, marketing strategiyasi, moliyaviy maslahatlar va boshqalar.",
    two_h2: "Marketing strategiyasi",
    two_p3:
      "Raqobatbardosh tahlil, maqsadli auditoriyani aniqlash, brend pozitsiyasi va boshqalar.",

    three_h11:
      "Ko'proq bilishni xohlaysizmi? Biznes maslahatchimiz bilan bog'laning",
  },
  en: {
    titlee: "Business Consulting",
    desc: "Subject: Collaboration Opportunity: [Sizning kompaniyangiz] x [Hamkor kompaniya]Dear [Ism],I’m reaching out from Salohiddin Co. because I see a great potential for a partnership between our brands. Our [mahsulot/xizmat] complements your work in [soha] perfectly. I believe a collaboration would be mutually beneficial.Are you available for a brief chat next week to explore this?Best regards,",
    dark: "Darkmode",
    logo_word: "Business Consulting",
    hero_learn: "Learn more",
    hero_h1: "We bring your business to new heights",
    intro_h3: "company",
    intro_h5: "slogan here",
    two_p1: "Business Consulting",
    two_h1: "What services do we offer for your business",
    two_p2:
      "Business development, marketing strategy, financial advice and more.",
    two_h2: "Marketing Strategy",
    two_p3:
      "Competitive analysis, target audience identification, brand positioning and more.",
    three_h11: "Want to learn more? Contact our business consultant",
  },
  ru: {
    titlee: "Бизнес консалтинг",
    desc: "Я представляю компанию [Название компании]. Мы занимаемся [кратко о деятельности].Мы изучили ваш профиль и видим большой потенциал для совместной работы в области [сфера деятельности]. Наше решение поможет вам [указать выгоду, например: снизить расходы на 15%].",
    dark: "Темный режим",
    logo_word: "Бизнес-консалтинг",
    hero_learn: "изучит много",
    hero_h1: "Вы достигните до високих уровена бизнеса",
    intro_h3: "кампания",
    intro_h5: "слоган здесь",
    two_p1: "Бизнес консалтинг",
    two_h1: "Какие услуги мы предлагаем для вашего бизнеса",
    two_p2:
      "Развитие бизнеса, маркетинговая стратегия, финансовые консультации и другие.",
    two_h2: "Маркетинговая стратегия",
    two_p3:
      "Конкурентный анализ, определение целевой аудитории, позиционирование бренда и другие.",

    three_h11: "Хотите узнать больше? Свяжитесь с нашим бизнес-консультантом",
  },
};

const buttons = document.querySelectorAll(".lang");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const lang = btn.dataset.lang;

    document.querySelector(".titlee").textContent = translations[lang].titlee;

    document.querySelector(".desc").textContent = translations[lang].desc;

    document.querySelector(".dark").textContent = translations[lang].dark;

    document.querySelector(".logo_word").textContent =
      translations[lang].logo_word;

    document.querySelector(".hero_learn").textContent =
      translations[lang].hero_learn;

    document.querySelector(".hero_h1").textContent = translations[lang].hero_h1;

    document.querySelectorAll(".intro_h3").forEach((el) => {
      el.textContent = translations[lang].intro_h3;
    });

    document.querySelectorAll(".intro_h5").forEach((el) => {
      el.textContent = translations[lang].intro_h5;
    });

    document.querySelector(".two_p1").textContent = translations[lang].two_p1;

    document.querySelector(".two_h1").textContent = translations[lang].two_h1;

    document.querySelector(".two_p2").textContent = translations[lang].two_p2;

    document.querySelectorAll(".two_h2").forEach((el) => {
      el.textContent = translations[lang].two_h2;
    });

    document.querySelectorAll(".two_p3").forEach((el) => {
      el.textContent = translations[lang].two_p3;
    });

    document.querySelector(".three_h11").textContent =
      translations[lang].three_h11;

    document.body.className = lang; // optional (scss uchun)
  });
});
