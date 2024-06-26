
import React from 'react'
import './innovative.css'
import { Link } from 'react-router-dom'
import { FcServices } from 'react-icons/fc'

const services = [
  "We prioritize our clients' needs, offering personalized solutions and a commitment to achieving their legal objectives",
  'Our firm maintains open and clear communication channels, ensuring clients are well-informed throughout the legal process',
  'With specialization in corporate, commercial, and investment law, we offer comprehensive legal services to meet a wide range of client requirements.',
  ' Mustafizur Rahman & Associates boasts a team of highly experienced legal professionals renowned for their deep knowledge and track record of success in various legal domains.',
]

const Innovative = () => {
  const handleClick = () => {
    window.scrollTo(0, 0)
  }

  return (
    <div className='innovative-background1'>
      <h1 className='text-xl pt-10 md:text-3xl font-bold text-amber-500 uppercase md:text-center mb-10 text-center'>
        Who We Are
      </h1>

      <div className='md:flex md:justify-center'>
        <p className='md:w-[700px] text-justify px-3'>
          Mustafizur Rahman & Associates stands out as one of Bangladesh 
          premier lawfirms,providing comprehensive legal services, with a
          distinct focus on corporate, commercial, and investment law expertise.
        </p>
      </div>
      <div className='mt-8 px-2 flex flex-col md:flex-row md:flex-nowrap justify-between'>
        <div className='flex-1 p-4'>
          <h2 className='text-xl'>
            One of the Top Law Firms in Dhaka, Bangladesh Specializing in
            Commercial and Corporate Law
          </h2>
          <p className='mt-4 text-justify'>
            Mustafizur Rahman & Associates is recognized as one of the leading
            law firms in Dhaka, Bangladesh, specializing in corporate and
            commercial law. Their extensive array of legal services encompasses
            Corporate Law, Commercial Documentation, Foreign Direct Investment,
            Labor Laws, Commercial Litigation, Energy Disputes, Taxation,
            Construction Adjudication, and General Litigation. The firm boasts a
            team of seasoned lawyers and consultants who provide comprehensive
            solutions, collaborating closely with Chartered Accountant Firms and
            Tax Advisors to ensure seamless support. Mustafizur Rahman &
            Associates unwavering commitment to understanding and surpassing
            client expectations has been instrumental in its sustained growth
            and success.
          </p>

          <Link to='/contact'>
            <button
              className='get-start-btn px-5 py-4 mt-10 md:px-[30px] md:py-[15px]'
              onClick={handleClick}
            >
              GET STARTED{' '}
            </button>
          </Link>
        </div>
        <div className='flex-1  p-2'>
          <h2 className='text-xl'>
            Some points highlighting why Mustafizur Rahman & Associates is the
            most trusted firm in its field:
          </h2>
          <p className='mt-5 text-center font-semibold'>
            Why Mustafizur Rahman & Associates is the most trusted firm in its
            field?
          </p>

          <div className='mt-4'>
            {services.map((item, index) => (
              <p className='flex mb-3' key={index}>
                <FcServices className='service-icon' />
                <span className='ml-3'>{item} </span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Innovative
