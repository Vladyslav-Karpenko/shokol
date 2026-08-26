import './style.css'

document.querySelector('#app').innerHTML = `
  <!-- =========================
       HEADER
  ========================== -->

  <header class="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-neutral-950/80 backdrop-blur-xl">

    <div class="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

      <!-- LOGO -->

      <a href="#" class="group flex items-center gap-3">

        <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 font-black text-xl text-black transition-transform duration-300 group-hover:rotate-6">
          S
        </div>

        <span class="text-xl font-black tracking-[0.2em]">
          SHOKOL
        </span>

      </a>


      <!-- DESKTOP NAVIGATION -->

      <nav class="hidden items-center gap-8 md:flex">

        <a
          href="#sluzby"
          class="text-sm font-medium text-white/60 transition-colors hover:text-white"
        >
          Služby
        </a>

        <a
          href="#materialy"
          class="text-sm font-medium text-white/60 transition-colors hover:text-white"
        >
          Materiály
        </a>

        <a
          href="#galerie"
          class="text-sm font-medium text-white/60 transition-colors hover:text-white"
        >
          Galerie
        </a>

        <a
          href="#proces"
          class="text-sm font-medium text-white/60 transition-colors hover:text-white"
        >
          Jak to funguje
        </a>
<a
  href="#o-nas"
  class="text-sm font-medium text-white/60 transition-colors hover:text-white"
>
  O nás
</a>
        <a
          href="#kontakt"
          class="text-sm font-medium text-white/60 transition-colors hover:text-white"
        >
          Kontakt
        </a>

      </nav>


      <!-- DESKTOP CTA -->

      <a
        href="#kontakt"
        class="hidden rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-black transition-all duration-300 hover:bg-orange-400 hover:shadow-[0_0_30px_rgba(249,115,22,0.35)] md:block"
      >
        Objednat výrobu
      </a>


      <!-- MOBILE MENU BUTTON -->

      <button
        id="menuButton"
        class="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white md:hidden"
        aria-label="Otevřít menu"
        aria-expanded="false"
      >

        <svg
          id="menuIcon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.8"
          stroke="currentColor"
          class="h-6 w-6"
        >

          <path
            class="menu-line menu-line-1"
            stroke-linecap="round"
            d="M4 6h16"
          />

          <path
            class="menu-line menu-line-2"
            stroke-linecap="round"
            d="M4 12h16"
          />

          <path
            class="menu-line menu-line-3"
            stroke-linecap="round"
            d="M4 18h16"
          />

        </svg>

      </button>

    </div>


    <!-- MOBILE MENU -->

    <div
      id="mobileMenu"
      class="mobile-menu border-t border-white/10 bg-neutral-950/95 px-6 md:hidden"
    >

      <nav class="flex flex-col gap-2 py-6">

        <a
          href="#sluzby"
          class="mobile-link mobile-menu-item rounded-xl px-4 py-3 text-lg font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
        >
          Služby
        </a>

        <a
          href="#materialy"
          class="mobile-link mobile-menu-item rounded-xl px-4 py-3 text-lg font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
        >
          Materiály
        </a>

        <a
          href="#galerie"
          class="mobile-link mobile-menu-item rounded-xl px-4 py-3 text-lg font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
        >
          Galerie
        </a>

        <a
          href="#proces"
          class="mobile-link mobile-menu-item rounded-xl px-4 py-3 text-lg font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
        >
          Jak to funguje
        </a>
<a
  href="#o-nas"
  class="mobile-link mobile-menu-item rounded-xl px-4 py-3 text-lg font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
>
  O nás
</a>
        <a
          href="#kontakt"
          class="mobile-link mobile-menu-item rounded-xl px-4 py-3 text-lg font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
        >
          Kontakt
        </a>

        <a
          href="#kontakt"
          class="mobile-menu-item mt-3 rounded-full bg-orange-500 px-6 py-4 text-center font-bold text-black transition-all duration-300 hover:bg-orange-400 hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]"
        >
          Objednat výrobu →
        </a>

      </nav>

    </div>

  </header>


  <!-- =========================
       MAIN
  ========================== -->

  <main class="pt-20">


    <!-- =========================
         HERO
    ========================== -->

    <section class="relative min-h-[calc(100vh-5rem)] overflow-hidden">

      <div
        class="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl"
      ></div>

      <div
        class="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-orange-500/5 blur-3xl"
      ></div>


      <div
        class="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-10 px-5 pb-14 pt-10 sm:gap-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:px-8 lg:py-20"
      >


        <!-- HERO LEFT -->

        <div class="relative z-10">

          <div
            class="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60"
          >

            <span class="h-2 w-2 rounded-full bg-orange-500"></span>

            3D tisk na zakázku

          </div>


          <h1
            class="max-w-3xl text-[3rem] font-black leading-[0.9] tracking-[-0.04em] sm:text-6xl lg:text-8xl"
          >
            Tvoříme
            <span class="text-orange-500">
              ve 3D.
            </span>
          </h1>


          <p
  class="mt-6 max-w-xl text-base leading-relaxed text-white/50 sm:mt-8 sm:text-xl"
>
  3D tisk na zakázku v Praze pro firmy i jednotlivce.
  Od jednoduchých přívěsků až po vlastní výrobky,
  prototypy a náhradní díly.
  Váš nápad proměníme ve skutečný produkt.
</p>


          <div
            class="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4"
          >

            <a
              href="#kontakt"
              class="inline-flex items-center justify-center rounded-full bg-orange-500 px-7 py-4 font-bold text-black transition-all duration-300 hover:bg-orange-400 hover:shadow-[0_0_40px_rgba(249,115,22,0.3)]"
            >
              Objednat výrobu
            </a>

            <a
              href="#galerie"
              class="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 font-bold text-white transition-all duration-300 hover:border-white/30 hover:bg-white/5"
            >
              Prohlédnout galerii
            </a>

          </div>


          <!-- STATS -->

          <div
            class="mt-10 grid grid-cols-3 gap-2 border-t border-white/10 pt-6 sm:mt-14 sm:flex sm:flex-wrap sm:gap-x-10 sm:gap-y-6 sm:pt-8"
          >

            <div class="text-center">

              <div class="text-xl font-black sm:text-2xl">
                100+
              </div>

              <div class="mt-1 text-xs text-white/40 sm:text-sm">
                realizací
              </div>

            </div>


            <div class="text-center">

              <div class="text-xl font-black sm:text-2xl">
                24–48 h
              </div>

              <div class="mt-1 text-xs text-white/40 sm:text-sm">
                rychlá výroba
              </div>

            </div>


            <div class="text-center">

              <div class="text-xl font-black sm:text-2xl">
                ∞
              </div>

              <div class="mt-1 text-xs text-white/40 sm:text-sm">
                možností
              </div>

            </div>

          </div>

        </div>


        <!-- HERO RIGHT -->

        <div
          class="relative flex items-center justify-center pt-4 sm:pt-0 lg:justify-end"
        >

          <div
            class="relative aspect-square w-full max-w-xl overflow-hidden rounded-4xl border border-white/10 bg-neutral-900 shadow-2xl"
          >

            <div
              class="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(249,115,22,0.18),transparent_45%)]"
            ></div>


            <div
              id="heroProduct"
              class="absolute inset-0 flex items-center justify-center"
            >

              <div
                class="relative h-64 w-64 rounded-[2.5rem] border border-orange-500/20 bg-linear-to-br from-neutral-700 via-neutral-800 to-neutral-950 shadow-[0_35px_100px_rgba(0,0,0,0.65)] transition-transform duration-300 sm:h-96 sm:w-96"
              >

                <div
                  class="absolute inset-6 rounded-[2.5rem] border border-white/5"
                ></div>

                <div
                  class="absolute inset-10 rounded-4xl border border-white/5"
                ></div>

                <div
                  class="absolute inset-14 rounded-3xl border border-orange-500/10"
                ></div>


                <div
                  class="absolute inset-0 flex items-center justify-center"
                >

                  <div
                    class="relative h-40 w-40 rounded-4xl border-2 border-orange-500/50 bg-neutral-900 shadow-[0_20px_60px_rgba(249,115,22,0.15)] sm:h-52 sm:w-52"
                  >

                    <div
                      class="absolute inset-4 rounded-3xl border border-orange-500/20"
                    ></div>

                    <div
                      class="absolute inset-8 rounded-xl border border-white/5"
                    ></div>

                    <span
                      class="absolute inset-0 flex items-center justify-center text-7xl font-black tracking-tighter text-white sm:text-8xl"
                    >
                      S
                    </span>

                  </div>

                </div>


                <div
                  class="absolute -bottom-6 -right-6 rounded-2xl border border-white/10 bg-neutral-950/95 px-5 py-4 shadow-2xl backdrop-blur-xl"
                >

                  <div
                    class="text-xs font-bold uppercase tracking-[0.2em] text-orange-500"
                  >
                    SHOKOL
                  </div>

                  <div class="mt-1 text-xs text-white/40">
                    3D PRINT STUDIO
                  </div>

                </div>


                <div
                  class="absolute -left-5 top-10 rounded-xl border border-white/10 bg-neutral-950/95 px-4 py-3 shadow-xl backdrop-blur-xl"
                >

                  <div class="text-xs text-white/30">
                    MATERIAL
                  </div>

                  <div class="mt-1 text-sm font-bold">
                    PLA / PETG
                  </div>

                </div>

              </div>

            </div>


            <div
              class="absolute inset-0 opacity-[0.04]"
              style="
                background-image:
                  linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px);
                background-size: 40px 40px;
              "
            ></div>

          </div>

        </div>

      </div>

    </section>


    <!-- =========================
         SERVICES
    ========================== -->

    <section
      id="sluzby"
      class="relative overflow-hidden border-t border-white/10 bg-neutral-950 py-24 sm:py-32"
    >

      <div class="mx-auto max-w-7xl px-6 lg:px-8">


        <div class="mb-14 max-w-2xl sm:mb-20">

          <div
            class="mb-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500"
          >

            <span class="h-px w-8 bg-orange-500"></span>

            Co vyrábíme

          </div>


          <h2
            class="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl"
          >
            Od nápadu
            <span class="text-white/40">
              k hotovému výrobku.
            </span>
          </h2>


          <p class="mt-6 text-lg leading-relaxed text-white/50">
            Každý výrobek přizpůsobíme vašemu zadání.
            Jednoduchý přívěsek, originální dárek nebo
            funkční technický díl.
          </p>

        </div>


        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">


          <!-- CARD 1 -->

          <article
            class="group relative min-h-95 overflow-hidden rounded-3xl border border-white/10 bg-neutral-900 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/40"
          >

            <div
              class="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-orange-500/10 blur-3xl transition-all duration-500 group-hover:bg-orange-500/20"
            ></div>

            <div class="relative flex h-full flex-col">

              <div
                class="flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-500/30 bg-orange-500/10 text-orange-500"
              >
                01
              </div>

              <div class="mt-auto">

               

                <h3 class="text-2xl font-black">
                  Přívěsky
                  <br />
                  a jmenovky
                </h3>

                <p class="mt-4 text-sm leading-relaxed text-white/40">
                  Jména, přezdívky, loga nebo vlastní text.
                  Ideální na klíče, batohy nebo jako originální dárek.
                </p>

                <div class="mt-6 text-sm font-bold text-white/60 transition-colors group-hover:text-orange-500">
                  Více
                  <span class="ml-2">→</span>
                </div>

              </div>

            </div>

          </article>


          <!-- CARD 2 -->

          <article
            class="group relative min-h-95 overflow-hidden rounded-3xl border border-white/10 bg-neutral-900 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/40"
          >

            <div
              class="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-orange-500/10 blur-3xl transition-all duration-500 group-hover:bg-orange-500/20"
            ></div>

            <div class="relative flex h-full flex-col">

              <div
                class="flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-500/30 bg-orange-500/10 text-orange-500"
              >
                02
              </div>

              <div class="mt-auto">

             

                <h3 class="text-2xl font-black">
                  Dárky
                  <br />
                  a originály
                </h3>

                <p class="mt-4 text-sm leading-relaxed text-white/40">
                  Originální dekorace, figurky a doplňky
                  vytvořené přesně podle vašich představ.
                </p>

                <div class="mt-6 text-sm font-bold text-white/60 transition-colors group-hover:text-orange-500">
                  Více
                  <span class="ml-2">→</span>
                </div>

              </div>

            </div>

          </article>


          <!-- CARD 3 -->

          <article
            class="group relative min-h-95 overflow-hidden rounded-3xl border border-white/10 bg-neutral-900 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/40"
          >

            <div
              class="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-orange-500/10 blur-3xl transition-all duration-500 group-hover:bg-orange-500/20"
            ></div>

            <div class="relative flex h-full flex-col">

              <div
                class="flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-500/30 bg-orange-500/10 text-orange-500"
              >
                03
              </div>

              <div class="mt-auto">

               

                <h3 class="text-2xl font-black">
                  Náhradní
                  <br />
                  díly
                </h3>

                <p class="mt-4 text-sm leading-relaxed text-white/40">
                  Praktické náhradní díly, kryty, úchyty,
                  adaptéry a další funkční komponenty.
                </p>

                <div class="mt-6 text-sm font-bold text-white/60 transition-colors group-hover:text-orange-500">
                  Více
                  <span class="ml-2">→</span>
                </div>

              </div>

            </div>

          </article>


          <!-- CARD 4 -->

          <article
            class="group relative min-h-95 overflow-hidden rounded-3xl border border-white/10 bg-neutral-900 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/40"
          >

            <div
              class="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-orange-500/10 blur-3xl transition-all duration-500 group-hover:bg-orange-500/20"
            ></div>

            <div class="relative flex h-full flex-col">

              <div
                class="flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-500/30 bg-orange-500/10 text-orange-500"
              >
                04
              </div>

              <div class="mt-auto">

            

                <h3 class="text-2xl font-black">
                  3D tisk
                  <br />
                  na zakázku
                </h3>

                <p class="mt-4 text-sm leading-relaxed text-white/40">
                  Máte vlastní 3D model nebo jen nápad?
                  Pošlete nám zadání a společně ho proměníme ve výrobek.
                </p>

                <div class="mt-6 text-sm font-bold text-white/60 transition-colors group-hover:text-orange-500">
                  Více
                  <span class="ml-2">→</span>
                </div>

              </div>

            </div>

          </article>

        </div>


        <div
          class="mt-6 flex flex-col items-start justify-between gap-6 rounded-3xl border border-white/10 bg-white/3 p-8 sm:flex-row sm:items-center"
        >

          <div>

            <p class="text-lg font-bold">
              Máte vlastní nápad?
            </p>

            <p class="mt-1 text-sm text-white/40">
              Napište nám a společně vymyslíme řešení.
            </p>

          </div>

          <a
            href="#kontakt"
            class="shrink-0 rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-black transition-all hover:bg-orange-400"
          >
            Nezávazně poptat
          </a>

        </div>

      </div>

    </section>


    <!-- =========================
         MATERIALS
    ========================== -->

    <section
      id="materialy"
      class="border-t border-white/10 bg-neutral-950 py-24 sm:py-32"
    >

      <div class="mx-auto max-w-7xl px-6 lg:px-8">

        <div class="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

          <div>

            <div class="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">

              <span class="h-px w-8 bg-orange-500"></span>

              Materiály

            </div>

            <h2 class="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Správný materiál
              <span class="text-white/40">
                pro každý výrobek.
              </span>
            </h2>

          </div>

          <p class="max-w-xl text-lg leading-relaxed text-white/50 lg:justify-self-end">
            Vybereme vhodný materiál podle toho, zda potřebujete
            odolnost, pružnost, přesnost nebo kvalitní vzhled.
          </p>

        </div>


        <div class="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">


          <!-- PLA -->

          <article
            class="group rounded-3xl border border-white/10 bg-neutral-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40"
          >

            <div class="mb-8 flex h-32 items-center justify-center rounded-2xl bg-neutral-950">

              <div
                class="h-20 w-20 rounded-full border-12 border-white/20 shadow-[0_15px_35px_rgba(0,0,0,0.5)]"
              ></div>

            </div>

            <div class="flex items-center justify-between">

              <h3 class="text-xl font-black">
                PLA
              </h3>

              <span class="h-3 w-3 rounded-full bg-white"></span>

            </div>

            <p class="mt-3 text-sm leading-relaxed text-white/40">
              Ekologický a snadno tisknutelný materiál.
              Ideální pro dekorace a běžné výrobky.
            </p>

          </article>


          <!-- PETG -->

          <article
            class="group rounded-3xl border border-white/10 bg-neutral-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40"
          >

            <div class="mb-8 flex h-32 items-center justify-center rounded-2xl bg-neutral-950">

              <div
                class="h-20 w-20 rounded-full border-12 border-slate-400/30 shadow-[0_15px_35px_rgba(0,0,0,0.5)]"
              ></div>

            </div>

            <div class="flex items-center justify-between">

              <h3 class="text-xl font-black">
                PETG
              </h3>

              <span class="h-3 w-3 rounded-full bg-slate-400"></span>

            </div>

            <p class="mt-3 text-sm leading-relaxed text-white/40">
              Pevný a odolný materiál pro funkční
              a namáhané výrobky.
            </p>

          </article>


          <!-- ABS -->

          <article
            class="group rounded-3xl border border-white/10 bg-neutral-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40"
          >

            <div class="mb-8 flex h-32 items-center justify-center rounded-2xl bg-neutral-950">

              <div
                class="h-20 w-20 rounded-full border-12 border-orange-500/30 shadow-[0_15px_35px_rgba(0,0,0,0.5)]"
              ></div>

            </div>

            <div class="flex items-center justify-between">

              <h3 class="text-xl font-black">
                ABS
              </h3>

              <span class="h-3 w-3 rounded-full bg-orange-500"></span>

            </div>

            <p class="mt-3 text-sm leading-relaxed text-white/40">
              Pevný technický materiál vhodný
              pro odolnější součástky.
            </p>

          </article>


          <!-- TPU -->

          <article
            class="group rounded-3xl border border-white/10 bg-neutral-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40"
          >

            <div class="mb-8 flex h-32 items-center justify-center rounded-2xl bg-neutral-950">

              <div
                class="h-20 w-20 rounded-full border-[12px] border-blue-500/30 shadow-[0_15px_35px_rgba(0,0,0,0.5)]"
              ></div>

            </div>

            <div class="flex items-center justify-between">

              <h3 class="text-xl font-black">
                TPU
              </h3>

              <span class="h-3 w-3 rounded-full bg-blue-500"></span>

            </div>

            <p class="mt-3 text-sm leading-relaxed text-white/40">
              Pružný materiál pro kryty,
              ochranné prvky a flexibilní díly.
            </p>

          </article>


          <!-- ASA -->

          <article
            class="group rounded-3xl border border-white/10 bg-neutral-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40"
          >

            <div class="mb-8 flex h-32 items-center justify-center rounded-2xl bg-neutral-950">

              <div
                class="h-20 w-20 rounded-full border-[12px] border-emerald-500/30 shadow-[0_15px_35px_rgba(0,0,0,0.5)]"
              ></div>

            </div>

            <div class="flex items-center justify-between">

              <h3 class="text-xl font-black">
                ASA
              </h3>

              <span class="h-3 w-3 rounded-full bg-emerald-500"></span>

            </div>

            <p class="mt-3 text-sm leading-relaxed text-white/40">
              UV stabilní materiál vhodný
              pro venkovní použití.
            </p>

          </article>

        </div>


        <div
          class="mt-6 flex flex-col gap-8 rounded-3xl border border-white/10 bg-white/[0.03] p-8 lg:flex-row lg:items-center lg:justify-between"
        >

          <div>

            <p class="text-xl font-black">
              Nevíte, který materiál zvolit?
            </p>

            <p class="mt-2 max-w-2xl text-sm leading-relaxed text-white/40">
              Nevadí. Stačí nám popsat, k čemu bude výrobek sloužit,
              a doporučíme vhodný materiál.
            </p>

          </div>

          <a
            href="#kontakt"
            class="inline-flex shrink-0 items-center justify-center rounded-full border border-orange-500/50 px-6 py-3 text-sm font-bold text-orange-500 transition-all hover:bg-orange-500 hover:text-black"
          >
            Poradit s materiálem →
          </a>

        </div>

      </div>

    </section>


    <!-- =========================
         GALLERY
    ========================== -->

    <section
      id="galerie"
      class="border-t border-white/10 bg-neutral-950 py-24 sm:py-32"
    >

      <div class="mx-auto max-w-7xl px-6 lg:px-8">

        <div
          class="flex flex-col justify-between gap-8 sm:flex-row sm:items-end"
        >

          <div>

            <div class="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">

              <span class="h-px w-8 bg-orange-500"></span>

              Naše práce

            </div>

            <h2 class="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Vyrobeno
              <span class="text-white/40">
                pro vás.
              </span>
            </h2>

            <p class="mt-6 max-w-xl text-lg leading-relaxed text-white/50">
              Každý projekt je jiný. Podívejte se na některé
              z našich realizací.
            </p>

          </div>

          <a
            href="#kontakt"
            class="inline-flex shrink-0 items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-white transition-all hover:border-orange-500 hover:text-orange-500"
          >
            Chci vlastní výrobek →
          </a>

        </div>


        <div class="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-12">


          <!-- WORK 1 -->

          <article
            class="group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900 sm:col-span-2 lg:col-span-7 lg:row-span-2"
          >

            <div class="aspect-square overflow-hidden">

              <img
                src="/images/gallery/work-01.jpg"
                alt="3D tištěný výrobek SHOKOL"
                class="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

            </div>

            <div
              class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-7 pt-24"
            >

              <span class="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
                Zakázková výroba
              </span>

              <h3 class="mt-2 text-2xl font-black">
                Výrobek na míru
              </h3>

            </div>

          </article>


          <!-- WORK 2 -->

          <article
            class="group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900 lg:col-span-5"
          >

            <div class="aspect-[4/3] overflow-hidden">

              <img
                src="/images/gallery/work-02.jpg"
                alt="3D tištěný přívěsek"
                class="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

            </div>

            <div
              class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-6 pt-20"
            >

              <span class="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
                Přívěsky
              </span>

              <h3 class="mt-1 text-xl font-black">
                Jmenovka na míru
              </h3>

            </div>

          </article>


          <!-- WORK 3 -->

          <article
            class="group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900 lg:col-span-5"
          >

            <div class="aspect-[4/3] overflow-hidden">

              <img
                src="/images/gallery/work-03.jpg"
                alt="Zakázkový 3D tisk"
                class="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

            </div>

            <div
              class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-6 pt-20"
            >

              <span class="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
                3D tisk
              </span>

              <h3 class="mt-1 text-xl font-black">
                Originální výrobek
              </h3>

            </div>

          </article>


          <!-- WORK 4 -->

          <article
            class="group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900 sm:col-span-2 lg:col-span-4"
          >

            <div class="aspect-square overflow-hidden">

              <img
                src="/images/gallery/work-04.jpg"
                alt="3D tištěný produkt"
                class="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

            </div>

            <div
              class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-6 pt-20"
            >

              <span class="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
                Design
              </span>

              <h3 class="mt-1 text-xl font-black">
                Vlastní model
              </h3>

            </div>

          </article>


          <!-- WORK 5 -->

          <article
            class="group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900 sm:col-span-2 lg:col-span-4"
          >

            <div class="aspect-square overflow-hidden">

              <img
                src="/images/gallery/work-05.jpg"
                alt="3D tištěný doplněk"
                class="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

            </div>

            <div
              class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-6 pt-20"
            >

              <span class="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
                Doplňky
              </span>

              <h3 class="mt-1 text-xl font-black">
                Detail na míru
              </h3>

            </div>

          </article>


          <!-- WORK 6 -->

          <article
            class="group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900 sm:col-span-2 lg:col-span-4"
          >

            <div class="aspect-square overflow-hidden">

              <img
                src="/images/gallery/work-06.jpg"
                alt="3D tištěná součástka"
                class="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

            </div>

            <div
              class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-6 pt-20"
            >

              <span class="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
                Technické díly
              </span>

              <h3 class="mt-1 text-xl font-black">
                Funkční součástka
              </h3>

            </div>

          </article>

        </div>


        <div class="mt-10 text-center">

          <p class="text-sm text-white/40">
            Máte vlastní návrh?
          </p>

          <a
            href="#kontakt"
            class="mt-3 inline-block text-lg font-bold text-orange-500 transition-colors hover:text-orange-400"
          >
            Pošlete nám ho →
          </a>

        </div>

      </div>

    </section>


    <!-- =========================
         PROCESS
    ========================== -->

    <section
      id="proces"
      class="border-t border-white/10 bg-neutral-900/30 py-24 sm:py-32"
    >

      <div class="mx-auto max-w-7xl px-6 lg:px-8">

        <div class="max-w-2xl">

          <div class="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">

            <span class="h-px w-8 bg-orange-500"></span>

            Jak to funguje

          </div>

          <h2 class="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Od nápadu
            <span class="text-white/40">
              k hotovému výrobku.
            </span>
          </h2>

          <p class="mt-6 text-lg leading-relaxed text-white/50">
            Nemusíte vědět, jak 3D tisk funguje.
            Stačí nám říct, co potřebujete.
          </p>

        </div>


        <div class="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">

          <article class="group relative">

            <div class="mb-8 flex items-center justify-between">

              <span class="text-6xl font-black tracking-tighter text-white/10 transition-colors duration-300 group-hover:text-orange-500/30">
                01
              </span>

              <div class="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-neutral-950 text-orange-500">
                →
              </div>

            </div>

            <div class="border-l border-white/10 pl-6">

              <h3 class="text-xl font-black">
                Napište nám
              </h3>

              <p class="mt-3 text-sm leading-relaxed text-white/40">
                Popište nám, co potřebujete vyrobit.
                Můžete poslat i fotografii nebo náčrt.
              </p>

            </div>

          </article>


          <article class="group relative">

            <div class="mb-8 flex items-center justify-between">

              <span class="text-6xl font-black tracking-tighter text-white/10 transition-colors duration-300 group-hover:text-orange-500/30">
                02
              </span>

              <div class="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-neutral-950 text-orange-500">
                →
              </div>

            </div>

            <div class="border-l border-white/10 pl-6">

              <h3 class="text-xl font-black">
                Domluvíme detaily
              </h3>

              <p class="mt-3 text-sm leading-relaxed text-white/40">
                Společně vybereme materiál, barvu,
                velikost a další parametry.
              </p>

            </div>

          </article>


          <article class="group relative">

            <div class="mb-8 flex items-center justify-between">

              <span class="text-6xl font-black tracking-tighter text-white/10 transition-colors duration-300 group-hover:text-orange-500/30">
                03
              </span>

              <div class="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-neutral-950 text-orange-500">
                →
              </div>

            </div>

            <div class="border-l border-white/10 pl-6">

              <h3 class="text-xl font-black">
                Vyrobíme
              </h3>

              <p class="mt-3 text-sm leading-relaxed text-white/40">
                Připravíme model, nastavíme tisk
                a vyrobíme váš produkt.
              </p>

            </div>

          </article>


          <article class="group relative">

            <div class="mb-8 flex items-center justify-between">

              <span class="text-6xl font-black tracking-tighter text-white/10 transition-colors duration-300 group-hover:text-orange-500/30">
                04
              </span>

              <div class="flex h-11 w-11 items-center justify-center rounded-full border border-orange-500/40 bg-orange-500/10 text-orange-500">
                ✓
              </div>

            </div>

            <div class="border-l border-orange-500/30 pl-6">

              <h3 class="text-xl font-black">
                Hotovo
              </h3>

              <p class="mt-3 text-sm leading-relaxed text-white/40">
                Hotový výrobek předáme nebo odešleme
                podle předem domluveného způsobu.
              </p>

            </div>

          </article>

        </div>


        <div
          class="mt-16 overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-950"
        >

          <div class="relative px-8 py-12 sm:px-12 sm:py-16">

            <div class="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl"></div>

            <div class="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

              <div>

                <p class="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
                  Připraveno?
                </p>

                <h3 class="mt-3 text-3xl font-black sm:text-4xl">
                  Pojďme vytvořit něco
                  <span class="text-orange-500">
                    vlastního.
                  </span>
                </h3>

                <p class="mt-4 max-w-xl text-white/40">
                  Pošlete nám svůj nápad a zjistíme,
                  co pro vás můžeme vyrobit.
                </p>

              </div>

              <a
                href="#kontakt"
                class="inline-flex shrink-0 items-center justify-center rounded-full bg-orange-500 px-8 py-4 font-bold text-black transition-all duration-300 hover:bg-orange-400 hover:shadow-[0_0_40px_rgba(249,115,22,0.3)]"
              >
                Nezávazně poptat →
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>

<!-- =========================
     ABOUT / FOUNDER
========================== -->

<section
  id="o-nas"
  class="border-t border-white/10 bg-neutral-950 py-24 sm:py-32"
>

  <div class="mx-auto max-w-7xl px-6 lg:px-8">

    <div
      class="overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-900"
    >

      <div class="grid lg:grid-cols-[1.05fr_0.95fr]">

        <!-- TEXT -->

        <div class="relative flex flex-col justify-center p-8 sm:p-12 lg:p-16">

          <!-- Orange glow -->

          <div
            class="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl"
          ></div>

          <div class="relative">

            <div
              class="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500"
            >

              <span class="h-px w-8 bg-orange-500"></span>

              O SHOKOL

            </div>


            <h2
              class="max-w-xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl"
            >

              Za každým výrobkem
              <span class="text-white/40">
                stojí člověk.
              </span>

            </h2>


            <p
              class="mt-6 max-w-xl text-lg leading-relaxed text-white/50"
            >
              SHOKOL vznikl z jednoduché myšlenky —
              proměnit nápady v reálné výrobky.
              Od prvního návrhu až po hotový produkt
              hledáme řešení, které dává smysl.
            </p>


            <p
              class="mt-5 max-w-xl text-lg leading-relaxed text-white/50"
            >
              Každou zakázku řešíme individuálně,
              s důrazem na kvalitu, přesnost a výsledek,
              se kterým budete spokojeni.
            </p>


            <!-- Founder -->

            <div class="mt-10 flex items-center gap-4">

              <div
                class="flex h-12 w-12 items-center justify-center rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-500"
              >
                S
              </div>

              <div>

                <p class="font-bold text-white">
                  Sergiy Petruyanchyk
                </p>

                <p class="mt-1 text-sm text-white/40">
                  Zakladatel SHOKOL
                </p>

              </div>

            </div>

          </div>

        </div>


        <!-- PHOTO -->

        <div class="relative min-h-[420px] overflow-hidden lg:min-h-[600px]">

          <img
            src="/images/sergiy.jpg"
            alt="Sergiy Petruyanchyk — zakladatel SHOKOL"
            class="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
          />

          <!-- Dark gradient -->

          <div
            class="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent"
          ></div>

          <!-- Orange glow -->

          <div
            class="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl"
          ></div>


          <!-- Photo label -->

          <div
            class="absolute bottom-6 left-6 rounded-2xl border border-white/10 bg-neutral-950/80 px-5 py-4 backdrop-blur-xl"
          >

            <p class="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
              SHOKOL
            </p>

            <p class="mt-1 text-sm text-white/50">
              3D tisk na zakázku
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

    <!-- =========================
         CONTACT
    ========================== -->

    <section
      id="kontakt"
      class="border-t border-white/10 bg-neutral-950 py-24 sm:py-32"
    >

      <div class="mx-auto max-w-7xl px-6 lg:px-8">

        <div class="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">


          <!-- CONTACT INFO -->

          <div>

            <div class="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">

              <span class="h-px w-8 bg-orange-500"></span>

              Kontakt

            </div>


            <h2 class="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Máte nápad?
              <span class="text-white/40">
                Pojďme ho vytisknout.
              </span>
            </h2>


            <p class="mt-6 max-w-lg text-lg leading-relaxed text-white/50">
              Napište nám, co potřebujete vyrobit.
              Čím více informací nám pošlete, tím přesnější
              nabídku vám můžeme připravit.
            </p>


            <div class="mt-10 space-y-5">


              <!-- EMAIL -->

              <a
                href="mailto:3d.shokol@gmail.com"
                class="group flex items-center gap-4 transition-all duration-300 hover:translate-x-1"
              >

                <div
                  class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-neutral-900 text-orange-500 transition-colors group-hover:border-orange-500/40"
                >
                  @
                </div>

                <div>

                  <p class="text-xs uppercase tracking-wider text-white/30">
                    E-mail
                  </p>

                  <p class="mt-1 font-semibold transition-colors group-hover:text-orange-500">
                    3d.shokol@gmail.com
                  </p>

                </div>

              </a>


              <!-- WHATSAPP -->

              <a
                href="https://wa.me/420770624791"
                target="_blank"
                rel="noopener noreferrer"
                class="group flex items-center gap-4 transition-all duration-300 hover:translate-x-1"
              >

                <div
                  class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-neutral-900 text-orange-500 transition-all duration-300 group-hover:border-orange-500/40 group-hover:bg-orange-500/10"
                >

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="h-6 w-6"
                  >

                    <path d="M12.04 2C6.5 2 2 6.5 2 12.04c0 1.77.46 3.43 1.27 4.87L2 22l5.24-1.24a9.98 9.98 0 0 0 4.8 1.22h.01C17.58 21.98 22 17.47 22 12.04 22 6.5 17.58 2 12.04 2Zm0 18.2c-1.5 0-2.96-.4-4.25-1.16l-.3-.18-3.11.74.74-3.03-.2-.31a8.22 8.22 0 0 1-1.26-4.38c0-4.55 3.7-8.25 8.26-8.25 2.2 0 4.27.86 5.82 2.42a8.2 8.2 0 0 1 2.42 5.84c0 4.55-3.7 8.31-8.12 8.31Zm4.52-6.2c-.25-.13-1.47-.73-1.7-.81-.23-.09-.4-.13-.57.13-.17.25-.65.81-.8.98-.15.17-.3.19-.55.06-.25-.13-1.04-.38-1.98-1.22-.73-.65-1.22-1.45-1.36-1.7-.14-.25-.02-.39.1-.52.11-.11.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.36-.78-1.86-.2-.49-.41-.43-.57-.44h-.49c-.17 0-.44.06-.67.32-.23.25-.88.86-.88 2.1s.9 2.43 1.02 2.6c.13.17 1.77 2.7 4.29 3.78.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29Z"/>

                  </svg>

                </div>


                <div>

                  <p class="text-xs uppercase tracking-wider text-white/30">
                    WhatsApp
                  </p>

                  <p class="mt-1 font-semibold transition-colors group-hover:text-orange-500">
                    +420 770 624 791
                  </p>

                </div>

              </a>


              <!-- TELEGRAM -->

              <a
                href="https://t.me/+420770624791"
                target="_blank"
                rel="noopener noreferrer"
                class="group flex items-center gap-4 transition-all duration-300 hover:translate-x-1"
              >

                <div
                  class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-neutral-900 text-orange-500 transition-all duration-300 group-hover:border-orange-500/40 group-hover:bg-orange-500/10"
                >

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="h-6 w-6"
                  >

                    <path d="M21.5 3.5 2.86 10.69c-.8.32-.77 1.1-.14 1.34l4.76 1.76 1.82 5.68c.2.55.1.77.68.77.45 0 .65-.2.89-.43l2.31-2.24 4.8 3.54c.88.49 1.52.24 1.74-.82l3.12-15.1c.32-1.3-.5-1.9-1.34-1.59ZM8.2 13.42l10.72-6.76c.53-.32 1.02-.15.62.2l-8.68 7.84-.34 3.22-2.32-4.5Z"/>

                  </svg>

                </div>


                <div>

                  <p class="text-xs uppercase tracking-wider text-white/30">
                    Telegram
                  </p>

                  <p class="mt-1 font-semibold transition-colors group-hover:text-orange-500">
                    +420 770 624 791
                  </p>

                </div>

              </a>

            </div>

          </div>


          <!-- FORM -->

          <div
            class="rounded-[2rem] border border-white/10 bg-neutral-900 p-6 sm:p-8 lg:p-10"
          >

            <form
              id="contactForm"
              action="https://formspree.io/f/maewrlng"
              method="POST"
              class="space-y-6"
            >


              <!-- NAME + EMAIL -->

              <div class="grid gap-6 sm:grid-cols-2">

                <div>

                  <label
                    for="name"
                    class="mb-2 block text-sm font-medium text-white/70"
                  >
                    Jméno
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Vaše jméno"
                    required
                    class="w-full rounded-2xl border border-white/10 bg-neutral-950 px-5 py-4 text-white outline-none placeholder:text-white/20 transition focus:border-orange-500/60"
                  />

                </div>


                <div>

                  <label
                    for="email"
                    class="mb-2 block text-sm font-medium text-white/70"
                  >
                    E-mail
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="vas@email.cz"
                    required
                    class="w-full rounded-2xl border border-white/10 bg-neutral-950 px-5 py-4 text-white outline-none placeholder:text-white/20 transition focus:border-orange-500/60"
                  />

                </div>

              </div>


              <!-- PHONE -->

              <div>

                <label
                  for="phone"
                  class="mb-2 block text-sm font-medium text-white/70"
                >
                  Telefon
                  <span class="text-white/30">
                    (volitelné)
                  </span>
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+420 777 123 456"
                  class="w-full rounded-2xl border border-white/10 bg-neutral-950 px-5 py-4 text-white outline-none placeholder:text-white/20 transition focus:border-orange-500/60"
                />

              </div>


              <!-- SERVICE -->

              <div>

                <label
                  for="service"
                  class="mb-2 block text-sm font-medium text-white/70"
                >
                  Co potřebujete?
                </label>

                <select
                  id="service"
                  name="service"
                  class="w-full appearance-none rounded-2xl border border-white/10 bg-neutral-950 px-5 py-4 text-white outline-none transition focus:border-orange-500/60"
                >

                  <option value="">
                    Vyberte možnost
                  </option>

                  <option value="privesek">
                    Přívěsek / jmenovka
                  </option>

                  <option value="darek">
                    Dárek / dekorace
                  </option>

                  <option value="dil">
                    Náhradní díl
                  </option>

                  <option value="zakazka">
                    3D tisk na zakázku
                  </option>

                  <option value="modelovani">
                    3D modelování
                  </option>

                  <option value="jine">
                    Něco jiného
                  </option>

                </select>

              </div>


              <!-- MESSAGE -->

              <div>

                <label
                  for="message"
                  class="mb-2 block text-sm font-medium text-white/70"
                >
                  Popis projektu
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Popište nám, co potřebujete vyrobit..."
                  required
                  class="w-full resize-none rounded-2xl border border-white/10 bg-neutral-950 px-5 py-4 text-white outline-none placeholder:text-white/20 transition focus:border-orange-500/60"
                ></textarea>

              </div>


              <!-- SUBMIT -->

              <button
                type="submit"
                class="w-full rounded-full bg-orange-500 px-6 py-4 font-bold text-black transition-all duration-300 hover:bg-orange-400 hover:shadow-[0_0_40px_rgba(249,115,22,0.3)]"
              >
                Odeslat poptávku →
              </button>


              <p
                id="formMessage"
                class="hidden text-center text-sm"
              ></p>

            </form>

          </div>

        </div>
<!-- LOCATION -->

<div class="mt-16 border-t border-white/10 pt-16 sm:mt-20 sm:pt-20">

  <div class="mb-6 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

    <div>

      <div class="mb-3 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">

        <span class="h-px w-8 bg-orange-500"></span>

        Kde nás najdete

      </div>

      <h3 class="text-2xl font-black sm:text-3xl">
        Praha 3 — Žižkov
      </h3>

      <p class="mt-2 text-sm text-white/40">
        Víta Nejedlého, 130 00 Praha 3
      </p>

    </div>


    <a
      href="https://maps.app.goo.gl/p7BBh4JBM43Box5R9"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex shrink-0 items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:border-orange-500 hover:text-orange-500"
    >
      Otevřít v Google Maps →
    </a>

  </div>


  <!-- MAP -->

  <div class="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-900 shadow-2xl">

    <div class="relative h-[300px] sm:h-[400px] lg:h-[450px]">

      <iframe
        src="https://www.google.com/maps?q=Víta+Nejedlého,+130+00+Praha+3-Žižkov&output=embed"
        class="absolute inset-0 h-full w-full border-0 grayscale-[20%] transition-all duration-700 group-hover:grayscale-0"
        allowfullscreen
        loading="lazy"
        referrerpolicy="strict-origin-when-cross-origin"
        title="SHOKOL — 3D tisk Praha 3"
      ></iframe>


      <!-- SHOKOL LABEL -->

      <div
        class="pointer-events-none absolute left-5 top-5 rounded-2xl border border-white/10 bg-neutral-950/90 px-5 py-4 shadow-2xl backdrop-blur-xl"
      >

        <div class="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
          SHOKOL
        </div>

        <div class="mt-1 text-sm font-semibold text-white">
          3D tisk v Praze
        </div>

        <div class="mt-1 text-xs text-white/40">
          Žižkov · Praha 3
        </div>

      </div>

    </div>

  </div>

</div>
      </div>

    </section>


    
  </main>


  <!-- =========================
       FOOTER
  ========================== -->

  <footer class="border-t border-white/10 bg-neutral-950">

    <div class="mx-auto max-w-7xl px-6 py-10 lg:px-8">

      <div class="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">

        <div>

          <a
            href="#"
            class="text-xl font-black tracking-[0.2em]"
          >
            SHOKOL
          </a>

          <p class="mt-2 text-sm text-white/30">
            3D tisk na zakázku
          </p>

        </div>


        <div class="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/40" id="footer-info">

          <a href="#sluzby" class="transition-colors hover:text-white">
            Služby
          </a>

          <a href="#materialy" class="transition-colors hover:text-white">
            Materiály
          </a>

          <a href="#galerie" class="transition-colors hover:text-white">
            Galerie
          </a>

          <a href="#proces" class="transition-colors hover:text-white">
            Jak to funguje
          </a>

          <a href="#kontakt" class="transition-colors hover:text-white">
            Kontakt
          </a>

        </div>

      </div>


      <div
  class="mt-10 border-t border-white/10 pt-6"
>

  <div class="flex w-full items-center justify-between text-xs text-white/20"">

    <span>
      © ${new Date().getFullYear()} SHOKOL.
    </span>
    <span>
Všechna práva vyhrazena.
    </span>

  </div>

 

</div>
 <div class="mt-4 text-center text-[11px] text-white/15">
    Web vytvořil
    <span class="font-medium text-white/25">
      Vladyslav Karpenko
    </span>
  </div>
  </footer>


  <!-- =========================
       MOBILE STICKY CTA
  ========================== -->

  <a
    href="#kontakt"
    id="mobileCta"
    class="fixed bottom-4 left-4 right-4 z-40 flex items-center justify-center rounded-2xl bg-orange-500 px-6 py-4 font-bold text-black shadow-[0_10px_40px_rgba(249,115,22,0.3)] transition-all duration-300 hover:bg-orange-400 md:hidden"
  >
    Objednat výrobu
    <span class="ml-2">
      →
    </span>
  </a>
`


