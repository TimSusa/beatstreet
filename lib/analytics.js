export const pageview = (url) => {
    if (window && window.gtag) {
        window.gtag('config', 'G-QX2P5KTSFS', {
            page_path: url,
        })
    }
}

export const event = ({ action, params }) => {
    window.gtag('event', action, params)
}