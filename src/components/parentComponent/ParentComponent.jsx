import React, { useState } from 'react'
import ChildComponent from '../childComponent/ChildComponent';
import style from './parentComponent.module.css'


export default function ParentComponent() {
    const [processes, setProcesses] = useState({
        waiting  : false,
        loading  : true,
        confirmed: false,
        error    : false
      });

    // Interface for process changing. There culd be only one condition 
    const changeProcess = (newProcess) => {
    const newState = {
        waiting   : false,
        loading   : false,
        confirmed : false,
        error     : false
    }

    for(let process in newState){
        if(process === newProcess){
        newState[process] = true
        break
        }
    }
    setProcesses(newState)
    }

  return (
    <div className={style.parentComponent}>
        <ChildComponent processes = {processes}/>
        <div className="">

            <button onClick = {() => changeProcess('waiting')}>waiting</button>
            <button onClick = {() => changeProcess('loading')}>loading</button>
            <button onClick = {() => changeProcess('confirmed')}>confirmed</button>
            <button onClick = {() => changeProcess('error')}>error</button>
        </div>
    
    </div>
  )
}
