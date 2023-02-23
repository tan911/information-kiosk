import Branches from '../models/branches';
import Departments from '../models/departments';

export const CATEGORIES = [
  new Branches('b1', 'EXECUTIVE'),
  new Branches('b2', 'LEGISLATIVE'),
  new Branches('b3', 'REMOTE OFFICES'),
];

export const DEPARTMENTS = [
  new Departments(
    'd1',
    ['b1'],
    'MICS Deparment',
    'imageMAP',
    'Engr. Jose R. Rizal',
    '021312321313',
    '5th floor'
  ),
  new Departments(
    'd2',
    ['b1'],
    'HELLO Deparment',
    'imageMAP',
    'Engr. Jose R. Rizal',
    '021312321313',
    '5th floor'
  ),
  new Departments(
    'd3',
    ['b2'],
    'Legislative Deparment',
    'imageMAP',
    'Engr. Jose R. Rizal',
    '021312321313',
    '5th floor'
  ),
  new Departments(
    'd4',
    ['b3'],
    'remote Deparment',
    'imageMAP',
    'Engr. Jose R. Rizal',
    '021312321313',
    '5th floor'
  ),
];
