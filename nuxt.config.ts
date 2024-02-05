//import { quasar } from "@quasar/vite-plugin";

// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  compilerOptions: {
    isCustomElement: (tag) => tag === "Textareatool",
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/supabase", "nuxt-quasar-ui", "@pinia/nuxt"],
  plugins: [
    "~/plugins/prisma-client.ts",
    // ... other plugins
  ],
  // image: {
  //   dir: "assets/images",
  // },
  quasar: {
    plugins: ["Notify"],
    extras: {
      font: "roboto-font",
      fontIcons: ["fontawesome-v6"],
    },
    sassVariables: "~/assets/styles/quasar.sass",

    components: {
      defaults: {
        QBtn: {
          unelevated: true,
        },
      },
    },
  },
  ssr: true,
  css: ["@quasar/extras/material-icons/material-icons.css", "~/assets/styles/style.css"],
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@use "~/assets/styles/quasar.sass" as *\n',
        },
      },
    },
  },
  runtimeConfig: {
    dbPassword: process.env.DB_PASSWORD,
  },
  app: {
    // layoutTransition: { name: "layout", mode: "out-in" },
    // pageTransition: { name: "page", mode: "out-in" },

    head: {
      title: "DrNow - schedule and consult doctor online",
      charset: "utf-16",
      viewport: "width=500, initial-scale=1",
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        //{ rel: "preconnect", href: "https://fonts.googleapis.com" },
        //{ rel: "preconnect", href: "https://fonts.gstatic.com" },
        //{ rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Roboto+Mono&display=swap" },
      ],
    },
  },
  build: {
    transpile: ["quasar"],
  },
  // vite: {
  //   define: {
  //     "process.env.DEBUG": false,
  //   },
  //   plugins: [quasar({ sassVariables: "assets/styles/quasar.variables.sass" })],
  // },
  // ssr: true,
  supabase: {
    // cookieOptions: {
    //   name: 'test',
    //   maxAge: 60 * 60,
    //   sameSite: 'strict',
    //   secure: false,
    // },
    // clientOptions: {
    //   auth: {
    //     flowType: 'implicit',
    //   },
    // },
    redirect: true,
    redirectOptions: {
      login: "/login",
      callback: "/profile",
      exclude: ["/", "/public/*"],
    },
  },
});