// ======================================================
// MOBILE MENU
// ======================================================

const menuButton = document.querySelector('#menuButton')
const mobileMenu = document.querySelector('#mobileMenu')
const mobileLinks = document.querySelectorAll('.mobile-link')


function openMobileMenu() {

  if (!menuButton || !mobileMenu) return

  mobileMenu.classList.add('open')

  menuButton.classList.add('open')

  menuButton.setAttribute(
    'aria-expanded',
    'true'
  )

  menuButton.setAttribute(
    'aria-label',
    'Zavřít menu'
  )
}


function closeMobileMenu() {

  if (!menuButton || !mobileMenu) return

  mobileMenu.classList.remove('open')

  menuButton.classList.remove('open')

  menuButton.setAttribute(
    'aria-expanded',
    'false'
  )

  menuButton.setAttribute(
    'aria-label',
    'Otevřít menu'
  )
}


// Open / close

if (menuButton && mobileMenu) {

  menuButton.addEventListener(
    'click',
    (event) => {

      event.stopPropagation()

      const isOpen =
        mobileMenu.classList.contains('open')

      if (isOpen) {

        closeMobileMenu()

      } else {

        openMobileMenu()

      }

    }
  )

}


// Close after navigation click

mobileLinks.forEach((link) => {

  link.addEventListener(
    'click',
    () => {

      closeMobileMenu()

    }
  )

})


