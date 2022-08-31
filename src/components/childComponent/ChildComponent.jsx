import React from 'react'
import defineProcess from '../../utils/defineProcess';
import stateMachine from '../../utils/stateMachine';
import SomComponent from '../component/SomContentComponent';
import style from "./childComponent..module.css"

export default function ChildComponent({processes}) {
  return (
    <div className = {style.childComponent}>
        {stateMachine(defineProcess(processes), SomComponent)}
    </div>
  )
}
