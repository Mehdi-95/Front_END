import React, { useState } from 'react';
import StepButton from './StepButton';
import Generalites from './steps/Generalites';
import DetailsDemandeStep from './steps/DetailsDemandeStep';
import DocumentsStep from './steps/DocumentsStep';
import ResumeStep from './steps/ResumeStep';
import PaiementStep from './steps/PaiementStep';

const steps = [
  { number: 1, title: 'Généralités', component: Generalites },
  { number: 2, title: 'Détails de la demande', component: DetailsDemandeStep },
  { number: 3, title: 'Documents à attacher', component: DocumentsStep },
  { number: 4, title: 'Résumé des informations', component: ResumeStep },
  { number: 5, title: 'Paiement des frais', component: PaiementStep },
];

const Homologations = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    nomContact: 'Nicole Sarman',
    telephone: '+243834373167',
    email: 'guichet.unique@arptc.gouv.cd',
    societe: 'Arptc',
    typeEntreprise: 'SA',
    registreCommerce: '3344544',
    idNationale: '332224',
    numeroImpot: '33453',
    telephoneSociete: '+243834373167',
    fax: '+243834373167',
    emailSociete: 'guichet.uni@arptc.gouv.cd',
    siteInternet: 'https://arptc.gouv.cd',
    representantLegal: 'Christian Katende',
    adresseSociete: 'Kinshasa / Gombe',
    province: 'Kinshasa'
  });

  const handleStepClick = (stepNumber) => {
    if (stepNumber <= currentStep + 1) {
      setCurrentStep(stepNumber);
    }
  };

  const CurrentStepComponent = steps.find(step => step.number === currentStep)?.component;

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8 space-y-4 md:space-y-0">
        <h1 className="text-xl md:text-2xl font-bold text-gray-900">Homologations</h1>
        <div className="flex flex-wrap items-center gap-2 md:gap-4">
          <div className="flex items-center">
            <span className="mr-2 text-sm md:text-base">Français</span>
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <button className="p-1.5 md:p-2 hover:bg-gray-100 rounded-full transition-colors">
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
          <button className="p-1.5 md:p-2 hover:bg-gray-100 rounded-full relative transition-colors">
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute top-1 right-1 w-1.5 h-1.5 md:w-2 md:h-2 bg-red-500 rounded-full"></span>
          </button>
          <button className="flex items-center gap-2 md:gap-3 py-1.5 md:py-2 px-2 md:px-3 rounded-lg hover:bg-gray-100 transition-colors">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden bg-blue-100 flex items-center justify-center">
              <img 
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=Nicole`} 
                alt="Nicole S." 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left">
              <div className="font-medium text-gray-900 text-sm md:text-base">Nicole S.</div>
              <div className="text-xs md:text-sm text-gray-500">Requérant</div>
            </div>
            <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 ml-1 md:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Stepper */}
      <div className="mb-6 md:mb-8 px-2 md:px-4 overflow-x-auto">
        <div className="flex flex-nowrap min-w-max md:min-w-0 items-center">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <StepButton
                number={step.number}
                title={step.title}
                status={
                  step.number < currentStep
                    ? 'completed'
                    : step.number === currentStep
                    ? 'current'
                    : 'upcoming'
                }
                onClick={() => handleStepClick(step.number)}
                className="text-sm md:text-base"
              />
              {index < steps.length - 1 && (
                <div className="w-8 md:w-12 h-px bg-gray-300 mx-2 md:mx-4"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
        <button className="flex items-center text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
          <svg className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Quitter
        </button>
        {CurrentStepComponent && <CurrentStepComponent formData={formData} setFormData={setFormData} />}

        {/* Bottom Buttons */}
        <div className="flex flex-col sm:flex-row justify-between mt-6 md:mt-8 gap-4 sm:gap-0">
          <button 
            className="px-4 py-2 border border-gray-300 rounded text-sm md:text-base hover:bg-gray-50 transition-colors"
            onClick={() => handleStepClick(currentStep - 1)}
            disabled={currentStep === 1}
          >
            Retour
          </button>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded text-sm md:text-base hover:bg-blue-50 transition-colors">
              Sauvegarder
            </button>
            <button 
              className="px-4 py-2 bg-blue-600 text-white rounded text-sm md:text-base hover:bg-blue-700 transition-colors"
              onClick={() => handleStepClick(currentStep + 1)}
              disabled={currentStep === steps.length}
            >
              Suivant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homologations;
