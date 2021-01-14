import { useFish } from './fish/FishDataProvider.js';
import { FishList } from './fish/FishList.js';
import { TipList } from './tips/TipList.js';
import { useTips } from './tips/TipDataProvider.js';
import { locationData } from './locations/LocationDataProvider.js';
import { locationList } from './locations/LocationList.js'

const allTheFish = useFish()
const allTheTips = useTips()
const allThePlaces = locationData()

FishList();
TipList();
locationList();