import  { loadFileFromUrl, saveFile } from '../service/file';
import { application } from 'focus';
let actionBuilder = application.actionBuilder;
export function save(id){
  return actionBuilder({
    service: loadAccountById,
    node: 'account',
    status: 'loaded'
  })(id);
}
