import React from 'react';
import {useTags} from 'hooks/useTags';
import { useParams, useHistory } from "react-router-dom";
import Layout from 'components/Layout';
import Icon from 'components/icon';
import {Button} from 'components/Button';
import styled from 'styled-components';
import {Input} from 'components/Input';
import {Center} from 'components/Center';
import {Space} from 'components/Space';

type Params = {
    id: string
}
const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: #ffffff;
`
const InputWrapper = styled.div`
  background: #ffffff;
  padding: 0 16px;
  margin-top: 8px;
`

const Tag: React.FC = () => {
    const {findTag, updateTag, deleteTag} = useTags()
    let { id:idString } = useParams<Params>();
    const tag = findTag(parseInt(idString));
    const tagContent =(tag: {id:number; name:string})=> (
        <div>
            <InputWrapper>
                <Input label="标签名" type="text" placeholder="tag name"
                       value={tag.name}
                       onChange={(e) => {
                           updateTag(tag.id, {name: e.target.value});
                       }}
                />
            </InputWrapper>
            <Center>
                <Space/>
                <Space/>
                <Space/>
                <Button onClick={() => deleteTag(tag.id)}>删除标签</Button>
            </ Center>
        </div>
    )
    const history = useHistory()
    const onClickBack = () => {
        history.goBack()
    }

        return (
            <Layout>
                <Topbar>
                    <Icon name="left" onClick={onClickBack}/>
                    <span>编辑标签</span>
                    <Icon/>
                </Topbar>
                {tag ?  tagContent(tag) : <Center> Oops! 标签不存在~ </Center>
                }
            </Layout>
        )

        return (
            <div>
                Tag does not exist!
            </div>
        )

}

export {Tag}