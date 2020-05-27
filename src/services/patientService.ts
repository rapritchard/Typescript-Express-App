import { v4 as uuid } from 'uuid';
import patientData from '../../data/patients';

import { NonSensitivePatientEntry, PatientEntry, NewPatientEntry, PublicPatient } from '../types';

const patients: Array<PatientEntry> = patientData;

const getPatients = (): Array<PatientEntry> => {
  return patients;
};

const findById = (id: string): PatientEntry | undefined => {
  const patient = patientData.find((p) => p.id === id);
  return patient;
};

const getNonSensitiveEntries = (): NonSensitivePatientEntry[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation, entries }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
    entries
  }));
};

const addPatient = (entry: NewPatientEntry ): PatientEntry => {
  const newPatientEntry = {
    id: uuid(),
    ...entry
  };

  patients.push(newPatientEntry);
  return newPatientEntry;
};

export default {
  getPatients,
  getNonSensitiveEntries,
  addPatient,
  findById,
};
