import React, { useState } from 'react';
import Tooltip from '../Tooltip';

const DetailsDemandeStep = () => {
  const [formData, setFormData] = useState({
    natureDemande: 'admission_temporaire',
    finalite: '',
    typeEquipement: 'radioelectrique', 
    type: 'Satellite Modem',
    marque: 'Hughes',
    numeroSerie: '9846528',
    modele: 'HT2000W',
    constructeur: 'Hughes Network Systems (HNS)',
    paysFabrication: 'USA',
    marquageConformite: 'CE, FCC',
    homologationOrigine: 'N/A'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const equipmentInfo = {
    radioelectrique: `Une installation radioélectrique est un système complet comprenant des émetteurs, récepteurs, antennes et autres composants pour la transmission et réception de signaux radio. Exemples:
    • Stations de base
    • Systèmes de radiodiffusion
    • Réseaux sans fil professionnels`,
    mixte: `Un équipement mixte combine les fonctionnalités d'un terminal et d'une installation radioélectrique. Exemples:
    • Stations de travail avec capacités radio intégrées
    • Systèmes de communication hybrides
    • Équipements multifonctions avec composants radio`
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-900">Détails de la demande</h2>
      <p className="text-gray-600">
        Cette application est associée à un équipement, vous pouvez en homologuer d'autres ultérieurement.
      </p>

      {/* Nature de la demande */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">I. Nature de la demande</h3>
        <div className="flex gap-8">
          <label className="flex items-center">
            <input
              type="radio"
              name="natureDemande"
              value="homologation"
              checked={formData.natureDemande === 'homologation'}
              onChange={handleInputChange}
              className="w-4 h-4 text-blue-600"
            />
            <span className="ml-2">Homologation</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="natureDemande"
              value="admission_temporaire"
              checked={formData.natureDemande === 'admission_temporaire'}
              onChange={handleInputChange}
              className="w-4 h-4 text-blue-600"
            />
            <span className="ml-2">Admission temporaire</span>
          </label>
        </div>

        {formData.natureDemande === 'admission_temporaire' && (
          <div>
            <input
              type="text"
              name="finalite"
              value={formData.finalite}
              onChange={handleInputChange}
              placeholder="Finalité de l'admission temporaire*"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        )}
      </div>

      {/* Identification de l'équipement */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">II. Identification de l'équipement</h3>
        
        {/* Equipment Type Selection */}
        <div className="flex gap-8">
          <label className={`
            relative flex items-center p-4 rounded-lg border-2 transition-all cursor-pointer
            ${formData.typeEquipement === 'terminal' 
              ? 'border-blue-600 bg-blue-50' 
              : 'border-gray-200 hover:border-gray-300'
            }
          `}>
            <input
              type="radio"
              name="typeEquipement"
              value="terminal"
              checked={formData.typeEquipement === 'terminal'}
              onChange={handleInputChange}
              className="absolute opacity-0"
            />
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div>
                <span className="font-medium">Equipement terminal</span>
              </div>
            </div>
          </label>

          <label className={`
            relative flex items-center p-4 rounded-lg border-2 transition-all cursor-pointer
            ${formData.typeEquipement === 'radioelectrique' 
              ? 'border-blue-600 bg-blue-50' 
              : 'border-gray-200 hover:border-gray-300'
            }
          `}>
            <input
              type="radio"
              name="typeEquipement"
              value="radioelectrique"
              checked={formData.typeEquipement === 'radioelectrique'}
              onChange={handleInputChange}
              className="absolute opacity-0"
            />
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M12 5.5C15.3137 5.5 18 8.18629 18 11.5M12 1.5C17.5228 1.5 22 5.97715 22 11.5M4 16L8 12M8 12L12 16M8 12L12 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div>
                <span className="font-medium">Installation</span>
                <br />
                <span className="text-blue-600">radioélectrique</span>
              </div>
            </div>
          </label>

          <label className={`
            relative flex items-center p-4 rounded-lg border-2 transition-all cursor-pointer
            ${formData.typeEquipement === 'mixte' 
              ? 'border-blue-600 bg-blue-50' 
              : 'border-gray-200 hover:border-gray-300'
            }
          `}>
            <input
              type="radio"
              name="typeEquipement"
              value="mixte"
              checked={formData.typeEquipement === 'mixte'}
              onChange={handleInputChange}
              className="absolute opacity-0"
            />
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M8 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7H16M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7M8 7H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-medium">Mixte</span>
            </div>
          </label>
        </div>

        {/* Equipment Details Form */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-500 mb-1">Type*</label>
            <input
              type="text"
              name="type"
              value={formData.type}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-500 mb-1">Marque*</label>
            <input
              type="text"
              name="marque"
              value={formData.marque}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-500 mb-1">Numéro de série</label>
            <input
              type="text"
              name="numeroSerie"
              value={formData.numeroSerie}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-500 mb-1">Modèle*</label>
            <input
              type="text"
              name="modele"
              value={formData.modele}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-500 mb-1">Constructeur*</label>
            <input
              type="text"
              name="constructeur"
              value={formData.constructeur}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-500 mb-1">Pays de fabrication*</label>
            <div className="relative">
              <input
                type="text"
                name="paysFabrication"
                value={formData.paysFabrication}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded pr-8"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2">
                <svg className="w-4 h-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-500 mb-1">Marquage de conformité à une norme</label>
            <div className="relative">
              <input
                type="text"
                name="marquageConformite"
                value={formData.marquageConformite}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded pr-8"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2">
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-500 mb-1">Homologation du pays d'origine et/ou autres</label>
            <input
              type="text"
              name="homologationOrigine"
              value={formData.homologationOrigine}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsDemandeStep;
