import { useEffect } from "react"

export const useNoScroll = (state) => {
   
  useEffect(() => {
    if (document?.body && (state === true)) {
      const browserWidth = document?.body.offsetWidth;
      document.body.style.overflow = "hidden"
      const browserWidth2 = document?.body.offsetWidth;
      document.body.style.paddingRight = (browserWidth2 - browserWidth) + 'px'
    }
    return (() => {
      if (document?.body) {
        document.body.style.overflow = "auto"
        document.body.style.paddingRight = '0px'
      }
    })
  }, [state])
}