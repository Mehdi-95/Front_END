import React, { useState } from 'react';
import { CreditCardIcon, BuildingLibraryIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';

const paymentMethods = [
  {
    id: 'card',
    title: 'Carte bancaire',
    description: 'Paiement sécurisé par carte Visa ou Mastercard',
    icon: CreditCardIcon,
    fields: [
      { name: 'cardNumber', label: 'Numéro de carte', type: 'text', placeholder: '1234 5678 9012 3456' },
      { name: 'expiryDate', label: 'Date d\'expiration', type: 'text', placeholder: 'MM/AA' },
      { name: 'cvv', label: 'CVV', type: 'text', placeholder: '123' }
    ]
  },
  {
    id: 'bank',
    title: 'Virement bancaire',
    description: 'Paiement par virement bancaire direct',
    icon: BuildingLibraryIcon,
    fields: []
  },
  {
    id: 'mobile',
    title: 'Mobile Money',
    description: 'Paiement via M-PESA, Orange Money, ou Airtel Money',
    icon: DevicePhoneMobileIcon,
    fields: [
      { name: 'phoneNumber', label: 'Numéro de téléphone', type: 'tel', placeholder: '+243 XX XXX XXXX' }
    ]
  }
];

const PaiementStep = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-xl font-semibold text-gray-900">Paiement des Frais</h2>
        <p className="mt-1 text-sm text-gray-500">
          Choisissez votre méthode de paiement préférée
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className={`relative rounded-lg border p-4 cursor-pointer transition-all ${
              selectedMethod === method.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-300 hover:border-gray-400'
            }`}
            onClick={() => setSelectedMethod(method.id)}
          >
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  type="radio"
                  name="payment-method"
                  className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  checked={selectedMethod === method.id}
                  onChange={() => setSelectedMethod(method.id)}
                />
              </div>
              <div className="ml-3">
                <method.icon className="h-6 w-6 text-gray-400" />
                <label className="font-medium text-gray-900 block mt-2">
                  {method.title}
                </label>
                <p className="text-gray-500 text-sm mt-1">
                  {method.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedMethod && (
        <div className="mt-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Détails du paiement
            </h3>

            <div className="space-y-4">
              {/* Payment Amount */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Frais d'homologation</span>
                  <span className="font-medium">150.00 USD</span>
                </div>
                <div className="flex justify-between items-center text-sm mt-2">
                  <span className="text-gray-500">Frais de dossier</span>
                  <span className="font-medium">25.00 USD</span>
                </div>
                <div className="border-t border-gray-200 mt-3 pt-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Total à payer</span>
                    <span className="text-lg font-bold text-blue-600">175.00 USD</span>
                  </div>
                </div>
              </div>

              {/* Payment Method Fields */}
              {selectedMethod && (
                <div className="grid grid-cols-1 gap-4">
                  {paymentMethods
                    .find((m) => m.id === selectedMethod)
                    ?.fields.map((field, index) => (
                      <div key={index}>
                        <label
                          htmlFor={field.name}
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          name={field.name}
                          id={field.name}
                          placeholder={field.placeholder}
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                          value={formData[field.name] || ''}
                          onChange={handleInputChange}
                        />
                      </div>
                    ))}
                </div>
              )}

              {selectedMethod === 'bank' && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-medium text-blue-800 mb-2">Informations bancaires</h4>
                  <div className="space-y-2 text-sm text-blue-700">
                    <p>Banque: RAWBANK</p>
                    <p>Numéro de compte: 00123456789</p>
                    <p>IBAN: CD12 3456 7890 1234 5678 90</p>
                    <p>SWIFT/BIC: RAWBCDKI</p>
                    <p className="mt-4 text-blue-600">
                      Veuillez inclure votre numéro de demande dans la référence du virement
                    </p>
                  </div>
                </div>
              )}

              <button
                type="button"
                className="w-full mt-6 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                Procéder au paiement
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaiementStep;