// Close after CTA click

const mobileMenuCta =
  mobileMenu?.querySelector(
    '.mobile-menu-item:last-child'
  )


if (mobileMenuCta) {

  mobileMenuCta.addEventListener(
    'click',
    () => {

      closeMobileMenu()

    }
  )

}


// Close when clicking outside

document.addEventListener(
  'click',
  (event) => {

    if (!mobileMenu || !menuButton) {
      return
    }

    const isOpen =
      mobileMenu.classList.contains('open')

    if (!isOpen) {
      return
    }

    if (
      !mobileMenu.contains(event.target) &&
      !menuButton.contains(event.target)
    ) {

      closeMobileMenu()

    }

  }
)


// Close with ESC

document.addEventListener(
  'keydown',
  (event) => {

    if (event.key === 'Escape') {

      closeMobileMenu()

    }

  }
)


// Close when switching to desktop

window.addEventListener(
  'resize',
  () => {

    if (window.innerWidth >= 768) {

      closeMobileMenu()

    }

  }
)


// ======================================================
// CONTACT FORM / FORMSPREE
// ======================================================

const contactForm =
  document.querySelector('#contactForm')

const formMessage =
  document.querySelector('#formMessage')


if (contactForm) {

  contactForm.addEventListener(
    'submit',
    async (event) => {

      event.preventDefault()


      const submitButton =
        contactForm.querySelector(
          'button[type="submit"]'
        )


      if (!submitButton) {
        return
      }


      submitButton.disabled = true

      submitButton.textContent =
        'Odesílám...'


      formMessage?.classList.add(
        'hidden'
      )


      try {

        const response =
          await fetch(
            contactForm.action,
            {
              method: 'POST',

              body:
                new FormData(
                  contactForm
                ),

              headers: {
                Accept:
                  'application/json',
              },
            }
          )


        if (response.ok) {

          contactForm.reset()


          if (formMessage) {

            formMessage.textContent =
              'Děkujeme! Vaše poptávka byla úspěšně odeslána.'


            formMessage.classList.remove(
              'hidden'
            )


            formMessage.classList.remove(
              'text-red-400'
            )


            formMessage.classList.add(
              'text-orange-500'
            )

          }

        } else {

          if (formMessage) {

            formMessage.textContent =
              'Něco se nepodařilo. Zkuste to prosím znovu.'


            formMessage.classList.remove(
              'hidden'
            )


            formMessage.classList.remove(
              'text-orange-500'
            )


            formMessage.classList.add(
              'text-red-400'
            )

          }

        }

      } catch (error) {

        if (formMessage) {

          formMessage.textContent =
            'Nepodařilo se odeslat formulář. Zkuste to prosím znovu.'


          formMessage.classList.remove(
            'hidden'
          )


          formMessage.classList.remove(
            'text-orange-500'
          )


          formMessage.classList.add(
            'text-red-400'
          )

        }

      }


      submitButton.disabled = false

      submitButton.textContent =
        'Odeslat poptávku →'

    }
  )

}


