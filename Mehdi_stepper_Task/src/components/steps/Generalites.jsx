import React from 'react';

const Generalites = ({ formData }) => {
  return (
    <div className="space-y-6">
      {/* Identification Section */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Identification de la personne en charge du dossier</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nom du contact*
            </label>
            <input
              type="text"
              value={formData.nomContact}
              className="w-full p-2 border border-gray-300 rounded"
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Téléphone du contact*
            </label>
            <input
              type="text"
              value={formData.telephone}
              className="w-full p-2 border border-gray-300 rounded"
              readOnly
            />
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email du contact*
            </label>
            <input
              type="email"
              value={formData.email}
              className="w-full p-2 border border-gray-300 rounded"
              readOnly
            />
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Information d'ordre général</h3>
          <button className="text-blue-600 hover:text-blue-700">
            Modifier les détails
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Société ou raison sociale
            </label>
            <input
              type="text"
              value={formData.societe}
              className="w-full p-2 border border-gray-300 rounded"
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Type d'entreprise
            </label>
            <input
              type="text"
              value={formData.typeEntreprise}
              className="w-full p-2 border border-gray-300 rounded"
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              # Registre de commerce
            </label>
            <input
              type="text"
              value={formData.registreCommerce}
              className="w-full p-2 border border-gray-300 rounded"
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generalites;
