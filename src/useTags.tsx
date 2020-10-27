import {useState} from 'react';
import {createId} from './lib/createId';

const useTags = () => {
    const [tags, setTags] = useState<{id:number; name:string}[]>([
        {id: createId(), name:'Cloth'},
        {id: createId(), name:'Food'},
        {id: createId(), name:'Housing'},
        {id: createId(), name:'Transport'}]);
    return {tags, setTags};
};


export {useTags};
