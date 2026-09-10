import './style.css'

document.querySelector('#app').innerHTML = `
<!-- SITE BACKGROUND VIDEO -->

<video
  id="siteBackgroundVideo"
  class="pointer-events-none fixed inset-0 z-0 h-full w-full object-cover"
  autoplay
  muted
  loop
  playsinline
  preload="metadata"
>
  <source
    src="/videos/3d-print.mp4"
    type="video/mp4"
  />
</video>

<!-- DARK OVERLAY -->

<div
  class="pointer-events-none fixed inset-0 z-[1] bg-black/75"
></div>

<!-- SITE CONTENT -->

<div class="relative z-10">
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


          <!-- =========================
     SHOKOL — 3D PRINT TITLE
========================== -->

<div id="shokolPrintTitle" class="shokol-print-title">

  <h1
  id="shokolHeroTitle"
  class="
    shokol-3d-title
    max-w-3xl
    text-[3rem]
    font-black
    leading-[0.9]
    tracking-[-0.04em]
    sm:text-6xl
    lg:text-8xl
  "
>
  <span class="shokol-3d-line">
    Tvoříme
  </span>

  <span class="shokol-3d-line shokol-3d-orange">
    ve 3D.
  </span>
</h1>

  <!-- линия печати -->
  <div
    id="shokolPrintBeam"
    class="shokol-print-beam"
  ></div>

</div>


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

<!-- =========================================================
     HERO RIGHT — SHOKOL PREMIUM 3D SOCIAL CARDS
========================================================== -->

<div
  class="relative flex min-h-[1080px] w-full items-center justify-center pt-8 sm:min-h-[680px] sm:pt-0 lg:min-h-[720px] lg:justify-end"
>

  <!-- =====================================================
       SOCIAL STAGE
  ====================================================== -->

  <div
    id="shokolSocialStage"
    class="reveal-social relative h-[1040px] w-full max-w-[680px] [perspective:1400px] sm:h-[660px]"
  >

    <!-- ===================================================
         BACKGROUND ATMOSPHERE
    ==================================================== -->

    <div
      class="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/[0.045] blur-[110px]"
    ></div>

    <div
      class="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/[0.035] blur-[70px]"
    ></div>


    <!-- ===================================================
         FOLLOW TITLE
    ==================================================== -->

    <div
      id="shokolFollowTitle"
      class="absolute left-1/2 top-2 z-40 -translate-x-1/2 whitespace-nowrap text-center font-serif text-[30px] italic leading-[0.9] text-white sm:top-0 sm:text-[38px]"
    >

      <div>Sledujte</div>

      <div>za námi!</div>

      <div
        class="mt-3 translate-x-[42px] font-sans text-[46px] not-italic leading-none text-orange-500"
      >
        ↘
      </div>

    </div>


    <!-- ===================================================
         INSTAGRAM CARD
    ==================================================== -->

    <a
      id="shokolInstagramCard"
      href="https://www.instagram.com/shokol.3dtisk"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram SHOKOL"

      class="
        absolute
        left-1/2
        top-[175px]
        z-10

        flex
        h-[400px]
        w-[calc(100%-36px)]
        max-w-[300px]
        -translate-x-1/2

        flex-col
        items-center
        justify-center

        overflow-hidden

        rounded-[2.4rem]

        border
        border-white/[0.16]

        bg-black/[0.62]

        shadow-[0_45px_100px_rgba(0,0,0,0.80)]

        backdrop-blur-[18px]

        transition-[transform,box-shadow,border-color]
        duration-500
        ease-out

        hover:z-40
        hover:border-orange-500/40
        hover:shadow-[0_55px_120px_rgba(0,0,0,0.9),0_0_55px_rgba(249,115,22,0.12)]

        sm:left-[3%]
        sm:top-[155px]
        sm:h-[485px]
        sm:w-[315px]
        sm:max-w-none
        sm:translate-x-0

        [transform-style:preserve-3d]
        [will-change:transform]
      "
    >

      <!-- =================================================
           3D DEPTH — BACK PLATE
      ================================================== -->

      <div
        class="pointer-events-none absolute -bottom-3 left-3 right-3 top-3 -z-10 rounded-[2.4rem] border border-orange-500/[0.10] bg-black/[0.55] shadow-[0_25px_50px_rgba(0,0,0,0.75)]"
      ></div>


      <!-- =================================================
           3D SIDE EDGE
      ================================================== -->

      <div
        class="pointer-events-none absolute right-[-3px] top-5 h-[88%] w-[5px] rounded-full bg-gradient-to-b from-white/[0.08] via-orange-500/[0.08] to-black/40 blur-[1px]"
      ></div>


      <!-- =================================================
           GLASS BASE
      ================================================== -->

      <div
        class="pointer-events-none absolute inset-0 rounded-[2.4rem] bg-gradient-to-br from-white/[0.065] via-transparent to-orange-500/[0.035]"
      ></div>


      <!-- =================================================
           DIAGONAL GLASS REFLECTION
      ================================================== -->

      <div
        class="pointer-events-none absolute -left-[35%] -top-[15%] h-[70%] w-[85%] rotate-[25deg] bg-gradient-to-r from-transparent via-white/[0.055] to-transparent blur-[2px]"
      ></div>


      <!-- =================================================
           TOP EDGE LIGHT
      ================================================== -->

      <div
        class="pointer-events-none absolute left-[8%] right-[8%] top-[1px] h-px bg-gradient-to-r from-transparent via-white/[0.18] to-transparent"
      ></div>


      <!-- =================================================
           INNER FRAME
      ================================================== -->

      <div
        class="pointer-events-none absolute inset-[1px] rounded-[2.4rem] border border-white/[0.055]"
      ></div>


      <div
        class="pointer-events-none absolute inset-[8px] rounded-[2rem] border border-white/[0.025]"
      ></div>


      <!-- =================================================
           ORANGE AMBIENT LIGHT
      ================================================== -->

      <div
        class="pointer-events-none absolute bottom-[-100px] left-1/2 h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-orange-500/[0.07] blur-[80px]"
      ></div>


      <!-- =================================================
     INSTAGRAM ICON — ORIGINAL COLORS
================================================== -->

<div
  class="
    relative
    flex
    h-[95px]
    w-[95px]
    items-center
    justify-center
    rounded-[1.7rem]

    bg-gradient-to-br
    from-[#FFD600]
    via-[#FF0069]
    to-[#833AB4]

    shadow-[0_20px_45px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.25)]

    transition-all
    duration-500

    sm:h-[125px]
    sm:w-[125px]
  "
>

  <!-- glass highlight -->

  <div
    class="pointer-events-none absolute inset-[2px] rounded-[1.6rem] border border-white/[0.18]"
  ></div>

  <div
    class="pointer-events-none absolute left-3 right-3 top-2 h-8 rounded-full bg-white/[0.12] blur-md"
  ></div>


  <!-- ORIGINAL INSTAGRAM SYMBOL -->

  <svg
    viewBox="0 0 24 24"
    class="
      relative
      h-[58px]
      w-[58px]
      fill-none
      stroke-white
      stroke-[1.6]
      drop-shadow-[0_4px_10px_rgba(0,0,0,0.35)]

      sm:h-[76px]
      sm:w-[76px]
    "
  >

    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="5"
    ></rect>

    <circle
      cx="12"
      cy="12"
      r="4.2"
    ></circle>

    <circle
      cx="17.4"
      cy="6.7"
      r="1"
      fill="white"
      stroke="none"
    ></circle>

  </svg>

</div>


      <!-- =================================================
           INSTAGRAM TITLE
      ================================================== -->

      <div
        class="relative mt-6 text-[30px] font-bold tracking-[-0.03em] text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] sm:mt-7 sm:text-[36px]"
      >
        Instagram
      </div>


      <!-- =================================================
           DESCRIPTION
      ================================================== -->

      <div
        class="relative mt-4 text-center text-[11px] font-semibold uppercase leading-[1.8] tracking-[0.16em] text-white/55 sm:mt-5 sm:text-sm sm:tracking-[0.18em]"
      >

        ZÁKULISÍ<br />
        NOVÉ PROJEKTY<br />
        INSPIRACE

      </div>


      <!-- =================================================
           USERNAME
      ================================================== -->

      <div
        class="relative mt-6 text-[10px] tracking-[0.15em] text-white/25 sm:mt-7 sm:text-[11px]"
      >
        @shokol.3dtisk
      </div>


      <!-- =================================================
           BOTTOM EDGE
      ================================================== -->

      <div
        class="pointer-events-none absolute bottom-[10px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"
      ></div>

    </a>



    <!-- ===================================================
         TIKTOK CARD
    ==================================================== -->

    <a
      id="shokolTikTokCard"
      href="https://www.tiktok.com/@shokol.3dtisk"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="TikTok SHOKOL"

      class="
        absolute
        left-1/2
        top-[615px]
        z-20

        flex
        h-[400px]
        w-[calc(100%-36px)]
        max-w-[300px]
        -translate-x-1/2

        flex-col
        items-center
        justify-center

        overflow-hidden

        rounded-[2.4rem]

        border
        border-white/[0.16]

        bg-black/[0.64]

        shadow-[0_45px_100px_rgba(0,0,0,0.82)]

        backdrop-blur-[18px]

        transition-[transform,box-shadow,border-color]
        duration-500
        ease-out

        hover:z-40
        hover:border-orange-500/40
        hover:shadow-[0_55px_120px_rgba(0,0,0,0.9),0_0_55px_rgba(249,115,22,0.12)]

        sm:left-auto
        sm:right-[3%]
        sm:top-[210px]
        sm:h-[485px]
        sm:w-[315px]
        sm:max-w-none
        sm:translate-x-0

        [transform-style:preserve-3d]
        [will-change:transform]
      "
    >

      <!-- =================================================
           3D DEPTH — BACK PLATE
      ================================================== -->

      <div
        class="pointer-events-none absolute -bottom-3 left-3 right-3 top-3 -z-10 rounded-[2.4rem] border border-orange-500/[0.10] bg-black/[0.55] shadow-[0_25px_50px_rgba(0,0,0,0.75)]"
      ></div>


      <!-- =================================================
           3D SIDE EDGE
      ================================================== -->

      <div
        class="pointer-events-none absolute left-[-3px] top-5 h-[88%] w-[5px] rounded-full bg-gradient-to-b from-white/[0.08] via-orange-500/[0.08] to-black/40 blur-[1px]"
      ></div>


      <!-- =================================================
           GLASS BASE
      ================================================== -->

      <div
        class="pointer-events-none absolute inset-0 rounded-[2.4rem] bg-gradient-to-br from-white/[0.055] via-transparent to-orange-500/[0.035]"
      ></div>


      <!-- =================================================
           DIAGONAL GLASS REFLECTION
      ================================================== -->

      <div
        class="pointer-events-none absolute -right-[35%] -top-[15%] h-[70%] w-[85%] rotate-[-25deg] bg-gradient-to-r from-transparent via-white/[0.045] to-transparent blur-[2px]"
      ></div>


      <!-- =================================================
           TOP EDGE LIGHT
      ================================================== -->

      <div
        class="pointer-events-none absolute left-[8%] right-[8%] top-[1px] h-px bg-gradient-to-r from-transparent via-white/[0.18] to-transparent"
      ></div>


      <!-- =================================================
           INNER FRAME
      ================================================== -->

      <div
        class="pointer-events-none absolute inset-[1px] rounded-[2.4rem] border border-white/[0.055]"
      ></div>


      <div
        class="pointer-events-none absolute inset-[8px] rounded-[2rem] border border-white/[0.025]"
      ></div>


      <!-- =================================================
           ORANGE AMBIENT LIGHT
      ================================================== -->

      <div
        class="pointer-events-none absolute bottom-[-100px] left-1/2 h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-orange-500/[0.06] blur-[80px]"
      ></div>


      <!-- =================================================
     TIKTOK ICON — ORIGINAL COLORS
================================================== -->

<div
  class="
    relative
    flex
    h-[95px]
    w-[95px]
    items-center
    justify-center
    rounded-[1.7rem]

    bg-black

    border
    border-white/[0.10]

    shadow-[0_20px_45px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.12)]

    transition-all
    duration-500

    sm:h-[125px]
    sm:w-[125px]
  "
>

  <!-- glass highlight -->

  <div
    class="pointer-events-none absolute inset-[2px] rounded-[1.6rem] border border-white/[0.08]"
  ></div>


  <!-- subtle reflection -->

  <div
    class="pointer-events-none absolute left-3 right-3 top-2 h-8 rounded-full bg-white/[0.05] blur-md"
  ></div>


  <!-- ORIGINAL TIKTOK LOGO -->

  <svg
    viewBox="0 0 24 24"
    class="
      relative
      h-[62px]
      w-[62px]

      sm:h-[80px]
      sm:w-[80px]

      drop-shadow-[0_5px_12px_rgba(0,0,0,0.55)]
    "
  >

    <!-- cyan offset -->

    <path
      fill="#25F4EE"
      d="M14 3h3c.3 2 1.5 3.4 3.5 4v3.1c-1.5-.1-2.8-.6-4-1.4V15c0 3.6-2.7 6-6.3 6C6.8 21 4 18.7 4 15.5c0-3.3 2.7-5.8 6.2-5.8.3 0 .7 0 1 .1v3.2c-.3-.1-.7-.2-1-.2-1.7 0-3 1.1-3 2.7s1.3 2.6 3 2.6c1.8 0 3-1.1 3-3.3V3z"
      transform="translate(-0.8,0)"
    ></path>


    <!-- pink offset -->

    <path
      fill="#FE2C55"
      d="M14 3h3c.3 2 1.5 3.4 3.5 4v3.1c-1.5-.1-2.8-.6-4-1.4V15c0 3.6-2.7 6-6.3 6C6.8 21 4 18.7 4 15.5c0-3.3 2.7-5.8 6.2-5.8.3 0 .7 0 1 .1v3.2c-.3-.1-.7-.2-1-.2-1.7 0-3 1.1-3 2.7s1.3 2.6 3 2.6c1.8 0 3-1.1 3-3.3V3z"
      transform="translate(0.8,0)"
    ></path>


    <!-- main white logo -->

    <path
      fill="white"
      d="M14 3h3c.3 2 1.5 3.4 3.5 4v3.1c-1.5-.1-2.8-.6-4-1.4V15c0 3.6-2.7 6-6.3 6C6.8 21 4 18.7 4 15.5c0-3.3 2.7-5.8 6.2-5.8.3 0 .7 0 1 .1v3.2c-.3-.1-.7-.2-1-.2-1.7 0-3 1.1-3 2.7s1.3 2.6 3 2.6c1.8 0 3-1.1 3-3.3V3z"
    ></path>

  </svg>

</div>


      <!-- =================================================
           TIKTOK TITLE
      ================================================== -->

      <div
        class="relative mt-6 text-[30px] font-bold tracking-[-0.03em] text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] sm:mt-7 sm:text-[36px]"
      >
        TikTok
      </div>


      <!-- =================================================
           DESCRIPTION
      ================================================== -->

      <div
        class="relative mt-4 text-center text-[11px] font-semibold uppercase leading-[1.8] tracking-[0.16em] text-white/55 sm:mt-5 sm:text-sm sm:tracking-[0.18em]"
      >

        VIDEA Z VÝROBY<br />
        PROCESY<br />
        HOTOVÉ VÝROBKY

      </div>


      <!-- =================================================
           USERNAME
      ================================================== -->

      <div
        class="relative mt-6 text-[10px] tracking-[0.15em] text-white/25 sm:mt-7 sm:text-[11px]"
      >
        @shokol.3dtisk
      </div>


      <!-- =================================================
           BOTTOM EDGE
      ================================================== -->

      <div
        class="pointer-events-none absolute bottom-[10px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"
      ></div>

    </a>


    <!-- ===================================================
         BOTTOM TEXT
    ==================================================== -->

    <div
      id="shokolBottomText"
      class="
        absolute
        left-2/3
        bottom-[-32px]
        z-30
        -translate-x-1/2

        flex
        items-center
        justify-center

        whitespace-nowrap

        text-center
        text-[9px]
        font-semibold
        uppercase
        tracking-[0.18em]
        text-white/35

        sm:bottom-[-36px]
        sm:text-xs
        sm:tracking-[0.22em]
      "
    >

      <span>INSPIRUJTE SE S NÁMI</span>

      <span class="ml-2 text-xl leading-none text-orange-500">
        ♥
      </span>

    </div>

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

<article id="work-1"
  class="group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900 sm:col-span-2 lg:col-span-7 lg:row-span-2"
>

<div class="object-[50%_45%] overflow-hidden bg-neutral-900">
  <img
    src="/images/gallery/work-01.jpg"
    alt="3D tištěný výrobek SHOKOL"
    class="h-full w-full object-contain object-center transition duration-700 group-hover:scale-105"
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

          <article id="work-2"
            class="group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900 lg:col-span-5"
          >

            <div class="aspect-4/3 overflow-hidden">

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

          <article id="work-3"
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
  id="photo-button"
  src="/images/sergiy.jpg"
  alt="Sergiy Petruyanchyk — zakladatel SHOKOL"
  class="absolute  h-full w-full cursor-pointer object-cover transition duration-700 hover:scale-105"
  style="cursor: pointer;"
/>

          <!-- Dark gradient -->

          <div
            class="absolute bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent"
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

  <div class="flex w-full items-center justify-between text-xs text-white/20">

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
  <a
    href="https://www.drakes.cz/"
    target="_blank"
    rel="noopener noreferrer"
    class="font-medium text-white/25 transition-colors hover:text-orange-500"
  >
    Vladyslav Karpenko
  </a>
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

const revealElements = document.querySelectorAll(
  'section > div, article, .reveal-social'
);


// ======================================================
// INITIAL STATE
// ======================================================

revealElements.forEach((element) => {

  element.classList.add('reveal');

});


// ======================================================
// OBSERVER
// ======================================================

const revealObserver = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add(
          'reveal-visible'
        );

        revealObserver.unobserve(
          entry.target
        );

      }

    });

  },
  {
    threshold: 0.12,
  }
);


// ======================================================
// START OBSERVING
// ======================================================

revealElements.forEach((element) => {

  revealObserver.observe(element);

});


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

// Высота первой карточки 

function syncWork1Height() {

  const work1 = document.getElementById('work-1');

  const work2 = document.getElementById('work-2');

  const work3 = document.getElementById('work-3');

  if (!work1 || !work2 || !work3) return;

  // Только на desktop

  if (window.innerWidth >= 1024) {

    const gap = parseFloat(getComputedStyle(work2.parentElement).rowGap);

    const image2 = work2.querySelector('img');
    const image3 = work3.querySelector('img');

    const height =
      image2.getBoundingClientRect().height +
      image3.getBoundingClientRect().height +
      gap;

    work1.style.height = `${height}px`;

  } else {

    work1.style.height = '';

  }

}

window.addEventListener('load', syncWork1Height);

window.addEventListener('resize', syncWork1Height);

// ======================================================
// SHOKOL EASTER EGG QUIZ
// ======================================================

const photoButton = document.querySelector('#photo-button')


// ======================================================
// QUIZ QUESTIONS
// ======================================================

const czechHistoryQuiz = [

  {
    question: 'Kdo byl prezidentem České republiky v roce 2024?',
    options: [
      'Petr Pavel',
      'Miloš Zeman',
      'Petr Fiala',
      'Andrej Babiš'
    ],
    correct: 0
  },

  {
    question: 'Ve kterém měsíci roku 2024 zasáhly Česko rozsáhlé povodně?',
    options: [
      'Červen',
      'Září',
      'Listopad',
      'Leden'
    ],
    correct: 1
  },

  {
    question: 'Kdo byl premiérem České republiky před Andrejem Babišem?',
    options: [
      'Petr Fiala',
      'Petr Pavel',
      'Karel Havlíček',
      'Jan Lipavský'
    ],
    correct: 0
  },

  {
    question: 'Ve kterém měsíci roku 2025 se konaly volby do Poslanecké sněmovny?',
    options: [
      'Červen',
      'Srpen',
      'Říjen',
      'Prosinec'
    ],
    correct: 2
  },

  {
    question: 'Kdo byl 9. prosince 2025 jmenován premiérem České republiky?',
    options: [
      'Petr Fiala',
      'Andrej Babiš',
      'Petr Pavel',
      'Karel Havlíček'
    ],
    correct: 1
  },

  {
    question: 'Kdo jmenoval Andreje Babiše premiérem v prosinci 2025?',
    options: [
      'Petr Pavel',
      'Petr Fiala',
      'Senát',
      'Poslanecká sněmovna'
    ],
    correct: 0
  },

  {
    question: 'Kdo se stal prvním místopředsedou vlády Andreje Babiše v prosinci 2025?',
    options: [
      'Petr Macinka',
      'Jaromír Zůna',
      'Karel Havlíček',
      'Robert Plaga'
    ],
    correct: 2
  },

  {
    question: 'Ve kterém městě se v červenci 2026 konal summit NATO?',
    options: [
      'Praha',
      'Brusel',
      'Ankara',
      'Varšava'
    ],
    correct: 2
  },

  {
    question: 'Kolik procent HDP měla podle vyjádření premiéra Babiše ČR dosáhnout na obranu?',
    options: [
      '1 %',
      '2 %',
      '3 %',
      '5 %'
    ],
    correct: 1
  },

  {
    question: 'Kolik členských států NATO bylo uvedeno v závěrečné deklaraci summitu v Ankaře v roce 2026?',
    options: [
      '27',
      '30',
      '32',
      '35'
    ],
    correct: 2
  }

]


// ======================================================
// STATE
// ======================================================

let easterEggUsed = false

let dildoSnowActive = false

let dildoSnowInterval = null


// ======================================================
// DILDO SNOW CONTAINER
// ======================================================

let container =
  document.querySelector('#dildo-snow')


if (!container) {

  container =
    document.createElement('div')

  container.id =
    'dildo-snow'

  document.body.appendChild(container)

}


// ======================================================
// CREATE DILDO
// ======================================================

function createDildoSnow() {

  if (!dildoSnowActive) return

  const dildo =
    document.createElement('img')

  dildo.src =
    '/images/dildo.png'

  dildo.className =
    'dildo-snowflake'

  dildo.alt = ''

  dildo.style.left =
    `${Math.random() * 100}vw`

  const size =
    18 + Math.random() * 32

  dildo.style.width =
    `${size}px`

  const fallDuration =
    6 + Math.random() * 5

  const swayDuration =
    2 + Math.random() * 2

  dildo.style.animationDuration =
    `${fallDuration}s, ${swayDuration}s`

  container.appendChild(dildo)

  setTimeout(() => {

    dildo.remove()

  }, (fallDuration + 1) * 1000)

}


// ======================================================
// START DILDO SNOW
// ======================================================

function startDildoSnow() {

  if (dildoSnowActive) return

  dildoSnowActive = true

  photoButton?.classList.add(
    'dildo-snow-active'
  )

  createDildoSnow()

  dildoSnowInterval =
    setInterval(() => {

      createDildoSnow()

    }, 700)

}


// ======================================================
// CREATE QUIZ MODAL
// ======================================================

function createQuizModal(questionData) {

  const modal =
    document.createElement('div')

  modal.id =
    'shokolQuizModal'

  modal.innerHTML = `

    <div class="shokol-quiz-backdrop"></div>

    <div
      class="shokol-quiz-window"
      role="dialog"
      aria-modal="true"
    >

      <button
        type="button"
        class="shokol-quiz-close"
        aria-label="Zavřít"
      >
        ×
      </button>

      <div class="shokol-quiz-label">
        SHOKOL TAJNÝ BONUS
      </div>

      <h2>
        Malá otázka...
      </h2>

      <p class="shokol-quiz-question">
        ${questionData.question}
      </p>

      <div
        id="quizOptions"
        class="shokol-quiz-options"
      >

        ${questionData.options
      .map(
        (option, index) => `
              <button
                type="button"
                class="shokol-answer"
                data-answer="${index}"
              >
                <span class="shokol-answer-number">
                  ${String.fromCharCode(65 + index)}
                </span>

                <span>
                  ${option}
                </span>
              </button>
            `
      )
      .join('')}

      </div>

      <p class="shokol-quiz-hint">
        Máte pouze jeden pokus.
      </p>

    </div>

  `

  document.body.appendChild(modal)

  return modal

}


// ======================================================
// SUCCESS
// ======================================================

function showSuccessModal() {

  document
    .querySelector('#shokolQuizModal')
    ?.remove()

  const modal =
    document.createElement('div')

  modal.id =
    'shokolQuizModal'

  modal.innerHTML = `

    <div class="shokol-quiz-backdrop"></div>

    <div
      class="shokol-quiz-window shokol-success-window"
    >

      <div class="shokol-success-icon">
        ✓
      </div>

      <div class="shokol-quiz-label">
        SHOKOL TAJNÝ BONUS
      </div>

      <h2>
        🎉 Gratulujeme!
      </h2>

      <p class="shokol-success-text">
        Správně!
        Našli jste tajnou výzvu SHOKOL a odpověděli správně.
      </p>

      <div class="shokol-promo-box">

        <span>
          Váš promo kód
        </span>

        <strong>
          DAREK2026
        </strong>

      </div>

      <p class="shokol-success-small">
        Ukažte tento kód při objednávce
        a získejte svůj dárek zdarma.
      </p>

      <button
        type="button"
        class="shokol-quiz-submit"
        id="closeSuccess"
      >
        Zavřít
      </button>

    </div>

  `

  document.body.appendChild(modal)

  document
    .querySelector('#closeSuccess')
    ?.addEventListener(
      'click',
      () => {

        modal.remove()

      }
    )

}


// ======================================================
// WRONG ANSWER
// ======================================================

function showWrongModal() {

  document
    .querySelector('#shokolQuizModal')
    ?.remove()

  const modal =
    document.createElement('div')

  modal.id =
    'shokolQuizModal'

  modal.innerHTML = `

    <div class="shokol-quiz-backdrop"></div>

    <div
      class="shokol-quiz-window shokol-wrong-window"
    >

      <div class="shokol-wrong-icon">
        ×
      </div>

      <div class="shokol-quiz-label">
        SHOKOL TAJNÝ BONUS
      </div>

      <h2>
        Bohužel...
      </h2>

      <p class="shokol-success-text">
        Je nám líto, ale vaše odpověď
        nebyla správná.
      </p>

      <p class="shokol-success-small">
        Tento pokus byl použit.
        Zkuste to znovu po obnovení stránky.
      </p>

      <button
        type="button"
        class="shokol-quiz-submit"
        id="closeWrong"
      >
        Zavřít
      </button>

    </div>

  `

  document.body.appendChild(modal)

  document
    .querySelector('#closeWrong')
    ?.addEventListener(
      'click',
      () => {

        modal.remove()

      }
    )

}


// ======================================================
// OPEN QUIZ
// ======================================================

function openQuiz() {

  if (easterEggUsed) return

  // Один шанс
  easterEggUsed = true

  // Убираем обработчик с фотографии
  photoButton?.removeEventListener(
    'click',
    handlePhotoClick
  )


  // Случайный вопрос
  const randomQuestion =
    czechHistoryQuiz[
    Math.floor(
      Math.random() *
      czechHistoryQuiz.length
    )
    ]


  const modal =
    createQuizModal(
      randomQuestion
    )


  // Закрытие окна
  modal
    .querySelector(
      '.shokol-quiz-close'
    )
    ?.addEventListener(
      'click',
      () => {

        modal.remove()

      }
    )


  // Варианты ответа
  const answers =
    modal.querySelectorAll(
      '.shokol-answer'
    )


  answers.forEach(
    (button) => {

      button.addEventListener(
        'click',
        () => {

          const selected =
            Number(
              button.dataset.answer
            )


          // Заблокировать остальные кнопки
          answers.forEach(
            (item) => {

              item.disabled = true

            }
          )


          // Правильный ответ
          if (
            selected ===
            randomQuestion.correct
          ) {

            button.classList.add(
              'correct'
            )

            setTimeout(
              () => {

                modal.remove()

                startDildoSnow()

                showSuccessModal()

              },
              350
            )

          }

          // Неправильный ответ
          else {

            button.classList.add(
              'wrong'
            )

            setTimeout(
              () => {

                modal.remove()

                showWrongModal()

              },
              350
            )

          }

        }
      )

    }
  )

}


// ======================================================
// PHOTO CLICK
// ======================================================

function handlePhotoClick() {

  openQuiz()

}


// ======================================================
// ATTACH EVENT
// ======================================================

if (photoButton) {

  photoButton.addEventListener(
    'click',
    handlePhotoClick
  )

}

/* =========================================================
   SHOKOL — HERO SOCIAL CARDS
   SCROLL + PREMIUM 3D HOVER
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  const stage = document.getElementById("shokolSocialStage");
  const instagram = document.getElementById("shokolInstagramCard");
  const tiktok = document.getElementById("shokolTikTokCard");
  const followTitle = document.getElementById("shokolFollowTitle");
  const bottomText = document.getElementById("shokolBottomText");

  if (
    !stage ||
    !instagram ||
    !tiktok ||
    !followTitle ||
    !bottomText
  ) {
    return;
  }


  /* =======================================================
     STATE
  ======================================================= */

  let ticking = false;

  let instagramHover = false;
  let tiktokHover = false;


  /* =======================================================
     HELPERS
  ======================================================= */

  const clamp = (value, min, max) => {
    return Math.min(Math.max(value, min), max);
  };


  /* =======================================================
     SCROLL ANIMATION
  ======================================================= */

  const updateSocialCards = () => {

    ticking = false;

    const rect = stage.getBoundingClientRect();

    const viewportHeight = window.innerHeight;


    const progress = clamp(
      (viewportHeight - rect.top) /
      (viewportHeight + rect.height),
      0,
      1
    );


    const centerProgress = clamp(
      (progress - 0.22) / 0.55,
      0,
      1
    );


    const smooth =
      centerProgress *
      centerProgress *
      (3 - 2 * centerProgress);


    /*
      Instagram base position
    */

    const instagramX = -smooth * 22;
    const instagramY = -smooth * 28;

    const instagramRotate = -6 - smooth * 2;


    /*
      TikTok base position
    */

    const tiktokX = smooth * 22;
    const tiktokY = smooth * 25;

    const tiktokRotate = 6 + smooth * 2;


    /*
      Save values on elements.

      Hover animation will use these values
      instead of destroying scroll animation.
    */

    instagram.dataset.x = instagramX;
    instagram.dataset.y = instagramY;
    instagram.dataset.rotate = instagramRotate;

    tiktok.dataset.x = tiktokX;
    tiktok.dataset.y = tiktokY;
    tiktok.dataset.rotate = tiktokRotate;


    /*
      Apply base transform only when
      the card isn't being hovered.
    */

    if (!instagramHover) {

      instagram.style.transform =
        `translate3d(
          ${instagramX}px,
          ${instagramY}px,
          0
        )
        rotate(${instagramRotate}deg)`;

    }


    if (!tiktokHover) {

      tiktok.style.transform =
        `translate3d(
          ${tiktokX}px,
          ${tiktokY}px,
          0
        )
        rotate(${tiktokRotate}deg)`;

    }


    /* =====================================================
       FOLLOW TITLE
    ====================================================== */

    const titleY = -smooth * 35;

    const titleOpacity =
      1 - smooth * 0.25;


    followTitle.style.transform =
      `translate3d(-50%, ${titleY}px, 0)`;

    followTitle.style.opacity =
      titleOpacity;


    /* =====================================================
       BOTTOM TEXT
    ====================================================== */

    const bottomY = smooth * 20;


    bottomText.style.transform =
      `translate3d(-50%, ${bottomY}px, 0)`;


    bottomText.style.opacity =
      0.65 + smooth * 0.35;

  };


  /* =======================================================
     REQUEST ANIMATION FRAME
  ======================================================= */

  const requestUpdate = () => {

    if (!ticking) {

      window.requestAnimationFrame(
        updateSocialCards
      );

      ticking = true;

    }

  };

/* =======================================================
   DESKTOP HOVER ONLY
   На мобильных устройствах hover полностью отключён
   ======================================================= */

const isDesktop = () => window.matchMedia("(min-width: 768px)").matches;


/* =======================================================
   INSTAGRAM HOVER
======================================================= */

instagram.addEventListener("mouseenter", () => {

  // На мобильных ничего не делаем
  if (!isDesktop()) return;

  instagramHover = true;

  const x =
    parseFloat(instagram.dataset.x || 0);

  const y =
    parseFloat(instagram.dataset.y || 0);

  const rotate =
    parseFloat(instagram.dataset.rotate || -6);


  /* Stage 1 — карточка сначала выходит в сторону */

  instagram.style.transform =
    `translate3d(
      ${x - 35}px,
      ${y - 8}px,
      35px
    )
    rotate(${rotate - 2}deg)
    scale(1.025)`;


  /* Stage 2 — затем выходит поверх второй */

  requestAnimationFrame(() => {

    if (!isDesktop()) return;

    instagram.style.transform =
      `translate3d(
        ${x - 50}px,
        ${y - 12}px,
        110px
      )
      rotate(${rotate - 1}deg)
      scale(1.035)`;

  });

});


instagram.addEventListener("mouseleave", () => {

  if (!isDesktop()) return;

  instagramHover = false;

  const x =
    parseFloat(instagram.dataset.x || 0);

  const y =
    parseFloat(instagram.dataset.y || 0);

  const rotate =
    parseFloat(instagram.dataset.rotate || -6);


  instagram.style.transform =
    `translate3d(
      ${x}px,
      ${y}px,
      0
    )
    rotate(${rotate}deg)
    scale(1)`;

});


/* =======================================================
   TIKTOK HOVER
======================================================= */

tiktok.addEventListener("mouseenter", () => {

  // На мобильных ничего не делаем
  if (!isDesktop()) return;

  tiktokHover = true;

  const x =
    parseFloat(tiktok.dataset.x || 0);

  const y =
    parseFloat(tiktok.dataset.y || 0);

  const rotate =
    parseFloat(tiktok.dataset.rotate || 6);


  /* Stage 1 — карточка сначала выходит в сторону */

  tiktok.style.transform =
    `translate3d(
      ${x + 35}px,
      ${y - 8}px,
      35px
    )
    rotate(${rotate + 2}deg)
    scale(1.025)`;


  /* Stage 2 — затем выходит поверх Instagram */

  requestAnimationFrame(() => {

    if (!isDesktop()) return;

    tiktok.style.transform =
      `translate3d(
        ${x + 50}px,
        ${y - 12}px,
        110px
      )
      rotate(${rotate + 1}deg)
      scale(1.035)`;

  });

});


tiktok.addEventListener("mouseleave", () => {

  if (!isDesktop()) return;

  tiktokHover = false;

  const x =
    parseFloat(tiktok.dataset.x || 0);

  const y =
    parseFloat(tiktok.dataset.y || 0);

  const rotate =
    parseFloat(tiktok.dataset.rotate || 6);


  tiktok.style.transform =
    `translate3d(
      ${x}px,
      ${y}px,
      0
    )
    rotate(${rotate}deg)
    scale(1)`;

});

  /* =======================================================
     SCROLL + RESIZE
  ======================================================= */

  window.addEventListener(
    "scroll",
    requestUpdate,
    { passive: true }
  );


  window.addEventListener(
    "resize",
    requestUpdate
  );


  /* =======================================================
     INITIAL STATE
  ======================================================= */

  updateSocialCards();

});




