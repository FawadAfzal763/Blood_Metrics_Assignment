import React from 'react';
import sampleData from '../../data/SampleData.json';
import { determineRiskLevel } from '../../utils/HealthRiskUtils';
import { FiAlertTriangle } from 'react-icons/fi';

const HealthRiskSummary = () => {
  const highRiskCount = sampleData.reduce((count, patient) =>
    count + ['a1c', 'ldl', 'vitaminD', 'bloodPressure', 'glucose'].filter((metric) =>
      determineRiskLevel(metric, patient[metric]) === 'high-risk').length
  , 0);


  return (
    <div className="flex items-center space-x-4 bg-white p-4 shadow-lg rounded-lg mt-4">
      <FiAlertTriangle className="text-yellow-500 w-6 h-6"/>
      <div>
        <h3 className="font-semibold">Health Risk Summary</h3>
        <p className="text-sm text-gray-600">High Risk Metrics: {highRiskCount}</p>
      </div>
    </div>
  );
};

export default HealthRiskSummary;