// ======================================================
// SCROLL REVEAL
// ======================================================

const revealElements =
  document.querySelectorAll(
    'section > div, article'
  )


revealElements.forEach(
  (element) => {

    element.classList.add(
      'reveal'
    )

  }
)


const revealObserver =
  new IntersectionObserver(
    (entries) => {

      entries.forEach(
        (entry) => {

          if (
            entry.isIntersecting
          ) {

            entry.target.classList.add(
              'reveal-visible'
            )

            revealObserver.unobserve(
              entry.target
            )

          }

        }
      )

    },
    {
      threshold: 0.12,
    }
  )


revealElements.forEach(
  (element) => {

    revealObserver.observe(
      element
    )

  }
)


// ======================================================
// HERO 3D MOUSE EFFECT
// ======================================================

const heroProduct =
  document.querySelector(
    '#heroProduct'
  )


if (
  heroProduct &&
  window.matchMedia(
    '(pointer: fine)'
  ).matches
) {

  document.addEventListener(
    'mousemove',
    (event) => {

      const x =
        (
          event.clientX /
          window.innerWidth -
          0.5
        ) * 2


      const y =
        (
          event.clientY /
          window.innerHeight -
          0.5
        ) * 2


      heroProduct.style.transform = `
        translate(
          ${x * 8}px,
          ${y * 8}px
        )
      `

    }
  )

}


// ======================================================
// MOBILE STICKY CTA
// ======================================================

const mobileCta =
  document.querySelector(
    '#mobileCta'
  )


const heroSection =
  document.querySelector(
    'main > section'
  )


const contactSection =
  document.querySelector(
    '#kontakt'
  )


const updateMobileCta = () => {

  if (
    !mobileCta ||
    !heroSection ||
    !contactSection
  ) {

    return

  }


  const heroBottom =
    heroSection.getBoundingClientRect()
      .bottom


  const contactTop =
    contactSection.getBoundingClientRect()
      .top


  if (
    heroBottom < 0 &&
    contactTop > window.innerHeight
  ) {

    mobileCta.classList.remove(
      'translate-y-24',
      'opacity-0',
      'pointer-events-none'
    )

  } else {

    mobileCta.classList.add(
      'translate-y-24',
      'opacity-0',
      'pointer-events-none'
    )

  }

}


// Initial state

if (mobileCta) {

  mobileCta.classList.add(
    'translate-y-24',
    'opacity-0',
    'pointer-events-none'
  )

}


// Scroll

window.addEventListener(
  'scroll',
  updateMobileCta,
  {
    passive: true,
  }
)


// Initial check

updateMobileCta()