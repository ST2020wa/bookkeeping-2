import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';

const TagsSection = styled.section `
background: #FFFFFF; padding: 12px 16px;
  >ol { margin: 0 -12px;
  > li{
    background: #D9D9D9; border-radius: 18px;
    display:inline-block; padding: 3px 18px;
    font-size: 14px; margin: 8px 6px;
    }
  }
  > button{
    background: none; border: none; padding: 2px 4px;
    border-bottom: 1px solid #333; color: #666;
    margin-top: 8px;
  }
`

const NotesSection = styled.section ``

const CategorySection = styled.section ``

const NumberPadSection = styled.section ``



function Money() {
    return(
        <Layout>
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
                    <input type="text"/>
                </label>
            </NotesSection>
            <CategorySection>
                <ul>
                    <li>outcome</li>
                    <li>income</li>
                </ul>
            </CategorySection>
            <NumberPadSection>
                <div>
                    100
                </div>
                <div>
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
                    <button>OK</button>
                    <button>0</button>
                    <button>.</button>
                </div>
            </NumberPadSection>
        </Layout>
    );
}

export default Money;