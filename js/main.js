import { openUploadFormPhoto } from './form.js';
import {loadDataFromServer} from './load-data-from-server.js';
import {applyFilters} from './apply-filters.js';

loadDataFromServer ();

openUploadFormPhoto();
applyFilters();
