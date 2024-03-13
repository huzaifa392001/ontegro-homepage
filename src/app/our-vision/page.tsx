import React from 'react'
import Header from '../components/header/header';
import Content from './PageContent';
import { Footer } from '../components/footer/Footer';

const OurVision = () => {
    return (
        <section className='bg-white snap-y snap-always snap-mandatory'>
            <Header color={true} />
            <section className='px-4 lg:px-0 pt-16 snap-start'>
                <Content ImagePath='/mission.png' title='Vision' description='We are committed to advancing the FM sector in the region with AI and cutting-edge technology. Our focus is on leveraging AI, Machine Learning to enhance customer experiences, ensuring sustainable asset and building management' />
            </section>
            <section className='px-4 lg:px-0 my-10 md:mt-0 snap-start'>
                <Content shouldReverse={true} ImagePath='/our-vision.png' title='Mission' description='Dedicated to driving the UAE’s transformation towards intelligent urban living, we integrate sustainable technology to deliver superior level of facility management' />
            </section>
            <Footer isScrollable={true} />
        </section>
    )
}

export default OurVision;