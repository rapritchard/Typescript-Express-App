/* eslint-disable @typescript-eslint/no-explicit-any */
import { NewDiaryEntry, Weather, Visibility, NewPatientEntry, Gender, Entry } from './types';

const isString = (text: any): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const isWeather = (param: any): param is Weather => {
  return Object.values(Weather).includes(param);
};

const isVisibility = (param: any): param is Visibility => {
  return Object.values(Visibility).includes(param);
};

const isArray = (param: any): param is Array<any> => {
  return Array.isArray(param);
};

const parseVisibility = (visibility: any): Visibility => {
  if (!visibility || !isVisibility(visibility)) {
    throw new Error('Incorrect or missing visibility: ' + visibility);
  }

  return visibility;
};

const parseWeather = (weather: any): Weather => {
  if (!weather || !isWeather(weather)) {
    throw new Error('Incorrect or missing weather: ' + weather);
  }

  return weather;
};

const parseDate = (date: any): string => {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error('Incorrect or missing date: ' + date);
  }

  return date;
};

const parseComment = (comment: any): string => {
  if (!comment || !isString(comment)) {
    throw new Error('Incorrect or missing comment: ' + comment);
  }

  return comment;
};

const parseName = (name: any): string => {
  if (!name || !isString(name)) {
    throw new Error('Incorrect or missing name: ' + name);
  }

  return name;
};

const parseSnn = (ssn: any): string => {
  if (!ssn || !isString(ssn)) {
    throw new Error('Incorrect or missing ssn: ' + ssn);
  }

  return ssn;
};

const isGender = (param: any): param is Gender => {
  return Object.values(Gender).includes(param);
};

const parseGender = (gender: any): Gender => {
  if (!gender || !isGender(gender)) {
    throw new Error('Incorrect or missing gender: ' + gender);
  }

  return gender;
};

const parseOccupation = (occupation: any): string => {
  if (!occupation || !isString(occupation)) {
    throw new Error('Incorrect or missing occupation: ' + occupation);
  }

  return occupation;
};

const parseEntries = (entries: any): Entry[] => {
  if (!entries || !isArray(entries)) {
    throw new Error('Incorrect or missing entries: ' + entries);
  }
  return entries;
};

export const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  return {
    date: parseDate(object.date),
    comment: parseComment(object.comment),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)
  };
};

export const toNewPatientEntry = (object: any): NewPatientEntry => {
  return {
    name: parseName(object.name),
    dateOfBirth: parseDate(object.dateOfBirth),
    ssn: parseSnn(object.ssn),
    gender: parseGender(object.gender),
    occupation: parseOccupation(object.occupation),
    entries: parseEntries(object.entries),
  };
};
