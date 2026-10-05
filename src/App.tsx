import { useState } from 'react'
import { useI18n } from './i18n'
import { phone, wa, email, maps, facebook, instagram, pitchWa, projects, asset } from './content'

function LangSwitch() {
  const { lang, setLang, t } = useI18n()
  return (
    <div className="flex rounded-full bg-white/90 p-1 text-xs font-bold shadow-sm ring-1 ring-sage-200">
      {(['en', 'ms'] as const).map((l) => (
        <button key={l} type="button" onClick={() => setLang(l)}
          className={`min-h-9 min-w-9 rounded-full px-2.5 ${lang === l ? 'bg-sage-600 text-white' : 'text-ink/60'}`}>
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
      <header className="fixed inset-x-0 top-0 z-40 bg-limestone/95 backdrop-blur-lg">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-2 px-4 py-3 md:px-6">
          <a href="#top" className="font-display text-lg font-semibold tracking-tight text-sage-800 sm:text-xl">Ekara</a>
          <nav className="hidden gap-5 text-sm font-medium text-ink/70 md:flex">
            {links.map((id) => (
              <a key={id} href={`#${id}`} className="hover:text-sage-700">{t(`nav_${id}`)}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <LangSwitch />
            <a href={`https://wa.me/${wa}`} className="hidden min-h-11 items-center rounded-full bg-sage-600 px-4 py-2 text-sm font-semibold text-white sm:inline-flex hover:bg-sage-700">{t('nav_cta')}</a>
            <button type="button" className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl ring-1 ring-sage-200 md:hidden"
              aria-label={open ? t('menu_close') : t('menu_open')} onClick={() => setOpen((v) => !v)}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-sage-100 px-4 py-3 md:hidden">
            {links.map((id) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="block min-h-11 rounded-lg px-3 py-3 font-medium hover:bg-sage-50">{t(`nav_${id}`)}</a>
            ))}
          </div>
        )}
      </header>

      <section id="top" className="mx-auto max-w-5xl px-4 pt-24 pb-12 sm:pt-28 sm:pb-16 md:px-6 md:pt-32 md:pb-24">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10">
          <div>
            <span className="inline-flex rounded-full bg-sage-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-sage-700 sm:text-xs">{t('hero_kicker')}</span>
            <h1 className="mt-4 font-display text-[1.75rem] font-semibold leading-tight text-ink sm:mt-5 sm:text-4xl md:text-5xl">{t('hero_title')}</h1>
            <p className="mt-4 text-base text-ink/70 leading-relaxed sm:mt-5 sm:text-lg">{t('hero_sub')}</p>
            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
              <a href={`https://wa.me/${wa}`} className="inline-flex min-h-12 items-center justify-center rounded-soft bg-sage-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sage-600/25 hover:bg-sage-700">{t('hero_cta')}</a>
              <a href="#work" className="inline-flex min-h-12 items-center justify-center rounded-soft bg-white px-6 py-3 text-sm font-semibold text-ink ring-1 ring-sage-200 hover:ring-sage-400">{t('hero_cta2')}</a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-sm md:max-w-none">
            <div className="absolute -inset-3 rounded-soft bg-sage-200/50 blur-2xl" />
            <img src={asset('images/hero.jpg')} alt="" className="relative aspect-[4/5] w-full rounded-soft object-cover shadow-xl ring-1 ring-sage-200" width={800} height={1000} />
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-5xl px-4 py-12 sm:py-16 md:px-6">
        <div className="rounded-soft bg-white p-6 shadow-sm ring-1 ring-sage-100 sm:p-8 md:p-12">
          <p className="text-sm font-semibold text-sage-600">{t('about_label')}</p>
          <h2 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">{t('about_title')}</h2>
          <p className="mt-4 max-w-3xl text-ink/75 leading-relaxed">{t('about_body')}</p>
          <p className="mt-6 inline-flex rounded-full bg-sage-50 px-4 py-2 text-sm font-semibold text-sage-700">{t('about_rating')}</p>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-5xl px-4 py-12 sm:py-16 md:px-6">
        <p className="text-sm font-semibold text-sage-600">{t('services_label')}</p>
        <h2 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">{t('services_title')}</h2>
        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2">
          {[1,2,3,4].map((n) => (
            <article key={n} className="rounded-soft bg-sage-50/80 p-5 ring-1 ring-sage-100 sm:p-6">
              <div className="mb-3 h-10 w-10 rounded-full bg-sage-200/80" />
              <h3 className="font-display text-lg font-semibold">{t(`svc${n}_t`)}</h3>
              <p className="mt-2 text-sm text-ink/65 leading-relaxed">{t(`svc${n}_b`)}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="mx-auto max-w-5xl px-4 py-12 sm:py-16 md:px-6">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold text-sage-600">{t('work_label')}</p>
            <h2 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">{t('work_title')}</h2>
          </div>
          <p className="max-w-sm text-sm text-ink/50">{t('work_note')}</p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <figure key={p.titleEN} className="overflow-hidden rounded-soft bg-white shadow-sm ring-1 ring-sage-100">
              <img src={asset(p.img)} alt="" className="aspect-[4/3] w-full object-cover" loading="lazy" width={800} height={600} />
              <figcaption className="p-4">
                <p className="font-semibold">{lang === 'ms' ? p.titleMS : p.titleEN}</p>
                <p className="text-sm text-ink/50">{lang === 'ms' ? p.typeMS : p.typeEN}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="process" className="bg-sage-800 text-sage-50">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:py-16 md:px-6 md:py-20">
          <p className="text-sm font-semibold text-sage-300">{t('process_label')}</p>
          <h2 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">{t('process_title')}</h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
            {[1,2,3,4].map((n) => (
              <div key={n} className="rounded-soft bg-white/10 p-5 backdrop-blur">
                <span className="font-display text-3xl font-bold text-sage-300">{n}</span>
                <h3 className="mt-2 font-semibold">{t(`step${n}_t`)}</h3>
                <p className="mt-1 text-sm text-sage-100/75">{t(`step${n}_b`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 sm:py-16 md:px-6">
        <p className="text-sm font-semibold text-sage-600">{t('testimonials_label')}</p>
        <h2 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">{t('testimonials_title')}</h2>
        <div className="mt-6 flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mt-8">
          {[1,2,3,4].map((n) => (
            <blockquote key={n} className="w-[85vw] max-w-sm flex-shrink-0 snap-start rounded-soft bg-white p-5 shadow-sm ring-1 ring-sage-100 sm:w-[280px] sm:p-6">
              <p className="text-ink/80 leading-relaxed">“{t(`t${n}`)}”</p>
              <p className="mt-4 text-xs font-semibold text-sage-600">Google · 5.0 ★</p>
            </blockquote>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-5xl px-4 py-12 sm:py-16 md:px-6">
        <div className="rounded-soft bg-white p-6 shadow-sm ring-1 ring-sage-100 sm:p-8 md:p-12">
          <p className="text-sm font-semibold text-sage-600">{t('contact_label')}</p>
          <h2 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">{t('contact_title')}</h2>
          <p className="mt-4 text-sm text-ink/65 sm:text-base">{t('contact_hours')}</p>
          <p className="mt-2 max-w-lg text-ink/75">{t('contact_address')}</p>
          <div className="mt-6 flex flex-wrap gap-2 sm:mt-8">
            <a href={`tel:${phone}`} className="inline-flex min-h-11 items-center rounded-full bg-sage-600 px-4 py-2 text-sm font-semibold text-white">{t('contact_phone')}</a>
            <a href={`https://wa.me/${wa}`} className="inline-flex min-h-11 items-center rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white">{t('contact_wa')}</a>
            <a href={`mailto:${email}`} className="inline-flex min-h-11 items-center rounded-full bg-sage-50 px-4 py-2 text-sm font-semibold text-sage-800 ring-1 ring-sage-200">{t('contact_email')}</a>
            <a href={maps} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center rounded-full bg-sage-50 px-4 py-2 text-sm font-semibold text-sage-800 ring-1 ring-sage-200">{t('contact_map')}</a>
            <a href={facebook} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center rounded-full bg-sage-50 px-4 py-2 text-sm font-semibold text-sage-800 ring-1 ring-sage-200">{t('contact_fb')}</a>
            <a href={instagram} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center rounded-full bg-sage-50 px-4 py-2 text-sm font-semibold text-sage-800 ring-1 ring-sage-200">{t('contact_ig')}</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-sage-200 bg-sage-50 px-4 py-10 text-center text-sm text-ink/60 md:px-6">
        <p className="mx-auto max-w-xl">{t('footer_pitch')}</p>
        <a href={pitchWa} className="mt-3 inline-flex min-h-11 items-center font-semibold text-sage-700 hover:underline">{t('footer_pitch_cta')} →</a>
        <p className="mt-6 text-xs text-ink/35">{t('footer_copy')}</p>
      </footer>

      <a href={`https://wa.me/${wa}`}
        className="fixed bottom-4 right-4 z-50 flex min-h-12 items-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-sm font-bold text-white shadow-xl shadow-emerald-600/30 hover:bg-emerald-600 sm:bottom-6 sm:right-6 sm:px-5">
        <span aria-hidden>💬</span> {t('sticky_wa')}
      </a>
    </div>
  )
}
