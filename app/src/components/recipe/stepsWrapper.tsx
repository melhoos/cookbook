import React from 'react';
import Step from '../../models/step.model';

interface Props {
    steps : Step[]
}

const stepItem = (step: Step, i: number) => {
    return (
        <li key={i} className="step-item">
            <span className="step-order">{step.STEP_ORDER}.</span>
            <span>{step.STEP_DESCRIPTION}</span>
        </li>)
}

const StepsWrapper = (props: Props) => {
    const {steps} = props;
    
    return (
        <ol className="step-list">
            {steps.map((step: Step, i: number) => stepItem(step, i))}
        </ol>
    );
}

export default StepsWrapper;
