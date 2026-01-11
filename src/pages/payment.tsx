import Layout from '~/components/layout'
import SEO from '~/components/seo'
import type { ReadonlyRouteComponentProps } from '~/util/readonly-types'
import { useEffect, useState } from 'react'

export const Head = () => <SEO title="Register" />

// documentation for SumUpCard: https://developer.sumup.com/online-payments/checkouts/card-widget

const PaymentPage = (_: ReadonlyRouteComponentProps) => {
  const checkoutParam = new URLSearchParams(window.location.search).get(
    'checkout'
  )
  // ensure safe
  const sanityRegex = /[^a-z0-9-]/g
  const checkoutParamSanitized = checkoutParam
    ? checkoutParam.replaceAll(sanityRegex, '')
    : ''

  const [isScriptLoaded, setIsScriptLoaded] = useState(false)
  const [scriptError, setScriptError] = useState(null)

  useEffect(() => {
    // Create script element to load library
    const script = document.createElement('script')
    script.src = 'https://gateway.sumup.com/gateway/ecom/card/v2/sdk.js'
    script.type = 'text/javascript'
    script.async = true

    // Handle script load success
    const handleLoad = () => {
      console.log('External script loaded!')
      setIsScriptLoaded(true)

      // now we can mount the payment widget
      if (checkoutParamSanitized) {
        // @ts-expect-error
        SumUpCard.mount({
          id: 'sumup-card',
          checkoutId: checkoutParamSanitized,
          onResponse: function (type: any, body: any) {
            console.log('Type', type)
            console.log('Body', body)
          },
        })
      }
    }

    // Handle script load error
    const handleError = () => {
      setScriptError('Failed to load external script.')
    }

    // Attach event listeners
    script.addEventListener('load', handleLoad)
    script.addEventListener('error', handleError)

    // Inject script into the DOM
    document.body.appendChild(script)

    // Cleanup: Remove script and event listeners on unmount
    return () => {
      script.removeEventListener('load', handleLoad)
      script.removeEventListener('error', handleError)
      document.body.removeChild(script)
    }
  }, []) // Empty dependency array: runs once on mount

  if (scriptError) {
    return (
      <Layout>
        <p>Error: {scriptError}</p>
      </Layout>
    )
  } else if (!isScriptLoaded) {
    return (
      <Layout>
        <p>loading...</p>
      </Layout>
    )
  } else if (!checkoutParamSanitized) {
    return (
      <Layout>
        <p>no checkout id provided</p>
      </Layout>
    )
  } else {
    return (
      <Layout>
        <p>Please make your payment here:</p>
        <div id="sumup-card"></div>
        <p>
          Note that processing payments may sometimes take a bit. Do not pay
          multiple times.
        </p>
      </Layout>
    )
  }
}

export default PaymentPage
