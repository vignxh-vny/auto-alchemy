import React from 'react';

const steps = ['Choose', 'Contact', 'Schedule', 'Transform'];

export default function Process() {
  return (
    <section>
      <div className="wrap">
        <h2 className="font-head text-[clamp(38px,5vw,60px)] uppercase font-semibold leading-none mb-14 tracking-[0.01em]">
          How it works
        </h2>
        <div className="steps">
          {steps.map((step) => (
            <div key={step}>{step}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

