import { useState } from 'react'
import { useI18n } from './i18n'
import { Reveal } from './Reveal'
import { phone, wa, email, maps, facebook, instagram, pitchWa, projects, asset } from './content'

function LangSwitch() {
  const { lang, setLang, t } = useI18n()
  return (
    <div className="flex rounded-full bg-white/80 p-1 text-xs font-bold shadow-sm ring-1 ring-sage-200/80 backdrop-blur">
      {(['en', 'ms'] as const).map((l) => (
        <button key={l} type="button" onClick={() => setLang(l)}
          className={`min-h-9 min-w-9 rounded-full px-2.5 transition-all duration-300 ${lang === l ? 'bg-sage-600 text-white shadow' : 'text-ink/50'}`}>
          {t(l === 'en' ? 'lang_en' : 'lang_ms')}
        </button>
      ))}
    </div>
  )
}

export default function App() {
  const { t, lang } = useI18n()
  const [open, setOpen] = useState(false)
  const links = (['about','services','work','process','contact'] as const)

  return (
    <div className="min-h-screen overflow-x-hidden pb-24">
      <header className="glass-header fixed inset-x-0 top-0 z-40 border-b border-sage-200/40">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-2 px-4 py-3 md:px-6">
          <a href="#top" className="font-display text-lg font-semibold tracking-tight text-sage-800 sm:text-xl">
            <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-sage-500" aria-hidden />
            Ekara
          </a>
          <nav className="hidden gap-6 text-sm font-medium text-ink/60 md:flex">
            {links.map((id) => (
              <a key={id} href={`#${id}`} className="transition hover:text-sage-700">{t(`nav_${id}`)}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <LangSwitch />
            <a href={`https://wa.me/${wa}`} className="hidden min-h-11 items-center rounded-full bg-sage-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-sage-600/20 transition hover:bg-sage-700 sm:inline-flex">{t('nav_cta')}</a>
            <button type="button" className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-2xl bg-white/70 ring-1 ring-sage-200 md:hidden"
              aria-label={open ? t('menu_close') : t('menu_open')} onClick={() => setOpen((v) => !v)}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-sage-100/80 bg-limestone/95 px-4 py-3 backdrop-blur md:hidden">
            {links.map((id) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="block min-h-11 rounded-xl px-3 py-3 font-medium transition hover:bg-sage-50">{t(`nav_${id}`)}</a>
            ))}
          </div>
        )}
      </header>

      <section id="top" className="relative mx-auto max-w-5xl px-4 pt-24 pb-12 sm:pt-28 sm:pb-16 md:px-6 md:pt-32 md:pb-24">
        <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-sage-200/40 blur-3xl" aria-hidden />
        <div className="absolute -right-16 bottom-10 h-48 w-48 rounded-full bg-sage-300/30 blur-3xl" aria-hidden />
        <div className="relative grid items-center gap-10 md:grid-cols-2 md:gap-12">
          <Reveal>
            <span className="inline-flex rounded-full bg-sage-100/90 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-sage-700 ring-1 ring-sage-200/60">{t('hero_kicker')}</span>
            <h1 className="mt-5 font-display text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.02em] text-ink sm:text-4xl md:text-[3.15rem]">{t('hero_title')}</h1>
            <p className="mt-5 text-base leading-relaxed text-ink/65 sm:text-lg">{t('hero_sub')}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={`https://wa.me/${wa}`} className="inline-flex min-h-12 items-center justify-center rounded-soft bg-sage-600 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-sage-600/25 transition hover:-translate-y-0.5 hover:bg-sage-700">{t('hero_cta')}</a>
              <a href="#work" className="inline-flex min-h-12 items-center justify-center rounded-soft bg-white/90 px-7 py-3.5 text-sm font-semibold text-ink ring-1 ring-sage-200 transition hover:ring-sage-400">{t('hero_cta2')}</a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative mx-auto w-full max-w-sm md:max-w-none">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-sage-200/60 to-sage-100/20 blur-2xl" />
              <div className="img-zoom relative aspect-[4/5] overflow-hidden rounded-soft shadow-2xl shadow-sage-900/10 ring-1 ring-sage-200/80">
                <img src={asset('images/hero.jpg')} alt="" className="h-full w-full object-cover" width={800} height={1000} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-5xl px-4 py-12 sm:py-16 md:px-6">
        <Reveal>
          <div className="rounded-soft bg-white/80 p-7 shadow-lg shadow-sage-900/5 ring-1 ring-sage-100 backdrop-blur sm:p-10 md:p-12">
            <p className="text-sm font-semibold text-sage-600">{t('about_label')}</p>
            <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">{t('about_title')}</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-ink/70">{t('about_body')}</p>
            <p className="mt-6 inline-flex rounded-full bg-sage-50 px-4 py-2 text-sm font-semibold text-sage-700 ring-1 ring-sage-100">{t('about_rating')}</p>
          </div>
        </Reveal>
      </section>

      <section id="services" className="mx-auto max-w-5xl px-4 py-12 sm:py-16 md:px-6">
        <Reveal>
          <p className="text-sm font-semibold text-sage-600">{t('services_label')}</p>
          <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">{t('services_title')}</h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {[1,2,3,4].map((n) => (
            <Reveal key={n} delay={n * 60}>
              <article className="h-full rounded-soft bg-gradient-to-br from-sage-50 to-white p-6 ring-1 ring-sage-100 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-sage-900/5">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-sage-200/70 text-sm font-bold text-sage-800">0{n}</div>
                <h3 className="font-display text-lg font-semibold">{t(`svc${n}_t`)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{t(`svc${n}_b`)}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="work" className="mx-auto max-w-5xl px-4 py-12 sm:py-16 md:px-6">
        <Reveal>
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold text-sage-600">{t('work_label')}</p>
              <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">{t('work_title')}</h2>
            </div>
            <p className="max-w-sm text-sm text-ink/45">{t('work_note')}</p>
          </div>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.titleEN} delay={(i % 3) * 70}>
              <figure className="img-zoom group overflow-hidden rounded-soft bg-white shadow-md shadow-sage-900/5 ring-1 ring-sage-100">
                <div className="relative">
                  <img src={asset(p.img)} alt="" className="aspect-[4/5] w-full object-cover sm:aspect-[4/3]" loading="lazy" width={800} height={600} />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/70 via-transparent to-transparent p-4 opacity-100 transition sm:opacity-0 sm:group-hover:opacity-100">
                    <div>
                      <p className="font-semibold text-white">{lang === 'ms' ? p.titleMS : p.titleEN}</p>
                      <p className="text-sm text-white/70">{lang === 'ms' ? p.typeMS : p.typeEN}</p>
                    </div>
                  </div>
                </div>
                <figcaption className="p-4 sm:hidden">
                  <p className="font-semibold">{lang === 'ms' ? p.titleMS : p.titleEN}</p>
                  <p className="text-sm text-ink/50">{lang === 'ms' ? p.typeMS : p.typeEN}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="process" className="relative overflow-hidden bg-sage-800 text-sage-50">
        <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-sage-600/30 blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-5xl px-4 py-14 sm:py-16 md:px-6 md:py-20">
          <Reveal>
            <p className="text-sm font-semibold text-sage-300">{t('process_label')}</p>
            <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">{t('process_title')}</h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[1,2,3,4].map((n) => (
              <Reveal key={n} delay={n * 50}>
                <div className="h-full rounded-soft bg-white/10 p-5 ring-1 ring-white/10 backdrop-blur">
                  <span className="font-display text-3xl font-bold text-sage-300">{n}</span>
                  <h3 className="mt-2 font-semibold">{t(`step${n}_t`)}</h3>
                  <p className="mt-1 text-sm text-sage-100/70">{t(`step${n}_b`)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 sm:py-16 md:px-6">
        <Reveal>
          <p className="text-sm font-semibold text-sage-600">{t('testimonials_label')}</p>
          <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">{t('testimonials_title')}</h2>
        </Reveal>
        <div className="mt-8 flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {[1,2,3,4].map((n) => (
            <blockquote key={n} className="w-[85vw] max-w-sm flex-shrink-0 snap-start rounded-soft bg-white/90 p-6 shadow-md shadow-sage-900/5 ring-1 ring-sage-100 sm:w-[300px]">
              <p className="leading-relaxed text-ink/75">“{t(`t${n}`)}”</p>
              <p className="mt-4 text-xs font-bold tracking-wide text-sage-600">Google · 5.0 ★</p>
            </blockquote>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-5xl px-4 py-12 sm:py-16 md:px-6">
        <Reveal>
          <div className="rounded-soft bg-white/90 p-7 shadow-lg shadow-sage-900/5 ring-1 ring-sage-100 sm:p-10 md:p-12">
            <p className="text-sm font-semibold text-sage-600">{t('contact_label')}</p>
            <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">{t('contact_title')}</h2>
            <p className="mt-4 text-sm text-ink/60 sm:text-base">{t('contact_hours')}</p>
            <p className="mt-2 max-w-lg text-ink/70">{t('contact_address')}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              <a href={`tel:${phone}`} className="inline-flex min-h-11 items-center rounded-full bg-sage-600 px-4 py-2 text-sm font-semibold text-white">{t('contact_phone')}</a>
              <a href={`https://wa.me/${wa}`} className="inline-flex min-h-11 items-center rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white">{t('contact_wa')}</a>
              <a href={`mailto:${email}`} className="inline-flex min-h-11 items-center rounded-full bg-sage-50 px-4 py-2 text-sm font-semibold text-sage-800 ring-1 ring-sage-200">{t('contact_email')}</a>
              <a href={maps} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center rounded-full bg-sage-50 px-4 py-2 text-sm font-semibold text-sage-800 ring-1 ring-sage-200">{t('contact_map')}</a>
              <a href={facebook} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center rounded-full bg-sage-50 px-4 py-2 text-sm font-semibold text-sage-800 ring-1 ring-sage-200">{t('contact_fb')}</a>
              <a href={instagram} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center rounded-full bg-sage-50 px-4 py-2 text-sm font-semibold text-sage-800 ring-1 ring-sage-200">{t('contact_ig')}</a>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-sage-200 bg-sage-50/80 px-4 py-10 text-center text-sm text-ink/55 md:px-6">
        <p className="mx-auto max-w-xl">{t('footer_pitch')}</p>
        <a href={pitchWa} className="mt-3 inline-flex min-h-11 items-center font-semibold text-sage-700 hover:underline">{t('footer_pitch_cta')} →</a>
        <p className="mt-6 text-xs text-ink/30">{t('footer_copy')}</p>
      </footer>

      <a href={`https://wa.me/${wa}`}
        className="fixed bottom-4 right-4 z-50 flex min-h-12 items-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-sm font-bold text-white shadow-xl shadow-emerald-600/30 transition hover:scale-105 hover:bg-emerald-600 sm:bottom-6 sm:right-6 sm:px-5">
        <span aria-hidden>💬</span> {t('sticky_wa')}
      </a>
    </div>
  )
}
