import { useFish } from './fish/FishDataProvider.js';
import { FishList } from './fish/FishList.js';
import { TipList } from './tips/TipList.js';
import { useTips } from './tips/TipDataProvider.js';

const allTheFish = useFish()
const allTheTips = useTips()

FishList();
TipList();