import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';
import {TagsSection} from './Money/TagsSection';
import {NotesSection} from './Money/NotesSection';
import {CategorySection} from './Money/CategorySection';
import {NumberPadSection} from './Money/NumberPadSection';


const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

function Money() {
    return(
        <MyLayout>
            <TagsSection>
                <ol>
                    <li>cloth</li>
                    <li>food</li>
                    <li>housing</li>
                    <li>transport</li>
                </ol>
                <button>
                    create new tag
                </button>
            </TagsSection>
            <NotesSection>
                <label>
                    <span>Notes</span>
                    <input type="text" placeholder="type note here"/>
                </label>
            </NotesSection>
            <CategorySection>
                <ul>
                    <li className="selected">outcome</li>
                    <li>income</li>
                </ul>
            </CategorySection>
            <NumberPadSection>
                <div className="output">
                    100
                </div>
                <div className="pad clearfix">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>Backspace</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>Clear</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button className="ok">OK</button>
                    <button className="zero">0</button>
                    <button>.</button>
                </div>
            </NumberPadSection>
        </MyLayout>
    );
}

export default Money;