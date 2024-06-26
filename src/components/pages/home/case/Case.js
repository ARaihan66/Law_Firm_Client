import React from 'react'
import CaseEvolution from '../../../../assets/caseEvulation.png'
import Flawer from '../../../../assets/findLawer.png'
import CaseLigation from '../../../../assets/caseLigation.png'
import './case.css'
import OneCases from './OneCases'
const Case = () => {
  const cases = [
    {
      pic: CaseEvolution,
      name: 'FREE CASE EVALUATION',
      btnName: 'Learn More',
       to: '/case_evaluation',
    },
    {
      pic: Flawer,
      name: 'FIND A LAWER',
      btnName: 'Get a Lawer',
      to: '/attorney',
    },
    {
      pic: CaseLigation,
      name: 'CORPORATE LIGITATION',
      btnName: 'Learn More',
       to: '/ligitation',
    },
  ]

  return (
    <div className='case-background-img'>
      <div className='flex justify-center flex-wrap p-6'>
        {cases.map((onecase, i) => (
          <OneCases key={i} onecase={onecase} />
        ))}
      </div>
    </div>
  )
}

export default Case
