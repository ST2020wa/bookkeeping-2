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
    const findTagIndex = (id: number) => {
        let result = -1
        for(let i=0; i<tags.length; i++) {
            if(tags[i].id === id) {
                result = i
                break;
            }
        }
        return result;
    }
    const updateTag = (id: number, obj: { name:string }) => {
        //  获取要改的 tag 的下标
        const index = findTagIndex(id);
        //  深拷贝 tags 得到 tagsClone
        const tagsClone = JSON.parse(JSON.stringify(tags));
        //  把 tagsClone 的第 index 删掉，换成 {id:id, name: obj.name}
        tagsClone.splice(index, 1, {id: id, name: obj.name});
        setTags(tagsClone);  //  不可变数据 tags, newTags
    }; //  obj = {name: 2}

    const deleteTag = (id: number) => {
        //  获取要删的 tag 的下标
        const index = findTagIndex(id);
        //  深拷贝 tags 得到 tagsClone
        const tagsClone = JSON.parse(JSON.stringify(tags));
        //  把 tagsClone 的第 index 删掉
        tagsClone.splice(index, 1);
        setTags(tagsClone)

    }

    return {tags, setTags, findTag, updateTag, findTagIndex, deleteTag};
};


export {useTags};
