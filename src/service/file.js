import {network} from 'focus';
import {rootURL, fileURL} from '../config.json';
export function loadFileFromUrl(accountId){
  return network.fetch({
    url: `${rootURL}/${accountURL}/${accountId}`,
    method: 'GET'
  });
}

/**
 * Save file from data and url.
 * @param  {object} data  - Data to save.
 * @param  {object} options - Options for the save.
 * @return {Promise} The promise of the save.
 */
export function saveFile(data, options){
  return network.fetch({
    url: `${rootURL}/${fileURL}`,
    method: 'POST'
  });
}
