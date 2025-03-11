import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

const ResumeStep = ({ formData }) => {
  const sections = [
    {
      title: 'Informations du Contact',
      fields: [
        { label: 'Nom du contact', value: formData.nomContact },
        { label: 'Téléphone', value: formData.telephone },
        { label: 'Email', value: formData.email },
      ]
    },
    {
      title: 'Informations de l\'Entreprise',
      fields: [
        { label: 'Société', value: formData.societe },
        { label: 'Type d\'entreprise', value: formData.typeEntreprise },
        { label: 'Registre du commerce', value: formData.registreCommerce },
        { label: 'Identification nationale', value: formData.idNationale },
        { label: 'Numéro d\'impôt', value: formData.numeroImpot },
      ]
    },
    {
      title: 'Coordonnées de l\'Entreprise',
      fields: [
        { label: 'Téléphone', value: formData.telephoneSociete },
        { label: 'Fax', value: formData.fax },
        { label: 'Email', value: formData.emailSociete },
        { label: 'Site internet', value: formData.siteInternet },
        { label: 'Représentant légal', value: formData.representantLegal },
        { label: 'Adresse', value: formData.adresseSociete },
        { label: 'Province', value: formData.province },
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-xl font-semibold text-gray-900">Résumé de la Demande</h2>
        <p className="mt-1 text-sm text-gray-500">
          Vérifiez que toutes les informations sont correctes avant de procéder au paiement
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`bg-white p-6 rounded-lg border border-gray-200 ${
              index === sections.length - 1 ? 'lg:col-span-2' : ''
            }`}
          >
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              {section.title}
            </h3>
            <dl className="grid grid-cols-1 gap-4">
              {section.fields.map((field, fieldIndex) => (
                <div key={fieldIndex} className="flex flex-col">
                  <dt className="text-sm font-medium text-gray-500">{field.label}</dt>
                  <dd className="mt-1 text-sm text-gray-900">{field.value || '-'}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <CheckCircleIcon className="h-5 w-5 text-green-400" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-green-800">
              Demande prête pour le paiement
            </h3>
            <div className="mt-2 text-sm text-green-700">
              <p>
                Toutes les informations requises ont été fournies. Vous pouvez maintenant
                procéder au paiement des frais d'homologation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeStep;
