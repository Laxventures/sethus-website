"use client";

import React, { useState } from 'react';
import { skills } from '../data/skills';

const tabList = Object.keys(skills);

const SkillsTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(tabList[0]);

  return (
    <div className="w-full max-w-xl mx-auto mt-8">
      <div className="flex border-b border-gray-200">
        {tabList.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 text-sm font-medium transition-colors focus:outline-none ${activeTab === tab
                ? 'border-b-2 border-teal-400 text-teal-400'
                : 'text-zinc-800 dark:text-zinc-100 hover:text-teal-500'
              }`}
            type="button"
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="p-6 rounded-b shadow">
        <ul className="list-disc list-inside space-y-1">
          {skills[activeTab].map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillsTabs;