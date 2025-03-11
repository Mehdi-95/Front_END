import React, { useState } from 'react';
import { CloudArrowUpIcon, XCircleIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const requiredDocuments = [
  {
    id: 1,
    name: 'Copie du RCCM',
    description: 'Registre du Commerce et du Crédit Mobilier',
    format: 'PDF, JPG, PNG',
    maxSize: '5 MB'
  },
  {
    id: 2,
    name: 'Identification Nationale',
    description: 'Document d\'identification nationale',
    format: 'PDF, JPG, PNG',
    maxSize: '5 MB'
  },
  {
    id: 3,
    name: 'Numéro d\'Impôt',
    description: 'Attestation fiscale ou numéro d\'impôt',
    format: 'PDF, JPG, PNG',
    maxSize: '5 MB'
  },
  {
    id: 4,
    name: 'Spécifications techniques',
    description: 'Détails techniques de l\'équipement',
    format: 'PDF',
    maxSize: '10 MB'
  }
];

const DocumentsStep = ({ formData, setFormData }) => {
  const [uploadedFiles, setUploadedFiles] = useState({});
  const [draggedOver, setDraggedOver] = useState(null);

  const handleDragOver = (e, id) => {
    e.preventDefault();
    setDraggedOver(id);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDraggedOver(null);
  };

  const handleDrop = (e, id) => {
    e.preventDefault();
    setDraggedOver(null);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileUpload(id, files[0]);
    }
  };

  const handleFileUpload = (id, file) => {
    // Check file size
    const maxSize = id === 4 ? 10 : 5;
    if (file.size > maxSize * 1024 * 1024) {
      alert(`Le fichier est trop volumineux. Taille maximum: ${maxSize}MB`);
      return;
    }

    // Check file type
    const validTypes = ['application/pdf', 'image/jpeg', 'image/png'];
    if (id === 4 && file.type !== 'application/pdf') {
      alert('Seuls les fichiers PDF sont acceptés pour les spécifications techniques');
      return;
    }
    if (!validTypes.includes(file.type)) {
      alert('Format de fichier non valide');
      return;
    }

    setUploadedFiles(prev => ({
      ...prev,
      [id]: file
    }));
  };

  const removeFile = (id) => {
    setUploadedFiles(prev => {
      const newFiles = { ...prev };
      delete newFiles[id];
      return newFiles;
    });
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-xl font-semibold text-gray-900">Documents Requis</h2>
        <p className="mt-1 text-sm text-gray-500">
          Veuillez télécharger tous les documents requis pour votre demande d'homologation
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {requiredDocuments.map((doc) => (
          <div
            key={doc.id}
            className={`border-2 rounded-lg p-4 ${
              draggedOver === doc.id
                ? 'border-blue-400 bg-blue-50'
                : uploadedFiles[doc.id]
                ? 'border-green-400 bg-green-50'
                : 'border-dashed border-gray-300'
            }`}
            onDragOver={(e) => handleDragOver(e, doc.id)}
            onDragLeave={handleDragLeave}
            onDrop={(e) => handleDrop(e, doc.id)}
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-medium text-gray-900">{doc.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{doc.description}</p>
                <div className="flex items-center mt-2 text-xs text-gray-500 space-x-4">
                  <span>Format: {doc.format}</span>
                  <span>Max: {doc.maxSize}</span>
                </div>
              </div>
              {uploadedFiles[doc.id] ? (
                <button
                  onClick={() => removeFile(doc.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <XCircleIcon className="w-6 h-6" />
                </button>
              ) : (
                <CloudArrowUpIcon className="w-6 h-6 text-gray-400" />
              )}
            </div>

            {uploadedFiles[doc.id] ? (
              <div className="mt-3 flex items-center text-sm text-green-600">
                <CheckCircleIcon className="w-5 h-5 mr-2" />
                <span>{uploadedFiles[doc.id].name}</span>
              </div>
            ) : (
              <label className="mt-3 flex justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer">
                <input
                  type="file"
                  className="sr-only"
                  onChange={(e) => handleFileUpload(doc.id, e.target.files[0])}
                  accept={doc.id === 4 ? '.pdf' : '.pdf,.jpg,.jpeg,.png'}
                />
                Choisir un fichier
              </label>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 text-sm text-gray-500">
        <p>Notes importantes:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Tous les documents doivent être clairs et lisibles</li>
          <li>Les documents scannés doivent être de bonne qualité</li>
          <li>Les spécifications techniques doivent être en format PDF uniquement</li>
          <li>Assurez-vous que tous les documents sont à jour</li>
        </ul>
      </div>
    </div>
  );
};

export default DocumentsStep;
