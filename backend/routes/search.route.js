import express from 'express';
import { protectRoute } from '../middleware/protectRoute.js';

import { searchHistory, searchMovies,searchTv,searchPeople, removeFromSearchHistory,ClearHistory } from '../controllers/search.controller.js';

const router = express.Router();

router.get('/movie/:query',protectRoute,searchMovies);
router.get('/tv/:query',protectRoute,searchTv);
router.get('/people/:query',protectRoute,searchPeople);
router.get('/history',protectRoute,searchHistory)
router.get('/removehistory/:id',protectRoute,removeFromSearchHistory)
router.get('/clearhistory',protectRoute,ClearHistory)

export default router;