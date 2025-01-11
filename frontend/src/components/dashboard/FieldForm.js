import React, { useState } from 'react';
import { createField } from '../../api/fields';

const FieldForm = ({ onFieldAdded }) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [cropType, setCropType] = useState('');
  const [areaSize, setAreaSize] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newField = await createField({ name, location, cropType, areaSize });
      onFieldAdded(newField);
      setName('');
      setLocation('');
      setCropType('');
      setAreaSize('');
    } catch (error) {
      console.error('Failed to add field:', error);
    }
  };

  return (
    <form className="p-6 bg-gray-100 rounded-lg" onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold mb-4">Add New Field</h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Field Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Location</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Crop Type</label>
        <input
          type="text"
          value={cropType}
          onChange={(e) => setCropType(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Area Size</label>
        <input
          type="text"
          value={areaSize}
          onChange={(e) => setAreaSize(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Add Field
      </button>
    </form>
  );
};

export default FieldForm;