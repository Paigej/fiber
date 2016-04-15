import refresh from './refresh'
import { loadDataAsync } from './actions'
import {loadRiverDataAsync} from './actions'
  
loadRiverDataAsync()
loadDataAsync()
refresh()
