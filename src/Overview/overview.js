import React from "react";

const HealthOverview = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-gray-600">Welcome User! Here's your health summary.</p>
        
        <div className="grid grid-cols-3 gap-6 mt-6">
          <div className="p-4 bg-blue-100 rounded-lg text-center">
            <h3 className="text-lg font-semibold">Health Score/Status</h3>
            <p className="text-2xl font-bold text-blue-600">89% (good)</p>
            <p className="text-green-500">(+5%) AI-generated overall health rating</p>
          </div>
          <div className="p-4 bg-green-100 rounded-lg text-center">
            <h3 className="text-lg font-semibold">Recent Health Summary</h3>
            <p className="text-2xl font-bold text-green-600">104</p>
            <p className="text-green-500">(+5%) Latest AI analysis results</p>
          </div>
          <div className="p-4 bg-yellow-100 rounded-lg text-center">
            <h3 className="text-lg font-semibold">Ongoing Medications</h3>
            <p className="text-2xl font-bold text-yellow-600">148</p>
            <p className="text-gray-600">Since Operation Begun</p>
          </div>
        </div>
        
        <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Personal Health Summary</h3>
          <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
            [Chart Placeholder]
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold">Emergency & Quick Actions</h3>
          <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
            <div className="border-b pb-4">
              <h4 className="font-semibold">Kelvin Chris</h4>
              <p className="text-gray-600">kcVrs14@gmail.com</p>
              <p className="text-gray-600">055 524 4002</p>
              <p className="text-gray-600">Estimate Date: <strong>24th May, 2025</strong></p>
              <p className="text-gray-600">City/Town: Pokuase</p>
              <p className="text-gray-600">Service: <strong>Diabetes Follow-up</strong></p>
              <p className="text-gray-600">GHC 50.00</p>
              <p className="text-blue-500 cursor-pointer">Waiting For Analysis From Health Professional</p>
            </div>
            
            <div className="mt-4">
              <h4 className="font-semibold">Kelvin Chris</h4>
              <p className="text-gray-600">kcVrs14@gmail.com</p>
              <p className="text-gray-600">055 524 4002</p>
              <p className="text-gray-600">Service Date: <strong>26th May, 2025</strong></p>
              <p className="text-gray-600">City/Town: Tema</p>
              <p className="text-gray-600">Service: <strong>Diabetes Follow-up</strong></p>
              <p className="text-gray-600">GHC 50.00</p>
              <p className="text-green-500">Health Analysis Received</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthOverview;
