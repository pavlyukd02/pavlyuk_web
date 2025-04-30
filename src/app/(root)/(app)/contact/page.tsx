import { FORMSPREE_KEY, SOCIALS } from '@/constans/common'
import type { Metadata } from 'next'
import PageTitle from '../components/PageTitle'
import ContactForm from './components/ContactForm'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Contact - Dim Pavlyuk',
  openGraph: {
    title: 'Contact -  Dim Pavlyuk',
    url: '/contact',
  },
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      <PageTitle title="Contact" />
      <div className="flex flex-col lg:flex-row">
        <div className="mb-4 w-full text-center lg:w-[480px] lg:text-left">
          <div className="mb-8">
            <h2 className="mb-3 text-lg font-bold">TEMPORARY ADDRESS</h2>
            <p className="text-sm leading-5">
              Dnipro, Ukraine. <br />
              49081
            </p>
          </div>
          <div className="mb-8">
            <h2 className="mb-3 text-lg font-bold">EMAIL ADDRESS</h2>
            <p className="text-sm leading-5">
              <a href="mailto:pavlyukd02@gmail.com" rel="noopener" className="hover:text-yellow-600">
                pavlyukd02@gmail.com
              </a>
              <br />
           
            </p>
          </div>
          <div className="mb-8">
            <h2 className="mb-3 text-lg font-bold">MESSENGERS</h2>
            <p className="text-sm leading-5">
              
              <br />
              <span>Telegram: </span>
              <a href={SOCIALS.TG} target="_blank" rel="noopener" className="hover:text-yellow-600">
                @thefakeit
              </a>
              <br />
              {/* <span>WhatsAPp: </span>
              <a href={SOCIALS.WA} target="_blank" rel="noopener" className="hover:text-yellow-600">
                + 232 43434
              </a> */}
            </p>
          </div>
        </div>
        <div className="lg:flex-1">
          <ContactForm formspreeKey={FORMSPREE_KEY} />
        </div>
      </div>
    </>
  )
}
