// Locale
// import { en } from '../../locale'

export const themeConfig = {
    disableCustomizer: false, // options[Boolean] : true, false(default)
    rtl: false, // options[Boolean] : true, false(default)
    verticalSidebarMini: false, // options[Boolean] : true, false(default)
    verticalSidebarDrawer: true, // options[Boolean] : true, false(default)
    verticalCompactSidebarDrawer: true, // options[Boolean] : true, false(default)
    verticalSaasSidebarDrawer: true, // options[Boolean] : true, false(default)
    showBreadcrumb: true, // options[Boolean] : true, false(default)
  
    layout: "VerticalSidebar", //VerticalCompactSidebar,VerticalSaasLayout,VerticalSidebar,HorizontalBar
    isLoading: false,
  
    isDark: false,
    verticalSidebarDrawerColor: "dark", // primary,white,sucsess,warning,etc
    appBarColor: "white" // primary,white,sucsess,warning,etc
  };
  
  export const themePreset = {
    breakpoint: {
      scrollBarWidth: 16,
      thresholds: {
        xs: 600,
        sm: 960,
        md: 1280,
        lg: 1920
      }
    },
    //   icons: {
    //     iconfont: 'mdi',
    //     values: {},
    //   },
    //   lang: {
    //     current: 'en',
    //     locales: { en },nav
    //     t: undefined as any,
    //   },
    rtl: false,
  
    theme: {
      dark: themeConfig.isDark,
  
      default: "light",
      disable: false,
      options: {
        cspNonce: undefined,
        customProperties: true,
        minifyTheme: undefined,
        themeCache: undefined
      },
      themes: {
        light: {
          primary: "#e5bb99",
          secondary: "#93c1ed",
          success: "#b8d8a7",
          danger: "#FF5353",
          warning: "#FFCD4E",
          info: "#5e5ce6",
          dark: "#3E4348",
          black: "#242939",
          white: "#fff",
          background: "#a9dbbd",
          color: "#0F3460",
          grey: "#F8F8FF"
        },
        dark: {
          primary: "#e5bb99",
          secondary: "#93c1ed",
          success: "#b8d8a7",
          danger: "#FF5353",
          warning: "#FFCD4E",
          info: "#5e5ce6",
          dark: "#3E4348",
          white: "#fff",
          background: "#a9dbbd",
          color: "#fff",
          grey: "#F8F8FF"
        }
      }
    }
  };
  