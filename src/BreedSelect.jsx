import React from 'react';
import { Combobox } from '@headlessui/react';

const BreedSelect = ({ breeds, selectedBreed, onBreedChange }) => {
  return (
    <Combobox value={selectedBreed} onChange={onBreedChange}>
      <Combobox.Label className="block text-sm font-medium text-gray-700">Select Dog Breed</Combobox.Label>
      <Combobox.Button className="mt-1 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3">
        {selectedBreed || 'Select a breed'}
      </Combobox.Button>  
      <Combobox.Options className="mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
        {breeds.map((breed) => (
          <Combobox.Option key={breed.id} value={breed.name}>
            {({ active, selected }) => (
              <li
                className={`${
                  active ? 'text-white bg-indigo-600' : 'text-gray-900'
                } cursor-pointer select-none relative px-4 py-2`}
                style={{ backgroundColor: active ? '#6B46C1' : 'white' }}
              >
                {breed.name}
                {selected && (
                  <span
                    className={`${
                      active ? 'text-white' : 'text-indigo-600'
                    } absolute inset-y-0 left-0 flex items-center pl-3`}
                  >
                    ✓
                  </span>
                )}
              </li>
            )}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  );
};

export default BreedSelect;


