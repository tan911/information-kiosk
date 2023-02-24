import Branches from '../models/branches';
import Departments from '../models/departments';
import Colors from '../utils/colors';

export const CATEGORIES = [
  new Branches(
    'b1',
    'EXECUTIVE',
    [Colors.primaryEx, Colors.secondaryEx],
    require('../assets/brachesImages/executive.png')
  ),
  new Branches(
    'b2',
    'LEGISLATIVE',
    [Colors.primaryLeg, Colors.secondaryLeg],
    require('../assets/brachesImages/legislativetype.webp')
  ),
  new Branches(
    'b3',
    'REMOTE OFFICES',
    [Colors.primaryRem, Colors.secondaryRem],
    require('../assets/brachesImages/remote.jpg')
  ),
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
