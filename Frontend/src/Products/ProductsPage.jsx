import React from 'react'
import LeftSection from '../Products/LeftSection'
import RightSection from '../Products/RightSection'
import Hero from '../Products/Hero'
import Universe from './Universe'

const ProductsPage = () => {
    return (
        <>
            <Hero />

            <LeftSection
                imageUrl="/kite (1).png"
                productName="Kite"
                productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
                tryDemo=""
                learnMore=""
                googlePlay=""
                appStore=""
            />
            <RightSection
                imageUrl="console.png"
                productName="console"
                productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
                learnMore=""
            />

            <LeftSection
                imageUrl="/coin.png"
                productName="Coin"
                productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
                tryDemo=""
                learnMore=""
                googlePlay=""
                appStore=""
            />

            <RightSection
                imageUrl="kiteconnect.png"
                productName="Kite Connect API"
                productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
                learnMore=""
            />

            <LeftSection
                imageUrl="/varsity (1).png"
                productName="Varsity mobile"
                productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken"
                tryDemo=""
                learnMore=""
                googlePlay=""
                appStore=""
            />
            <p className="mt-5 mb-5 text-center">Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>

            <Universe />
        </>
    )
}

export default ProductsPage