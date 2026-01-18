import { useState, useCallback } from 'react';
import { INITIAL_BLUEPRINTS, INITIAL_CONTRACTS } from '../data/initialData';

export const useContractStorage = () => {
  const [blueprints, setBlueprints] = useState(INITIAL_BLUEPRINTS);
  const [contracts, setContracts] = useState(INITIAL_CONTRACTS);

  const addBlueprint = useCallback((blueprint) => {
    setBlueprints(prev => [...prev, blueprint]);
  }, []);

  const deleteBlueprint = useCallback((id) => {
    setBlueprints(prev => prev.filter(b => b.id !== id));
  }, []);

  const addContract = useCallback((contract) => {
    setContracts(prev => [...prev, contract]);
  }, []);

  const updateContractStatus = useCallback((contractId, newStatus) => {
    setContracts(prev => 
      prev.map(c => c.id === contractId ? { ...c, status: newStatus } : c)
    );
  }, []);

  const deleteContract = useCallback((id) => {
    setContracts(prev => prev.filter(c => c.id !== id));
  }, []);

  return {
    blueprints,
    contracts,
    addBlueprint,
    deleteBlueprint,
    addContract,
    updateContractStatus,
    deleteContract
  };
};