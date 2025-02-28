import { openUploadFormPhoto } from './form.js';
import {loadDataFromServer} from './load-data-from-server.js';
import {discussedfilter} from './apply-filters.js';

loadDataFromServer ();
openUploadFormPhoto();
discussedfilter();
