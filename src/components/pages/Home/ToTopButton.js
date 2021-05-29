import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import * as BiIcons from 'react-icons/bi'

const ScrollTop = styled.div``

const ScrollBtn = styled.div`
  position: fixed;
  width: 4.2rem;
  height: 4.2rem;
  border-radius: .5rem;
  background: #777;
  bottom: 10vh;
  right: 0.5rem;
  cursor: pointer;
  animation: scroller .5s ease-in-out both;
  display: flex;
  justify-content: center;

  @keyframes scroller {
      from {
          opacity: 0;
      }
      to {
          opacity: 1;
      }
  }
`

const TopIcon = styled.div`
    margin-top: .5rem;
    font-size: 3rem;
    color: #051B28;
`

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled
    const toggleVisibility = () => {
        if (window.pageYOffset > 250) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // scroll to top smooth
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <>
            <ScrollTop >
                {isVisible && (
                    <ScrollBtn onClick={scrollToTop}>
                        <TopIcon>
                            <BiIcons.BiArrowToTop />
                        </TopIcon>
                    </ScrollBtn>
                )}
            </ScrollTop>
        </>
    );
}
