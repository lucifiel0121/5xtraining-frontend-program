import { createContext } from 'react';
import json from './main/static-data';

const StaticDataContext = createContext([json, () => {}]);

export default StaticDataContext;
