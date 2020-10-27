import {useState} from 'react';
import {createId} from './lib/createId';

const defaultTags = [
    {id: createId(), name:'Cloth'},
    {id: createId(), name:'Food'},
    {id: createId(), name:'Housing'},
    {id: createId(), name:'Transport'}];

const useTags = () => {
    const [tags, setTags] = useState<{id:number; name:string}[]>(defaultTags);
    const findTag = (id:number) => tags.filter(tag => tag.id === id)[0];
    return {tags, setTags, findTag};
};


export {useTags};
