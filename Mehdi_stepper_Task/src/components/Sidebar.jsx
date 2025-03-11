import React, { useState } from 'react';
import {
  ChartBarSquareIcon,
  FolderIcon,
  Cog6ToothIcon,
  KeyIcon,
  ClipboardDocumentListIcon,
  IdentificationIcon,
  HashtagIcon,
  EnvelopeIcon,
  QuestionMarkCircleIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

const menuItems = [
  {
    title: 'Tableau de Bord',
    icon: ChartBarSquareIcon,
    section: null
  },
  {
    title: 'Mes Demandes',
    icon: FolderIcon,
    section: null
  },
  {
    title: 'Télécommunications',
    section: true
  },
  {
    title: 'Licences',
    icon: Cog6ToothIcon,
  },
  {
    title: 'Activités auxiliaires',
    icon: ChartBarSquareIcon,
  },
  {
    title: 'Autorisations',
    icon: KeyIcon,
  },
  {
    title: 'Déclarations',
    icon: ClipboardDocumentListIcon,
  },
  {
    title: 'Homologations',
    icon: IdentificationIcon,
    active: true
  },
  {
    title: 'Numéros et codes',
    icon: HashtagIcon,
  },
  {
    title: 'Poste',
    section: true
  },
  {
    title: 'Autorisations postales',
    icon: EnvelopeIcon,
  },
  {
    title: 'Autres options',
    section: true
  },
  {
    title: 'Tutoriel',
    icon: QuestionMarkCircleIcon,
  },
  {
    title: 'Message au GuiU',
    icon: ChatBubbleLeftRightIcon,
  },
];

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`${
          isCollapsed ? 'w-16' : 'w-64'
        } min-h-screen bg-guiu-dark text-guiu-text transition-all duration-300 ease-in-out fixed md:relative z-50 flex flex-col`}
      >
        {/* Logo Section */}
        <div className="p-3 md:p-4 flex items-center justify-between border-b border-gray-700">
          <div
            className={`flex items-center space-x-2 ${
              isCollapsed ? 'opacity-0 w-0' : ''
            }`}
          >
            <div className="flex flex-wrap w-6 h-6 md:w-8 md:h-8">
              <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full m-0.5"></div>
              <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full m-0.5"></div>
              <div className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full m-0.5"></div>
              <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full m-0.5"></div>
            </div>
            <div>
              <div className="text-white font-bold text-sm md:text-base">GuiU</div>
              <div className="text-xs">GUICHET UNIQUE</div>
            </div>
          </div>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={`text-white w-6 h-6 md:w-8 md:h-8 flex items-center justify-center rounded-full hover:bg-gray-700 transition-all duration-300 ${
              isCollapsed ? 'ml-4' : ''
            }`}
          >
            {isCollapsed ? '»' : '«'}
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 mt-2 md:mt-4 overflow-y-auto">
          {menuItems.map((item, index) =>
            item.section ? (
              <div
                key={index}
                className={`px-3 md:px-4 py-2 text-xs uppercase text-gray-400 ${
                  isCollapsed ? 'hidden' : ''
                }`}
              >
                {item.title}
              </div>
            ) : (
              <button
                key={index}
                className={`w-full px-3 md:px-4 py-2 md:py-3 flex items-center hover:bg-gray-700 transition-colors ${
                  isCollapsed ? 'justify-center' : 'space-x-3'
                } ${item.active ? 'bg-gray-700' : ''}`}
              >
                {item.icon && (
                  <item.icon
                    className={`w-5 h-5 md:w-6 md:h-6 ${item.active ? 'text-white' : 'text-gray-400'} ${isCollapsed ? 'mx-auto' : ''}`}
                  />
                )}
                <span className={`${isCollapsed ? 'hidden' : ''} text-sm md:text-base ${item.active ? 'text-white font-medium' : ''}`}>
                  {item.title}
                </span>
              </button>
            )
          )}
        </nav>
      </div>

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ${isCollapsed ? 'ml-16' : 'ml-64'} md:ml-0`}>
        {/* Your main content goes here */}
      </div>
    </div>
  );
};

export default Sidebar;
