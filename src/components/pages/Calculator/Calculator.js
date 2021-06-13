import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from "styled-components";
import WebFont from 'webfontloader';
import { useTheme } from './theme/useTheme';

import ThemeSelector from './theme/ThemeSelector';

import * as themes from './theme/themeData.json';
import { setToLS } from './theme/storage';

import { TiBackspaceOutline } from 'react-icons/ti'

import {
    CalcSection,
    CalcBody,
    CalcInputs,
    CalcResult,
    ButtonGrid,
    CalcButton
} from './Calculator.elements'

const Calculator = () => {
    const { theme, themeLoaded, getFonts } = useTheme();
    const [selectedTheme, setSelectedTheme] = useState(theme);

    useEffect(() => {
        WebFont.load({
            google: {
                families: getFonts()
            }
        });
    });

    useEffect(() => {
        setSelectedTheme(theme);
    }, [themeLoaded]);

    console.log(themes.default);
    setToLS('all-themes', themes.default);

    const [data, setData] = useState("")
    const [result, setResult] = useState("")
    const [settings, setSettings] = useState("")

    /** Numbers and brackets */
    const calcBtn = (e) => {
        setData(data + e.target.value)
    }

    /* Reset button function */
    const resetBtn = () => [
        setData(""),
        setResult("")
    ]

    /* Backspace button function */
    const calcBackspace = () => {
        setData(data.slice(0, -1))
    }

    /* Equal button function. If comma is used, set result to 3 decimals */
    /* If input cannot be handled return "error" in the result-display */
    const equalBtn = () => {
        try {
            setResult(
                String(eval(data)).length > 3 &&
                    String(eval(data)).includes('.') ?
                    (
                        String(eval(data).toFixed(3))) :
                    String(eval(data))
            )
        }
        catch (err) {
            setResult("error")
        }
    }

    return (
        <>
            {
                themeLoaded && <ThemeProvider theme={selectedTheme}>

                    <ThemeSelector setter={setSelectedTheme} />
                    <CalcSection>
                        <CalcBody>
                            <CalcInputs>{data}</CalcInputs>
                            <CalcResult>{result}</CalcResult>
                            <ButtonGrid>
                                <CalcButton onClick={resetBtn}>AC</CalcButton>
                                <CalcButton className="bracket" onClick={calcBtn} value="(">(</CalcButton>
                                <CalcButton onClick={calcBtn} value=")">)</CalcButton>
                                <CalcButton onClick={e => setData(data + e.target.value)} value="/" style={{ borderRight: "none" }}>/</CalcButton>

                                <CalcButton onClick={calcBtn} value="9">9</CalcButton>
                                <CalcButton onClick={calcBtn} value="8">8</CalcButton>
                                <CalcButton onClick={calcBtn} value="7">7</CalcButton>
                                <CalcButton onClick={e => setData(data + e.target.value)} value="*" style={{ borderRight: "none" }}>&times;</CalcButton>

                                <CalcButton onClick={calcBtn} value="6">6</CalcButton>
                                <CalcButton onClick={calcBtn} value="5">5</CalcButton>
                                <CalcButton onClick={calcBtn} value="4">4</CalcButton>
                                <CalcButton onClick={e => setData(data + e.target.value)} value="-" style={{ borderRight: "none" }}>-</CalcButton>

                                <CalcButton onClick={calcBtn} value="3">3</CalcButton>
                                <CalcButton onClick={calcBtn} value="2">2</CalcButton>
                                <CalcButton onClick={calcBtn} value="1">1</CalcButton>
                                <CalcButton onClick={e => setData(data + e.target.value)} value="+" style={{ borderRight: "none" }}>+</CalcButton>

                                <CalcButton onClick={calcBtn} value=".">.</CalcButton>
                                <CalcButton onClick={calcBtn} value="0">0</CalcButton>
                                <CalcButton className="backspace" onClick={calcBackspace}><TiBackspaceOutline /></CalcButton>
                                <CalcButton className="equals" onClick={equalBtn} value="=" style={{ borderRight: "none" }}>=</CalcButton>
                            </ButtonGrid>
                        </CalcBody>
                    </CalcSection>

                </ThemeProvider>
            }
        </>
    );
}

export default Calculator;