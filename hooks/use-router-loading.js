import { useRouter } from 'next/router';
import {useEffect, useState, createContext} from 'react';

// to create an delay for animation use
// animationDelay, other wise remove this
const animationDelay = 1000

const useRouterLoading = () => {
  const Router = useRouter()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const start = () => {
      // setTimeout(()=>{
        setLoading(true)
      // }, animationDelay)

    }
    const end = () => {
      // setTimeout(()=>{
        setLoading(false)
      // }, animationDelay)
    }
    Router.events.on('routeChangeStart', start)
    Router.events.on('routeChangeComplete', end)
    Router.events.on('routeChangeError', end)
    return () => {
      Router.events.off('routeChangeStart', start)
      Router.events.off('routeChangeComplete', end)
      Router.events.off('routeChangeError', end)
    }
  }, [])
  return loading
}

export default useRouterLoading;