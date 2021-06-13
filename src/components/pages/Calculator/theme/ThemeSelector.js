import React, { useState, useEffect } from "react";
import styled from "styled-components";
import _ from 'lodash';
import { useTheme } from './useTheme';
import { getFromLS } from './storage';
import { FaTimes } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";


const Container = styled.ul`
position: absolute; 
    width: 100%;
    max-width: 1500px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 3rem auto 0;
    padding: 10px;
    border: 3px solid hotpink;
    background: blue;
`;

const Wrapper = styled.li`
    height: 6rem;
    width: 20rem;
    text-align: center;
    border-radius: 4px;
    border: 1px solid #000;
    list-style: none;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: cadetblue;
`;

const ThemedButton = styled.button`
    border: 0;
    display: inline-block;
    padding: 12px 24px;
    font-size: 14px;
    border-radius: 4px;
    margin-top: 5px;
    width: 100%;
    max-width: 10rem;
    cursor: pointer;
`;

const CalcIcon = styled.div`
position: absolute;
  right: 1rem;
  display: flex;
  font-size: 2.6rem;
  color: #fff;
  cursor: pointer;
  background: red;
`;

const SetIcon = styled.div`
position: fixed;
  right: 1rem;
  top: 5rem;
  display: flex;
  font-size: 2.6rem;
  color: #fff;
  cursor: pointer;
  background: green;
`;



export default (props) => {
    const themesFromStore = getFromLS('all-themes');
    const [data, setData] = useState(themesFromStore.data);
    const [themes, setThemes] = useState([]);
    const { setMode } = useTheme();
    const [menu, setMenu] = useState(false)

    const themeSwitcher = selectedTheme => {
        console.log(selectedTheme);
        setMode(selectedTheme);
        props.setter(selectedTheme);
    };

    useEffect(() => {
        setThemes(_.keys(data));
    }, [data]);

    useEffect(() => {
        props.newTheme &&
            updateThemeCard(props.newTheme);
    }, [props.newTheme])

    const updateThemeCard = theme => {
        const key = _.keys(theme)[0];
        const updated = { ...data, [key]: theme[key] };
        setData(updated);
    }

    const handleSettingsClick = () => setMenu(!menu)

    const ThemeCard = props => {
        return (
            <Wrapper style={{
                backgroundColor: `${data[_.camelCase(props.theme.name)].colors.body}`,
                color: `${data[_.camelCase(props.theme.name)].colors.text}`,
                fontFamily: `${data[_.camelCase(props.theme.name)].font}`
            }}>
                <span>Click on the button to set this theme</span>
                <ThemedButton onClick={(theme) => themeSwitcher(props.theme)}
                    style={{
                        backgroundColor: `${data[_.camelCase(props.theme.name)].button.background}`,
                        color: `${data[_.camelCase(props.theme.name)].button.text}`,
                        fontFamily: `${data[_.camelCase(props.theme.name)].font}`
                    }}>
                    {props.theme.name}
                </ThemedButton>
            </Wrapper>
        )
    }

    return (
        <div>
            <SetIcon onClick={handleSettingsClick}>{menu ? <FaTimes /> : <FaDribbble />}</SetIcon>
            <Container style={{ top: menu ? 0 : "-100%", transition: ".7s ease-out" }}>
                <CalcIcon onClick={handleSettingsClick}>
                    {menu ? <FaTimes /> : <FaDribbble />}
                </CalcIcon>
                {
                    themes.length > 0 &&
                    themes.map(theme => (
                        <ThemeCard theme={data[theme]} key={data[theme].id} />
                    ))
                }
            </Container>
        </div>
    )
}