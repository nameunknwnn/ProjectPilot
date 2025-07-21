import React from 'react';
import { CheckCircle, Circle, Clock } from 'lucide-react';
import { Step } from '../types';

interface StepsListProps {
  steps: Step[];
  currentStep: number;
  onStepClick: (stepId: number) => void;
}

export function StepsList({ steps, currentStep, onStepClick }: StepsListProps) {
  return (
    <div className="bg-gray-900/90 rounded-2xl shadow-xl p-5 h-full overflow-auto border border-gray-800 animate-fade-in">
      <h2 className="text-xl font-bold mb-5 text-gray-100 tracking-tight flex items-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
        Build Steps
      </h2>
      <div className="space-y-4">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`p-3 rounded-xl cursor-pointer transition-all duration-200 border flex flex-col gap-1 shadow-sm ${
              currentStep === step.id
                ? 'bg-gray-800/90 border-blue-500 scale-[1.03]' : 'hover:bg-gray-800/70 border-gray-800'
            }`}
            onClick={() => onStepClick(step.id)}
          >
            <div className="flex items-center gap-2">
              {step.status === 'completed' ? (
                <span className="inline-flex items-center gap-1"><CheckCircle className="w-5 h-5 text-green-400" /><span className="text-xs text-green-400 font-semibold">Done</span></span>
              ) : step.status === 'in-progress' ? (
                <span className="inline-flex items-center gap-1"><Clock className="w-5 h-5 text-blue-400 animate-spin-slow" /><span className="text-xs text-blue-400 font-semibold">Active</span></span>
              ) : (
                <span className="inline-flex items-center gap-1"><Circle className="w-5 h-5 text-gray-600" /><span className="text-xs text-gray-400 font-semibold">Pending</span></span>
              )}
              <h3 className="font-medium text-gray-100 text-base">{step.title}</h3>
            </div>
            {step.description && <p className="text-xs text-gray-400 mt-1">{step.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}