import React from 'react';
import clsx from 'clsx';
import MotionWrap from './MotionWrap';

interface SectionProps {
  id: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, title, subtitle, children, className }: SectionProps) {
  return (
    <section id={id} className={clsx('py-20', className)}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <MotionWrap>
            <h2 className="text-4xl font-bold text-gray-900 mb-3">{title}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
          </MotionWrap>
        </div>
        {children}
      </div>
    </section>
  );
}